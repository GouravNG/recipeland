'use server'
import { getCategoryIdByName } from '@/db/dbFn/categoryFunctions'
import { getImageURL } from '@/db/dbFn/imageFunctions'
import { getUserInfo } from '@/db/dbFn/userFunctions'
import { makePostRequest } from '@/utils/HttpRequests'
import { errorlogger } from '@/utils/logger'
import { createIngredient1, createInstruction1, extractRecifeInformation } from '@/db/dbFn/recipeFunction'

export const addNewRecipeToDatabase = async (formData: FormData) => {
  try {
    const userid = getUserInfo()

    const categoryId = getCategoryIdByName(formData.get('subCategoryName')?.toString()!)

    const imgUrl = getImageURL(`imgFromFormDataGoesHere`)

    const recipeSet = extractRecifeInformation(formData)

    const createRecipeSp = await makePostRequest('/rest/v1/recipe', {
      ...recipeSet,
      main_img: imgUrl,
      category_id: categoryId,
      user_id: userid,
    })

    const recipeId = createRecipeSp[0].id
    if (recipeId) {
      await Promise.all([createIngredient1(recipeId, formData), createInstruction1(recipeId, formData)])
    } else {
      throw new Error('Recipe Id not found !!')
    }
  } catch (e) {
    if (e instanceof Error) errorlogger(e)
    else console.error(e)
  }
}

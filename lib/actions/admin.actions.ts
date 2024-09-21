'use server'
import { getCategoryIdByName } from '@/db/dbFn/categoryFunctions'
import { getImageURL } from '@/db/dbFn/imageFunctions'
import { getUserInfo } from '@/db/dbFn/userFunctions'
import { makePostRequest } from '@/utils/HttpRequests'
import { errorlogger } from '@/utils/logger'
import { createIngredient1, createInstruction1, extractRecifeInformation } from '@/db/dbFn/recipeFunction'
import { postRecipeURL } from '@/api/recipe.api'

export const addNewRecipeToDatabase = async (formData: FormData) => {
  try {
    const [userid, categoryId, imgUrl, recipeSet] = await Promise.all([
      getUserInfo(),
      getCategoryIdByName(formData.get('subCategoryName')?.toString()!),
      getImageURL(`imgFromFormDataGoesHere`),
      extractRecifeInformation(formData),
    ])

    const createRecipeSp = await makePostRequest(postRecipeURL, {
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

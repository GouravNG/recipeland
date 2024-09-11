'use server'

import { ingridientsQueryBuilder, instructionQueryBuilder } from '@/db/createRecipe.db'
import { getCategoryIdByName } from '@/db/dbFn/categoryFunctions'
import { getImageURL } from '@/db/dbFn/imageFunctions'
import {
  createIngredient,
  createInstruction,
  createNewRecipe,
  extractIngredientsInformation,
  extractInstructionInformation,
  extractRecifeInformation,
  valueSetForIngredient,
  valueSetForInstruction,
} from '@/db/dbFn/recipeFunction'
import { getUserInfo } from '@/db/dbFn/userFunctions'
import { UserSet } from '@/types/database.types'
import { errorlogger } from '@/utils/logger'
import { runQueryV2 } from '@/utils/runQuery'

export const adminCustomQuery = async (formData: FormData) => {
  try {
    const response = await runQueryV2<any>(formData.get('myQuery')?.toString()!)
    if (response.status === 'fail') throw new Error(response.errorResponse)
    console.log(JSON.stringify(response.queryResponse))
  } catch (e) {
    console.error(e)
  }
}

export const addNewRecipeToDatabase = async (formData: FormData) => {
  try {
    const userSet: UserSet = getUserInfo(`userIdGoesHere`)

    const categoryId = getCategoryIdByName(formData.get('subCategoryName')?.toString()!)

    const imgUrl = getImageURL(`imgFromFormDataGoesHere`)

    const recipeSet = extractRecifeInformation(formData, imgUrl, categoryId)

    const qRes = await createNewRecipe({ userInfo: userSet, recipeInfo: recipeSet })
    if (qRes.status === 'fail') throw new Error(qRes.errorResponse)

    const recipeId = qRes.queryResponse[0].id
    console.log(recipeId)

    const ingredientsSet = extractIngredientsInformation(formData)

    createIngredient(ingridientsQueryBuilder(valueSetForIngredient(ingredientsSet, recipeId!)))

    const instructionSet = extractInstructionInformation(formData)

    createInstruction(instructionQueryBuilder(valueSetForInstruction(instructionSet, recipeId!)))
  } catch (e) {
    if (e instanceof Error) errorlogger(e)
    else console.error(e)
  }
}

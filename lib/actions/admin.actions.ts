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
import { runQueryV2 } from '@/utils/runQuery'

export const adminCustomQuery = async (formData: FormData) => {
  try {
    const response = await runQueryV2<any>(formData.get('myQuery')?.toString()!)
    if (response.status === 'fail') throw new Error(response.errorResponse)
    console.log(response.queryResponse)
  } catch (e) {
    console.error(e)
  }
}

export const addNewRecipeToDatabase = async (formData: FormData) => {
  // Getting the username
  const userSet: UserSet = getUserInfo(`userIdGoesHere`)

  // Getting the category Informations
  const categoryId = getCategoryIdByName(formData.get('subCategoryName')?.toString()!)

  //Getting the image Informations
  const imgUrl = getImageURL(`imgFromFormDataGoesHere`)

  //getting the recipeinformations
  const recipeSet = extractRecifeInformation(formData, imgUrl, categoryId)

  //create the newRecipe and return the id of recipe created
  const recipeId = await createNewRecipe({ userInfo: userSet, recipeInfo: recipeSet })

  //getting the ingredients informations
  const ingredientsSet = extractIngredientsInformation(formData)

  //add te ingredients to the database
  createIngredient(ingridientsQueryBuilder(valueSetForIngredient(ingredientsSet, recipeId!)))

  //getting the instruction Information
  const instructionSet = extractInstructionInformation(formData)

  //add the instructions to the database
  createInstruction(instructionQueryBuilder(valueSetForInstruction(instructionSet, recipeId!)))
}

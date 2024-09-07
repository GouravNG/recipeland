'use server'

import pool from '@/db/createPool.db'
import { createTableQuery } from '@/db/createTable.query'
import { getCategoryIdByName } from '@/db/dbFn/categoryFunctions'
import { getImageURL } from '@/db/dbFn/imageFunctions'
import {
  createNewRecipe,
  extractIngredientsInformation,
  extractInstructionInformation,
  extractRecifeInformation,
} from '@/db/dbFn/recipeFunction'
import { getUserInfo } from '@/db/dbFn/userFunctions'
import { RecipeSet, UserSet } from '@/types/database.types'
import { createTimeout } from '@/utils/useTimeout'

export const pingDatabase = async () => {
  try {
    const res = await pool.query('SELECT 1')
    if (res.rowCount && res?.rowCount > 0) return
  } catch (error) {
    if (error instanceof Error) throw new Error('Database Connection Failed,: ' + error.message)
    throw new Error('Random unknow Error')
  }
}

export const runQuery = async (formData: FormData) => {
  try {
    await createTimeout(pingDatabase, +process.env.TIMEOUT_MS!)
    const myQuery = formData.get('myQuery') as string
    console.log('Query is', myQuery)
    const queryResponse = await pool.query(myQuery)
    console.log('Query Response is ', JSON.stringify(queryResponse.rows))
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    else console.log('Unknown Error Occurred')
  }
}

export const createTables = () => {
  createTableQuery.map(async (query) => {
    const queryRespose = await pool.query(query)
    console.log(queryRespose.command)
  })
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
  createNewRecipe({ userInfo: userSet, recipeInfo: recipeSet })

  //getting the ingredients informations
  const ingredientsSet = extractIngredientsInformation(formData)

  //getting the instruction Information
  const instructionSet = extractInstructionInformation(formData)
}

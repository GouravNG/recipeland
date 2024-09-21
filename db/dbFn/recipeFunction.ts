import { postIngredientsURL, postInstructionURL } from '@/api/recipe.api'
import { RecipeSet } from '@/types/database.types'
import { makePostRequest } from '@/utils/HttpRequests'

export const extractRecifeInformation = (formData: FormData) => {
  const recipeSet: Partial<RecipeSet> = {
    name: formData.get('recipeName')?.toString()!,
    description: formData.get('imgDesc')?.toString()?.toString(),
    servings: +formData.get('servings')!,
    prep_time: +formData.get('prep_time')!,
    cook_time: +formData.get('cook_time')!,
    main_img_alt: formData.get('mainImageAlt')?.toString(),
  }
  return recipeSet
}

export const extractIngredientsInformation = (formData: FormData, recipeId: string) => {
  //extracting the required part
  const ingred = /_\d+$/
  const tempIngredient: string[] = []
  Array.from(formData.keys()).map((key) => {
    if (ingred.test(key)) {
      tempIngredient.push(key)
    }
  })

  //modifing the required part
  const ingredientsSet: { name: string; quantity: string; recipe_id: string }[] = []
  for (let j = 0; j < tempIngredient.length; j = j + 3) {
    ingredientsSet.push({
      name: formData.get(tempIngredient[j])?.toString()!,
      quantity:
        formData
          .get(tempIngredient[j + 2])
          ?.toString()!
          .concat(formData.get(tempIngredient[j + 1])?.toString()!) ?? '',
      recipe_id: recipeId,
    })
  }
  return ingredientsSet
}

export const extractInstructionInformation = (formData: FormData, recipe_id: string) => {
  //extracting the required part
  const instructionSet: { step_number: number; description: string; recipe_id: string }[] = []
  const instructRegex = /-\d+$/
  const tempInstruction: string[] = []
  Array.from(formData.keys()).map((key) => {
    if (instructRegex.test(key)) {
      tempInstruction.push(key)
    }
  })

  //modifying the required part
  for (let j = 0; j < tempInstruction.length; j++) {
    instructionSet.push({
      step_number: j,
      description: formData.get(tempInstruction[j])?.toString() ?? '',
      recipe_id: recipe_id,
    })
  }
  return instructionSet
}

export const createIngredient1 = async (recipeid: string, formData: FormData) => {
  const body = extractIngredientsInformation(formData, recipeid)
  return await makePostRequest(postIngredientsURL, body)
}

export const createInstruction1 = async (recipeid: string, formData: FormData) => {
  const body = extractInstructionInformation(formData, recipeid)
  return await makePostRequest(postInstructionURL, body)
}

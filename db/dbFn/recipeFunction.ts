import { RecipeSet, UserSet } from '@/types/database.types'
import pool from '../createPool.db'
import { createNewRecipeQueryBuilder } from '../createRecipe.db'
import { runQueryV2 } from '@/utils/runQuery'

export const extractRecifeInformation = (
  formData: FormData,
  imgUrl: string = '/cheese.jpg',
  categoryId: string = 'addOtherCategoryIdHere'
) => {
  const recipeSet: RecipeSet = {
    name: formData.get('recipeName')?.toString()!,
    description: formData.get('imgDesc')?.toString()?.toString(),
    servings: +formData.get('servings')!,
    prep_time: +formData.get('prep_time')!,
    cook_time: +formData.get('cook_time')!,
    main_img: imgUrl,
    main_img_alt: formData.get('mainImageAlt')?.toString(),
    category_id: categoryId,
  }
  return recipeSet
}

export const extractIngredientsInformation = (formData: FormData) => {
  //extracting the required part
  const ingred = /_\d+$/
  const tempIngredient: string[] = []
  Array.from(formData.keys()).map((key) => {
    if (ingred.test(key)) {
      tempIngredient.push(key)
    }
  })

  //modifing the required part
  const ingredientsSet: { ingredientName: string; measurementName: string; quantity: string }[] = []
  for (let j = 0; j < tempIngredient.length; j = j + 3) {
    ingredientsSet.push({
      ingredientName: formData.get(tempIngredient[j]) as string,
      measurementName: formData.get(tempIngredient[j + 1]) as string,
      quantity: formData.get(tempIngredient[j + 2]) as string,
    })
  }
  return ingredientsSet
}

export const extractInstructionInformation = (formData: FormData) => {
  //extracting the required part
  const instructionSet: { stepNo: number; stepDesc: string }[] = []
  const instructRegex = /-\d+$/
  const tempInstruction: string[] = []
  Array.from(formData.keys()).map((key) => {
    if (instructRegex.test(key)) {
      tempInstruction.push(key)
    }
  })

  //modifying the required part
  for (let j = 0; j < tempInstruction.length; j++) {
    instructionSet.push({ stepNo: j, stepDesc: formData.get(tempInstruction[j]) as string })
  }
  return instructionSet
}

export const valueSetForIngredient = (
  ingredientsSet: ReturnType<typeof extractIngredientsInformation>,
  recipeId: string
) => {
  //entiry to the database
  // ('Cream Cheese', '2 cups', (SELECT id FROM Recipe WHERE title = 'Cheesecake')),
  // ('Sugar', '1 cup', (SELECT id FROM Recipe WHERE title = 'Cheesecake')),
  const valueSet: string[] = []
  ingredientsSet.map((i) => {
    return valueSet.push(`('${i.ingredientName}','${i.quantity}${i.measurementName}','${recipeId}')`)
  })
  return valueSet.toString()
}

export const valueSetForInstruction = (
  instructionSet: ReturnType<typeof extractInstructionInformation>,
  recipeId: string
) => {
  // (1, 'Preheat the oven to 350°F (175°C).', (SELECT id FROM Recipe WHERE title = 'Cheesecake')),
  // (2, 'Mix the cream cheese and sugar until smooth.', (SELECT id FROM Recipe WHERE title = 'Cheesecake')
  const valueSet: string[] = []
  instructionSet.map((i) => {
    return valueSet.push(`('${i.stepNo}','${i.stepDesc}','${recipeId}')`)
  })
  return valueSet.toString()
}

export const createNewRecipe = async ({ userInfo, recipeInfo }: { userInfo: UserSet; recipeInfo: RecipeSet }) => {
  const { name, description, preview, servings, prep_time, cook_time, main_img, main_img_alt, category_id } = recipeInfo
  const { userId } = userInfo

  const res = await runQueryV2<{ id: string }>(createNewRecipeQueryBuilder(), [
    name,
    description ?? 'No description Provided',
    preview ?? '',
    servings,
    prep_time,
    cook_time,
    main_img,
    main_img_alt ?? 'Main image of the recipe',
    userId,
    category_id,
  ])
  return res
}

export const createIngredient = async (query: string) => {
  await pool.query(query)
}

export const createInstruction = async (query: string) => {
  await pool.query(query)
}

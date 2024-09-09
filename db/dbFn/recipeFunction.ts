import { RecipeSet, UserSet } from '@/types/database.types'
import pool from '../createPool.db'
import { recipeQueryBuilder } from '../createRecipe.db'

export const extractRecifeInformation = (
  formData: FormData,
  imgUrl: string = '/cheese.jpg',
  categoryId: string = 'addOtherCategoryIdHere'
) => {
  const recipeSet: RecipeSet = {
    recipeName: formData.get('recipeName')?.toString()!,
    recipeDescription: formData.get('imgDesc')?.toString()?.toString()!,
    recipeServings: +formData.get('servings')!,
    recipePrepTime: +formData.get('prep_time')!,
    recipeCookTime: +formData.get('cook_time')!,
    recipeMainImage: imgUrl,
    recipeMainAlt: formData.get('mainImageAlt')?.toString()!,
    recipeCategory_Id: categoryId,
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

export const createNewRecipe = async ({ userInfo, recipeInfo }: { userInfo: UserSet; recipeInfo: RecipeSet }) => {
  try {
    const {
      recipeName,
      recipeDescription,
      recipeServings,
      recipePrepTime,
      recipeCookTime,
      recipeMainImage,
      recipeMainAlt,
      recipeCategory_Id,
    } = recipeInfo

    const { userId } = userInfo
    const res = await pool.query(
      recipeQueryBuilder(
        recipeName,
        recipeDescription,
        recipeServings,
        recipePrepTime,
        recipeCookTime,
        recipeMainImage,
        recipeMainAlt,
        userId,
        recipeCategory_Id
      )
    )
    return '3f2d10f7-d1a9-4fac-99f3-73b0888d3811'
  } catch (error) {
    if (error instanceof Error) {
      console.log('Probelm in creating the recipe' + error.message)
    }
  } finally {
  }
}

export const createIngredient = async (query: string) => {
  await pool.query(query)
}

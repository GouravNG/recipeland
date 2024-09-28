export type MerchData = {
  recipeHierarchy: RecipeCategory[]
}

type RecipeCategory = {
  parentCategory: string
  subCategories: string[]
}

export type ButtonType = {
  name: string
  link: string
}

export type RecipeInfo = {
  recipename: string
  recipemainimage: string
  recipemainimagealt: string
  recipecategory: string
  recipedescription: string
  reciperating: number
}

export type RecipeDetails = {
  recipename: string
  recipemainimage: string
  recipecategory: string
  recipedescription: string
  recipeingredients: string[]
  recipemethod: string[]
  recipesubimages: string[]
}

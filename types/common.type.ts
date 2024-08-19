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
  recipeName: string
  recipeMainImage: string
  recipeMainImageAlt: string
  recipeCategory: string
  recipeDescription: string
  recipeRating: number
}

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

type MerchData = {
  recipeHierarchy: RecipeCategory[]
}

type RecipeCategory = {
  parentCategory: string
  subCategories: string[]
}

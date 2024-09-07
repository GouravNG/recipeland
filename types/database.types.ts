export interface RecipePrimaryInfo {
  recipeName: string
  recipeDescription: string
  recipeMainImage: string
  recipeMainAlt: string
  recipeCategory_Id: string
}

export interface Miscinfo {
  recipeServings: number
  recipePrepTime: number
  recipeCookTime: number
}

export interface UserInfo {
  userId: string
  email: string
  password: string
}

export type RecipeSet = RecipePrimaryInfo & Miscinfo
export type UserSet = Pick<UserInfo, 'userId'>

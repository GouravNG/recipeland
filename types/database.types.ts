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

// export type RecipeSet = RecipePrimaryInfo & Miscinfo
export type UserSet = Pick<UserInfo, 'userId'>

export type RecipeTableResponse = {
  id: string
  name: string
  description?: string
  preview?: string
  servings: number
  prep_time: number
  cook_time: number
  main_img: string
  main_img_alt?: string
  created_at: string
  updated_at: string
  user_id: string
  category_id: string
}

export type RecipeTableInsert = Omit<RecipeTableResponse, 'created_at' | 'updated_at' | 'id'>

export type RecipeSet = Omit<RecipeTableInsert, 'user_id'>

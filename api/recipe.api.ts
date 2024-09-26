const env = process.env.DOMAIN

export const postRecipeURL = `${env}/rest/v1/recipe`
export const postInstructionURL = `${env}/rest/v1/instruction`
export const postIngredientsURL = `${env}/rest/v1/ingredient`
export const getAllRecipes = `${env}/rest/v1/recipe`
export const getAllCategoriesURL = `${env}/rest/v1/rpc/getallrecipecategory`

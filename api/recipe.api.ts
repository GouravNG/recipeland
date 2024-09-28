const env = process.env.DOMAIN

export const postRecipeURL = `${env}/rest/v1/recipe`
export const postInstructionURL = `${env}/rest/v1/instruction`
export const postIngredientsURL = `${env}/rest/v1/ingredient`
export const getAllCategoriesURL = `${env}/rest/v1/rpc/getallrecipecategory`
export const getFeaturedRecipesURL = `${env}/rest/v1/rpc/getFeaturedRecipes`
export const getAllRecipesURL = `${env}/rest/v1/rpc/getallrecipes`
export const getAllRecipesByCategoryNameURL = `${env}/rest/v1/rpc/getallrecipebycategory`
export const fuzzySearchOnRecipe = `${env}/rest/v1/rpc/fuzzysearch2`
export const getRecipeInfoByRecipeNameURL = `${env}/rest/v1/rpc/getfullrecipebyname`

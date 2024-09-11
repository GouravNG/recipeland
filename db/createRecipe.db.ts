export const mainCategoryQueryBuilder = (mainCateg: string, description?: string) => {
  // INSERT INTO Category (name, description, created_at, updated_at)
  // VALUES ('Desserts', 'Sweet treats and baked goods', NOW(), NOW());
  const query = `INSERT INTO rs.Category (name,description) values (${mainCateg},${description});`
  return query
}

export const subCategoryQueryBuilder = (subCateg: string, parentId: string, description?: string) => {
  // INSERT INTO Category (name, description, created_at, updated_at)
  // VALUES ('Desserts', 'Sweet treats and baked goods', NOW(), NOW());
  if (!description) {
    description = 'No description provided'
  }
  const query = `INSERT INTO rs.Category (name,description,parent_id) values (${subCateg},${description},${parentId})`
  return query
}

export const createNewRecipeQueryBuilder = () => {
  return `INSERT INTO rs.Recipe (name, description,preview, servings, prep_time, cook_time, main_img, main_img_alt, user_id, category_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING id`
}

export const ingridientsQueryBuilder = (valueString: string) => {
  // INSERT INTO Ingredient (name, quantity, recipe_id)
  // VALUES
  // ('Cream Cheese', '2 cups', (SELECT id FROM Recipe WHERE title = 'Cheesecake')),
  // ('Sugar', '1 cup', (SELECT id FROM Recipe WHERE title = 'Cheesecake')),

  const query = `INSERT INTO rs.Ingredient (name,quantity,recipe_id) VALUES ${valueString}`
  return query
}

export const instructionQueryBuilder = (valueString: string) => {
  //INSERT INTO Instruction (step_number, description, recipe_id)
  // VALUES
  // (1, 'Preheat the oven to 350°F (175°C).', (SELECT id FROM Recipe WHERE title = 'Cheesecake')),
  // (2, 'Mix the cream cheese and sugar until smooth.', (SELECT id FROM Recipe WHERE title = 'Cheesecake')),
  const query = `INSERT INTO rs.Instruction (step_number, description, recipe_id) VALUES ${valueString}`
  console.log('hello i am your query', query)
  return query
}

export const getRecipeByIdQuery = (recipeId: string) => {
  return `SELECT * from rs.Recipe where id=${recipeId}`
}

export const getRecipeByNameQuery = (recipeName: string) => {
  return `SELCT * from rs.Recipe where name like '%${recipeName}%`
}

/*
INSERT INTO Like (user_id, recipe_id, created_at)
VALUES (
    (SELECT id FROM User WHERE username = 'john_doe'), 
    (SELECT id FROM Recipe WHERE title = 'Cheesecake'), 
    NOW()
    );
    
    -- Inserting into Review
    INSERT INTO Review (user_id, recipe_id, rating, review_text, created_at, updated_at)
    VALUES (
        (SELECT id FROM User WHERE username = 'john_doe'), 
        (SELECT id FROM Recipe WHERE title = 'Cheesecake'), 
        5, 
        'This is the best cheesecake I have ever had!', 
        NOW(), 
    NOW()
);
*/

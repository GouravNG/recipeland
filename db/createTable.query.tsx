const createTable = [
  `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`,
  `CREATE TABLE "User" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);`,
  `CREATE TABLE "Category" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  parent_id UUID REFERENCES "Category"(id) ON DELETE SET NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);`,
  `CREATE TABLE "Recipe" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  servings INTEGER NOT NULL,
  prep_time INTEGER NOT NULL,
  cook_time INTEGER NOT NULL,
  main_img TEXT NOT NULL,
  main_img_alt TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_id UUID NOT NULL REFERENCES "User"(id),
  category_id UUID NOT NULL REFERENCES "Category"(id)
);`,
  `CREATE TABLE "Ingredient" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  quantity VARCHAR(255) NOT NULL,
  recipe_id UUID NOT NULL REFERENCES "Recipe"(id) ON DELETE CASCADE
);
`,
  `CREATE TABLE "RecipeImage" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  image_url TEXT NOT NULL,
  alt_text TEXT,
  recipe_id UUID NOT NULL REFERENCES "Recipe"(id) ON DELETE CASCADE
);`,
  `CREATE TABLE "Instruction" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  step_number INTEGER NOT NULL,
  description TEXT NOT NULL,
  image_id UUID REFERENCES "RecipeImage"(id) ON DELETE SET NULL,
  recipe_id UUID NOT NULL REFERENCES "Recipe"(id) ON DELETE CASCADE
);`,
  `CREATE TABLE "Like" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES "User"(id),
  recipe_id UUID NOT NULL REFERENCES "Recipe"(id),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, recipe_id) -- Ensure a user cannot like the same recipe more than once
);`,
  `
CREATE TABLE "Review" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES "User"(id),
  recipe_id UUID NOT NULL REFERENCES "Recipe"(id),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`,
]

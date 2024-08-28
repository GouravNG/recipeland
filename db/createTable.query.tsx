export const createTableQuery = [
  `CREATE SCHEMA rs;`,
  `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`,
  `CREATE TABLE IF NOT EXISTS rs.User (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);`,
  `CREATE TABLE IF NOT EXISTS rs.Category (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  parent_id UUID REFERENCES rs.Category(id) ON DELETE SET NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);`,
  `CREATE TABLE IF NOT EXISTS rs.Recipe (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  preview TEXT,
  servings INTEGER NOT NULL,
  prep_time INTEGER NOT NULL,
  cook_time INTEGER NOT NULL,
  main_img TEXT NOT NULL,
  main_img_alt TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_id UUID NOT NULL REFERENCES rs.User(id),
  category_id UUID NOT NULL REFERENCES rs.Category(id)
);`,
  `CREATE TABLE IF NOT EXISTS rs.Ingredient (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  quantity VARCHAR(255) NOT NULL,
  recipe_id UUID NOT NULL REFERENCES rs.Recipe(id) ON DELETE CASCADE
);
`,
  `CREATE TABLE IF NOT EXISTS rs.RecipeImage (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  image_url TEXT NOT NULL,
  alt_text TEXT,
  recipe_id UUID NOT NULL REFERENCES rs.Recipe(id) ON DELETE CASCADE
);`,
  `CREATE TABLE IF NOT EXISTS rs.Instruction (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  step_number INTEGER NOT NULL,
  description TEXT NOT NULL,
  image_id UUID REFERENCES rs.RecipeImage(id) ON DELETE SET NULL,
  recipe_id UUID NOT NULL REFERENCES rs.Recipe(id) ON DELETE CASCADE
);`,
  `CREATE TABLE IF NOT EXISTS rs.Like (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES rs.User(id),
  recipe_id UUID NOT NULL REFERENCES rs.Recipe(id),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, recipe_id) 
);`,
  `
CREATE TABLE IF NOT EXISTS rs.Review (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES rs.User(id),
  recipe_id UUID NOT NULL REFERENCES rs.Recipe(id),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`,
]

import pool from './pool.js';

async function allProduct() {
  const SQL = `SELECT * FROM products ORDER BY id`;
  const { rows } = await pool.query(SQL);
  return rows;
}

async function categorySearchProduct(category) {
  const SQL = `
  SELECT * FROM products 
  WHERE category = $1
  ORDER BY id
  `;
  const { rows } = await pool.query(SQL, [category]);
  return rows;
}

async function idSearchProduct(id) {
  const SQL = `SELECT * FROM products WHERE id = $1`;
  const { rows } = await pool.query(SQL, [id]);
  return rows;
}

async function updateProduct(product, id) {
  const { name, amount, category } = product;
  const SQL = `
  UPDATE products
  SET name = $1, amount = $2, category = $3
  WHERE id = $4
  `;
  await pool.query(SQL, [name, amount, category, id]);
}

async function addProduct(product) {
  const { name, amount, category } = product;
  const SQL = `
  INSERT INTO products (name, amount, category)
  VALUES ($1, $2, $3)
  `;
  await pool.query(SQL, [name, amount, category]);
}

async function deleteProduct(id) {
  const SQL = `DELETE FROM products WHERE id = $1`;
  await pool.query(SQL, [id]);
}

async function allCategory() {
  const SQL = `SELECT DISTINCT category FROM products`;
  const { rows } = await pool.query(SQL);
  const categories = rows.map((item) => item.category);
  return categories;
}

async function deleteCategory(category) {
  const SQL = `DELETE from products where category = $1`;
  await pool.query(SQL, [category]);
}

async function addCategory(category) {
  const SQL = `INSERT INTO products (category) VALUES ($1)`;
  await pool.query(SQL, [category]);
}

export default {
  allProduct,
  categorySearchProduct,
  idSearchProduct,
  updateProduct,
  addProduct,
  deleteProduct,
  allCategory,
  deleteCategory,
  addCategory,
};

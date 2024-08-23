import query from '../db/queries.js';

async function homePageGet(req, res) {
  res.render('index', { title: 'MacDonDon Manager Online 2024' });
}

async function productsGet(req, res) {
  try {
    const categories = await query.allCategory();
    let products;
    if (req.query.category) {
      products = await query.categorySearchProduct(req.query.category);
    } else {
      products = await query.allProduct();
    }
    res.render('product', { categories: categories, products: products });
  } catch (error) {
    res.render('error', { error: error });
  }
}

async function updateFormGet(req, res) {
  try {
    const categories = await query.allCategory();
    const [product] = await query.idSearchProduct(req.params.id);
    res.render('updateForm', { categories: categories, product: product });
  } catch (error) {
    res.render('error', { error: error });
  }
}

async function updateFormPost(req, res) {
  try {
    await query.updateProduct(req.body, req.params.id);
    res.redirect('/product');
  } catch (error) {
    res.render('error', { error: error });
  }
}

async function addFormGet(req, res) {
  const categories = await query.allCategory();
  res.render('addForm', { categories: categories });
}

async function addFormPost(req, res) {
  try {
    await query.addProduct(req.body);
    res.redirect('/product');
  } catch (error) {
    res.render('error', { error: error });
  }
}

async function deleteProductPost(req, res) {
  try {
    await query.deleteProduct(req.params.id);
    res.redirect('/product');
  } catch (error) {
    res.render('error', { error: error, message: 'Failed Deleting Product' });
  }
}

async function categoryEditorGet(req, res) {
  try {
    const categories = await query.allCategory();
    res.render('categoryEditor', { categories: categories });
  } catch (error) {
    res.render('error', { error: error });
  }
}

async function deleteCategoryPost(req, res) {
  try {
    await query.deleteCategory(req.body.category);
    res.redirect('/product');
  } catch (error) {
    res.render('error', { error: error });
  }
}

async function addCategoryPost(req, res) {
  try {
    await query.addCategory(req.body.category);
    res.redirect('/product');
  } catch (error) {
    res.render('error', { error: error });
  }
}

export default {
  homePageGet,
  productsGet,
  updateFormGet,
  updateFormPost,
  addFormGet,
  addFormPost,
  deleteProductPost,
  categoryEditorGet,
  deleteCategoryPost,
  addCategoryPost,
};

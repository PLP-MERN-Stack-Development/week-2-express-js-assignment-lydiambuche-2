// Import the products array from the data file
import products from '../data/products.js';
import { NotFoundError, ValidationError } from "../utils/errors.js";
import asyncHandler from '../utils/asyncHandler.js';

export const getProducts = (req, res) => {
  const { category, name, page = 1, limit = 10 } = req.query;

  let filteredProducts = products;

  // Filter by category
if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (name) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Convert page and limit to numbers(pagination)
  const pageNum = Math.max(parseInt(page), 1);
  const limitNum = Math.max(parseInt(limit), 1);

  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = startIndex + limitNum;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  res.status(200).json({
    status: 'success',
    page: pageNum,
    limit: limitNum,
    totalResults: filteredProducts.length,
    data: paginatedProducts,
  });
};

// Get product statistics: count of products by category
export const getProductStats = (req, res) => {
  const stats = {};

  products.forEach(product => {
    const category = product.category || 'Uncategorized';
    if (stats[category]) {
      stats[category]++;
    } else {
      stats[category] = 1;
    }
  });

  res.status(200).json({
    status: 'success',
    data: stats
  });
};


// Get a product by ID
export const getProductById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return next(new NotFoundError('Product not found'));
  }

  res.status(200).json({ status: 'success', data: product });
});

// Update a product
export const updateProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, description, price, category, inStock } = req.body;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return next(new NotFoundError('Product not found'));
  }

  if (name !== undefined) product.name = name;
  if (description !== undefined) product.description = description;
  if (price !== undefined) product.price = price;
  if (category !== undefined) product.category = category;
  if (inStock !== undefined) product.inStock = inStock;

  res.json({ message: 'Product updated successfully', product });
});

// Delete a product
export const deleteProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const index = products.findIndex((p) => p.id === parseInt(id));

  if (index === -1) {
    return next(new NotFoundError('Product not found'));
  }

  products.splice(index, 1);

  res.json({ message: 'Product deleted successfully' });
});

// Create a product
export const createProduct = asyncHandler(async (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || !price) {
    return next(new ValidationError('Name and price are required'));
  }

  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    name,
    description,
    price,
    category,
    inStock,
  };

  products.push(newProduct);

  res.status(201).json({ status: 'success', data: newProduct });
});

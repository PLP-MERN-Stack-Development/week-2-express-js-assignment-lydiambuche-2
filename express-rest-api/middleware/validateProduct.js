const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (
    typeof name !== 'string' ||
    typeof description !== 'string' ||
    typeof price !== 'number' ||
    typeof category !== 'string' ||
    typeof inStock !== 'boolean'
  ) {
    return res.status(400).json({
      message: 'Invalid product data. Ensure all fields are correctly formatted.',
    });
  }

  next(); // Validation passed, continue to the route
};

export default validateProduct;

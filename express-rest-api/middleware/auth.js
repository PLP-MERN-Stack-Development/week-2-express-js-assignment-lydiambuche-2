// Create an authentication middleware that checks for an API key in the request headers
const API_KEY = 'mbuche-secret-api-key'; 

const authenticate = (req, res, next) => {
  const userApiKey = req.headers['x-api-key']; // Look for 'x-api-key' header

  if (userApiKey && userApiKey === API_KEY) {
    next();                                   // Authorized → continue to route handler
  } else {
    res.status(401).json({ message: 'Unauthorized: Invalid or missing API key' });
  }
};

export default authenticate;

import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

//routes
import logger from "./middleware/logger.js";        
import productRouter from './routes/productRouter.js'
import authenticate from './middleware/auth.js'; 
import errorHandler from './middleware/errorHandler.js'; 

//middleware
app.use(express.json());                            
app.use(authenticate);                                   
app.use(logger);                                  

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.use('/api/products', productRouter);

app.use(errorHandler);  // Error handler should always come last


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

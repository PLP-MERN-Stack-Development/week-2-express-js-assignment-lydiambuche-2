#  Express REST API — Product Catalog
## How to Run the Server
Follow these steps to run the Express.js server locally on your machine:

1. Install Node.js
Make sure Node.js is installed on your system.
To check, run
node -v
npm -v
If not installed, download and install from https://nodejs.org/.

2. Clone the Repository
Open a terminal and clone this project:
git clone https://github.com/yourusername/express-rest-api.git
cd express-rest-api

3. Install Dependencies
Install all required packages:
npm install
This installs packages defined in the package.json file.

4. Start the Server
For development (with automatic restarts using nodemon):
npm run dev
Or for normal/production mode:
npm start

5. Access the Server
Once the server is running, open your browser or Postman and go to:
http://localhost:5000/api/products
You should see a JSON response or a message depending on the route.


### 2. Clone the Repository
git clone https://github.com/yourusername/express-rest-api.git
cd express-rest-api



###  API Endpoints
All endpoints are prefixed with:
/api/products

🔹 GET /api/products
Fetch all products. Supports:

      Filtering by category
      Search by name
      Pagination

Query Parameters:
Param	                Description                   	     Example
 
category	        Filter by category                   category=stationery
name	            Search by product name	             name=Notebook
page	            Page number (default 1)	             page=2
limit	            Results per page (default 10)	     limit=5

http codes
GET /api/products?category=stationary&name=pen&page=1&limit=5
🔹 GET /api/products/:id
Get a product by its ID.
GET /api/products/1

🔹 POST /api/products
Create a new product.
🔹 PUT /api/products/:id
Update a product by ID.
http
PUT /api/products/3
🔹 DELETE /api/products/:id
Delete a product by ID.
http
DELETE /api/products/5
🔹 GET /api/products/stats
Get statistics: count of products by category.

##  Headers
Some endpoints may require a custom header like an API key:
http
x-api-key: mbuche-secret-api-key
(Adjust as per your middleware logic.)

📁 Folder Structure
kotlin
Copy code
express-rest-api/
│
├── controller/
│   └── productController.js
├── data/
│   └── products.js
├── middleware/
│   ├── auth.js
│   ├── errorHandler.js
│   └── validateProduct.js
├── routes/
│   └── productRouter.js
├── utils/
│   ├── asyncHandler.js
│   └── errors.js
├── server.js
├── package.json
└── README.md
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json()); //middleware : this will help us to get the data from the client in json form
// app.use(express.urlencoded({ extended: false })); //this will help us to get the data from the client in url encoded form

app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://youssef1497:M9QqWLbMt7EPgkGc@cluster0.8jnbtwj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  ) //i added the Node-API word to the connection string
  .then(() => {
    // console.log("Connected!");
    app.listen(3000, () => {
      //app.listen is a convenience method provided by Express that ultimately calls http.createServer from Node.js
      //   console.log("listening on port 3000");
    });
  })
  .catch((err) => console.log(err));

// app.get("/", (req, res) => {
//req => request from client to server
//res => response from server to client
// res.send("Hello from server changed 3"); //whenever we visit localhost:3000
// we will send this message from server
// });

//🌞🌞 get all products 🌞🌞
// app.get("/api/products/", async (req, res) => {
// try {
//   const products = await Product.find();
//   res.status(200).json(products);
// } catch (error) {
//   res.status(500).json({ message: error.message });
// }
// });

//🌞🌞 add a product 🌞🌞
// app.post("/api/products", async (req, res) => {
// try {
//   // const product = new Product(req.body); //one way
//   // product.save();

//   const product = await Product.create(req.body); //onther way
//   res
//     .status(201)
//     .json({ product: product, message: "Product added successfully" });
// } catch (error) {
//   res.status(500).json({ message: error.message }); //equals to return response()->json(["code"=>500,"message"=>$error->getMessage()]); of laravel
// }
//   console.log(req.body);
//   res.send(req.body); // add app.use(express.json()); in the top for this to work
// });

//🌞🌞 get product by id 🌞🌞
// app.get("/api/products/:id", async (req, res) => {
// try {
//   const product = await Product.findById(req.params.id);
//   res.status(200).json(product);
// } catch (error) {
//   res.status(500).json({ message: error.message });
// }
// });

//🌞🌞 update product by id 🌞🌞
// app.put("/api/products/:id", async (req, res) => {
// try {
//   const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.status(200).json(product);
// } catch (error) {
//   res.status(500).json({ message: error.message });
// }
// });

//🌞🌞 delete product by id 🌞🌞

// app.delete("/api/products/:id", async (req, res) => {
// try {
//   const product = await Product.findOneAndDelete({ _id: req.params.id });

//   if (!product) {
//     res.status(404).json({ message: "Product not found" });
//   }
//   res.status(200).json({ message: "Product deleted successfully" });
// } catch (error) {
//   res.status(500).json({ message: error.message });
// }
// });

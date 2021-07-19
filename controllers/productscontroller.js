
const express = require("express");
const products = require("../model/products");



product_get_all = (req, res) => {
  res.json(products);
};

product_create = (req, res) => {

  products.push(req.body);
  res.json(products);
};
product_put = (req, res) =>{
  productId = String(req.params.id);
const finder = products.find((product) => product.id === productId);
if(!finder){
 res.status(500).send('Product not found.');
}else{
 finder.name = req.body.name;
 finder.description = req.body.description;
 finder.image = req.body.image;
 finder.price = req.body.price;
 res.json(products);
}
};
product_delete = (req, res) =>{
  productId = String(req.params.id);
const finder = products.find((product) => product.id === productId);
if(!finder){
  res.status(500).send('Product not found.');
}
updatedproducts = products.filter(product => product.id !== productId);
res.json(updatedproducts);
 };

 product_get = (req, res) => {
  const productId = String(req.params.id);
  const getproduct = products.find((product) => product.id === productId);
   if (!getproduct) {
       res.status(500).send('Product not found.');
     } else {
       res.json(getproduct);
     }
};

product_create = (req, res) => {

  products.push(req.body);
  res.json(products);
};
module.exports = {product_put, product_delete,  product_get, product_create, product_get_all};
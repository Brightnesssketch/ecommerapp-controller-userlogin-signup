const express = require("express");
const controller = require("../controllers/productscontroller");
const router = express.Router();

router.get("/", controller.product_get_all);
router.get("/products/:id", controller.product_get );
router.put('/products/:id',controller.product_put);
router.post('/products/create/', controller.product_create );
router.delete("/products/:id",  controller.product_delete );

module.exports = router;
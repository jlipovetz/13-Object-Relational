const router = require("express").Router();
const { Category, Product } = require("../../models");



// GET all records
router.get("/", async (req, res) => {
    try {
        const payload = await Category.findAll({
            include: [
                {
                    model: Product,
                    attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
                }
            ]
        });
        res.status(200).json({ status: "success", payload });
    } catch (err) {
        res.status(500).json({ status: "error", payload: err.message });
    }
});


// GET one record by primary key
router.get("/:id", async (req, res) => {
    try {
        const payload = await Category.findByPk(req.params.id, {
            include: [
                {
                    model: Product,
                    attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
                }
            ]
        });
        
            
        res.status(200).json({ status: "success", payload });
    } catch (err) {
        res.status(500).json({ status: "error", payload: err.message });
    }
});


// Create a new record
router.post("/", async (req, res) => {
    try {
        const payload = await Category.create(req.body);
        res.status(200).json({ status: "success", payload });
    } catch (err) {
        res.status(500).json({ status: "error", payload: err.message });
    }
});


// Update a record
router.put("/:id", async (req, res) => {
    try {
        const payload = await Category.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json({ status: "success", payload });
    } catch (err) {
        res.status(500).json({ status: "error", payload: err.message });
    }
});


// Delete a record
router.delete("/:id", async (req, res) => {
    try {
        const payload = await Category.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "error", payload: err.message });
    }
});


module.exports = router;

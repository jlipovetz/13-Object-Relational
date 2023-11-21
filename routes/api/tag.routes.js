const router = require("express").Router();
const { Product, Tag, Category, ProductTag } = require('../../models');


// GET all records
router.get("/", async (req, res) => {
    try {
        const dbProduct = await Tag.findAll({
            include: [
                {
                    model: Product,
                    through: {
                        attributes: ['id', "product_id", "tag_id"],
                    },
                    as: 'products'
                }
            ]
        });

        res.status(200).json({ status: "success", dbProduct });
    } catch (err) {
        res.status(500).json({ status: "error", dbProduct: err.message });
    }
});


// GET one record by primary key
router.get("/:id", async (req, res) => {
    try {
        const payload = await Tag.findByPk(req.params.id, {
            include: [
                {
                    model: Product,
                    through: {
                        attributes: ['id', "product_id", "tag_id"],
                    },
                    as: 'products'
                }
            ]
        });
        res.status(200).json({ status: "success", payload });
    } catch (err) {
        res.status(500).json({ status: "error", payload: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const payload = await Tag.create(req.body);
        res.status(200).json({ status: "success", payload });
    } catch (err) {
        res.status(500).json({ status: "error", payload: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const payload = await Tag.update(
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

router.delete("/:id", async (req, res) => {
    try {
        const payload = await Tag.destroy({
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
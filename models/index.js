const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag')

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
    through: {
      model: ProductTag,
      unique: false
    },
    as: "tags"
});
  
Tag.belongsToMany(Product, {
    through: {
      model: ProductTag,
      unique: false
    },
    as: "products"
});



module.exports = { Category, Tag, Product, ProductTag}; 
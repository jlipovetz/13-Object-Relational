const sequelize = require('../config/connection');
const { Category, Tag, Product, ProductTag } = require('../models');

const categorySeedData = require('./categorySeedData.json');
const tagSeedData = require('./tagSeedData.json');
const productSeedData = require('./productSeedData.json');
const productTagSeedData = require('./productTagSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categorySeedData);
  await Product.bulkCreate(productSeedData);
  await Tag.bulkCreate(tagSeedData);
  await ProductTag.bulkCreate(productTagSeedData);


  process.exit(0);
};

seedDatabase();

const { Category } = require('../models');

const CategoryData = [
  {
    Category: 'Shirts',
  },
  {
    Category: 'Shorts',
  },
  {
    Category: 'Music',
  },
  {
    Category: 'Hats',
  },
  {
    Category: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(CategoryData);

module.exports = seedCategories;

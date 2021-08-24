const { Category } = require('../models');

const categoryData = [
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

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

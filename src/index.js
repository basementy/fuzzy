const fuzzy = require('./fuzzy.js');

const articles = [
  {
    title: '2014 Javascript MVC Frameworks Comparison',
    author: 'Guybrush Treepwood'
  }, {
    title: 'Javascript in the year 2014',
    author: 'Herman Toothrot'
  },
  {
    title: 'Javascript in the year 2013',
    author: 'Rapp Scallion'
  }
];

const searchByTitle = fuzzy(articles, 'title');

searchByTitle('javascript 2014');

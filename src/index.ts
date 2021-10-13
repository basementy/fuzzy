import { fuzzy } from './fuzzy';

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

/** Invoca uma função reutilizavél que retorna outra baseada na lista e propriedade de busca */
const searchByTitle = fuzzy(articles, 'title');

/** Utiliza a função retornada para realizar as buscas */
const searchedResult = searchByTitle('javascript 2014');

console.log(searchedResult);

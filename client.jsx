const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WordBook = require('./WordBook');

const Hot = hot(WordBook);

ReactDom.render(<Hot />, document.querySelector('#root'));
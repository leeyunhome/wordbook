const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WordBook = require('./WordBook');
const WordImage = require('./WordImage');

const Hot = hot(WordBook);
const Hot2 = hot(WordImage);

ReactDom.render(<><Hot /><Hot /><Hot /><Hot2 /></>, document.querySelector('#root'));
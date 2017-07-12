import registerServiceWorker from './registerServiceWorker';
import Main from './Main';

var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');


ReactDOM.render(<Main/>, document.getElementById('root'));
registerServiceWorker();

import React from './src/lib/react.js';
import ReactDom from './src/lib/react-dom.js';
import App from './src/App.js';

ReactDom.render(React.createElement(App, null), document.getElementById('root'))


import React from './lib/react.js';
import RenderPage from './components/pages/RenderPage.js'


const App = () => {
    return (
        React.createElement('div', { id: 'container' },
            React.createElement('header', null, React.createElement('h3', null, 'This is a simple react app that renders to you DOM elements that you provide in the form with its props and children'),
                React.createElement('p', null, "PS: for now children can only be text")),
            React.createElement(RenderPage)
        )

    )
}

export default App 
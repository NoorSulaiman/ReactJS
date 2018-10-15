import React from './lib/react.js';
import RenderPage from './components/pages/RenderPage.js'


const App = () => {
    return (
        React.createElement('div', null,
            React.createElement(RenderPage)
        )

    )
}

export default App 
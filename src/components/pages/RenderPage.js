import React, { Component } from '../../lib/react.js';
import ReactForm from '../forms/ReactForm.js';

class RenderPage extends Component {
    constructor() {
        super()

        this.state = { data: [] }

        this.submit = (data) => {
            const newArray = []
            newArray.push(...this.state.data, data)
            this.setState({ data: newArray })
        }


    }

    render() {
        return (

            React.createElement('div', null, React.createElement(ReactForm, { submit: this.submit }),
                ...this.state.data.map(item =>
                    React.createElement(item.tagName, { [item.propName]: item.propValue }, item.children)
                )
            )

        );
    }
}

export default RenderPage;
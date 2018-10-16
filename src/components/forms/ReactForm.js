import React, { Component } from '../../lib/react.js';

class ReactForm extends Component {

    constructor(props) {
        super();

        this.state = {
            data: {
                tagName: "",
                propName: null,
                propValue: null,
                children: ""


            }
        }

        this.props = props;

        this.onChange = e =>
            this.setState({
                ...this.state,
                data: { ...this.state.data, [e.target.name]: e.target.value }
            });

        this.onSubmit = e => {
            e.preventDefault();
            if (this.state.data.tagName) {
                this.props.submit(this.state.data)
            }


        };
    }


    render() {
        const { data } = this.state;
        return (
            React.createElement('form', { onSubmit: this.onSubmit, id: 'form' },
                React.createElement('input', {
                    type: 'text',
                    id: "tagName",
                    name: "tagName",
                    placeholder: "tagName",
                    value: data.tagName,
                    onChange: this.onChange
                }),
                React.createElement('input', {
                    type: 'text',
                    id: "propName",
                    name: "propName",
                    placeholder: "propName",
                    value: data.propName,
                    onChange: this.onChange
                }),
                React.createElement('input', {
                    type: 'text',
                    id: "propValue",
                    name: "propValue",
                    placeholder: "propValue",
                    value: data.propValue,
                    onChange: this.onChange
                }),
                React.createElement('input', {
                    type: 'text',
                    id: "children",
                    name: "children",
                    placeholder: "children",
                    value: data.children,
                    onChange: this.onChange
                }),
                React.createElement('input', {
                    id: 'submit',
                    type: 'submit',
                    value: "Render",
                }),

            )
        );
    }
}

export default ReactForm;


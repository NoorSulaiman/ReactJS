//React Component class
export class Component {
    constructor(props, updater) {
        this.props = props;
        this.updater = updater;
    }

    setState(state) {
        this.state = Object.assign(...state, state);
        this.updater(this);
    }
}

// this function will return "virtual dom node element"

export function createElement(nodeName, props, ...children) {
    return { nodeName, props, children }
}
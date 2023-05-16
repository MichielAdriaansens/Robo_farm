import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <p className="red tc mv7 fw9">Something went wrong! cannot load component.</p>
        }
        return this.props.children;
    };
}

export default ErrorBoundry;
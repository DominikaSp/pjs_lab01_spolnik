import React, { Component } from "react";

class CContents extends Component {
    constructor() {
        super()
        this.state = { msg: 'Witah użytwkoniku. Kliknij przycisk aby poznać wiadomość' }
    }

    changeMsg() {
        this.setState({ msg: 'Właśnie jesteś uczestnikiem lab React, gratulacje' });
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.changeMsg()}>
                    Kliknij, aby poznac tajemnices
                </button>
            </div>
        )
    }
}

export default CContents;
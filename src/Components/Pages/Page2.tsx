import { Component, ReactNode } from "react";

interface Page2State
{
    btnName: string;
}

export class Page2 extends Component<{},Page2State> {
    constructor(props: {}) {
        super(props);

			// в конструкторе заполняем его
        this.state = {btnName: ''};
    } 

    css = {
        padding: '10px',
        border: '5px solid blue'
    };

    btnClick2 = () =>{
        this.setState({btnName: 'кликнутое'})
    }

    render(): ReactNode {
        const date = new Date() + '';

        return <div style={this.css} onClick={this.btnClick2}>Это страница 2, {this.state.btnName}</div>
    }
    
};

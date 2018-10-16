import React, { Component } from 'react'
import Button from '../src/index'
import './index.scss'

export default class App extends Component {

    constructor(args, context){
        super(args);

        this.state = {
            content: 'Click and change color 😜',
            disabled: true,
            href: '/test/url'
        }

        this.handleAc = this.handleAc.bind(this);
    }

    handleAc() {
        this.setState({
            styles: this.state.styles ? '' : 'active'
        })
    }


    render() {
        return (
            <section className="container">
                <Button {...this.state} handle={this.handleAc} />
            </section>
        )
    }
}

import React, { Component } from 'react'
import Button from '../dist/index'
import './index.scss'

export default class App extends Component {

    constructor(args, context) {
        super(args);

        this.state = {
            disabled: false
        }

        this.handleAc = this.handleAc.bind(this);
    }

    handleAc() {
        this.setState({ disabled: true });

        console.log('clicked!');

        setTimeout(() => {
            this.setState({ disabled: false });
        }, 1000);
    }


    render() {
        return (
            <section className="container">
                <div className="container">
                    <Button
                        content="吸底按钮"
                        position="fixed"
                        handle={this.handleAc}
                        {...this.state} />

                    <Button
                        content="默认按钮样式" />

                    <Button
                        content="白底蓝字小按钮"
                        type="white-blue"
                        size="small" />

                    <Button
                        content="带子元素蓝底白字按钮"
                        type="blue-white" >
                        <a href="http://www.baidu.com">百度一下</a>
                    </Button>

                    <Button
                        content="白底灰字极小按钮"
                        type="white-grey"
                        size="tiny" />

                    <Button
                        content="disabled按钮"
                        disabled />

                    <Button
                        content="自定义警告按钮"
                        className="warn"
                        customClass="black" />

                    <Button
                        content="点击按钮跳转页面"
                        href="http://www.bj.58.com" />

                </div>
            </section>
        )
    }
}

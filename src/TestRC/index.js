import React, { Component } from "react";
import { Line, Circle } from "rc-progress";
export default class TestRC extends Component {
    constructor() {
        super();
        this.state = {
            percentage: 10
        };
    }
    decrease = () => {
        const percent = this.state.percentage - 1;
        if (percent < 0) {
            cancelAnimationFrame(this.tm);
            this.setState({
                percentage: 0
            });
            return;
        }
        this.setState({ percentage: percent });
        this.tm = requestAnimationFrame(this.decrease);
    };
    reset = () => {
        this.setState({
            percentage: 15
        });
    };
    render() {
        return (
            <div
                style={{
                    position: "relative",
                    left: "300px",
                    width: "230px",
                    height: "300px"
                }}
            >
                <button onClick={this.decrease}>decrease</button>
                <button onClick={this.reset}>reset</button>
                <Circle
                    percent={this.state.percentage}
                    strokeWidth="4"
                    strokeColor="#D3D3D3"
                />
            </div>
        );
    }
}

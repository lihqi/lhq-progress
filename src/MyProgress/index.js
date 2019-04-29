import React, { Component } from "react";
import linear from "./images/gen.svg";
import './index.css'
export class Progress extends Component {
    render() {
        const {
            // 百分比	number	默认值 0
            percent = 0,
            // 进度条线的宽度，单位 px number 默认值 10
            strokeWidth = 10
        } = this.props;
        let styleObj = {
            width: `${percent}%`,
            height: `${strokeWidth}px`,
            backgroundImage: `url(${linear})`
        };
        return (
            <div className="progress-line">
                <div className="progress-inner">
                    <div className="progress-bg" style={styleObj}>
                        <div className="circle-outer">
                            <div className="circle-inner" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

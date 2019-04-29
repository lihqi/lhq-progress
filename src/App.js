import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { Progress } from "antd";
import { Progress } from "./MyProgress";
import TestRC from "./TestRC";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div
                    style={{
                        width: "600px"
                    }}
                >
                    <Progress percent={80.9} strokeWidth={5} />
                    {/* <Progress
                        percent={70.9}
                    /> */}
                </div>
                <div
                    style={{
                        background:
                            "linear-gradient(to right,#188bfd, #47c0e6)",
                        width: "600px",
                        height: "20px",
                        marginTop: "5px"
                    }}
                />
                <TestRC />
            </header>
        </div>
    );
}

export default App;

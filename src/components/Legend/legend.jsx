import React from "react";
import "./legend.css";
import Node from "../Node/node";
const NodeState = require("../Node/node_state");

const Legend = () => {
    return (
        <div className="legend-container">
            <ul>
                <li>
                    <div>
                        <Node nodeState={NodeState.NODE_UNVISITED} />
                        <span className="ml-2">Unvisited Node</span>
                    </div>
                </li>
                <li>
                    <div>
                        <Node nodeState={NodeState.NODE_VISITED} />
                        <span className="ml-2">Visited Node</span>
                    </div>
                </li>
                <li>
                    <div>
                        <Node nodeState={NodeState.NODE_IS_WALL} />
                        <span className="ml-2">Wall Node</span>
                    </div>
                </li>
                <li>
                    <div>
                        <Node nodeState={NodeState.NODE_IS_SOURCE} />
                        <span className="ml-2">Source Node</span>
                    </div>
                </li>
                <li>
                    <div>
                        <Node nodeState={NodeState.NODE_IS_TARGET} />
                        <span className="ml-2">Target Node</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Legend;
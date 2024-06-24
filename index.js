import React from "react";
import ReactDOM from "react-dom";

const headingElement = React.createElement("h1", { className: "heading" }, "Hello World");

const headingElement2 = React.createElement("h1", { className: "heading" },
    React.createElement("g1", { className: "heee" }, [
        React.createElement("con", { className: "vadd" }, "helloworld"),
        React.createElement("co1n", { className: "v1add" }, "hell1oworld"),
    ])
);

ReactDOM.createRoot(document.getElementById("root"))
Root.render(headingElement2);

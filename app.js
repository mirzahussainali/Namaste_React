const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world React Externally"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World Parent"),
    React.createElement("h2", {}, "Second element h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World Parent"),
    React.createElement("h2", {}, "Second element h2"),
  ]),
);

root.render(parent);

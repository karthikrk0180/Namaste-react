const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",{id:"child1"}, [
        React.createElement("h1", {}, "i am an h1 tag"),
        React.createElement("h2", {}, "i am an h2 tag"),
    ]),
    React.createElement("div",{id:"child2"}, [
        React.createElement("h1", {}, "i am an h1 tag"),
        React.createElement("h2", {}, "i am an h2 tag"),
    ])]
 );

 //JSX


const heading = React.createElement(
    "h1", 
    {id: "heading"},
    "Hello world from React!");

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
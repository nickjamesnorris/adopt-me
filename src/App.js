const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]);
};


const App = () => {
    return React.createElement("div", {}, [
            React.createElement("h1", {}, "Adoopt Me!"),
            React.createElement(Pet, { name: "Nami", animal: "Dog", breed: "Lab" }),
            React.createElement(Pet, { name: "Ember", animal: "Dog", breed: "Lab" }),
            React.createElement(Pet, { name: "Gracie", animal: "Cat", breed: "Tabby" })
        ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);
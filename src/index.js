import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const rootRender = ReactDOM.createRoot(document.getElementById("root"));
// rootRender.render(React.createElement(App)); OR
rootRender.render(<App />);

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const inlineStyling = { color: "orangered", fontSize: "42px" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  /* const pizza = null; */
  const pizza = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizza.length > 0 ? (
        <React.Fragment>
          <p>
            Authetic Italian Cuisine. 6 creative Dishes to choose from. Fresh
            from the stone oven.
          </p>
          <ul className="pizzas">
            {pizza?.map((ele) => (
              <Pizza pizzaObj={ele} key={ele.name} /> //pizzaObj  should be used always
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <h2>Sorry for the Inconvenience. We're working in our menu.</h2>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
    <div className="pizza ">
      {pizzaObj.soldOut ? (
        <img
          src={pizzaObj.photoName}
          alt="Pizaas"
          style={{ filter: " grayscale(100%)" }}
        />
      ) : (
        <img src={pizzaObj.photoName} alt="Pizaas " />
      )}

      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price} </span>
      </div>
    </div>
  );
}

function Footer() {
  const opensAt = 12;
  const closesAt = 11 * 2;
  const currTime = new Date().toLocaleTimeString();
  const ctime = new Date().getHours();
  const isOpen = ctime < closesAt && ctime >= opensAt;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order currTime={currTime} />
      ) : (
        <p>
          Sorry! We're Closed. Wait for {Math.abs(ctime - opensAt)} hours till
          we open.
        </p>
      )}
      <button className="btn">Order</button>
    </footer>
  );
}

function Order(props) {
  return <p>The current time is: {props.currTime}. We're Open!</p>;
}

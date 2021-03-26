import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Test from "./test.json";
import Details from "./Details";

function Home(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [products, setProducts] = useState([]);

  async function postData() {
    await fetch("https://crudcrud.com/api/" + props.APIkey + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          name: "Router TP-Link Archer C1200",
          price: "199,99",
          image:
            "https://image.ceneostatic.pl/data/products/47488769/i-tp-link-archer-c1200-archerc1200.jpg",
          desc:
            "Router Archer C1200 obsługuje połączenia bezprzewodowe nowej generacji, w standardzie 802.11ac. Dzięki temu można korzystać z codziennych, mniej wymagających aplikacji, takich jak poczta elektroniczna i przeglądanie stron internetowych poprzez połączenie w paśmie 2,4GHz, przy jednoczesnym wykorzystaniu pasma 5GHz do bardziej wymagających zastosowań, takich jak transmisje strumieniowe wideo w jakości HD lub gry online.",
        },
        {
          name: "Xiaomi Mi Band 5",
          price: "119,99",
          image:
            "https://image.ceneostatic.pl/data/products/94094418/i-xiaomi-mi-band-5-czarny.jpg",
          desc:
            "Inteligentna Opaska Xiaomi Sportowa Mi Band 5 ma duży kolorowy ekran, 11 trybów sportowych, pełną wodoodporność na wodę 5ATM. Wymienne kolorowe paski. Bądź na bieżąco z wiadomościami na Twoim nadgarstku. Dokładny optyczny sensor tętna.",
        },
      ]),
    });
  }

  const fetchItems = async () => {
    console.log("Yieks");
    const data = await fetch(
      "https://crudcrud.com/api/" + props.APIkey + "/products"
    );
    const products = await data.json();
    if (products.length === 0) {
      await postData();
      console.log(products.length);
    }
    setProducts(products);
    console.log(products);
  };

  return (
    <div className="main">
      <div className="text">Our products:</div>
      <div className="products">
        {products.map((product) => (
          <div className="myProduct" key={product._id}>
            <img alt="" src={product.image} />
            <div>{product.name}</div>
            <div>{product.price + " zł"}</div>
            <Link to={`/details/${product._id}`}>
              <button className="myButton">Product details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

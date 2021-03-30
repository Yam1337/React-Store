import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import CheckAPI from "./checkAPI";

let APIlist = [
  {
    name: "Xiaomi Mi Band 5",
    price: "119.99",
    image:
      "https://image.ceneostatic.pl/data/products/94094418/i-xiaomi-mi-band-5-czarny.jpg",
    desc:
      "Inteligentna Opaska Xiaomi Sportowa Mi Band 5 ma duży kolorowy ekran, 11 trybów sportowych, pełną wodoodporność na wodę 5ATM. Wymienne kolorowe paski. Bądź na bieżąco z wiadomościami na Twoim nadgarstku. Dokładny optyczny sensor tętna.",
  },

  {
    name: "Laptop Lenovo IdeaPad S540-14IWL",
    price: "3699.99",
    image:
      "https://www.swiat-laptopow.pl/img/11/213/40a77930658dc644c7c2f840a0600ba9/1920x1200.jpg",
    desc:
      "System operacyjny:\tWindows 10 Home\r\nProcesor:\tProcesor Intel Core i3-8145U podstawowe taktowanie 2,1 GHz, maks. 3,9 GHz z technologiąIntel Turbo Boost, 4 MB pamięci podręcznej, 2 rdzenie\r\nLiczba rdzeni procesora:\t2\r\nDysk:\t512 GB PCIe NVMe M.2 SSD\r\nTyp dysku twardego:\tSSD\r\nPamięć Ram:\t8 GB DDR4 2400 MHz",
  },
  {
    name: "Xiaomi Redmi Note 9 Pro 128 GB",
    price: "999.99",
    image:
      "https://www.mediaexpert.pl/media/cache/gallery/product/2/833/714/949/5fjirwjp/images/23/2348530/Smartfon-XIAOMI-Redmi-Note-9-Pro-6-128GB-Bialy-front-tyl.jpg",
    desc:
      "Legendarny Redmi Note powraca dziewiątej wersji! Jako pierwszy w rodzinie Redmi posiada szybkie ładowanie 30W oraz bezprzewodową łączność NFC. Profesjonalnej jakości aparat główny 64MP.",
  },
  {
    name: "Klawiatura Genesis Thor 210 RGB",
    price: "169.99",
    image:
      "https://a.allegroimg.com/original/113cb6/2749c3c744a0ba68898895934963/Klawiatura-hybrydowa-Genesis-Thor-210-RGB-graczy",
    desc:
      "Wielu graczy nie może zdecydować co jest lepszym rozwiązaniem - klawiatura mechaniczna czy też membranowa? Thor 210 RGB to idealne rozwiązanie tego problemu. Technologia hybrydowa  to połączenie najlepszych cech obydwu rodzajów klawiatur. Dobra reakcja, trwałość i sporo rozwiązań ułatwiających drogę do zwycięstwa, a to wszystko zapakowane w obudowę z efektownym podświetleniem RGB – Thor 210 to groźna broń w ręku każdego gracza!",
  },
  {
    name: "Apple Magic Mouse 2",
    price: "399.99",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MLA02?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1564098735372",
    desc:
      "Mysz Magic Mouse 2 ma akumulator do wielokrotnego ładowania, więc możesz zapomnieć o zwykłych bateriach. Jest lżejsza i ma mniej ruchomych elementów dzięki wbudowanemu akumulatorowi i jednolitej dolnej części obudowy. Dodatkowo jej podstawa została udoskonalona tak, aby mysz jeszcze płynniej przesuwała się po biurku. Obszar Multi-Touch reaguje na proste gesty, takie jak machnięcia ułatwiające przechodzenie między stronami internetowymi oraz przewijanie pomocne przy przeglądaniu dokumentów.",
  },
  {
    name: "Router TP-Link Archer C1200",
    price: "199.99",
    image:
      "https://image.ceneostatic.pl/data/products/47488769/i-tp-link-archer-c1200-archerc1200.jpg",
    desc:
      "Router Archer C1200 obsługuje połączenia bezprzewodowe nowej generacji, w standardzie 802.11ac. Dzięki temu można korzystać z codziennych, mniej wymagających aplikacji, takich jak poczta elektroniczna i przeglądanie stron internetowych poprzez połączenie w paśmie 2,4GHz, przy jednoczesnym wykorzystaniu pasma 5GHz do bardziej wymagających zastosowań, takich jak transmisje strumieniowe wideo w jakości HD lub gry online.",
  },
  {
    name: "Głośniki Logitech 2.1 Z333",
    price: "249.99",
    image:
      "https://media.komputronik.pl/pl-komputronik/img/opisy_produktow/content/SEO/logitech-z333-front.jpg",
    desc:
      "Zestaw składa się z dwóch głośników satelitarnych oraz subfoowera, który odpowiada za emisję niskich tonów. Użytkownicy mogą więc liczyć na dźwięk pierwszorzędnej jakości z mocnymi basami. To znakomita propozycja dla wszystkich entuzjastów muzyki, miłośników kina, a także graczy. Niekwestionowanym atutem takiego rozwiązania jest również kompaktowy rozmiar. Głośniki bez trudu umieścimy na każdym biurku tuż obok monitora. Te uniwersalne, a zarazem funkcjonalne urządzenia znalazły wiele zastosowań.",
  },
  {
    name: "Drukarka laserowa HP Laser 107a",
    price: "299.99",
    image:
      "https://stat-m2.ms-online.pl/media/cache/gallery/rc/toksfgrx/images/20/20974724/hp-laser-107a.jpg",
    desc:
      "Monochromatyczna drukarka laserowa HP Laser 107a umożliwiająca drukowanie z prędkością 20 stron na minutę. Wyposażona w podajnik na 150 arkuszy i interfejs USB 2.0.",
  },
  {
    name: "Radio Pioneer DMH-G220BT",
    price: "599.99",
    image:
      "https://f00.esfr.pl/foto/6/51576709761/f2da96e614b497d108799c9535812e08/pioneer-dmh-g220bt,51576709761_8.jpg",
    desc:
      "Odtwarzaj ulubione multimedia na desce rozdzielczej swojego samochodu dzięki oporowemu ekranowi dotykowemu 6,2″ z technologią Clear Type i funkcją Multi Touch. Zabierz ze sobą w podróż swoją kolekcję filmów i muzyki. DMH-G220BT odtwarza pliki audio i wideo. Ponadto ten odtwarzacz samochodowy obsługuje technologię Bluetooth, która umożliwia bezprzewodowe odtwarzanie muzyki oraz wykonywanie połączeń w trybie głośnomówiącym.",
  },
];

function Home(props) {
  let history = useHistory();

  useEffect(() => {
    fetchItems();
  }, []);

  const [products, setProducts] = useState([]);

  async function postData() {
    for (let i = 0; i < APIlist.length; i++) {
      await fetch("https://crudcrud.com/api/" + props.APIkey + "/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: APIlist[i].name,
          price: APIlist[i].price,
          image: APIlist[i].image,
          desc: APIlist[i].desc,
        }),
      });
    }
  }

  const fetchItems = async () => {
    const data = await fetch(
      "https://crudcrud.com/api/" + props.APIkey + "/products"
    );
    if (data.status === 200) {
      const products = await data.json();
      if (products.length === 0) {
        await postData();
        fetchItems();
      } else {
        setProducts(products);
      }
    } else {
      alert(
        "ERROR! Couldn't fetch items from API! Make sure, that your API Key is valid and not expired!"
      );
      history.push("/");
    }
  };
  return (
    <div>
      <CheckAPI />
      <Nav />
      <div className="main">
        <div className="text">Our products:</div>
        <div className="products">
          {products.map((product) => (
            <div className="myProduct" key={product._id}>
              <img alt="" src={product.image} />
              <div>{product.name}</div>
              <div>{product.price + " zł"}</div>
              <Link to={`/shop/details/${product._id}`}>
                <button className="myButton">Product details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

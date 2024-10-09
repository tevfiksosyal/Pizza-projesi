import "./home.css";
import { Link } from 'react-router-dom';
import Menu from "./menu";
import Card from "./card";
import ProductSection from "./card2";
import Footer from "./footer";


export default function Home() {
  return (
    <><><><><><><div className="card">
      <img src="./Assets/Iteration-1-assets/logo.svg" alt="" />
      <h1>KOD ACIKTIRIR PİZZA, DOYURUR</h1>
      <Link to="/order">
        <button>ACIKTIM</button>
      </Link>
    </div>
      <div>
        <Menu />
      </div></>
      <div>
        <Card />
      </div></>
      <section>
        <h1 className="sect1">en çok paketlenen menüler</h1>
        <h1 className="sect2">Acıktıran Kodlara Doyuran Lezzetler</h1>
      </section></><Menu /></><ProductSection /></><footer><Footer /></footer></>
  );
}
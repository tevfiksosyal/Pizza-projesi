import "./home.css";
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="card">
        <img src="./Assets/Iteration-1-assets/logo.svg" alt="" />
        <h1>KOD ACIKTIRIR PİZZA, DOYURUR</h1>
        <Link to="/order">
        <button>ACIKTIM</button>
        </Link>
    </div>
  );
}

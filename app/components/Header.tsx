import Link from "next/link";
import styles from "./components.module.css";
import homeStyles from "../home.module.css";

export default function Header() {
  return (
    <header className={homeStyles.homeHeader}>
      <nav className={homeStyles.homeNav}>
        <a href="/" className={homeStyles.homeLogo} aria-label="Ir para a home">
          <div className={homeStyles.logoIcon}>A</div>
          <span>Apptrondev</span>
        </a>

        <ul className={homeStyles.navLinks}>
          <li><a href="#apps">Apps</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
}

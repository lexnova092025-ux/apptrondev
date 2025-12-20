import Link from "next/link";
import Image from 'next/image';
import homeStyles from "../home.module.css";

export default function Header() {
  return (
    <header className={homeStyles.homeHeader}>
      <nav className={homeStyles.homeNav} aria-label="Navegação principal">
        <Link href="/" className={homeStyles.homeLogo} aria-label="Ir para a home">
          <img 
            src="/branding/logo-apptrondev.svg" 
            alt="ApptronDev" 
            style={{
              width: '160px', 
              height: 'auto',
              display: 'block'
            }}
          />
        </Link>

        <ul className={homeStyles.navLinks}>
          <li><a href="#apps">Apps</a></li>
          <li><a href="#why">Por que ApptronDev</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

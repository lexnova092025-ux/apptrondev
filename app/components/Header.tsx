import Link from "next/link";
import Image from 'next/image';
import homeStyles from "../home.module.css";

export default function Header() {
  return (
    <header className={homeStyles.homeHeader}>
      <nav className={homeStyles.homeNav}>
        <Link href="/" className={homeStyles.homeLogo} aria-label="Ir para a home">
          <Image
            src="/branding/logo-apptrondev.svg"
            alt="ApptronDev – Aplicativos SaaS"
            className={homeStyles.logoMain}
            width={96}
            height={96}
            priority
          />

          <div className={homeStyles.logoText}>
            <span className={homeStyles.logoApp}>apptron</span>
            <span className={homeStyles.logoDev}>dev</span>
          </div>
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

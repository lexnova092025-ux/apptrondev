import Link from "next/link";
import homeStyles from "../home.module.css";

export default function Header() {
  return (
    <header className={homeStyles.homeHeader}>
      <nav className={homeStyles.homeNav}>
        <Link href="/" className={homeStyles.homeLogo} aria-label="Ir para a home">
          <img
            src="/assets/logo-apptrondev.png"
            alt="ApptronDev – Aplicativos SaaS"
            className={homeStyles.logoMain}
            width={96}
            height={96}
            loading="eager"
            decoding="async"
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

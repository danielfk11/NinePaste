import Link from "next/link"
import styles from "./styles.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>
            Nine<span className={styles.logoAccent}>Paste</span>
          </span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Início
          </Link>
          <Link href="/about" className={styles.navLink}>
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  )
}

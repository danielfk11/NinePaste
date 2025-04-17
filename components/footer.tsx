import Link from "next/link"
import styles from "./styles.module.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>NinePaste</h3>
          <p className={styles.footerDescription}>
            Compartilhe texto e código facilmente com URLs únicas. Sem necessidade de login.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/" className={styles.footerLink}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.footerLink}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/privacy" className={styles.footerLink}>
                Privacidade
              </Link>
            </li>
            <li>
              <Link href="/terms" className={styles.footerLink}>
                Termos
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contato</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="mailto:contato@ninepaste.com" className={styles.footerLink}>
                contato@ninepaste.com
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ninepaste"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ninepaste"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} NinePaste. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

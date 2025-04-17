import Link from "next/link"
import styles from "./styles.module.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.notFoundContainer}>
          <div className={styles.notFoundIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h1 className={styles.notFoundTitle}>Conteúdo Não Encontrado</h1>
          <p className={styles.notFoundDescription}>O snippet que você está procurando não existe ou foi removido.</p>
          <Link href="/" className={styles.button}>
            <span className={styles.buttonText}>Criar Novo Snippet</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

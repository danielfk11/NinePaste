import { saveContent } from "./actions"
import styles from "./styles.module.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Compartilhe texto <span className={styles.heroAccent}>instantaneamente</span>
          </h1>
          <p className={styles.heroSubtitle}>Cole seu conteúdo, obtenha uma URL compartilhável. Simples assim.</p>
        </div>

        <div className={styles.formContainer}>
          <form action={saveContent} className={styles.form}>
            <textarea
              name="content"
              placeholder="Cole seu texto ou código aqui..."
              className={styles.textarea}
              rows={10}
              required
            />
            <div className={styles.formFooter}>
              <p className={styles.formNote}>Sem login necessário. Seu conteúdo é acessível via URL gerada.</p>
              <button type="submit" className={styles.button}>
                <span className={styles.buttonText}>Gerar URL</span>
                <svg
                  className={styles.buttonIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Simples</h3>
            <p className={styles.featureDescription}>Sem cadastro, sem complicações. Apenas cole e compartilhe.</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Rápido</h3>
            <p className={styles.featureDescription}>Gere URLs em segundos e compartilhe instantaneamente.</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Seguro</h3>
            <p className={styles.featureDescription}>URLs únicas e difíceis de adivinhar para seus conteúdos.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

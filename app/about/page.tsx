import Header from "@/components/header"
import Footer from "@/components/footer"
import styles from "../styles.module.css"

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.aboutSection}>
          <h1 className={styles.aboutTitle}>Sobre o NinePaste</h1>

          <div className={styles.aboutContent}>
            <p>
              O NinePaste é uma ferramenta simples e eficiente para compartilhar texto e código através de URLs únicas.
              Criado para ser minimalista e fácil de usar, o NinePaste não requer login ou cadastro.
            </p>

            <h2>Como funciona</h2>
            <p>
              1. Cole seu texto ou código na área de texto
              <br />
              2. Clique em "Gerar URL"
              <br />
              3. Compartilhe a URL gerada com quem você quiser
            </p>

            <h2>Recursos</h2>
            <ul>
              <li>Compartilhamento rápido e fácil</li>
              <li>Sem necessidade de login</li>
              <li>URLs curtas e fáceis de compartilhar</li>
              <li>Interface limpa e minimalista</li>
              <li>Acesso instantâneo ao conteúdo</li>
            </ul>

            <h2>Privacidade</h2>
            <p>
              O NinePaste foi projetado com a privacidade em mente. Não rastreamos quem acessa seus snippets e não
              coletamos dados pessoais desnecessários.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

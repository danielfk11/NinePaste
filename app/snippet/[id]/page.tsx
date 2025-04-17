import { supabase } from "@/lib/supabase"
import styles from "../../styles.module.css"
import Link from "next/link"
import { notFound } from "next/navigation"
import CopyButton from "./copy-button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const revalidate = 0

async function getSnippet(id: string) {
  const { data, error } = await supabase.from("snippets").select("*").eq("id", id).single()

  if (error || !data) {
    return null
  }

  return data
}

export default async function SnippetPage({ params }: { params: { id: string } }) {
  const snippet = await getSnippet(params.id)

  if (!snippet) {
    notFound()
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/snippet/${params.id}`

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.snippetContainer}>
          <div className={styles.snippetHeader}>
            <div className={styles.snippetInfo}>
              <h2 className={styles.snippetTitle}>Snippet: {params.id}</h2>
              <p className={styles.snippetDate}>
                Criado em {new Date(snippet.created_at).toLocaleDateString()} às{" "}
                {new Date(snippet.created_at).toLocaleTimeString()}
              </p>
            </div>
            <div className={styles.snippetActions}>
              <CopyButton content={shareUrl} />
            </div>
          </div>

          <pre className={styles.snippetContent}>{snippet.content}</pre>

          <div className={styles.snippetFooter}>
            <Link href="/" className={styles.buttonSecondary}>
              <svg
                className={styles.buttonIconSmall}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Criar Novo Snippet
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

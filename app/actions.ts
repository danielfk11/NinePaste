"use server"

import { supabase } from "@/lib/supabase"
import { redirect } from "next/navigation"
import { nanoid } from "nanoid"

export async function saveContent(formData: FormData) {
  const content = formData.get("content") as string

  if (!content || content.trim() === "") {
    return { error: "O conteúdo não pode estar vazio" }
  }

  // Gera um ID único para o conteúdo
  const id = nanoid(10)

  // Salva no Supabase
  const { error } = await supabase.from("snippets").insert([
    {
      id,
      content,
      created_at: new Date().toISOString(),
    },
  ])

  if (error) {
    console.error("Erro ao salvar conteúdo:", error)
    return { error: "Falha ao salvar conteúdo" }
  }

  // Redireciona para a página do conteúdo
  redirect(`/snippet/${id}`)
}

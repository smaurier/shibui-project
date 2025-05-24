export function parseClaudeResponse(data: any): string {
  if (Array.isArray(data.content)) {
    return data.content.map((c: any) => c.text).join("\n");
  }
  if (data.completion) return data.completion;
  if (data.error) throw new Error(data.error.message || "Erreur Claude");
  throw new Error("Format de réponse inattendu.");
}

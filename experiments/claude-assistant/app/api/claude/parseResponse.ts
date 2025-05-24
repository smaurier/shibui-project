import { ClaudeResponse } from "@/app/types/claude";

export function parseClaudeResponse(data: ClaudeResponse): string {
  if ("content" in data && Array.isArray(data.content)) {
    return data.content.map((c) => c.text).join("\n");
  }

  if ("completion" in data) {
    return data.completion;
  }

  if ("error" in data) {
    throw new Error(data.error.message || "Erreur Claude");
  }

  throw new Error("Format de réponse inattendu.");
}

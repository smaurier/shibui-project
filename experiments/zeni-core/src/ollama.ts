// src/ollama.ts
export async function callOllama(prompt: string): Promise<string> {
  const res = await fetch("http://127.0.0.1:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",
      prompt,
      stream: true,
    }),
  });

  if (!res.body) throw new Error("Pas de flux de réponse reçu depuis Ollama");

  const reader = res.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let result = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value, { stream: true });

    for (const line of chunk.split("\n").filter(Boolean)) {
      try {
        const json = JSON.parse(line);
        if (json.response) {
          result += json.response;
        }
      } catch {
        // ignorer les lignes incomplètes ou invalides
      }
    }
  }

  return result;
}

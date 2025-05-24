export function buildPrompt(message: string): string {
  return `Tu es un assistant bienveillant pour une famille. Voici leur message : "${message}". 
Réponds avec une suggestion concrète + un message positif.`;
}

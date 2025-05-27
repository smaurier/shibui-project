import "dotenv/config";
import { buildZeniPrompt } from "./zeni.js";
import { callClaude } from "./claude.js";
import { callOllama } from "./ollama.js";

const useClaude = false;

const prompt = buildZeniPrompt(
  "Léo",
  "joyeux",
  "Que faire ce dimanche avec mes enfants ?",
  "fr"
);
console.log("\n✉️ Prompt envoyé :\n" + prompt);

//callClaude(prompt)
callOllama(prompt)
  .then((reply: unknown) => {
    console.log("\n🤖 Réponse de Zeni :\n" + reply);
  })
  .catch((err: Error) => {
    console.error("\n❌ Erreur Zeni :", err.message);
  });

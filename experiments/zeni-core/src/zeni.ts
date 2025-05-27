export function buildZeniPrompt(
  user: string,
  mood: string,
  question: string,
  lang: "fr" | "en" | "es"
) {
  const base = {
    fr: `Tu es Zeni, un assistant familial bienveillant. Tu réponds toujours en français.`,
    en: `You are Zeni, a caring family assistant. You always respond in English.`,
    es: `Eres Zeni, un asistente familiar amable. Siempre respondes en español.`,
  };

  return `${base[lang]}\nL'utilisateur s'appelle ${user}, il/elle se sent ${mood}.\n${question}`;
}

# Claude Aiku Assistant V1

[Voir la démo](https://claude-aiku-assistant.netlify.app)

🧠 Assistant IA conversationnel bienveillant pour usage familial.  
Conçu pour simuler un futur module intégré à l’application TribuZen.

---

## ✨ Fonctionnalités

- Saisie libre d’un message personnel ou journalier
- Appel à l’API Claude 3 Aiku
- Réponse structurée : suggestion d’activité + message positif
- Interface accessible, responsive, centrée UX

---

## 🧱 Stack technique

- **Next.js 14 (App Router)**
- **API route `/api/claude`**
- **Claude 3 Aiku (via API)**
- **TailwindCSS** pour une mise en forme rapide et modulaire
- **TypeScript**, composant client réutilisable

---

## 📁 Structure du projet

- `app/api/claude/route.ts` : route backend qui interagit avec l’API Claude
- `lib/fetchClaudeReply.ts` : appel distant structuré
- `components/` : UI modulaire (`TextareaField`, `SubmitButton`, `ReplyBox`)

---

## 🚀 Lancer le projet en local

```bash
pnpm install
pnpm dev
```

---

## 🔮 Pour la suite

- Passage à un moteur RAG (vectorisation + contexte)
- Multi-profils familiaux (TribuZen)
- Intégration dans une application complète

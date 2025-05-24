# Claude Aiku Assistant V1

🔗 [Voir la démo](https://claude-aiku-assistant.netlify.app)

🧠 **Assistant IA conversationnel bienveillant**, conçu comme prototype modulaire.  
Ce projet simule un futur module intégré à l’application TribuZen (organisation, bien-être, familles).

---

## ✨ Fonctionnalités

- ✅ Saisie libre d’un message personnel ou journalier
- 🤖 Appel à l’API **Claude 3 Aiku**
- 💬 Réponse structurée : suggestion d’activité + message positif
- 🧩 Interface modulaire et accessible (UX pensée, responsive, animée)

---

## 🧱 Stack technique

- **Next.js 14 (App Router)** avec route API
- **TailwindCSS** pour le design fluide et composable
- **TypeScript** pour la sécurité et la clarté
- **Claude 3 API (Anthropic)** via `POST /api/claude`

---

## 📁 Structure du projet

| Dossier/Fichier                | Rôle                                             |
| ------------------------------ | ------------------------------------------------ |
| `app/api/claude/route.ts`      | Appel structuré à l’API Claude via prompt métier |
| `lib/fetchClaudeReply.ts`      | Fonction isolée pour l’appel distant             |
| `components/SubmitButton.tsx`  | Bouton animé (chargement, accessibilité)         |
| `components/ReplyBox.tsx`      | Affichage UX de la réponse IA                    |
| `components/TextareaField.tsx` | Zone de saisie réutilisable et contrôlée         |

---

## 🚀 Démarrage local

```bash
pnpm install
pnpm dev
```

🔐 Crée un fichier `.env.local` à la racine avec ta clé Claude :

```env
CLAUDE_API_KEY=your-api-key-here
```

---

## 🔮 Suite prévue

- 🔍 Passage à un moteur **RAG** (contextes vectoriels + historique)
- 👥 Gestion **multi-profils familiaux** dans le contexte Shibui
- 🧠 Déploiement futur dans une application complète et orientée UX augmentée

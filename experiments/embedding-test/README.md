# 🧠 Moteur RAG local — V2

Un mini moteur de recherche sémantique local, basé sur des **embeddings vectoriels**, en JavaScript pur.

Ce projet constitue la **V2** d’un assistant IA personnalisé dans le cadre de l'application Shibui.

---

## ✨ Fonctionnalités

- 🔎 Génération d’embeddings localement (MiniLM via `@xenova/transformers`)
- 🔁 Recherche vectorielle par similarité cosinus
- 🥇 Affichage des `top-k` résultats (par défaut : 3)
- 🧠 Génération automatique d’un prompt enrichi pour Claude ou tout LLM
- 💻 UI 100% locale, légère et déployable

---

## 📚 Objectifs pédagogiques atteints

- Compréhension théorique des embeddings
- Mise en place d’un moteur RAG sans API externe
- Construction d’un pipeline vectorisation → recherche → injection LLM
- Préparation à la V3 : fine-tuning ou RAG avancé

---

## 🧱 Stack technique

- Vanilla JavaScript + HTML/CSS
- [Xenova Transformers](https://github.com/xenova/transformers.js)
- Modèle utilisé : `all-MiniLM-L6-v2` (embeddings multilanguage)
- Aucun backend, aucun build, aucun serveur

---

## 🚀 Utilisation

1. Ouvre le fichier `index.html` dans un navigateur moderne
2. Saisis une question dans le champ texte
3. Observe les 3 documents les plus proches sémantiquement
4. Clique sur 📋 pour copier le **prompt enrichi** et l’envoyer à une IA

---

## 📎 Démo en ligne

[https://rag-local-demo.netlify.app](https://rag-local-demo.netlify.app)

---

## 🧠 Auteurs

Développé par @smaurier
Projet open-source pour démonstration pédagogique et montée en compétence IA

---

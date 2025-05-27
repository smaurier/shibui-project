const askBtn = document.getElementById("ask-btn");
const result = document.getElementById("zeni-reply");
const promptBox = document.getElementById("prompt-box");
const historyList = document.getElementById("history-list");
const copyBtn = document.getElementById("copy-prompt");

askBtn.addEventListener("click", async () => {
  const lang = document.getElementById("lang").value;
  const user = document.getElementById("user").value;
  const mood = document.getElementById("mood").value;
  const query = document.getElementById("query").value;

  const instruction = {
    fr: `Tu es Zeni, un assistant familial bienveillant. Tu parles français. L'utilisateur est ${user} et il se sent ${mood}.`,
    en: `You are Zeni, a kind family assistant. You speak English. The user's name is ${user} and they are feeling ${mood}.`,
    es: `Eres Zeni, un asistente familiar amable. Hablas español. El usuario se llama ${user} y se siente ${mood}.`
  };

  const prompt = `${instruction[lang]}\n${query}`;
  promptBox.value = prompt;
  result.value = "⏳ Zeni réfléchit...";

  try {
    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "mistral", prompt, stream: true })
    });

    const json = await res.json();
    const reply = json.response || "❌ Aucune réponse.";
    result.value = reply;

    // Ajout à l'historique
    const li = document.createElement("li");
    li.innerHTML = `<strong>${query}</strong><br><em>${reply}</em>`;
    historyList.prepend(li);

  } catch (err) {
    result.value = `❌ Erreur : ${err.message}`;
  }
});

copyBtn.addEventListener("click", () => {
  if (!promptBox.value.trim()) {
    alert("Aucun prompt à copier !");
    return;
  }
  navigator.clipboard.writeText(promptBox.value).then(() => {
    alert("✅ Prompt copié !");
  });
});

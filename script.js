function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chat-box");
  const message = input.value.trim();
  if (message === "") return;

  const userMsg = document.createElement("div");
  userMsg.textContent = "🧑: " + message;
  chatBox.appendChild(userMsg);

  const reply = document.createElement("div");
  reply.textContent = "🤖: A.D.E.N. is not online yet, Commander.";
  chatBox.appendChild(reply);

  input.value = "";
}

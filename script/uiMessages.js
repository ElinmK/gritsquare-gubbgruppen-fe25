export function displayAllUsers(users) {
  const messagesList = document.getElementById("messagesList");
  messagesList.innerHTML = "";
  if (!users) return;

  Object.entries(users).forEach(([key, user]) => {
    const div = document.createElement("div");
    div.classList.add(
      "message",
      "list-group-item",
      "list-group-item-action",
      "bg-white",
      "text-dark",
      "border-secondary",
      "rounded-3",
      "mb-2",
    );
    div.setAttribute("draggable", true);
    div.dataset.key = key;

    let timeText = "";
    if (user.createdAt) {
      const date = new Date(user.createdAt);
      timeText = date.toLocaleString("sv-SE");
    }

    div.innerHTML = `
      <span>${user.name}: ${user.message || "Inget meddelande"}</span>
      <small>${timeText}</small>
    `;

    div.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", key);
      div.classList.add("dragging");
    });

    div.addEventListener("dragend", () => {
      div.classList.remove("dragging");
    });

    messagesList.appendChild(div);
  });
}

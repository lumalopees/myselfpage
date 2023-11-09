document.addEventListener("DOMContentLoaded", function () {
  const messageList = document.querySelector(".message-list");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");
  const deleteAllButton = document.getElementById("delete-all-button");
  const menuIcon = document.getElementById('menuIcon');

  sendButton.addEventListener("click", () => {
    const messageText = messageInput.value;

    if (messageText.length > 0 && messageText.length <= 200) {
      addMessage(messageText);
      messageInput.value = "";
      saveMessage(messageText);
    } else {
      alert("Please enter something valid.");
    }
  });

  deleteAllButton.addEventListener("click", () => {
    const password = prompt("Enter password to delete all messages:");

    if (password === "lalaland") {
      if (confirm("Are you sure you want to delete all messages?")) {
        messageList.innerHTML = "";
        localStorage.removeItem("messages");
      }
    } else if (password !== null) {
      alert("Denied. You are not allowed to delete all messages.");
    }
  });

  menuIcon.addEventListener('click', toggleMenu);

  loadMessages();

  function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));
  }

  function loadMessages() {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    for (let message of messages) {
      addMessage(message);
    }
  }

  function addMessage(messageText) {
    const messageItem = document.createElement("div");
    messageItem.classList.add("message-item");
    messageItem.innerHTML = `<div class="message">${messageText}</div>`;
    messageList.appendChild(messageItem);
  }

  function toggleMenu() {
    const navContainer = document.querySelector('.nav-container');
    const menuIcon = document.querySelector('.menu-icon');
    
    navContainer.classList.toggle('show-menu');
    menuIcon.classList.toggle('open');
  }
});
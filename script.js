const typingForm = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");
let userMessage = null;

const API_KEY = "AIzaSyCeurwhKK__P87iclLUt1Rw6SqhZgRW1Sw";
const API_URI = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

const generateAPIResponse = async () => {
  try {
    const response = await fetch(API_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: userMessage }],
          },
        ],
        generationConfig: {
          maxOutputTokens: 300,
          temperature: 0.7,
          topP: 1.0,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse =
      data.candidates[0]?.content?.parts[0]?.text || "No response";

    const loadingMessage = chatList.querySelector(".loading");
    if (loadingMessage) {
      loadingMessage.remove();
    }

    const html = `
      <div class="message-content">
        <img src="img/doT.png" alt="doT Image" class="avatar" />
        <p class="text">${aiResponse}</p>
      </div>
    `;
    const incomingMessageDiv = createMessageElement(html, "incoming");
    chatList.appendChild(incomingMessageDiv);
  } catch (error) {
    console.error("API Request Error:", error);

    const loadingMessage = chatList.querySelector(".loading");
    if (loadingMessage) {
      loadingMessage.remove();
    }

    const errorHtml = `
      <div class="message-content">
        <img src="img/doT.png" alt="doT Image" class="avatar" />
        <p class="text">Sorry, there was an error processing your request.</p>
      </div>
    `;
    const errorMessageDiv = createMessageElement(
      errorHtml,
      "incoming",
      "error"
    );
    chatList.appendChild(errorMessageDiv);
  }
};

const showLoadingAnimation = () => {
  const html = `
    <div class="message-content">
      <img src="img/doT.png" alt="doT Image" class="avatar" />
      <div class="loader"></div>
    </div>
  `;
  const incomingMessageDiv = createMessageElement(html, "incoming", "loading");
  chatList.appendChild(incomingMessageDiv);
};

const handleOutgoingChat = () => {
  userMessage = typingForm.querySelector(".input-area").value.trim();
  if (!userMessage) return;

  const html = `
    <div class="message-content">
      <img src="img/user.jpg" alt="User Image" class="avatar" />
      <p class="text">${userMessage}</p>
    </div>
  `;
  const outgoingMessageDiv = createMessageElement(html, "outgoing");
  chatList.appendChild(outgoingMessageDiv);

  typingForm.reset();

  setTimeout(() => {
    showLoadingAnimation();
    generateAPIResponse();
  }, 500);
};

typingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleOutgoingChat();
});

const subtitles = [
  "Talk, Explore, and Learn a Lot, Say Hello to Your Friend, .doT!",
  "Connect with your passions and engage in meaningful conversations.",
  "Discover new ideas and explore fascinating topics every day.",
  "Your intelligent assistant for fun and learning, all in one place.",
];

const subtitleElement = document.querySelector(".subtitle");
let currentSubtitleIndex = 0;
let charIndex = 0;

function typeSubtitle() {
  const currentSubtitle = subtitles[currentSubtitleIndex];
  subtitleElement.textContent = currentSubtitle.substring(0, charIndex);
  charIndex++;
  if (charIndex > currentSubtitle.length) {
    setTimeout(() => {
      eraseSubtitle();
    }, 2000);
  } else {
    setTimeout(typeSubtitle, 100);
  }
}

function eraseSubtitle() {
  const currentSubtitle = subtitles[currentSubtitleIndex];
  subtitleElement.textContent = currentSubtitle.substring(0, charIndex - 1);
  charIndex--;
  if (charIndex === 0) {
    currentSubtitleIndex = (currentSubtitleIndex + 1) % subtitles.length;
    setTimeout(typeSubtitle, 500);
  } else {
    setTimeout(eraseSubtitle, 50);
  }
}

typeSubtitle();

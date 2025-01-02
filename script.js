// const typingForm = document.querySelector(".typing-form");
// const chatList = document.querySelector(".chat-list");
// let userMessage = null;

// const API_KEY = "AIzaSyAvebVOMd_X0v9cZx4xvIbJ-OxpuQpS1Mk";
// const API_URI = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// const createMessageElement = (content, ...classes) => {
//   const div = document.createElement("div");
//   div.classList.add("message", ...classes);
//   div.innerHTML = content;
//   return div;
// };

// const generateAPIResponse = async () => {
//   try {
//     const response = await fetch(API_URI, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [{ text: userMessage }],
//           },
//         ],
//         generationConfig: {
//           maxOutputTokens: 300,
//           temperature: 0.7,
//           topP: 1.0,
//         },
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     const aiResponse =
//       data.candidates[0]?.content?.parts[0]?.text || "No response";

//     const loadingMessage = chatList.querySelector(".loading");
//     if (loadingMessage) {
//       loadingMessage.remove();
//     }

//     const html = `
//       <div class="message-content">
//         <img src="img/doT.png" alt="doT Image" class="avatar" />
//         <p class="text">${aiResponse}</p>
//       </div>
//     `;
//     const incomingMessageDiv = createMessageElement(html, "incoming");
//     chatList.appendChild(incomingMessageDiv);
//   } catch (error) {
//     console.error("API Request Error:", error);

//     const loadingMessage = chatList.querySelector(".loading");
//     if (loadingMessage) {
//       loadingMessage.remove();
//     }

//     const errorHtml = `
//       <div class="message-content">
//         <img src="img/doT.png" alt="doT Image" class="avatar" />
//         <p class="text">Sorry, there was an error processing your request.</p>
//       </div>
//     `;
//     const errorMessageDiv = createMessageElement(
//       errorHtml,
//       "incoming",
//       "error"
//     );
//     chatList.appendChild(errorMessageDiv);
//   }
// };

// const showLoadingAnimation = () => {
//   const html = `
//     <div class="message-content">
//       <img src="img/doT.png" alt="doT Image" class="avatar" />
//       <div class="loader"></div>
//     </div>
//   `;
//   const incomingMessageDiv = createMessageElement(html, "incoming", "loading");
//   chatList.appendChild(incomingMessageDiv);
// };

// const handleOutgoingChat = () => {
//   userMessage = typingForm.querySelector(".input-area").value.trim();
//   if (!userMessage) return;

//   const html = `
//     <div class="message-content">
//       <img src="img/user.jpg" alt="User Image" class="avatar" />
//       <p class="text">${userMessage}</p>
//     </div>
//   `;
//   const outgoingMessageDiv = createMessageElement(html, "outgoing");
//   chatList.appendChild(outgoingMessageDiv);

//   typingForm.reset();

//   setTimeout(() => {
//     showLoadingAnimation();
//     generateAPIResponse();
//   }, 500);
// };

// typingForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   handleOutgoingChat();
// });

// const subtitles = [
//   "Talk, Explore, and Learn a Lot, Say Hello to Your Friend, .doT!",
//   "The Smarter Shot for Every Thought—It’s .doT!",
//   "Need a Thought? Just Ask .doT!",
//   "On the Spot, Here’s .doT!",
//   "From Big Ideas to Little Thoughts",
//   "I’ve Got You Covered, I’m .doT!",
//   "Quick Solutions, Fast as a Shot",
//   "Meet Your Genius Buddy, .doT!",
// ];

// const subtitleElement = document.querySelector(".subtitle");
// let currentSubtitleIndex = 0;
// let charIndex = 0;

// function typeSubtitle() {
//   const currentSubtitle = subtitles[currentSubtitleIndex];
//   subtitleElement.textContent = currentSubtitle.substring(0, charIndex);
//   charIndex++;
//   if (charIndex > currentSubtitle.length) {
//     setTimeout(() => {
//       eraseSubtitle();
//     }, 5000);
//   } else {
//     setTimeout(typeSubtitle, 100);
//   }
// }

// function eraseSubtitle() {
//   const currentSubtitle = subtitles[currentSubtitleIndex];
//   subtitleElement.textContent = currentSubtitle.substring(0, charIndex - 1);
//   charIndex--;
//   if (charIndex === 0) {
//     currentSubtitleIndex = (currentSubtitleIndex + 1) % subtitles.length;
//     setTimeout(typeSubtitle, 500);
//   } else {
//     setTimeout(eraseSubtitle, 50);
//   }
// }

// typeSubtitle();

// const scrollToBottom = () => {
//   chatList.scrollTop = chatList.scrollHeight;
// };

// chatList.appendChild(outgoingMessageDiv);
// scrollToBottom();

const typingForm = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");
let userMessage = null;

const API_KEY = "AIzaSyAvebVOMd_X0v9cZx4xvIbJ-OxpuQpS1Mk";
const API_URI = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

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
        <p class="text"></p> <!-- Modified: Empty text element for typing effect -->
      </div>
    `;
    const incomingMessageDiv = createMessageElement(html, "incoming");
    chatList.appendChild(incomingMessageDiv);

    const textElement = incomingMessageDiv.querySelector(".text");
    let charIndex = 0;

    const typeEffect = () => {
      // Typing effect for AI response
      if (charIndex < aiResponse.length) {
        textElement.textContent += aiResponse.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 50); // Adjust typing speed here (50ms per character)
      }
    };

    typeEffect(); // Start typing effect
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

  scrollToBottom(); // Ensure chat always scrolls to bottom
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

  scrollToBottom(); // Ensure chat scrolls to bottom after new message

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
  "The Smarter Shot for Every Thought—It’s .doT!",
  "Need a Thought? Just Ask .doT!",
  "On the Spot, Here’s .doT!",
  "From Big Ideas to Little Thoughts",
  "I’ve Got You Covered, I’m .doT!",
  "Quick Solutions, Fast as a Shot",
  "Meet Your Genius Buddy, .doT!",
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
    }, 5000);
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
// Added: Ensures the chat always scrolls to the bottom after a new message
// typeSubtitle();
// const scrollToBottom = () => {

//   chatList.scrollTop = chatList.scrollHeight;
// };

typeSubtitle();

const scrollToBottom = () => {
  // Added: Ensures the chat always scrolls to the bottom after a new message
  const chatList = document.querySelector(".chat-list"); // Ensure chatList is selected from the DOM
  if (chatList) {
    chatList.scrollTop = chatList.scrollHeight;
  }
};

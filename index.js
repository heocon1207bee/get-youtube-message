const { LiveChat } = require("youtube-chat");

const liveChat = new LiveChat({ liveId: "jfKfPfyJRdk" });

// Emit at start of observation chat.
// liveId: string
liveChat.on("start", (liveId) => {
  /* Your code here! */
  console.log("---------------- Live Started ------------------");
});

// Emit at end of observation chat.
// reason: string?
liveChat.on("end", (reason) => {
  /* Your code here! */
  console.log("----------------- Live Ended ------------------");
  liveChat.stop();
});

// Emit at receive chat.
// chat: ChatItem
liveChat.on("chat", (chatItem) => {
  /* Your code here! */
  const chatItemMessage = function () {
    let chatMessage = "";
    chatItem.message.forEach((item) => {
      if (item.text) {
        chatMessage += item.text;
      } else if (chatMessage.emojiText) {
        chatMessage += item.emojiText;
      }
    });
    return chatMessage;
  };
  const message = chatItemMessage();
  console.log(`@${chatItem.author.name}: ${message}`);
});

// Emit when an error occurs
// err: Error or any
liveChat.on("error", (err) => {
  /* Your code here! */
  console.error(err);
});

// Start fetch loop
liveChat.start();

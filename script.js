const heading = document.querySelector('#heading');
const subheading = document.querySelector('#subheading');
const replyb = document.querySelector('#reply-button');
const replym = document.querySelector('#reply-message');
const sendButton = document.querySelector('#send-button');
const cancelButton = document.querySelector('#cancel-button');
const openButton = document.querySelector('#open-button');
const xButton = document.querySelector('#close');  
const inboxMessage = document.querySelector('#inbox-message');
const markButton = document.querySelector('#mark-button'); // "Mark as Unread" button

// head func
const changeFontColor = () => {
    heading.classList.toggle("blue-text");
}
heading.addEventListener("click", changeFontColor);
// sub func
const changeSubColor = () => {
    subheading.classList.toggle("blue-text");
}
subheading.addEventListener("click", changeSubColor);

// reply
const openReplyMessage = () => {
    replym.classList.remove('hidden');
}
replyb.addEventListener("click", openReplyMessage);

// Send/cancel buttons 
const closeReplyMessage = () => {
    replym.classList.add('hidden');
}
sendButton.addEventListener('click', closeReplyMessage);
cancelButton.addEventListener('click', closeReplyMessage);

// indox 
const closeInboxMessage = () => {
    inboxMessage.classList.add('hidden'); 

    
    replyb.classList.add('hidden');
    markButton.classList.add('hidden');
}
xButton.addEventListener('click', closeInboxMessage);

// open inbox message 
const openInboxMessage = () => {
    inboxMessage.classList.remove('hidden');  
    replyb.classList.remove('hidden');
    markButton.classList.remove('hidden');
}
openButton.addEventListener('click', openInboxMessage);

// unread func
const markAsUnread = () => {
    inboxMessage.classList.toggle('is-read'); 
    if (inboxMessage.classList.contains('is-read')) {
        markButton.textContent = 'Mark as Read'; 
    } else {
        markButton.textContent = 'Mark as Unread'; 
    }
}
markButton.addEventListener('click', markAsUnread);

// highlight thing 
const toggleHighlight = () => {
    heading.classList.toggle('highlighted');
  }
  subheading.addEventListener('click', toggleHighlight);

//  add/remove is-selected 
const toggleCheckbox = () => {
    inbox.classList.toggle('is-selected');
    if (inbox.classList.contains('is-selected')) {
      actionButtons.classList.remove('hidden'); // Un-hide the action buttons
    } else {
      actionButtons.classList.add('hidden'); // Hide the action buttons
    }
  }

  checkbox.addEventListener('click', toggleCheckbox);
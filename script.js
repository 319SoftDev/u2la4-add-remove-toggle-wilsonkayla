//const all 
const heading = document.querySelector('#heading');
const subheading = document.querySelector('#subheading');
const replyb =  document.querySelector('#reply-button');
const replym = document.querySelector('#reply-message');
const sendButton =  document.querySelector('#send-button');
const cancelButton =  document.querySelector('#cancel-button');
const openButton = document.querySelector('#open-button');

// head func
const changeFontColor = () =>{
    heading.classList.toggle ("blue-text");
}

heading.addEventListener("click",changeFontColor);


//subheading func 

const changeSubColor = () => {
    subheading.classList.toggle ("blue-text");
}

subheading.addEventListener("click", changeSubColor);

// reply (remove hidden)


const openReplyMessage  = () => {
    replym.classList.remove('hidden');

}

replyb.addEventListener("click",openReplyMessage);

// send/ cancel buttons 

const closeReplyMessage = () => {
    replym.classList.add('hidden');
}
sendButton.addEventListener('click', closeReplyMessage);
cancelButton.addEventListener('click',closeReplyMessage);


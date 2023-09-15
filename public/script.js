const chatForm = document.getElementById('chat-input');
const chatMsg = document.getElementById('msgbox');
const chatBox = document.getElementById('chatbox');
const socket = io();

import { addDiv } from "/text_append.js";

const userName = prompt("Enter your username") || 'Anon';
socket.emit('new-user', userName);

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    socket.emit('send-message', 
    {
        message: chatMsg.value,
        senderId: socket.id
    })

    chatMsg.value = '';
    chatMsg.focus()
})

socket.on('new-message', data => {
    chatBox.append(addDiv(data.message, data.sender, data.senderId, socket.id, data.botMessage));
    chatBox.scrollTop = chatBox.scrollHeight;
})






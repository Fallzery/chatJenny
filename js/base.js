var chatSubmit = $("#chatSubmit").on('click',sendMessage);
const messageInput = document.getElementById('inputBox');

// 发送消息
function sendMessage() {
    const message = $('#inputBox').val().trim();
    if (message) {
        addMessage(message, 'sent');
        $('#inputBox').val('');
        setTimeout(() => {
            addMessage(getReplyMessage(), 'received');
        }, 500);
    }
}

function addMessage(text, type) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    if (text.length < 20) {
        messageElement.classList.add('short');
    }
            
    messageElement.innerHTML = `<span>${text}</span>`;
    $('.chat-messages').append(messageElement);

    const container = $('.chat-messages');
    container.animate({scrollTop: container[0].scrollHeight}, 400);
    // $('.chat-messages').scrollTop =  $('.chat-messages').scrollHeight;
}

function getReplyMessage() {
	var sourceArray=['Love you!','I love you! ','I love you more than anything!','You’re the best!','You deserve all the best!','You have my heart ','You know I love you ','Kiss kiss','Honey honey~','爱你~','我爱你！','就算回答一万次我还是爱你','你是最棒的','我比昨天更爱你一点','抱抱小宝宝','贴贴！','早安午安晚安我爱你','宝宝宝宝，喜欢宝宝','宝宝宝宝，心里都是宝宝','无论怎么样我都爱你']
	var randomNumber = getRandomInt(0, sourceArray.length-1);
	return sourceArray[randomNumber]
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
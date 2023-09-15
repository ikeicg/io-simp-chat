
export function addDiv(data, sender, senderId, userId, botmessage) {
    let newDiv = document.createElement('div');

    if( botmessage ){
        newDiv.classList.add('message', 'msg0');
        
        if(senderId == userId){
            newDiv.innerText = 'You ' + data;
        }
        else{
            newDiv.innerText = sender + data;
        }
    }
    else if (senderId != userId){
        newDiv.classList.add('message', 'msg1');
        newDiv.innerText = `${sender}: ${data}`;
    }
    else{
        newDiv.classList.add('message', 'msg2');
        newDiv.innerText = `Me: ${data}`;
    }

    return newDiv;
}
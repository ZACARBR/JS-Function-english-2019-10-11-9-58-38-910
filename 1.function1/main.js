function reverseString(message){
    var newMessage = '';
    for(var i = message.length - 1; i >= 0; i--){
        newMessage = newMessage + message[i];
    }
    return newMessage
}
console.log(reverseString('hello')); // should return 'olleh'
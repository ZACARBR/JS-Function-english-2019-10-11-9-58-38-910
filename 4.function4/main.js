function countWords(message){
    newMessage = message.split(" ");
    return newMessage.length;
}
console.log(countWords('Good morning, I love JavaScript.')); // should return 'olleh'
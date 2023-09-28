const botPhrases = [
    "Our manager will call you back soon!",
    "For more details please call 123456789",
    "Stay in touch!",
    "Today is beautiful weather!",
    "It’s very nice to communicate with you!"
];

function talkTo() {
    while (true) {
        let answer = prompt("Write something to the bot");
        if (answer === "Hello") {
            alert("Hi!");
        }
        else if (answer === "Who are you?") {
            alert("I'm bot George");
        }
        else if (answer === "Goodbye") {
            alert("Bye!");
            break;
        } else {
            let rand = Math.floor(Math.random() * botPhrases.length)
            alert(botPhrases[rand]);
        }
    }
}
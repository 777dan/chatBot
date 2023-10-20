// const botPhrases = [
//     "Our manager will call you back soon!",
//     "For more details please call 123456789",
//     "Stay in touch!",
//     "Today is beautiful weather!",
//     "It’s very nice to communicate with you!"
// ];

const jsPhrases = [
    "JavaScript is essential for front-end and back-end development. Explore its full potential.",
    "Use version control systems like Git to collaborate efficiently with other developers on JavaScript projects.",
    "Regularly update your knowledge with new libraries and frameworks in the fast-evolving world of JavaScript development."
];

const phpPhrases = [
    "PHP is a versatile scripting language for web development. Master it to build dynamic websites.",
    "Always validate user input to enhance the security of your PHP applications.",
    "Learn to work with databases and SQL for powerful PHP-driven web applications."
];

const htmlPhrases = [
    "HTML is the foundation of web development. Learn it well.",
    "Understand the importance of semantic HTML for accessibility and SEO.",
    "Practice creating responsive web pages to reach a broader audience."
];

function talkTo() {
    while (true) {
        let answer = prompt("Write something to the bot").toLowerCase();
        if (answer === "hello") {
            alert("Hi!");
        }
        else if (answer.includes("javascript")) {
            let rand1 = Math.floor(Math.random() * jsPhrases.length)
            alert(jsPhrases[rand1]);
        }
        else if (answer.includes("php")) {
            let rand2 = Math.floor(Math.random() * phpPhrases.length)
            alert(phpPhrases[rand2]);
        }
        else if (answer.includes("html")) {
            let rand3 = Math.floor(Math.random() * htmlPhrases.length)
            alert(htmlPhrases[rand3]);
        }
        else if (answer === "who are you?") {
            alert("I'm bot George");
        }
        else if (answer === "goodbye") {
            alert("Bye!");
            break;
        } else {
            alert("I want to talk about JavaScript!");
            // let rand = Math.floor(Math.random() * botPhrases.length)
            // alert(botPhrases[rand]);
        }
    }
}
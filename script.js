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

const phrases = {
    "javascript": jsPhrases,
    "php": phpPhrases,
    "html": htmlPhrases,
    "who are you?": "I'm bot George",
    "goodbye": "Bye!",
    "hello": "Hi!"
}

function talkTo() {
    loop1: while (true) {
        let answer = prompt("Write something to the bot").toLowerCase();
        let unknownAsk = false;
        for (const key in phrases) {
            if (answer.includes(key)) {
                if (typeof phrases[key] === 'object') {
                    let rand = Math.floor(Math.random() * phrases[key].length)
                    alert(phrases[key][rand]);
                    unknownAsk = false;
                    break;
                } else {
                    alert(phrases[key]);
                    if (phrases[key] === "Bye!") {
                        break loop1;
                    }
                    unknownAsk = false;
                    break;
                }
            } else {
                unknownAsk = true;
            }
        }
        if (unknownAsk) {
            alert("I want to talk about JavaScript!");
        }
    }
}
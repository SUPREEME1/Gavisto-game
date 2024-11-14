const storyStages = [
    {
        text: "Gustavo eyes you warily. 'How long have you been with us, Mole?'",
        choices: ["Two months", "Six months", "One year", "Just joined"],
        correctAnswer: 1,
        reaction: ["'Hmm, interesting.'", "'That's right.'", "'Not quite, Mole.'", "'Is that so?'"],
        character: "gustavo"  // Identify the character speaking in this stage
    },
    {
        text: "Carlos questions you. 'Why did you join us?'",
        choices: ["To prove myself.", "For the money.", "For the thrill.", "No reason."],
        correctAnswer: 0,
        reaction: ["'Ohh!! I see.'", "'Money, huh?'", "'That's... peculiar.'", "'No reason? Odd choice.'"],
        character: "carlos"
    },
    {
        text: "Maria, Gustavo's advisor, is curious. 'Where do your loyalties lie?'",
        choices: ["With Gustavo.", "With myself.", "With the cartel.", "Loyalty is earned."],
        correctAnswer: 3,
        reaction: ["'Interesting...'", "'Self-centered, aren't we?'", "'Expected...'", "'Good answer!!'"],
        character: "maria"
    },
    {
        text: "Gustavo nods. 'What's the first rule around here?'",
        choices: ["Loyalty above all.", "No questions asked.", "Get the job done.", "Never back down."],
        correctAnswer: 0,
        reaction: ["'You remember well.'", "'No, we don’t tolerate questions here.'", "'That's not it.'", "'Strong, but no.'"],
        character: "gustavo"
    },
    {
        text: "Carlos tests you again. 'What would you do if you saw someone disobeying orders?'",
        choices: ["Report them.", "Act clueless.", "Ignore it.", "Deal with it myself."],
        correctAnswer: 0,
        reaction: ["'Good. Keep order.'", "'Hmm... risky choice.'", "'Not paying attention, are you?'", "'That's not it.'"],
        character: "carlos"
    },
    {
        text: "Maria raises an eyebrow. 'What’s the most important thing to you, Mole?'",
        choices: ["Respect", "Loyalty", "Power", "Money"],
        correctAnswer: 1,
        reaction: ["'Respect is earned.'", "'You understand.'", "'Everyone wants power, but...'", "'Typical.'"],
        character: "maria"
    },
    {
        text: "Gustavo smiles slyly. 'If you were caught by the police, would you talk?'",
        choices: ["Never.", "Depends on the situation.", "I would not.", "Only if necessary."],
        correctAnswer: 0,
        reaction: ["'Good answer.'", "'Depends? You’re not committed?'", "'That’s weak.'", "'What does that mean, Mole?'"],
        character: "gustavo"
    },
    {
        text: "Carlos is watching you closely. 'What’s the code if something goes wrong?'",
        choices: ["Code red.", "Keep silent.", "Disappear.", "Call Maria."],
        correctAnswer: 2,
        reaction: ["'No, it's more discreet.'", "'Not good enough.'", "'You got it.'", "'Call her? Not an option.'"],
        character: "carlos"
    },
    {
        text: "Maria nods approvingly. 'What do we prioritize in a deal?'",
        choices: ["Secrecy", "Speed", "Money", "Safety"],
        correctAnswer: 0,
        reaction: ["'Yes, always.'", "'Speed leads to mistakes.'", "'Money matters, but no.'", "'Not priority one.'"],
        character: "maria"
    },
    {
        text: "Gustavo leans back. 'Final question, Mole. What would you risk to stay in this group?'",
        choices: ["My life", "Everything", "Nothing", "Only what I must"],
        correctAnswer: 1,
        reaction: ["'Loyal, but...'", "'Good, you're serious.'", "'Nothing? Why are you here then?'", "'Not enough, Mole.'"],
        character: "gustavo"
    },
    {
        text: "Carlos studies you intensely. 'What’s our biggest threat?'",
        choices: ["The police", "Disloyal members", "Competitors", "The press"],
        correctAnswer: 1,
        reaction: ["'They're a risk, but no.'", "'Yes, trust matters most.'", "'They can’t touch us.'", "'The media? Really?'"],
        character: "carlos"
    },
    {
        text: "Maria smirks. 'If one of us fell behind, what would you do?'",
        choices: ["Leave them", "Help them", "Wait for orders", "Ignore them"],
        correctAnswer: 2,
        reaction: ["'Too cold, Mole.'", "'Too soft-hearted.'", "'Good choice.'", "'No loyalty?'"],
        character: "maria"
    },
    {
        text: "Gustavo is pleased. 'Which one of us do you trust the most?'",
        choices: ["Carlos", "Maria", "You, Gustavo", "I trust no one"],
        correctAnswer: 3,
        reaction: ["'Carlos? Odd choice.'", "'Interesting, but no.'", "'You should be careful with words.'", "'Smart choice.'"],
        character: "gustavo"
    },
    {
        text: "Carlos asks casually, 'What’s your first move in a risky situation?'",
        choices: ["Retreat", "Analyze", "Attack", "Ask for help"],
        correctAnswer: 1,
        reaction: ["'Cowardly, no.'", "'Yes, assess first.'", "'Too hasty.'", "'Weak answer.'"],
        character: "carlos"
    },
    {
        text: "Maria tests you again. 'Who would you report to first if things go south?'",
        choices: ["Gustavo", "Carlos", "Maria", "No one"],
        correctAnswer: 0,
        reaction: ["'Correct.'", "'No, it's not Carlos.'", "'Not the advisor.'", "'That's suspicious, Mole.'"],
        character: "maria"
    },
    {
        text: "Gustavo smiles. 'What's more important than loyalty?'",
        choices: ["Respect", "Fear", "Success", "Nothing"],
        correctAnswer: 3,
        reaction: ["'No, it’s loyalty.'", "'Fear breeds resentment.'", "'Ambitious, but no.'", "'Exactly.'"],
        character: "gustavo"
    },
    {
        text: "Carlos narrows his eyes. 'What are you willing to sacrifice?'",
        choices: ["My life", "My family", "My freedom", "Nothing"],
        correctAnswer: 2,
        reaction: ["'Brave, but no.'", "'Too risky, no.'", "'Correct.'", "'Lacking commitment.'"],
        character: "carlos"
    },
    {
        text: "Maria tilts her head. 'How do you handle betrayal?'",
        choices: ["Cut ties", "Take revenge", "Report to Gustavo", "Ignore it"],
        correctAnswer: 2,
        reaction: ["'Cowardly.'", "'Risky choice.'", "'Good answer.'", "'That won’t work.'"],
        character: "maria"
    },
    {
        text: "Gustavo frowns. 'If I gave you a difficult mission, would you refuse?'",
        choices: ["Never", "If it's dangerous", "Only if it conflicts with values", "Depends on the reward"],
        correctAnswer: 0,
        reaction: ["'Good.'", "'Not an option, Mole.'", "'Values? Hmm...'", "'You’re here for rewards only?'"],
        character: "gustavo"
    },
    {
        text: "Carlos finishes the questioning. 'If I asked you to eliminate a threat, would you hesitate?'",
        choices: ["Yes", "Depends", "Never", "Only if necessary"],
        correctAnswer: 2,
        reaction: ["'Hesitation is weakness.'", "'Not convincing enough.'", "'You’re ready.'", "'Not enough.'"],
        character: "carlos"
    },
    {
        text: "Maria: 'We need more intel on our rivals.'",
        choices: ["I'll handle it.", "What do you need?", "Let's wait and see.", "I don't think that's wise."],
        correctAnswer: 0,
        reaction: ["'That's the spirit.'", "'Good thinking.'", "'Hesitant, are we?'", "'You doubt my strategy?'"],
        character: "maria"
    },
    
];

let currentStage = 0;
let score = 0;
let wrongAnswers = 0;
const maxWrongAnswers = 5;

function startGame() {
    document.getElementById("game-instructions").classList.add("hidden");
    document.getElementById("start-button").classList.add("hidden");
    document.getElementById("initial-character-container").classList.add("hidden");
    document.getElementById("game-content").classList.remove("hidden");
    loadStage();
}

function loadStage() {
    const stage = storyStages[currentStage];
    document.getElementById("story-text").textContent = stage.text;
    document.getElementById("result-text").textContent = "";
    document.getElementById("next-button").classList.add("hidden");

    // Hide all character images
    document.querySelectorAll(".character").forEach(img => img.classList.add("hidden"));

    // Display only the active character based on `stage.character`
    document.getElementById(stage.character).classList.remove("hidden");

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    stage.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(index);
        choicesContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const stage = storyStages[currentStage];
    const resultText = document.getElementById("result-text");

    if (selectedIndex === stage.correctAnswer) {
        resultText.textContent = stage.reaction[1];
        resultText.style.color = "green";
        score++;
    } else {
        resultText.textContent = stage.reaction[selectedIndex];
        resultText.style.color = "darkred";
        wrongAnswers++;
        if (wrongAnswers >= maxWrongAnswers) {
            endGame("discovered");
            return;
        }
    }

    setTimeout(() => {
        document.getElementById("next-button").classList.remove("hidden");
    }, 500);
}

function nextStage() {
    if (currentStage < storyStages.length - 1) {
        currentStage++;
        loadStage();
    } else {
        endGame("won");
    }
}

function endGame(result) {
    document.getElementById("game-content").classList.add("hidden");
    document.getElementById("game-over").classList.remove("hidden");

    document.getElementById("game-result").textContent =
        result === "discovered" ? "You've been discovered!" : "You've survived as Mole!";
}

function restartGame() {
    currentStage = 0;
    score = 0;
    wrongAnswers = 0;
    document.getElementById("game-over").classList.add("hidden");
    document.getElementById("game-instructions").classList.remove("hidden");
    document.getElementById("start-button").classList.remove("hidden");
    document.getElementById("initial-character-container").classList.remove("hidden");
}

document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("next-button").addEventListener("click", nextStage);
document.getElementById("restart-button").addEventListener("click", restartGame);

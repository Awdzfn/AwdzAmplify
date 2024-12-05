
(function() {

    const style = document.createElement("style");
    style.type = "text/css";
    style.textContent = `
        .awdz-menu {
            position: fixed;
            top: 10px;
            right: 10px;
            padding: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            border-radius: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 10000;
        }
        .awdz-menu h2 {
            margin: 0 0 10px 0;
            font-size: 18px;
        }
        .awdz-menu p {
            margin: 0 0 15px 0;
        }
        .awdz-menu button {
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            background: blue;
            color: white;
            cursor: pointer;
        }
        .awdz-menu .close-button {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);


    const menu = document.createElement("div");
    menu.className = "awdz-menu";

  
    const title = document.createElement("h2");
    title.innerText = "AWDZ Amplify Help";
    menu.appendChild(title);

   
    const instructions = document.createElement("p");
    instructions.innerText = "Highlight text and click 'Get Help'!";
    menu.appendChild(instructions);

   
    const button = document.createElement("button");
    button.innerText = "Get Help";
    button.onclick = function() {
        const selectedText = window.getSelection().toString().trim();

        if (!selectedText) {
            alert("Please highlight some text first!");
            return;
        }

    
        const helpers = {
            "dejection": {
                question: "Leo should try not to let dejection get him down. What does this mean?",
                options: [
                    "He should try not to let a deep feeling of shame get him down.",
                    "He should try not to let a deep feeling of longing get him down.",
                    "He should try not to let a deep feeling of sadness get him down."
                ],
                answer: 3 
            },
            "transfer": {
                question: "Which option best describes the action of transfer?",
                options: [
                    "To stay in one place.",
                    "To move something from one place to another.",
                    "To create something new."
                ],
                answer: 2
            },
            "virtually": {
                question: "What does 'virtually' mean in this context?",
                options: [
                    "Completely or entirely.",
                    "Almost but not completely.",
                    "Not at all."
                ],
                answer: 2 
            }
        };

        const match = Object.keys(helpers).find(key =>
            selectedText.toLowerCase().includes(key.toLowerCase())
        );

        if (match) {
            const helper = helpers[match];
            let response = `${helper.question}\n\n`;
            helper.options.forEach((option, index) => {
                response += `${String.fromCharCode(65 + index)}. ${option}\n`;
            });

            
            const correctAnswer = String.fromCharCode(65 + helper.answer - 1); 
            response += `\nThe correct answer is: ${correctAnswer}`;

            alert(response);
        } else {
            alert("No specific question found for this word. Try rephrasing!");
        }
    };
    menu.appendChild(button);

    // Close Button
    const closeButton = document.createElement("span");
    closeButton.innerText = "✖";
    closeButton.className = "close-button";
    closeButton.onclick = function() {
        document.body.removeChild(menu);
    };
    menu.appendChild(closeButton);

   
    document.body.appendChild(menu);
})();

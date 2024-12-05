// AWDZ Amplify Help Menu
(function() {
    // Create a CSS style block for the menu
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

    // Create the help menu
    const menu = document.createElement("div");
    menu.className = "awdz-menu";

    // Title
    const title = document.createElement("h2");
    title.innerText = "AWDZ Amplify Help";
    menu.appendChild(title);

    // Instructions
    const instructions = document.createElement("p");
    instructions.innerText = "Highlight text and click 'Get Help'!";
    menu.appendChild(instructions);

    // Button
    const button = document.createElement("button");
    button.innerText = "Get Help";
    button.onclick = function() {
        const selectedText = window.getSelection().toString().trim();

        if (!selectedText) {
            alert("Please highlight some text first!");
            return;
        }

        // Ask the user a question about the highlighted text
        const userQuestion = prompt(`You highlighted:\n"${selectedText}"\n\nEnter your question about this text:`);
        if (!userQuestion) {
            alert("No question entered.");
            return;
        }

        // Helper database
        const helpers = {
            "photosynthesis": "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce oxygen and energy in the form of glucose.",
            "gravity": "Gravity is the force that pulls objects toward the center of the Earth or other massive bodies.",
            "evaporation": "Evaporation is the process where liquid water turns into vapor due to heat.",
            "2+2": "Four"
        };

        // Try to match a key from the helpers database
        const match = Object.keys(helpers).find(key => 
            selectedText.toLowerCase().includes(key.toLowerCase()) || 
            userQuestion.toLowerCase().includes(key.toLowerCase())
        );

        if (match) {
            alert(`Helper's Response:\n\n${helpers[match]}`);
        } else {
            alert("No specific answer found. Try rephrasing your question!");
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

    // Add the menu to the page
    document.body.appendChild(menu);
})();

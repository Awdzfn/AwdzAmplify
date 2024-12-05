// AWDZ Amplify Help Menu
(function() {
    // Inject CSS Styles
    const style = document.createElement("style");
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
            font-family: Arial, sans-serif;
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
        .awdz-menu .close-btn {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
            color: white;
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);

    // Create the menu
    const menu = document.createElement("div");
    menu.classList.add("awdz-menu");

    // Title
    const title = document.createElement("h2");
    title.innerText = "AWDZ Amplify Help";
    menu.appendChild(title);

    // Instructions
    const instructions = document.createElement("p");
    instructions.innerText = "Highlight text and click 'Get Help'!";
    menu.appendChild(instructions);

    // Get Help Button
    const button = document.createElement("button");
    button.innerText = "Get Help";
    button.onclick = function() {
        const selectedText = window.getSelection().toString().trim();

        if (!selectedText) {
            alert("Please highlight some text first!");
            return;
        }

        // Helpers database
        const helpers = {
            "photosynthesis": "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce oxygen and energy in the form of glucose.",
            "gravity": "Gravity is the force that pulls objects toward the center of the Earth or other massive bodies.",
            "evaporation": "Evaporation is the process where liquid water turns into vapor due to heat.",
            "2+2": "The answer is four."
        };

        const matchKey = Object.keys(helpers).find(key =>
            selectedText.toLowerCase().includes(key.toLowerCase())
        );

        if (matchKey) {
            alert(`Helper's Response:\n\n${helpers[matchKey]}`);
        } else {
            alert("No specific answer found. Try rephrasing your question!");
        }
    };
    menu.appendChild(button);

    // Close Button
    const closeButton = document.createElement("span");
    closeButton.innerText = "✖";
    closeButton.classList.add("close-btn");
    closeButton.onclick = function() {
        document.body.removeChild(menu);
    };
    menu.appendChild(closeButton);

    // Add the menu to the document
    document.body.appendChild(menu);
})();

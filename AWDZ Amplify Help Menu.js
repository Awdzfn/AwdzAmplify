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

        // Prompt the user for options (A: ..., B: ...)
        const userOptions = prompt(
            `You highlighted:\n"${selectedText}"\n\nEnter the options (e.g., A: Option 1, B: Option 2):`
        );
        if (!userOptions) {
            alert("No options provided.");
            return;
        }

        // Parse options using regex
        const optionRegex = /^([A-Z]):\s*(.+)$/i;
        const options = {};
        const lines = userOptions.split("\n");

        for (const line of lines) {
            const match = optionRegex.exec(line.trim());
            if (match) {
                const key = match[1].toUpperCase();
                const value = match[2];

                if (options[key]) {
                    alert(`Duplicate option detected: ${key}. Please ensure each option is unique.`);
                    return;
                }

                options[key] = value;
            }
        }

        if (Object.keys(options).length === 0) {
            alert("No valid options detected. Please use the format A: Option 1, B: Option 2, etc.");
            return;
        }

        // Helpers database
        const helpers = {
            "photosynthesis": "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce oxygen and energy in the form of glucose.",
            "gravity": "Gravity is the force that pulls objects toward the center of the Earth or other massive bodies.",
            "evaporation": "Evaporation is the process where liquid water turns into vapor due to heat."
            "2+2": "The answer is four."
        };

        const matchKey = Object.keys(helpers).find(key =>
            selectedText.toLowerCase().includes(key.toLowerCase())
        );

        if (matchKey) {
            const helperResponse = helpers[matchKey].toLowerCase();

            // Match helper response to options
            const bestOption = Object.keys(options).find(optionKey =>
                helperResponse.includes(options[optionKey].toLowerCase())
            );

            if (bestOption) {
                alert(`The best match is:\n\n${bestOption}: ${options[bestOption]}`);
            } else {
                alert("No matching option found. Try revising your options!");
            }
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

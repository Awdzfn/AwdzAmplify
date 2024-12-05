// AWDZ Amplify Help Menu
(function() {
    // Create a simple menu overlay
    var menu = document.createElement("div");
    menu.style.position = "fixed";
    menu.style.top = "10px";
    menu.style.right = "10px";
    menu.style.padding = "20px";
    menu.style.background = "rgba(0, 0, 0, 0.8)";
    menu.style.color = "white";
    menu.style.borderRadius = "10px";
    menu.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    menu.style.zIndex = 10000;

    // Title
    var title = document.createElement("h2");
    title.innerText = "AWDZ Amplify Help";
    title.style.margin = "0 0 10px 0";
    title.style.fontSize = "18px";
    menu.appendChild(title);

    // Instructions
    var instructions = document.createElement("p");
    instructions.innerText = "Highlight text and click 'Get Help'!";
    instructions.style.margin = "0 0 15px 0";
    menu.appendChild(instructions);

    // Button
    var button = document.createElement("button");
    button.innerText = "Get Help";
    button.style.padding = "10px 15px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.background = "blue";
    button.style.color = "white";
    button.style.cursor = "pointer";

    button.onclick = function() {
        var selectedText = window.getSelection().toString().trim();

        if (!selectedText) {
            alert("Please highlight some text first!");
            return;
        }

        // Ask the user for options (A, B, C, etc.)
        var userOptions = prompt(`You highlighted:\n"${selectedText}"\n\nEnter the options (e.g., A: Option 1, B: Option 2, C: Option 3):`);
        if (!userOptions) {
            alert("No options provided.");
            return;
        }

        // Parse options automatically using regex
        var optionRegex = /([A-Z]):\s*([^,]+)/g;
        var options = {};
        var match;
        while ((match = optionRegex.exec(userOptions)) !== null) {
            options[match[1].toUpperCase()] = match[2].trim();
        }

        if (Object.keys(options).length === 0) {
            alert("No valid options detected. Please ensure your input includes labels like A:, B:, C:...");
            return;
        }

        // Helpers database
        var helpers = {
            "photosynthesis": "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce oxygen and energy in the form of glucose.",
            "gravity": "Gravity is the force that pulls objects toward the center of the Earth or other massive bodies.",
            "evaporation": "Evaporation is the process where liquid water turns into vapor due to heat."
        };

        // Try to match the selected text
        var matchKey = Object.keys(helpers).find(key => selectedText.toLowerCase().includes(key.toLowerCase()));

        if (matchKey) {
            var helperResponse = helpers[matchKey].toLowerCase();

            // Check which option matches the helper response
            var bestOption = null;
            Object.keys(options).forEach(optionKey => {
                if (helperResponse.includes(options[optionKey].toLowerCase())) {
                    bestOption = optionKey;
                }
            });

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
    var closeButton = document.createElement("span");
    closeButton.innerText = "✖";
    closeButton.style.position = "absolute";
    closeButton.style.top = "5px";
    closeButton.style.right = "10px";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = function() {
        document.body.removeChild(menu);
    };

    menu.appendChild(closeButton);

    document.body.appendChild(menu);
})();

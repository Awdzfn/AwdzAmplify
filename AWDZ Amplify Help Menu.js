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

        // Ask the user a question about the highlighted text
        var userQuestion = prompt(`You highlighted:\n"${selectedText}"\n\nEnter your question about this text:`);
        if (!userQuestion) {
            alert("No question entered.");
            return;
        }

        // Process the text/question and display the result
        var helpers = {
            "photosynthesis": "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce oxygen and energy in the form of glucose.",
            "gravity": "Gravity is the force that pulls objects toward the center of the Earth or other massive bodies.",
            "evaporation": "Evaporation is the process where liquid water turns into vapor due to heat."
        };

        var match = Object.keys(helpers).find(key => selectedText.toLowerCase().includes(key));
        if (match) {
            alert(`Helper's Response:\n\n${helpers[match]}`);
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

let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = button.innerText;

        // Clear
        if (value === "C") {
            display.value = "";
        }

        // Delete
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        // Calculate
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }

        // Normal input
        else {
            display.value += value;
        }

    });

});
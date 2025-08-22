// Get elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button"); // ✅ only calculator buttons
const historyBox = document.getElementById("history");
const toggleHistoryBtn = document.getElementById("toggleHistory");
const themeToggle = document.getElementById("themeToggle");
const calculator = document.querySelector(".calculator");

// Variables
let historyVisible = true;

// Handle calculator button clicks
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;

    if (value === "C") {
      display.value = "";
    }
    else if (value === "⌫") {
      display.value = display.value.slice(0, -1);
    }
    else if (value === "=") {
      try {
        let result = eval(display.value.replace("×", "*").replace("÷", "/"));
        document.getElementById("historyList").innerHTML += `<li>${display.value} = ${result}</li>`;
        display.value = result;
        historyBox.scrollTop = historyBox.scrollHeight;
      } catch {
        display.value = "Error";
      }
    }
    else {
      display.value += value;
    }
  });
});

// Toggle history
toggleHistoryBtn.addEventListener("click", () => {
  historyVisible = !historyVisible;
  historyBox.style.display = historyVisible ? "block" : "none";
});

// Theme toggle
themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    calculator.classList.add("dark");
    calculator.classList.remove("light");
  } else {
    calculator.classList.add("light");
    calculator.classList.remove("dark");
  }
});

// Turn on/off dark mode
function darkMode() {
    var element = document.body;
    var darkbuttonPortuguese = document.getElementById("dark-mode-button-portuguese");
    var darkbuttonEnglish = document.getElementById("dark-mode-button-english");
    var topLogo = document.getElementById("logo-top");
    var bottomLogo = document.getElementById("logo-bottom");

    if (element.classList.toggle("dark-mode")) {
        darkbuttonPortuguese.src = "assets/SVG/top-navigator/sun.svg";
        darkbuttonEnglish.src = "assets/SVG/top-navigator/sun.svg";
        topLogo.src = "assets/icon/site-logo-dark.png";
        bottomLogo.src = "assets/icon/site-logo-dark.png";
    } else {
        darkbuttonPortuguese.src = "assets/SVG/top-navigator/moon.svg";
        darkbuttonEnglish.src = "assets/SVG/top-navigator/moon.svg";
        topLogo.src = "assets/icon/site-logo-light.png";
        bottomLogo.src = "assets/icon/site-logo-light.png";
    }
}

// Toggle options to select language
function toggleLanguageMenu() {
    var langMenus = document.querySelectorAll('.lang-menu');
    langMenus.forEach(function(menu) {
        menu.style.display = menu.style.display === "none" ? "block" : "none";
    });
}

// Select language function
var copied = document.getElementById("copy-email");
var copySuccessMessageEnglish = "✓ Copied!";
var copySuccessMessagePortuguese = "✓ Copiado!";
var currentLanguage = 'portuguese';

function changeLanguage(language) {
    var englishElements = document.querySelectorAll('.english');
    var portugueseElements = document.querySelectorAll('.portuguese');
    var langMenuPortuguese = document.getElementById("lang-menu-portuguese");
    var langMenuEnglish = document.getElementById("lang-menu-english");

    if (language === 'english') {
        copied.innerHTML = "⭠ Click to copy.";
        englishElements.forEach(function(element) {
            element.style.display = 'block';
        });
        portugueseElements.forEach(function(element) {
            element.style.display = 'none';
        });
        langMenuPortuguese.style.display = 'none'; // Hide Portuguese menu
        langMenuEnglish.style.display = 'block'; // Show English menu
    } else if (language === 'portuguese') {
        copied.innerHTML = "⭠ Clique para copiar.";
        englishElements.forEach(function(element) {
            element.style.display = 'none';
        });
        portugueseElements.forEach(function(element) {
            element.style.display = 'block';
        });
        langMenuPortuguese.style.display = 'block'; // Show Portuguese menu
        langMenuEnglish.style.display = 'none'; // Hide English menu
    }

    currentLanguage = language; // Update current language
    toggleLanguageMenu(); // Close language menu after selection
}

// Click and copy function
var span = document.getElementById("email");

span.onclick = function() {
    document.execCommand("copy");
    copied.classList.remove("fade-out", "hide");
    copied.classList.add("fade-in", "show");

    if (currentLanguage === 'english') {
        copied.innerHTML = copySuccessMessageEnglish;
    } else if (currentLanguage === 'portuguese') {
        copied.innerHTML = copySuccessMessagePortuguese;
    }
    setTimeout(function() {
        copied.classList.remove("fade-in", "show");
        copied.classList.add("fade-out");
        if (currentLanguage === 'english') {
            copied.innerHTML = "⭠ Click to copy.";
        } else if (currentLanguage === 'portuguese') {
            copied.innerHTML = "⭠ Clique para copiar.";
        }
    }, 2000);
}

span.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", span.textContent);
        console.log(event.clipboardData.getData("text"));
    }
});

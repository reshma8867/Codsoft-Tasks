document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-content h2");
    let text = "Hi, I'm Reshma";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            heroText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});

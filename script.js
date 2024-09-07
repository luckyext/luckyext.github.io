document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");
    const copyText = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/BigHacker123/loader/main/.lua"))();';

    copyButton.addEventListener("click", function () {
        const textarea = document.createElement("textarea");
        textarea.value = copyText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        copyButton.textContent = "Copied!";

        setTimeout(function () {
            copyButton.textContent = "Copy Code";
        }, 2000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Existing code...

    // Slideshow
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    function showSlide(n) {
        if (n < 0) {
            slideIndex = slides.length - 1;
        } else if (n >= slides.length) {
            slideIndex = 0;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex].style.display = "block";
    }

    showSlide(slideIndex);

    prevButton.addEventListener("click", () => {
        showSlide(slideIndex -= 1);
    });

    nextButton.addEventListener("click", () => {
        showSlide(slideIndex += 1);
    });
});

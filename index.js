document.addEventListener("DOMContentLoaded", function() {
    const text = "Blake Watton-Dirkse";
    const speed = 100; // Speed of typing in milliseconds
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

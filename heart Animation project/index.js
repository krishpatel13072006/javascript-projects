const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const spanEl = document.createElement("span"); // Corrected variable name
    spanEl.style.left = xpos + "px";
    spanEl.style.top = ypos + "px";
    
    // Random size between 10px and 60px
    const size = Math.random()*50+10;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // Apply span styles
    spanEl.style.background = "url('heart.png') no-repeat center";
    spanEl.style.backgroundSize = "cover";
    spanEl.style.pointerEvents = "none";
    spanEl.style.animation = "animation 6s linear";

    // Append to body
    bodyEl.appendChild(spanEl);

    // Remove span after 3 seconds
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});

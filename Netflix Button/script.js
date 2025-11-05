document.addEventListener("DOMContentLoaded", () => {
  const linesContainer = document.querySelector(".lines");

  // create lines that fill the whole box width
  const totalLines = 130;
  for (let i = 0; i < totalLines; i++) {
    const span = document.createElement("span");
    span.style.left = `${(i * (100 / totalLines))}%`;
    span.style.transitionDelay = `${Math.random() * 0.5}s`;
    linesContainer.appendChild(span);
  }

  // custom live cursor
  const cursor = document.getElementById("customCursor");
  const btn = document.querySelector(".btn");

  let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
  let lastMouseX = 0, lastMouseY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  btn.addEventListener("mouseenter", () => cursor.classList.add("btn-hover"));
  btn.addEventListener("mouseleave", () => cursor.classList.remove("btn-hover"));

  const lerp = (a, b, n) => (1 - n) * a + n * b;

  function animate() {
    curX = lerp(curX, mouseX, 0.18);
    curY = lerp(curY, mouseY, 0.18);

    const dx = mouseX - lastMouseX;
    const dy = mouseY - lastMouseY;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    cursor.style.left = curX + "px";
    cursor.style.top = curY + "px";
    cursor.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

    lastMouseX = mouseX;
    lastMouseY = mouseY;

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});

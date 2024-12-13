const isInstructions = document.body.classList.contains("instructions");

const createTriangle = () => {
  const triangle = document.createElement("div");
  triangle.className = "triangle";
  const startY = window.scrollY + window.innerHeight - 50;
  triangle.style.setProperty("--start-y", `${startY}px`);

  if (isInstructions) {
    // get the width of the page
    const root = document.documentElement;
    const maxWidth = parseInt(
      getComputedStyle(root)
        .getPropertyValue("--max-width")
        .trim()
        .replace("px", "")
    );

    if (window.innerWidth < maxWidth) {
      return;
    }

    const marginWidth = (window.innerWidth - maxWidth) / 2;
    triangle.style[Math.random() > 0.5 ? "left" : "right"] =
      10 + Math.random() * marginWidth + "px";
  } else {
    triangle.style.left = 3 + Math.random() * 90 + "vw";
  }

  const speed = 60 + 40 * Math.random(); // pixels per second
  const distance = startY;
  const time = distance / speed;

  triangle.style.animationDuration = time + "s";
  triangle.style.animationDelay = "0s";
  document.body.appendChild(triangle);
  setTimeout(() => triangle.remove(), time * 1000 + 100);
};

function rate() {
  if (window.innerWidth > 1600) {
    return 400;
  }
  if (window.innerWidth > 1200) {
    return 500;
  }
  if (window.innerWidth > 800) {
    return 600;
  }
  if (window.innerWidth > 400) {
    return 800;
  }
  return 1000;
}

setInterval(createTriangle, rate());

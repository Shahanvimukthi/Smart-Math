(() => {
  const quiz = document.querySelector("[data-quiz]");
  const feedback = document.querySelector("[data-quiz-feedback]");
  const radiusControl = document.querySelector("[data-radius-control]");
  const heightControl = document.querySelector("[data-height-control]");
  const rotationControl = document.querySelector("[data-rotation-control]");
  const cylinder = document.querySelector("[data-cylinder]");
  const volumeResult = document.querySelector("[data-volume-result]");
  const radiusValue = document.querySelector("[data-radius-value]");
  const heightValue = document.querySelector("[data-height-value]");

  quiz?.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedAnswer = new FormData(quiz).get("answer");

    if (!selectedAnswer) {
      feedback.textContent = document.documentElement.lang === "si"
        ? "පිළිතුරක් තෝරා නැවත උත්සාහ කරන්න."
        : "Choose an answer, then try again.";
      feedback.className = "quiz-feedback is-neutral";
      return;
    }

    const isCorrect = selectedAnswer === "5";
    feedback.textContent = document.documentElement.lang === "si"
      ? (isCorrect ? "නිවැරදියි! x = 5." : "තවමත් නිවැරදි නැහැ. දෙපසින්ම 4 අඩු කර නැවත උත්සාහ කරන්න.")
      : (isCorrect ? "That's right! x = 5." : "Not quite. Subtract 4 from both sides and try again.");
    feedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
  });

  function updateCylinder() {
    const radius = Number(radiusControl.value);
    const height = Number(heightControl.value);
    const volume = Math.PI * radius ** 2 * height;

    radiusValue.value = String(radius);
    heightValue.value = String(height);
    volumeResult.textContent = volume.toFixed(1);
    cylinder.style.setProperty("--cylinder-rotation", `${rotationControl.value}deg`);
    cylinder.style.setProperty("--cylinder-height", `${110 + height * 8}px`);
    cylinder.style.setProperty("--cylinder-width", `${70 + radius * 9}px`);
  }

  [radiusControl, heightControl, rotationControl].forEach((control) => {
    control?.addEventListener("input", updateCylinder);
  });
  if (radiusControl && heightControl && rotationControl && cylinder && volumeResult && radiusValue && heightValue) {
    updateCylinder();
  }
})();

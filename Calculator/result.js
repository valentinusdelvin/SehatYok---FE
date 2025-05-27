document.addEventListener("DOMContentLoaded", () => {
  const bmiResult = localStorage.getItem("bmiResult");
  const bmiCategory = localStorage.getItem("bmiCategory");

  const resultCard = document.querySelector(".result-card");

  if (document.getElementById("bmi-result")) {
    document.getElementById("bmi-result").innerText = bmiResult ?? "-";
    document.getElementById("bmi-category").innerText = bmiCategory ?? "-";

    resultCard.classList.remove("underweight", "normal", "overweight", "obese");

    // Kasih class sesuai kategori
    switch (bmiCategory) {
      case "Kurus (Underweight)":
        resultCard.classList.add("underweight");
        break;
      case "Normal":
        resultCard.classList.add("normal");
        break;
      case "Berlebih (Overweight)":
        resultCard.classList.add("overweight");
        break;
      case "Obesitas":
        resultCard.classList.add("obese");
        break;
    }
  }
});

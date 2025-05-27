function increase(id) {
  let value = parseInt(document.getElementById(id).innerText);
  if (value<100) value++;
  document.getElementById(id).innerText = value;

  // simpan ke localStorage
  localStorage.setItem(id, value);
}

function decrease(id) {
  let value = parseInt(document.getElementById(id).innerText);
  if (value > 0) value--;
  document.getElementById(id).innerText = value;

  // simpan ke localStorage
  localStorage.setItem(id, value);
}

// Height Slider
const heightValue = document.getElementById("height-value");
const heightSlider = document.getElementById("height-slider");

heightSlider.oninput = () => {
  heightValue.innerText = heightSlider.value;
  localStorage.setItem("heightValue", heightSlider.value);
};

// set default saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const savedHeight = localStorage.getItem("heightValue");
  if (savedHeight) {
    heightSlider.value = savedHeight;
    heightValue.innerText = savedHeight;
  } else {
    heightValue.innerText = heightSlider.value;
  }

  // Load weight & age kalau ada
  const weightValue = localStorage.getItem("weight-value");
  if (weightValue) document.getElementById("weight-value").innerText = weightValue;

  const ageValue = localStorage.getItem("age-value");
  if (ageValue) document.getElementById("age-value").innerText = ageValue;

  // Load gender toggle
  const savedGender = localStorage.getItem("gender");
  if (savedGender) {
    isMale = savedGender === "Male";
    toggleBtn.style.left = isMale ? "5px" : "calc(100% - 55px)";
    selectedGender = isMale ? "Male" : "Female";
  }
});

// Gender Toggle
let isMale = true;
const toggleBtn = document.getElementById("toggle-btn");
const toggle = document.getElementById("gender-toggle");
let selectedGender = "Male";

toggle.onclick = () => {
  isMale = !isMale;
  toggleBtn.style.left = isMale ? "5px" : "calc(100% - 55px)";
  selectedGender = isMale ? "Male" : "Female";

  // simpan ke localStorage
  localStorage.setItem("gender", selectedGender);
};

// BMI Calculation
document.getElementById("calculate-btn").onclick = () => {
  const age = parseInt(document.getElementById("age-value").innerText);
  const weight = parseFloat(document.getElementById("weight-value").innerText);
  const heightCm = parseFloat(heightSlider.value);
  const heightM = heightCm / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  let category = "";
  if (bmi < 18.5) category = "Kurus (Underweight)";
  else if (bmi < 24.9) category = "Normal";
  else if (bmi < 29.9) category = "Berlebih (Overweight)";
  else category = "Obesitas";

  // Simpan ke localStorage
  localStorage.setItem("bmiResult", bmi);
  localStorage.setItem("bmiCategory", category);

  // Pindah ke result.html
  window.location.href = "result.html";
};

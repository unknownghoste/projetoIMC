document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const imcResultElement = document.getElementById("imcResult");

  calculateButton.addEventListener("click", () => {
      const name = nameInput.value;
      const age = parseInt(ageInput.value);
      const gender = genderInput.value;
      const height = parseFloat(heightInput.value) / 100;
      const weight = parseFloat(weightInput.value);

      if (!name || isNaN(age) || !gender || isNaN(height) || isNaN(weight)) {
          imcResultElement.textContent = "Preencha todos os campos corretamente.";
          return;
      }

      const imc = calculateIMC(weight, height);
      const classification = classifyIMC(imc);

      imcResultElement.textContent = `${name}, seu IMC é ${imc.toFixed(2)} (${classification}).`;
  });

  function calculateIMC(weight, height) {
      return weight / (height * height);
  }

  function classifyIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    else if (imc < 24.9) return "Peso normal";
    else if (imc < 29.9) return "Sobrepeso";
    else if (imc < 29.9) return "Obesidade classe I";
    else if (imc < 34.9) return "Obesidade classe II";
    else return "Obesidade classe III";}


  const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
    
    nameInput.value = "";
    ageInput.value = "";
    genderInput.value = "";
    heightInput.value = "";
    weightInput.value = "";
    imcResultElement.textContent = "";
});

});

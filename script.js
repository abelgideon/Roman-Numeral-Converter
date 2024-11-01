const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const input = document.getElementById("number");

const decimalToRoman = (num) => {
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let converted = "";

  for (let i = 0; i < symbols.length; i++) {
    while (num >= values[i]) {
      converted += symbols[i];
      num -= values[i];
    }
  }

  return converted;
};

const handleOutput = () => {
  output.classList.add("output-bg");
  output.classList.remove("hide");
  let num = parseInt(input.value);

  if (checkInput(num)) {
    output.innerText = decimalToRoman(num);
  }
};

const checkInput = (inp) => {
  if (inp === -1 || inp <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return false;
  } else if (isNaN(inp)) {
    output.innerText = "Please enter a valid number";
    return false;
  } else if (inp >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return false;
  }
  return true;
};

convertBtn.addEventListener("click", handleOutput);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleOutput();
  }
});

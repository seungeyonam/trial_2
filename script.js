// Function to handle option 1
function chooseOption1() {
  document.getElementById('result').textContent = "I did.";
  // Add logic for Scene 1
}

// Function to handle option 2
function chooseOption2() {
  document.getElementById('result').textContent = "어쩔개밥바라기";
  // Add logic for Scene 2
}

// Event listener for Option 1 button click
document.getElementById('option1').addEventListener('click', chooseOption1);

// Event listener for Option 2 button click
document.getElementById('option2').addEventListener('click', chooseOption2);

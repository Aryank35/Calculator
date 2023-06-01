// Get the input field
const inputField = document.querySelector('.input');

// Get all the buttons
const buttons = document.querySelectorAll('.button');

// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    // Handle different button actions
    handleButtonAction(buttonText);
  });
});

// Add event listener for keyboard input
// document.addEventListener('keydown', event => {
//   const key = event.key;

//   // Handle different keyboard inputs
//   handleButtonAction(key);
// });

// Function to handle button actions
function handleButtonAction(input) {
  switch (input) {
    case 'AC':
      // Clear all input and memory
      inputField.value = '';
      break;
    case 'C':
      // Clear the most recent input
      inputField.value = inputField.value.slice(0, -1);
      break;
    case '^':
      // Append the power operator to the input field
      inputField.value += '^';
      break;
    case 'x':
        //Multiply the innertext
        inputField.value += '*';
        break;
    case '=':
      // Evaluate the expression in the input field
      try {
        const result = eval(inputField.value);
        inputField.value = result;
      } catch (error) {
        // Handle any errors in the expression
        inputField.value = 'Error';
      }
      break;
    default:
      // Append the input to the input field
      inputField.value += input;
      break;
  }
}

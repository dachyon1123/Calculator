
let calculatorButtons = document.querySelectorAll('.buttons')
let output = document.getElementById('outputText');
let outputInt = []; 


for (let i=calculatorButtons.length - 1; i>=0; i--){
  calculatorButtons[i].addEventListener('click', function() {
    let number = calculatorButtons[i].innerHTML
    if (number === "=") { 
      let value = eval(outputInt.join(''));
      output.innerHTML = value;
      outputInt.length = 0;
      outputInt.push(value)
    } else if (number === "C") {
      outputInt.length = 0;
      output.innerHTML = ""
    }
    else {
      outputInt.push(number);
      output.innerHTML = outputInt.join('')
    }
  })
}


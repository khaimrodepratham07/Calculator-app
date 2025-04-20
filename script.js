function startCalculator() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('calculator').classList.remove('hidden');
  }
  
  function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function backspace() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
  }
  
  function calculateResult() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch {
      document.getElementById('display').value = 'Error';
    }
  }
  

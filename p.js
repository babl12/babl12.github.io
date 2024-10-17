document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculate');
    const resultElement = document.getElementById('result');
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    
    const prices = {
      1: 100, 
      2: 200,
      3: 300  
    };
    
    
    function calculateTotal() {
      const productId = parseInt(productSelect.value);
      const quantity = parseInt(quantityInput.value);
      
      if (isNaN(quantity) || quantity <= 0) {
        resultElement.textContent = 'Ошибка: введите корректное количество.';
        return;
      }
      
      if (productId === 0) {
        resultElement.textContent = 'Ошибка: выберите товар.';
        return;
      }
      
      const price = prices[productId];
      const totalCost = price * quantity;
      
      resultElement.textContent = `Итоговая стоимость: ${totalCost} руб.`;
    }
  
    
    quantityInput.addEventListener('input', function () {
      const validInput = /^[0-9]*$/.test(quantityInput.value);
      if (!validInput) {
        quantityInput.style.borderColor = 'red';
      } else {
        quantityInput.style.borderColor = '';
      }
    });
  
    // Обработчик события на кнопку "Посчитать"
    calculateBtn.addEventListener('click', calculateTotal);
  });
  

document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculate');
    const resultElement = document.getElementById('result');
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    const optionsDiv = document.getElementById('options');
    const optionSelect = document.getElementById('optionSelect');
    const extraOptionCheckbox = document.getElementById('extraOption');
    
    const prices = {
      1: 100, 
      2: 200,
      3: 300  
    };
    
    
    productSelect.addEventListener('change', function () {
        const productId = parseInt(productSelect.value);
        if (productId === 2 || productId === 3) {
            optionsDiv.style.display = 'block'; 
        } else {
            optionsDiv.style.display = 'none'; 
        }
    });

    function calculateTotal() {
      const productId = parseInt(productSelect.value);
      const quantity = parseInt(quantityInput.value);
      const serviceType = document.querySelector('input[name="service"]:checked');
      
      if (!serviceType) {
        resultElement.textContent = 'Ошибка: выберите тип услуги.';
        return;
      }
      
      if (isNaN(quantity) || quantity <= 0) {
        resultElement.textContent = 'Ошибка: введите корректное количество.';
        return;
      }
      
      if (productId === 0) {
        resultElement.textContent = 'Ошибка: выберите товар.';
        return;
      }
      
      const price = prices[productId];
      let totalCost = price * quantity;

     
      if (productId === 2 || productId === 3) {
        const selectedOption = optionSelect.value;
        if (selectedOption === 'option1') {
          totalCost += 50;
        } else if (selectedOption === 'option2') {
          totalCost += 100;
        }
        
        
        if (extraOptionCheckbox.checked) {
          totalCost += 200;
        }
      }

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

    calculateBtn.addEventListener('click', calculateTotal);
});

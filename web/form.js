// Получаем форму
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Отключаем стандартное поведение формы

  // Получаем значения полей
  const name = form.querySelector("input[placeholder='Ваше имя']").value.trim();
  const phone = form.querySelector("input[placeholder='Телефон']").value.trim();
  const email = form.querySelector("input[placeholder='E-mail']").value.trim();
  const comment = form.querySelector("textarea[placeholder='Ваш комментарий']").value.trim();
  const consent = form.querySelector("input[type='checkbox']").checked;

  // Проверяем заполнение полей
  if (!name || !phone || !email || !comment || !consent) {
    alert("Пожалуйста, заполните все поля и дайте согласие на обработку данных.");
    return;
  }

  // Формируем данные для отправки
  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("comment", comment);

  // Отправляем данные на FormCarry
  fetch("https://formcarry.com/s/hwBv_HOfwFJ", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
        form.reset(); // Сбрасываем форму
      } else {
        alert("Произошла ошибка при отправке. Попробуйте еще раз.");
      }
    })
    .catch((error) => {
      console.error("Ошибка при отправке формы:", error);
      alert("Произошла ошибка при отправке. Попробуйте еще раз.");
    });
});

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  status.hidden = false;
  status.textContent = 'Спасибо! В прототипе заявка не отправляется. Подключим отправку после согласования контактов и способа обработки заявок.';
});

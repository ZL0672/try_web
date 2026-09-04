const dateElement = document.querySelector('#current-date');

if (dateElement) {
  const today = new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date());

  dateElement.textContent = today;
}

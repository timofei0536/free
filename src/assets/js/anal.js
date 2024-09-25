(function() {
  // Функция для обновления времени на предыдущей странице
  function updatePreviousPageDuration() {
    let visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
    if (visitedPages.length > 0) {
      let lastPageData = visitedPages[visitedPages.length - 1];
      if (lastPageData.enterTime) {
        // Вычисляем время нахождения на предыдущей странице
        lastPageData.duration += Math.floor((Date.now() - lastPageData.enterTime) / 1000);
        lastPageData.enterTime = null; // Сбрасываем, чтобы не дублировать расчет
      }
    }
    localStorage.setItem('visitedPages', JSON.stringify(visitedPages)); // Обновляем localStorage
  }

  // Функция для добавления текущей страницы
  function addCurrentPage() {
    let visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
    let currentPage = window.location.pathname;
    let referrer = document.referrer || 'Прямой вход'; // Получаем откуда пользователь пришел

    // Добавляем текущую страницу с начальным временем
    visitedPages.push({
      page: currentPage,
      referrer: referrer, // Страница, с которой пользователь перешел
      enterTime: Date.now(), // Время входа на страницу
      duration: 0 // Продолжительность изначально 0
    });

    // Сохраняем обновленные данные в localStorage
    localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
  }

  // Функция для получения пути пользователя с продолжительностью на каждой странице в нужном формате
  function getUserPath() {
    let visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];

    // Формируем путь пользователя в формате "/page (time sec) -> /nextpage (time sec)"
    return visitedPages.map(page => `${page.page} (${page.duration} сек.)`).join(' -> ');
  }

  // Обновляем время на предыдущей странице при каждом переходе на новую страницу
  updatePreviousPageDuration();

  // Добавляем текущую страницу в список посещенных
  addCurrentPage();

  // Показываем путь пользователя при каждом переходе на новую страницу
  window.userPath = getUserPath();

  // Очищаем данные при выходе с сайта (если не нужно сохранять на долгий срок)
  window.addEventListener('beforeunload', function() {
    updatePreviousPageDuration(); // Обновляем время на текущей странице перед закрытием
  });

})();

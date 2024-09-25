(function() {
  // Функция для обновления времени на предыдущей странице
  window.updatePreviousPageDuration = function() {
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

  // Функция для получения пути пользователя с продолжительностью на каждой странице и разрывами сеансов
  function getUserPath() {
    let visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
    let sessionGapThreshold = 30 * 60; // 30 минут, например, как порог для разрыва сеанса
    let previousEndTime = 0; // Для расчета разрыва времени между сеансами

    // Обновляем время на текущей странице перед выводом
    window.updatePreviousPageDuration();

    // Формируем путь пользователя в формате с разрывами сеансов
    return visitedPages.map((page, index) => {
      let referrerText = page.referrer.includes('http') ? `с ${page.referrer}` : page.referrer;
      let result = `${referrerText} на ${page.page} (${page.duration} сек.)`;

      // Если есть предыдущая страница, проверяем разрыв
      if (index > 0) {
        let previousPage = visitedPages[index - 1];
        let timeBetweenSessions = Math.floor((page.enterTime - previousPage.enterTime - previousPage.duration * 1000) / 1000);

        // Проверка на реальный разрыв сеанса (не по обычному переходу)
        if (timeBetweenSessions > sessionGapThreshold) {
          result = `[Разрыв сеанса] ` + result;
        }
      }
      return result;
    }).join(' -> ');
  }

  // Обновляем время на предыдущей странице при каждом переходе на новую страницу
  window.updatePreviousPageDuration();

  // Добавляем текущую страницу в список посещенных
  addCurrentPage();

  // Показываем путь пользователя при каждом переходе на новую страницу
  window.userPath = getUserPath();

  // Очищаем данные при выходе с сайта (если не нужно сохранять на долгий срок)
  window.addEventListener('beforeunload', function() {
    window.updatePreviousPageDuration(); // Обновляем время на текущей странице перед закрытием
  });

})();

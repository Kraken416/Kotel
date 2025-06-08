// =============================
// ЗАДАНИЕ 3.5 — Динамический вывод курсов
// Алгоритм:
// 1. Начало
// 2. Создаем массив объектов courses с данными о каждом курсе
//    - id, title, description, level, language, duration, price, category
// 3. Находим контейнер #courseCardsContainer
// 4. Для каждого курса создаем <article> и добавляем внутрь заголовок, описание и кнопку
// 5. Добавляем класс и data-category для фильтрации
// 6. Конец

const courses = [
  {
    id: 'english-translator',
    title: 'Английский для переводчиков',
    description: 'Курс для будущих лингвистов и переводчиков.',
    level: 'C1–C2',
    language: 'Английский',
    duration: '4–6 месяцев',
    price: 'от 7900 ₽/мес',
    category: 'english',
    fullDescription: `
      <p>🎯 Цель курса: развитие профессиональных навыков перевода с английского языка на русский и обратно.</p>
      <ul>
        <li>Как правильно анализировать текст перед переводом</li>
        <li>Принципы эквивалентности и адекватности в переводе</li>
        <li>Особенности перевода текстов разных жанров</li>
        <li>Как сохранять стиль оригинала</li>
      </ul>
      <p>💡 Результат обучения: уверенный перевод уровня C1–C2</p>
    `
  },
  {
    id: 'english-a1a2',
    title: 'Английский язык A1–A2',
    description: 'Базовый курс для начинающих.',
    level: 'A1–A2',
    language: 'Английский',
    duration: '3 месяца',
    price: 'от 4900 ₽/мес',
    category: 'english',
    fullDescription: `
      <p>🎯 Цель: помочь слушателям овладеть базовыми навыками общения на английском языке.</p>
      <h4>A1 — Базовый уровень</h4>
      <ul>
        <li>Знакомство и представление себя</li>
        <li>Глагол to be, числительные, дни недели</li>
        <li>Простое повествование в настоящем времени</li>
        <li>Описание людей и бытовых ситуаций</li>
      </ul>
      <h4>A2 — Средний уровень</h4>
      <ul>
        <li>Модальные глаголы (can, must, should)</li>
        <li>Прошедшее время</li>
        <li>Понимание и написание несложных писем</li>
      </ul>
      <p>💡 Результат: вести простой диалог в бытовых и туристических ситуациях</p>
    `
  },
  {
    id: 'english-b1b2',
    title: 'Английский язык B1–B2',
    description: 'Разговорная практика и грамматика.',
    level: 'B1–B2',
    language: 'Английский',
    duration: '4 месяца',
    price: 'от 5900 ₽/мес',
    category: 'english',
    fullDescription: `
      <p>🎯 Цель: свободное владение языком в различных ситуациях.</p>
      <p>📚 Что вы узнаете:</p>
      <ul>
        <li>Present Simple и Past Simple</li>
        <li>Словообразование и словосочетания</li>
        <li>Понимание и написание эссе, деловых писем, отчетов</li>
      </ul>
      <p>💡 Результат: готовы к международным экзаменам и работе на иностранном языке</p>
    `
  },
  {
    id: 'german-translator',
    title: 'Немецкий для переводчиков',
    description: 'Курс для будущих лингвистов и переводчиков.',
    level: 'C1–C2',
    language: 'Немецкий',
    duration: '6 месяцев',
    price: 'от 7900 ₽/мес',
    category: 'german',
    fullDescription: `
      <p>🎯 Цель: развитие профессиональных навыков перевода с немецкого языка на русский и обратно.</p>
      <p>📚 Вы научитесь:</p>
      <ul>
        <li>Работать с терминологией</li>
        <li>Переводить аббревиатуры и имена собственные</li>
        <li>Сохранять культурные особенности оригинала</li>
        <li>Практиковаться на реальных материалах</li>
      </ul>
      <p>💡 Результат: уверенный перевод уровня C1–C2</p>
    `
  },
  {
    id: 'german-a1a2',
    title: 'Немецкий язык A1–A2',
    description: 'Базовый курс для начинающих.',
    level: 'A1–A2',
    language: 'Немецкий',
    duration: '3 месяца',
    price: 'от 4900 ₽/мес',
    category: 'german',
    fullDescription: `
      <p>🎯 Цель: помочь слушателям овладеть базовыми навыками общения на немецком языке.</p>
      <p>👥 Для кого: взрослые начинающие, школьники, студенты</p>
      <p>⚙️ Формат обучения: живые занятия, практические задания, тестирование</p>
      <p>💡 Результат: понимание и написание коротких писем и сообщений</p>
    `
  },
  {
    id: 'german-b1b2',
    title: 'Немецкий язык B1–B2',
    description: 'Разговорная практика и грамматика.',
    level: 'B1–B2',
    language: 'Немецкий',
    duration: '4 месяца',
    price: 'от 5900 ₽/мес',
    category: 'german',
    fullDescription: `
      <p>🎯 Цель: свободное владение языком в различных ситуациях.</p>
      <p>📚 Что вы узнаете:</p>
      <ul>
        <li>Модальные глаголы (müssen, sollen, können, möchten)</li>
        <li>Прошедшее время (Präteritum и Perfekt)</li>
        <li>Понимание более сложных текстов</li>
        <li>Участие в беседе при знакомых темах</li>
      </ul>
      <p>⚙️ Формат обучения:
        Живые занятия с преподавателем, практические задания</p>
      <p>💡 Результат: уверенное говорение и письмо на иностранном языке</p>
    `
  }
];
const courseContainer = document.getElementById('courseCardsContainer');

if (courseContainer) {
  courses.forEach(course => {
    const card = document.createElement('article');
    card.className = `course-card ${course.category}`;
    card.setAttribute('data-category', course.category);

    card.innerHTML = `
      <h3 class="course-card__title">${course.title}</h3>
      <p class="course-card__description">${course.description}</p>
      <button class="course-card__button" type="button">Узнать больше</button>
      <div class="course-card__full-description" hidden>
        ${course.fullDescription}
      </div>
    `;

    courseContainer.appendChild(card);
  });
} else {
  console.error("Ошибка: контейнер для курсов не найден.");
}


// =============================
// ЗАДАНИЕ 3.2 — Появление описания при наведении
// Алгоритм:
// 1. Начало
// 2. Получаем все изображения с классом .intensive__img
// 3. Проверяем: найдены ли элементы?
//    3.1. Да → проходим циклом по каждому изображению
//         Для каждого:
//         - Находим связанное описание (дочерний элемент .intensive__description)
//         - При событии mouseenter → показываем описание
//         - При событии mouseleave → скрываем описание
//    3.2. Нет → выводим ошибку в консоль
// 4. Конец
//
// Блок-схема: images/Block-schema.png
//

const intensiveImages = document.querySelectorAll('.intensive__img');

if (intensiveImages.length > 0) {
  intensiveImages.forEach((img, index) => {
    const description = img.nextElementSibling;

    if (!description || !description.classList.contains('intensive__description')) {
      console.error(`Ошибка: описание не найдено у карточки №${index + 1}`);
      return;
    }

    // При наведении — показываем описание
    img.addEventListener('mouseenter', () => {
      img.style.opacity = 0.8;
      description.removeAttribute('hidden');
    });

    // Когда курсор уходит — скрываем описание
    img.addEventListener('mouseleave', () => {
      img.style.opacity = 1;
      description.setAttribute('hidden', '');
    });
  });
} else {
  console.error("Ошибка: элементы '.intensive__img' не найдены.");
}

// =============================
// ЗАДАНИЕ 3.2 — Динамическая составляющая (наведение на преподавателей)
// Алгоритм:
// 1. Начало
// 2. Получаем все карточки преподавателей
// 3. Проверяем: найдены ли они?
//    3.1. Да → добавляем событие mouseover
//         При наведении выводится сообщение в консоли
//    3.2. Нет → выводим ошибку в консоль
// 4. Конец
//
// Блок-схема: images/Block-schema.png
//

const teacherCards = document.querySelectorAll('.teacher-card');
if (teacherCards.length > 0) {
  teacherCards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
      console.log(`Курсор наведён на преподавателя №${index + 1}`);
    });
  });
} else {
  console.error("Ошибка: карточки преподавателей не найдены.");
}

// =============================
// ЗАДАНИЕ 3.3 — Слайдер преподавателей
// Алгоритм:
// 1. Начало
// 2. Получаем кнопки и карточки
// 3. Объявляем количество видимых карточек и текущий индекс
// 4. Создаём функцию updateSlider(), которая показывает нужные карточки
// 5. Добавляем обработчики click для кнопок ❮ и ❯
// 6. Обновляем индекс и вызываем updateSlider()
// 7. Конец
//
// Блок-схема: images/Block-schema.png
//

const slider = document.querySelectorAll('.teacher-card');
const prevButton = document.getElementById('prev-teachers');
const nextButton = document.getElementById('next-teachers'); // Исправленный ID
const visibleCards = 3;
let currentIndex = 0;

function updateSlider() {
  slider.forEach((card, index) => {
    if (index >= currentIndex && index < currentIndex + visibleCards) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

if (slider.length > 0 && prevButton && nextButton) {
  updateSlider();

  // Листание влево
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = Math.max(0, slider.length - visibleCards);
    }
    updateSlider();
  });

  // Листание вправо
  nextButton.addEventListener('click', () => {
    if (currentIndex < slider.length - visibleCards) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  });

} else {
  console.error("Ошибка: элементы слайдера преподавателей не найдены.");
}

// =============================
// ЗАДАНИЕ 3.3 — Фильтрация курсов по языкам
// Алгоритм:
// 1. Начало
// 2. Получаем все кнопки фильтрации и карточки курсов
// 3. Проверяем: найдены ли элементы?
//    3.1. Да → проходим циклом по кнопкам
//         Для каждой добавляем обработчик click
//         Получаем значение фильтра из data-filter
//         Проходим циклом по всем курсам
//         Если класс или data-category совпадает → показываем
//         Иначе → скрываем
//    3.2. Нет → выводим ошибку в консоль
// 4. Конец
//
// Блок-схема: images/Block-schema.png
//

const filterButtons = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');

if (filterButtons.length > 0 && courseCards.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Обновляем активную кнопку
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Фильтруем курсы
      courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex'; // ИСПОЛЬЗУЕМ flex!
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
} else {
  console.error("Ошибка: кнопки фильтрации или курсы не найдены.");
}

// Убедимся, что все карточки видны правильно при загрузке
window.addEventListener('DOMContentLoaded', () => {
  courseCards.forEach(card => {
    card.style.display = 'flex';
  });

  updateSlider(); // если есть слайдер преподавателей
});

// =============================
// ЗАДАНИЕ — Модальное окно "Узнать больше"
// Алгоритм:
// 1. Начало
// 2. Получаем все кнопки "Узнать больше"
// 3. Получаем модальное окно и его контейнер
// 4. Для каждой кнопки добавляем обработчик click
//    - Находим полное описание курса
//    - Копируем его в модальное окно
//    - Открываем окно
// 5. Добавляем закрытие по клику вне окна или на крестик
// 6. Конец
//
// Блок-схема: images/Block-schema.png
//

const learnMoreButtons = document.querySelectorAll('.course-card__button');
const modalOverlay = document.querySelector('.modal-overlay');
const modalDescription = document.querySelector('.modal-description');

if (learnMoreButtons.length > 0 && modalOverlay && modalDescription) {
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const fullDescription = button.nextElementSibling;

      if (!fullDescription || !fullDescription.classList.contains('course-card__full-description')) {
        console.error("Ошибка: описание не найдено");
        return;
      }

      // Очистка и заполнение модального окна
      modalDescription.innerHTML = '';
      const pTags = fullDescription.querySelectorAll('p, h4, ul');
      pTags.forEach(p => {
        modalDescription.appendChild(p.cloneNode(true));
      });

      // Показываем модальное окно
      modalOverlay.classList.remove('hidden');
    });
  });

  // Закрытие по клику вне окна
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.add('hidden');
    }
  });

  // Закрытие по кнопке
  document.querySelector('.modal-close')?.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
  });

} else {
  console.error("Ошибка: элементы модального окна не найдены.");
}

// =============================
// ЗАДАНИЕ 4 — Вывод списка курсов через массив JS
// Алгоритм:
// 1. Начало
// 2. Создаем массив заголовков курсов
// 3. Находим контейнер #course-titles
// 4. Проходим циклом forEach по массиву
//    - Создаем <li>
//    - Записываем туда заголовок
//    - Добавляем в список
// 5. Конец
//

const courseTitles = [
  "Немецкий для переводчиков",
  "Немецкий язык A1–A2",
  "Немецкий язык B1–B2",
  "Английский для переводчиков",
  "Английский язык A1–A2",
  "Английский язык B1–B2"
];

const courseListOutput = document.getElementById('course-titles');

if (courseListOutput) {
  courseTitles.forEach(title => {
    const listItem = document.createElement('li');
    listItem.textContent = title;
    courseListOutput.appendChild(listItem);
  });
} else {
  console.error("Ошибка: элемент '#course-titles' не найден.");
}

// =============================
// ЗАДАНИЕ — Переключение темы (light/dark)
// Алгоритм:
// 1. Начало
// 2. Получаем кнопку переключения темы
// 3. Проверяем localStorage: сохранена ли тема?
//    - Если да → применяем её
//    - Иначе → по умолчанию светлая
// 4. Добавляем обработчик click
//    - При нажатии меняем тему
//    - Сохраняем в localStorage
//    - Меняем текст кнопки
// 5. Конец
//

const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.className = savedTheme;

  themeToggle.textContent = savedTheme === 'dark' ? '☀️ Светлая тема' : '🌙 Тёмная тема';

  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
      document.body.className = 'light';
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙 Тёмная тема';
    } else {
      document.body.className = 'dark';
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️ Светлая тема';
    }
  });
} else {
  console.error("Ошибка: кнопка переключения темы не найдена.");
}

// =============================
// ЗАДАНИЕ — Кнопка "Наверх"
// Алгоритм:
// 1. Начало
// 2. Получаем кнопку #scroll-to-top
// 3. Проверяем: есть ли она?
//    - Если да → добавляем обработчик scroll
//    - Показываем кнопку, если прокрутка > 300px
//    - При клике скроллим вверх
// 4. Конец
//

const scrollToTopBtn = document.getElementById('scroll-to-top');

if (scrollToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
} else {
  console.error("Ошибка: кнопка 'scroll-to-top' не найдена.");
}

// =============================
// ЗАДАНИЕ — Индикатор загрузки (preloader)
// Алгоритм:
// 1. Начало
// 2. Получаем элемент .preloader
// 3. Проверяем: найден ли он?
//    - Да → скрываем preloader после загрузки страницы
//    - Нет → выводим ошибку
// 4. Конец
//

const preloader = document.querySelector('.preloader');

if (preloader) {
  window.addEventListener('load', () => {
    preloader.classList.remove('active');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  });
} else {
  console.error("Ошибка: элемент '.preloader' не найден.");
}


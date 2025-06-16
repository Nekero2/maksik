// База частей для генерации цитат
const quoteParts = {
  starts: [
    "Блять, пацаны,", 
    "Рома, ну ты вообще,", 
    "Ваня, слушай сюда,", 
    "Сука, я не могу,", 
    "Вы вообще не понимаете,",
    "Почему все так сложно,",
    "Я ей верю,",
    "Вы просто завидуете,",
    "Мне плевать,"
  ],
  middles: [
    "она не такая как эти шлюхи из ДВ", 
    "я впервые счастлив за 17 лет", 
    "вы даже не представляете как она меня поддерживает", 
    "я готов на всё ради неё", 
    "вы просто не верите в любовь",
    "она мне скидывала скрины",
    "мы виделись всего два раза, но это неважно",
    "у нас планы на будущее",
    "вы вообще не в теме"
  ],
  ends: [
    "так что идите нахуй!", 
    "не лезьте в мои отношения!", 
    "я сам разберусь!", 
    "заткнитесь уже!", 
    "это моя жизнь!",
    "почему вы все против меня?",
    "я не хочу вас слушать!",
    "вы меня бесите!",
    "мне надоело это объяснять!"
  ],
  randomInserts: [
    "блять", "сука", "ёбаный", "нахуй", "пиздец", 
    "в рот мне ноги", "ёлки-палки", "капец", "ахуеть"
  ],
  names: ["Рома", "Ваня", "пацаны", "братва"]
};

// Функция для случайного элемента из массива
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Создание одной случайной цитаты
function generateRandomQuote() {
  let quote = `${getRandom(quoteParts.starts)} ${getRandom(quoteParts.middles)}`;
  
  // Рандомно добавляем вставки (с шансом 50%)
  if (Math.random() > 0.5) {
    quote += `, ${getRandom(quoteParts.randomInserts)}`;
  }
  
  // Добавляем имя (с шансом 60%)
  if (Math.random() > 0.4) {
    quote += `, ${getRandom(quoteParts.names)}`;
  }
  
  quote += ` ${getRandom(quoteParts.ends)}`;
  return quote;
}

// Генерация 10 цитат и вывод на страницу
function generateQuotes() {
  const container = document.getElementById('quotes-container');
  container.innerHTML = '';
  
  for (let i = 0; i < 10; i++) {
    const quoteElement = document.createElement('div');
    quoteElement.className = 'quote';
    quoteElement.innerHTML = `
      <p>${generateRandomQuote()}</p>
      <div class="author">— Максим Курчэўскi</div>
    `;
    container.appendChild(quoteElement);
  }
}

// Запуск при загрузке и по кнопке
document.addEventListener('DOMContentLoaded', generateQuotes);
document.getElementById('generate-btn').addEventListener('click', generateQuotes);
// 1. Заменить "?" на "!"

// ["Why!", "JS", "You", "Me!"]

// 2. Вытащить числа в строку
function findNumbers(str) {
    let nums='';
  for(let i=0;i<str.length;i++){
if(isNaN(+str[i])){

}else{
    nums+=str[i]
}
  }
  return nums;
 }
// Воспользуйтесь унарным оператором typeof или функцией isNaN
console.log(findNumbers("Мне было 15 в 2012-ом году"));
// "152012"

// 3. убрать пробелы и обвернуть "<>" каждую букву
function makeItCool(str) { 
    let cool='';
    for(let i=0;i<str.length;i++){
      if(str[i] !==" "){
        cool+=`<${str[i]}>`;
      }
    }
    return cool.toUpperCase();
}

console.log(makeItCool("i am super"));
// "<I><A><M><S><U><P><E><R>"

// 4. Перевернуть слова и удалить гласные
function reverseWordsWithoutVowel(arr) {
    const vowels='aeiuo';
    let without='';
    for(let i=0;i<arr.length;i++){
        if(!vowels.includes(word[i])){
            without+=word[i]
        }
    }
    return reverseWordsWithoutVowel
 }

console.log(reverseWordsWithoutVowel(["banana", "apple", "orange"]));
// ["nnb", "lpp", "gnr"]

function fromQuestionToExclamation(arr) {
 
    
}
const words = ["Why?", "JS", "You", "Me?"];
console.log(fromQuestionToExclamation(words));
const products = [
  {
    id: 123,
    title: "Samsung Galaxy S20",
    category: "phone",
    price: 90000,
    options: {
      memory: 128,
      color: "blue"
    }
  },
  {
    id: 234,
    title: "Batman",
    category: "clothes",
    price: 600,
    options: {
      type: "t-shirt",
      colors: ["black", "grey"],
      sizes: ["M", "L"]
    }
  },
  {
    id: 376,
    title: "PowerBank A10",
    category: "gadget",
    price: 1200,
    options: {
      battery: 6000,
      wireless: false
    }
  },
  {
    id: 421,
    title: "Gravity Falls",
    category: "clothes",
    price: 960,
    options: {
      type: "sweatshirt",
      colors: ["red", "green"],
      sizes: ["XL", "L", "M"]
    }
  },
  {
    id: 525,
    title: "Xiaomi mi 10",
    category: "phone",
    price: 37000,
    options: {
      memory: 256,
      color: "black"
    }
  },
  {
    id: 142,
    title: "Star Wars",
    category: "clothes",
    price: 960,
    options: {
      type: "sweatshirt",
      colors: ["white"],
      sizes: ["XL", "L", "M"]
    }
  },
  {
    id: 329,
    title: "PowerBank W100",
    category: "gadget",
    price: 2000,
    options: {
      battery: 10000,
      wireless: true
    }
  },
  {
    id: 403,
    title: "Big Bang Theory",
    category: "clothes",
    price: 599,
    options: {
      type: "t-shirt",
      colors: ["white", "black"],
      sizes: ["S", "L", "M"]
    }
  },
  {
    id: 713,
    title: "Sherlock Holmes",
    category: "clothes",
    price: 499,
    options: {
      type: "t-shirt",
      colors: ["black"],
      sizes: ["S", "M"]
    }
  }
];

/*

1.(forEach) Вывести в консоль информацию о каждом продуке в виде:
Название: Sherlock Holmes
Категория: clothes
Цена: 499 сом
 */
// products.forEach((item) => {
//   console.log(`
//   Название: ${item.title}
//   Категория: ${item.category}
//   Цена: ${item.price} сом
//   -----
//   `);
// });
/*
2.(map) Создайте маcсив цен из массива products
Вывести сумму цен в консоль.
*/
function sumPrices(data) {
  let sum = 0;
  data.forEach((price) => {
    sum += price;
  });
  return sum;
}

const prices = products.map((item) => item.price);
console.log(prices);
console.log(sumPrices(prices));

/*

3.(filter) Разбейте массив products по категориям
на три массива:
phones
clothes
gadgets
*/
const phones = products.filter((item) => item.category === "phone");
const gadgets = products.filter((item) => item.category === "gadget");
const clothes = products.filter((item) => item.category === "clothes");

/*


4.(find) Найдите смарфтон в массиве phones, у которого
memory равна 256 и выведите его название в консоль.
*/
const phone256 = products.find((item) => item.options.memory === 256);
console.log(phone256);

/*
5.(forEach) Вывести в консоль информацию о каждом гаджете в виде:
Название: PowerBank A10
Параметры: 6000mAh, обычный
Название: PowerBank W100
Параметры: 10000mAh, беспроводной
(Воспользуйтесь условием, для свойства wireless)
*/
gadgets.forEach((item) => {
  const wirelessTitle = item.options.wireless ? "беспроводной" : "обычный";

  console.log(`
  Название: ${item.title}
  Параметры: ${item.options.battery}mAh, ${wirelessTitle}
  `);
});

/*
5.(some) В массиве clothes убедитесь, что есть хотя бы одна одежда, которая имеет красную расцветку.
(Воспользуйтесь includes)
*/
const isRedExist = clothes.some((item) => item.options.colors.includes("red"));
console.log(isRedExist);

/*
6.(every) В массиве clothes убедитесь, что все товары не дороже 1500

*/
const biggerThen1500 = clothes.every((item) => item.price < 1500);
console.log(biggerThen1500);

/*
7. Запросите у пользователя через prompt по какому параметру ему выдать список одежд, после этого
запросите значение параметра, и только после выдать
список одежд. Например:
Напише параметр:
Ответ: colors
Напишите значение параметра:
Ответ: white
Выводить в консоль все товары в массиве clothes, которые содержат белую расцветку.
Подсказка:
Проверяйте через typeof === 'object' является
ли значение свойства массивом, если да, тогда искать через includes, если нет, тогда просто сравнивать значение.

*/
// параметры: "type", "colors", "sizes"
// значение: t-shirt

// const request = prompt("Введите название параметра:")
// const value = prompt("Введите значение параметра:")
// let foundProducts = []

// const oneItem = clothes[0]

// if(typeof oneItem.options[request] === "object") {
//   foundProducts = clothes.filter(
//     (item) => item.options[request].includes(value)
//   );
// } else {
//   foundProducts = clothes.filter(
//     (item) => item.options[request] === value
//   );
// }

// if(request === "type") {
//   foundProducts = clothes.filter(
//     (item) => item.options.type === value
//   );
// } else if(request === "colors") {
//   foundProducts = clothes.filter(
//     (item) => item.options.colors.includes(value)
//   );
// } else if (request === "sizes") {
//   foundProducts = clothes.filter(
//     (item) => item.options.sizes.includes(value)
//   );
// }

// if(foundProducts.length > 1) {
//   console.log(foundProducts)
// } else {
//   console.log("Ничего не найдено")
// }



/*
8.
- Запросите у пользователя его бюджет на покупки.
- Затем циклически запрашивайте название товара.
Причем ему не обязательно полностью вводить название или следовать регистру.
 - После того как он ввел, выводить ему в confirm название и цену найденного товара, и спрашивать "Покупаете"?
 - Если он нажал "окей", тогда добавлять его цену в сумму покупок.
 - Затем спрашивать "Еще что-нибудь?" И циклически повторять те же действия.
 - В случае если выбранный товар превышает его бюджет, нужно выводить "Вы превысили бюджет, может что-нибудь другое?"
По окончанию показать ему итог.
Например:

Введите бюджет:
Ответ: 40000
Введите название товара:
Ответ: star
Star Wars, 960 сом. Покупаете?
Ответ: Ок
Еще что-нибудь?
Ответ: Ок
Введите название товара:
Ответ: galaxy
Вы превысили бюджет, может что-нибудь другое?
Ответ: Ок
Введите название товара:
Ответ: w100
PowerBank W100, 2000 сом. Покупаете?
Ответ: Ок
Еще что-нибудь?
Ответ: Cancel
Итого: 2960 сом
*/

const budget = +prompt("Введите бюджет: ")
const basket = []
let isContinue = true
let total = 0

while(isContinue) {
  const title = prompt("Напишите название товара:")
  const foundProduct = products.find(function(item) {
    return item.title.toLowerCase().includes(title.toLowerCase())
  })

  if(foundProduct !== undefined) {
    alert(`${foundProduct.title}, ${foundProduct.price} сом`)

    if(budget >= total + foundProduct.price) {
      basket.push(foundProduct)
      total += foundProduct.price
    } else {
      alert(`У вас не хватает денег, Осталось: ${budget - total} сом`)
    }

  } else {
    alert(`Продукт не найден`)
  }

  isContinue = confirm("Еще что-нибудь?")
}

const summary = basket.map((item) => `${item.title}, ${item.price} сом`).join("\n")

alert(`
${summary}
Сдачи: ${budget - total} сом
`);
// if(budget >= foundProduct.price) {
//   console.log(`Сдачи: ${budget - foundProduct.price} сом`)
// } else {
//   console.log("У вас не хватает средств")
// }
/* 1.
Убрать начертание bold у .title
Добавить в .subtext
*/

const title = document.querySelector(".title")
const subtext = document.querySelector(".subtext")

title.style.fontWeight = "normal"
subtext.style.fontWeight = "bold"

/* 2.
Поменять местами текст тегов .bold1 и .bold2
*/
const bold1 = document.querySelector(".bold1")
const bold2 = document.querySelector("#bold2")

const tempText = bold1.textContent
bold1.textContent = bold2.textContent
bold2.textContent = tempText

/* 3.
Застилизовать тег.
Добавьте цвета, шрифта, рамок, теней и т.д через JS
*/

const coolTag = document.querySelector('#cool')

coolTag.style.padding = "12px 20px"
coolTag.style.backgroundColor = "indigo"
coolTag.style.color = "white"
coolTag.style.borderRadius = "12px"
coolTag.style.boxShadow = `2px 2px 8px rgba(0, 0, 255, 0.5),
  inset 0 0 5px 2px rgba(255, 255, 255, 0.5)`;

/* 4.
Изменять по клику выравнивание текста на соотвествующий
*/
const btnLeft = document.querySelector("section:nth-of-type(4) button:nth-of-type(1)")
const btnCenter = document.querySelector("section:nth-of-type(4) button:nth-of-type(2)")
const btnRight = document.querySelector("section:nth-of-type(4) button:nth-of-type(3)")
const pText = document.querySelector("#align")

btnLeft.onclick = () => {
  pText.style.textAlign = "left"
}

btnCenter.onclick = () => {
  pText.style.textAlign = "center"
}

btnRight.onclick = () => {
  pText.style.textAlign = "right"
}
/* 5.
Взять текст из .color и поменять цвет кнопки
*/

const colorText = document.querySelector(".color")
const colorBtn  = document.querySelector(".color + button")

colorBtn.onclick = () => {
  colorBtn.style.backgroundColor = colorText.textContent.toLowerCase()
}

/* 6.
Изменять ширину изображения на введенное число
*/
const section = document.querySelector("section:nth-of-type(6)")
const input = section.querySelector("input")
const btn = section.querySelector("button")
const img = section.querySelector("img")

btn.onclick = () => {
  img.width = input.value
  input.value = ""
}

/* 7.
При клике на кнопку "уменьшить" число в div'e должен
уменьшаться на единицу. И наоборот: при клике на
"увеличить" должен увеличиваться на единицу.
*/

const incrementBtn = document.querySelector(".increment")
const decrementBtn = document.querySelector(".decrement")
const countTag = document.querySelector(".count")
let count = +countTag.textContent
incrementBtn.onclick = () => {
  countTag.textContent = ++count
}

decrementBtn.onclick = () => {
  countTag.textContent = count === 0 ? 0 : --count
}

/* 8.
При клике на каждую из трех кнопок, боксу должен примениться
соотвествующий класс-модификатор:
box-hide
box-circle
box-small
Когда применяется один модификатор, другие должны удалиться.
*/

const hideBtn = document.querySelector(".hide")
const circleBtn = document.querySelector(".circle")
const smallBtn = document.querySelector(".small")
const boxTag = document.querySelector(".box")

hideBtn.onclick = () => {
  boxTag.classList.toggle("box-hide")
  boxTag.classList.remove("box-circle")
  boxTag.classList.remove("box-small")
}

circleBtn.onclick = () => {
  boxTag.classList.toggle("box-circle")
  boxTag.classList.remove("box-hide")
  boxTag.classList.remove("box-small")
}

smallBtn.onclick = () => {
  boxTag.classList.toggle("box-small")
  boxTag.classList.remove("box-circle")
  boxTag.classList.remove("box-hide")
}

/* 9.
При клике на кнопку "добавить", в массив должен добавляться
текст из формы ввода, и должен обновиться контент тега <p>.
При клике на кнопку "удалить", с массива должен удалиться
текст, который совпадает с введенным текст из формы ввода.
Соответственно, должен обновиться контент тега <p>.
*/
const taskList = ["Посмотреть урок", "Покодить", "Выполнить задание"];
const tasksTag = document.querySelector(".task-list");

tasksTag.textContent = taskList.join(", ");

const addInput = document.querySelector(".add-text")
const addBtn = document.querySelector(".add-btn")
const removeBtn = document.querySelector(".remove-btn")

addBtn.onclick = () => {
  const newArr = [...taskList, addInput.value]
  tasksTag.textContent = newArr.join(", ");
}

removeBtn.onclick = () => {
  const filtered = taskList.filter((task) => task !== addInput.value)
  // const index = taskList.indexOf(addInput.value)
  // taskList.splice(index, 1)
  console.log(filtered)
  tasksTag.textContent = filtered.join(", ");
}
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
  
const textInput = document.querySelector("#text-input")
const countTag = document.querySelector("#text-count")

textInput.oninput = () => {
  let valueWithoutSpaces = ""
  for(let i = 0; i < textInput.value.length; i++) {
    if(textInput.value[i] !== " ") {
      valueWithoutSpaces += textInput.value[i]
    }
  }

  // const valueWithoutSpaces = textInput.value
  //   .split("")
  //   .filter((letter) => letter !== " ")
  //   .join()

  // const valueWithoutSpaces = textInput.value.replaceAll(" ", "")
  countTag.textContent = valueWithoutSpaces.length
}

/* 2.
Во время ввода изменять sum-result на
сумму значения двух форм ввода.
*/

const sumInputLeft = document.querySelector("#sum-input-1")
const sumInputRight = document.querySelector("#sum-input-2")
const resultTag = document.querySelector("#sum-result")

sumInputLeft.oninput = () => {
  resultTag.textContent = +sumInputLeft.value + +sumInputRight.value
}

sumInputRight.oninput = () => {
  resultTag.textContent = +sumInputLeft.value + +sumInputRight.value
}

/* 3.
При клике на switch-btn значения
двух форм должны поменяться местами.
*/

const switchInputLeft = document.querySelector("#switch-input-1")
const switchInputRight = document.querySelector("#switch-input-2")
const switchBtn = document.querySelector("#switch-btn")

switchBtn.onclick = () => {
  const tempValue = switchInputLeft.value
  switchInputLeft.value = switchInputRight.value
  switchInputRight.value = tempValue
}

/* 4.
При вводе в одну форму, другая
форма должна заполняться перевернутым значением.
И также наоборот.

текст - тскет
*/

const reverseInputLeft = document.querySelector("#reverse-input-1")
const reverseInputRight = document.querySelector("#reverse-input-2")

reverseInputLeft.oninput = () => {
  reverseInputRight.value = reverseInputLeft.value.split("").reverse().join("")
}

reverseInputRight.oninput = () => {
  reverseInputLeft.value = reverseInputRight.value.split("").reverse().join("")
}
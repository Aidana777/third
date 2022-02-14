const booksTodo = document.querySelector(".books-todo");
const booksDone = document.querySelector(".books-done");

const books = [
  "Падение",
  "12 правил жизни",
  "Эгоистичный ген",
  "Квантовая психология",
  "Человек и его симловы",
  "Самое грандиозное шоу на земле",
  "Удовольствие от X",
  "Преступление и наказание"
];
for (let i = 0; i < books.length; i++) {
  const btnBook = document.createElement('button')
  btnBook.textContent = books[i]
  btnBook.classList.add("book")
  booksTodo.append(btnBook)
  btnBook.onclick = () => {
    if (  booksDone.append(btnBook)) {
      booksTodo.append(btnBook)
    } else {
      booksDone.append(btnBook)
      btnBook.classList.add("done")
    }
  }
}


const loginRegisterInput = document.querySelector('#loginRegister')
const passwordRegisterInput = document.querySelector('#passwordRegister')
const registerBtn = document.querySelector('#btnRegister')
const messageTag = document.querySelector('.message')

function checkRegisterBtn() {
  registerBtn.disabled = !loginRegisterInput.value || !passwordRegisterInput.value
}

checkRegisterBtn()

loginRegisterInput.oninput = () => {
  checkRegisterBtn()
}


passwordRegisterInput.oninput = () => {
  checkRegisterBtn()
}

const userData = {login: "", password: ""}

registerBtn.onclick = () => {
  if(passwordRegisterInput.value.length >= 6) {
    userData.login = loginRegisterInput.value;
    userData.password = passwordRegisterInput.value;
    console.log(userData)
    messageTag.textContent = "Вы успешно зарегистрировались"
    messageTag.classList.add("message--success")
    messageTag.classList.remove("message--error")
  } else {
    messageTag.textContent = "Пароль должен содержать минимум 6 символов"
    messageTag.classList.add("message--error")
    messageTag.classList.remove("message--success")
  }
}

const loginInput = document.querySelector('#login')
const passwordInput = document.querySelector('#password')
const loginBtn = document.querySelector('#btn')

loginBtn.onclick = () => {
  if(
    userData.login === loginInput.value &&
    userData.password === passwordInput.value
    ) {
    messageTag.textContent = "Вы успешно вошли в свой аккаунт"
    messageTag.classList.add('message--success')
    messageTag.classList.remove('message--error')
  } else {
    messageTag.textContent = "Логин или пароль неверный"
    messageTag.classList.add('message--error')
    messageTag.classList.remove('message--success')
  }
}
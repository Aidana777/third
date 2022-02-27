const inputMessage = document.querySelector("#inputMessage")
const messagebtn = document.querySelector(".message-btn")
const messageP = document.querySelector(".message")
messagebtn.onclick = () => {
    messageP.textContent = inputMessage.value
    inputMessage.value = innerHTML
}
const myList = ["mouse", "abc", "keyboard", "screen", "touchpad"];
for(let i=0;i<myList.length;i++){
 let temp=[]
 if(myList/2===0){
     myList.push(temp)
 }
return temp
}
console.log(temp)
const listMenu = document.querySelector(".list")
const listMenuli = document.querySelector("li")
console.log(listMenuli)
listMenu.append(listMenuli)
listMenuli.textContent = myList[0]

const listtext = document.querySelector(".list-text")
const nameInput = document.querySelector("#nameInput")
const nameBtn = document.querySelector("#nameBtn")
console.log(nameBtn)

nameBtn.onclick = () => {
    if (nameInput.value.length>=7) {
        nameBtn.disabled=true;
    }
}

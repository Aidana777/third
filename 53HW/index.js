const tempbtns=document.querySelectorAll('.template')
const textfield=document.querySelector('.text-field')
const sendbtn=document.querySelector(".send-btn")
const messageText=document.querySelector('.messages')
tempbtns.forEach((tempbtns)=>{
    tempbtns.onclick=()=>{
       textfield.value=tempbtns.textContent
    }
})
const messages=[];
sendbtn.onclick=()=>{
    messageText.push(textfield.value)
    messageText.textContent=messages.join(",")
    textfield=""
}
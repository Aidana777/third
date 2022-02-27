const obj = {
    count: 10,
    increment() {
        return obj.count + 1
    }
}
const headerTag=document.querySelector('header')
const mainTag=document.querySelector('main')
const footerTag=document.querySelector('footer')

function createBox(color, height){
    const divTag=document.createElement("div")
    divTag.style.width="100px"
    divTag.style.marginBottom="5px"
    divTag.style.height=height
    divTag.style.backgroundColor= color;
    document.body.append(divTag)  
}
const box= createBox('#5BC0EB' ,'100px',)
headerTag.append(box)
const box2= createBox('#FDE74C' ,'100px')
mainTag.append(box2)
createBox("#9bc53d",'100px')
createBox("#C3423F",'100px')
createBox("#211a1e",'100px')
createBox("#211a1e",'100px')

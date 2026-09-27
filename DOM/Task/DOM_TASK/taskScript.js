
var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')
var btn3 = document.querySelector('#btn3')
var h2 = document.querySelector('h2')

var a=0
btn1.addEventListener('click',function(){
    a++
    h2.innerHTML =a
})
btn2.addEventListener('click',function(){
    
    if(a<=0){
    alert("can't be in negative")
    }else{
        a--
    h2.innerHTML =a
    }
})
btn3.addEventListener('click',function(){
    a=0
    h2.innerHTML =a
})
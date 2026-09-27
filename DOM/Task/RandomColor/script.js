
// Math.random 

    // var a = Math.random()*1000
    // var b = Math.floor(a)//random number me se point ke aage ka remove karne me kaam aata hai
    // var b = Math.floor(Math.random()*100) // single line code for above code 
    // console.log(b)



var btn = document.querySelector('button')
var box = document.querySelector('#box')

btn.addEventListener('click',function(){
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    // console.log(c1,c2,c3)
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    // box.innerHTML = `rgb(${c1},${c2},${c3})`
})
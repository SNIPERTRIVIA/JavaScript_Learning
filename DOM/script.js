
// // DOM 4 Pillars for fundamentals 

// // 1. Selection Of an Element
// //              camel case
//    var h1 =  document.querySelector('h1')
// //    console.log(h1)
//     var box = document.querySelector('#box')
//     // box.innerHTML = 'HEY HEY '

// // 2. Changing HTML 
//     h1.innerHTML = 'DOM'

// // 3. Changing CSS
//     h1.style.color = 'Gold'
//     h1.style.background = "#222"
//     h1.style.cursor="pointer";
//     // box.style.backgroundColor = 'orange'

    
// // 4. Event Listeners 

//     h1.addEventListener('click',function(){ 
//         h1.innerHTML = "Learning DOM"
//     })


// More On Selection of Element 

    // var h1 = document.getElementById('hero')
    // console.log(h1)
    // var ccc = document.getElementsByClassName('class1')
    // console.log(ccc)
    

// Math.random 

    // var a = Math.random()*1000
    // var b = Math.floor(a)//random number me se point ke aage ka remove karne me kaam aata hai
    // var b = Math.floor(Math.random()*100) // single line code for above code 
    // console.log(b)

    // Random Name genrator
    // var arr = ["Aakash","ram","panday","satvik","Avi",'sarthak','harsh']
    // var a = Math.floor(Math.random()*arr.length)
    // console.log(arr[a])


// Array Of Object

    // var arr = [
    //     {
    //         team:'CSK',
    //         primary:'Yellow',
    //         secondary:'blue'
    //     },
    //     {
    //         team:'RCB',
    //         primary:'Red',
    //         secondary:'black'

    //     },
    //     {
    //         team:'MI',
    //         primary:'Blue',
    //         secondary:'gold'

    //     },
    //     {
    //         team:'KKR',
    //         primary:'purple',
    //         secondary:'gold'
    //     }  
    // ]
    // console.log(arr[0].team)


    // Create Element // iska matalb koi chiz html me add karna like h1, div etc...

    // var btn = document.querySelector('button')
    // btn.addEventListener('click',function(){
    // var h1 = document.createElement('h1')
    // h1.innerHTML = "Hello from JS"
    // console.log(h1)
    // })


    // Appending a child // is ka matalb wo HTML file me jaa ke add ho jaye gaa 

    // var h1 = document.createElement('h1')
    // h1.innerHTML ="Hello from JS"

    // var main = document.querySelector('main')

    // main.appendChild(h1)

    
    var div = document.createElement('div')
    div.style.height = '200px'
    div.style.width = '200px'
    div.style.backgroundColor = 'red'
    var main= document.querySelector('main')
    main.appendChild(div)

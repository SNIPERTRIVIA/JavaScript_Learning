
    var arr = [
        {
            team:'CSK',
            primary:'Yellow',
            secondary:'blue',
            fullName:'Chennai Super Kings',
            trophies:5,
            captain:'MSD'
        },
        {
            team:'RCB',
            primary:'Red',
            secondary:'black',
            fullName:'Royal Challengers Bengaluru',
            trophies:2,
            captain:'Kholi'

        },
        {
            team:'MI',
            primary:'Blue',
            secondary:'gold',
            fullName:'Mumbai Indians',
            trophies:5,
            captain:'Rohit'

        },
        {
            team:'KKR',
            primary:'purple',
            secondary:'gold',
            fullName:'Kolkata Knight Riders',
            trophies:3,
            captain:'Rahane'
        } ,
        {
            team:'SRH',
            primary:'Orange',
            secondary:'Black',
            fullName:'Sunrisers Hyderabad',
            trophies:3,
            captain:'David Warner'
        },
        {
            team:'PBKS',
            primary:'cyan',
            secondary:'white',
            fullName:' Punjab Kings',
            trophies:0,
            captain:'Shreyas Iyer'
        }

    ]

    var btn = document.querySelector('button')
    var h1 = document.querySelector('h1')
    var body = document.querySelector('body')


    btn.addEventListener('click',function(){
    var winner=  arr[Math.floor(Math.random()*arr.length)]

    // h1.innerHTML =winner.team
    h1.innerHTML = `
    Team: ${winner.team}<br>
    Full Name: ${winner.fullName}<br>
    Trophies: ${winner.trophies}<br>
    Captain: ${winner.captain}
`
    h1.style.backgroundColor = winner.secondary
    body.style.backgroundColor = winner.primary
    })


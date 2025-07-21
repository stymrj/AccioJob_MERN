// window.addEventListener('load',()=>{

// async function getData() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await res.json()
//     //console.log(data)

//     for(item of data){
//         console.log(item)
//         const card = document.createElement("div")
//         const names = document.createElement("p")
//         const phoneNum = document.createElement("p")
//         const email = document.createElement("p")

//         names.innerText = item.name
//         phoneNum.innerText = item.phone
//         email.innerText = item.email
//         names.style.fontWeight = "bold"
//         names.style.fontSize = "20px"

//         card.appendChild(names)
//         card.appendChild(phoneNum)
//         card.appendChild(email)

//         myGrid.appendChild(card)

//     }


// }
// getData()
// })


const btn = document.getElementById("btn")

btn.addEventListener('click',()=>{

    async function getData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await res.json()
        console.log(data)

        for(item of data){
            const card = document.createElement("div")
            const names = document.createElement("p")
            const email = document.createElement("p")


            names.innerText = item.name
            email.innerText = item.email
            names.style.fontWeight = "bold"
            names.style.fontSize = "20px"

        card.appendChild(names)
        card.appendChild(email)

        myGrid.appendChild(card)
        }
    }
    getData()
})
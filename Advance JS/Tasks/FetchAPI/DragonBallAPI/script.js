const myGrid = document.getElementById("myGrid")

// window.addEventListener('load',()=>{
//     const api = "https://dragonball-api.com/api/characters"
//     const data = fetch(api)
//     data
//     .then((res)=>{
//         return res.json()
//     })
//     .then((fData)=>{
//         console.log(fData)
//     })
// })


window.addEventListener('load',()=>{
    
    async function getData(){
        const data = await fetch("https://dragonball-api.com/api/characters")
        const fData2 = await data.json()
        console.log(fData2)


        for(let item of fData2.items){
            const card = document.createElement("div")
            const imgTag = document.createElement("img")
            const name = document.createElement("p")

            imgTag.src = item.image
            name.innerText = item.name

            card.appendChild(imgTag)
            card.appendChild(name)

            myGrid.appendChild(card)
        }
    }
    getData()
})
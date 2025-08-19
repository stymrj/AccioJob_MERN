const btn = document.getElementById("'btn2'")
const myGrid = document.getElementById("myGrid")

btn2.addEventListener('click',()=>{
    async function getData(){
        const res = await fetch("https://randomuser.me/api/")
        const data = await res.json()
        // console.log(data)

    myGrid.innerHTML = ""
        

       for(let item of data.results){
        console.log(item.name)
        console.log(item.email)

        const card = document.createElement("div")
        const textContainer= document.createElement("div")
        const names = document.createElement("p")
        const email = document.createElement("p")
        const img = document.createElement('img')


        names.innerText = item.name.title + " " + item.name.first + " " +item.name.last
        email.innerText = "Email : " + item.email
        img.src = item.picture.large

        // names.style.fontWeight = "bold"

        textContainer.appendChild(names)
        textContainer.appendChild(email)

        card.appendChild(img)
        card.appendChild(textContainer)

        myGrid.appendChild(card)
       }
    }
    getData()
})
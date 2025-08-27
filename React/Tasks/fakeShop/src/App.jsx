import { Blogs } from "./Components/BlogPosts"
import { Events } from "./Components/Events"
import { Movies } from "./Components/Movies"
import { Navbar } from "./Components/Navbar"
import { Products } from "./Components/Products"
import { Users } from "./Components/Users"

function App() {

  const users = [
    {
      "id": 1,
      "name": "Sophia Martinez",
      "age": 29,
      "email": "sophia@example.com",
      "phone": "+1-202-555-0147",
      "city": "New York",
      "photo": "https://randomuser.me/api/portraits/women/65.jpg",
      "isActive": true,
      "joinedAt": "2022-08-14T10:23:45Z"
    },
    {
      "id": 2,
      "name": "Liam Johnson",
      "age": 35,
      "email": "liam@example.com",
      "phone": "+1-303-555-0192",
      "city": "Los Angeles",
      "photo": "https://randomuser.me/api/portraits/men/32.jpg",
      "isActive": false,
      "joinedAt": "2021-11-05T15:47:30Z"
    },
    {
      "id": 3,
      "name": "Ava Patel",
      "age": 26,
      "email": "ava.patel@example.com",
      "phone": "+44-7700-900567",
      "city": "London",
      "photo": "https://randomuser.me/api/portraits/women/22.jpg",
      "isActive": true,
      "joinedAt": "2023-01-09T08:12:15Z"
    },
    {
      "id": 4,
      "name": "Noah Kim",
      "age": 31,
      "email": "noah.kim@example.com",
      "phone": "+82-10-2345-6789",
      "city": "Seoul",
      "photo": "https://randomuser.me/api/portraits/men/41.jpg",
      "isActive": true,
      "joinedAt": "2020-06-19T19:34:10Z"
    },
    {
      "id": 5,
      "name": "Isabella Rossi",
      "age": 24,
      "email": "isabella@example.com",
      "phone": "+39-331-567-8901",
      "city": "Rome",
      "photo": "https://randomuser.me/api/portraits/women/19.jpg",
      "isActive": false,
      "joinedAt": "2023-05-22T11:05:55Z"
    }
  ]

 const products = [
  {
    id: 101,
    name: "Laptop",
    price: 899.99,
    inStock: true,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 102,
    name: "Smartphone",
    price: 499.49,
    inStock: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 103,
    name: "Keyboard",
    price: 29.99,
    inStock: false,
    image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 104,
    name: "Mouse",
    price: 19.99,
    inStock: true,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 105,
    name: "Monitor",
    price: 159.99,
    inStock: true,
    image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?q=80&w=1754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];


  const blogs = [
    { "id": 201, "title": "How to Learn JavaScript", "author": "Alice", "likes": 120 },
    { "id": 202, "title": "Top 10 CSS Tricks", "author": "Bob", "likes": 90 },
    { "id": 203, "title": "Understanding React Hooks", "author": "Charlie", "likes": 150 },
    { "id": 204, "title": "Node.js Performance Tips", "author": "Diana", "likes": 75 },
    { "id": 205, "title": "MongoDB Best Practices", "author": "Ethan", "likes": 60 }
  ]

  const events = [
    {
      id: 301,
      name: "Tech Conference 2025",
      date: "2025-09-10",
      location: "San Francisco",
      description: "A global gathering of technology leaders discussing AI, Web3, and cloud innovation.",
      organizer: "TechWorld Inc."
    },
    {
      id: 302,
      name: "Startup Meetup",
      date: "2025-09-15",
      location: "New York",
      description: "Networking event for founders, investors, and entrepreneurs.",
      organizer: "NYC Startups"
    },
    {
      id: 303,
      name: "AI Workshop",
      date: "2025-09-20",
      location: "London",
      description: "Hands-on workshop exploring the latest AI frameworks and tools.",
      organizer: "AI Innovators"
    },
    {
      id: 304,
      name: "Hackathon",
      date: "2025-09-25",
      location: "Berlin",
      description: "48-hour coding marathon to build innovative products.",
      organizer: "Hack Berlin"
    },
    {
      id: 305,
      name: "Product Launch",
      date: "2025-09-30",
      location: "Tokyo",
      description: "Exclusive launch of a revolutionary consumer product.",
      organizer: "FutureTech"
    }
  ];


  const movies = [
  { 
    "id": 401, 
    "title": "Inception", 
    "genre": "Sci-Fi", 
    "rating": 8.8, 
    "image": "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg" 
  },
  { 
    "id": 402, 
    "title": "Interstellar", 
    "genre": "Sci-Fi", 
    "rating": 8.6, 
    "image": "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" 
  },
  { 
    "id": 403, 
    "title": "The Dark Knight", 
    "genre": "Action", 
    "rating": 9.2, 
    "image": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" 
  },
  { 
    "id": 404, 
    "title": "The Prestige", 
    "genre": "Drama", 
    "rating": 8.5, 
    "image": "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  { 
    "id": 405, 
    "title": "Memento", 
    "genre": "Thriller", 
    "rating": 8.4, 
    "image": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" 
    
  },
  { 
    "id": 406, 
    "title": "Tenet", 
    "genre": "Sci-Fi", 
    "rating": 7.4, 
    "image": "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg" 
  }
]

  return (
    <div>
      <Navbar />

      <div id="products" className="p-2 mt-5 text-center text-4xl bg-amber-200 m-2">
        <h1>Our Products</h1>
      </div>


      <div className="grid grid-cols-5 gap-2">
        {products.map((items) => {
          return <Products
            image={items.image}
            name={items.name}
            price={items.price}
            stock={items.inStock ? "Available" : "Not Available"}

          />
        })}
      </div>

      <div id="blogs" className="p-2 text-center text-4xl bg-amber-200 m-2">
        <h1>Blog Posts</h1>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {blogs.map((blog) => {
          return <Blogs title={blog.title} author={blog.author} likes={blog.likes} />
        })}

      </div>

     <div id="movies" className="p-2 text-center text-4xl bg-amber-200 m-2">
        <h1>Movies</h1>
      </div>


      <div className="grid grid-cols-3">
        {movies.map((movie)=>{
          return <Movies image={movie.image} title={movie.title} genre={movie.genre} rating={movie.rating} />
        })}
      </div>


      <div id="events" className="p-2 text-center text-4xl bg-amber-200 m-2">
        <h1>Events</h1>
      </div>

      <div className="grid grid-cols-3 gap-2 ">
        {events.map((item)=>{
          return <Events
            name={item.name}
            loc={item.location}
            date={item.date}
            desc={item.description}
            org={item.organizer}
          />
        })}
      </div>


      


      <div id="users" className="p-2 text-center text-4xl bg-amber-200 m-2">
        <h1>Feel free to Reach Our Team</h1>
      </div>

      <div className="grid grid-cols-5 gap-2 m-2">
        {users.map((item) => {
          return <Users name={item.name} email={item.email} phone={item.phone} age={item.age}
            img={item.photo} />
        })}
      </div>



    </div>
  )
}

export default App
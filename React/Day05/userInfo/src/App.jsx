import { Card } from "./Components/Card"
import { Products } from "./Components/Product"

function App() {

  const users = [
    {
      "id": 1,
      "name": "Aarav Mehta",
      "age": 28,
      "email": "aarav.mehta@example.com",
      "isActive": true,
      "joinDate": "2023-07-15"
    },
    {
      "id": 2,
      "name": "Isha Verma",
      "age": 24,
      "email": "isha.verma@example.com",
      "isActive": false,
      "joinDate": "2022-11-03"
    },
    {
      "id": 3,
      "name": "Rohan Kapoor",
      "age": 32,
      "email": "rohan.kapoor@example.com",
      "isActive": true,
      "joinDate": "2024-02-18"
    },
    {
      "id": 4,
      "name": "Neha Sharma",
      "age": 29,
      "email": "neha.sharma@example.com",
      "isActive": false,
      "joinDate": "2021-09-22"
    },
    {
      "id": 5,
      "name": "Aditya Singh",
      "age": 35,
      "email": "aditya.singh@example.com",
      "isActive": true,
      "joinDate": "2020-05-10"
    }
  ]

  const product = [
    {
      "productId": "P201",
      "productName": "Wireless Headphones",
      "category": "Electronics",
      "price": 2499,
      "inStock": true,
      "rating": 4.5,
      "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    },
    {
      "productId": "P202",
      "productName": "Smartphone X10",
      "category": "Electronics",
      "price": 32999,
      "inStock": true,
      "rating": 4.8,
      "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    },
    {
      "productId": "P203",
      "productName": "Gaming Laptop",
      "category": "Computers",
      "price": 78999,
      "inStock": false,
      "rating": 4.6,
      "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    },
    {
      "productId": "P204",
      "productName": "Smartwatch Pro",
      "category": "Wearables",
      "price": 5999,
      "inStock": true,
      "rating": 4.7,
      "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    },
    {
      "productId": "P205",
      "productName": "4K LED TV",
      "category": "Home Entertainment",
      "price": 45999,
      "inStock": true,
      "rating": 4.4,
      "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    },
    {
      "productId": "P206",
      "productName": "Bluetooth Speaker",
      "category": "Audio",
      "price": 3499,
      "inStock": false,
      "rating": 4.3,
      "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    },
    {
      "productId": "P207",
      "productName": "DSLR Camera",
      "category": "Photography",
      "price": 55999,
      "inStock": true,
      "rating": 4.8,
      "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    },
    {
      "productId": "P208",
      "productName": "Mechanical Keyboard",
      "category": "Computer Accessories",
      "price": 4999,
      "inStock": true,
      "rating": 4.5,
      "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    },
    {
      "productId": "P209",
      "productName": "Ergonomic Chair",
      "category": "Furniture",
      "price": 12999,
      "inStock": false,
      "rating": 4.2,
      "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    },
    {
      "productId": "P210",
      "productName": "Portable Power Bank",
      "category": "Accessories",
      "price": 1999,
      "inStock": true,
      "rating": 4.1,
      "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    }
  ]

  // return (
  //   <div className="grid grid-cols-3 gap-6">
  //      {users.map((item)=>{
  //       return <Card name={item.name} email={item.email} age={item.age}  isActive={(item.isActive)?"Yess!":"Nopes!"} joinDate={item.joinDate} />
  //     })}
  //   </div>
  // )

  return (
    <div>
      <h1 className="font-extrabold p-5">Welcome to fakeShop!</h1>
      <div className="grid grid-cols-5 gap-7 m-8 ">
        {product.map((item) => {
          return <Products name={item.productName} img={item.image} category={item.category}
            price={item.price} rating={item.rating}
            availability={(item.inStock)?"Available":"Not Available"} />
        })}
      </div>


    </div>
  )
}

export default App

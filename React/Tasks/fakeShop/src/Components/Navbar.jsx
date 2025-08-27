export const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-6 py-3 bg-blue-600 text-white sticky top-0">
      <h3 className="text-2xl font-bold">FakeKart!</h3>
      <div className="flex gap-6">
        <a href="#products" className="hover:text-yellow-300">Products</a>
        <a href="#events" className="hover:text-yellow-300">Events</a>
        <a href="#movies" className="hover:text-yellow-300">Movies</a>
        <a href="#blogs" className="hover:text-yellow-300">Blogs</a>
        <a href="#users" className="hover:text-yellow-300">Our Team</a>
      </div>
    </div>
  )
}

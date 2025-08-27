export function Blogs({ title, author, likes }) {
    return (
        <div className="border-2 rounded-2xl p-4 m-4">
            <h1 className="text-xl font-bold text-gray-800 mb-2">{title}</h1>
            <h3 className=" text-gray-500 mb-1">By {author}</h3>
            <span className="font-semibold text-blue-600">❤️ {likes} Likes</span>
        </div>
    )
}

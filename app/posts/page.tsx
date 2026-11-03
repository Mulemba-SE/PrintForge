import Link from "next/link"
import { Post } from "@/app/types"

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts: Post[] = await res.json()

  
  return (
    <div className="posts-container">
      <h1>Blog Posts</h1>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <Link href={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
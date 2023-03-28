import React from 'react'
import { useState,useEffect } from 'react'

const Posts = () => {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((response)=> response.json()).then((data)=>{
            setPosts(data)
        })
    })

  return (
    <div>
        <h3>posts</h3>
        <ul>
            {posts.map((data)=>{
               return <li key={data.id} id={data.id}>{data.title}</li>
            })}
        </ul>
    </div>
  )
}

export default Posts;
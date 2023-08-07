import React from 'react'
import PostBlog from './PostBlog'

const Feed = ({posts}) => {
  return (
    <>
    {posts.map(post => (
        <PostBlog key={post.id} post={post}/>
    ))}
    </>
  )
}

export default Feed

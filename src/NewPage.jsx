import React from 'react'
import { useParams , Link } from 'react-router-dom'

const NewPage = ({posts,handleDelete}) => {
  const {id} = useParams()
  return (
    <main>
        Newpost
    </main>
  )
}

export default NewPage

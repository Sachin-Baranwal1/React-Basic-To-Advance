import React from 'react'
import { useParams,Link } from 'react-router-dom'

const DetailAbout = () => {
    const param = useParams();
  return (
    <div>
       <h2>{param.id} Detail of About us.</h2>
    </div>
  )
}

export default DetailAbout

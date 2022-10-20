import React from 'react'
import { Link } from 'react-router-dom'
console.log(import.meta.env.VITE_APP_TITLE)
const HomePage = () => {
  return (
    <div>HomePa<Link to="/about">关于</Link>
    </div>
  )
}

export default HomePage
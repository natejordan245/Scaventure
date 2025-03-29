import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to Scaventure
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Transform traditional scavenger hunts into engaging group experiences
      </p>
      <Link to="/hunts" className="btn btn-primary">
        Start Hunting
      </Link>
    </div>
  )
}

export default Home 
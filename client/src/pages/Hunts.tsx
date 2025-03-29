import React from 'react'

const Hunts = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Hunts</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h3 className="text-xl font-bold">Downtown Adventure</h3>
          <p>Explore the city's hidden gems</p>
          <button className="btn btn-primary mt-4">Start Hunt</button>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold">Historical Tour</h3>
          <p>Discover local history</p>
          <button className="btn btn-primary mt-4">Start Hunt</button>
        </div>
      </div>
    </div>
  )
}

export default Hunts 
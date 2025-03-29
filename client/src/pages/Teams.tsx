import React from 'react'

const Teams = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Teams</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h3 className="text-xl font-bold">Create Team</h3>
          <button className="btn btn-primary mt-4">New Team</button>
        </div>
      </div>
    </div>
  )
}

export default Teams 
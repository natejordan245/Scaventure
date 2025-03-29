import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { clearUser } from '../slices/userSlice'

const Profile = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state: RootState) => state.user)

  return (
    <div className="max-w-md mx-auto">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="space-y-4">
          <p>Username: {currentUser?.username}</p>
          <p>Email: {currentUser?.email}</p>
          <button 
            onClick={() => dispatch(clearUser())}
            className="btn btn-primary w-full"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile 
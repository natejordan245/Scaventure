import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Layout = () => {
  const location = useLocation()
  const { isAuthenticated } = useSelector((state: RootState) => state.user)

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-primary">Scaventure</span>
              </Link>
              {isAuthenticated && (
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/hunts"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      location.pathname === '/hunts'
                        ? 'border-primary text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    Hunts
                  </Link>
                  <Link
                    to="/teams"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      location.pathname === '/teams'
                        ? 'border-primary text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    Teams
                  </Link>
                  <Link
                    to="/profile"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      location.pathname === '/profile'
                        ? 'border-primary text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    Profile
                  </Link>
                </div>
              )}
            </div>
            <div className="flex items-center">
              {isAuthenticated ? (
                <Link
                  to="/profile"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Profile
                </Link>
              ) : (
                <div className="flex space-x-4">
                  <Link
                    to="/login"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout 
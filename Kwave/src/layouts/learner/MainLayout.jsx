import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { UserContext } from '../../contexts/UserContext'

const MainLayout = () => {
  const [user, setUser] = useState(null)

  const updateUser = (newUser) => {
    setUser(newUser)
  }

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default MainLayout
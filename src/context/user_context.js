import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const {

    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const [myUser, setMyUser] = useState(null)
  const [location, setLocation] = useState('')
  const [number, setNumber] = useState('')
  const [isCheckout, setIsCheckout] = useState(true)
  const handle = (location, number) => {
    setIsCheckout(false)
    if (location) {
      setLocation(location)
      setNumber(number)

    } else {
      setLocation('')
      setNumber('')
    }

  }
  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(null)
    }
    //eslint-disable-next-line
  }, [isAuthenticated])

  return (
    <UserContext.Provider value={
      {
        isAuthenticated,
        loginWithRedirect,
        user,
        logout,
        myUser,
        handle,
        isCheckout,
        location,
        number
      }
    }>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}

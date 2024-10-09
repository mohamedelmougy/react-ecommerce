import React, { useEffect, useState } from 'react'

const ProtectedRouteHook = () => {
    const [userData, setUserData] = useState(JSON.parse( localStorage.getItem("user")))
    const [isUser, setIsUser] = useState()
    const [isAdmin, setIsAdmin] = useState()

    useEffect(() => {
        if (userData !== null) {
            if (userData.role === "user") {
                setIsUser(true)
                setIsAdmin(false)
            } else {
                setIsUser(false)
                setIsAdmin(true)
            }
        } else {
            setIsUser(false)
            setIsAdmin(false)
        }
    }, [])
    
    return [isUser, isAdmin, userData]
}

export default ProtectedRouteHook

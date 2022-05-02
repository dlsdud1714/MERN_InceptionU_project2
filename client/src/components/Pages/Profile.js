import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Button, Alert } from 'react-bootstrap'
import { Logout } from '@mui/icons-material'
import { useNavigate } from 'react-router'


const Profile = () => {
    const { currentUser, logout } = useAuth()
    const [ error, setError ] = useState('')
    let navigate = useNavigate();

    async function handleLogout() {
        setError('')
        try{
            await logout()
            navigate('/')
        } catch {
            setError('Failed to logout')
        }
    }

  return (
    <div>
    {error && <Alert variant="danger"> {error}</Alert>}
    <h3> Email: {currentUser.email} </h3>
    <Button onClick={handleLogout}> Logout </Button>
    </div>
  )
}

export default Profile
import {React, useState} from 'react'
import Profile from '../../components/Profile/Profile'

const MyProfile = () => {
  const [name, setName] = useState('Mai Dao Tuan Thanh')
  return (
    <div>
      <Profile
        name={name}
      />
    </div>
  )
}

export default MyProfile

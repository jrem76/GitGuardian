import React, { useState } from 'react'
import { GithubUserForm } from './Pages/GithubUserForm'
import { UserInfos } from './Pages/UserInfos'

export const App = () => {
  const [userInfos, setUserInfos] = useState(null)
  return (
    <div>
      {!userInfos && <GithubUserForm setUserInfos={userInfos => setUserInfos(userInfos)}/>}
      {
        userInfos && <UserInfos userInfos={userInfos}></UserInfos>
      }
    </div>
  )
}

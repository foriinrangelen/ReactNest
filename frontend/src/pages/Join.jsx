import React, { useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'


const Join = () => {
  
  const navigate = useNavigate()
    const [userJoinId, setUserJoinId]= useState(null)
    const [userJoinPassword, setUserJoinPassword]= useState(null)
    const [userJoinName, setUserJoinName]= useState(null)
    const join= async(e)=>{
        e.preventDefault(); // 폼 제출 기본 동작 방지
        console.log("클릭")
        console.log(userJoinId)
        console.log(userJoinPassword)
        console.log(userJoinName)
        const { data } = await axios.post('/api/user', {
            userId:userJoinId,
            password:userJoinPassword,
            name:userJoinName
          })
          navigate('/')
          // console.log(data)
          // Cookies.set('accessToken', data.accessToken, { expires: 7 }); // 7일 동안 유효
          // console.log(Cookies.get('accessToken'),'accessTokenaccessTokenaccessToken')
    }

  return (
    <div>
      <span className="login-text">회원가입</span>
    <form class="form">
    <h4 style={{ margin: '0px', float:"left" }}>아이디</h4>
    <input type="text"
             placeholder="ID"
             value={userJoinId}
             onChange={(e) => setUserJoinId(e.target.value)}
             style={{ marginTop: '0.4rem'}} />
    <h4 style={{ margin: '0px', float:"left" }}>비밀번호</h4>
    <input type="password"
             placeholder="password"
             value={userJoinPassword}
             onChange={(e) => setUserJoinPassword(e.target.value)}
             style={{ marginTop: '0.4rem'}}/>
      <h4 style={{ margin: '0px', float:"left" }}>이름</h4>
      <input type="text"
             placeholder="name"
             value={userJoinName}
             onChange={(e) => setUserJoinName(e.target.value)}
             style={{ marginTop: '0.4rem'}} />
      <button onClick={(e)=>join(e)}>create</button>
      
      <p className="message">Already registered? <Link to={'/login'}>Create an account</Link></p>
    </form>
  </div>



  )
}

export default Join

import React, { useState} from 'react'

import api from '../services/api'
import './Login.css'

import logo from '../assets/logo.svg'

export default function Login({ history }) {

  const [username, setUsername] = useState('')

  async function handleSubimit(e){
    e.preventDefault()
    const response = await api.post('/devs', { username })
    const { _id } = response.data

    history.push(`/dev/${ _id }`)

  }

  return (
    <div className="login-container">
      <form onSubmit={ handleSubimit }>
      <img src={logo} alt="tindev" />
      <input placeholder="Digite seu usuário" 
      value={username} 
      onChange={ e => setUsername(e.target.value)}
       />
      <button type="submit">Entrar</button>
      </form>
    </div>
  )
}


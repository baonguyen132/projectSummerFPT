import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styleLogin from './login.module.scss'
import InputGroup from '../../components/common/admin/inputGroup/inputGroup'
import src from "../../asset/image/login.png"

function LoginPage() {
  const [form, setForm] = useState({ gmail: '', passwords: '' })
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className={styleLogin.view}>
      <div className={styleLogin.content}>
        <div className={styleLogin.form}>
          <div className={styleLogin.avata}>
            <img className="avata" alt="login" src={src} />
          </div>

          <div className={styleLogin.title}>
            <h2>
              <b>Welcome</b>
            </h2>
          </div>

          <div className={styleLogin.username}>
            <InputGroup
              type='text'
              name="gmail"
              formData={form}
              handleChange={handleChange}
              icon="bxr  bx-at"
              label="Gmail"
            />
            {errors.gmail && <p>{errors.gmail}</p>}
          </div>

          <div className={styleLogin.password}>
            <InputGroup
              type='password'
              name="password"
              formData={form}
              handleChange={handleChange}
              icon="bxr  bx-lock"
              label="Gmail"
              
            />

            {errors.passwords && <p>{errors.passwords}</p>}
          </div>

          {result && (
            <div className={styleLogin.result}>
              <p>{result}</p>
            </div>
          )}

          <div className={styleLogin.submit}>
            <button type="submit" name="submitLoginAdmin" >
              Sign in
            </button>
          </div>

          <div className={styleLogin.ForgotPass_SignUp}>
            <div className={styleLogin.forgotpass}>
              <a href="#">Forgot Password?</a>
            </div>
            <div className={styleLogin.signup}>
              <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

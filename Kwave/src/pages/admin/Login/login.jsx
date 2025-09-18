import React, { useState } from "react";
import styles from "./login.module.scss";
import ButtonDefault from "../../../components/common/admin/button/buttonDefault";
import InputGroup from "../../../components/common/admin/inputGroup/inputGroup";
import handleLogin from "../../../services/admin/loginService";

import Cookies from "js-cookie";


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    try {
      const { accessToken, message } = await handleLogin({ email: formData.email, password: formData.password });

      Cookies.set("access_token", accessToken, { expires: 1/24 , secure: true , sameSite: "Strict" }); // Expires in 1 day

      alert(message);

      window.location.href = "/dashboard";
    } catch (error) {
      console.log("Login error:", error);
      alert("Login failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginHeader}>
          <div className={styles.logo}>
            <i className="bx bx-user-circle"></i>
            <h1>Welcome Back</h1>
            <p>Please sign in to your account</p>
          </div>
        </div>
        
        <div className={styles.loginForm}>

          <InputGroup formData={formData} handleChange={handleChange} name="email" icon="bx bx-user" label="Email" />
          <InputGroup formData={formData} handleChange={handleChange} name="password" icon="bx bx-lock" type="password" label="Password" />
          <ButtonDefault onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? (
              <>
                <i className="bx bx-loader-alt bx-spin"></i>
                Signing in...
              </>
            ) : (
              <>
                <i className="bx bx-log-in"></i>
                Sign In
              </>
            )}
          </ButtonDefault>
        </div>
      </div>
    </div>
  );
}

export default Login;

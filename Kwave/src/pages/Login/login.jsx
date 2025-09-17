import React, { useState } from "react";
import styles from "./login.module.scss";
import ButtonDefault from "../../components/common/button/buttonDefault";
import InputGroup from "../../components/common/inputGroup/inputGroup";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
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
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    try {
      console.log("Login attempt:", formData);
      // Add your login logic here
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
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

          <InputGroup formData={formData} handleChange={handleChange} name="username" icon="bx bx-user" label="Username" />
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

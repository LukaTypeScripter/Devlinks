import styled from "styled-components"
import { email, iconPassword, logoLarge } from "../../images"
import { useState } from "react";
import Button from "../reuseable/Button";

function SignUp() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [repeatPasswordInput, setRepeatPasswordInput] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isEmptyEmail, setIsEmptyEmail] = useState(true);
  const [isEmptyPassword, setIsEmptyPassword] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
    setIsEmptyEmail(e.target.value.trim() === "");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
    setIsEmptyPassword(e.target.value.trim() === "");
  };

  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPasswordInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation logic
    setIsValidEmail(validateEmail(emailInput));
    setIsEmptyEmail(emailInput.trim() === "");
    setIsEmptyPassword(passwordInput.trim() === "");
    setPasswordsMatch(passwordInput === repeatPasswordInput);

    // If all validations pass and passwords match, you can proceed with the form submission here
    // For this example, I'll just log the form data
    console.log("Email:", emailInput);
    console.log("Password:", passwordInput);
    console.log("Repeat Password:", repeatPasswordInput);
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  return (
    <AuthCont>
        <img src={logoLarge} alt="" />
<section>
    <h1 className="title">Login</h1>
    <p className="desc">Add your details below to get back into the app</p>
    <form action="" onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <label htmlFor="">Email Address</label>
          <div className="inp">
            <input
              type="text"
              id="input"
              placeholder="e.g. alex@email.com"
              onChange={(e) => handleEmailChange(e)}
            />
            <img src={email} alt="email" className="email__icon" />
            {!isValidEmail && emailInput.length > 0 && (
              <span className="valid__empty">Not a valid email</span>
            )}
            {isEmptyEmail && <span className="valid__empty">Can't be empty</span>}
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="">Password</label>
          <div className="inp">
            <input
              type="password"
              id="input"
              placeholder="Enter Password"
              onChange={(e) => handlePasswordChange(e)}
            />
            <img src={iconPassword} alt="password" className="email__icon" />
            {isEmptyPassword && <span className="valid__empty">Can't be empty</span>}
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="">Repeat Password</label>
          <div className="inp">
            <input
              type="password"
              id="input"
              placeholder="Repeat Password"
              onChange={(e) => handleRepeatPasswordChange(e)}
            />
            <img src={iconPassword} alt="password" className="email__icon" />
            {!passwordsMatch && (
              <span className="valid__empty">Passwords do not match</span>
            )}
          </div>
        </fieldset>
        <Button Text="Login" bgColor="#633cff" color="#fff" height="46px" />
      </form>
</section>
    </AuthCont>
  )
}

const AuthCont = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    @media (max-width: 540px) {
        align-items: flex-start;
    gap: 64px;
    width: 100%;
    padding: 32px;
    background-color: #fff;
    top: 0;
    left: 0;
    transform: none;
    height: 100vh;
    }
    img {
        width: 185.5px;
        height: auto;
        object-fit: contain;
    }
    section {
    width: 476px;
    min-height: 482px;
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 40px;
    @media (max-width: 540px) {
        width: 100%;
        padding:0;
    }
    .title {
        color: #333;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    @media (max-width: 540px) {
        font-size: 1.5rem;
    }
    }
    .desc {
        color: #737373;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 32px;
    }
    form {
         display: flex;
         flex-direction: column;
         gap: 24px;
         margin-bottom: 24px;
         fieldset {
            display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    label {
        color: #333;
    font-size: .75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    }
    .inp {
    position:relative;
    #input {
        width: 100%;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    background: #fff;
    color: #333;
    padding: 0 48px;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    }
    .email__icon {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 16px;
    width: 16px;
    margin: auto;
    object-fit: cover;
    height: auto;
    }
   .valid__empty {
    display: block;
    height: 18px;
    color: #ff3939;
    text-align: right;
    font-size: .75rem;
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 16px;
   }
    
    }
         }
    }
    }
`

export default SignUp
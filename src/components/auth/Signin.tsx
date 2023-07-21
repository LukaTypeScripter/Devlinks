import styled from "styled-components"
import { email, iconPassword, logoLarge } from "../../images"
import Button from "../reuseable/Button";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, FieldValues, Controller } from "react-hook-form";
function Signin() {
    const { control, handleSubmit, formState: { errors }, setError } = useForm();
  
    const navigate = useNavigate();
  
    const onSubmit: SubmitHandler<FieldValues>  = async (data) => {
        try {
            if (!data.email) {
              setError("email", { type: "manual", message: "Email is required" });
              return;
            }
      
            if (!data.password) {
              setError("password", { type: "manual", message: "Password is required" });
              return;
            }
      
            const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log(userCredentials);
            localStorage.setItem("isLoggedIn", "true");
            navigate("/account");
          } catch (err) {
            console.log(err);
            setError("email", { type: "manual", message: "Invalid email or password" });
          }
    };
  return (
    <AuthCont>
        <img src={logoLarge} alt="" />
<section>
    <h1 className="title">Login</h1>
    <p className="desc">Add your details below to get back into the app</p>
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <label htmlFor="">Email Adress</label>
            <div className="inp">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <input {...field} type="text" id="input" placeholder="e.g. alex@email.com" />
                  <img src={email} alt="email" className="email__icon" />
                </>
              )}
            />
            </div>
        </fieldset>
        <fieldset>
            <label htmlFor="">Password</label>
            <div className="inp">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <input {...field} type="password" id="input" placeholder="Enter Password" />
                  <img src={iconPassword} alt="password" className="email__icon" />
                </>
              )}
            />
           
            </div>
        </fieldset>
                {errors.email && typeof errors.email.message === 'string' && (
              <span className="valid__empty">{errors.email.message}! </span>
            )}
        <Button Text="Login" bgColor="#633cff"  color="#fff" height="46px"/>
    </form>
    <p className="auth">
    Don't have an account?&nbsp;
    <Button  bgColor="transparent" color="#633cff" Text="Create Account" onClick={() => navigate('/signup')}/>
    </p>
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
 
    
    }
         }
    }
    }
    .valid__empty {
        display: block;
    height: 18px;
    color: #ff3939;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
   }
   .auth {

   }
`

export default Signin
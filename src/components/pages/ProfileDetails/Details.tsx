import React, { useContext } from 'react'
import styled from 'styled-components'
import { uploadImage } from '../../../images'
import DetailsContext from '../../../contexts/profileDetails';

function Details() {
   const {setProfilePicture,profilePicture,handleEmailChange,handleFirstNameChange,handleLastNameChange} = useContext(DetailsContext)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            setProfilePicture(reader.result);
          }
        };
        reader.readAsDataURL(file);
      }
    };
  return (
    <ProfileCont>
        <h1>Profile Details</h1>
        <p className='info'>Add your details to create a personal touch to your profile.</p>

    <div className='upload__cont'>
        <h1>Profile Picture</h1>
        <label htmlFor="uploadImageInput">
            <input type="file" accept="image/png, image/jpeg" name="profileAvatar" id='uploadImageInput'  onChange={handleImageChange}/>
            {profilePicture ? (
            <img src={profilePicture} alt='uploaded' className='upload' />
          ) : (
            <>
              <img src={uploadImage} alt='upload' className='upload' />
              + Upload Image
            </>
          )}
        </label>
        <p className='format'>Image must be below 1024x1024px. Use PNG or JPG format.</p>
    </div>
    <fieldset className='wrap'>
    <fieldset className='input__cont'>
        <label htmlFor="">First name*</label>
        <div className='inp'>
            <input type="text" onChange={handleFirstNameChange}/>
        </div>
        
    </fieldset>
    <fieldset className='input__cont'>
        <label htmlFor="">Last name*</label>
        <div className='inp'>
            <input type="text" onChange={handleLastNameChange}/>
        </div>
        
    </fieldset>

    <fieldset className='input__cont'>
        <label htmlFor="">Email*</label>
        <div className='inp'>
            <input type="text" onChange={handleEmailChange}/>
        </div>
        
    </fieldset>
    </fieldset>
    
    </ProfileCont>
  )
}
const ProfileCont = styled.form`
    width: 100%;
    background-color: #fff;
    padding-top: 40px;
    border-radius: 12px;
    h1 {
    font-style: normal;
    line-height: 150%;
    padding: 0 40px;
    color: #333;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 8px;
    }
    .info {
        color: #737373;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 40px;
    font-style: normal;
    line-height: 150%;
    padding: 0 40px;
    }
.upload__cont {
    width: 85%;
    height: 233px;
    background-color: #fafafa;
    border-radius: 12px;
    padding: 0 20px;
    margin: auto auto 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    @media (max-width: 700px) {
        width: 92%;
        flex-direction: column;
        align-items: flex-start;
        height:auto;
        padding: 20px;
    }
    h1 {
        color: #737373;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    white-space: nowrap;
    font-size: 1rem;
    }
    label {
        flex-shrink: 0;
    gap: 8px;
    width: 193px;
    height: 193px;
    background-color: #efebff;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #633cff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    input {
        display: none;
    }
    .upload {
        width: 40px;
        object-fit: contain;
    }
 
    }
    .format {
        color: #737373;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    width: 215px;
    font-size: .75rem;
    }
    
}
.wrap {
    width: 85%;
    height: 208px;
    border-radius: 12px;
    padding: 0 20px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    margin: 0 auto 115px;
}
.input__cont {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
        font-size: 1rem;
    font-style: normal;
    line-height: 150%;
    color: #737373;
    font-weight: 400;
    }
    .inp {
        position: relative;
        width: 75%;
        input {
            width: 100%;
    height: 48px;
    background-color: #fff;
    padding: 0 16px;
    border-radius: 8px;
    color: #333;
    border: 1px solid #d9d9d9;
    font-size: 1rem;
    font-style: normal;
    line-height: 150%;
        }
    }
}
`
export default Details
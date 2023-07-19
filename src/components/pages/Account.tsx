import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { logoLarge,link, profileDetailsHeader, phoneMockup } from '../../images'
import Button from '../reuseable/Button'
import PhoneMockup from './PhoneMockup';
import LinksForm from './LinksForm';
import DetailsMockup from './ProfileDetails/DetailsMockup';
import Details from './ProfileDetails/Details';
import { getAuth, signOut } from 'firebase/auth';
import AuthContext from '../../contexts/Auth';
import { useNavigate } from 'react-router-dom';
function Account() {
    const [activeLink, setActiveLink] = useState('links');
    const {UsersignOut} = useContext(AuthContext)
    const navigate = useNavigate()

  return (
    <AccCont>
        <nav>
            <img src={logoLarge} alt="logo" onClick={UsersignOut}/>
        <ul className='navbar__links'>
        <li  className={activeLink === 'links' ? 'active' : ''}
        onClick={() => setActiveLink('links')}
        >
        <img src={link} alt="" className='links'/>
        Links
        </li>
        <li
         className={activeLink === 'profile' ? 'active' : ''}
         onClick={() => setActiveLink('profile')}
        >
        <img src={profileDetailsHeader} alt="" className='links'/>
        Profile Details
        </li>
        </ul>
        <Button Text='Preview' color='#633cff' bgColor='transparent'  border='1px solid #633cff' width='114px' height='46px' onClick={() => navigate('/preview')}/>
        </nav>
        
        {activeLink === "links" ? (
          <>
          
          <PhoneMockup />
          <LinksForm />
          </>
        ): (
          <>
          <DetailsMockup />
          <Details />
          </>
        )}
        
    </AccCont>
  )
}
const AccCont = styled.main`
    width: 1264px;
    margin: auto;
    padding: 24px 0;
    display: grid;
    grid-template-columns: 512px 728px;
    justify-content: center;
    grid-row-gap: 24px;
    row-gap: 24px;
    grid-column-gap: 24px;
    column-gap: 24px;
    nav {
    width: 100%;
    height: 78px;
    background-color: #fff;
    border-radius: 12px;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: 1/3;
    img {
    width: 146px;
    height: auto;
    object-fit: contain;
    cursor: pointer;
    }
    .navbar__links {
    display: flex;
    gap: 16px;
    li {
        height: 46px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 27px;
    color: #737373;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    cursor: pointer;
    justify-content: space-between;
    &.active {
        background-color: rgb(239, 235, 255);
        color: rgb(99, 60, 255);
      }
    .links {
    width: 20px;
    height: 20px;
    }
}
    }
    }
    

`

export default Account
import  { useContext, useEffect,  useState } from 'react'
import styled from 'styled-components'
import { logoLarge,link, profileDetailsHeader,  logoSmall, previewHeader } from '../../images'
import Button from '../reuseable/Button'
import PhoneMockup from './PhoneMockup';
import LinksForm from './LinksForm';
import DetailsMockup from './ProfileDetails/DetailsMockup';
import Details from './ProfileDetails/Details';

import AuthContext from '../../contexts/Auth';
import { useNavigate } from 'react-router-dom';
function Account() {
    const [activeLink, setActiveLink] = useState('links');
    const {UsersignOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });
    
  return (
    <AccCont>
        <nav>
            <img src={windowWidth < 740 ? logoSmall:logoLarge} alt="logo" onClick={UsersignOut} className='logo'/>
        <ul className='navbar__links'>
        <li  className={activeLink === 'links' ? 'active' : ''}
        onClick={() => setActiveLink('links')}
        >
        <img src={link} alt="" className='links'/>
        {windowWidth < 740 ? "":"Links"}
        </li>
        <li
         className={activeLink === 'profile' ? 'active' : ''}
         onClick={() => setActiveLink('profile')}
        >
        <img src={profileDetailsHeader} alt="" className='links'/>
        {windowWidth < 740 ? "":"Profile Details"}
        </li>
        </ul>
        <Button Text='Preview' color='#633cff' bgColor='transparent'  border='1px solid #633cff' width='114px' height='46px' onClick={() => navigate('/preview')} windowWidth={windowWidth}
        queryHeigth='42px' queryWidth='52px'
        >
          {windowWidth < 740 && (
            <img src={previewHeader} alt="header" className='eye' />
          )}
        </Button>
        </nav>
        
        {activeLink === "links" ? (
          <>
    {windowWidth > 940 && (
            <PhoneMockup />
           )}
         
          <LinksForm />
          </>
        ): (
          <>
           {windowWidth > 940 && (
            <DetailsMockup />
           )}
          
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
    @media (max-width: 900px) {
      grid-template-columns: 100% !important;
    column-gap: 0;
    }
    @media (max-width: 700px) {
      padding-top: 0;
    width: 100%;
    }
    @media (max-width: 1000px) {
      grid-template-columns: 353.88px 55%;
    }
    @media (max-width: 1330px) {
      width: 90%;
    grid-template-columns: 40% 60%;
}
.eye {
  width: 20px;
    object-fit: contain;
}
    
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
    @media (max-width: 740px) {
      nav {
        height: 74px!important;
      }
      .navbar__links {
        gap: 0 !important;
      }
      .logo {
        width: 32px!important;
      }
      li {
        width: 74px !important;
    height: 42px !important;
      }
    }

`

export default Account
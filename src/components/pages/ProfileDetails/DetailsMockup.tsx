import React, { useContext } from 'react'
import styled from 'styled-components'
import { arrowRigth, colors, ilustrationEmty, phoneMockup } from '../../../images'
import DetailsContext from '../../../contexts/profileDetails'
import LinksContext from '../../../contexts/Links'

function DetailsMockup() {
    const {profilePicture,email,firstName, lastName} = useContext(DetailsContext)
    const {links,selectedPlatforms} = useContext(LinksContext)
  return (
    <PhoneMockupCont>
        <div className='phone__cont'>
            <img src={phoneMockup} alt="" className='phone' />
            <img src={profilePicture || ''} alt="" className='user' />
            <h1>{firstName} {lastName}</h1>
            <h2>{email}</h2>
            <div className='link__boxes'>
          
            {links.map((link,index) => {
     const platformName = selectedPlatforms[index]?.name;
     const backgroundColor = platformName && colors[platformName] ? colors[platformName] : '#333';
    return (
        <a href={link.url} key={index} target='_blank'>
        <div className="inside__box"  style={{ backgroundColor }}>
        <img src={selectedPlatforms[index]?.icon} alt="" />
        {selectedPlatforms[index]?.name}
        <img src={arrowRigth} alt="" />
        </div>
        </a>
    )
   
})}
        
            </div>
        </div>
    </PhoneMockupCont>
  )
}
const PhoneMockupCont = styled.section`
    height: 834px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    @media (max-width: 900px) {
        display: none;
    }
    .phone__cont {
        position: relative;
    }
    h1 {
    font-style: normal;
    line-height: 150%;
    width: 80%;
    text-align: center;
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    color: #333;
    font-size: 1.125rem;
    font-weight: 600;
    top: 176px;
    }
    h2 {
        color: #737373;
    font-size: .875rem;
    font-weight: 400;
    top: 206px;
    font-style: normal;
    line-height: 150%;
    width: 80%;
    text-align: center;
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    }
    .phone {
        object-fit: cover;
        height: auto;
        width: 307px;
    }
    .user {
        border: 4px solid #633cff;
    width: 96px;
    height: 96px;
    border-radius: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 63.5px;
    }
    .link__boxes {
        background-color: #fff;
    width: 237px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    bottom: 57px;
    left: 0;
    right: 0;
    margin: auto;
}

.inside__box {
    width: 100%;
    height: 44px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 8px;
    color: #fff;
    font-size: .75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    position: relative;
    cursor: -webkit-grab;
    cursor: grab;
    -webkit-text-decoration-line: none;
    text-decoration-line: none;
}
    

`
export default DetailsMockup
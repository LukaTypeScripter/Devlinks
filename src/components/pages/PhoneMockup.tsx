import React, { useContext } from 'react'
import styled from 'styled-components'
import { arrowRigth, colors, phoneMockup } from '../../images'
import LinksContext from '../../contexts/Links'

function PhoneMockup() {
    const {links,selectedPlatforms} = useContext(LinksContext)
  
  return (
    <PhoneMockupCont>
    <div className='phone__cont'>
    <img src={phoneMockup} alt="phone" className='phone' />
    <div className="link__boxes">
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
    .phone__cont {
        position: relative;
    }
    .phone {
        object-fit: cover;
        height: auto;
        width: 307px;
    }
    .link__boxes {
        width: 237px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 278px;
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
    cursor: grab;
    text-decoration-line: none;
}
    

`
export default PhoneMockup
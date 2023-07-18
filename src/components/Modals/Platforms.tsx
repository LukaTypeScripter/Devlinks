import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { iconsData } from '../../images'
import LinksContext from '../../contexts/Links';
interface PlatformProps {
  linkIndex: number;
  setIsOpen: (index: number) => void
}

function Platforms({linkIndex,setIsOpen}:PlatformProps) {
  const {setSelectedPlatformForLink,} = useContext(LinksContext)

    const handlePlatformSelection = (platform:string) => {
      const selectedPlatformInfo= iconsData.find((icon) => icon.name === platform);
      setSelectedPlatformForLink(linkIndex, selectedPlatformInfo || null);
      setIsOpen(linkIndex)
      console.log(selectedPlatformInfo)
    };

  return (
    <LinksModalCont>
    {iconsData.map((icons,index) => (
        <div key={icons.id} onClick={() => handlePlatformSelection(icons.name)}>
  <span style={{ WebkitMaskImage: `url(${icons.icon})`,
              maskImage: `url(${icons.icon})`,}}></span>
              {icons.name}

    </div>
    ))}
    
    </LinksModalCont>
  )
}
const LinksModalCont = styled.div`
    display: block;
    transform: scale(1);
    width: 100%;
    height: 345px;
    overflow-y: auto;
    padding: 12px 16px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    box-shadow: 0 0 32px 0 rgba(0,0,0,.1);
    border-radius: 8px;
    position: absolute;
    top: 64px;
    left: 0;
    z-index: 9999;
    div {
        color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    padding-bottom: 12px;
    border-bottom: 1px solid #d9d9d9;
    span {

        width: 16px;
    height: 16px;
    mask-size: 16px 16px;
    -webkit-mask-size: 16px 16px;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    background-color: #737373;
    }
    }
   
`
export default Platforms
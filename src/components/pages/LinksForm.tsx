import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../reuseable/Button'
import { cheveronDown, link } from '../../images'
import Platforms from '../Modals/Platforms';
import LinksContext from '../../contexts/Links';
import Empty from './Empty';
import { v4 as uuidv4 } from 'uuid';
interface LinkItem {
    platform: string;
    url: string;
    id: string;
  }
  
function LinksForm() {
    const initialLinks: LinkItem[] = JSON.parse(localStorage.getItem('links')!) || [];
    const [isOpenArray, setIsOpenArray] = useState<boolean[]>(initialLinks.map(() => false));
   const [isIndex,setIsindex] = useState(0)
    const {selectedPlatforms,setLinks,links} = useContext(LinksContext)
    const toggleModal = (index: number) => {
      setIsindex(index)
      setIsOpenArray((prevIsOpenArray) => {
        const updatedArray = [...prevIsOpenArray];
        updatedArray[index] = !updatedArray[index];
        return updatedArray;
      });
    };
    const addNewLink = (e:any) => {
        e.preventDefault()
        if(links.length < 4) {
          const newLink: LinkItem = { platform:"", url: '', id: uuidv4() };
          setLinks([...links, newLink]);
        }
    }
    const RemoveLink = (index: number, e?: React.MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault();
        setLinks((prevLinks) => prevLinks.filter((link, i) => i !== index));
      };
     const handleUrlChange = (index:number, url:string) => {
        const updatedLinks = [...links];
        updatedLinks[index].url = url;
        setLinks(updatedLinks);
      };
     

      
      
      useEffect(() => {
        localStorage.setItem('links', JSON.stringify(links));
      }, [links]);
  return (
    <CustomLinks>
        <h1 className='custom__title'>Customize your links</h1>
        <p className='custom__desc'>Add/edit/remove links below and then share all your profiles with the world</p>
        <fieldset className='all__links'>
        <Button onClick={addNewLink}  color='#633cff' border='1px solid #633cff' bgColor='transparent' borderRadius='8px' height='46px' width='100%' Text='+ Add new link'/>
        
        {links.length === 0 ? (<>
        <Empty />
        </>) : (
          <>
          {links.map((links, index) => {
            const { platform, url } = links;
            const key = platform || index;
            return (
              <fieldset className='links' key={key}>
                <h1>= Link #{index + 1}</h1>
                <button onClick={(e) => RemoveLink(index, e)}>Remove</button>
                <fieldset className='platform'>
                  <label htmlFor=''>Platform</label>
                  <div className='platform__box' onClick={() => toggleModal(index)}>
                    
                  {selectedPlatforms[index] ? (
                      <>
                        <img src={selectedPlatforms[index]?.icon} alt='' />
                        {selectedPlatforms[index]?.name}
                      </>
                    ) : (
                      'Select Platform'
                    )}
                    {isOpenArray[index] && <Platforms linkIndex={index} setIsOpen={toggleModal} />}
                    <img src={cheveronDown} alt='' className='cheveron' />
                  </div>
                </fieldset>
                <fieldset className='paste__link'>
                  <label htmlFor=''>Link</label>
                  <div className='input__cont'>
                    <img src={link} alt='link' className='link__icon' />
                    <input
                      type='text'
                      className='link__input'
                      placeholder='e.g. https://www.github.com/johnappleseed'
                      value={url}
                      name='url'
                      onChange={(e) => handleUrlChange(index, e.target.value)}
                    />
                  </div>
                </fieldset>
              </fieldset>
            );
          })}
          </>
        )}
       
        </fieldset>
        
    </CustomLinks>
  )
}

const CustomLinks = styled.form`
    padding: 40px 0 0;
    width: 100%;
    border-radius: 12px;
    position: relative;
    min-height: 834px;
    background-color: #fff;
    .custom__title {
        color: #333;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 8px;
    padding: 0 40px;
    }
    .custom__desc {
        color: #737373;
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 40px;
    padding: 0 40px;
    }
    .all__links {
        display: flex;
    flex-direction: column;
    gap: 24px;
    min-height: 500px;
    padding: 0 40px 24px;
    }
    .links {
        padding: 20px;
    background-color: #fafafa;
    border-radius: 12px;
    position: relative;
    h1 {
        color: #737373;
    font-size: 1rem;
    font-style: normal;
    line-height: 150%;
    font-weight: 700;
    margin-bottom: 12px;
}
    button {
        position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    font-weight: 400;
    cursor: pointer;
    color: #737373;
    font-size: 1rem;
    font-style: normal;
    line-height: 150%;
}
    }
    .platform {
        display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 12px;
        label {
    color: #333;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-size: .75rem;
        }
        .platform__box {
            display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 16px;
    width: 100%;
    height: 48px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    font-size: 1rem;
    cursor: pointer;
    position: relative;
}
.cheveron {
    width: 16px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 16px;
    transform: rotate(0deg);
}
        }
    .paste__link {
        display: flex;
    flex-direction: column;
    gap: 4px;
        label {
            color: #333;
    font-size: .75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
}
.input__cont {
    position: relative;
    z-index: 50;
    .link__icon {
        width: 16px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 16px;
    }
.link__input {
    width: 100%;
    height: 48px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    padding: 0 16px 0 44px;
    gap: 12px;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
}
.error {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff3939;
    font-family: var(--font);
    font-size: .75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 16px;
    background-color: #fff;
}
}

        }
    
    
    

`

export default LinksForm

import styled from 'styled-components'
import Button from '../../reuseable/Button'
import { placeholderimage } from '../../../images'
import { useNavigate } from 'react-router-dom'

function Preview() {
    const navigate = useNavigate()
  return (
    <PreviewCont>
        <header>
            <nav className='nav__bar'>
                <Button width='159px' height='46px' border='1px solid #633cff' bgColor='#fff' color='#633cff' Text='Back To Editor' onClick={() => navigate('/account')}/>
                <Button width='133px' height='46px'  bgColor='#633cff' color='#fff' borderRadius='8px' Text='Share Link'/>
            </nav>
            <section className='user__cont'>
                <img src={placeholderimage} alt="placeholder" className='placeholder__img' />
                <h1>awdawda</h1>
                <h2>awdawda</h2>
                {/**here goes platforms */}
                <div></div>
            </section>
        </header>
    </PreviewCont>
  )
}
const PreviewCont = styled.main`
    header {
        width: 100%;
    height: 357px;
    padding-top: 24px;
    border-radius: 0 0 32px 32px;
    background-color: #633cff;
    .nav__bar{
        width: 1392px;
    height: 78px;
    border-radius: 12px;
    background-color: #fff;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px
    
    }
    
    }
    .user__cont {
        position: absolute;
    top: 208px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
    box-shadow: 0 0 32px 0 rgba(0,0,0,.1);
    width: 349px;
    min-height: 569px;
    border-radius: 24px;
    padding: 48px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .placeholder__img {
        object-fit: contain;
        width: 104px;
    height: 104px;
    border-radius: 100%;
    border: 4px solid #633cff;
    margin-bottom: 25px;
    }
    h1 {
        color: #333;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 8px;
    font-style: normal;
    line-height: 150%;
}
    }
    h2 {
        color: #737373;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 56px;
    font-style: normal;
    line-height: 150%;
    }
    
    @media (max-width: 1440px) {
        .nav__bar {
            width: 95% !important;
        }
       
    }
    @media (max-width:600px) {
        .user__cont {
            padding: 0;
    border-radius: 0;
    width: 100%;
    inset: auto;
    top: 138px;
    left: 0;
    right: 0;
    box-shadow: none;
        }
        header {
            background-color: #fff;
        }
    }
`
export default Preview
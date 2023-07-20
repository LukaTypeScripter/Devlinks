
import styled from 'styled-components'
import { ilustrationEmty } from '../../images'
function Empty() {
  return (
    <EmptyOnt>
        <img src={ilustrationEmty} alt="empty" />
        <h1>Let's get you started</h1>
        <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
    </EmptyOnt>
  )
}
const EmptyOnt = styled.div`
        width: 100%;
    height: 469px;
    border-radius: 12px;
    background: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    img {
        width: 249px;
    object-fit: contain;
    margin-bottom: 16px;
    }
    h1 {
        color: #333;
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    }
    p {
        width: 488px;
    color: #737373;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    }
`
export default Empty
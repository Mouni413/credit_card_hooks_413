// Style your elements here
import styled from 'styled-components'

export const BackgroundContainerElement = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const BackgroundCardOne = styled.div`
  background-color: #3b4b69;
  width: 100vw;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 50vw;
  @media screen and (min-width: 768px) {
    width: 50vw;
    min-height: 100vh;
  }
`

export const CreditCardHeading = styled.h1`
  color: white;
  font-size: 30px;
  font-family: 'Roboto';
  text-decoration: underline;
  text-decoration-color: #ffd773;
`
export const CreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 30px;
  margin-top: 30px;
  background-size: cover;
  width: 100%;
  min-height: 300px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const CardNumber = styled.p`
color:white;
font-size:30px;
font-family:"Roboto"
margin-top:0px;
`

export const CardHolderHeading = styled.p`
  color: #d3d9e0;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  margin-top: 20px;
`
export const CardHolderName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  margin-top: 0px;
`
export const BackgroundCardTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const FormContainer = styled.form`
  background-color: white;
  padding: 30px;
  box-shadow: 2px 2px 4px 1px #c3cad9;
  min-height: 30px;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FormHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 600;
  text-align: center;
`
export const InputHolder = styled.input`
  width: 80%;
  color: #475569;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid #c3cad9;
  outline: none;
  margin: 10px;
  height: 35px;
  padding: 5px;
`

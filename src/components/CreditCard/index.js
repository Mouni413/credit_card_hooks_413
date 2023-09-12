// Write your code here
import {useState} from 'react'
import {
  BackgroundContainerElement,
  BackgroundCardOne,
  CreditCardHeading,
  CreditCardContainer,
  CardNumber,
  CardHolderHeading,
  CardHolderName,
  BackgroundCardTwo,
  FormContainer,
  FormHeading,
  InputHolder,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }
  const onChangeName = event => {
    setName(event.target.value.toUpperCase())
  }
  return (
    <BackgroundContainerElement>
      <BackgroundCardOne>
        <CreditCardHeading>Credit Card</CreditCardHeading>
        <CreditCardContainer data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardHolderHeading>CARDHOLDER NAME</CardHolderHeading>
          <CardHolderName>{name}</CardHolderName>
        </CreditCardContainer>
      </BackgroundCardOne>
      <BackgroundCardTwo>
        <FormContainer>
          <FormHeading>Payment Method</FormHeading>
          <InputHolder
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
          />
          <InputHolder
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </FormContainer>
      </BackgroundCardTwo>
    </BackgroundContainerElement>
  )
}
export default CreditCard

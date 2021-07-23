import React from 'react'
import styled from 'styled-components'
import { BsMoon } from 'react-icons/bs'
import { ImSun } from 'react-icons/im'
import {color} from 'constants/color'
const Togle = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border-radius: 999px;
  border: 3px solid ${(props) => (props.theme === 'light' ? color.PRIMARY : '#fff')};
  background-color: ${(props) =>
    props.theme === 'light' ? '#fff' : color.PRIMARY};
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const DarkMode = ({ theme, toggleTheme }: any) => {
  return (
    <Togle theme={theme} onClick={toggleTheme}>
      {theme === 'light' ? <BsMoon size="1.5rem" /> : <ImSun size="1.5rem" />}
    </Togle>
  )
}
export default DarkMode

import React, { useState } from 'react';
import * as S from './NavbarElements';
import RightNav from './RightNav';

// hamburger menu function which trigger the visibility of the hamburger when the website is resize smaller to certain size
const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
      <RightNav open={open} />
    </>
  )
}
export default Burger
import React from 'react';
import * as S from './NavbarElements';
import Burger from './Bars';

type Props = {
  children?: any;
}

export default function TopnavBar(props: Props) {
  return (
    <>
      <S.Nav>
        <S.Logo src={require('../images/logoz.png').default} alt={'logo'} />
      </S.Nav>
      <Burger />
      {props.children}
    </>
  )
}
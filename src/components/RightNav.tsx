import React from 'react'
import * as S from './NavbarElements';
import { Menu1, Menu2, Menu3 } from '../pages/Overview';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

type Props = {
  open: boolean;
}

function RightNav(props: Props) {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <S.Ul open={props.open}>
        <S.LogoUl src={require('../images/logoz.png').default} alt={'Gustavo Scarpim'} />

        <NavLink to="/menu1"
          activeStyle={{
            fontWeight: "bold",
            color: "#0538B6"
          }}
        >
          <li>Menu 1</li>
        </NavLink>
        <NavLink to="/menu2"
          activeStyle={{
            fontWeight: "bold",
            color: "#0538B6"
          }}
        >
          <li>Menu 2</li>
        </NavLink>
        <NavLink to="/menu3"
          activeStyle={{
            fontWeight: "bold",
            color: "#0538B6"
          }}
        >
          <li>Menu 3</li>
        </NavLink>
      </S.Ul>

      <Switch>
              <Route path="/menu1" component={Menu1} exact></Route>
              <Route path="/menu2" component={Menu2} exact></Route>
              <Route path="/menu3" component={Menu3} exact></Route>
            
      </Switch>
    </Router >
  )
}

export default RightNav
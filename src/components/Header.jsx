import React from "react";

import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;

const Header = () => {
  const logo = "https://mohamedelghandour.github.io/windows-10/img/codepen1600.png";
  return (
    <Container position="static">
      <Toolbar>
        <img src={logo} alt="logo" style={{width: 45}} />
      </Toolbar>
    </Container>
  );
};

export default Header;

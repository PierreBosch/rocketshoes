import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Cart } from "./styles";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
      </Cart>
    </Container>
  );
}

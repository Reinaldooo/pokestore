import styled from "styled-components";

export const CardWrapper = styled.div`
  flex: ${props => props.wishlist ? "0 0 50%" : "0 0 20%"};
  padding: 15px;
  position: relative;

  & a {
    text-decoration: none;
    color: #222;
  }

  @media screen and (max-width: 1100px) {
    flex: ${props => props.wishlist ? "0 0 50%" : "0 0 25%"};
    padding: 7px;
  }
  @media screen and (max-width: 768px) {
    flex: 0 0 50%;
    padding: 2px;
    margin-bottom: 0.5rem;
  }
`;

export const Card = styled.div`
  padding: 1rem 0.25rem;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  -webkit-box-shadow: 0px 17px 33px -18px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 17px 33px -18px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 17px 33px -18px rgba(0, 0, 0, 0.5);
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 8px;
    width: 100%;
    background-color: ${(props) =>
      props.color === "white" ? "gray" : props.color};
  }

  @media screen and (max-width: 768px) {
    border-radius: 10px;
  }

  &__price span {
    text-decoration: line-through;
    opacity: 0.4;
    font-size: 0.8rem;
    margin-right: 5px;
  }
  &__discount {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #e3566e;
    padding: 5px 10px;
    color: #fff;
    font-weight: bold;
    border-bottom-right-radius: 20px;
    @media screen and (max-width: 768px) {
      border-bottom-right-radius: 10px;
    }
  }
`;

export const CardImage = styled.figure`
  overflow: hidden;
  width: 100%;

  & img {
    width: 100%;
  }
`;

export const CardName = styled.div`
  margin: 10px auto;
  height: 30px;
  padding-left: 10px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: ${(props) => (props.color === "white" ? "gray" : props.color)};

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const CardAddCartButton = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 5px;
  color: lightgray;
  font-size: 30px;
  z-index: 1;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    right: 10px;
    top: 10px;
  }
  transition: transform .2s;

  &:hover {
    transform: scale(1.10);
  }
`;

export const CardAddWishlistButton = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  padding: 5px;
  color: lightgray;
  font-size: 30px;
  z-index: 1;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    left: 10px;
    top: 10px;
  }
  transition: transform .2s;

  &:hover {
    transform: scale(1.10);
  }
`;

export const CardTypes = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 10px;

  & span {
    text-transform: uppercase;
    border: ${(props) => props.color} solid 2px;
    border-radius: 5px;
    padding: 5px 8px;
    font-size: 11px;
    font-weight: bold;
    color: ${(props) => props.color};
  }
`;

export const CardValues = styled.div`
  margin: 10px auto;
  padding: 0 10px;
  font-size: 1rem;
`;

export const CardPrice = styled.span`
  font-weight: bold;
  color: gray;
`;

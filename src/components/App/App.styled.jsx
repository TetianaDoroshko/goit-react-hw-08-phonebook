import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ContainerFluid = styled(Container)`
  background-color: aliceblue;
  height: 100vh;
`;

export const ContainerPage = styled(Container)`
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerContacts = styled(Container)`
  padding-top: 140px;
`;
export const Block = styled(Card)`
  max-width: 600px;
  margin: 10px auto;
`;
export const Greeting = styled.h1`
  margin: 50px auto;
  text-align: center;
`;
export const ImageLink = styled(Link)`
  justify-content: center;
`;
export const LogoLink = styled(Navbar.Brand)`
  font-size: 24px;
  font-weight: 600;
  color: var(--bs-body-color);
`;

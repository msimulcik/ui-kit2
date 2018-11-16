import React from 'react';
import { Text, View, Touchable } from 'react-primitives';
import emotion from '@emotion/primitives';

const Container = emotion.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border: 5px solid red;
  background-color: ${(props) => props.theme.backgroundColor}
  width: 250px;
`;

const Description = emotion.Text`
  color: hotpink;
`;

const Image = emotion.Image`
  padding: 40px;
`;

const Button = (props) => (
  <Container borderRadius="10px">
    <Description fontSize={45} fontWeight="bold">
      Mirko
    </Description>
  </Container>
);

export default Button;

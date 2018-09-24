import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
export default class CardItemBordered extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>My Header</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text 
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>My Footer</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
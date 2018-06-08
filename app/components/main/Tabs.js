import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
export default class FooterTabsExample extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button>
             
        <Icon name="apps" />

            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
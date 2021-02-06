import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import CardList from './components/CardList';
import './assets/styles/global.css';

class App2 extends Component {
  render() {
    return <>
    <div className="bg-purple">hello world</div>
    <div style={this.styles.purple}>hello world</div>

        <Container fluid>

            <Row>
                
                    <CardList />
               
            </Row>

        </Container>
    </>;
  }

  const styles ={
    purple:{
      color:'orange'
    }

  }
}

export default App2;

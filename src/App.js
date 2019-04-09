import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: {r: 210, g: 82, b: 230, a: 0.8},
    }
  }

  changeR(value) {
    this.setState({ color: {...this.state.color, r: value }})
    console.log(this.state.color)
  }
  changeG(value) {
    this.setState({ color: {...this.state.color, g: value }})
    console.log(this.state.color)
  }
  changeB(value) {
    this.setState({ color: {...this.state.color, b: value }})
    console.log(this.state.color)
  }
  changeAlpha(value) {
    this.setState({ color: {...this.state.color, a: value }})
  }

  render() {
    return (
      <AppBody color={this.state.color}>
        <Header>
          React Color Picker
        </Header>
        <BigWrapper>
          <Wrapper>
            <BrickBox>
              <Brick color={this.state.color}/>
              rgba({this.state.color.r}, {this.state.color.g}, {this.state.color.b}, {this.state.color.a})
            </BrickBox>
            <StyledSlider max={255} value={this.state.color.r} onChange={(x) => this.changeR(x)} />
            red: {this.state.color.r}
            <StyledSlider max={255} value={this.state.color.g} onChange={(x) => this.changeG(x)} />
            green: {this.state.color.g}
            <StyledSlider max={255} value={this.state.color.b} onChange={(x) => this.changeB(x)} />
            blue: {this.state.color.b}
            <StyledSlider max={1} step={0.01} value={this.state.color.a} onChange={(x) => this.changeAlpha(x)} />
            alpha: {this.state.color.a}
          </Wrapper>
        </BigWrapper>
      </AppBody>
    );
  }
}

const Flex = styled.div`
  display: flex;
`
const AppBody = styled(Flex)`
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  ${props => props.color && `
    background-color: rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a});
  `}
`
const Header = styled(Flex)`
  text-align: center;
  flex-direction: column;
  height: 25vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-bottom: 5px;
  color: white;
  text-shadow: 1px 1px 4px #000000;
  font-weight: 500;
`
const BigWrapper = styled(Flex)`
  height: 700px;
  width: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 1%;
`
const Wrapper = styled(Flex)`
  height: 500px;
  width: 300px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding-bottom: 15px;
  border-radius: 1%;
`
const BrickBox = styled(Flex)`
  height: 150px;
  width: 180px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`
const Brick = styled(Flex)`
  height: 100px;
  width: 150px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  border-radius: 3%;
  box-shadow: 1px 1px 10px grey;
  ${props => props.color && `
    background-color: rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a});
  `}
`
const StyledSlider = styled(Slider)`
  margin-bottom: 10px;
  padding: 10px;
  width: 70%;
`

export default App;

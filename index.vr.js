import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box,
  VrButton
} from 'react-vr';

export default class StarterVR extends React.Component {
  constructor(){
    super();
    this.state ={buttonText: "Default Button"};
  }
  triggerEnter(){
    this.setState({buttonText: "Mouse Entered"});
  }
  triggerExit(){
    this.setState({buttonText: "Default"});
  }
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        {/* <Box
dimWidth={0.35}
dimDepth={0.35}
dimHeight={0.35}
     

 texture={asset("chess-world.jpg ")}
             style={{
          color: 'white',
          transform: [{translate: [0,0,-2]}, {rotateX: 45},{rotateY: 50},{scale: [2,0.7,1.5]}],
        }}

      /> */}
      <VrButton
      onEnter ={this.triggerEnter.bind(this)}
      onExit ={this.triggerExit.bind(this)}
      > 

      
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
         {this.state.buttonText}
        </Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('StarterVR', () => StarterVR);

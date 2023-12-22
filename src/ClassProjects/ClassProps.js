import React, { Component } from 'react';
import Classtest from './Classtest';
import avien from '../image/avien.jpg';

class ClassProps extends Component {
  render() {
    return (
      <div>
        <Classtest 
          aboutlabel="ABOUT" />
        <Classtest 
          abouttext="The website is all about..." />
        <Classtest 
          teammembers="TEAM MEMBERS" />
        <Classtest
          membername="Avien Flaire Batul"
          background="I love playing games"
          memberImage={avien}
        />
        <Classtest
          membername="Paulo Bondoc"
          background="Sample sample sample"
          memberImage="paulo_image.jpg" // Replace with the actual image file path
        />
        <Classtest
          membername="Lhizel Tabual"
          background="Testing sentence"
          memberImage="lhizel_image.jpg" // Replace with the actual image file path
        />
      </div>
    );
  }
}

export default ClassProps;

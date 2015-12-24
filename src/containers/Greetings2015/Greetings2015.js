import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
import {initialize} from 'redux-form';
import config from '../../config';
// had to move the SnowScene reference to componentDidMount
// import SnowScene from './snowScene';

@connect(
  () => ({}),
  {initialize})
export default class Greetings2015 extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  componentDidMount() {
    const SnowScene = require( './snowScene' );
    const snowScene = SnowScene.getInstance();
    snowScene.initialize();
  }

  handleSubmit = (data) => {
    window.alert('Data submitted! ' + JSON.stringify(data));
    this.props.initialize('survey', {});
  }

  pause = () => {
    const SnowScene = require( './snowScene' );
    const snowScene = SnowScene.getInstance();
    snowScene.pause();
  }

  restartSnowScene = () => {
    const SnowScene = require( './snowScene' );
    const snowScene = SnowScene.getInstance();
    snowScene.playFromBeginning();
  }
  render() {
    return (
      <div className="container">
        <h1 style={{textAlign: 'center', margin: 15}}>Happy Holidays from the Phillips Family</h1>
        <DocumentMeta title={config.app.title + ': Happy Holidays from the Phillips Family'}/>

        <div style={{textAlign: 'center', margin: 15}}>
          <button className="btn btn-primary" onClick={this.pause}>
            <i className="fa fa-pause"/> Pause
          </button>
          <button className="btn btn-primary" onClick={this.restartSnowScene}>
            <i className="fa fa-refresh"/> Replay
          </button>
        </div>
      </div>
    );
  }
}

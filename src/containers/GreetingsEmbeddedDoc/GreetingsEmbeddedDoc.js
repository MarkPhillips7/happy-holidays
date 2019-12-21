import React, {Component, PropTypes} from 'react';

export default class GreetingsEmbeddedDoc extends Component {
  static propTypes = {
    iFrameSource: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  render() {
    const {width, height, iFrameSource} = this.props;
    const styles = require('./GreetingsEmbeddedDoc.scss');
    return (
        <div className={`${styles.container}`}>
          <iframe
            width={width}
            height={height}
            src={iFrameSource}
          ></iframe>
        </div>
    );
  }
}

import React, {Component} from 'react';

export default class Greetings2008 extends Component {
  render() {
    const src = require(`../../../static/Phillips Christmas Letter 2008.pdf`);
    return (
      <div>
        <embed
          src={src}
          type="application/pdf"
          width={'100%'}
          height={1800}
        />
      </div>
    );
  }
}

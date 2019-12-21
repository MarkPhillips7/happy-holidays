import React, {Component} from 'react';

export default class Greetings2011 extends Component {
  render() {
    const src = require(`../../../static/Phillips Christmas Letter 2011.pdf`);
    return (
      <div>
        <embed
          src={src}
          type="application/pdf"
          width={'100%'}
          height={1200}
        />
      </div>
    );
  }
}

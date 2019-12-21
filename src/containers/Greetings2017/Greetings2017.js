import React, {Component} from 'react';
import * as quizData2017 from './quizData';
import {
  GreetingsQuiz,
} from 'containers';

export default class Greetings2019 extends Component {
  render() {
    return (
      <GreetingsQuiz
        multireducerKey="quiz2017"
        quizData={quizData2017}
      />
    );
  }
}

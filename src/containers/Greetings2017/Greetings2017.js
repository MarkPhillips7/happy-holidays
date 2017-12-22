import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { QuizQuestion } from 'components';
import * as quizActions from 'redux/modules/quiz';
import * as quizData2017 from './quizData';

@connect(
  state => ({
    quiz: state.quiz,
  }),
  {...quizActions })
export default class Greetings2017 extends Component {
  static propTypes = {
    quiz: PropTypes.object.isRequired,
    initializeQuizData: PropTypes.func.isRequired,
    moveOnToNextQuestion: PropTypes.func.isRequired,
    processGuess: PropTypes.func.isRequired,
    showPictures: PropTypes.func.isRequired,
    startQuiz: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.initializeQuizData(quizData2017);
  }

  render() {
    const {
      processGuess,
      quiz: {
        currentQuestionIndex,
        allQuestionsGuesses,
        quizData,
        quizStarted,
      },
      showPictures,
      startQuiz,
    } = this.props;
    const phillipsFamilyImage = require('../../../static/phillips-family-2017-large.jpg');
    const styles = require('./Greetings2017.scss');
    const questionNumber = typeof currentQuestionIndex === 'number' && currentQuestionIndex + 1 || 0;
    const currentQuestion = typeof currentQuestionIndex === 'number' && quizData.questions[currentQuestionIndex] || {};
    const currentQuestionGuesses = allQuestionsGuesses[currentQuestionIndex];
    return (
        <div className={`${styles.container} container-fluid`}>
          <h1 className={styles.greeting}>Happy Holidays!</h1>
          {!quizStarted &&
            <div className={styles.preQuiz}>
              <img src={phillipsFamilyImage}/>
              <div className={styles.preQuizForm}>
                <p className={styles.quizIntroduction}>{quizData.introduction}</p>
                <button
                  className={`${styles.introButton} btn btn-success`}
                  onClick={startQuiz}
                >
                  Bring it on!
                </button>
                <button
                  className={`${styles.introButton} btn btn-danger`}
                  onClick={showPictures}
                >
                  Bah Humbug! Just show me some pictures
                </button>
              </div>
            </div>
          }
          {quizStarted &&
            <QuizQuestion
              question={currentQuestion}
              questionNumber={questionNumber}
              guesses={currentQuestionGuesses}
              onGuess={processGuess}
            />
          }
        </div>
    );
  }
}

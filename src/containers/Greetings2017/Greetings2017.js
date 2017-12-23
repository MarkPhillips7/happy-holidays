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
      moveOnToNextQuestion,
      processGuess,
      quiz: {
        currentQuestionIndex,
        allQuestionsGuesses,
        quizData,
        quizStarted,
      },
      // showPictures,
      startQuiz,
    } = this.props;
    const phillipsFamilyImage = require('../../../static/phillips-family-2017-large.jpg');
    const styles = require('./Greetings2017.scss');
    const questionNumber = typeof currentQuestionIndex === 'number' && currentQuestionIndex + 1 || 0;
    const currentQuestion = typeof currentQuestionIndex === 'number' && quizData.questions[currentQuestionIndex] || {};
    const currentQuestionGuesses = allQuestionsGuesses[currentQuestionIndex];
    const isAnotherQuestion = quizData.questions && currentQuestionIndex < quizData.questions.length - 1;
    const wrongGuessUrl = quizData.picturesWhenGuessedIncorrectly && quizData.picturesWhenGuessedIncorrectly[currentQuestionIndex];
    return (
        <div className={`${styles.container} container-fluid`}>
          {false && <h1 className={styles.greeting}>Happy Holidays!</h1>}
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
                <a href="https://www.facebook.com/mark.phillips.1485/videos/10212951064504087/">
                  <button
                    className={`${styles.introButton} btn btn-danger`}
                    // onClick={showPictures}
                  >
                    Bah Humbug! Just show me some pictures
                  </button>
                </a>
              </div>
            </div>
          }
          {quizStarted &&
            <QuizQuestion
              isAnotherQuestion={isAnotherQuestion}
              question={currentQuestion}
              questionNumber={questionNumber}
              guesses={currentQuestionGuesses}
              onGuess={processGuess}
              onNextQuestion={moveOnToNextQuestion}
              successPictures={currentQuestion.picturesWhenCorrect}
              wrongGuessUrl={wrongGuessUrl}
            />
          }
        </div>
    );
  }
}

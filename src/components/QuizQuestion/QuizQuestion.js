import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {_} from 'underscore';
import {theWordWrongSource, theWordRightSource} from '../../helpers/images';

@connect(
  state => ({
    quiz: state.quiz,
  }),
  undefined)
export default class QuizQuestion extends Component {
  static propTypes = {
    guesses: PropTypes.array,
    question: PropTypes.object,
    questionNumber: PropTypes.number,
    onGuess: PropTypes.func,
  }

  render() {
    const {
      guesses,
      question,
      questionNumber,
      onGuess,
    } = this.props;
    const styles = require('./QuizQuestion.scss');
    const mostRecentGuessIsCorrect = guesses && guesses.length &&
      guesses[guesses.length - 1] === question.correctAnswer;
    const showSuccessImage = mostRecentGuessIsCorrect;
    const showWrongImage = guesses && guesses.length && !mostRecentGuessIsCorrect;
    const successImage = require('../../containers/About/kitten.jpg');
    const wrongImage = require('../../../static/lily-angry-witch.jpg');
    return (
      <div className={styles.quizQuestion}>
        <div className={styles.quizQuestionLeftRight}>
        </div>
        <div className={styles.quizQuestionMiddle}>
          {question && question.introduction &&
            <p className={styles.questionIntroduction}>{question.introduction}</p>
          }
          {question && question.question &&
            <div className={styles.question}>{questionNumber}. {question.question}</div>
          }
          {question && question.answers &&
            <div className={styles.answers}>
              {_.map(question.answers, (answer, index) => {
                const answerGuessed = guesses && _.contains(guesses, answer);
                const isCorrectAnswer = answer === question.correctAnswer;
                let correctWrong = '';
                if (answerGuessed) {
                  correctWrong = isCorrectAnswer ? ` ${styles.correct}` : ` ${styles.wrong}`;
                }
                const color = isCorrectAnswer ? ' text-success' : ' text-danger';
                const checked = answerGuessed ? ` checked${color}` : '';
                const answerDivClassName = `${styles.answer}${checked}`;
                const answerTextClassName = `${correctWrong}`;
                let icon;
                if (answerGuessed && isCorrectAnswer) {
                  icon = <i className={`${styles.iconRadioButton} fa fa-check-circle-o fa-2x`}/>;
                } else if (checked) {
                  icon = <i className={`${styles.iconRadioButton} fa fa-times-circle-o fa-2x`}/>;
                } else {
                  icon = <i className={`${styles.iconRadioButton} fa fa-circle-o fa-2x`}/>;
                }
                return (
                  <div
                    key={index}
                    className={answerDivClassName}
                    disabled={false}
                    onClick={(event) => {
                      event.preventDefault();
                      onGuess(answer);
                    }}
                  >
                    {icon}
                    <div className={answerTextClassName}>{answer}</div>
                  </div>
                );
              })}
            </div>
          }
          {showSuccessImage &&
            <div className={styles.rightWrong}>
              <img className={styles.rightWrong} src={theWordRightSource}/>
              <img className={styles.rightWrong} src={successImage}/>
            </div>
          }
          {showWrongImage &&
            <div>
              <img className={styles.rightWrong} src={theWordWrongSource}/>
              <img className={styles.rightWrong} src={wrongImage}/>
            </div>
          }
        </div>
        <div className={styles.quizQuestionLeftRight}>
        </div>
      </div>
    );
  }
}

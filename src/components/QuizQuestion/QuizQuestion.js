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
    isAnotherQuestion: PropTypes.bool,
    wrongGuessUrl: PropTypes.string,
    question: PropTypes.object,
    questionNumber: PropTypes.number,
    onGuess: PropTypes.func,
    onNextQuestion: PropTypes.func,
    successPictures: PropTypes.array,
  }

  render() {
    const {
      guesses,
      isAnotherQuestion,
      question,
      questionNumber,
      onGuess,
      onNextQuestion,
      successPictures,
      wrongGuessUrl,
    } = this.props;
    const styles = require('./QuizQuestion.scss');
    const mostRecentGuessIsCorrect = guesses && guesses.length &&
      guesses[guesses.length - 1] === question.correctAnswer;
    const showSuccessImage = mostRecentGuessIsCorrect;
    const showWrongImage = guesses && guesses.length && !mostRecentGuessIsCorrect;
    const successImage = require('../../containers/About/kitten.jpg');
    const showSuccessPictures = _.contains(guesses, question.correctAnswer);
    const showNextButton = showSuccessPictures && isAnotherQuestion;
    return (
      <div className={styles.quizQuestionWithEverything}>
        <div className={styles.quizQuestion}>
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
          </div>
          <div className={styles.quizQuestionLeftRight}>
            {showSuccessImage &&
              <div className={styles.rightWrongDiv}>
                <img className={styles.rightWrong} src={theWordRightSource}/>
                <img className={styles.rightWrong} src={successImage}/>
              </div>
            }
            {showWrongImage &&
              <div className={styles.rightWrongDiv}>
                <img className={styles.rightWrong} src={theWordWrongSource}/>
                <img className={styles.rightWrong} src={wrongGuessUrl}/>
              </div>
            }
          </div>
        </div>
        {showSuccessPictures &&
          <div className={styles.successPictures}>
            {_.map(successPictures, (picture, index) => {
              const successImageSource = picture;
              if (typeof successImageSource === 'object') {
                return (
                  <iframe className={styles.successImage}
                    width={successImageSource.width}
                    height={successImageSource.height}
                    src={successImageSource.src}
                    frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen>
                  </iframe>
                );
              }
              return (
                <img key={index} className={styles.successImage} src={successImageSource}/>
              );
            })}
          </div>
        }
        {showNextButton &&
          <button
            className={`${styles.nextButton} btn btn-success`}
            onClick={onNextQuestion}
          >
            Next Question Please
          </button>
        }
      </div>
    );
  }
}

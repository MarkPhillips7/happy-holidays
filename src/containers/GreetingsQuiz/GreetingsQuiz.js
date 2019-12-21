import React, {Component, PropTypes} from 'react';
import {connectMultireducer} from 'multireducer';
import { QuizQuestion, QuizResults } from 'components';
import * as quizActions from 'redux/modules/quiz';
import {_} from 'underscore';

@connectMultireducer(
  state => ({
    quiz: state,
  }),
  {...quizActions })
export default class GreetingsQuiz extends Component {
  static propTypes = {
    quiz: PropTypes.object.isRequired,
    quizData: PropTypes.object.isRequired,
    initializeQuizData: PropTypes.func.isRequired,
    moveOnToNextQuestion: PropTypes.func.isRequired,
    processGuess: PropTypes.func.isRequired,
    shouldDisplayAllPictures: PropTypes.bool,
    showPictures: PropTypes.func.isRequired,
    startQuiz: PropTypes.func.isRequired,
    showQuizResults: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.initializeQuizData(this.props.quizData);
  }

  getAllSuccessPictures() {
    const {
      quiz: {
        quizData,
      },
    } = this.props;
    return _.reduce(quizData ? quizData.questions : [], (pictureArray, question) => {
      return [
        ...pictureArray,
        ...question.picturesWhenCorrect,
      ];
    }, []);
  }

  render() {
    const {
      moveOnToNextQuestion,
      processGuess,
      quiz: {
        allQuestionsGuesses,
        currentQuestionIndex,
        incorrectImageIndex,
        quizData,
        quizStarted,
        shouldDisplayAllPictures,
        shouldDisplayQuizResults,
      },
      showPictures,
      showQuizResults,
      startQuiz,
    } = this.props;
    const introductionImage = quizData.introductionPicture;
    const styles = require('./GreetingsQuiz.scss');
    const questionNumber = typeof currentQuestionIndex === 'number' && currentQuestionIndex + 1 || 0;
    const currentQuestion = typeof currentQuestionIndex === 'number' && quizData.questions[currentQuestionIndex] || {};
    const currentQuestionGuesses = allQuestionsGuesses[currentQuestionIndex];
    const isAnotherQuestion = quizData.questions && currentQuestionIndex < quizData.questions.length - 1;
    const wrongGuessUrl = quizData.picturesWhenGuessedIncorrectly && quizData.picturesWhenGuessedIncorrectly[incorrectImageIndex];
    return (
        <div className={`${styles.container} container-fluid`}>
          <div className={`${styles.topBorder}`}/>
          <div className={`${styles.leftToRight}`}>
            <div className={`${styles.leftBorder}`}/>
            <div className={`${styles.middle}`}>
              {!quizStarted &&
                <div className={styles.preQuiz}>
                  <img src={introductionImage}/>
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
              {quizStarted && !shouldDisplayQuizResults &&
                <QuizQuestion
                  isAnotherQuestion={isAnotherQuestion}
                  question={currentQuestion}
                  questionNumber={questionNumber}
                  guesses={currentQuestionGuesses}
                  onGuess={processGuess}
                  onNextQuestion={moveOnToNextQuestion}
                  onShowResults={showQuizResults}
                  successPictures={currentQuestion.picturesWhenCorrect}
                  wrongGuessUrl={wrongGuessUrl}
                />
              }
              {shouldDisplayQuizResults &&
                <QuizResults
                  allQuestionsGuesses={allQuestionsGuesses}
                  quizData={quizData}
                />
              }
              {shouldDisplayAllPictures &&
                <div className={styles.successPictures}>
                  {_.map(this.getAllSuccessPictures(), (picture, index) => {
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
              {shouldDisplayAllPictures && <h2>Merry Christmas and Happy New Year!</h2>}
              {shouldDisplayAllPictures && <h3>Much love from Mark, Jen, Lily, Willow and Dinah</h3>}
            </div>
            <div className={`${styles.rightBorder}`}/>
          </div>
          <div className={`${styles.bottomBorder}`}/>
        </div>
    );
  }
}

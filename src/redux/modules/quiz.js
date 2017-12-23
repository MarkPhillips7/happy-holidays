import * as _ from 'underscore';

const INITIALIZE = 'quiz/INITIALIZE';
const MOVE_ON_TO_NEXT_QUESTION = 'quiz/MOVE_ON_TO_NEXT_QUESTION';
const PROCESS_GUESS = 'quiz/PROCESS_GUESS';
const SHOW_PICTURES = 'quiz/SHOW_PICTURES';
const START_QUIZ = 'quiz/START_QUIZ';

const initialState = {
  allQuestionsGuesses: [], // array of array of guesses in order like [['incorrect guess', 'right on second try'], ['correct guess'], ...]
  currentQuestionIndex: undefined,
  initialized: false,
  quizData: {},
  quizStarted: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        currentQuestionIndex: 0,
        initialized: true,
        quizData: action.quizData,
      };
    case MOVE_ON_TO_NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case PROCESS_GUESS:
      const answeredCorrectly = state.quizData.questions[state.currentQuestionIndex].correctAnswer === action.guess;
      const allQuestionsGuesses = [...state.allQuestionsGuesses];
      const currentQuestionGuesses = allQuestionsGuesses.length > state.currentQuestionIndex
        ? allQuestionsGuesses[state.currentQuestionIndex]
        : [];
      if (currentQuestionGuesses.length === 0) {
        allQuestionsGuesses.push(currentQuestionGuesses);
      }
      if (!_.contains(currentQuestionGuesses, action.guess)) {
        currentQuestionGuesses.push(action.guess);
      }
      return {
        ...state,
        allQuestionsGuesses,
        answeredCorrectly,
      };
    case SHOW_PICTURES:
      return {
        ...state,
        showPictures: true,
      };
    case START_QUIZ:
      return {
        ...state,
        quizStarted: true,
      };
    default:
      return state;
  }
}

export function initializeQuizData(quizData) {
  return {
    type: INITIALIZE,
    quizData
  };
}

export function moveOnToNextQuestion() {
  return {
    type: MOVE_ON_TO_NEXT_QUESTION,
  };
}

export function processGuess(guess) {
  return {
    type: PROCESS_GUESS,
    guess
  };
}

export function showPictures(guess) {
  return {
    type: SHOW_PICTURES,
    guess
  };
}

export function startQuiz(guess) {
  return {
    type: START_QUIZ,
    guess
  };
}

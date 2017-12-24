const quizData = {
  introduction: `Put away your books and get out that number 2 pencil because it's time for the Phillips family 2017 pop quiz!`,
  questions: [
    {
      question: 'In 2017 the Phillipses did NOT travel to',
      answers: [
        'Florida in February',
        'Florida in April',
        'Florida in November',
        'North Carolina in August and November',
      ],
      correctAnswers: ['Florida in February'],
      picturesWhenCorrect: [
        require(`../../../static/lily-willow-hats-and-shades-medium.jpg`),
        require(`../../../static/lily-willow-hugging-beach-medium.jpg`),
        require(`../../../static/florida mommy lily willow.jpg`),
        require(`../../../static/florida-lily-alligator.jpg`),
        require(`../../../static/lily-willow-disney-medium.jpg`),
        require(`../../../static/epcot-infront of ball with every one and tinkerbell.jpg`),
        require(`../../../static/wilmington-everybody-medium.jpg`),
      ]
    }, {
      question: `On the Tower of Terror ride at Disney World Jen's death grip left bruises on which people?`,
      answers: [
        'Lily',
        'Willow',
        'Mark',
        'Dinah',
      ],
      correctAnswers: ['Willow', 'Mark'],
      picturesWhenCorrect: [
        require(`../../../static/everybody scared outside tower.jpg`),
        require(`../../../static/everybody like a dinosoar.jpg`),
      ]
    }, {
      question: `What new item did someone get in 2017?`,
      answers: [
        'Mark got a Tesla',
        'Lily got a puppy',
        'Jen got a llama',
        'Willow got a bed',
      ],
      correctAnswers: ['Willow got a bed'],
      picturesWhenCorrect: [
        {width: 975, height: 508, src: 'https://www.youtube.com/embed/a23h8u8mB7I'},
      ]
    }, {
      question: `In the May ballet showing what animal was willow?`,
      answers: [
        'A fox',
        'A pig',
        'A wolf',
        'A butterfly',
      ],
      correctAnswers: ['A wolf'],
      picturesWhenCorrect: [
        require(`../../../static/wolf2.jpg`),
        require(`../../../static/lily-trumpet-with-friends.jpg`),
        require(`../../../static/lily-dusk.jpg`),
        require(`../../../static/willow-twirl.jpg`),
      ]
    }, {
      question: `What are Lily's swim strokes from best to worst?`,
      answers: [
        'Backstroke, freestyle, butterfly, breaststroke',
        'Butterfly, doggy paddle, freestyle, corkscrew',
        'Freestyle, backstroke, breaststroke, butterfly',
        'Butterfly, backstroke, doggy paddle, flail-and-sink',
      ],
      correctAnswers: ['Backstroke, freestyle, butterfly, breaststroke'],
      picturesWhenCorrect: [
        require(`../../../static/lily-sit at swimmeet.jpg`),
        require(`../../../static/lily-swim backstroke.jpg`),
        require(`../../../static/willow-swim-smile.jpg`),
      ]
    }, {
      question: `Which of these were actual lyrics to the final Disney World handshake?`,
      answers: [
        'Timmy is a rockstar!',
        'Everyone is awesome!',
        'Timmy and Willow are awesome!',
        'To Space Mountain and beyond!',
      ],
      correctAnswers: ['Everyone is awesome!'],
      picturesWhenCorrect: [
        {width: 903, height: 508, src: 'https://www.youtube.com/embed/g_QrMdMCSkw'},
        require(`../../../static/magic kingdom-familycastle.jpg`),
      ]
    }, {
      question: 'Which halloween costume was actually worn this year?',
      answers: [
        'Mark as Sloth from The Goonies',
        'Lily as Bing Bong from Inside Out',
        'Willow as a peacock',
        'Jen as a sloth',
      ],
      correctAnswers: ['Willow as a peacock'],
      picturesWhenCorrect: [
        require(`../../../static/lily-jillian-willow-halloween.jpg`),
      ]
    }, {
      question: `Lily, Willow and Dinah turned`,
      answers: [
        '9, 7 and 9',
        'cat, dog and human',
        'left at the red barn',
        '9, 7 and 8',
        'around, bright eyes'
      ],
      correctAnswers: ['9, 7 and 9'],
      picturesWhenCorrect: [
        require(`../../../static/lily-9th birthday.jpg`),
        require(`../../../static/willow-7th birthday.jpg`),
        require(`../../../static/dinah.jpg`),
        // {width: 677, height: 508, src: 'https://www.youtube.com/embed/lcOxhH8N3Bo'}, Total Eclipse of the Heart
      ]
    },
  ],
  picturesWhenGuessedIncorrectly: [
    require(`../../../static/willow-thing-wrapped-around-head.jpg`),
    'http://vignette3.wikia.nocookie.net/lotrminecraftmod/images/e/e1/Never_Give_Up_Never_Surrender.png/revision/latest?cb=20150427205746',
    require(`../../../static/lily-angry-witch.jpg`),
    'https://cdn-images-1.medium.com/max/1500/1*pefoGGPju2Yc3XLxYvNLnQ.png',
    'https://get.whotrades.com/u3/photo843E/20389222600-0/big.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkenSYD_mBx5N1C0qGgbJNc913PbtcViWqPAx66Qjuhx4KRVe0',
  ],
  resultsByHowManyCorrect: {
    0: {
      comment: 'Congratulations, it takes a special person to get everything wrong!',
      picture: '',
    },
    1: {
      comment: 'Wow, have you even met us before?',
      picture: '',
    },
    2: {
      comment: 'You have flunked and must repeat 2017!',
      picture: '',
    },
    3: {
      comment: `We are grading on a curve, but that was still terrible!`,
      picture: '',
    },
    4: {
      comment: 'Not bad for failure!',
      picture: '',
    },
    5: {
      comment: `Don't worry, we are grading on a curve!`,
      picture: '',
    },
    6: {
      comment: 'Very impressive, you might want to put this on your resume!',
      picture: '',
    },
    7: {
      comment: 'Wow, shocking talent!',
      picture: '',
    },
    8: {
      comment: 'Pretty impressive, but we know you cheated!',
      picture: '',
    },
  }
};

export default quizData;

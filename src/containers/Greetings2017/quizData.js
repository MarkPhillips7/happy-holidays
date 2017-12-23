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
      correctAnswer: 'Florida in February',
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
      question: `Jen's death grip caused bruises to which people on the Tower of Terror ride at Disney World?`,
      answers: [
        'Lily',
        'Willow',
        'Mark',
        'Dinah',
      ],
      correctAnswer: 'Willow',
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
      correctAnswer: 'Willow got a bed',
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
      correctAnswer: 'A wolf',
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
        'Butterfly, backstroke, doggy paddle, flail and sink',
      ],
      correctAnswer: 'Backstroke, freestyle, butterfly, breaststroke',
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
      correctAnswer: 'Everyone is awesome!',
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
      correctAnswer: 'Willow as a peacock',
      picturesWhenCorrect: [
        require(`../../../static/lily-jillian-willow-halloween.jpg`),
        'data:image/jpeg;base64,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',
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
      correctAnswer: '9, 7 and 9',
      picturesWhenCorrect: [
        require(`../../../static/lily-9th birthday.jpg`),
        require(`../../../static/willow-7th birthday.jpg`),
        {width: 677, height: 508, src: 'https://www.youtube.com/embed/lcOxhH8N3Bo'},
      ]
    },
  ],
  picturesWhenGuessedIncorrectly: [
    require(`../../../static/willow-thing-wrapped-around-head.jpg`),
    'http://vignette3.wikia.nocookie.net/lotrminecraftmod/images/e/e1/Never_Give_Up_Never_Surrender.png/revision/latest?cb=20150427205746',
    'https://cdn-images-1.medium.com/max/1500/1*pefoGGPju2Yc3XLxYvNLnQ.png',
  ]
};

export default quizData;

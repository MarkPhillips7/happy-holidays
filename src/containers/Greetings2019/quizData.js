const quizData = {
  introduction: `Back by popular demand (okay, nobody asked for this), time for another Phillips family Christmas quiz!`,
  questions: [
    {
      question: `In 2019 what team was nobody from the family on?`,
      answers: [
        'Gators',
        'Orange Flames',
        'Mountain Badger Bucks',
        'Vikings',
        'Teal Chickens',
        'Cudas',
        'Red Dragons',
        'Maroon Mayhem',
      ],
      correctAnswers: ['Teal Chickens'],
      picturesWhenCorrect: [
        require(`../../../static/megan-willow-dylan-lulu2.png`),
        require(`../../../static/samaria-lily.jpg`),
        require(`../../../static/dylan-willow-taylor-katherine.jpg`),
        require(`../../../static/lily-willow-and-swim-coach.jpg`),
        require(`../../../static/willow-lily-sarina-willa.jpg`),
        require(`../../../static/orange-flames-frostbite-tournament.jpg`),
        require(`../../../static/willow-maroon-mayhem-action.png`),
        require(`../../../static/vikings-spring-2019.png`),
      ]
    }, {
      question: 'Which item was not built by us this year?',
      answers: [
        'A ukulele',
        'A submarine',
        'Frosty the Stuffman',
        'Rudolph the Red Nosed Rain Gear'
      ],
      correctAnswers: ['Rudolph the Red Nosed Rain Gear'],
      picturesWhenCorrect: [
        require(`../../../static/frosty-the-stuff-man-with-willow.jpg`),
        {width: 285, height: 508, src: 'https://www.youtube.com/embed/HxZAXo9rwsI'},
        require(`../../../static/lily-willow-isadora-in-submarine.jpg`),
      ]
    }, {
      question: `What vehicle did we drive about 19,000 miles in 2019?`,
      answers: [
        `Tina, our Hyundai Santa Fe (TINA FE)`,
        `Boogie Woogie, our Tesla Model 3 (BG3 WG3)`,
        `Sylvia, our Hyundai Santa Fe (SLVA FE)`,
        `KITT, our Tesla Model 3 (KITT 19)`,
      ],
      correctAnswers: [`Boogie Woogie, our Tesla Model 3 (BG3 WG3)`],
      picturesWhenCorrect: [
        require(`../../../static/lily-and-willow-in-boogie-woogie-frunk.jpg`),
        require(`../../../static/boogie-woogie.jpg`),
      ]
    }, {
      question: `What is Willow's new catchphrase?`,
      answers: [
        'Oh Yeah!',
        'Chicken Dinner!',
        'Oh No!',
        'Mama Mia!',
      ],
      correctAnswers: ['Oh No!'],
      picturesWhenCorrect: [
        {width: 340, height: 508, src: 'https://www.youtube.com/embed/9dRCYGx5RPc'},
      ]
    }, {
      question: `What was Lily in her ballet performance?`,
      answers: [
        'Arabian dancer',
        'Mouse king',
        'Mother Ginger',
        'Flower',
        'Spanish dancer',
      ],
      correctAnswers: ['Spanish dancer'],
      picturesWhenCorrect: [
        require(`../../../static/lily-and-others-in-spanish-dance.jpg`),
        require(`../../../static/lilly-camille-cora-dancers.jpg`),
      ]
    }, {
      question: `In 2019 Dinah has mostly`,
      answers: [
        'Peed and pooped in the litter box!',
        'Peed in the litter box and pooped on the basement floor',
        'Peed on the office floor and pooped in the litter box',
        'Peed on the basement floor and pooped on the office floor',
      ],
      correctAnswers: ['Peed in the litter box and pooped on the basement floor'],
      picturesWhenCorrect: [
        require(`../../../static/playful-dinah.jpg`),
        require(`../../../static/poop-emoji.jpg`),
      ]
    }, {
      question: 'Which item was not built by us this year?',
      answers: [
        'A weed-pulling robot',
        'A Rube Goldberg contraption',
        'An American Ninja Warrior course',
        'A dunk tank',
      ],
      correctAnswers: ['A weed-pulling robot'],
      picturesWhenCorrect: [
        {width: 560, height: 315, src: 'https://www.youtube.com/embed/OrE5lXb3THE'},
        {width: 560, height: 315, src: 'https://www.youtube.com/embed/Fv3DYEGBfgo'},
        {width: 560, height: 315, src: 'https://www.youtube.com/embed/3-GfvSLzEYM'},
        {width: 560, height: 315, src: 'https://www.youtube.com/embed/igEvauQ4c5Q'},
      ]
    }, {
      question: `Which animal did we not have a close encounter with?`,
      answers: [
        'Snake',
        'Emu',
        'Camel',
        'Sloth',
        'Alligator',
      ],
      correctAnswers: ['Camel'],
      picturesWhenCorrect: [
        require(`../../../static/lily-with-snake.jpg`),
        require(`../../../static/jen-with-alligator2.png`),
        require(`../../../static/willow-with-sloth.jpg`),
        require(`../../../static/lily-with-ostrich.jpg`),
      ]
    }, {
      question: `Did we visit with any relatives this year?`,
      answers: [
        'No, decided to go it alone',
        'Yes, and there might even be some pictures to prove it!',
      ],
      correctAnswers: ['Yes, and there might even be some pictures to prove it!'],
      picturesWhenCorrect: [
        require(`../../../static/whole-family-with-grandma-and-grandpa-phillips.jpg`),
        require(`../../../static/willow-chloe-lily.jpg`),
        require(`../../../static/lily-chloe-michelle-adeline.jpg`),
        require(`../../../static/grandma-chloe.jpg`),
        require(`../../../static/cookie-decorating-contest.jpg`),
        require(`../../../static/sarah-greg-caroline-jeryl.jpg`),
        require(`../../../static/maeve-on-boat.jpg`),
        require(`../../../static/lily-and-maeve-on-boat.jpg`),
        require(`../../../static/bud-piloting-boat.jpg`),
        require(`../../../static/julie-willow.jpg`),
        require(`../../../static/lily-chloe-willow-maeve-timmy.jpg`),
      ]
    }, {
      question: `Which animal did the Phillips family swim with on their trip to Florida?`,
      answers: [
        'Dolphin',
        'Manatee',
        'Shark',
        'Michael Phelps',
        'Stingray',
      ],
      correctAnswers: ['Manatee'],
      picturesWhenCorrect: [
        {width: 560, height: 315, src: 'https://www.youtube.com/embed/4Z8QREVTu8w'},
        {width: 560, height: 315, src: 'https://www.youtube.com/embed/ixzZwfWi_Gc'},
        require(`../../../static/crystal-river.jpg`),
        require(`../../../static/jen-wetsuit-snorkel2.png`),
        require(`../../../static/willow-wetsuit-snorkel.jpg`),
        require(`../../../static/willow-lily-wetsuits.jpg`),
        require(`../../../static/lily-wetsuit-snorkel.jpg`),
        // require(`../../../static/Lily Singing.jpg`),
      ]
    }, {
      question: 'What were Lily, Mark, and Willow for halloween?',
      answers: [
        'The most sparkly flower in the world, a ghost, and a chicken',
        'A deviled egg, Hades from Descendents, and Evie from Descendents',
        'A pair of pants, a table, and a water bottle',
        'A Vsco girl, a pink fluffy unicorn dancing on a rainbow, and a hippie',
      ],
      correctAnswers: ['A deviled egg, Hades from Descendents, and Evie from Descendents'],
      picturesWhenCorrect: [
        require(`../../../static/mark-and-willow-as-hades-and-evie.jpg`),
        require(`../../../static/ana-and-lily-as-deviled-eggs.jpg`),
        require(`../../../static/2019-halloween-costumes.jpg`),
      ]
    }, {
      question: `Which Nailed It edition did Willow, Lily, and Mark put on?`,
      answers: [
        'Nailed It! Craft Edition!',
        'Nailed It! Song Edition!',
        'Nailed It! Cleaning Edition!',
        'Nailed It! Dancing Edition!',
        'Nailed It! Hammering Edition!',
      ],
      correctAnswers: ['Nailed It! Cleaning Edition!'],
      picturesWhenCorrect: [
        {width: 560, height: 315, src: 'https://www.youtube.com/embed/cSuGqkS9CS8'},
      ]
    },
  ],
  introductionPicture: require('../../../static/whole-family-with-sloth.jpg'),
  picturesWhenGuessedIncorrectly: [
    'http://clipground.com/images/try-again-clipart-2.jpg',
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
      comment: 'No offense, but have you gotten stupider?',
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
      comment: `Very impressive for a monkey (I hope you're a monkey)`,
      picture: '',
    },
    6: {
      comment: 'You have been removed from the Christmas mailing list',
      picture: '',
    },
    7: {
      comment: 'Wow, maybe lay off the eggnog a little!',
      picture: '',
    },
    8: {
      comment: 'Wow, could you be more average?',
      picture: '',
    },
    9: {
      comment: 'Amazing! Have you been spying on us?',
      picture: '',
    },
    10: {
      comment: 'Nice try, but we saw you cheat!',
      picture: '',
    },
    11: {
      comment: `I'm at a loss for words, your level of genius has rarely been seen before!`,
      picture: '',
    },
    12: {
      comment: `Wow, we created this quiz and can't even get everything right!`,
      picture: '',
    },
  }
};

export default quizData;

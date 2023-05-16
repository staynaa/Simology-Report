/*format:
{"question":"",
        "questionID":0000,
        "pack":"Base Game",
        "answer1":{
            "answer":"",
            "aspiration":"",
            "traits":{
                "trait":{
                    "inputtrait":1
                },
                "conflicts":[""]
            },
            "job":"",
            "likes":{
                "inputlikes":1
            },
            "dislikes":{
                "inputdislike":1
            },
            "style":"",
            "walkstyle":"",
            
        },
    }
*/
const Qs =
    [
       /* 1*/ {
            "question": "It's Halloween, what are you dressing as?",
            "pack": "Base Game",
            "questionID": 1,
            "answer1": {
                "answer": "A cheerleader",
                "aspiration": "Bodybuilder",
                "traits": {
                    "trait": {
                        "Cheerful": 1
                    },
                    "conflicts": ["Gloomy", "Hot-Headed"]
                },
                "job": "Athlete",
                "likes": {
                    "Fitness": 1, "Pop Music": 2
                },
                "dislikes": {
                    "Spooky Music": 1, "Mischief": 2
                },
                "style": "Athletic-wear",
                "walkstyle": "Perky Walk"
            },
            "answer2": {
                "answer": "Favorite cartoon or video game character",
                //"aspiration":"",
                "traits": {
                    "trait": {
                        "geek": 1
                    }
                    //"conflicts":[""]
                },
                "job": "Tech Guru",
                "likes": {
                    "Video Gaming": 3, "Programming": 2, "Retro Music": 1
                },
                "dislikes": {
                    "Classical Music": 2
                },
                "style": "Nerdy",
                "walkstyle": "Goofy Walk"
            },
            "answer3": {
                "answer": "Clown",
                "aspiration": "Joke Star",
                "traits": {
                    "trait": {
                        "Goofball": 2, "Childish": 1
                    },
                    "conflicts": ["Snob", "Evil", "Hates Children"]
                },
                "job": "Entertainer",
                "likes": {
                    "Comedy": 4, "Mischief": 1, "Kids Music": 2
                },
                "dislikes": {
                    "Romance Music": 2
                },
                "walkstyle": "Goofy Walk"
            },
            "answer4": {
                "answer": "A Robot",
                "aspiration": "Computer Whiz",
                "traits": {
                    "trait": {
                        "Geek": 1, "Erratic": 2
                    },
                    //"conflicts": [""]
                },
                "job": "Engineer",
                "likes": {
                    "Programming": 5, "Electronica Music": 2, "Handiness": 3, "Rocket Science": 2
                },
                "dislikes": {
                    "Writing": 2
                },
                "style": "Nerdy",
                "walkstyle": "Bouncy Walk"
            },
        },//end
       /* 2*/  {
            "question": "What yearbook superlative do you fit?",
            "pack": "Base Game",
            "questionID": 2,
            "answer1": {
                "answer": "Class clown",
                "aspiration": "Joke Star",
                "traits": {
                    "trait": {
                        "Goofball": 2
                    },
                    "conflicts": ["Snob"]
                },
                "job": "Entertainer",
                "likes": {
                    "Mischief": 3
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "walkstyle": "Goofy Walk"
            },
            "answer2": {
                "answer": "Most Likely To Become A Billionaire",
                "aspiration": "Fabolously Wealthy",
                "traits": {
                    "trait": {
                        "Ambitious": 2, "Perfectionist": 1,
                    },
                    "conflicts": ["Glutton"]
                },
                "job": "Business",
                "likes": {
                    "Piano": 2, "Violin": 2, "Classical Music": 2
                },
                "dislikes": {
                    "Hip Hop Music": 3, "Alternative Music": 2
                },
                "style": "Preppy",
                "walkstyle": "Snooty Walk"
            },
            "answer3": {
                "answer": "Most Likely To Win A Marathon",
                "aspiration": "Bodybuilder",
                "traits": {
                    "trait": {
                        "Active": 2
                    },
                    "conflicts": ["Lazy"]
                },
                "job": "Athlete",
                "likes": {
                    "Fitness": 4
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Athlete",
                "walkstyle": "Tough Walk"
            },
            "answer4": {
                "answer": "Most Talented",
                "aspiration": "Painter Extraordinaire",
                "traits": {
                    "trait": {
                        "Creative": 1
                    },
                    //"conflicts": [""]
                },
                "job": "Painter",
                "likes": {
                    "Painting": 4, "Singing": 3, "Guitar": 2
                },
                "dislikes": {
                    "Rocket Science": 2
                },
                "style": "Normcore",
                "walkstyle": "Swagger Walk"
            },
        },//end
       /* 3*/  {
            "question": "It's Valentine's Day, what are your plans?",
            "pack": "Base Game",
            "questionID": 3,
            "answer1": {
                "answer": "Crying all day with ice cream by my side.",
                "traits": {
                    "trait": {
                        "Gloomy": 2
                    },
                    "conflicts": ["Cheerful", "Hot-Headed"]
                },
                "likes": {
                    "Blues Music": 2
                },
                "dislikes": {
                    "Romance Music": 3
                },
            },
            "answer2": {
                "answer": "Give my partner flowers and shower them with gifts",
                "aspiration": "Serial Romantic",
                "traits": {
                    "trait": {
                        "Romantic": 3, "Materialistic": 2
                    },
                    "conflicts": ["Unflirty"]
                },
                "likes": {
                    "Romance Music": 3
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
            },
            "answer3": {
                "answer": "Cook an extravagant four course meal for my partner",
                "aspiration": "Master Chef",
                "traits": {
                    "trait": {
                        "Foodie": 3, "Good": 1
                    },
                    "conflicts": ["Glutton", "Evil", "Kleptomaniac", "Mean"]
                },
                "job": "Culinary Chef",
                "likes": {
                    "Cooking": 5, "Mixology": 3
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
            },
            "answer4": {
                "answer": "Just a regular day for me...",
                "traits": {
                    "trait": {
                        "Loner": 2, "Noncommittal": 2
                    },
                    "conflicts": ["Outgoing, Family-oriented, Loyal, Insider"]
                },
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
            },
        },
        /* 4*/ {
            "question": "While in a packed elevator, you accidentally let a fart out, so you...",
            "pack": "Base Game",
            "questionID": 4,
            "answer1": {
                "answer": "Make a joke out of the moment. Not a big deal",
                "traits": {
                    "trait": {
                        "Self-assured": 3, "Clumsy": 2, "Slob": 2
                    },
                    "conflicts": ["Neat"]
                },
                "likes": {
                    "Comedy": 4
                },
                // "dislikes": {
                //     "inputdislike": 1
                // }
            },
            "answer2": {
                "answer": "Pray that the Earth Swallows you whole",
                "traits": {
                    "trait": {
                        "Perfectionist": 2, "Neat": 2,
                    },
                    "conflicts": ["Lazy", "Slob"]
                },
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // }
            },
            "answer3": {
                "answer": "Lie and put the blame on the person next to you",
                "aspiration": "Chief of Mischief",
                "traits": {
                    "trait": {
                        "Slob": 1, "Mean": 2
                    },
                    "conflicts": ["Neat", "Good"]
                },
                "job": "Crimminal",
                "likes": {
                    "Mischief": 4
                },
                // "dislikes": {
                //     "inputdislike": 1
                // }
            },
            "answer4": {
                "answer": "Fart again and watch the rest suffer",
                "aspiration": "Public Enemy",
                "traits": {
                    "trait": {
                        "Slob": 2, "Evil": 5, "Erratic": 2
                    },
                    "conflicts": ["Neat", "Childish", "Good"]
                },
                "job": "Viilain",
                "likes": {
                    "Comedy": 2
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Gothcore"
            },
        },
        /* 5*/ {
            "question": "What reality show would you be a contestant on?",
            "pack": "Base Game",
            "questionID": 5,
            "answer1": {
                "answer": "The Bachelor/Bachelorette",
                "aspiration": "Soulmate",
                "traits": {
                    "trait": {
                        "Romantic": 3, "Outgoing": 2
                    },
                    "conflicts": ["Loner"]
                },
                "likes": {
                    "Romance Music": 3
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Soft",
                "walkstyle": "Feminine"
            },
            "answer2": {
                "answer": "Hell's Kitchen",
                "aspiration": "Master Chef",
                "traits": {
                    "trait": {
                        "Self-assured": 2, "Perfectionist": 3, "Foodie": 4,
                    },
                    "conflicts": ["Glutton"]
                },
                "job": "Chef",
                "likes": {
                    "Cooking": 4
                },
                "dislikes": {
                    "Mischief": 2
                },
                "walkstyle": "Swagger"
            },
            "answer3": {
                "answer": "The Challenge",
                "aspiration": "Bodybuilder",
                "traits": {
                    "trait": {
                        "Active": 3
                    },
                    "conflicts": ["Active"]
                },
                "likes": {
                    "Fitness": 4, "Handiness": 2
                },
                "dislikes": {
                    "inputdislike": 1
                },
                "style": "Athletic Wear",
                "walkstyle": "Tough Walk"
            },
            "answer4": {
                "answer": "Jersey Shore",
                "aspiration": "Party Animal",
                "traits": {
                    "trait": {
                        "Erratic": 2, "Bro": 2, "Outgoing": 3
                    },
                    "conflicts": ["Loner"]
                },
                "job": "Entertainer",
                "likes": {
                    "Mixology": 4, "DJ Mixing": 4
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "walkstyle": "Perky Walk"
            },
        },
        /* 6*/ {
            "question": "The school's talent show is today, what do you have planned?",
            "questionID": 6,
            "pack": "Base Game",
            "answer1": {
                "answer": "Turn the show into a comedy show",
                "aspiration": "Joke Star",
                "traits": {
                    "trait": {
                        "Goofball": 1
                    },
                    "conflicts": ["Hot-Headed"]
                },
                "job": "Entertainer",
                "likes": {
                    "Comedy": 3
                },
                "dislikes": {
                    "Piano": 2
                },
                "style": "Normcore",
                "walkstyle": "Goofy walk",

            },
            "answer2": {
                "answer": "Sing a ballad",
                "aspiration": "Musical Genius",
                "traits": {
                    "trait": {
                        "Music Lover": 4, "Self-assured": 2
                    },
                    //"conflicts": [""]
                },
                "job": "Entertainer",
                "likes": {
                    "Piano": 3, "Violin": 3, "Singing": 5 //singing cross pack
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                //"style": "",
                //"walkstyle": "",

            },
            "answer3": {
                "answer": "Do a cool science experiment to wow the crowd.",
                "aspiration": "Nerd Brain",
                "traits": {
                    "trait": {
                        "Genius": 2, "Geek": 2
                    },
                    //"conflicts": [""]
                },
                "job": "Scientist",
                "likes": {
                    "Rocket Science": 3, "Programming": 4
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Nerdy",
                "walkstyle": "Bouncy Walk",

            },
            "answer4": {
                "answer": "Perform a dance routine.",
                //"aspiration": "",
                "traits": {
                    "trait": {
                        "Dance Machine": 3, "Creative": 2, "Active": 2
                    },
                    "conflicts": ["Lazy"]
                },
                "job": "",
                "likes": {
                    "Dancing": 5, "Piano": 2, "Hip Hop Music": 2
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Athletic Wear",
                "walkstyle": "Bouncy Walk",

            },
        },

        /* 7*/ {
            "question": "If you could live anywhere, where would you live?",
            "questionID": 7,
            "pack": "Base Game",
            "answer1": {
                "answer": "An island surrounded by beautiful water",
                "aspiration": "Beach Life",
                "traits": {
                    "trait": {
                        "Child of the Island": 3, "Loves Outdoors": 3
                    },
                    "conflicts": ["Squeamish"]
                },
                //"job": "",
                "likes": {
                    "Fishing": 3, "Island Radio Music": 2
                },
                "dislikes": {
                    "Winter Holiday": 1, "Snowboarding": 3, "Skiing": 3
                },
                "style": "Beachy",
                "walkstyle": "Feminine",

            },
            "answer2": {
                "answer": "The Cold North with snow everywhere you turn.",
                "aspiration": "Mt. Komorebi Sightseer",
                "traits": {
                    "trait": {
                        "Love Outdoors": 3
                    },
                    "conflicts": ["Squeamish"]
                },
                //"job":"",
                "likes": {
                    "Snowboarding": 4, "Skiing": 4, "Winter Holiday Music": 3
                },
                // "dislikes":{
                //     "inputdislike":1
                // },
                //"style":"",
                //"walkstyle":"",

            },
            "answer3": {
                "answer": "A quiet, calm, relaxing neighborhood in a big house good for raising a family.",
                "aspiration": "Big Happy Family",
                "traits": {
                    "trait": {
                        "Neat": 2, "Family-Oriented": 3, "Vegetarian": 2
                    },
                    "conflicts": ["Lazy", "Slob", "Hates Children"]
                },
                //"job":"",
                "likes": {
                    "Kids Music": 3, "Gardening": 2, "Cooking": 2
                },
                "dislikes": {
                    "Mixology": 3
                },
                "style": "Normcore",
                "walkstyle": "Perky Walk",

            },
            "answer4": {
                "answer": "A city that never sleeps but still finds the energy to party all night!",
                "aspiration": "City Native",
                "traits": {
                    "trait": {
                        "Insider": 3, "Dance Machine": 2, "Ambitious": 4
                    },
                    "conflicts": ["Loner", "Lazy", "Freegan"]
                },
                "job": "Style Influencer",
                "likes": {
                    "Dancing": 2, "Photography": 4, "Mixology": 3, "Hip Hop Music": 2
                },
                "dislikes": {
                    "Classical Music": 3
                },
                "style": "Streetwear",
                "walkstyle": "Swagger Walk",

            },
        },

        /* 8*/ {
            "question": "What is your spirit animal?",
            "questionID": 8,
            "pack": "Base Game",
            "answer1": {
                "answer": "Sloth",
                //"aspiration": "",
                "traits": {
                    "trait": {
                        "Lazy": 4
                    },
                    "conflicts": ["Active", "Adventurous", "Ambitious", "Maker", "Neat", "Overachiever"]
                },
                "job": "Freelance",
                // "likes": {
                //     "inputlikes": 1
                // },
                "dislikes": {
                    "Fitness": 3
                },
                "style": "Normcore",
                "walkstyle": "Sluggish Walk",

            },
            "answer2": {
                "answer": "Dolphin",
                "aspiration": "Renaissance Sim",
                "traits": {
                    "trait": {
                        "Perfectionist": 2, "Evil": 1, "Genius": 2
                    },
                    "conflicts": ["Childish", "Good"]
                },
                "job": "Criminal",
                "likes": {
                    "Handiness": 3, "Mischief": 2
                },
                "dislikes": {
                    "inputdislike": 1
                },
                "style": "Academia",
                "walkstyle": "Snooty Walk",

            },
            "answer3": {
                "answer": "Snake",
                "aspiration": "Public Enemy",
                "traits": {
                    "trait": {
                        "Evil": 3,
                    },
                    "conflicts": ["Childish", "Good"]
                },
                "job": "Secret Agent",
                "likes": {
                    "Mixology": 2
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Grunge",
                //"walkstyle": "",
            },
            "answer4": {
                "answer": "Dog",
                "aspiration": "Friend of The World",
                "traits": {
                    "trait": {
                        "Self-assured": 2, "Cheerful": 2, "Active": 3
                    },
                    "conflicts": ["Lazy", "Gloomy", "Hot-Headed"]
                },
                // "job": "",
                "likes": {
                    "Guitar": 2, "Fishing": 2, "Fitness": 1
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Normcore",
                "walkstyle": "Bouncy Walk",

            },
        },
        /* 9*/{
            "question": "If you had a superpower, what would it be?",
            "questionID": 9,
            "pack": "Base Game",
            "answer1": {
                "answer": "Invisibility",
                //"aspiration": "",
                "traits": {
                    "trait": {
                        "Loner": 4
                    },
                    "conflicts": ["Insider", "Outgoing", "Party Animal"]
                },
                "job": "Freelancer",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Normcore",
                //"walkstyle": "",

            },
            "answer2": {
                "answer": "Super Strength",
                "aspiration": "Bodybuilder",
                "traits": {
                    "trait": {
                        "Active": 4, "Self-assured": 3
                    },
                    "conflicts": ["Lazy"]
                },
                "job": "Athlete",
                "likes": {
                    "Fitness": 3, "Handiness": 3, "Alternative Music": 2
                },
                "dislikes": {
                    "Mischief": 4
                },
                "style": "Athletic Wear",
                "walkstyle": "Tough Walk",

            },
            "answer3": {
                "answer": "Telekinisis",
                "aspiration": "Nerd Brain",
                "traits": {
                    "trait": {
                        "Genius": 3, "Eratic": 1
                    },
                    //"conflicts": [""]
                },
                // "job": "",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Gothcore",
                "walkstyle": "Default Walk",

            },
            "answer4": {
                "answer": "Manipulation",
                "aspiration": "Chief of Mischief",
                "traits": {
                    "trait": {
                        "Evil": 3
                    },
                    "conflicts": ["Childish", "Good"]
                },
                //"job": "",
                "likes": {
                    "Mischief": 3
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Gothcore",
                // "walkstyle": "",

            },
        },

        /* 10*/ {
            "question": "It's Friday night, got any plans?",
            "questionID": 10,
            "pack": "Base Game",
            "answer1": {
                "answer": "Plans with my favorite book? Yes!",
                "aspiration": "Bestselling Author",
                "traits": {
                    "trait": {
                        "Bookworm": 4, "Loner": 2
                    },
                    "conflicts": ["Insider", "Outgoing", "Party Animal"]
                },
                "job": "Writer",
                "likes": {
                    "Writing": 4, "Classical Music": 2, "Focus Music": 4, "Easy Listening Music": 3
                },
                "dislikes": {
                    "Video Gaming": 3
                },
                "style": "Academia",
                "walkstyle": "Default Walk",

            },
            "answer2": {
                "answer": "Going out and getting LITTTT",
                "aspiration": "Party Animal",
                "traits": {
                    "trait": {
                        "Outgoing": 3
                    },
                    "conflicts": ["Loner", "Paranoid", "Socially Awkward"]
                },
                // "job": "",
                "likes": {
                    "Hip Hop Music": 4, "Pop Music": 3, "Dancing": 3, "DJ Booth Music": 3
                },
                "dislikes": {
                    "Classical Music": 2
                },
                "style": "Streetwear",
                "walkstyle": "Swagger Walk",

            },
            "answer3": {
                "answer": "Having movie night with the family.",
                "aspiration": "Big Happy Family",
                "traits": {
                    "trait": {
                        "Family-oriented": 4, "Loyal": 1
                    },
                    "conflicts": ["Hates Children", "Noncommittal"]
                },
                // "job": "",
                "likes": {
                    "Kids Music": 2
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                //"style": "",
                //"walkstyle": "",

            },
            "answer4": {
                "answer": "Going straight to bed!",
                //"aspiration": "",
                "traits": {
                    "trait": {
                        "Lazy": 1, "Loner": 1
                    },
                    "conflicts": ["Insider", "Outgoing", "Party Animal", "Active", "Adventurous", "Ambitious", "Maker", "Neat", "Overachiever"]
                },
                //"job": "",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Sluggish Walk",
                //"walkstyle": "",

            },
        },

    //additional questions below
        /* 11*/ {
            "question": "What's your go-to movie genre?",
            "questionID": 11,
            "pack": "Base Game",
            "answer1": {
                "answer": "I love a good romcom!",
                "aspiration": "Serial Romantic",
                "traits": {
                    "trait": {
                        "Romantic": 3, "Goofball": 2
                    },
                    "conflicts": ["Snob"]
                },
                //"job": "",
                "likes": {
                    "Comedy": 3, "Romance Music": 3
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                //"style": "",
                "walkstyle": "Feminine Walk",

            },
            "answer2": {
                "answer": "Action all the way. Explosions and everything!",
                //"aspiration": "Party Animal",
                "traits": {
                    "trait": {
                        "Hot-Headed": 3, "Bro": 2, "Active": 1
                    },
                    "conflicts": ["Lazy", "Cheerful", "Gloomy"]
                },
                "job": "Entertainer",
                "likes": {
                    "Alternative Music": 3
                },
                "dislikes": {
                    "Romance Music": 3
                },
                //"style": "",
                "walkstyle": "Tough Walk",

            },
            "answer3": {
                "answer": "Drama, especially the ones that leave you reflecting.",
                "aspiration": "Renaissance Sim",
                "traits": {
                    "trait": {
                        "Genius": 3, "Art Lover": 2, "Gloomy": 1
                    },
                    "conflicts": ["Cheerful", "Hot-Headed"]
                },
                "job": "Writer",
                "likes": {
                    "Easy Listening Music": 3
                },
                "dislikes": {
                    "Electronica Music": 3
                },
                "style": "Preppy",
                "walkstyle": "Snooty Walk",

            },
            "answer4": {
                "answer": "Horror and thriller, I love the uncomfortable feeling!",
                //"aspiration": "Party Animal",
                "traits": {
                    "trait": {
                        "Hot-Headed": 3
                    },
                    "conflicts": ["Cheerful", "Gloomy"]
                },
                // "job": "Entertainer",
                "likes": {
                    "Alternative Music": 3, "Spooky Music": 4
                },
                // "dislikes": {
                //     "Romance Music": 3
                // },
                //"style": "",
                // "walkstyle": "Tough Walk",

            },
        },

        /* 12*/ {
            "question": "What is your favorite time of the day?",
            "questionID": 12,
            "pack": "Base Game",
            "answer1": {
                "answer": "Love the morning, it's the best time to work out!",
                "aspiration": "Bodybuilder",
                "traits": {
                    "trait": {
                        "Active": 2, "Cheerful": 2, "Ambitious": 2, "Neat": 1
                    },
                    "conflicts": ["Lazy", "Gloomy", "Hot-Headed", "Freegan", "Slob"]
                },
                "job": "Business",
                "likes": {
                    "Pop Music": 2, "Fitness": 3, "Retro Music": 2
                },
                "dislikes": {
                    "Mischief": 2, "Piano": 1, "Spooky Music": 1
                },
                "style": "Athletic wear",
                "walkstyle": "Bouncy Walk",

            },
            "answer2": {
                "answer": "I love the night time, I think I'm nocturnal.",
                // "aspiration": "",
                "traits": {
                    "trait": {
                        "Bookworm": 3, "Loner": 3
                    },
                    "conflicts": ["Insider", "Outgoing"]
                },
                "job": "Writer",
                "likes": {
                    "Writing": 3
                },
                "dislikes": {
                    "Fitness": 4
                },
                "style": "Normcore",
                "walkstyle": "Default Walk",

            },
            "answer3": {
                "answer": "I wish I could be asleep for the whole day.",
                //"aspiration": "",
                "traits": {
                    "trait": {
                        "Lazy": 2, "Clumsy": 1, "Slob": 2
                    },
                    "conflicts": ["Active", "Adventurous", "Ambitious", "Maker", "Neat"]
                },
                "job": "Freelance",
                "likes": {
                    "Lullabies Music": 2
                },
                "dislikes": {
                    "Rocket Science": 3
                },
                "style": "Normcore",
                "walkstyle": "Sluggish Walk",

            },
            "answer4": {
                "answer": "I work all day, no time to appreciate the color of the sky.",
                "aspiration": "Successful Lineage",
                "traits": {
                    "trait": {
                        "Ambitious": 3, "Self-assured": 2, "Perfectionist": 3, "Loner": 2
                    },
                    "conflicts": ["Insider", "Outgoing", "Freegan", "Lazy"]
                },
                "job": "Business",
                "likes": {
                    "Programming": 3
                },
                "dislikes": {
                    "Lullabies Music": 1
                },
                "style": "Academia",
                "walkstyle": "Perky Walk",

            },
        },

        /* 13*/ {
            "question": "Which dwarf best represents you?",
            "questionID": 13,
            "pack": "Base Game",
            "answer1": {
                "answer": "Happy",
                "aspiration": "Friend Of The World",
                "traits": {
                    "trait": {
                        "Cheerful": 3, "Good": 3, "Loyal": 4
                    },
                    "conflicts": ["Gloomy", "Hot-Headed", "Noncommittal", "Evil", "Kleptomaniac", "Mean"]
                },
                "job": "Entertainer",
                "likes": {
                    "Comedy": 4, "Pop Music": 4
                },
                "dislikes": {
                    "Mischief": 4
                },
                "style": "Soft",
                "walkstyle": "Perky",

            },
            "answer2": {
                "answer": "Grumpy",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "Mean": 4, "Hot-Headed": 3, "Hates Children": 3
                    },
                    "conflicts": ["Good", "Proper", "Cheerful", "Gloomy", "Childish", "Family-oriented"]
                },
                "job": "Criminal",
                "likes": {
                    "Mischief": 4, "Violin": 3
                },
                "dislikes": {
                    "Comedy": 2, "Fitness": 3
                },
                // "style": "",
                "walkstyle": "Sluggish",

            },
            "answer3": {
                "answer": "Bashful",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "Loner": 4
                    },
                    "conflicts": ["Insider", "Outgoing"]
                },
                "job": "Freelance",
                "likes": {
                    "Writing": 2
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                "walkstyle": "Default Walk",

            },
            "answer4": {
                "answer": "Dopey",
                // "aspiration": "",
                "traits": {
                    "trait": {
                        "Clumsy": 3, "Childish": 3, "Goofball": 2
                    },
                    "conflicts": ["Maker", "Evil", "Hates Children", "Snob"]
                },
                "job": "Astronaut",
                "likes": {
                    "Rocket Science": 3, "Video Gaming": 3, "Kids Music": 3
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                "walkstyle": "Goofy Walk",

            },
        },

        /* 14*/ {
            "question": "How do you deal with mistakes?",
            "questionID": 14,
            "pack": "Base Game",
            "answer1": {
                "answer": "I paint over them.",
                "aspiration": "Painter Extraordinaire",
                "traits": {
                    "trait": {
                        "Art Lover": 3, "Ambitious": 2
                    },
                    "conflicts": ["Freegan", "Lazy"]
                },
                "job": "Painter",
                "likes": {
                    "Painting": 4, "Easy Listening Music": 3
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Grunge",
                "walkstyle": "Bouncy Walk",

            },
            "answer2": {
                "answer": "I completely fall apart at the first sign of error",
                // "aspiration": "",
                "traits": {
                    "trait": {
                        "Clumsy": 3, "Noncommittal": 2
                    },
                    "conflicts": ["Maker", "Family-oriented", "Loyal"]
                },
                "job": "Computer Whiz",
                // "likes": {
                //     "inputlikes": 1
                // },
                "dislikes": {
                    "Handiness": 3
                },
                // "style": "",
                "walkstyle": "Sluggish Walk",

            },
            "answer3": {
                "answer": "I'll come back to fix them later...eventually...",
                // "aspiration": "",
                "traits": {
                    "trait": {
                        "Clumsy": 3
                    },
                    "conflicts": ["Maker"]
                },
                // "job": "",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                // "walkstyle": "",

            },
            "answer4": {
                "answer": "I MAKE ZERO MISTAKES",
                "aspiration": "Renaissance Sim",
                "traits": {
                    "trait": {
                        "Genius": 3, "Bookworm": 4, "Snob": 5, "Neat": 2
                    },
                    "conflicts": ["Childish", "Freegan", "Goofball", "Lazy"]
                },
                "job": "Culinary",
                "likes": {
                    "Cooking": 3, "Piano": 3, "Handiness": 2
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Preppy",
                "walkstyle": "Snooty Walk",

            },
        },

        // /* 15*/ {
        //     "question": "How would your friends describ you?",
        //     "questionID": 15,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        // /* 16*/ {
        //     "question": "How do you approach new experiences?",
        //     "questionID": 16,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        /* 17*/ {
            "question": "What is love?",
            "questionID": 17,
            "pack": "Base Game",
            "answer1": {
                "answer": "A curse",
                "aspiration": "Villainous Valentine",
                "traits": {
                    "trait": {
                        "Unflirty": 2, "Erratic": 2, "Gloomy": 3
                    },
                    "conflicts": ["Romantic", "Cheerful", "Hot-Headed"]
                },
                // "job": "",
                "likes": {
                    "Mixology": 3
                },
                "dislikes": {
                    "Romance Music": 3
                },
                "style": "Gothcore",
                "walkstyle": "Sluggish Walk",

            },
            "answer2": {
                "answer": "The best thing to experience in the whole entire world!",
                "aspiration": "Soulmate",
                "traits": {
                    "trait": {
                        "Romantic": 3, "Cheerful": 3
                    },
                    "conflicts": ["Unflirty", "Gloomy", "Hot-Headed"]
                },
                // "job": "",
                "likes": {
                    "Romance Music": 3
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Soft",
                "walkstyle": "Feminine Walk",

            },
            "answer3": {
                "answer": "I don't know, nor do I care to know.",
                // "aspiration": "",
                "traits": {
                    "trait": {
                        "Loner": 4
                    },
                    "conflicts": ["Insider", "Outgoing"]
                },
                "job": "Secret Agent",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Grunge",
                "walkstyle": "Swagger Walk",

            },
            "answer4": {
                "answer": "Extreme levels of dopamine released at the moment attration is formed.",
                "aspiration": "Nerd Brain",
                "traits": {
                    "trait": {
                        "Geek": 3, "Genius": 2
                    },
                    // "conflicts": [""]
                },
                "job": "Scientist",
                "likes": {
                    "Rocket Science": 3, "Programming": 4
                },
                "dislikes": {
                    "Piano": 2, "Video Gaming": 2
                },
                "style": "Nerdy",
                "walkstyle": "Goofy Walk",

            },
        },

        /* 18*/ {
            "question": "You come across secret information that could ruin someone's life, what do you do with it?",
            "questionID": 18,
            "pack": "Base Game",
            "answer1": {
                "answer": "Keep it safe incase it comes in handy.",
                "aspiration": "Public Enemy",
                "traits": {
                    "trait": {
                        "Mean": 3, "Evil": 2,
                    },
                    "conflicts": ["Childish", "Good", "Proper"]
                },
                "job": "Detective",
                "likes": {
                    "Mischief": 2
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                // "walkstyle": "",

            },
            "answer2": {
                "answer": "I can keep a secret extremely well.",
                "aspiration": "Neighborhood Confidante",
                "traits": {
                    "trait": {
                        "Self-assured": 4, "Loyal": 3, "Good": 3
                    },
                    "conflicts": ["Noncommittal", "Evil", "Kleptomaniac", "Mean"]
                },
                "job": "Secret Agent",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                "walkstyle": "Bouncy Walk",

            },
            "answer3": {
                "answer": "Public information now.",
                "aspiration": "Public Enemy",
                "traits": {
                    "trait": {
                        "Kleptomaniac": 3, "Evil": 4
                    },
                    "conflicts": ["Good", "Childish"]
                },
                "job": "Criminal",
                "likes": {
                    "Mischief": 4
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Academia",
                //"walkstyle": "",

            },
            "answer4": {
                "answer": "I would never ruin someone's life.",
                "aspiration": "Friend Of The World",
                "traits": {
                    "trait": {
                        "Good": 5, "Bro": 3
                    },
                    "conflicts": ["Evil", "Mean", "Kleptomaniac"]
                },
                // "job": "",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                // "walkstyle": "",

            },
        },

        // /* 19*/ {
        //     "question": "What haunts you?",
        //     "questionID": 19,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        // /* 20*/{
        //     "question": "Be honest... what's your screentime?",
        //     "questionID": 20,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        // /* 21*/{
        //     "question": "What activities were you apart of in school?",
        //     "questionID": 21,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        // /* 22*/{
        //     "question": "What is your role in your friend group?",
        //     "questionID": 22,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        // /* 23*/{
        //     "question": "Favorite toy as a kid?",
        //     "questionID": 23,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        // /* 24*/{
        //     "question": "What instrument do you play?",
        //     "questionID": 24,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        // /* 25*/{
        //     "question": "What videos do you watch on social media?",
        //     "questionID": 25,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        // /* 26*/{
        //     "question": "After a long day, all you want to do is...",
        //     "questionID": 26,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        // /* 27*/{
        //     "question": "While having a conversation with a coworker, things start to turn south. What do you do?",
        //     "questionID": 27,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        // /* 28*/{
        //     "question": "What is your strength?",
        //     "questionID": 28,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        // /* 29*/{
        //     "question": "What is your weakness?",
        //     "questionID": 29,
        //     "pack": "Base Game",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },

        /* 30*/{
            "question": "Today is career day at school, what are you most excited for",
            "questionID": 30,
            "pack": "Get To Work",
            "answer1": {
                "answer": "Meeting the doctors and learning about working in the medical field",
                "aspiration": "Nerd Brain",
                "traits": {
                    "trait": {
                        "Genius": 3
                    },
                    // "conflicts": [""]
                },
                "job": "Doctor",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": ""
            },
            "answer2": {
                "answer": "Anything and everything computers",
                "aspiration": "Computer Whiz",
                "traits": {
                    "trait": {
                        "Geek": 3
                    },
                    // "conflicts": [""]
                },
                "job": "Scientist",
                "likes": {
                    "Programming": 5, "Video Gaming": 5
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "style": "Nerdy"
            },
            "answer3": {
                "answer": "Always wanted to know more about the music industry.",
                "aspiration": "Musical Genius",
                "traits": {
                    "trait": {
                        "Music Lover": 4
                    },
                    // "conflicts": [""]
                },
                "job": "Entertainer",
                "likes": {
                    "Guitar": 3, "Piano": 3, "Violin": 3
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": ""
            },
            "answer4": {
                "answer": "Learning about solving crimes from real detectives",
                // "aspiration": "",
                "traits": {
                    "trait": {
                        "Perfectionist": 3, "Ambitious": 2
                    },
                    "conflicts": ["Lazy", "Freegan"]
                },
                "job": "Detective",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": ""
                "walkstyle": "Swagger Walk"
            }
        },
        /* 31*/
        {
            "question": "Do you believe in aliens?",
            "questionID": 31,
            "pack": "Get To Work",
            "answer1": {
                "answer": "Of course! We can't be the only ones in the universe.",
                //"aspiration": "",
                // "traits": {
                //     "trait": {
                //         "Genius": 3
                //     },
                //     // "conflicts": [""]
                // },
                // "job": "Doctor",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": ""
                "occult": "Default"
            },
            "answer2": {
                "answer": "Depends on who's asking...",
                // "aspiration": "Computer Whiz",
                "traits": {
                    "trait": {
                        "Paranoid": 2
                    },
                    // "conflicts": [""]
                },
                // "job": "Scientist",
                // "likes": {
                //     "Programming": 5,"Video Gaming":5
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                "occult": "Alien"
            },
            "answer3": {
                "answer": "If they existed they would've taken over this planet already.",
                // "aspiration": "Musical Genius",
                "traits": {
                    "trait": {
                        "Mean": 2
                    },
                    "conflicts": ["Good", "Proper"]
                },
                // "job": "Entertainer",
                // "likes": {
                //     "Guitar": 3,"Piano":3,"Violin":3
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": ""
                "occult": "Default"
            },
            "answer4": {
                "answer": "I wish I was one.",
                // "aspiration": "",
                // "traits": {
                //     "trait": {
                //         "Perfectionist": 3,"Ambitious":2
                //     },
                //     "conflicts": ["Lazy","Freegan"]
                // },
                // "job": "Detective",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": ""
                "occult": "Alien"
            }
        },
        /* 32*/
        {
            "question": "What role do you play in your friend group?",
            "questionID": 32,
            "pack": "Get Together",
            "answer1": {
                "answer": "I'm the parent of the group, always babysitting my friends.",
                "aspiration": "Friend Of The World",
                // "traits": {
                //     "trait": {
                //         "inputtrait": 1
                //     },
                //     "conflicts": [""]
                // },
                // "job": "",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                // "walkstyle": "",

            },
            "answer2": {
                "answer": "I'm definitely the leader of the group",
                "aspiration": "Leader Of The Pack",
                "traits": {
                    "trait": {
                        "Self-assured": 3
                    },
                    // "conflicts": [""]
                },
                // "job": "",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                "walkstyle": "Swagger Walk",

            },
            "answer3": {
                "answer": "Friends? What are those?",
                // "aspiration": "",
                "traits": {
                    "trait": {
                        "Loner": 4
                    },
                    "conflicts": ["Insider","Outgoing"]
                },
                // "job": "",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                // "walkstyle": "",

            },
            "answer4": {
                "answer": "I'm the fun one who throws all the parties!",
                "aspiration": "Party Animal",
                "traits": {
                    "trait": {
                        "Insider": 3,"Outgoing":4,"Bro":2
                    },
                    "conflicts": ["Loner","Paranoid"]
                },
                // "job": "",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                "walkstyle": "Swagger Walk",

            },
        },
        /* 33*/
        {
            "question": "Where are you at a party?",
            "questionID": 33,
            "pack": "Get Together",
            "answer1": {
                "answer": "On the dance floor!",
                // "aspiration": "",
                "traits": {
                    "trait": {
                        "Dance Machine": 3
                    },
                    // "conflicts": [""]
                },
                // "job": "",
                "likes": {
                    "Dancing": 3
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                "walkstyle": "Bouncy Walk",

            },
            "answer2": {
                "answer": "At the bar making drinks!",
                "aspiration": "Master Mixologist",
                "traits": {
                    "trait": {
                        "Creative": 2,"Foodie":3
                    },
                    "conflicts": ["Freegan","Glutton"]
                },
                "job": "Culinary",
                "likes": {
                    "Mixology": 3,"Cooking":2
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                // "walkstyle": "",

            },
            "answer3": {
                "answer": "Talking to all the party guest!",
                "aspiration": "Friend Of The World",
                "traits": {
                    "trait": {
                        "Outgoing": 4,"Insider":2
                    },
                    "conflicts": ["Loner","Paranoid"]
                },
                // "job": "",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                // "walkstyle": "",

            },
            "answer4": {
                "answer": "Playing the jams at the DJ booth!",
                "aspiration": "Musical Genius",
                "traits": {
                    "trait": {
                        "Music Lover": 3
                    },
                    // "conflicts": [""]
                },
                // "job": "",
                "likes": {
                    "DJ Booth Music": 3,"DJ Mixing":3
                },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                // "walkstyle": "",

            },
        },
        /* 34*/
        {
            "question": "How do you want to help people?",
            "questionID": 34,
            "pack": "City Living",
            "answer1": {
                "answer": "Reviewing food, art, and other experiences to notify people of all the cool spots around town.",
                "aspiration": "City Native",
                "traits": {
                    "trait": {
                        "Foodie": 4,"Art Lover":2
                    },
                    "conflicts": ["Glutton"]
                },
                "job": "Critic",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                // "walkstyle": "",
            },
            "answer2": {
                "answer": "Become a politician, and support the town through law making.",
                "aspiration": "City Native",
                "traits": {
                    "trait": {
                        "Ambitious": 4
                    },
                    "conflicts": ["Freegan","Lazy"]
                },
                "job": "Politician",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                // "walkstyle": "",

            },
            "answer3": {
                "answer": "Post videos on my social media account to entertain the masses.",
                "aspiration": "City Nativ",
                // "traits": {
                //     "trait": {
                //         "inputtrait": 1
                //     },
                //     "conflicts": [""]
                // },
                "job": "Social Media",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                // "walkstyle": "",

            },
            "answer4": {
                "answer": "Bringing attention to community issues and planning protests.",
                "aspiration": "City Native",
                // "traits": {
                //     "trait": {
                //         "inputtrait": 1
                //     },
                //     "conflicts": [""]
                // },
                "job": "Politician",
                // "likes": {
                //     "inputlikes": 1
                // },
                // "dislikes": {
                //     "inputdislike": 1
                // },
                // "style": "",
                // "walkstyle": "",

            },
        },
        /* 32*/
        // {
        //     "question": "",
        //     "questionID": 32,
        //     "pack": "Get Together",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },
        // /* 32*/
        // {
        //     "question": "",
        //     "questionID": 32,
        //     "pack": "Get Together",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },
        // /* 32*/
        // {
        //     "question": "",
        //     "questionID": 32,
        //     "pack": "Get Together",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },
        // /* 32*/
        // {
        //     "question": "",
        //     "questionID": 32,
        //     "pack": "Get Together",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },
        // /* 32*/
        // {
        //     "question": "",
        //     "questionID": 32,
        //     "pack": "Get Together",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },
        // /* 32*/
        // {
        //     "question": "",
        //     "questionID": 32,
        //     "pack": "Get Together",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },
        // /* 32*/
        // {
        //     "question": "",
        //     "questionID": 32,
        //     "pack": "Get Together",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // },
        // /* 32*/
        // {
        //     "question": "",
        //     "questionID": 32,
        //     "pack": "Get Together",
        //     "answer1": {
        //         "answer": "",
        //         "aspiration": "",
        //         "traits": {
        //             "trait": {
        //                 "inputtrait": 1
        //             },
        //             "conflicts": [""]
        //         },
        //         "job": "",
        //         "likes": {
        //             "inputlikes": 1
        //         },
        //         "dislikes": {
        //             "inputdislike": 1
        //         },
        //         "style": "",
        //         "walkstyle": "",

        //     },
        // }


    ]

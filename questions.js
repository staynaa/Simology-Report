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
        {
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
                    "conflicts": ["Gloomy", "Hot-headed"]
                },
                "job": "Athlete",
                "likes": {
                    "object": 1
                },
                "dislikes": {
                    "object": 1
                },
                "style": "Athletic-wear"
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
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
                "style": "Nerdy"
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
                "job": "",
                "likes": {
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                }
            },
            "answer4": {
                "answer": "An alien",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "inputtrait": 1
                    },
                    "conflicts": [""]
                },
                "job": "",
                "likes": {
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
                "style": ""
            },
        },//end
        {
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
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
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
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
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
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
                "style": "Athlete"
            },
            "answer4": {
                "answer": "Most Talented",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "Creative": 1
                    },
                    "conflicts": [""]
                },
                "job": "Painter",
                "likes": {
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
                "style": ""
            },
        },//end
        {
            "question": "It's Valentine's Day, what are your plans?",
            "pack": "Base Game",
            "questionID": 3,
            "answer1": {
                "answer": "Crying all day with ice cream by my side",
                "traits": {
                    "trait": {
                        "Gloomy": 2
                    },
                    "conflicts": ["Cheerful", "Hot-headed"]
                },
                "likes": {
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
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
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
            },
            "answer3": {
                "answer": "Cook an extravagant four course meal for my parter",
                "aspiration": "Master Chef",
                "traits": {
                    "trait": {
                        "Foodie": 3, "Good": 1
                    },
                    "conflicts": ["Glutton", "Evil", "Kleptomaniac", "Mean"]
                },
                "job": "Culinary Chef",
                "likes": {
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
            },
            "answer4": {
                "answer": "Just a regular day for me...",
                "traits": {
                    "trait": {
                        "Loner": 2, "Noncommittal": 2
                    },
                    "conflicts": ["Outgoing, Family-oriented, Loyal, Insider"]
                },
                "likes": {
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
            },
        },
        {
            "question": "While in a packed elevator, you accidentally let a fart out, so you...",
            "pack":"Base Game",
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
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                }
            },
            "answer2": {
                "answer": "Pray that the Earth Swallows you whole",
                "traits": {
                    "trait": {
                        "Perfectionist": 2, "Neat": 2,
                    },
                    "conflicts": ["Lazy", "Slob"]
                },
                "likes": {
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                }
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
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                }
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
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                }
            },
        },
        {
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
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
                "style": ""
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
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
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
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
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
                    "inputlikes": 1
                },
                "dislikes": {
                    "inputdislike": 1
                },
            },
        },
        {"question":"Today is career day at school, what are you most excited for",
        "questionID": 6,
        "pack":"Get To Work",
        "answer1":{
            "answer":"Meeting the doctors and learning about working in the medical field",
            "aspiration":"",
            "traits":{
                "trait":{
                    "inputtrait":1
                },
                "conflicts":[""]
            },
            "job":"Doctor",
            "likes":{
                "inputlikes":1
            },
            "dislikes":{
                "inputdislike":1
            },
            "style":""
        },
        "answer2":{
            "answer":"Anything and everything computers",
            "aspiration":"",
            "traits":{
                "trait":{
                    "Geek":3
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
            "style":""
        },
        "answer3":{
            "answer":"Always wanted to know more about the music industry",
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
            "style":""
        },
        "answer4":{
            "answer":"Learning about solving crimes from real detectives",
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
            "style":""
        }
    }
    ]
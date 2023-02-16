/*
question
answer
answer asp (aspiration) IF APPLICABLE
answer trait (trait +1-3)
answer conflict (trait -1)

    "question":"It's Halloween, what are you dressing as?",
        "answer1":{
            "answer":"",
            "aspiration":"",
            "traits":{
                "trait":{
                    "trait-type":1
                },
                "conflicts":["trait-type","trait-type"]
            }
        }
*/
const BaseGameQs =
    [
        {
            "question": "It's Halloween, what are you dressing as?",
            "answer1": {
                "answer": "A cheerleader",
                "aspiration": "Bodybuilder",
                "traits": {
                    "trait": {
                        "cheerful": 1
                    },
                    "conflicts": ["gloomy", "hot-headed"]
                }
            },
            "answer2": {
                "answer": "An alien",
                "traits": {
                    "trait": {
                        "erratic": 1,
                        "geek": 1
                    }
                }
            },
            "answer3": {
                "answer": "Favorite cartoon or video game character",
                "traits": {
                    "trait": {
                        "geek": 3
                    }
                }
            },
            "answer4": {
                "answer": "Clown",
                "aspiration": "Joke Star",
                "traits": {
                    "trait": {
                        "erratic": 1,
                        "goofball": 2,
                    },
                    "conflicts": ["snob"]
                }
            }
        },//end of question 1
        {
            "question": "What yearbook superlative do you fit?",
            //answers
            "answer1": {
                "answer": "Class Clown",
                "aspiration": "Joke Star",
                "traits": {
                    "trait": {
                        "goofball": 3,
                        "erratic":1
                    },
                    "conflicts": ["snob"]
                }
            },
            "answer2": {
                "answer": "Most Likely to Become a Billonaire",
                "aspiration": "Fabulously Wealthy",
                "traits": {
                    "trait": {
                        "ambitious": 1
                    },
                    "conflicts": ["Lazy"]
                }
            },
            "answer3": {
                "answer": "Most Likely to Win a Marathon",
                "aspiration": "Bodybuilder",
                "traits": {
                    "trait": {
                        "active": 2
                    },
                    "conflicts": ["lazy"]
                }
            },
            "answer4": {
                "answer": "Most Talented",
                "traits": {
                    "trait": {
                        "creative": 2
                    },
                }
            }
        },//end of question 2
        {
            "question": "Just got assigned a project due for next week, you...",
            //answers
            "answer1": {
                "answer": "Wait until the last minute, there's enough time",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "lazy": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer2": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer3": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer4": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            }
        },//end of question
        {
            "question": "",
            //answers
            "answer1": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer2": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer3": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer4": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            }
        },//end of question
        {
            "question": "",
            //answers
            "answer1": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer2": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer3": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer4": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            }
        },//end of question
        {
            "question": "",
            //answers
            "answer1": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer2": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer3": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer4": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            }
        },//end of question
        {
            "question": "",
            //answers
            "answer1": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer2": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer3": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer4": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            }
        },//end of question
        {
            "question": "",
            //answers
            "answer1": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer2": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer3": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer4": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            }
        },//end of question
        {
            "question": "",
            //answers
            "answer1": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer2": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer3": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer4": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            }
        },//end of question
        {
            "question": "",
            //answers
            "answer1": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer2": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer3": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            },
            "answer4": {
                "answer": "",
                "aspiration": "",
                "traits": {
                    "trait": {
                        "trait-type": 1
                    },
                    "conflicts": ["trait-type", "trait-type"]
                }
            }
        },//end of question
    ]
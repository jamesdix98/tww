import { loadData } from "../source/readJSON.js";

/*let progression = [
    {
        section: "Levels 1–4",

        levels: [
            {
                level: 1,

                steps: [
                    {
                        id: "step-1",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-2",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 2,

                steps: [
                    {
                        id: "step-3",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-4",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-5",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-6",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 3,

                steps: [
                    {
                        id: "step-7",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-8",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-9",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-10",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-11",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-12",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-13",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-14",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 4,
                asi: true
            }
        ]
    },

    {
        section: "Levels 5–8",

        levels: [
            {
                level: 5,
                steps: [
                    {
                        id: "step-15",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-16",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 6,
                steps: [
                    {
                        id: "step-17",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-18",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-19",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-20",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 7,
                steps: [
                    {
                        id: "step-21",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-22",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-23",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-24",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-25",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-26",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-27",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-28",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 8,
                asi: true
            }
        ]
    },

    {
        section: "Levels 9–12",

        levels: [
            {
                level: 9,
                steps: [
                    {
                        id: "step-29",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-30",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 10,
                steps: [
                    {
                        id: "step-31",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-32",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-33",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-34",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 11,
                steps: [
                    {
                        id: "step-35",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-36",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-37",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-38",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-39",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-40",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-41",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-42",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 12,
                asi: true
            }
        ]
    },

    {
        section: "Levels 13–16",

        levels: [
            {
                level: 13,
                steps: [
                    {
                        id: "step-43",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-44",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 14,
                steps: [
                    {
                        id: "step-45",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-46",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-47",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-48",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 15,
                steps: [
                    {
                        id: "step-49",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-50",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-51",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-52",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-53",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-54",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-55",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-56",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 16,
                asi: true
            }
        ]
    },

    {
        section: "Levels 17–20",

        levels: [
            {
                level: 17,
                steps: [
                    {
                        id: "step-57",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-58",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 18,
                steps: [
                    {
                        id: "step-59",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-60",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-61",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-62",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            },

            {
                level: 19,
                asi: true
            },

            {
                level: 20,
                steps: [
                    {
                        id: "step-63",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-64",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-65",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-66",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-67",
                        title: "",
                        description: "",
                        choices: []
                    },
                    {
                        id: "step-68",
                        title: "",
                        description: "",
                        choices: []
                    }
                ]
            }
        ]
    }
];*/

let progression = [{

    "level_1": 
    {
        "level": 1,
        "steps": [
            {
                "id": "step-1",
                "index": 1,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-2",
                "index": 2,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            }
        ]
    },

    "level_2": 
    {
        "level": 2,
        "steps": [
            {
                "id": "step-3",
                "index": 3,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-4",
                "index": 4,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-5",
                "index": 5,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-6",
                "index": 6,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            }

        ]
    },

    "level_3": 
    {
        "level": 3,
        "steps": [
            {
                "id": "step-7",
                "index": 7,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-8",
                "index": 8,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-9",
                "index": 9,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-10",
                "index": 10,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-11",
                "index": 11,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-12",
                "index": 12,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-13",
                "index": 13,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-14",
                "index": 14,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },

        ]
    },

    "level_4":
    {
        "level": 4,
    },

    "level_5": 
    {
        "level": 5,
        "steps": [
            {
                "id": "step-15",
                "index": 15,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-16",
                "index": 16,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            }
        ]
    },

    "level_6": 
    {
        "level": 6,
        "steps": [
            {
                "id": "step-17",
                "index": 17,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-18",
                "index": 18,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-19",
                "index": 19,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-20",
                "index": 20,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            }

        ]
    },

    "level_7": 
    {
        "level": 7,
        "steps": [
            {
                "id": "step-21",
                "index": 21,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-22",
                "index": 22,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-23",
                "index": 23,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-24",
                "index": 24,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-25",
                "index": 25,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-26",
                "index": 26,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-27",
                "index": 27,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-28",
                "index": 28,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },

        ]
    },

    "level_8":
    {
        "level": 8
    },

    "level_9": 
    {
        "level": 9,
        "steps": [
            {
                "id": "step-29",
                "index": 29,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-30",
                "index": 30,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            }
        ]
    },

    "level_10": 
    {
        "level": 10,
        "steps": [
            {
                "id": "step-31",
                "index": 31,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-32",
                "index": 32,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-33",
                "index": 33,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-34",
                "index": 34,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            }

        ]
    },

    "level_11": 
    {
        "level": 11,
        "steps": [
            {
                "id": "step-35",
                "index": 35,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-36",
                "index": 36,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-37",
                "index": 37,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-38",
                "index": 38,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-39",
                "index": 39,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-40",
                "index": 40,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-41",
                "index": 41,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-42",
                "index": 42,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },

        ]
    },

    "level_12":
    {
        "level": 12
    },

    "level_13": 
    {
        "level": 13,
        "steps": [
            {
                "id": "step-43",
                "index": 43,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-44",
                "index": 44,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            }
        ]
    },

    "level_14": 
    {
        "level": 14,
        "steps": [
            {
                "id": "step-45",
                "index": 45,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-46",
                "index": 46,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-47",
                "index": 47,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-48",
                "index": 48,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            }

        ]
    },

    "level_15": 
    {
        "level": 15,
        "steps": [
            {
                "id": "step-49",
                "index": 49,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-50",
                "index": 50,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-51",
                "index": 51,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-52",
                "index": 52,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-53",
                "index": 53,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-54",
                "index": 54,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-55",
                "index": 55,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-56",
                "index": 56,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },

        ]
    },

    "level_16":
    {
        "level": 16
    },

    "level_17": 
    {
        "level": 17,
        "steps": [
            {
                "id": "step-57",
                "index": 57,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-58",
                "index": 58,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            }
        ]
    },

    "level_18": 
    {
        "level": 18,
        "steps": [
            {
                "id": "step-59",
                "index": 59,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-60",
                "index": 60,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-61",
                "index": 61,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-62",
                "index": 62,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            }

        ]
    },

    "level_19":
    {
        "level": 19
    },

    "level_20": 
    {
        "level": 20,
        "steps": [
            {
                "id": "step-63",
                "index": 63,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-64",
                "index": 64,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-65",
                "index": 65,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-66",
                "index": 66,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-67",
                "index": 67,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            },
            {
                "id": "step-68",
                "index": 68,
                "title": "",
                "prerequisite": "",
                "health-pool": {
                    "dice": "",
                    "average": 0
                },
                "description": "",
                "choices": []
            }

        ]
    },
    
}];

/*Object.entries(data.steps.children).forEach(([stepKey, step]) => {

    Object.entries(step.children).forEach(([featureKey, feature]) => {

        Object.values(progression[0]).forEach(level => {

            if (!level.steps) return;

            level.steps.forEach(progressionStep => {

                if (progressionStep.index === feature.index) {

                    progressionStep.title = featureKey.charAt(0).toUpperCase() + featureKey.slice(1).replace(/_/g, ' ');
                    progressionStep.prerequisite = feature.prerequisite;
                    progressionStep["health-pool"] = feature.health_pool;
                    progressionStep.description = feature.text;

                }

            });

        });

    });

});

console.log('progression:', progression[0]["level_20"].steps);

export { progression };*/

async function buildProgression() {

    const data = await loadData();

    const result = structuredClone(progression);

    if (!data?.steps?.children) {
        console.warn(
            "Progression: data.steps.children was not found."
        );

        return result;
    }

    for (const step of Object.values(data.steps.children)) {

        if (!step.children) {
            continue;
        }

        for (const [featureKey, feature] of Object.entries(step.children)) {

            if (feature.index === undefined) {
                continue;
            }

            for (const level of Object.values(result[0])) {

                if (!Array.isArray(level.steps)) {
                    continue;
                }

                for (const progressionStep of level.steps) {

                    if (
                        progressionStep.index !== feature.index
                    ) {
                        continue;
                    }

                    progressionStep.title =
                        featureKey.charAt(0).toUpperCase() +
                        featureKey.slice(1).replace(/_/g, " ");

                    progressionStep.prerequisite =
                        feature.prerequisite ?? "";

                    progressionStep["health-pool"] =
                        feature.health_pool ?? {
                            dice: "",
                            average: 0
                        };

                    progressionStep.description =
                        feature.text ?? "";
                }
            }
        }
    }

    console.log(
        "PROGRESSION:",
        result
    );

    return result;
}

console.log(buildProgression());

export { buildProgression };

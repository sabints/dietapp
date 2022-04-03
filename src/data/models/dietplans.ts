 
import { IDishes } from "../interfaces/shared.interface";

export const DietData: Array<IDishes> = [
    {
        time: "08:00:00",
        objectId: "",
        dish: [
            {
                day: ["Mon", "Wed", "Fri", "Sun"],
                next: false,
                item:
                    [{
                        name: "Turmeric Cinnamon Water",
                        unit: "1 Glass",
                    }, {
                        name: "Sprouted Methi Seeds",
                        unit: "1 Glass"
                    }]
            },
            {
                day: ["Tue", "Thu", "Sat"],
                next: false, item:
                    [{
                        name: "Luke Warm Jeera Lemon Water",
                        unit: "1 Glass",
                    }, {
                        name: "Sprouted Methi Seeds",
                        unit: "1 Glass"
                    }]
            }
        ]

    },
    {
        time: "08:30:00",
        objectId: "", dish: [
            {
                day: ["Mon"],
                next: false, item:
                    [{
                        name: "Wheat Dosa",
                        unit: "3 piece",
                    }, {
                        name: "Tur Dal Sambar",
                        unit: "1 Katori"
                    }]
            },
            {
                day: ["Tue"],
                next: false, item:
                    [{
                        name: "Wheat Puttu ",
                        unit: "(1 portion(1/3 of kutti))",
                    }, {
                        name: "Egg White Curry",
                        unit: "(1 serve(one egg white))"
                    }]
            },
            {
                day: ["Wed"],
                next: false, item:
                    [{
                        name: "Chapatti",
                        unit: "2 roti/chapati",
                    }, {
                        name: "Egg White Omelette",
                        unit: "2 egg white per omelette"
                    }]
            },
            {
                day: ["Thu"],
                next: false, item:
                    [{
                        name: "Vegetable Broken Wheat Upma",
                        unit: "1 katori",
                    }, {
                        name: "Low Fat Curd with Chia Seeds",
                        unit: "1 katori",
                    }, {
                        name: "Mixed Sprouts",
                        unit: "0.5 katori",
                    }]
            },
            {
                day: ["Fri"],
                next: false, item:
                    [{
                        name: "Vegetable Oats Porridge",
                        unit: "1 katori",
                    }, {
                        name: "Low Fat Curd with Chia Seeds",
                        unit: "1 katori",
                    }, {
                        name: "Boiled Green Gram",
                        unit: "0.5 katori",
                    }]
            },
            {
                day: ["Sat"],
                next: false, item:
                    [{
                        name: "Brown Bread",
                        unit: "2 slice",
                    }, {
                        name: "Unsweetened Peanut Butter",
                        unit: "1 teaspoon"
                    }, {
                        name: "Mixed Sprouts",
                        unit: "1 katori",
                    }]
            },
            {
                day: ["Sun"],
                next: false, item:
                    [{
                        name: "Vegetable Paneer Oats",
                        unit: "1 katori",
                    }, {
                        name: "Low Fat Curd with Chia Seeds",
                        unit: "1 katori"
                    }]
            }
        ]

    }, {
        time: "10:30:00",
        objectId: "", dish: [
            {
                day: ["Mon"],
                next: false, item:
                    [{
                        name: "Pear",
                        unit: "1 small",
                    }, {
                        name: "Flax Seed",
                        unit: "1 tbsp, ground"
                    }]
            },
            {
                day: ["Tue", "Sat"],
                next: false, item:
                    [{
                        name: "Pomegranates raw",
                        unit: "3 oz",
                    }, {
                        name: "Chia Seeds",
                        unit: "1 tablespoon"
                    }]
            },
            {
                day: ["Wed", "Fri"],
                next: false, item:
                    [{
                        name: "Orange",
                        unit: "1.5 small (2-3/8' dia)",
                    }, {
                        name: "Chia Seeds",
                        unit: "1 tablespoon"
                    }]
            },
            {
                day: ["Thu", "Sun"],
                next: false, item:
                    [{
                        name: "Apple",
                        unit: "1 small (2-3/4' dia)",
                    }, {
                        name: "Flaxseed",
                        unit: "1 tablespoon, ground"
                    }]
            }
        ]

    },
    {
        time: "13:30:00",
        objectId: "", dish: [
            {
                day: ["Mon"],
                next: false, item:
                    [{
                        name: "Cabbage Carrot Chapati",
                        unit: "2 roti/chapati",
                    }, {
                        name: "Soyabean and Chana Curry",
                        unit: "1 katori"
                    }, {
                        name: " Low Fat Curd",
                        unit: "1 katori"
                    }]
            },
            {
                day: ["Tue"],
                next: false, item:
                    [{
                        name: "Beetroot Chapati",
                        unit: "2 roti/chapati",
                    }, {
                        name: "Green Gram Curry",
                        unit: "1 katori"
                    }, {
                        name: "Sauteed Cabbage and Carrot",
                        unit: "0.5 katori"
                    }, {
                        name: "Low Fat Curd",
                        unit: "1 katori"
                    }]
            },
            {
                day: ["Wed"],
                next: false, item:
                    [{
                        name: "Dal Chapati",
                        unit: "2 roti/chapati",
                    }, {
                        name: "Soya Chunks Curry",
                        unit: "1 katori"
                    }, {
                        name: "Low Fat Curd",
                        unit: "1 katori"
                    }, {
                        name: "Cucumber Carrot Salad",
                        unit: "1 katori"
                    }]
            },
            {
                day: ["Thu"],
                next: false, item:

                    [{
                        name: "Cooked Brown Rice",
                        unit: "1 katori",
                    }, {
                        name: "Sambar",
                        unit: "1 katori"
                    }, {
                        name: "Low Fat Curd",
                        unit: "1 katori"
                    }, {
                        name: "Beans Thoran",
                        unit: "1 katori"
                    }]
            },
            {
                day: ["Fri"],
                next: false, item:

                    [{
                        name: "Methi Chapati",
                        unit: "2 roti/chapati",
                    }, {
                        name: "Soya Chunks Bhurji",
                        unit: "1 katori"
                    }, {
                        name: "Boiled Green Gram",
                        unit: "0.5 katori"
                    }, {
                        name: "Low Fat Curd",
                        unit: "1 katori"
                    }]
            },
            {
                day: ["Sat"],
                next: false, item:

                    [{
                        name: "Radish Chapati",
                        unit: "2 roti/chapati",
                    }, {
                        name: "Paneer Peas Curry",
                        unit: "1 katori"
                    }, {
                        name: "Low Fat Curd",
                        unit: "0.5 katori"
                    }, {
                        name: "Cucumber Carrot Salad",
                        unit: "1 katori"
                    }]
            },
            {
                day: ["Sun"],
                next: false, item:

                    [{
                        name: "Veg Pulao",
                        unit: "1 katori"
                    }, {
                        name: "Chicken Curry with Less Oil",
                        unit: "1 katori"
                    }, {
                        name: "Vegetable Raita",
                        unit: "1 katori"
                    }, {
                        name: "Carrot Beans Sabji",
                        unit: "1 katori"
                    }]
            }
        ]

    },
    {
        time: "16:00:00",
        objectId: "", dish: [
            {
                day: ["Mon"],
                next: false, item:
                    [{
                        name: "Boiled Moong",
                        unit: "1 Katori",
                    }]
            }, {
                day: ["Tue", "Sun"],
                next: false, item:
                    [{
                        name: "Chana Sprouts",
                        unit: "1 Katori",
                    }]
            }, {
                day: ["Wed", "Thu"],
                next: false, item:
                    [{
                        name: "Boiled Chana and Soyabean",
                        unit: "1 Katori",
                    }]
            }, {
                day: ["Fri", "Sat"],
                next: false, item:
                    [{
                        name: "Roasted Makhana",
                        unit: "1 Katori",
                    }]
            },
        ]

    }, {
        time: "20:30:00",
        objectId: "", dish: [
            {
                day: ["Mon"],
                next: false, item:
                    [{
                        name: "Besan Oats Cheela",
                        unit: "1 cheela",
                    }, {
                        name: "Paneer Vegetable Salad",
                        unit: "1 Katori",
                    }, {
                        name: "Low Fat Curd",
                        unit: "1 Katori",
                    }]
            }, {
                day: ["Tue"],
                next: false, item:
                    [{
                        name: "Mung Dal Chilla",
                        unit: "1 cheela",
                    }, {
                        name: "Soyabean Curry",
                        unit: "1 Katori",
                    }, {
                        name: "Onion Salad",
                        unit: "0.5 Katori",
                    }]
            }, {
                day: ["Wed", "Sun"],
                next: false, item:
                    [{
                        name: "Besan Cheela with Vegetables",
                        unit: "1.5 cheela",
                    }, {
                        name: "Grilled Fish",
                        unit: "100 grams",
                    }]
            }, {
                day: ["Thu"],
                next: false, item:
                    [{
                        name: "Vegetable Chicken Soup",
                        unit: "1 bowl",
                    }, {
                        name: "Paneer Vegetable Salad",
                        unit: "1 Katori",
                    }]
            }, {
                day: ["Fri"],
                next: false, item:
                    [{
                        name: "Multigrain Carrot Beetroot Chapati with Seeds",
                        unit: "1 roti/chapati",
                    }, {
                        name: "Grilled Fish",
                        unit: "0.55 grilled fish fillet",
                    }, {
                        name: "Cucumber Tomato Raita",
                        unit: "0.5 Katori",
                    }]
            }, {
                day: ["Sat"],
                next: false, item:
                    [{
                        name: "Grilled Chicken Vegetable Salad",
                        unit: "1 bowl",
                    }, {
                        name: "Low Fat Curd",
                        unit: "1 Katori",
                    }]
            }
        ]

    },
    {
        time:"22:00:00",
        objectId:"",
        dish:[ 
            {
                day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                next:false,
                item:[
                    {
                        name:"Pumpkin Seeds",
                        unit:"1 tablespoon"
                    },
                    {
                        name:"Chamomile Tea",
                        unit:"1 glass"
                    }
                ]
            }
        ]
    }
];
 
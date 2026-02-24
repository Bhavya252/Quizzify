import { v4 as uuid } from 'uuid';      


const quizzes = {
    "data": [
        {
            id:uuid(),
            category: " Computer Science",
            quiz:[
                {
                    id:uuid(),
                    question:"What is the time complexity of binary search?",
                    options:[
                        {id:uuid(), option:"O(n)",isCorrect:false},
                        {id:uuid(), option:"O(log n)",isCorrect:true},
                        {id:uuid(), option:"O(n log n)",isCorrect:false},
                        {id:uuid(), option:"O(1)",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question:"Which data structure follows FIFO order?",
                    options:[
                        {id:uuid(),option:"Stack",isCorrect:false},
                        {id:uuid(),option:"Queue",isCorrect:true},
                        {id:uuid(),option:"Linked List",isCorrect:false},
                        {id:uuid(),option:"Tree",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question:"What does HTML stand for?",
                    options:[
                        {id:uuid(),option:"Hyper Text Markup Language",isCorrect:true},
                        {id:uuid(),option:"Home Tool Markup Language",isCorrect:false},
                        {id:uuid(),option:"Hyperlinks and Text Markup Language",isCorrect:false},
                        {id:uuid(),option:"Hyperlinking Text Marking Language",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question:"Which layer of the OSI model handles routing?",
                    options:[
                        {id:uuid(),option:"Application Layer",isCorrect:false},
                        {id:uuid(),option:"Transport Layer",isCorrect:false},
                        {id:uuid(),option:"Network Layer",isCorrect:true},
                        {id:uuid(),option:"Data Link Layer",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question:"Which method is used to add an element to the end of an array in JavaScript?",
                    options:[
                        {id:uuid(),option:"push()",isCorrect:true},
                        {id:uuid(),option:"pop()",isCorrect:false},
                        {id:uuid(),option:"shift()",isCorrect:false},
                        {id:uuid(),option:"unshift()",isCorrect:false}
                    ]
                }

                
            ]
        },
        {
            id:uuid(),
            category: "Apptitude",
            quiz:[
                {
                    id:uuid(),
                    question:"Average of 2, 4, 6, 8, 10 is?",
                    options:[
                        {id:uuid(),option:"5",isCorrect:false},
                        {id:uuid(),option:"6",isCorrect:true},
                        {id:uuid(),option:"7",isCorrect:false},
                        {id:uuid(),option:"8",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question: "A shopkeeper gives 10% discount on ₹500. Final price is?",
                    options:[
                        {id:uuid(),option:"₹450",isCorrect:true},
                        {id:uuid(),option:"₹400",isCorrect:false},
                        {id:uuid(),option:"₹475",isCorrect:false},
                        {id:uuid(),option:"₹425",isCorrect:false}
                    ]

                },
                {
                    id:uuid(),
                    question:"Next number: 3, 6, 12, 24, ?",
                    options:[
                        {id:uuid(),option:"36",isCorrect:false},
                        {id:uuid(),option:"48",isCorrect:true},
                        {id:uuid(),option:"60",isCorrect:false},
                        {id:uuid(),option:"72",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question:"If A can complete work in 10 days, daily work done = ?",
                    options:[
                        {id:uuid(),option:"1/10",isCorrect:true},
                        {id:uuid(),option:"1/5",isCorrect:false},
                        {id:uuid(),option:"1/20",isCorrect:false},
                        {id:uuid(),option:"1/30",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question:"What is the compound interest on ₹1000 at 10% per annum for 2 years?",
                    options:[
                        {id:uuid(),option:"₹210",isCorrect:true},
                        {id:uuid(),option:"₹200",isCorrect:false},
                        {id:uuid(),option:"₹220",isCorrect:false},
                        {id:uuid(),option:"₹190",isCorrect:false}
                    ]
                }
                

            ]
        },
        {
            id:uuid(),
            category: "General Knowledge",
            quiz:[
                {
                    id:uuid(),
                    question:"Who is the current President of the United States?",
                    options:[
                        {id:uuid(),option:"Joe Biden",isCorrect:true},
                        {id:uuid(),option:"Donald Trump",isCorrect:false},
                        {id:uuid(),option:"Barack Obama",isCorrect:false},
                        {id:uuid(),option:"George W. Bush",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question:"What is the capital of France?",
                    options:[
                        {id:uuid(),option:"London",isCorrect:false},
                        {id:uuid(),option:"Rome",isCorrect:false},
                        {id:uuid(),option:"Berlin",isCorrect:false},
                        {id:uuid(),option:"Paris",isCorrect:true}

                    ]
                },
                {
                    id:uuid(),
                    question:"Which planet is known as the Red Planet?",
                    options:[
                        {id:uuid(),option:"Earth",isCorrect:false},
                        {id:uuid(),option:"Mars",isCorrect:true},
                        {id:uuid(),option:"Jupiter",isCorrect:false},
                        {id:uuid(),option:"Venus",isCorrect:false}
                    ]

                },
                {
                    id:uuid(),
                    question:"Who wrote the play 'Romeo and Juliet'?",
                    options:[
                        {id:uuid(),option:"Charles Dickens",isCorrect:false},
                        {id:uuid(),option:"Jane Austen",isCorrect:false},
                        {id:uuid(),option:"William Shakespeare",isCorrect:true},
                        {id:uuid(),option:"Mark Twain",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question:"What is the largest mammal in the world?",
                    options:[
                        {id:uuid(),option:"Elephant",isCorrect:false},
                        {id:uuid(),option:"Blue Whale",isCorrect:true},
                        {id:uuid(),option:"Giraffe",isCorrect:false},
                        {id:uuid(),option:"Hippopotamus",isCorrect:false}
                    ]
                }
            ]
        },
        {
            id:uuid(),
            category: "Science",
            quiz:[
                {
                    id:uuid(),
                    question:"What is the chemical symbol for water?",
                    options:[
                        {id:uuid(),option:"H2O",isCorrect:true},
                        {id:uuid(),option:"CO2",isCorrect:false},
                        {id:uuid(),option:"NaCl",isCorrect:false},
                        {id:uuid(),option:"O2",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question:"What is the speed of light?",
                    options:[
                        {id:uuid(),option:"299,792,458 m/s",isCorrect:true},
                        {id:uuid(),option:"300,000,000 m/s",isCorrect:false},
                        {id:uuid(),option:"299,792,458 km/s",isCorrect:false},
                        {id:uuid(),option:"300,000 km/s",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question:"What is the powerhouse of the cell?",
                    options:[
                        {id:uuid(),option:"Nucleus",isCorrect:false},
                        {id:uuid(),option:"Mitochondria",isCorrect:true},
                        {id:uuid(),option:"Ribosome",isCorrect:false},
                        {id:uuid(),option:"Endoplasmic Reticulum",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question:"What is the chemical formula for table salt?",
                    options:[
                        {id:uuid(),option:"NaCl",isCorrect:true},
                        {id:uuid(),option:"KCl",isCorrect:false},
                        {id:uuid(),option:"CaCl2",isCorrect:false},
                        {id:uuid(),option:"MgCl2",isCorrect:false}
                    ]
                },
                {
                    id:uuid(),
                    question:"What is the process by which plants make their own food?",
                    options:[
                        {id:uuid(),option:"Photosynthesis",isCorrect:true},
                        {id:uuid(),option:"Respiration",isCorrect:false},
                        {id:uuid(),option:"Transpiration",isCorrect:false},
                        {id:uuid(),option:"Germination",isCorrect:false}
                    ]
                }
            ]
            
        }



    ]
};

export default quizzes;

    

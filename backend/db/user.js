import {v4 as uuid} from 'uuid';

const user =
    {
        "users":[{
            id:uuid(),
            name:"gaurav",
            email:"gaurav@example.com",
            password:"gaurav123"

        },
        {
            id:uuid(),
            name:"Bhavya",
            email:"bhavya@example.com",
            password:"bhavya123"
        },
        {
            id:uuid(),
            name:"Rohit",
            email:"rohit@example.com",
            password:"rohit123"
        }
    ]

    }
export default user;
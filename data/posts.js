import { USERS } from "./users";

export const POSTS = [

    {
        imageUrl: 'https://static.theprint.in/wp-content/uploads/2020/11/EilxqtGWkAgg3vL-e1605948236762-696x392.jpeg',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Good moring Guys',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'pranay',
            comment: "Great Brother , very Good Moring"

            },
            {
                user: 'raju',
                comment: "very Good Moring, how are you!!!btw what are you doing"

            },
           

        ],
    },
    {
        imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/Krishna_Janmashtami-647x363.jpeg?0FXh_AochI3aklCIRMrmx0xb7mHoXEI9',
        user: USERS[1].user,
        likes: 7842470,
        caption: 'Good moring Guys',
        profile_picture: USERS[1].image,
        comments: [{
                user: 'pranay',
                comment: "Great Brother , very Good Moring"

            },
            {
                user: 'raju',
                comment: "very Good Moring, how are you"

            },

        ],
    },
    {
        imageUrl: '',
        user: USERS[2].user,
        likes: 7870,
        caption: 'Good moring Guys',
        profile_picture: USERS[2].image,
        comments: [{
                user: 'pranay',
                comment: "Great Brother , very Good Moring"

            },
            {
                user: 'raju',
                comment: "very Good Moring, how are you"

            },

        ],
    },
    {
        imageUrl: '',
        user: USERS[3].user,
        likes: 7870,
        caption: 'Good moring Guys',
        profile_picture: USERS[3].image,
        comments: [{
                user: 'pranay',
                comment: "Great Brother , very Good Moring"

            },
            {
                user: 'raju',
                comment: "very Good Moring, how are you"

            },

        ],
    },



]
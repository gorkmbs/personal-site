import messaging1 from "./assets/messaging1.jpg";
import messaging2 from "./assets/messaging2.jpg";
import animals from "./assets/animals.png";
import animals2 from "./assets/animals2.jpg";
import videos1 from "./assets/videos1.jpg";
import videos2 from "./assets/videos2.jpg";
import market1 from "./assets/market1.jpg";
import market2 from "./assets/market2.jpg";
import lottery1 from "./assets/lottery1.jpg";
import lottery2 from "./assets/lottery2.jpg";

export const generalInfo = `I am a full-stack web developer. I love coding, because that's where I'm able to try out and learn
          something new. The fact that I'm able to apply my knowledge in
          practice and create products brings both joy and pride to me. I like
          to learn new things, because I prefer to learn the way they are
          working rather than just memorising them. In this way, I can
          successfully think creatively and go to a higher level in order to
          improve the quality of my work. I always focus on writing my codes in
          accordance with the " Clean Code '' principle. While I've been
          learning new things, I also found out that there is a limitless ocean
          of knowledge. But thanks to my interest to learn, apply and create new
          things, I really want to swim in this ocean.`;

export const tamzirtapozParagraph1 = `This is a social media web application that I built for improve myself. It is a secure site. Tamzirtapoz uses JSON Web Token authorization. 
  People need to be a member to see the contents. This application makes connection to the Node.js server which is served by Heroku. There are 5 main page. Click details button for more information and to see photos`;

export const tamzirtapozContent = [
  {
    title: "Messaging",
    paragraph1:
      "Messaging is one of the strongest side of this site. It has multiple features. A person can easily send a message to other person. Wrong message can be easily deleted. User can see if the other people writing or not.",
    photos: [messaging1, messaging2],
    ulItems: [
      "Easily send a message",
      "Learn that if your message is seen or not",
      "Is other person writing or not",
      "Reply a message easily",
      "Delete message, even if it belongs to you or not",
      "Appropriate sound effects",
      "Colorful backgrounds",
    ],
    paragraph2:
      "Even if you are not in the messaging part, you will take a notification if you take a new message.",
  },
  {
    title: "Animal Photos",
    paragraph1:
      "There are so many sweet animals :) In this part of site, users can easily share an animal with its photo. The other users can like the photo or make a comment. If you like a comment, you can like it or you can reply a comment with your answer. The other users can even like the answers. If you made a comment or answer and do not like it? You can easily delete them. In the profile, users can pick their color. This color will be shown in his/her animal as border around the animal content.",
    photos: [animals, animals2],
    ulItems: [
      "Share an animal content easily",
      "Like a shared animal photo",
      "Comment an animal",
      "Answer a comment",
      "Like a comment",
      "Like an answer (reply of the comment)",
      "User's color around the animal content",
      "Click any username to see his/her profile and send a message",
    ],
    paragraph2:
      "This page gives motivation and positive energy to people who sees the contents. As a social media page people can communicate with each other with both comments and direct messages",
  },
  {
    title: "Daily and Music Videos",
    paragraph1:
      "There are two types of videos in this site. Users can share both daily and music videos. In daily part, users can share all types of videos except music videos :) Users can like or dislike the videos.",
    photos: [videos1, videos2],
    ulItems: [
      "Share a video directly in the videos page",
      "Watch unlimited videos",
      "Like videos",
      "Unlike videos",
      "Sharing user's own color theme as a border and background",
    ],
    paragraph2: "This part of site uses the YouTube videos as content",
  },
  {
    title: "Market-Tamzirtapoz (e-commerce)",
    paragraph1:
      "This is a part of tamzirtapoz but it is a different site. This site uses tamzirtapoz for logging in and registering. Because this site is a seperate project, I explained it with more detail as a second project down in the main page.",
    photos: [market1, market2],
    ulItems: [
      "Easy to use sidebar",
      "Navbar for to see bag",
      "Easily add a product to bag",
      "Single product page with similar product suggestions",
      "Change the count of a product in your bag easily",
      "Users can sell a product easily",
      "Specify the discount percent",
      "List product's specifications",
      "Find stock count",
      "See your old purchases",
      "Select a category and find related products",
    ],
    paragraph2:
      "And many more features. I explained them as a second project down to the main page.",
  },
  {
    title: "Games",
    paragraph1:
      "Bored users can play some games. For now there are 2 games. More small and funny games are coming soon. In lottery game, people can select six numbers and see their luck :)",
    photos: [lottery1, lottery2],
    ulItems: [
      "The application automatically prevents wrong input",
      "Users can select their numbers or the application can give a random number if user wants",
      "After selecting numbers, users can sort numbers to see numbers easily",
      "After drawings, users can see the results",
    ],
    paragraph2: "This is just a game for fun. No money taken from the users.",
  },
];

export const tamzirtapozParagraph2 = `This site is based on React.js, Vanilla.js, Bootstrap, JWT Authentication`;
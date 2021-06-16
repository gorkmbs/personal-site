import messaging1 from "./assets/messaging1.jpg";
import messaging2 from "./assets/messaging2.jpg";

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
  People need to be a member to see the contents. This application makes connection to the Node.js server which is served by Heroku. There are 5 main page.`;

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
      "At the top of these features, most importantly, all features work perfectly.",
  },
  {
    title: "Animal Photos",
    paragraph1:
      "There are so many sweet animals :) In this part of site, users can easily share an animal with its photo. The other users can like the photo or make a comment. If you like a comment, you can like it or you can reply a comment with your answer. The other users can even like the answers. If you made a comment or answer and do not like it? You can easily delete them.",
    photos: [],
    ulItems: [],
    paragraph2: "",
  },
  {
    title: "Daily and Music Videos",
    paragraph1: "",
    photos: [],
    ulItems: [],
    paragraph2: "",
  },
  {
    title: "Market-Tamzirtapoz (e-commerce)",
    paragraph1: "",
    photos: [],
    ulItems: [],
    paragraph2: "",
  },
  { title: "Games", paragraph1: "", photos: [], ulItems: [], paragraph2: "" },
];

export const tamzirtapozParagraph2 = `This site is based on React.js, Vanilla.js, Bootstrap, JWT Authentication`;

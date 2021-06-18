import messaging1 from "./assets/messaging1.jpg";
import messaging2 from "./assets/messaging2.jpg";
import animals from "./assets/animals.jpg";
import animals2 from "./assets/animals2.jpg";
import videos1 from "./assets/videos1.jpg";
import videos2 from "./assets/videos2.jpg";
import market1 from "./assets/market1.jpg";
import market2 from "./assets/market2.jpg";
import lottery1 from "./assets/lottery1.jpg";
import lottery2 from "./assets/lottery2.jpg";
import bag1 from "./assets//market/bag1.jpg";
import addBag1 from "./assets//market/addBag1.jpg";
import payment1 from "./assets//market/payment1.jpg";
import oldPurchases1 from "./assets//market/oldPurchases1.jpg";
import addProduct1 from "./assets/market/addProduct1.jpg";
import addProduct2 from "./assets/market/addProduct2.jpg";
import productPage1 from "./assets/market/productPage1.jpg";
import productPage2 from "./assets/market/productPage2.jpg";
import generalMain1 from "./assets/market/generalMain1.png";

/*
 *** General info about Görkem Buğra Saraç
 */

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

/*
 ***** Tamzirtapoz Part
 */

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
  {
    title: "Dependencies",
    paragraph1: `Dependencies are listed below. For more detail please visit GitHub page`,
    photos: [],
    ulItems: [
      "axios",
      "base64url",
      "bootstrap",
      "dotenv",
      "joi",
      "js-cookie",
      "react",
      "react-bootstrap",
      "react-color",
      "react-datepicker",
      "react-dom",
      "react-google-recaptcha",
      "react-icons",
      "react-router-dom",
      "react-scripts",
      "use-sound",
    ],
    paragraph2: "",
  },
];

export const tamzirtapozParagraph2 = `This site is based on React.js, Vanilla.js, Bootstrap, JWT Authentication`;

/*
 ***** Market Part
 */

export const marketParagraph1 = `In these days, there are countless e commerce site. I wanted to learn how they work. Because of this reason, I decided to implement an e-commerce site which is called market-tamzirtapoz.
This site uses tamzirtapoz Node.js server. For logging in or registering, this site uses tamzirtapoz main page. If a user already logged in tamzirtapoz, then user can open market with only a click. User will be automatically logged in. Main features are listed below:`;

export const marketContent = [
  {
    title: "Sell Products",
    paragraph1:
      "Users can easily add a new product to sell in market. There are only a few steps. At the end of these steps, seller can see the summary. If all is well, only with a clicking, the product will be added store.",
    photos: [addProduct1, addProduct2, productPage1, productPage2],
    ulItems: [
      "Easily select category between the pre defined categories and sub categories",
      "Step by step details",
      "Live entry check",
      "Detailed Summary at the end to see everything in one place before selling",
      "Easily calculate the final price with the discount",
      "Add a picture of product",
    ],
    paragraph2: "Live entry check helps users to pass steps easily",
  },
  {
    title: "Product Details",
    paragraph1:
      "All products have a seperate page. In the product page, buyers can easily see the product's specifications with all details. Users can also see the votes and comments about the product.",
    photos: [productPage1, productPage2],
    ulItems: [
      "The shop name",
      "Product votes and comments",
      "Products specifications",
      "Price",
      "Image of the product",
      "Stock count",
      "If available, warranty details",
      "Easy to add bag with count",
    ],
    paragraph2:
      "With the help of votes and comments, buyers can easily decide if the product is what they are looking for or not",
  },
  {
    title: "Shopping Bag",
    paragraph1:
      "The bag icon can be easily seen from everywhere in the page. If a person adds a product to bag, the counter appears near the bag icon. Buyers can easily chang the amount of product in this section or they can remove the product from the bag.",
    photos: [bag1, oldPurchases1, payment1, addBag1],
    ulItems: [
      "Counter on the icon",
      "Change the amount of products",
      "Remove a product from the bag easily with one click",
      "Review product details with one click",
      "See section price and total price easily",
      "If everything correct, easily pass the payment page",
    ],
    paragraph2:
      "The bag is automatically synchronized with the server. If user refresh page or close page, automatically brought up on re-enter",
  },
  {
    title: "Categories",
    paragraph1:
      "There are some category types which are determined by admins. Users can easily look products with specific category or sub category. If a buyer click one category link, all related items are automatically listed.",
    photos: [market1, market2],
    ulItems: [
      "Easy to see related products",
      "Categories are determined by admins",
      "Sidebar for to find categories and sub categories",
    ],
    paragraph2: "Categories help buyers to find what they are looking for",
  },
  {
    title: "Discounts",
    paragraph1:
      "Like every e commerce site, discounts and discounts being visible are important topics. Seller can easily determine the discount percent and and the rest is purely app organized.",
    photos: [generalMain1, productPage2],
    ulItems: [
      "Easy to see how much discount takes place",
      "Automatic calculations for prices",
      "Notable discount locations",
    ],
    paragraph2: "Discounts make products more affordable.",
  },
  {
    title: "Dependencies",
    paragraph1:
      "Dependencies are listed below. For more detail please visit GitHub page",
    photos: [],
    ulItems: [
      "axios",
      "bootstrap",
      "joi",
      "js-cookie",
      "node-sass",
      "react",
      "react-bootstrap",
      "react-dom",
      "react-icons",
      "react-intl",
      "react-pro-sidebar",
      "react-redux",
      "react-router-dom",
      "react-scripts",
      "redux",
      "use-sound",
    ],
    paragraph2: "",
  },
];

export const marketParagraph2 = `This site is based on React.js, Vanilla.js, Bootstrap, Redux, React-Redux JWT Authentication`;

/*
 *** tamzirtapoz Node.js Backend Server
 */

export const backendNodeParagraph1 = `Tamzirtapoz API is the backend server for all of my other sites. This site is carefully implemented for speed and security. This backend server has both public key and private key to authenticate users. There are also some parts which do not require authentication like my personal cv page. In GitHub, ".env / private and public key pairs" files intentionally deleted for security.
This server is served by heroku free hosting.`;

export const backendNodeContent = [
  {
    title: "Dependencies",
    paragraph1:
      "Dependencies are listed below. For more detail please visit GitHub page",
    photos: [],
    ulItems: [
      "base64url",
      "cors",
      "dotenv",
      "express",
      "jsonwebtoken",
      "mongoose",
      "passport",
      "passport-jwt",
      "request-ip",
    ],
    paragraph2: "",
  },
];

export const backendNodeParagraph2 = `This site is based on Node.js, Vanilla.js, Express, Passport, Passport JWT Strategy`;

/*
 *** Educational Informatıon Part
 */

export const educational = [{ subject: "HTML-CSS-JAVASCRIPT", videos: [] }];

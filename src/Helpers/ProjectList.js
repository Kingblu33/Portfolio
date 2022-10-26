import Proj1 from "../Images/test1.jpg";
import virtualclinic from "../Images/virtualclinic.jpg";
import chatapp from "../Images/chatapp.jpg";
import dragonball from "../Images/dragonball.jpg";
import realtor from "../Images/realtor.jpg";
import anime from "../Images/anime.jpg";

import video3 from "../assets/DragonBall.mp4"
import video1 from "../assets/GamingWebsite.mp4"
import video2 from "../assets/Health NetWork.mp4"
import video4 from "../assets/GameRock.mp4"
import video5 from "../assets/socialMedia.mp4"

export const ProjectList = [
    {
        name: "Gaming Eccomerce (Revamp Cs)",
        image: Proj1,
        technologies: "Python,Flask,Mysql,HTML,CSS,Bootstrap",
        video: video1,
        Github: 'https://github.com/Kingblu33/Gaming-website',
        revamp: "Redsigning to a single page web application using react"

    },
    {
        name: "Health Network (Revamp Cs)",
        image: virtualclinic,
        technologies: "Java,SpringBoot,Mysql,Jsp,Css,Bootstrap,GoogleApi",
        video: video2,
        Github: 'https://github.com/Kingblu33/Health_Network',
        revamp: "Redsigning to a single page web application using react/angular"
    },
    {
        name: "Dragon Ball Turn Based",
        image: dragonball,
        technologies: "React,Node.js,CSS",
        video: video3,
        Github: 'https://github.com/Kingblu33/DragonBall',
    },

    {
        name: "Portfolio",
        image: realtor,
        technologies: "React,Bootstrap,Email.js",
        Github: 'https://github.com/Kingblu33/Portfolio',
        liveView: '/'
    },

    {
        name: "Social Media",
        image: chatapp,
        video: video5,
        technologies: "React,Tailwind,Sanity,Google Auth",
        Github: 'https://github.com/Kingblu33/socialmedia2',
        liveView: 'https://socialmedia-inky.vercel.app'
    },
    {
        name: "GameRock",
        image: anime,
        video: video4,
        technologies: "React,Tailwind,Free to play api",
        Github: 'https://github.com/Kingblu33/FreeToPlay',
        liveView: "https://freetoplay-virid.vercel.app"
    },
];

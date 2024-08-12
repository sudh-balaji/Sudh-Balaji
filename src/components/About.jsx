import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import pdf from '../assets/Resume.pdf';
import MeImage from '../assets/Me.jpg';
const About = () => {
    return (
        <div className="flex w-screen">
    <div className="flex-1 p-4 flex flex-col"> {/* Flex column layout to align content vertically */}
        <h2 className="text-4xl py-2">Sudh Balaji</h2>
        <div className="flex items-center py-4">
            <a
                href={pdf} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded inline-block"
            >
                Resume/CV {'>'}
            </a>
            <a
                href="https://github.com/sudh-balaji"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 h-10 w-10 border-2 border-blue-700 rounded flex items-center justify-center hover:bg-blue-700"
            >
                <IoLogoGithub className="text-blue-700" />
            </a>
            <a
                href="https://www.linkedin.com/in/sudhbalaji/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 h-10 w-10 border-2 border-blue-700 rounded flex items-center justify-center hover:bg-blue-700"
            >
                <IoLogoLinkedin className="text-blue-700" />
            </a>
        </div>
        
        <div className="text-white font-mono p-4 rounded-md flex items-center space-x-2 flex-grow">
            <span className="text-2xl">Hello! I'm a computer science student at UT Dallas who has an interest in Machine Learning
                and Software Development. In my free time,
                I enjoy watching movies, playing video games, and tennis. 
            </span>
        </div>
    </div>
    <div className="flex-1 p-4 flex items-center justify-center">
        <img src={MeImage} alt="Me" className="w-80 h-80 rounded-full" />
    </div>
</div>

    );
};

export default About;

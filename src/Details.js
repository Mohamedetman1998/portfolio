// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import Csharp from "./assets/techstack/Csharp.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import ReactPlayer from "react-player";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import ClazyWeb from "./assets/projects/ClazyWeb.png";
import ClazyApp from "./assets/projects/ClazyApp.png";
import Forge from "./assets/projects/Forge.png";
import WallDimension from "./assets/plugins/WallDimension.png";
import DrawDuct from "./assets/plugins/DrawDuct.png";
import ACH from "./assets/plugins/ACH.png";
import AICHATBOT from "./assets/plugins/AICHATBOT.png";
import AutoSwitches from "./assets/plugins/AutoSwitches.png";
import ClazyPlugin from "./assets/plugins/Clazy.png";
import cad2revitimg from "./assets/plugins/MEP to CAD.png";
import solarpanelsimg from "./assets/plugins/pv.png";
import neom from "./assets/plugins/Neom.png";
import fw from "./assets/plugins/formworkautomation.png";
import autocadtoexcel from "./assets/plugins/autocadtoexcel.png";

export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mohamed Etman",
  tagline: "I'm a Software Developer",
  img: profile,
  about: `I specialize in developing desktop applications using C# (WPF/XAML)`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mohamedalyetman/",
  github: "https://github.com/Mohamedetman1998",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Developer",
    Company: `ECG`,
    Location: "Egypt",
    Type: "Full Time",
    Duration: "Oct 2023 - Present",
  },
  {
    Position: "HVACS Engineer",
    Company: `BIM EXPERTS GmbH`,
    Location: "Austria",
    Type: "Hybrid",
    Duration: "Jan 2022 - Jan 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Software Development",
    Company: "Information technology institute",
    Location: "Egypt",
    Type: "Hybrid",
  },
  {
    Position: "Mechanical Engineer",
    Company: "HTI",
    Location: "Egypt",
    Type: "Offline",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  Csharp: Csharp,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Clazy Desktop Software & Website",
    image: ClazyApp,
    description: `Developed a comprehensive website and desktop software tailored to engineering company , facilitate Building Information Modeling (BIM) 
    coordination workflows, the desktop software uploads data to website through WebAPI`,
    techstack:
      "C#/XAML/WPF/MVVM/ASP.NET/MVC /Javascript/Bootstrap/HTML/CSS/Rest API and Web API",
    videoUrl: "https://www.youtube.com/watch?v=dJAv8QbNCb0",
  },
  {
    title: "Forge Model Viewer",
    image: Forge,
    description: `After attending APS Bootcamp by Autodesk I made a Forge viewer, with this viewer you can upload any Revit model and view it on the 
    internet also there is a version controlled so whenever model is updated on cloud it will be updated automatically`,
    techstack:
      "C#/ASP.NET/ASP.NET Core/MVC/Web API/Javascript/Bootstrap and Rest API",
    videoUrl: "https://youtu.be/gWZDwB21ITU",
  },
];

export const addinDetails = [
  {
    title: "Ai Chatbot",
    image: AICHATBOT,
    description: `Integrate an AI-driven chatbot into your BIM workflow, providing intelligent assistance and streamlining communication for effective coordination.`,
    techstack: "C#/XAML/WPF",
    videoUrl: "https://youtu.be/5j5mhRQF0uY",
  },
  {
    title: "Wall Dimension",
    image: WallDimension,
    description: `Enhance precision in BIM projects with the Wall Dimension addin, simplifying the process of accurately measuring and documenting wall dimensions.`,
    techstack: "C#/XAML/WPF",
    videoUrl: "https://youtu.be/bZBdtu24vtE",
  },
  {
    title: "Auto Switches",
    image: AutoSwitches,
    description: `Streamline electrical design in BIM with Auto Switches, an automation tool that intelligently places and configures switches for efficient electrical systems.`,
    techstack: "C#/XAML/WPF",
    videoUrl: "https://youtu.be/SE1yNjsqSkA",
  },

  {
    title: "Solar Panels Automation",
    image: solarpanelsimg,
    description: `Distribute solar panels along a chosen boundary, avoiding the need for numerous arrays and copy-pasting , especially in large projects.`,
    techstack: "C#/XAML/WPF",
    videoUrl: "https://youtu.be/11cKwka-C-Q",
  },
  {
    title: "MEP From AutoCAD To Revit",
    image: cad2revitimg,
    description: `Improve ductwork design efficiency by seamlessly drawing MEP from CAD models, ensuring accurate representation and enhanced collaboration in BIM projects.`,
    techstack: "C#/XAML/WPF",
    videoUrl: "https://www.youtube.com/watch?v=lHfBY1ZLOSM",
  },
  {
    title: "Views And Sheets For NEOM Project",
    image: neom,
    description: `I've created views and sheets for infrastructure project in NEOM which wasnt possible using manual procedure.`,
    techstack: "C#/XAML/WPF",
    videoUrl: "https://youtu.be/emGkndl6asM",
  },
  {
    title: "GIS AutoCAD To Excel",
    image: autocadtoexcel,
    description: `A plugin that export all drainage pipes/manhole/fittings/  houseconnection to excel in which will be exported to database.`,
    techstack: "C#/XAML/WPF",
    videoUrl: "https://www.youtube.com/watch?v=BtRLZQtoJUo",
  },
  {
    title: "Formwork Automation",
    image: fw,
    description: `I'm currently working on plugin made for formwork automation , aims to automate wall formwork / slab formwork / climbing systems`,
    techstack: "C#/XAML/WPF",
  },
];
// Enter your Contact Details here
export const contactDetails = {
  email: "Mohamedetman603@gmail.com",
  phone: "+20 1099363811",
};

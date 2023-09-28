// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#034190 ,#4484ce, #2F04D2, #8294F9",
  firstName: "Jerry",
  middleName: "",
  lastName: "Wu",
  message: " Engineer | Programmer | C++ Python Java Developer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/iamjerrywu/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/i.am.jerrywu/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/i.am.jerrywu/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shenghaowu/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/iamjerrywu/",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/channel/UCpQ10p282aoMuIucPzs_Gvw",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jerrywu.png"),
  imageSize: 375,
  message:
    "My name is Jerry (ShengHao) Wu, a Senior Software Engineer in Ambarella. I have over 5 years of professional experience as a software developer, and I'm passionate about the field of system, compiler and embedded software.",
  resume: "https://drive.google.com/file/d/1o84ycC0EixW-m4LKP2gnJplL1aAThkhp/view",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Selected Projects",
  gitHubUsername: "iamjerrywu", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/jerrywu.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/jerrywu.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C/C++", value: 90 },
    { name: "Python", value: 90 },
    { name: "Java", value: 85 },
    { name: "JavaScript", value: 75 },
    { name: "React", value: 75 },
    { name: "Hack/PHP", value: 75 },
    { name: "HTML/CSS", value: 60 },
    { name: "SQL", value: 60 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 90 },
    { name: "Adaptability", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Communication", value: 80 },
    { name: "Leadership", value: 80 },
    { name: "Goal-Oriented", value: 80 },
    { name: "Positivity", value: 75 },
    { name: "Creativity", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for experienced software engineer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "iamjerrywu188@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/ambarella.png'),
      date: 'Feb 2023 – Present',
    },
    {
      role: 'Solutions Engineer Intern',// Here Add Company Name
      companylogo: require('../assets/img/meta.png'),
      date: 'May 2022 – Aug 2022',
    },
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/mediatek.png'),
      date: 'Sep 2016 – Jun 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

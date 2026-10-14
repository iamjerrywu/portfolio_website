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
  message: "Senior Software Engineer @ Ambarella | ML Compilers & AI System | ex-Meta, ex-MediaTek | CMU",
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
    "Senior Software Engineer specializing in ML Compilers, AI Inference Acceleration, and Edge Systems, with 8.5+ years of experience bridging deep learning models with custom silicon.",
  resume: require("../editable-stuff/Sheng_Hao_Wu_Resume_2027.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Selected Projects",
  gitHubUsername: "iamjerrywu", //i.e."johnDoe12Gh"
  reposLength: 0,
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
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Compiler Optimizations", value: 94 },
    { name: "Graph IR Transformations", value: 92 },
    { name: "Compiler Auto‑Tuning", value: 91 },
    { name: "DAG Scheduling", value: 90 },
    { name: "Operator Lowering & Decomposition", value: 90 },
    { name: "Memory Planning & Buffer Allocation", value: 89 },
    { name: "Python, Pytorch", value: 88 },
    { name: "C++", value: 87 },
    { name: "Hardware Acceleration (NPU/VPU, Edge AI)", value: 86 },
    { name: "Quantization & Low‑Precision", value: 85 },
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
  message: "I'm actively seeking senior roles focused on ML compiler development, AI inference acceleration, and edge system design. If you have relevant opportunities or questions, please email me at",
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

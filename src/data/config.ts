const config = {
  title: "Poloju Adharsh Chary | Full Stack Developer",
  description: {
  long:
    "Explore the portfolio of Poloju Adharsh Chary, a Full Stack Developer and AI enthusiast specializing in React, Next.js, Python, FastAPI, Java, Machine Learning, and modern web applications. Discover my projects, technical skills, and professional journey.",
  short:
    "Portfolio of Poloju Adharsh Chary, Full Stack Developer and AI Enthusiast.",
},
keywords: [
  "Poloju Adharsh Chary",
  "Full Stack Developer",
  "Software Developer",
  "AI Developer",
  "AI Interview Guide",
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "Java",
  "MySQL",
  "Tailwind CSS",
  "Portfolio",
  "Web Developer",
  "Machine Learning",
],
  author: "Poloju Adharsh Chary",
  email: "polojuadharshchary@gmail.com",
  site: "http://localhost:3000",

  // for github stars button
  githubUsername: "poloju-adharshchary",
  githubRepo: "ai-interview-guide-deployment1",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://www.instagram.com/polojuadharshchary/?hl=en",
    linkedin: "https://www.linkedin.com/in/poloju-adharsh-chary-73ba88324/",
    instagram: "https://www.instagram.com/polojuadharshchary/?hl=en",
    facebook: "https://www.facebook.com/profile.php?id=100075999729172",
    github: "https://github.com/poloju-adharshchary",
  },
};
export { config };

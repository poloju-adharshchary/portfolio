import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import {
  SiThreedotjs,
  SiCss3,
  SiVite,
  SiAxios,
  SiFastapi,
  SiMysql,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

/* ---------------------------------------------------------
   Skill Icon
--------------------------------------------------------- */

const MaskIcon = ({
  src,
  title,
}: {
  src: string;
  title?: string;
}) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

/* ---------------------------------------------------------
   Project Links
--------------------------------------------------------- */

const ProjectsLinks = ({
  live,
  repo,
}: {
  live?: string;
  repo?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <a
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </a>
      )}

      {repo && repo !== "#" && (
        <a
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </a>
      )}
    </div>
  );
};

/* ---------------------------------------------------------
   Skill Type
--------------------------------------------------------- */

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

/* ---------------------------------------------------------
   Skill Helper
--------------------------------------------------------- */

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: (
    <MaskIcon
      src={`/assets/logos/${file}`}
      title={title}
    />
  ),
});

/* ---------------------------------------------------------
   YOUR PROJECT SKILLS
--------------------------------------------------------- */

const PROJECT_SKILLS = {
  /* ---------------- FRONTEND ---------------- */

  react: brand("React.js", "react-mono.svg"),

  javascript: brand(
    "JavaScript",
    "javascript-mono.svg"
  ),

  css: {
  title: "CSS",
  bg: "black",
  fg: "white",
  icon: <SiCss3 />,
},

vite: {
  title: "Vite",
  bg: "black",
  fg: "white",
  icon: <SiVite />,
},

axios: {
  title: "Axios",
  bg: "black",
  fg: "white",
  icon: <SiAxios />,
},

  /* ---------------- BACKEND ---------------- */

  python: brand(
    "Python",
    "python-mono.svg"
  ),

  fastapi: {
  title: "FastAPI",
  bg: "black",
  fg: "white",
  icon: <SiFastapi />,
},

mysql: {
  title: "MySQL",
  bg: "black",
  fg: "white",
  icon: <SiMysql />,
},

  /* ---------------- AI ---------------- */

  ollama: {
    title: "Ollama",
    bg: "black",
    fg: "white",
    icon: (
      <span className="text-xs font-bold">
        Ollama
      </span>
    ),
  },

  qwen: {
    title: "Qwen 2.5",
    bg: "black",
    fg: "white",
    icon: (
      <span className="text-xs font-bold">
        Qwen
      </span>
    ),
  },

  groq: {
    title: "Groq",
    bg: "black",
    fg: "white",
    icon: (
      <span className="text-xs font-bold">
        Groq
      </span>
    ),
  },

  llama: {
    title: "Llama 3.3",
    bg: "black",
    fg: "white",
    icon: (
      <span className="text-xs font-bold">
        Llama
      </span>
    ),
  },

  whisper: {
    title: "Faster Whisper",
    bg: "black",
    fg: "white",
    icon: (
      <span className="text-xs font-bold">
        Whisper
      </span>
    ),
  },

  /* ---------------- AUTH / API ---------------- */

  restApi: {
    title: "REST API",
    bg: "black",
    fg: "white",
    icon: (
      <span className="text-xs font-bold">
        REST
      </span>
    ),
  },

  oauth: {
    title: "OAuth",
    bg: "black",
    fg: "white",
    icon: (
      <span className="text-xs font-bold">
        OAuth
      </span>
    ),
  },

  /* ---------------- OTHER ---------------- */

  reactRouter: {
    title: "React Router",
    bg: "black",
    fg: "white",
    icon: (
      <span className="text-xs font-bold">
        Router
      </span>
    ),
  },

  recharts: {
    title: "Recharts",
    bg: "black",
    fg: "white",
    icon: (
      <span className="text-xs font-bold">
        Charts
      </span>
    ),
  },

  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: (
      <span className="text-xs font-bold">
        Motion
      </span>
    ),
  },

  lottie: {
    title: "Lottie",
    bg: "black",
    fg: "white",
    icon: (
      <span className="text-xs font-bold">
        Lottie
      </span>
    ),
  },

  /* Graphical Password project skills */

  node: brand(
    "Node.js",
    "nodedotjs-mono.svg"
  ),

  express: brand(
    "Express.js",
    "express-mono.svg"
  ),

  /* Portfolio */

  next: brand(
    "Next.js",
    "nextdotjs-mono.svg"
  ),

  tailwind: brand(
    "Tailwind CSS",
    "tailwind-css-mono.svg"
  ),

  motion: brand(
    "Motion",
    "motion.svg"
  ),

  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },

  aceternity: {
    title: "Aceternity UI",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
};

/* ---------------------------------------------------------
   Project Type
--------------------------------------------------------- */

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

/* ---------------------------------------------------------
   PROJECTS
--------------------------------------------------------- */

const projects: Project[] = [

  /* ========================================================
     PROJECT 1
     ======================================================== */

  {
    id: "ai-interview-guide",

    category: "Generative AI / Full Stack",

    title: "AI Interview Guide",

    src: "/assets/projects-screenshots/ai-interview-guide/landing.png",

    screenshots: [
      "landing.png",
      "login.png",
      "interviewsetup.png",
      "interview.png",
      "chatwithai.png",
      "analytics.png",
      "history.png",
    ],

    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.reactRouter,
        PROJECT_SKILLS.axios,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.lottie,
        PROJECT_SKILLS.recharts,
      ],

      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.restApi,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.ollama,
        PROJECT_SKILLS.qwen,
        PROJECT_SKILLS.groq,
        PROJECT_SKILLS.llama,
        PROJECT_SKILLS.whisper,
        PROJECT_SKILLS.oauth,
      ],
    },

    live:
      "https://ai-interview-guide-deployment1.vercel.app/",

    github:
      "https://github.com/poloju-adharshchary/ai-interview-guide-deployment1",

    get content() {
      return (
        <div>

          <TypographyP className="font-mono text-2xl text-center">
            An AI-powered interview preparation platform that
            simulates real interviews, evaluates candidate answers,
            provides personalized feedback, and tracks interview
            performance.
          </TypographyP>

          <TypographyP className="font-mono">
            Built as a full-stack application using React.js and
            Vite on the frontend, with a Python FastAPI backend and
            MySQL database. The platform combines offline and
            online Large Language Models, speech-to-text processing,
            authentication, interview analytics, and an AI assistant
            into a single interview preparation system.
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
          />

          <TypographyH3 className="my-4 mt-8">
            AI-Powered Interview Simulation
          </TypographyH3>

          <p className="font-mono mb-2">
            Users can configure an interview by selecting their
            preferred role, difficulty level, and interview settings.
            The system generates interview questions dynamically and
            evaluates the candidate's responses using AI.
          </p>

          <p className="font-mono mb-2">
            The evaluation system provides a score, detailed
            feedback, improvement suggestions, and an ideal answer,
            allowing users to understand their strengths and
            weaknesses after every interview.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/ai-interview-guide/interviewsetup.png`,
              `${BASE_PATH}/ai-interview-guide/interview.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Multi-Model AI Integration
          </TypographyH3>

          <p className="font-mono mb-2">
            The platform supports both local and online AI models.
            Ollama with Qwen 2.5 3B is used for local/offline AI
            processing, while Groq with Llama 3.3 70B provides
            access to a high-performance online LLM.
          </p>

          <p className="font-mono mb-2">
            This architecture allows the application to provide
            AI-powered interview generation, answer evaluation,
            conversational assistance, and AI-generated responses
            without depending entirely on a single AI provider.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Voice-Based Interview Interaction
          </TypographyH3>

          <p className="font-mono mb-2">
            The interview system supports voice interaction using
            browser audio APIs and Faster Whisper for speech-to-text
            conversion. Users can record their answers and convert
            spoken responses into text for AI evaluation.
          </p>

          <p className="font-mono mb-2">
            Browser speech synthesis is also used to provide spoken
            interviewer responses, creating a more interactive
            interview experience.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/ai-interview-guide/interview.png`,
              `${BASE_PATH}/ai-interview-guide/chatwithai.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            AI Interview Assistant
          </TypographyH3>

          <p className="font-mono mb-2">
            The platform includes an AI assistant where users can
            interact with the system for interview preparation,
            technical questions, explanations, and general guidance.
          </p>

          <p className="font-mono mb-2">
            The assistant supports different AI modes and can also
            use web search to retrieve current information before
            generating a response.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Performance Analytics
          </TypographyH3>

          <p className="font-mono mb-2">
            Interview sessions and answers are stored in MySQL so
            users can review their previous interviews and track
            their progress over time.
          </p>

          <p className="font-mono mb-2">
            Interactive charts provide performance insights such as
            interview scores and historical performance, helping
            users identify areas that require improvement.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/ai-interview-guide/analytics.png`,
              `${BASE_PATH}/ai-interview-guide/history.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Authentication & User Management
          </TypographyH3>

          <p className="font-mono mb-2">
            The application includes user registration and login,
            password hashing, profile management, session handling,
            and social authentication through Google and GitHub.
          </p>

          <p className="font-mono mb-2">
            User-specific interview sessions, answers, analytics,
            and AI chat history are persisted in the relational
            database.
          </p>

        </div>
      );
    },
  },

  /* ========================================================
     PROJECT 2
     ======================================================== */

  {
    id: "graphical-password",

    category: "Cybersecurity",

    title: "Graphical Password Authentication System",

    src:
      "/assets/projects-screenshots/graphical-password/landing.png",

    screenshots: [
      "landing.png",
      "login.png",
    ],

    skills: {
      frontend: [
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.css,
      ],

      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },

    live: "#",

    github:
      "https://github.com/poloju-adharshchary/Graphical-Password-Authentication",

    get content() {
      return (
        <div>

          <TypographyP className="font-mono text-2xl text-center">
            A graphical password authentication system designed
            as an alternative to traditional text-based password
            authentication.
          </TypographyP>

          <TypographyP className="font-mono">
            The project focuses on graphical authentication, where
            users interact with visual elements as part of the
            authentication process instead of relying only on
            conventional text passwords.
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
          />

          <TypographyH3 className="my-4 mt-8">
            Graphical Authentication
          </TypographyH3>

          <p className="font-mono mb-2">
            The system provides a graphical-based authentication
            mechanism where the user's selected visual information
            is used as part of the login process.
          </p>

          <p className="font-mono mb-2">
            This approach explores an alternative authentication
            method intended to make password interaction more
            visual and less dependent on memorizing conventional
            character sequences.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/graphical-password/landing.png`,
              `${BASE_PATH}/graphical-password/login.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Authentication Workflow
          </TypographyH3>

          <p className="font-mono mb-2">
            The application separates the authentication workflow
            into registration and login processes and validates
            the user's graphical authentication information during
            sign-in.
          </p>

          <p className="font-mono mb-2">
            The frontend communicates with the backend through
            application APIs to process authentication requests and
            maintain the application's user flow.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Full-Stack Architecture
          </TypographyH3>

          <p className="font-mono mb-2">
            The application uses a JavaScript-based frontend and
            Node.js backend architecture, allowing the graphical
            authentication interface and server-side authentication
            logic to work together as a single application.
          </p>

        </div>
      );
    },
  },

  /* ========================================================
     PROJECT 3
     ======================================================== */

  {
    id: "portfolio",

    category: "Personal Portfolio",

    title: "Personal Portfolio Website",

    src:
      "/assets/projects-screenshots/portfolio/landing.png",

    screenshots: [
      "landing.png",
      "navbar.png",
      "skills.png",
      "projects.png",
      "project.png",
    ],

    skills: {
      frontend: [
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.aceternity,
      ],

      backend: [],
    },

    live:
      "https://portfolio-liard-three-o77n75o4ns.vercel.app/",

    github:
      "https://github.com/poloju-adharshchary/portfolio",

    get content() {
      return (
        <div>

          <TypographyP className="font-mono text-2xl text-center">
            A modern interactive developer portfolio designed to
            showcase my skills, projects, technical experience,
            and development journey.
          </TypographyP>

          <TypographyP className="font-mono">
            Built with a modern React and Next.js-based frontend,
            the portfolio focuses on interactive animations,
            responsive layouts, project showcases, technical skill
            visualization, and an immersive visual experience.
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
          />

          <TypographyH3 className="my-4 mt-8">
            Interactive Hero Experience
          </TypographyH3>

          <p className="font-mono mb-2">
            The landing section introduces my developer profile
            through an animated interface rather than a simple
            static portfolio layout.
          </p>

          <p className="font-mono mb-2">
            Motion effects and interactive visual elements are used
            throughout the page to create a more engaging browsing
            experience.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/navbar.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Skills Showcase
          </TypographyH3>

          <p className="font-mono mb-2">
            The portfolio presents my technical skills through an
            interactive visual section, making technologies easier
            to explore than a traditional text-only skills list.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Project Showcase
          </TypographyH3>

          <p className="font-mono mb-2">
            Projects are displayed with dedicated project pages
            containing screenshots, technology stacks, descriptions,
            GitHub repositories, and live project links.
          </p>

          <p className="font-mono mb-2">
            The project section is designed so visitors can quickly
            understand what each application does and the
            technologies used to build it.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Modern UI & Animations
          </TypographyH3>

          <p className="font-mono mb-2">
            The website uses Tailwind CSS, Motion-based animations,
            and interactive 3D elements to create a modern,
            responsive developer portfolio rather than a basic
            static resume page.
          </p>

        </div>
      );
    },
  },
];

export default projects;
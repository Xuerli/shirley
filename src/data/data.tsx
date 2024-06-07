import {
  AcademicCapIcon,
  MailIcon,
  DownloadIcon,
//   FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';
//import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import {papers} from './papers';
import profilepic from '../images/profile.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
  ActivityItem,
  PublicationItems,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Research: 'Research',
  Resume: 'resume',
  Testimonials: 'testimonials',
  Publications: 'publications',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Xue Li.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a UK based PostDoctoral Researcher, currently working
        at  misinformation detection, knowledge representation  and automating logical theory repairing.
      </p>
{/*       <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"> */}
{/*         In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>, */}
{/*         plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '} */}
{/*         <strong className="text-stone-100">Vancouver Island</strong>. */}
{/*       </p> */}
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1A63PZsUHCYiIqnpJ5IO4474LxdC8lVVZ/view?usp=share_link',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a postdoctoral researcher working in AI having expertise in a wide range of related areas including formal logic, automated reasoning and natural language processing. I am passionate about engaging in both academic and industry collaborations, supervision and teaching.`,
  aboutItems: [
    {label: 'Employment', text: 'University of Edinburgh', Icon: OfficeBuildingIcon},
    {label: 'Email', text: 'xue.shirley.li@ed.ac.uk', Icon: MailIcon},
    {label: 'Location', text: 'Edinburgh, UK', Icon: MapIcon},
    {label: 'Interests', text: 'Reading, Jogging, Hiking, Knitting, DIY', Icon: SparklesIcon},
  ],
};


export const education: TimelineItem[] = [
  {
    date: 'September 2023 - Now',
    location: 'Edinburgh, UK',
    title: 'Masters in Psychology (Conversion, Part-time)',
    content: <p> I am studying Psychology part-time with a scholarship from the School of Informatics, the University of Edinburgh. Mental health plays 
              such an important role in human's daily life. Better mental health support will hugely improve lots of people's well-being. 
              However, support from human experts is limited compared with the need in society. Thus, I hope to apply AI technologies to assist 
              Psychological experts for better mental health support. To make a better combination of AI with Psychology, I decided to take this 
              MSc course to learn the knowledge from the field of Psychology. </p>
    },
  {
    date: 'June 2016 - June 2021',
    location: 'School of Informatics, the University of Edinburgh',
    title: 'PhD in Artificial Intelligence',
    content: <p>A domain-independent algorithm was developed for repairing faulty Datalog-like theories
by combining three existing techniques: abduction, belief revision and conceptual
change (ABC). Based on devised mathematical models, the ABC system repairs faulty
theories with better results than the individual techniques it combines because of its
various operations: 1) add/delete axioms; 2) add/delete preconditions from rules; 3)
change the language of the theory. Furthermore, ABC has wide applications, e.g.
modelling game theory by abductively explaining given observations; root-cause
analysis in system maintenance, and it has the potential to be extended to data in other
formats.
 </p>
    },
   {
    date: 'September 2011 - July 2013',
    location: 'Harbin Institute of Technology, China',
    title: 'Masters in Electronic and Communication Engineering',
    content: <p> I studied courses including Signoal Detection and Processing; Rada Systems, ect.
    My dissertation was about the development of a software system with UI, which forecasts the power range of high-
frequency surface wave radar (HFSWR). Based on the mechanism of HFSWR
detection, simulation models were established for the surface wave propagation, target
echo, clutter jamming (environmental noise and sea clutter) and the signal-noise ratio
of HFSWR. It was implemented in C/C# and Fortran languages. As a result, the user
interface software predicts the scope of HFSWR. </p>
   },
  {
    date: 'September 2007 - July 2011',
    location: 'Harbin University of Science and Technology, China',
    title: 'Undergraduate in Communication Engineering',
    content: <p> I learnt foundation courses including Physics; Advanced Mathmatics and electrical engineering, ect.
    My dissertation was about the development of a face recognition algorithm based on machine learning was implemented based on
machine learning algorithms, Discrete Cosine Transformation and Principal Component
Analysis, in MATLAB.</p>
   },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feburary 2021 - Present',
    location: 'School of Informatics, the University of Edinburgh',
    title: 'PostDoctoral Researcher',
    content: (
      <p>
        Conducting Research and supervising students based on projects including 1) Extending the ABC automated repair system to address
system failures based on the Knowledge Graphs; 2) Applying the ABC automated theory repairing system to legislation revision for autonomous vehicles; 3) Applying large lanugage models to detecting misinformation in counterfactual conditional claims.
      </p>
    ),
  },
  {
    date: 'November 2019 - Feb 2021',
    location: 'Huawei Technologies Research & Development (UK) Ltd',
    title: 'Researcher Internship',
    content: (
      <p>
       Worked as an intern researcher on 1) aligning different knowledge graphs; 2) Analysing peer products to seek for new features; 3) Communicating with
with other teams w.r.t. project development.
      </p>
    ),
  },
  {
     date: 'April 2017 – June 2018',
    location: 'TheoryMine Ltd. (UK, Part-time)',
    title:'Software Engineer',
    content:(
    <p>
    Developed scripts which generate Chinese versions of theorem certificates, as well as
essential web maintenance.
    </p>
    ),
  },
  {
    date: 'July 2015 - August 2013',
    location: 'Huawei Technologies Co., Ltd.',
    title: 'Software Engineer',
    content: (
      <p>
        My main work included software development and project management.
      </p>
    ),
  },
];


/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: '',
    skills: [
      {
        name: 'Mandarin',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      },
    ],
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '',
      text: '',
      image: '',
    },
  ],
};


export const projects: TimelineItem[] = [
    {
    date: 'April 2022 - December 2024',
    location: 'Superviser: Björn Ross (Primary), Vashak Belle',
    title: 'Misinformation Detection via LLM',
    content: <p> By integrating approaches from different subfields of computer science, namely, computational logic, deep learning, natural language processing and knowledge graphs (KGs), I am developing a detector to debunk misinformation on social media. Particularly, I focus on claims that involve the logic of causality. (e.g. “this would never have happened if…”).
</p>
   },
   {
    date: 'October 2023 - April 2024',
    location: 'Superviser: Alan Bundy (Primary)',
    title: 'Automated theory repair in legislation revision',
    content: <p> I supervised two Research Assistants and we conducted case studies on the application of the ABC repair system, an AI theory repair tool, to assist in constructing laws for autonomous vehicles (AVs) and adapting the system design of AVs to respect corresponding laws based on AVs’ simulations.
 </p>
   },
  {
    date: 'Feb 2021 - Feb 2022 (Part-time)',
    location: 'Superviser: Alan Bundy (Primary); Jeff Pan',
    title: 'TREAT',
    content: <p> I applied the ABC repair system to the root-cause analysis of system failures, which detects and adds missing information first and then suggests solutions to repair root causes. As the maintenance of a large system is expensive, our work contributes to making the task interactive between the ABC system and domain experts. Our team also worked on automatic KG construction with probabilities. </p>
    },

  {
    location: 'Primary Superviser: Alan Bundy ',
    date: 'June 2016 - November 2020',
    title: 'Automating theory repair',
    content: <p>My second supervisors were Ewen Maclean (2016); Alan Smaill (2017-2019) and Eugene Philalithis (2019-2020).
    In this project, a domain-independent algorithm was developed for repairing faulty Datalog-like theories
by combining three existing techniques: abduction, belief revision and conceptual
change (ABC). Based on devised mathematical models, the ABC system repairs faulty
theories with better results than the individual techniques it combines because of its
various operations: 1) add/delete axioms; 2) add/delete preconditions from rules; 3)
change the language of the theory. Furthermore, ABC has wide applications, e.g.
modelling game theory by abductively explaining given observations; root-cause
analysis in system maintenance, and it has the potential to be extended to data in other
formats.</p>
    },
];




export const otherActivities: ActivityItem[] = [
  {
    title: <p>Talks coordinator for <a href="https://www.turing.ac.uk/research/interest-groups/neuro-symbolic-ai">the Neuro-symbolic AI Group in the Alan Turing Institute</a>.</p>,
    date: ' June 2024-  Now',
    content: <p></p>
    },
  {
    title: <p>Invited Speaker at <a href="https://www.lamda.nju.edu.cn/ijclr24/">the 4th International Joint Conference on Learning and Reasoning (IJCLR) 2024</a>.</p>,
    date: ' 2024 -  2024',
    content: <p></p>
    },
  {
    title: <p>Chair of <a href="https://xuerli.github.io/BAIPSY/">the workshop on Bridging AI and Psychology (BAIPsy) 2024</a>.</p>,
    date: 'April 2024 - July 2024',
    content: <p></p>
    },
  {
    title: <p>Guest Speaker at the course on <a href="http://www.drps.ed.ac.uk/23-24/dpt/cxefie11080.htm">Evidence, Argument and Persuasion in a Digital Age (EFI)</a>.</p>,
    date: 'Jan 2023 - Now',
    content: <p></p>
    },
   {
    title: <p>Guest Editor of Machine Learning Journal, Special Issue.</p>,
    date: 'Jan 2023 - Now',
    content: <p></p>
    },
    {
    title: <p> Co-organiser of <a href="https://cognitive-ai.netlify.app/">the International CogAI 2023 Workshop</a>. </p>,
    date: 'Jan 2023 - Feb2024',
    content:<p></p>
    },
    {
    title: <p>Primary or Second Supervisor of MSc and Undergraduate Projects.</p>,
    date: 'Jan 2021 - Now',
    content: <p></p>
    },
 ];

export const publications: PublicationItems[] = papers;

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'GoogleScholar', Icon: AcademicCapIcon, href: 'https://www.research.ed.ac.uk/en/persons/xue-li-2'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Xuerli'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/xue-li-318999113/'},
];

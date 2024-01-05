import {
  AcademicCapIcon,
//   CalendarIcon,
  DownloadIcon,
//   FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';
import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
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
  Contact: 'contact',
  Research: 'Research',
  Resume: 'resume',
  Testimonials: 'testimonials',
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
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a postdoctoral researcher working in AI having expertise in a wide range of related areas including formal logic, natural language processing and probabilistic programming. I am passionate about engaging in both academic and industry collaborations, supervision and teaching.`,
  aboutItems: [
    {label: 'Location', text: 'Edinburgh, UK', Icon: MapIcon},
    {label: 'Interests', text: 'Reading, Jogging, Hiking, Knitting, DIY', Icon: SparklesIcon},
    {label: 'Employment', text: 'University of Edinburgh', Icon: OfficeBuildingIcon},
    {label: 'Study', text: 'University of Edinburgh', Icon: AcademicCapIcon},
  ],
};


export const education: TimelineItem[] = [
  {
    date: 'September 2023 - Now',
    location: 'Edinburgh, UK',
    title: 'Masters in Psychology (Conversion)',
    content: <p> I am studying Psychology in part-time.</p>
    },
  {
    date: 'July 2021 - June 2020',
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
    name: 'Spoken languages',
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
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
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
    date: 'June 2016 - June 2020',
    location: 'Superviser: Alan Bundy (Premary); Ewen Maclean; Alan Smaill; Eugene Philalithis',
    title: 'Automating theory repair',
    content: <p>A domain-independent algorithm was developed for repairing faulty Datalog-like theories
by combining three existing techniques: abduction, belief revision and conceptual
change (ABC). Based on devised mathematical models, the ABC system repairs faulty
theories with better results than the individual techniques it combines because of its
various operations: 1) add/delete axioms; 2) add/delete preconditions from rules; 3)
change the language of the theory. Furthermore, ABC has wide applications, e.g.
modelling game theory by abductively explaining given observations; root-cause
analysis in system maintenance, and it has the potential to be extended to data in other
formats.</p>
    },
  {
    date: 'Feb 2021 - Feb 2022 (Part-time)',
    location: 'Superviser: Alan Bundy (Premary); Jeff Pan',
    title: 'TREAT',
    content: <p>TREAT project.
 </p>
    },
   {
    date: 'October 2023 - April 2024',
    location: 'Superviser: Alan Bundy (Premary)',
    title: 'Automated theory repair in legislation revision',
    content: <p> in autonomous vehicle. </p>
   },
  {
    date: 'April 2023 - Dec 2024',
    location: 'Superviser: Björn Ross (Premary), Vashak Belle',
    title: 'Misinformation Detection via LLM',
    content: <p> Misinformation detection in counterfactual conditional claims.</p>
   },
];



export const supervision: TimelineItem[] = [
  {
    date: 'Dec 2023 - Now',
    location: 'Research Assistant Project',
    title: 'Automated translating laws into FOL theories',
    content: <p>Pak Yin Chan.</p>
    },
  {
    date: 'Sep 2023 - Now',
    location: 'Research Assistant Project',
    title: 'Claim detection',
    content: <p>Siyu's project.
 </p>
    },
   {
    date: 'Feb 2021 - Feb 2024',
    location: 'PhD Project',
    title: 'Knowledge base update',
    content: <p> in autonomous vehicle. </p>
   },
  {
    date: 'Feb 2021 - Feb 2024',
    location: 'PhD Project',
    title: 'Knowledge Graph Construction',
    content: <p> KGC.</p>
   },
   {
    date: 'Sep 2022 - Apr 2023',
    location: 'Undergraduate Project',
    title: 'Misinformation detection',
    content: <p> KGC.</p>
   },
   {
    date: 'June 2022 - July 2022',
    location: 'MSc Project',
    title: 'Extending ABC from Datalog to FOL',
    content: <p> .</p>
   },
   {
    date: 'June 2022 - July 2022',
    location: 'MSc Project',
    title: 'Symbolic Grounding via LLMs',
    content: <p> .</p>
   },
   {
    date: 'Feb 2022 - Aug 2022',
    location: 'MSc Project',
    title: 'Probablistic ABC',
    content: <p> KGC.</p>
   },
];

export const otherActivities: TimelineItem[] = [
  {
    date: 'Jan 2023 - Now',
    location: 'Role: Co-organiser',
    title: 'Organisation',
    content: <p>CogAI 2023.</p>
    },
   {
    date: 'Jan 2023 - Now',
    location: 'Role: Guest Editor',
    title: '',
    content: <p>Guest editor of Machine Learning Journal, Special Issue.</p>
    },
 ];

export const publications: PublicationItems[] = [
  {
    title: 'PAPER',
    author: <p>Xue Li</p>,
    publisher: 'The University of Edinburgh'
    },
 ];
/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'xue.shirley.li@ed.ac.uk',
      href: 'xue.shirley.li@ed.ac.uk',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Xue Li',
      href: 'https://www.linkedin.com/in/xue-li-318999113/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'GoogleScholar', Icon: GoogleScholarIcon, href: 'https://scholar.google.com/citations?user=Awp-a4QAAAAJ&hl=en'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Xuerli'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/xue-li-318999113/'},
];

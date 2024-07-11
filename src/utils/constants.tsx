import { Project } from "@/components/ProjectCard"
import { Resource } from "@/components/ProjectsSubHeader"
import {
  TbBrandAdobe,
  TbBrandAws,
  TbBrandFramer,
  TbBrandGraphql,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandTailwind,
  TbBrandTypescript,
  TbLetterA,
  TbLetterN,
  TbLetterS,
  TbLetterT,
} from "react-icons/tb"

export const resume = [
  {
    company: "Ruvos",
    urls: ["https://ruvos.com", "https://objectvision.ai/"],
    role: "Full Stack Engineer",
    dates: {
      start: "May 2023",
      end: "Present",
    },
    location: "Tallahassee, FL",
    description:
      "At Ruvos I have lead the frontend and portions of the backend development for a multiple projects including ObjectVision, WellConnector, and a Federal and State-level grant application tool.",
    accomplishments: [
      "Leading architecture and frontend development of AI/ML website for finding and applying to federal and state-level grants",
      "Led development of ObjectVision (OVAI), an anomaly detection application used to monitor AWS resources for large agencies eg. AIMS (APHL)",
      "Built system capable of real-time anomaly detection in a data stream of millions of events per day using OpenSearch, GraphQL, AppSync, Kinesis,EventBridge, DynamoDB, and Lambda (NodeJS & Python)",
      "Designed, built, and deployed ObjectVision frontend using NextJS,TailwindCSS, Cognito, FramerMotion, ReactQuery, and MakUi",
    ],
  },
  {
    company: "SMST Corp.",
    urls: ["https://smstanner.com"],
    role: "Design & Development Consultant",
    dates: {
      start: "March 2021",
      end: " Present",
    },
    location: "Bend, OR",
    description:
      "I formed SMST Corp as a general contracting company for my freelance engineering and digital design work. Within SMST Corp I have brought cookware companies, AI software packages, and non-profit brands to life.",
    accomplishments: [
      "Designed brand guidelines for Mesa Cookware, hired industrial designers, managed overseas manufacturing, and launched a multi-product cookware line in B2C and B2B markets",
      "Rebuilt entire frontend system for Snipr.ai, a DataShapes company, managing project scope, architecture, and development, and brought a brand new product to clients in 6 months",
      "Completed full brand refresh for PaleoHacks, a B2C health and wellness brand, delivering a brand book complete with new logo, color palette, and typography",
      "Currently working with the University of Washington to rebrand an international conference focused on the intersection between native peoples and their ecologies",
    ],
  },
  {
    company: "Uplinq",
    urls: ["https://www.uplinq.com/"],
    role: "Frontend Developer I & II",
    dates: {
      start: "April 2022",
      end: "March 2023",
    },
    location: "Scottsdale, AZ",
    description:
      "Uplinq automates bookkeeping and financial reporting for small businesses. I was one of two frontend engineers responsible for building and maintaining our frontend application.",
    accomplishments: [
      "Built entire frontend application with one other developer, servicing thousands of enterprise customers",
      "Designed and implemented custom UI elements for querying, pagination, and filtering large financial data sets",
      "Integrated Stripe, Finch, Codat, and Auth0 APIs for secure streaming of sensitive financial data from our clients to our financial advisors",
      "Led data visualization implementation using the VisX graphics library,delivered fully custom financial charts with immediate, query-dependant updates",
    ],
  },
  {
    company: "BoviSync",
    urls: ["https://bovisync.com/"],
    role: "Full Stack Web Developer & Project Manager",
    dates: {
      start: "July 2021",
      end: "February 2022",
    },
    location: "Scottsdale, AZ",
    description:
      "Bovisync is a dairy herd management software that helps dairy farmers track their cows' diets, health, and production. I was responsible for building and maintaining the frontend and backend of the application, as well as managing the development team.",
    accomplishments: [
      "Managed DevOps project that resulted in a 50% decrease of monthly AWSexpenditures, and boosting application reliability and speeds",
      "Wire-framed, built, and deployed mobile-first web app for optimizing cow diets based on on-hand macro-nutrients using Django, GraphQL, and VueJS",
      "Spearheaded and delivered multi-year company objective to modernize data visualization service, aggregating data from multiple disparate micro-services using Django, Angular, and PlotlyJS",
      "Promoted to Engineering Manager led sprints, hiring, and product planning,increased headcount by 30% after departure of CTO and two senior developers",
    ],
  },
  {
    company: "Actualize",
    urls: ["https://anyonecanlearntocode.com/"],
    role: "Teaching Assistant & Mentor",
    dates: {
      start: "May 2021",
      end: "July 2022",
    },
    location: "Chicago, IL",
    description:
      "At Actualize I was responsible for helping students learn the fundamentals of web development, and guiding them through the process of building their own web applications.",
    accomplishments: [
      "Taught students how to ideate, architect, and build full stack web applications with CRUD API’s",
      "Focused on teaching proficiency in Ruby, Rails, Javascript, VueJS, andPostgreSQL",
      "Held private office hours to help students learn new topics or round-out understanding of concepts covered in class",
    ],
  },
  {
    company: "Actualize (Student)",
    urls: ["https://anyonecanlearntocode.com/"],
    role: "Web Development Student",
    dates: {
      start: "January 2021",
      end: "May 2021",
    },
    location: "Chicago, IL",
    description:
      "At Actualize I learned the fundamentals of web development, building my own full stack applications using Ruby on Rails and VueJS.",
    accomplishments: [
      "Learned fundamentals and best practices in full-stack web development in areas of project architecture, backend, frontend, and how to effectively self-teach new technologies",
      "Generated technical requirements and determined the most effective solutions, created wireframes, designed schema, and researched outside resources• Built and tested the backend, incorporating external APIs• Created pages and RESTful routes, made web requests to retrieve data,formatted and styled results, incorporated libraries and themes",
    ],
  },
  {
    company: "Joe Chocolate Co.",
    urls: ["https://www.instagram.com/joechocolateco/"],
    role: "Co-Founder & CEO",
    dates: {
      start: "March 2018",
      end: "December 2020",
    },
    location: "Seattle, WA",
    description:
      "Naturally caffeinated dark chocolate. Locally produced, nationally distributed, internationally enjoyed.",
    accomplishments: [
      "Started as a undergraduate class project, grew to a 7-figure ARR business with wholesale, retail, food-service operations",
      "Custom built majority of SquareSpace website using CSS, HTML, and vanillaJSBuilt and maintained CRM, fulfillment, and sales forecasting system usingAirTable and other GUI relational databases",
      "Drove wholesale business using my own CRM platform, enabling nation-wide fulfillment to retailers like Whole Foods, REI, and Nordstrom",
      "Managed wholesale and retail operations, employing over 20 staff membersOversaw construction and opened retail facility in Pike Place Market, serving50K+ customers per year",
    ],
  },
  {
    company: "Caveman Dirtbag Sponsorship",
    urls: [
      "https://www.garagegrowngear.com/blogs/brand-bios/joe-chocolate-co-caffeinated-calories-for-going-the-distance",
    ],
    role: "Founder",
    dates: {
      start: "March 2018",
      end: "May 2020",
    },
    location: "Seattle, WA",
    description:
      "A multi-brand collaborative partnership, fueling thru-hikers on the Pacific Crest Trail.",
    accomplishments: [
      "Created business co-op to sponsor thru-hikers on the PCT",
      "Partnered with Patagonia Seattle, Arc'teryx, Enlightened Equipment, and other outdoor brands",
      "Selected 2-4 hikers each year to receive cash, gear, and food in care-packages",
      "Recognized as preeminent sponsorship amongst thru-hikers and received hundreds of applications each year",
      "Sponsored hikers from countries including Brazil, New Zealand, and Israel",
    ],
  },
  {
    company: "CardSwapper",
    urls: ["https://www.crunchbase.com/organization/cardswapper"],
    role: "Co-Founder & CEO",
    dates: {
      start: "February 2013",
      end: "June 2016",
    },
    location: "Seattle, WA",
    description:
      "The world's first peer-to-peer trading platform for unused and unwanted gift cards",
    accomplishments: [
      "Hired and managed team to develop, and launch application gift card trading application on web and iOS app store",
      "Raised seed funding from Jones + Foster Accelerator and from private investors",
      "Wrote, submitted, and received patent from the United States Patent andTrademark Office for novel methods of digital gift card exchange",
      "Partnered with nations largest gift card liquidation platform to launch cash-for-cards feature",
    ],
  },
]

export const resourceObject: {
  [key in Resource]: {
    icon: JSX.Element
    description: string
    title: string
  }
} = {
  next: {
    icon: <TbBrandNextjs className="size-8" />,
    description:
      "I use NextJS for the majority of the projects I work on. I choose it regularly because it enables me to build web applications quickly and efficiently.",
    title: "Next.js",
  },
  tailwind: {
    icon: <TbBrandTailwind className="size-8" />,
    description:
      "Tailwind is my go-to CSS framework. I love it because it allows me to build beautiful and responsive designs without writing a lot of custom CSS.",
    title: "Tailwind CSS",
  },
  typescript: {
    icon: <TbBrandTypescript className="size-8" />,
    description:
      "I prefer TypeScript over JavaScript because it helps me catch errors before they happen. It also makes my code more readable and maintainable, and it helps me enforce consistency between my frontend and backend code.",
    title: "TypeScript",
  },
  python: {
    icon: <TbBrandPython className="size-8" />,
    description:
      "I use Python daily for a variety of tasks, including building lambdas for large-scale data processing, interacting with AI/ML models, and automating repetitive tasks.",
    title: "Python",
  },
  framer: {
    icon: <TbBrandFramer className="size-8" />,
    description:
      "I use Framer Motion to add animations to my web apps. I find that it makes my projects feel more polished and special for the end user.",
    title: "Framer Motion",
  },
  aws: {
    icon: <TbBrandAws className="size-8" />,
    description:
      "This is a bit of a blanket category... I a ton of the tools that AWS offers. Specifically, I spend a lot of time in OpenSearch, Lambda, S3, CloudFront, CloudFormation, and Cognito.",
    title: "Amazon Web Services & SDK",
  },
  graphql: {
    icon: <TbBrandGraphql className="size-8" />,
    description:
      "I am a massive fan of GraphQL. While I admit, it can totally be overkill for some apps, but when I am working with large amounts of data, it is a pivotal resource due to its ability to unify data-sources and specify only the data I need.",
    title: "GraphQL",
  },
  sst: {
    icon: (
      <span className="flex *:size-4 *:stroke-[3.8px]">
        <TbLetterS />
        <TbLetterS className="-mx-1" />
        <TbLetterT />
      </span>
    ),
    description:
      "SST is the tool I am the biggest fanboy of right now. It allows me to seamlessly manage my AWS resources and deploy full-stack applications with ease. I use it for all of my personal projects.",
    title: "Serverless Stack Toolkit",
  },
  adobe: {
    icon: <TbBrandAdobe className="size-8" />,
    description:
      "I have been using Adobe products for over 20 years. I am proficient in Photoshop, Illustrator, InDesign, and XD. I use these tools to create wireframes, mockups, and other design assets for my projects.",
    title: "Adobe Creative Cloud",
  },
  tanstack: {
    icon: (
      <span className="flex *:size-4 *:stroke-[3.8px]">
        <TbLetterT />
        <TbLetterA />
        <TbLetterN />
      </span>
    ),
    description:
      "I have yet to find a querying and caching tool that is as powerful and easy to use as TanStack. Any time I init a new project, I always start by importing ReactQuery and ReactTable.",
    title: "TanStack",
  },
}

export const projects: Project[] = [
  {
    title: "ObjectVision",
    sub_title: "Real-Time Anomaly Detection for AWS S3 Buckets",
    url: "https://objectvision.ai/",
    frontend_stack: [
      "NextJS",
      "TailwindCSS",
      "Framer Motion",
      "ReactQuery",
      "ReactTable",
    ],
    backend_stack: [
      "OpenSearch",
      "GraphQL",
      "AppSync",
      "Kinesis",
      "EventBridge",
      "DynamoDB",
      "Lambda (NodeJS & Python)",
      "Cognito",
      "SST",
    ],
    role: "Lead Full Stack Engineer & Architect",
    description:
      "ObjectVision is a real-time anomaly detection application used to monitor AWS resources for large agencies eg. AIMS (APHL). The system uses a complex set of algorithms to process tens of millions of events per day, and alert users when anomalies are detected. This anomaly detection system is fundamentally different from traditional monitoring systems, which purely rely on static thresholds and rules. ObjectVision uses per-event processing and statistical analysis to define normalcy and detect irregularities based on the metadata of each event. In future iterations of ObjectVision we plan to implement machine learning models to further enhance the anomaly detection capabilities.",
    magic:
      "What makes this project magic is the no-code interface that we present the user, distilling millions of events into a simple node diagram. This interactive graph allows the user to see what the normal flow of data should look like, and see where and how anomalies deviated from the norm. Users can also interact with this graph to adjust the sensitivity of the anomaly detection system, and to manually label events as normal to help train the system.",
    affiliation: "Ruvos",
  },
  {
    title: "GrantGetter",
    sub_title: "A Grant Finding and Application Tool",
    url: "<still in development>",
    frontend_stack: [
      "NextJS",
      "TailwindCSS",
      "Framer Motion",
      "ReactQuery",
      "ReactTable",
    ],
    backend_stack: [
      "GraphQL",
      "AppSync",
      "DynamoDB",
      "Lambda (Python)",
      "Cognito",
      "SST",
    ],
    role: "Lead Full Stack Engineer & Architect",
    description:
      "As many of us know, finding and applying to grants is a nightmare. The process is often opaque, and the requirements are often vague. To make matters worse, the websites that host these grants are often outdated and difficult to navigate, and the tools that exist to make the process easier are little more than pay-to-play web scrapers. GrantGetter is a tool that modernizes this user experience. We are building a tool that leverages the true power of AI/ML to help users find grants that they are eligible for but would never have found on their own, and guide them through the convoluted application process by pre-processing the grant's requirements and providing a step-by-step guide to completing the application.",
    magic:
      "The magic of GrantGetter is the models we are building that are able to categorize users and grants based on a variety of factors, and then match them based on their compatibility. This gives users a much broader, yet personalized, feed of grants that they are eligible for, and a much more streamlined application process.",
    affiliation: "Ruvos",
  },
  {
    title: "Snipr.ai",
    sub_title: "AI-Powered Media Processing & Tagging",
    url: "https://www.snipr.ai/",
    frontend_stack: ["NextJS", "TailwindCSS", "Framer Motion", "ReactQuery"],
    backend_stack: [
      "Python",
      "Lambda",
      "DynamoDB",
      "RDS",
      "S3",
      "Cognito",
      "SST",
      "AWS Rekognition",
      "AWS Transcribe",
    ],
    role: "Full Stack Developer & Consultant",
    description:
      "Every day more than 250,000 hours of media is uploaded to YouTube alone. Most of that content is total benign, but some of it is very much not. To this day, there are people who sit in front of computers all day, watching and tagging videos for threatening content. Snipr is a tool that turns days worth of work into minutes by using AWS AI/ML tools to pre-process media and find keywords within the content.",
    magic:
      "The coolest thing about Snipr is the tool we built that allows users to pass in a list of keywords, and then watch as the tool places each instance of a keyword along a timeline. The user can then click on any of these instances to see the very moment within the media that the keyword was spoken or shown.",
    affiliation: "DataShapes",
  },
  {
    title: "Uplinq.ai",
    sub_title: "Automated Bookkeeping for Small Businesses",
    url: "https://uplinq.com/",
    frontend_stack: [
      "NextJS",
      "TailwindCSS",
      "Framer Motion",
      "ReactQuery",
      "VisX",
    ],
    backend_stack: ["<I didn't work on the backend for this project>"],
    role: "Frontend Developer",
    description:
      "Small business bookkeeping is hard! There are so many moving parts, and with payroll and expenses always stacking up, staying on top of your finances can be a full-time job. Uplinq is a tool that outsources the majority of bookkeeping tasks and splits the work between AI and human accountants. While working on our bookkeeping software, I was responsible for building pixel-perfect ui tools that allowed our users to interact with their financial data in ways that were truly novel in the FinTech space.",
    magic:
      "I have been a small business owner for most of my adult life, and, to put it simply, I hate bookkeeping! What made Uplinq so cool was the hands-on approach it took to integrating with disparate data sources, and amalgamating them into a single, cohesive environment that was truly beautiful.",
    affiliation: "Uplinq",
  },
]

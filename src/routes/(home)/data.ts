import { SitePath } from "$utils/pages";
import type { Snippet } from "svelte";

interface Data {
    intro: IntroData;
    about: AboutDataItem[];
    timeline: TimelineDataItem[];
    projects: ProjectsDataItem[];
    skills: SkillsData;
}

export interface IntroData {
    title: string;
    subtitle: string;
}

export interface AboutDataItem {
    title: string;
    tldr: string[];
}

export interface TimelineDataItem {
    period: string;
    title: string;
    company: string;
    department?: string;
    avatar: string;
    avatarHiddenText: string;
    list?: {
        paragraphs: string[];
        frameworks?: {
            [key in "frontend" | "backend" | "infra"]?: string[];
        };
    }[];
    snippet?: Snippet;
}

export interface ProjectsDataItem {
    href: string;
    title: string;
    imgSrc: string;
}

export interface SkillsDataItem {
    title: string;
    level: 1 | 2 | 3 | 4;
    rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    reaction: {
        lower: string;
        higher: string;
    };
}

export interface SkillsData {
    title: string;
    note: string;
    skills: {
        frontend: SkillsDataItem[];
        backend: SkillsDataItem[];
        other: SkillsDataItem[];
    }
}

export const data: Data = {
    intro: {
        title: "Hello stranger.",
        subtitle: "Welcome to my world."
    },
    about: [
        {
            title: "Looking for",
            tldr: [
                "Full* stack roles in creative engineering organisations.",
                "_",
                "*Ideally 60% frontend, 38% backend, 2% infrastructure.",
            ],
        },
        {
            title: "What I offer",
            tldr: [
                "High throughput.",
                "Focus on what matters...",
                "...and sometimes on what's simply just fun.",
                '<i>Get things done" & "agree and commit</i> attitude.',
                "Ego-free collaborative approach, thorough code reviews.",
                "Backlog involvement & regular tech-debt payments.",
            ],
        },
        {
            title: "My expectations",
            tldr: [
                "Room for building modular, abstract architectures.",
                "Access to solid UX research.",
                "Clear guidance from management",
                "Crowd design kind of approach.",
                "Team autonomy and independence",
                "Openness to trying out new technologies.",
            ],
        }
    ],
    timeline: [
        {
            period: "August 2021 - onwards",
            title: "Software Engineer",
            company: "A geolocation, maps and traffic services company",
            department: "Traffic and Travel Information department",
            avatar: "https://res.cloudinary.com/spookydoodle/image/upload/main/doodles/nav.jpg",
            avatarHiddenText: "Vroom!",
            list: [
                {
                    paragraphs: [
                        "Co-created a pluginable platform with high levels of abstraction which:",
                        "- Allows internal teams to easily add their development tools and product visualization layers;",
                        "- Implements workflows for internal and B2B partner teams which add content to existing solutions;",
                        "- Enables potential customers to evaluate products and close the deal;",
                        "<i>It's the coolest app I've ever worked on so far.</i>"
                    ],
                    frameworks: {
                        frontend: ["React.js", "MapLibre", "D3.js", "Rspack"],
                        backend: ["Tyk.io", "GoLang", "Node.js"],
                        infra: [
                            "nginx",
                            "Azure",
                            "Kubernetes",
                            "OAuth 2.0",
                            "GitHub Actions",
                        ],
                    },
                },
                {
                    paragraphs: ["Developed an extensive custom UI library from scratch."],
                    frameworks: {
                        frontend: ["Storybook"],
                    },
                },
                {
                    paragraphs: [
                        "Worked on an application visualising travel patterns between freely selected origin and destination regions in chosen time frames.",
                    ],
                    frameworks: {
                        frontend: ["TypeScript", "React.js", "Mapbox"],
                        backend: ["Kotlin"],
                        infra: [
                            "AWS S3",
                            "Azure Pipelines",
                        ],
                    },
                },
            ],
        },
        {
            period: "January 2019 - July 2021",
            title: "Senior Business Intelligence Developer",
            company: "A fashion company",
            department: "Analytics & Business Intelligence department",
            avatar: "https://res.cloudinary.com/spookydoodle/image/upload/main/doodles/fashion.jpg",
            avatarHiddenText: "Fab",
            list: [
                {
                    paragraphs: [
                        "I was responsible for creating data visualisation dashboards for sales, design and merchandise planning teams.",
                        "<i>They sliced. And they diced. All thanks to me.</i>"
                    ],
                    frameworks: {
                        frontend: ["Tableau"],
                        backend: ["SAP BW", "SAP HANA"],
                    },
                },
                {
                    paragraphs: [
                        `Created an automated KPI slideshow, like the
                        <a
                            href="https://nutshell.spookydoodle.com/coinflow"
                            target="_blank"
                            rel="noopener noreferrer"><b>Nutshell dashboard</b></a
                        >,
                        based on a similar back end-frontend setup as
                        <a
                            href="https://spookydoodle.github.io/dataviz-sap-bw-odata-node-react/"
                            target="_blank"
                            rel="noopener noreferrer"><b>dataviz example</b></a
                        >.`,
                        "Initially designed for TV screens, its intention was to provide insight into the current performance of the company.", 
                        "Also offered a mobile version - where Spotify meets Trading212.", 
                        "<i>It's pretty cool. I think.</i>",
                    ],
                    frameworks: {
                        frontend: ["TypeScript", "React.js"],
                        backend: ["SAP BW", "Node.js"],
                        infra: ["GitLab CI/CD", "nginx", "AWS EC2, Fargate"],
                    },
                },
            ],
        },
        {
            period: "October 2014 - December 2018",
            title: "Business Intelligence Developer",
            company: "An electrical engineering and robotics giant",
            department: "Global Information Management department",
            avatar: "https://res.cloudinary.com/spookydoodle/image/upload/main/doodles/robot.jpg",
            avatarHiddenText: "Invade",
            list: [
                {
                    paragraphs: [
                        "Helped with integrating more than 60 local transactional ERP systems into one global Business Warehouse.",
                        "And visualised sales & finance data.",
                        "<i>The company was very impressive but looking back at the tooling I had to work with... they win the prize for the most awful, closed off technologies ever.</i>"
                    ],
                    frameworks: {
                        frontend: ["SAP BO"],
                        backend: ["SAP BW", "SAP HANA"],
                    },
                },
            ],
        },
        {
            period: "February 2014 - May 2014",
            title: "Technical Support Assistant",
            company: "An IT outsourcing company",
            avatar: "https://res.cloudinary.com/spookydoodle/image/upload/main/doodles/on-head.jpg",
            avatarHiddenText: "Reset pass?",
            list: [
                {
                    paragraphs: [
                        `First level IT support to an international client.`,
                        "<i>Wanna reset your... procurement form? Let's escalate.</i>",
                    ],
                },
            ],
        },
    ],
    projects: [
        {
            href: SitePath.AppDev,
            title: "App development",
            imgSrc: "https://res.cloudinary.com/spookydoodle/image/upload/main/boon/boon-04.jpg",
        },
        {
            href: SitePath.ThreeD,
            title: "3D modeling & gamedev",
            imgSrc: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/winst0n-2.jpg",
        },
        {
            href: SitePath.Blog,
            title: "Blog",
            imgSrc: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_02.jpg",
        },
    ],
    skills: {
        title: "Stuff I use",
        note: "Feel free to click and disagree.",
        skills: {
            frontend: [
                {
                    title: "TypeScript",
                    level: 4,
                    rating: 9,
                    reaction: {
                        lower: "TypeScript is the best thing which ever happened to JavaScript.",
                        higher: "Completely agree."
                    }
                },
                {
                    title: "React.js",
                    level: 4,
                    rating: 8,
                    reaction: {
                        lower: "Alright, for some cases it's a bit of an overkill. All this useNoisyCrap and virtual magic.",
                        higher: "Well, ok."
                    }
                },
                {
                    title: "Svelte",
                    level: 4,
                    rating: 9,
                    reaction: {
                        lower: "Let's agree to disagree. I think we should keep as close as what it all ends up being eventually.",
                        higher: "Well, ok."
                    }
                },
                {
                    title: "Vue.js",
                    level: 1,
                    rating: 4,
                    reaction: {
                        lower: "I'm indifferent.",
                        higher: "I can understand that. But I find all these artificial v-attributes unnecessary, noisy and, at a large scale, unclear and spaghetti-prone."
                    }
                },
                {
                    title: "Mapbox/MapLibre",
                    level: 4,
                    rating: 7,
                    reaction: {
                        lower: "What do you prefer?",
                        higher: "A bit excessive."
                    }
                },
                {
                    title: "D3",
                    level: 3,
                    rating: 7,
                    reaction: {
                        lower: "Ok, it might be too complicated for most use cases.",
                        higher: "Animate them charts."
                    }
                },
                {
                    title: "RxJS, Jotai",
                    level: 4,
                    rating: 7,
                    reaction: {
                        lower: "You like prop hell?",
                        higher: "Think twice. It helps with abstractions."
                    }
                },
                {
                    title: "Storybook",
                    level: 4,
                    rating: 8,
                    reaction: {
                        lower: "What exactly are you expecting here? It does what it should.",
                        higher: "Whatever."
                    }
                },
                {
                    title: "Flutter & Dart",
                    level: 2,
                    rating: 8,
                    reaction: {
                        lower: "Why develop twice if you can once?",
                        higher: "Mobile apps are cool."
                    }
                },
                {
                    title: "Mocha, Cypress",
                    level: 3,
                    rating: 6,
                    reaction: {
                        lower: "Feels like a waste of time, I get it. But it will save your rear end from problems.",
                        higher: "Let's not get overexcited here."
                    }
                },
                {
                    title: "MUI Material UI",
                    level: 4,
                    rating: 3,
                    reaction: {
                        lower: "Sure.",
                        higher: "I used to also like it because it initially speeds up work but it's just a lot of mess which you don't really need. Styled components - no, thanks."
                    }
                },
            ],
            backend: [
                {
                    title: "Node.js, Express.js",
                    level: 4,
                    rating: 6,
                    reaction: {
                        lower: "Yeah, it's kinda slow and gets tired when frequently used.",
                        higher: "Admit it. You're just too lazy to learn a better language so you stick to what you already know."
                    }
                },
                {
                    title: "Go",
                    level: 3,
                    rating: 9,
                    reaction: {
                        lower: "Come on! The dumbing down and restrictions are actually beautiful. It's faster than most alternatives.",
                        higher: "GO, GO, GO!"
                    }
                },
                {
                    title: "Kotlin",
                    level: 1,
                    rating: 5,
                    reaction: {
                        lower: "No matter how much better than Java it is - it still resides within the Java world.",
                        higher: "Maybe if you're coming from the dino-Java world. It gives too many options and keeps too many secrets."
                    }
                },
                {
                    title: "PostgreSQL, MongoDB",
                    level: 3,
                    rating: 7,
                    reaction: {
                        lower: "It's nice, come on.",
                        higher: "I get where you're coming from."
                    }
                },
                {
                    title: "GraphQL",
                    level: 2,
                    rating: 8,
                    reaction: {
                        lower: "It's not that bad. Just not necessary in most cases. Could sometimes be convenient.",
                        higher: "I don't jump on the hype train."
                    }
                },
                {
                    title: "AWS, Azure, Terraform",
                    level: 1,
                    rating: 2,
                    reaction: {
                        lower: "Perfectly acceptable.",
                        higher: "I'm glad there is someone who will do this job for me."
                    }
                },
                {
                    title: "nginx, Docker",
                    level: 2,
                    rating: 4,
                    reaction: {
                        lower: "Yeah.",
                        higher: "Wow, ok."
                    }
                },
                {
                    title: "Kubernetes",
                    level: 1,
                    rating: 1,
                    reaction: {
                        lower: "I completely understand your view on this.",
                        higher: "I'm glad there is someone who will do this job for me."
                    }
                },
            ],
            other: [
                {
                    title: "Unity",
                    level: 2,
                    rating: 7,
                    reaction: {
                        lower: "Can't relate. What do you mean your project breaks with a minor version update?",
                        higher: "Yeah, Unity is great."
                    }
                },
                {
                    title: "Blender",
                    level: 3,
                    rating: 9,
                    reaction: {
                        lower: "Everything starts from a cube.",
                        higher: "Ctrl + Shift + Alt + B + V + Rain Dance."
                    }
                },
                {
                    title: "DaVinci Resolve",
                    level: 3,
                    rating: 8,
                    reaction: {
                        lower: "Really? The workflow can get quite repetitive.",
                        higher: "Yeah."
                    }
                },
            ]
        }
    },
};

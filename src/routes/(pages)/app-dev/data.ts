import { Stack, type Data } from "$lib/model";
import { SitePath } from "$utils/pages";

export const data: Data = {
    title: "App development",
    posts: [
        {
            id: "felidae",
            title: "Felidae",
            summary: "A news headlines scraper.",
            paragraphs: [
                "This is a Node.js scraper which sources data from Microsoft's Bing news in several categories (e.g. business, general), languages (e.g. English, German) and countries.",
                "It is scheduled to run every few hours. The data is being saved in a PostgreSQL data base and can be retrieved using either a REST API or a GraphQL queries in a json and protobuf format.",
                `Scraping is based on html page processing using known CSS selectors. It could easily stop working as soon as Microsoft decides to change CSS class names. 
                The funny thing is... they never did that for the last >4 years in which the service has been running.`,
                `The origin of this scraper was to use it in the <a href="#hangman-game">"Hangman: Guess the news"</a> mobile game.
                It also proved useful for displaying current news about the planets of the Solar System in the ticker of the 
                <a href="https://nutshell.spookydoodle.com/solar" target="_blank" rel="noopener noreferrer">Solar nutshell</a> (see: <a href="#nutshell">"Nutshell"</a>).`,
            ],
            stack: [
                Stack.PostgreSQL,
                Stack.NodeJS,
                Stack.TypeScript,
                Stack.GraphQL,
                Stack.Protobuf,
                Stack.OpenAPI
            ],
            links: [
                {
                    title: "Go to the app",
                    href: "https://felidae.spookydoodle.com"
                },
                {
                    title: "Example REST",
                    href: "https://felidae.spookydoodle.com/news/business?country=gb&sortBy=id_desc"
                },
                {
                    title: "Example GraphQL",
                    href: "https://felidae.spookydoodle.com/news/general/graphql?query=%7Bheadlines(date:%222025-05-01%22)%7Bid,headline,timestamp%7D%7D"
                },
                {
                    title: "GitHub",
                    href: "https://github.com/spookydoodle/felidae"
                }
            ],
            iframes: [
                {
                    title: "OpenAPI specification",
                    src: "https://felidae.spookydoodle.com/news/docs",
                    height: 800
                },
                {
                    title: "GraphiQL", src: "https://felidae.spookydoodle.com/news/business/graphiql",
                    description: 'Try this query <i>{headlines(lang:en,,sortby:id_desc){id,headline,timestamp,country}}</i>',
                    height: 800
                },
            ]
        },
        {
            id: 'boon',
            title: "BOON",
            underConstruction: true,
            summary: "A PR platform for teams to communicate the newest developments.",
            paragraphs: [
                "A communication platform for teams to publish news about the developments delivered each sprint (or any type of time period).",
                "Think of it as a type of a magazine, replacement for a demo meeting.",
                `It allows to create various public and private workspaces. Within those workspaces users can create time frames (for example sprints), projects and teams, 
                and then add posts related to those entities so that the visitors can read news grouped by them. Commenting on posts and reacting to them is possible.`,
                "Maintainers of workspaces receive tools to modify the look and feel (themes) of the application.",
            ],
            stack: [
                Stack.MongoDB,
                Stack.NodeJS,
                Stack.Go,
                Stack.TypeScript,
                Stack.React,
                Stack.MUI
            ],
            links: [
                {
                    title: 'Go to the app',
                    href: "https://boon.spookydoodle.com"
                },
                {
                    title: 'GitHub',
                    href: "https://github.com/the-dead-planet/BOON"
                },
            ],
            gallery: [
                {
                    type: "image",
                    title: "Sprint overview, default theme, light mode", description: "test",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/boon/boon-01.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Sprint overview, Default theme, dark mode",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/boon/boon-02.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Sprint overview, Vintage Newspaper theme, light mode",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/boon/boon-03.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Sprint overview, Vintage Newspaper theme, dark mode",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/boon/boon-04.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Sprint overview, Frostic theme, light mode",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/boon/boon-05.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Sprint overview, Frostic theme, dark mode",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/boon/boon-06.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Comments section",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/boon/boon-07.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Preferences",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/boon/boon-08.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Project overview",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/boon/boon-09.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Post page",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/boon/boon-10.jpg",
                    enableBackgroundBlur: true
                },
            ]
        },
        {
            id: "nutshell",
            title: "Nutshell",
            summary: "Various automated slideshows (dashboards and presentations).",
            paragraphs: [
                `Grown from an initial requirement to present an overview of financial results on a TV screen, a Bloomberg like dashboard. 
                But in reality it can cover any type of information from business through science to anything else.`,
                `The TV (or any larger screen) version provides a number of slides controlled via a player component with a slider which allows to select the slides, 
                and a "Play/Pause" button to enable/disable automatic transitioning between the slides every N seconds.`,
                "It's easy to add new types of slideshows as the logic has been abstracted to the Slideshow class which just needs to be implemented with the specifics.",
                `There are currently three types of demo nutshells to choose from: "Coinflow nutshell" - financial results of an imaginary steampunk company which offers both a TV version 
                and a mobile version (designs based on Spotify and Trading212 apps), "Solar" - information about the planets of the Solar System (and uses the news headlines in the ticker 
                scraped by <a href="#felidae">the felidae service</a>), and "Need for nutshell" - overview of the Need for Speed games franchise with some sales results.`
            ],
            stack: [
                Stack.React,
                Stack.TypeScript,
                Stack.Vite
            ],
            links: [
                {
                    title: "Go to the app",
                    href: "https://nutshell.spookydoodle.com"
                },
                {
                    title: "GitHub",
                    href: "https://github.com/spookydoodle/nutshell"
                }
            ],
            gallery: [
                {
                    type: "image",
                    title: "Nutshell",
                    description: "Landing page",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-01.jpg",
                },
                {
                    type: "image",
                    title: "Coinflow slideshow",
                    description: "Coinflow charts and ticker",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-02.jpg",
                },
                {
                    type: "image",
                    title: "Coinflow slideshow",
                    description: "Player with slides navigation appears on mouse move",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-03.jpg",
                },
                {
                    type: "image",
                    title: "Coinflow slideshow",
                    description: "Products performance overview",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-04.jpg",
                },
                {
                    type: "image",
                    title: "Coinflow slideshow - mobile version",
                    description: "KPI tiles & trading like tab strip",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-10.jpg"
                },
                {
                    type: "image",
                    title: "Coinflow slideshow - mobile version",
                    description: "Tab strip with an expanded grouped list",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-12.jpg"
                },
                {
                    type: "image",
                    title: "Coinflow slideshow - mobile version",
                    description: "Flat list results",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-11.jpg"
                },
                {
                    type: "image",
                    title: "Coinflow slideshow - mobile version",
                    description: "Spotify-like product scrollable tiles",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-13.jpg"
                },
                {
                    type: "image",
                    title: "Solar system in a nutshell",
                    description: "Planets metrics slide",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-05.jpg"
                },
                {
                    type: "image",
                    title: "Solar system in a nutshell",
                    description: "Planets information slide",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-06.jpg"
                },
                {
                    type: "image",
                    title: "Need for nutshell",
                    description: "Loading video game presentation",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-07.jpg"
                },
                {
                    type: "image",
                    title: "Need for nutshell",
                    description: "Video game sales slide",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-08.jpg"
                },
                {
                    type: "image",
                    title: "Need for nutshell",
                    description: "Cube transition effect between slides",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/nutshell/nutshell-09.jpg"
                },
            ]
        },
        {
            id: "sap-bw-odata-nodejs",
            title: "Dataviz for BW",
            summary: "React application setup based on a SAP BW oData connection proxied via a Node.js server.",
            paragraphs: [
                "A backend - frontend blueprint for creating an application with use of data from a SAP BW using an oData connection.",
                "Contains a detailed documentation on how to set up the oData service on top of a SAP BW data warehouse."
            ],
            stack: [
                Stack.SAPBW,
                Stack.OData,
                Stack.NodeJS,
                Stack.TypeScript,
                Stack.React,
                Stack.D3
            ],
            links: [
                {
                    title: "Go to the app",
                    href: "https://spookydoodle.github.io/dataviz-sap-bw-odata-node-react/"
                },
                {
                    title: "GitHub backend",
                    href: "https://github.com/spookydoodle/dataviz-sap-bw-odata-node-react"
                },
                {
                    title: "GitHub frontend",
                    href: "https://github.com/spookydoodle/dataviz"
                }
            ]
        },
        {
            id: "nav-gauge",
            underConstruction: true,
            title: "Navigation gauge",
            summary: "A simple for generating a video with a customized navigation gauge which plays a trip recorded on a .gpx file.",
            paragraphs: [
                "This tool can be used by users who record their trips on a .gpx file who later would like to present their location on a map in a video edited in a software like DaVinci Resolve.",
                "The .gpx trip is visualized on the map and current positioning based on timestamps from the file is marked visually using user selected style",
                "Then a video can be generated with green screen so that it can be places in a video editing software with transparency.",
                "Target audience are content creators such as bikers or reviewers who would like to have the map location shown to viewers on their videos."
            ],
            stack: [
                Stack.React,
                Stack.MapLibre,
                Stack.DaVinci
            ],
            links: [
                {
                    title: "GitHub",
                    href: "https://github.com/spookydoodle/nav-gauge"
                }
            ],
            iframes: [
                {
                    title: "Nav gauge app",
                    description: "Upload a .gpx file, choose your styles and generate a video.",
                    src: "https://gauge.spookydoodle.com",
                }
            ]
        },
        // {
        //     id: 'street-art-graffiti-app',
        //     underConstruction: true,
        //     title: "The street art & graffiti app",
        //     summary: "An app to locate street art and graffiti around the globe.",
        //     paragraphs: [
        //         "This project is still an idea waiting to be implemented.",
        //         `Users are able to display and submit locations of street art and graffiti on the map. Filtering by content type and reviewing is possible.`,
        //         `The application offers creating routes and playing city games of "scavenger hunt" type. It can be a nice alternative to traditional tourism.`,
        //         "As with any user content based application, there are risks of vandalism which need to be taken care of in a non invasive way.",
        //         "Ideally the app would be implemented with feedback from interested users on platforms such as Reddit."
        //     ],
        //     stack: [
        //         Stack.ReactNative,
        //         Stack.MapLibre,
        //         Stack.PostgreSQL,
        //         Stack.Tile38
        //     ],
        //     links: [],
        // },
        {
            id: 'hangman-game',
            underConstruction: true,
            title: 'Hangman: Guess the news',
            summary: "A very well known Hangman game with a twist.",
            paragraphs: [
                'The twist is that players are guessing the actual current news headlines, rather than some entries from a fixed list of key phrases',
                `A Flutter mobile app with a mascot called <a href="${SitePath.ThreeD}#news-o-phil">"News-o-Phil"</a> waiting to be killed by your inability to guess current news. Phil did not make it to the prototybe yet, though.`,
                `Uses the <a href="#felidae">felidae service</a> to get the newest list of headlines to guess.`
            ],
            stack: [
                Stack.Flutter,
                Stack.Dart,
                Stack.Blender
            ],
            links: [
                {
                    title: "GitHub",
                    href: "https://github.com/spookydoodle/hangman",
                }
            ],
            gallery: [
                {
                    type: "image",
                    title: "Hangman: Guess the News - prototype",
                    description: "Main menu - select news category and language.",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/hangman/hangman-01.jpg",
                },
                {
                    type: "image",
                    title: "Hangman: Guess the News - prototype",
                    description: "Game - guess the news headline.",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/hangman/hangman-02.jpg",
                },
                {
                    type: "image",
                    title: "Hangman: Guess the News - prototype",
                    description: "The game.",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/hangman/hangman-03.jpg",
                },
                {
                    type: "image",
                    title: "Hangman: Guess the News - prototype",
                    description: "Player lost.",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/hangman/hangman-04.jpg",
                },
                {
                    type: "image",
                    title: "Hangman: Guess the News - prototype",
                    description: "Player won.",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/hangman/hangman-05.jpg",
                },
                {
                    type: "image",
                    title: "Phil with a newspaper",
                    description: "Prototype of the app mascot.",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-with-newspaper.png"
                },
                {
                    type: "image",
                    title: "Player won - Phil is shocked",
                    description: "Prototype of the app mascot.",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-read-newspaper-1.png"
                },
                {
                    type: "video",
                    title: "Player lost - Phil is gone",
                    description: "Prototype of the app mascot.",
                    poster: "https://res.cloudinary.com/spookydoodle/video/upload/c_limit,h_400,w_600/v1/main/3d/phil-mistake-3.jpg",
                    src: "https://res.cloudinary.com/spookydoodle/video/upload/f_auto:video/v1/main/3d/phil-mistake-3"
                },
            ]
        },
        // {
        //     id: "form-rxjs",
        //     title: "Form fields",
        //     summary: "Form field in React with subscriptions",
        //     paragraphs: ["An example of RxJS & Jotai observability for form fields."],
        //     stack: [
        //         Stack.React,
        //         Stack.RxJS
        //     ],
        //     links: []
        // },
        // {
        //     id: "canvas-d3-rectangles",
        //     underConstruction: true,
        //     title: "Draw D3 rectangles",
        //     summary: "Draw non overlapping rectangles on a D3 canvas chart.",
        //     paragraphs: [
        //         `This canvas contains calculations which allow users to draw rectangular shapes in such a way that they cannot overlap. 
        //         It could be apply for some sort of labeling of two dimensional data.`
        //     ],
        //     stack: [
        //         Stack.React,
        //         Stack.D3
        //     ],
        //     links: []
        // },
        // {
        //     id: "three-d-canvas-shaders",
        //     underConstruction: true,
        //     title: "3D Canvas shaders",
        //     summary: "Just some cool shaders",
        //     paragraphs: ["In planning"],
        //     stack: [],
        //     links: []
        // },
        {
            id: "landing-pages",
            title: "Company landing pages",
            summary: "Examples of animated landing pages for imaginary companies",
            stack: [
                Stack.Svelte,
                Stack.HTML,
                Stack.CSS
            ],
            paragraphs: [
                "One day I had this idea to create cool landing pages for imaginary companies everyday for a month.",
                "I made all four of them. Then realised it's a bit of a waste of time."
            ],
            links: [
                {
                    title: "Car racing",
                    href: "/app-dev/landing/car-racing"
                },
                {
                    title: "VR experience",
                    href: "/app-dev/landing/vr-experience"
                },
                {
                    title: "Spaceship rental",
                    href: "/app-dev/landing/spaceship-rental"
                },
                {
                    title: "Parallax mountains",
                    href: "/app-dev/landing/parallax-mountains"
                },
            ]
        },
        {
            id: "portfolio",
            title: "Portfolio website",
            summary: "This portfolio website has been made with Svelte.",
            stack: [Stack.Svelte],
            paragraphs: ["Yep."],
            links: [
                { 
                    title: "GitHub",
                    href: "https://github.com/spookydoodle/portfolio"
                }
            ]
        },
    ]
};

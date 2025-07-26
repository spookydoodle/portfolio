import { Stack, type Data } from "$lib/model";
import { SitePath } from "$utils/pages";

export const data: Data = {
    title: "3D modeling & gamedev",
    posts: [
        {
            id: 'random-3d',
            title: "Random stuff made in Blender",
            summary: "",
            stack: [Stack.Blender],
            paragraphs: [],
            gallery: [
                {
                    type: "image",
                    title: "Winst0n's eyes",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/winst0n-2.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Winst0n in a spaceship",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/winst0n-in-space-1.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Winst0n in space",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/winst0n-in-space.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Boon furry logo",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/boon-1.jpg",
                    enableBackgroundBlur: true
                },
                {
                    type: "image",
                    title: "Boon Halloween",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/boon-halloween.jpg",
                    enableBackgroundBlur: true
                }
            ],
        },
        {
            id: 'furry-spaceship',
            title: 'UFO Alien Furry Spaceship',
            summary: "Just a timelapse.",
            stack: [Stack.Blender],
            paragraphs: [],
            youtubeVideos: [
                {
                    title: "Alien Furry Spaceship on speed",
                    src: "https://www.youtube.com/embed/iBBIO0FnRwQ",
                    description: "A timelapse of building the Purple Alien's furry spaceship. Made in Blender."
                },
            ]
        },
        {
            id: "news-o-phil",
            underConstruction: true,
            title: "News-o-Phil",
            summary: "Insanity, sexy furr and shiny oi!boots.",
            stack: [Stack.Blender],
            paragraphs: [
                `This character was designed to be a mascot for the <a href="${SitePath.AppDev}#hangman-game">"Hangman: Guess the news"</a>`,
                "Phil is supposed to react to user's successes and mistakes in the game. Below you can check some experiments results."
            ],
            gallery: [
                {
                    type: "image",
                    title: "Phil profile",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-profile.png"
                },
                {
                    type: "video",
                    title: "Phil is happy jumping",
                    poster: "https://res.cloudinary.com/spookydoodle/video/upload/c_limit,h_400,w_600/v1/main/3d/phil-happy.jpg",
                    src: "https://res.cloudinary.com/spookydoodle/video/upload/f_auto:video/v1/main/3d/phil-happy"
                },
                {
                    type: "image",
                    title: "Phil with a newspaper",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-with-newspaper.png"
                },
                {
                    type: "video",
                    title: "Phil reads a newspaper",
                    poster: "https://res.cloudinary.com/spookydoodle/video/upload/c_limit,h_400,w_600/v1/main/3d/phil-read-newspaper.jpg",
                    src: "https://res.cloudinary.com/spookydoodle/video/upload/f_auto:video/v1/main/3d/phil-read-newspaper"
                },
                {
                    type: "image",
                    title: "Phil reads shocking news",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-read-newspaper-1.png"
                },
                {
                    type: "video",
                    title: "Phil shows his tongue",
                    poster: "https://res.cloudinary.com/spookydoodle/video/upload/c_limit,h_400,w_600/v1/main/3d/phil-show-tongue.jpg",
                    src: "https://res.cloudinary.com/spookydoodle/video/upload/f_auto:video/v1/main/3d/phil-show-tongue"
                },
                {
                    type: "image",
                    title: "Phil about to show his tongue",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-show-tongue-1.png"
                },
                {
                    type: "image",
                    title: "Phil shows his tongue",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-show-tongue-2.png"
                },
                {
                    type: "video",
                    title: "Phil walks",
                    poster: "https://res.cloudinary.com/spookydoodle/video/upload/c_limit,h_400,w_600/v1/main/3d/phil-walk.jpg",
                    src: "https://res.cloudinary.com/spookydoodle/video/upload/f_auto:video/v1/main/3d/phil-walk"
                },
                {
                    type: "video",
                    title: "Phil walks through the screen",
                    poster: "https://res.cloudinary.com/spookydoodle/video/upload/c_limit,h_400,w_600/v1/main/3d/phil-walk-through-screen.jpg",
                    src: "https://res.cloudinary.com/spookydoodle/video/upload/f_auto:video/v1/main/3d/phil-walk-through-screen"
                },
                {
                    type: "image",
                    title: "Phil walks through the screen",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-walk-through-screen-1.png"
                },
                {
                    type: "image",
                    title: "Phil naked 1",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-naked-1.png"
                },
                {
                    type: "image",
                    title: "Phil naked 2",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-naked-2.png"
                },
                {
                    type: "image",
                    title: "Phil happy sprite sheet",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-happy-sprite-sheet.png"
                },
                {
                    type: "image",
                    title: "Phil mistake 1",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-mistake-1-1.png"
                },
                {
                    type: "video",
                    title: "Phil mistake 2",
                    poster: "https://res.cloudinary.com/spookydoodle/video/upload/c_limit,h_400,w_600/v1/main/3d/phil-mistake-2.jpg",
                    src: "https://res.cloudinary.com/spookydoodle/video/upload/f_auto:video/v1/main/3d/phil-mistake-2"
                },
                {
                    type: "image",
                    title: "Phil mistake 2-1",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-mistake-2-1.png"
                },
                {
                    type: "image",
                    title: "Phil mistake 2-2",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-mistake-2-2.png"
                },
                {
                    type: "video",
                    title: "Phil mistake 3",
                    poster: "https://res.cloudinary.com/spookydoodle/video/upload/c_limit,h_400,w_600/v1/main/3d/phil-mistake-3.jpg",
                    src: "https://res.cloudinary.com/spookydoodle/video/upload/f_auto:video/v1/main/3d/phil-mistake-3"
                },
                {
                    type: "image",
                    title: "Phil mistake 3-1",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/phil-mistake-3-1.png"
                },
            ]
        },
        {
            id: "winst0ns-manor",
            title: "Winst0n's Manor",
            summary: "A project to rebuild the original house of Lara Croft from Tomb Raider II and III",
            paragraphs: [
                "The house was built in Blender and then used in Unity. The result is quite pathetic but it was a learning project.",
                "It's an abandoned project but it was really fun to do, despite poor effects. Abandoned due to lack of time.",
                "The demo can be checked in below preview, better to play in Firefox which deals with WebGL better than chromium browsers."
            ],
            stack: [
                Stack.Unity,
                Stack.Blender
            ],
            links: [
                {
                    title: "GitHub",
                    href: "https://github.com/spookydoodle/Winst0nsManor"
                }
            ],
            gallery: [
                {
                    type: "image",
                    title: "A Nome in Winst0n's Manor",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_01.jpg"
                },
                {
                    type: "image",
                    title: "Hall in Winst0n's Manor",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_02.jpg"
                },
                {
                    type: "image",
                    title: "The clock in Winst0n's Manor",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_03.jpg"
                },
                {
                    type: "image",
                    title: "The clock in the hall in Winst0n's Manor",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_04.jpg"
                },
                {
                    type: "image",
                    title: "The clock in the hall in Winst0n's Manor and stairs",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_05.jpg"
                },
                {
                    type: "image",
                    title: "A window in Winst0n's Manor",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_06.jpg"
                },
                {
                    type: "image",
                    title: "A window in Winst0n's Manor",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_07.jpg"
                },
                {
                    type: "image",
                    title: "The way to the music room",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_08.jpg"
                },
                {
                    type: "image",
                    title: "Music room",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_09.jpg"
                },
                {
                    type: "image",
                    title: "Nome in the library",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_10.jpg"
                },
                {
                    type: "image",
                    title: "Bedroom view",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_11.jpg"
                },
                {
                    type: "image",
                    title: "The pool",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/unity/manor_12.jpg"
                },
                {
                    type: "image",
                    title: "Winst0n brought tea",
                    src: "https://res.cloudinary.com/spookydoodle/image/upload/main/3d/winst0n.jpg"
                },
            ],
            youtubeVideos: [
                {
                    title: "Nome Croft Manor Tomb Raider",
                    src: "https://www.youtube.com/embed/VfB_uW782pA",
                    description: "An attempt to rebuild the original house of Lara Croft from Tomb Raider II & III in Blender and use it in a Unity 3PP game environment. Execution quite poor, yet fun (for me only probably)."
                },
            ],
            games: [
                {
                    title: "Winst0n's Manor Game",
                    src: "https://itch.io/embed-upload/3329886",
                    paragraphs: [
                        "An attempt to rebuild the original house of Lara Croft from Tomb Raider II & III in Blender and use it in a Unity 3PP game environment. Execution quite poor, yet fun (for me only probably).",
                        "Play the game below // Firefox recommended. The build is made in WebGL which works slower in other browsers",
                        "Controls: arrows or wasd",
                        "Camera & shoot: left mouse click",
                        "Interact: space",
                        "If nothing is happening when you press the keys, just click on the game frame and try again."
                    ],
                    size: "~21 MB"
                }
            ]
        },
    ],
}
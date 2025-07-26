import type { Data } from "$lib/model";

export const data: Data = {
    title: "Blog",
    posts: [
        {
            id: "intro",
            title: "Hello w0rld",
            summary: "Not yet.",
            paragraphs: [
                "I have nothing interesting to say at this point.",
                "But thanks for asking."
            ],
            stack: []
        },
    ],
}
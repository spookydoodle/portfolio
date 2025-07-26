<script lang="ts">
    import type { PageProps } from "./$types";
    import Header from "./Header.svelte";
    import About from "./About.svelte";
    import Timeline from "./Timeline.svelte";
    import Projects from "./Projects.svelte";
    import Skills from "./Skills.svelte";

    let { data }: PageProps = $props();
    const { intro, about, timeline, projects, skills } = data;
</script>

<Header data={intro} />
<About data={about} />
<Timeline data={timeline} />
<Skills data={skills} />
<Projects data={projects} />

<script lang="ts">
    import { SpringImage, SlideInViewport } from "$components";
    import { MainAnchors } from "$utils/pages";
    import type { TimelineDataItem } from "./data";

    let { data }: { data: TimelineDataItem[] } = $props();
</script>

<div id={MainAnchors.Timeline}>
    <SlideInViewport>
        <h2 class="header">Timeline</h2>
    </SlideInViewport>
    <div class="content">
        {#each data as { period, title, company, department, avatar, avatarHiddenText, list, snippet }}
            <div class="period">
                <SlideInViewport>
                    <h3 class="period-name">{period}</h3>
                </SlideInViewport>
            </div>
            <div class="description">
                <SlideInViewport>
                    <h3 class="title">{title}</h3>
                    <h4>{company}</h4>
                    {#if department}
                        <h5 class="department">{department}</h5>
                    {/if}
                    {#if list}
                        <ul class="main-list">
                            {#each list as { paragraphs, frameworks }}
                                <li>
                                    {#each paragraphs as paragraph}
                                        <p>
                                            {@html paragraph}
                                        </p>
                                    {/each}
                                    {#if frameworks}
                                        <ul class="paragraph-list">
                                            {#each Object.entries(frameworks) as [_name, values]}
                                                <li class="tags">
                                                    {#each values as value}
                                                        <span class="tag">{value}</span>
                                                    {/each}
                                                </li>
                                            {/each}
                                        </ul>
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                    {/if}
                    {#if snippet}
                        {@render snippet()}
                    {/if}
                </SlideInViewport>
                <div class="avatar">
                    <SpringImage
                        src={avatar}
                        alt={`${title} avatar`}
                        title="Pull & drag"
                        hiddenText={avatarHiddenText}
                        slideAnimation={{
                            "large-screen": "from-right",
                            "small-screen": "from-bottom",
                        }}
                    />
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
   .header {
        text-align: center;
        font-size: 48px;
        padding: 100px 0;
        margin: 0;
    }

   .content .period {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 80px 0;
    }

   .description {
        background-color: var(--color-background-light);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 80px 20px;
    }

   .description h3,
   .description h4,
   .description h5 {
        margin: 6px;
    }
    
   .description h4,
   .description h5 {
        font-weight: 400;
    }

    .department {
        color: var(--color-secondary-dark);
    }

   .description .main-list > li p {
        margin: 8px 0;
    }

   .description  .paragraph-list {
        padding-left: 0;
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 15px;
    }

   .description .paragraph-list li {
        color: var(--color-secondary);
        list-style: none;
        margin: 4px 0;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 4px;
        row-gap: 2px;
    }
    
    .tag {
        border-radius: 4px;
        border: 1px solid var(--color-secondary-dark);
        color: var(--color-secondary-dark);
        padding: 2px 4px;
        cursor: auto;
    }

   .content .avatar {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

    @media only screen and (min-width: 800px) {
       .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

       .content .avatar {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            width: 144px;
            height: 144px;
        }

       .description {
            padding: 80px;
        }
    }
</style>

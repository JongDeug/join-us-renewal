<script>
    import Post from "$lib/components/Post.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import MyComment from "$lib/components/MyComment.svelte";
    import {page} from "$app/stores";
    import Tab from "$lib/components/Tab.svelte";

    let selected = "post";
    let options = $page.data.options.activity

    $: console.log(selected);
</script>

<div class="wrapper">
    <div class="main-content">
        <!-- Title -->
        <div class="main-content__title">
            <h3>활동 내역</h3>
        </div>

        <!-- Tab -->
        <div class="main-content__tab">
            <Tab bind:selected {options}/>
        </div>

        {#if selected == "post"}
            <!-- Post -->
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Pagination/>
        {:else if selected == "comment"}
            <!-- My Comment -->
            <MyComment/>
            <MyComment/>
            <MyComment/>
            <Pagination/>
        {:else if selected == "note"}
            <!-- Note -->
        {/if}
    </div>
</div>

<style lang="scss">
  .wrapper {
    .main-content {
      &__title {
        margin-bottom: 30px;
      }

      &__tab {
        display: flex;
        justify-content: right;
        margin-bottom: 30px;
      }
    }
  }
</style>
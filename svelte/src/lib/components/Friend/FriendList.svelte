<script>
    import Tab from "$lib/components/Tab.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import Friend from "$lib/components/Friend/Friend.svelte";
    import {page} from "$app/stores";
    import FriendRequest from "$lib/components/Friend/FriendRequest.svelte";

    let selected = "followers";
    let options = $page.data.options.friend;
</script>

<div class="friend-list">
    <div class="friend-list__title">
        <h3>친구 목록</h3>
    </div>

    <div class="friend-list__tab">
        <Tab bind:selected {options}/>
    </div>

    {#if selected == "followers"}
        <!-- Followers -->
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Pagination/>
    {:else if selected == "following"}
        <!-- Following -->
        <Friend/>
        <Friend/>
        <Pagination/>
    {:else if selected == "followRequest"}
        <FriendRequest/>
    {/if}
</div>

<style lang="scss">
  .friend-list {
    &__title {
      margin-bottom: 30px;
    }

    &__tab {
      display: flex;
      justify-content: right;
      margin-bottom: 30px;
    }
  }
</style>


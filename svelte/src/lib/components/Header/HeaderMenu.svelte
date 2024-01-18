<script>
    import Messenger from "$lib/components/Header/Messenger/Messenger.svelte";
    import Notification from "$lib/components/Header/Notification.svelte";
    import User from "$lib/components/Header/User.svelte";

    export let sections;
</script>

<div class="menu">
    <!-- Messenger -->
    <Messenger/>

    <!-- Notification -->
    <Notification/>

    <!-- User -->
    <User {sections}/>
</div>

<style lang="scss">
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
    position: relative;
    margin-left: 5px;
  }
</style>
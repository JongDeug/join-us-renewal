<script>
    import MessengerModal from "$lib/components/Header/Messenger/MessengerModal.svelte";

    let clickMessenger = false; // 메신저 메뉴 표시
</script>

<button class="btn" on:click={() => clickMessenger = !clickMessenger}>
    <img src="/messenger.png" alt="" width="30" height="30">
</button>

<MessengerModal bind:clickMessenger/>

<style lang="scss">
    .btn {
      margin-left: 10px;
      padding: 4px 5px 0px 5px;
      @include ivory-btn;
    }
</style>

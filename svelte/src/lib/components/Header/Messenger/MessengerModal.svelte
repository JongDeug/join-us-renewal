<script>
    import {page} from "$app/stores";
    import Pagination from "$lib/components/Pagination.svelte";
    import Tab from "$lib/components/Tab.svelte";
    import MessengerReceive from "$lib/components/Header/Messenger/MessengerReceive.svelte";
    import MessengerSend from "$lib/components/Header/Messenger/MessengerSend.svelte";
    import MessengerTrash from "$lib/components/Header/Messenger/MessengerTrash.svelte";
    import MessengerWrite from "$lib/components/Header/Messenger/MessengerWrite.svelte";

    export let clickMessenger; // 메신저 메뉴 표시

    let dialog; // HTMLDialogElement

    $: if (dialog && clickMessenger) dialog.showModal();

    // 옵션
    let selected = "write";
    let options = $page.data.options.messenger;
    $: console.log(selected);

    // MessengerWrite Event
    const handleModal = () => {
        dialog.close();
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<!-- on:click|self : 이벤트 타겟이 자신과 같을 때 트리거 됨.-->
<dialog class="messenger"
        bind:this={dialog}
        on:close={() => clickMessenger = false}
        on:click|self={() => dialog.close()}
>
    <div class="messenger__inner">
        <div class="messenger__title">
            <h2>쪽지</h2>
            <button class="messenger__btn" on:click={() => dialog.close()}>
                <img src="/close.png" alt="" width="24" height="24">
            </button>
        </div>

        <div class="messenger__content">
            <div class="messenger__tab">
                <Tab bind:selected {options}/>
            </div>

            {#if selected == "write"}
                <MessengerWrite on:closeModal={handleModal}/>
            {:else if selected == "receive"}
                <MessengerReceive/>
            {:else if selected == "send"}
                <MessengerSend/>
            {:else if selected == "trash"}
                <MessengerTrash/>
            {/if}
        </div>
        <!-- svelte-ignore a11y-autofocus -->
        <!-- <button autofocus on:click={() => dialog.close()}>close modal</button> -->
    </div>
</dialog>

<style lang="scss">
  .messenger {
    //width: 50%;
    //min-width: 750px;
    width: 800px;
    min-height: 300px;
    border-radius: 0.2em;
    border: 0px;
    margin: 80px auto;

    &::backdrop {
      background: rgba(0, 0, 0, 0.3);
    }

    &[open] {
      animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

      &::backdrop {
        animation: fade 0.2s ease-out;
      }
    }

    &__inner {
      height: 100%;
      padding: 20px;
    }

    &__title {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;
    }

    &__btn {
      display: flex;
      background-color: white;
      border: 2px solid black;
      border-radius: 5px;
    }

    &__content {
      height: 100%;
      padding: 5px 0;
    }

    &__tab {
      display: flex;
      justify-content: left;
      margin-bottom: 30px;
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
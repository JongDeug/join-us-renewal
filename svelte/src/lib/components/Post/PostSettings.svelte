<script>
    import {fly} from 'svelte/transition';
    import clickOutside from "$lib/ts/clickOutside";
    import ReportModal from "$lib/components/ReportModal.svelte";

    let clickSettingBtn = false;
    let clickReport = false;
    $: console.log(clickReport)
</script>

<div class="settings" use:clickOutside={() => clickSettingBtn = false}>
    <button class="settings__btn" on:click={() => clickSettingBtn = !clickSettingBtn}>
        <img src="/menu.png" alt="" width="30" height="30">
    </button>

    {#if clickSettingBtn}
        <ul class="settings__list" transition:fly={{duration: 200}}>
            <li class="settings__item">
                <img src="/edit.png" alt="" width="20" height="20">
                <span>수정</span>
            </li>
            <li class="settings__item">
                <button class="settings__btn">
                    <img src="/delete.png" alt="" width="20" height="20">
                    <span class="settings__text">삭제</span>
                </button>
            </li>
            <li class="settings__item">
                <button class="settings__btn" on:click={() => clickReport = !clickReport}>
                    <img src="/report.png" alt="" width="20" height="20">
                    <span class="settings__text">신고</span>
                </button>
            </li>
        </ul>
    {/if}
    <ReportModal bind:clickReport/>
</div>


<style lang="scss">
  .settings {
    position: relative;

    &__btn {
      padding: 0;
      margin: 0;
      border: 0;
      background-color: white;
      width: 100%;
      cursor: pointer;
    }

    &__list {
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 30px;
      padding: 8px 0;
      background-color: white;
      text-align: center;
      border: 1px solid var(--border-color);
      box-shadow: 1px 1px 0 var(--border-color);
      border-radius: 5px;
      width: 120px;
    }

    &__item {
      margin: 20px 0;
      padding: 0 10px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      &:hover {
        cursor: pointer;
        color: var(--focus)
      }
    }

    &__text {
      &:hover {
        color: var(--focus)
      }
    }
  }
</style>
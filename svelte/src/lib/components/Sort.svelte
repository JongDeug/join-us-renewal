<script>
    import {fly} from 'svelte/transition';
    import clickOutside from "$lib/ts/clickOutside";

    export let clickSort;
</script>

<div class="sort" use:clickOutside={() => clickSort = false}>
    <!--                            특정 영역 제외 클릭 시 닫기-->
    <button class="sort__btn" on:click={() => clickSort = !clickSort}>
        <img src="/sort.png" alt="" width="16" height="16">
        <span class="sort__text">정렬</span>
    </button>

    {#if clickSort}
        <ul class="sort__list" transition:fly={{duration: 200}}>
            <li class="sort__item">최신순</li>
            <li class="sort__item">답변순</li>
            <li class="sort__item">추천순</li>
            <li class="sort__item">조회순</li>
        </ul>
    {/if}
</div>

<style lang="scss">
  .sort {
    position: relative;

    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 20px;
      font-size: 17px;
      border-radius: 5px;
      border: 1px solid var(--border-color);
      box-shadow: 1px 1px 0 var(--border-color);
      background-color: white;
      font-weight: 600;
      color: var(--font-color);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        border: 1px solid black;
      }
    }

    &__text {
      margin-left: 5px;
    }

    &__list {
      border: 1px solid var(--border-color);
      box-shadow: 1px 1px 0 var(--border-color);
      color: var(--font-light);
      margin-top: 10px;
      padding: 15px 15px;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: white;
      width: 100%;
      border-radius: 5px;
      z-index: 1;
    }

    &__item {
      cursor: pointer;
      margin-bottom: 13px;
      text-align: center;

      &:hover {
        color: var(--focus)
      }

      &:last-child {
        margin: 0
      }
    }
  }
</style>

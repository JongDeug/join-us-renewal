<script>
    import clickOutside from "$lib/ts/clickOutside";
    import {fly} from 'svelte/transition';

    export let sections;
    let clickUser = false; // 유저 메뉴 표시
</script>

<div class="user" use:clickOutside={() => clickUser = false}>
    <button class="user__btn" on:click={() => clickUser = !clickUser}>
        <img src="/user.png" alt="" width="30" height="30">
    </button>

    {#if clickUser}
        <div class="user__content" transition:fly={{duration: 200}}>
            <ul class="user__list">
                {#each sections as section}
                    <li class="user__item">
                        <a class="user__link" href="/app/settings/{section.slug}">
                            <img src="/{section.slug}.png" alt="" width="20" height="20">
                            {section.title}
                        </a>
                    </li>
                {/each}
                <li class="user__item">
                    <button class="logout-btn">
                        <img src="/logout.png" alt="" width="20" height="20">
                        <span>로그아웃</span>
                    </button>
                </li>
            </ul>
        </div>
    {/if}
</div>

<style lang="scss">
  .user {
    &__btn {
      margin-left: 10px;
      padding: 4px 5px 0px 5px;
      @include ivory-btn;
    }

    &__item {
      margin: 10px;

      &:last-child {
        border-top: 1px solid var(--border-color);
      }
    }

    &__link {
      display: flex;
      align-items: center;
      gap: 10px;
      color: black;
      padding: 5px;

      &:hover {
        color: var(--focus);
        cursor: pointer;
      }
    }

    &__content {
      border: 1px solid var(--border-color);
      border-radius: 5px;
      position: absolute;
      margin-top: 10px;
      top: 100%;
      right: 0;
      width: 250px;
      background-color: white;
      box-shadow: 1px 1px 0 var(--border-color);
      padding: 25px 20px;
      color: var(--font-light);
      //font-weight: 600;
    }
  }

  /* Logout Button */
  .logout-btn {
    border: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    background-color: white;
    padding: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
</style>
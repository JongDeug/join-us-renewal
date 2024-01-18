<script>
    export let whichBoard;
</script>
<ul class="nav">
    <li>
        <button class="nav__btn" class:nav__btn--focused={whichBoard}
                on:click={() => whichBoard=true}>구인 게시판
        </button>
    </li>
    <li>
        <button class="nav__btn" class:nav__btn--focused={!whichBoard}
                on:click={() => whichBoard=false}>질문 게시판
        </button>
    </li>
</ul>

<style lang="scss">
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;

    &__btn {
      background: white;
      border: 0;
      color: black;
      font-weight: 600;
      cursor: pointer;
      padding: 10px 25px;

      &:hover {
        color: var(--focus);
      }

      &--focused {
        text-decoration: underline;
      }
    }
  }
</style>
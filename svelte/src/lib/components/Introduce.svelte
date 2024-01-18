<script>
    export let whichBoard;
</script>

<div class="introduce">
    {#if whichBoard}
        <span class="introduce__title">구인 게시판</span><br>
        프로젝트를 함께할 동료를 구하는 공간입니다.
    {:else}
        <span class="introduce__title">질문 게시판</span><br>
        무엇이든 질문할 수 있는 공간입니다.
    {/if}
</div>

<style lang="scss">
  .introduce {
    width: 100%;
    padding: 20px 40px;
    border: 2px solid var(--border-color);
    border-radius: 5px;
    margin-bottom: 30px;

    &__title {
      font-size: 20px;
      font-weight: 600;
    }
  }
</style>
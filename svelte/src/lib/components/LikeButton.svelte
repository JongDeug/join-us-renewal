<div class="like-btn">
    <button class="like-btn__btn" on:click={() => console.log('hi')}>
        <img src="/arrow-up.png" alt="" width="35" height="35">
    </button>
    <span class="like-btn__text">0</span>
    <button class="like-btn__btn">
        <img src="/arrow-down.png" alt="" width="35" height="35">
    </button>
</div>

<style lang="scss">
  .like-btn {
    position: sticky;
    top: 80px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    &__text {
      font-size: 24px;
    }

    &__btn {
      padding: 0;
      margin: 0;
      background-color: white;
      border: 0;

      &:last-child {
        margin-top: 3px;
      }
    }
  }
</style>
<div class="friend">
    <div class="col1">
        <img src="/user.png" alt="" width="70" height="70">
        <div class="friend__description">
            <p>닉네임</p>
            <p>인삿말 입니다만?</p>
        </div>
    </div>

    <button class="friend__btn">언팔로우</button>
</div>

<style lang="scss">
  .friend {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 0;
    border-bottom: 2px solid var(--border-color);

    .col1 {
      display: flex;
      align-items: center;
    }

    &__description {
      margin-left: 10px;
    }

    &__btn {
      padding: 7px;
      border-radius: 5px;
      background-color: var(--ivory);
    }
  }
</style>
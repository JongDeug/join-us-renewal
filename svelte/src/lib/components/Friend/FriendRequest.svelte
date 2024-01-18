<div class="friend-request">
    <div class="col1">
        <img src="/user.png" alt="" width="70" height="70">
        <div class="friend-request__description">
            <p>닉네임</p>
            <p>인삿말 입니다만?</p>
        </div>
    </div>

    <div class="col2">
        <button class="friend-request__btn">확인</button>
        <button class="friend-request__btn friend-request__btn--remove">삭제</button>
    </div>
</div>

<style lang="scss">
  .friend-request {
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

      &--remove {
        background-color: white !important;
      }
    }
  }
</style>
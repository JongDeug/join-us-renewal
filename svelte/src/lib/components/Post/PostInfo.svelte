<div class="post-info">
    <img class="post-info__img" src="/" alt="유저 프로필 사진">
    <div>
        <h3>김종환</h3>
        <p class="post-info__time-and-views">
            <span>26분 전</span>
            <img src="/views.png" alt="" width="20" height="20">
        </p>
    </div>
</div>

<style lang="scss">
  .post-info {
    display: flex;
    align-items: center;

    &__img {
      border: 1px solid;
      width: 60px;
      margin-right: 10px;
    }

    &__time-and-views {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
</style>

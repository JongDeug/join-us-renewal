<form class="identification-form" action="">
    <div class="identification-form__title">
        <h2>비밀번호 재확인</h2>
    </div>

    <div class="row">
        <p class="identification-form__text">본인 확인을 위해 비밀번호를 다시 입력해 주세요.</p>
        <input class="identification-form__input" name="password" placeholder="Password" type="password" id="password">
        <button class="identification-form__btn">확인</button>
    </div>
</form>

<style lang="scss">
  .identification-form {
    .row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      width: 410px;
    }

    &__title {
      margin-bottom: 30px;
    }

    &__input {
      border-radius: 5px;
      border: 1px solid var(--border-color);
      box-shadow: 1px 1px 0 var(--border-color);
      padding: 12px 10px;
    }

    &__btn {
      padding: 5px;
      @include orange-btn;
    }
  }
</style>


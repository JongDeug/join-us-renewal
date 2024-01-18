<!-- Login Form -->
<form class="login-form" action="">
    <div class="login-form__title">
        <h2>로그인</h2><br>
        <span class="login-form__text">JoinUs에 오신것을 환영합니다. 😁</span>
    </div>

    <div class="login-form__item">
        <label class="login-form__label" for="id">아이디</label>
        <input class="login-form__input" name="id" placeholder="Id" type="id">
    </div>

    <div class="login-form__item">
        <label class="login-form__label" for="password">비밀번호</label>
        <input class="login-form__input" name="password" placeholder="Password" type="password">
    </div>

    <div class="row">
        <a class="login-form__link" href="/app/signup">[회원가입]</a>
        <a class="login-form__link" href="/app/forgot">[계정찾기]</a>
    </div>
    <button class="login-form__btn">확인</button>
</form>
<!-- //Login Form -->


<style lang="scss">
  .login-form {
    margin: 100px auto 0 auto;
    padding: 20px;
    background: lightblue;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid black;
    box-shadow: 4px 4px black;
    gap: 30px;
    width: 600px;

    .row {
      width: 100%;
      display: flex;
      justify-content: right;
    }

    &__title {
      font-weight: 900;
      font-size: 20px;
      margin-bottom: 25px;
    }

    &__text {
      color: var(--font-light);
      font-weight: 600;
      font-size: 17px;
    }

    &__label {
      display: block;
      margin-bottom: 6px;
    }

    &__item {
      width: 100%;
    }

    &__input {
      width: 100%;
      height: 50px;
      border-radius: 5px;
      border: 2px solid black;
      background-color: var(--ivory);
      box-shadow: 4px 4px black;
      font-size: 15px;
      font-weight: 600;
      padding: 5px 10px;
      outline: none;

      &::placeholder {
        color: var(--font-light);
        opacity: 0.8;
      }

      &:focus {
        border: 2px solid var(--focus);
      }
    }

    &__link {
      margin-top: 10px;
      padding: 10px 10px;
      color: black;
      display: inline-block;
      text-decoration: underline;
      font-size: 17px;

      &:hover {
        color: var(--focus);
      }
    }

    &__btn {
      margin: 20px auto 0 auto;
      padding: 8px 40px;
      @include ivory-btn;
    }
  }
</style>
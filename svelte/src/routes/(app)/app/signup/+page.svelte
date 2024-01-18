<!-- Signup Form -->
<form class="signup-form">
    <div class="signup-form__title">
        <h2>회원가입</h2><br>
        <span class="signup-form__text">JoinUs에 오신것을 환영합니다. 😁</span>
    </div>

    <div class="signup-form__item">
        <label class="signup-form__label" for="id">아이디</label>
        <input class="signup-form__input" name="id" placeholder="Id" type="id" id="id">
    </div>

    <div class="signup-form__item">
        <label class="signup-form__label" for="password">비밀번호</label>
        <input class="signup-form__input" name="password" placeholder="Password" type="password" id="password">
    </div>

    <div class="signup-form__item">
        <label class="signup-form__label" for="password-check">비밀번호 확인</label>
        <input class="signup-form__input" name="password-check" placeholder="Password" type="password-check"
               id="password-check">
    </div>

    <div class="signup-form__item">
        <label class="signup-form__label" for="email">이메일</label>
        <input class="signup-form__input" name="email" placeholder="Email" type="email" id="email">
    </div>

    <div class="signup-form__item">
        <label class="signup-form__label" for="name">이름</label>
        <input class="signup-form__input" name="name" placeholder="Name" type="name" id="name">
    </div>

    <div class="signup-form__item">
        <label class="signup-form__label" for="nickname">닉네임</label>
        <input class="signup-form__input" name="nickname" placeholder="Nickname" type="nickname" id="nickname">
    </div>

    <a class="signup-form__link" href="/app/login">[로그인]</a>
    <button class="signup-form__btn">확인</button>
</form>
<!-- //Signup Form -->

<style lang="scss">
  /* Form */
  .signup-form {
    margin: 100px auto 100px auto;
    padding: 20px;
    background: lightblue;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid black;
    box-shadow: 4px 4px black;
    width: 600px;
    gap: 30px;

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
      width: 100%;
      text-align: right;
      margin-top: 10px;
      padding: 10px 10px;
      color: black;
      text-decoration: underline;
      font-size: 18px;

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
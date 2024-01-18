<!-- Forgot Form -->
<form class="forgot-form" action="">
    <div class="forgot-form__title">
        <h2>계정찾기</h2><br>
        <span class="forgot-form__text">이메일 주소를 입력하시면, <br>
            해당 이메일로 아이디 및 변경된 비밀번호가 전송됩니다. 😁</span>
    </div>

    <input class="forgot-form__input" name="email" placeholder="Email" type="id">

    <div class="row">
        <a class="forgot-form__btn forgot-form__btn--cancel" href="/app/login">취소</a>
        <button class="forgot-form__btn">확인</button>
    </div>
</form>
<!-- //Forgot Form -->

<style lang="scss">
  .forgot-form {
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
      gap: 10px;
      align-items: center;
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

    &__btn {
      //margin: 20px auto 0 auto;
      padding: 8px 40px;
      @include ivory-btn;
      
      &--cancel {
        background-color: white !important;
        color: black;
      }
    }
  }
</style>
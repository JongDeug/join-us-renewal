<div class="wrapper">
    <div class="main-content">
        <!-- Title -->
        <div class="main-content__title">
            <h3>소개 프로필</h3>
        </div>

        <!-- Profile Form -->
        <div class="main-content__profile-form">
            <form class="profile-form">
                <div class="row row1">
                    <div class="col col1">
                        <label class="profile-form__label" for="nickname">닉네임</label>
                        <input class="profile-form__input" name="nickname" placeholder="Nickname" type="nickname"
                               id="nickname"
                               disabled>

                        <label class="profile-form__label" for="email">인삿말</label>
                        <input class="profile-form__input" name="email" placeholder="Email" type="email" id="email">

                        <label class="profile-form__label" for="email">보유 기술</label>
                        <input class="profile-form__input" name="email" placeholder="Email" type="email" id="email">
                    </div>

                    <div class="col col2">
                        <div class="profile-form__profile-img">
                            사진
                        </div>
                    </div>
                </div>

                <div class="row row2">
                    <label class="profile-form__label" for="email">자유 양식</label>
                    <textarea class="profile-form__textarea" name="email" placeholder="Email" id="email"></textarea>

                    <div class="row">
                        <button class="profile-form__btn">수정</button>
                    </div>
                </div>
            </form>
            <!-- //Profile Form -->
        </div>
    </div>
</div>

<style lang="scss">
  .wrapper {
    .main-content {
      &__title {
        margin-bottom: 30px;
      }

      //&__profile-form {}
    }
  }

  //-------------------------------------------------------

  /* Profile Form */
  .profile-form {
    .row1 {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      margin-bottom: 30px;
      width: 100%;

      .col {
        width: 100%;

        &2 {
          border: 1px solid;
        }
      }
    }

    .row2 {
      .row {
        display: flex;
        justify-content: right;
      }
    }

    /* 공통 */
    &__label {
      display: block;
      margin-bottom: 6px;
    }

    &__input, &__textarea {
      border-radius: 5px;
      border: 1px solid var(--border-color);
      box-shadow: 1px 1px 0 var(--border-color);
      padding: 12px 10px;
    }

    &__input {
      margin-bottom: 30px;
      width: 100%;

      &:last-child {
        margin: 0 !important;
      }
    }

    &__profile-img {
      //border: 1px solid;
    }

    &__textarea {
      width: 100%;
      resize: none;
      height: 300px;
    }

    &__btn {
      padding: 10px 30px;
      margin-top: 10px;
      @include orange-btn;
    }
  }
</style>
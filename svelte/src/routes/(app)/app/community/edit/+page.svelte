<div class="wrapper">
    <div class="commercial-content">
    </div>

    <div class="main-content">
        <!-- Title -->
        <div class="main-content__title">
            <h2>게시글 수정</h2>
            프로젝트 팀원을 모집하거나 궁금한 것을 질문해보세요!
        </div>

        <!-- Board Form -->
        <div class="main-content__board-form">
            <form class="board-form">
                <label class="board-form__label" for="boards">게시판 종류</label>
                <select class="board-form__select" name="" id="boards">
                    <option value="구인 게시판">구인 게시판</option>
                    <option value="질문 게시판">질문 게시판</option>
                </select>

                <label class="board-form__label" for="title">제목</label>
                <input class="board-form__input" type="text" id="title">

                <label class="board-form__label" for="tag">태그</label>
                <input class="board-form__input" type="text" id="">

                <label class="board-form__label" for="">본문</label>
                <textarea class="board-form__textarea"></textarea>

                <div class="row">
                    <a href="/app/community/detail" class="board-form__btn board-form__btn--color-white">취소</a>
                    <button class="board-form__btn board-form__btn--color-orange">수정</button>
                </div>
            </form>
        </div>
    </div>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    gap: 150px;

    .main-content {
      width: 100%;

      &__title {
        margin-bottom: 50px;
      }

      //&__board-form {}
    }
  }

  //-------------------------------------------------------

  /* Board Form */
  .board-form {
    display: flex;
    flex-direction: column;

    &__label {
      display: block;
      margin-bottom: 6px;
    }

    &__input, &__select, &__textarea {
      margin-bottom: 30px;
      border-radius: 5px;
      border: 1px solid var(--border-color);
      box-shadow: 1px 1px 0 var(--border-color);
      padding: 12px 10px;
    }

    &__textarea {
      height: 300px;
      resize: none;
    }

    .row {
      display: flex;
      justify-content: end;
      margin-bottom: 0 !important;
    }

    &__btn {
      padding: 10px 30px;

      &--color-white {
        margin-right: 10px;
        @include orange-btn;
        background-color: white !important;
        color: black !important;
      }

      &--color-orange {
        @include orange-btn;
      }
    }
  }

</style>
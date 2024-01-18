<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    const closeModal = () => {
        dispatch('closeModal');
    }
</script>
<form action="" class="messenger-write">
    <div class="messenger-write__item">
        <label class="messenger-write__label" for="">제목</label>
        <input class="messenger-write__input" type="text" placeholder="제목을 입력해주세요">
    </div>

    <div class="messenger-write__item">
        <label class="messenger-write__label" for="">수신자</label>
        <input class="messenger-write__input" type="text" placeholder="사용자">
    </div>

    <div class="messenger-write__item">
        <textarea class="messenger-write__textarea" placeholder="내용"/>
    </div>

    <div class="row">
        <button class="messenger-write__btn messenger-write__btn--send">보내기</button>
        <button class="messenger-write__btn messenger-write__btn--cancel"
                on:click={() => closeModal()}
        >취소</button>
    </div>
</form>

<style lang="scss">
  .messenger-write {
    &__item {
      border-bottom: 1px solid;
      padding: 10px 0;
      display: flex;
      justify-content: left;
      align-items: center;
    }

    &__label {
      display: block;
      width: 100px;
    }

    &__input, &__textarea {
      width: 100%;
      border: 1px solid var(--border-color);
      box-shadow: 1px 1px 0 var(--border-color);
      padding: 5px 10px;
    }

    &__textarea {
      resize: none;
      height: 250px;
    }

    .row {
      display: flex;
      gap: 10px;
      justify-content: right;
      align-items: center;
      margin-top: 20px;
    }

    &__btn {
      padding: 5px 10px;
      @include ivory-btn;

      &--cancel {
        background-color: white !important;
      }
    }
  }
</style>
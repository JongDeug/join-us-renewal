<script>
    let deleteCheckbox = false;
</script>

<div class="delete-account">
    <div class="delete-account__title">
        <h3>계정삭제</h3>
    </div>

    <div class="delete-account__content">
        <div>
            <input
                    class="delete-account__input"
                    type="checkbox"
                    id="delete"
                    name="subscribe"
                    value="newsletter"
                    bind:checked={deleteCheckbox}
            />
            <label for="delete">정말 계정을 삭제하시겠습니까?</label>
        </div>

        <button class="delete-account__btn" class:delete-account__btn--checked={deleteCheckbox}>회원탈퇴
        </button>
    </div>
</div>

<style lang="scss">
  .delete-account {
    &__title {
      margin: 30px 0;
    }

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0 0 5px;
    }

    &__input {
      transform: scale(2);
      margin-right: 10px;
    }

    &__btn {
      border-radius: 5px;
      padding: 10px 20px;
      background-color: rgba(255, 0, 0, 0.3);
      color: white;
      border: 0;

      &--checked {
        background-color: rgb(255, 0, 0);
      }
    }
  }
</style>
<script>
    import DeleteAccount from "$lib/components/DeleteAccount.svelte";
    import Identification from "$lib/components/Identification.svelte";

    let identification = true;
</script>

<div class="wrapper">
    <div class="main-content">

        {#if identification}
            <!-- Account Form -->
            <div class="main-content__account-form">
                <form class="account-form" action="">
                    <div class="account-form__title">
                        <h3>회원 정보</h3>
                    </div>

                    <label class="account-form__label" for="id">아이디</label>
                    <input class="account-form__input" name="id" placeholder="Id" type="id" id="id">

                    <label class="account-form__label" for="password">비밀번호</label>
                    <input class="account-form__input" name="password" placeholder="Password" type="password"
                           id="password">

                    <label class="account-form__label" for="password-check">비밀번호 확인</label>
                    <input class="account-form__input" name="password-check" placeholder="Password"
                           type="password-check"
                           id="password-check">

                    <label class="account-form__label" for="email">이메일</label>
                    <input class="account-form__input" name="email" placeholder="Email" type="email" id="email">

                    <label class="account-form__label" for="name">이름</label>
                    <input class="account-form__input" name="name" placeholder="Name" type="name" id="name">

                    <label class="account-form__label" for="nickname">닉네임</label>
                    <input class="account-form__input" name="nickname" placeholder="Nickname" type="nickname"
                           id="nickname">

                    <div class="row">
                        <button class="account-form__btn">수정</button>
                    </div>
                </form>
                <!-- //Account Form -->
            </div>

            <!-- Delete Account -->
            <div class="main-content__delete-account">
                <DeleteAccount/>
            </div>

        {:else}
            <Identification/>
        {/if}
    </div>
</div>

<style lang="scss">
  .wrapper {
    width: 70%;
    //.main-content__account-form {}
    //.main-content__delete-account {}
  }

  //-------------------------------------------------------

  /* Account Form */
  .account-form {
    padding-bottom: 20px;
    margin-bottom: 10px;
    border-bottom: 2px solid var(--border-color);

    .row {
      display: flex;
      width: 100%;
      justify-content: right;
    }

    &__title {
      margin-bottom: 30px;
    }

    &__label {
      display: block;
      margin-bottom: 6px;
    }

    &__input {
      margin-bottom: 30px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid var(--border-color);
      box-shadow: 1px 1px 0 var(--border-color);
      padding: 12px 10px;
    }

    &__btn {
      padding: 10px 30px;
      @include orange-btn;
    }
  }
</style>
<script lang="ts">
    import MessengerModal from "$lib/components/Header/Messenger/MessengerModal.svelte";
    import Logo from "$lib/components/Header/Logo.svelte";
    import HeaderNav from "$lib/components/Header/HeaderNav.svelte";
    import HeaderMenu from "$lib/components/Header/HeaderMenu.svelte";

    export let isLogin: boolean; // 로그인 버튼 표시
    export let sections; // 메뉴 섹션
</script>

<div class="header">
    <div class="header__inner">
        <div class="col">
            <!-- Logo -->
            <Logo/>
        </div>

        <!-- Nav -->
        <div class="col col2">
            <!-- 로그인 했을 경우 -->
            {#if isLogin}
                <!-- Header Nav -->
                <HeaderNav/>

                <!-- Header Menu -->
                <HeaderMenu {sections}/>
            {/if}

            <!-- 로그인 하지 않았을 경우 -->
            {#if !isLogin}
                <div class="row">
                    <a href="/app">커뮤니티</a>
                    <a href="/app/login" class="login-btn">로그인</a>
                    <a href="/app/signup" class="signup-btn">회원가입</a>
                </div>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
  .header {
    height: 80px;
    border-bottom: 2px solid var(--border-color);
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 2;

    &__inner {
      width: 70%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .col2 {
        display: flex;
        align-items: center;

        .row {
          display: flex;
          justify-content: space-around;
          gap: 5px;
          align-items: center;
        }
      }
    }
  }

  //-------------------------------------------------------

  /* Login button */
  .login-btn {
    padding: 7px 15px;
    margin-left: 10px;
    @include orange-btn;
  }

  /* Signup button */
  .signup-btn {
    padding: 7px 15px;
    margin-left: 10px;
    @include orange-btn;
    background-color: var(--ivory) !important;
    color: black !important;
  }
</style>

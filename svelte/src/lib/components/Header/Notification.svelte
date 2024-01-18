<script>
    import clickOutside from "$lib/ts/clickOutside";
    import {fly} from 'svelte/transition';

    let clickNotification = false; // 알림 메뉴 표시
</script>

<div class="notification" use:clickOutside={() => clickNotification = false}>
    <button class="notification__btn" on:click={() => clickNotification = !clickNotification}>
        <img src="/notification.png" alt="" width="30" height="30">
    </button>

    {#if clickNotification}
        <div class="notification__content" transition:fly={{duration: 200}}>
            <p class="notification__title">알림</p>
            <ul class="notification__list">
                <li class="notification__item">
                    <div>
                        <p class="notification-user">김종환</p>
                        <span class="notification__date">1일 전</span>
                    </div>
                    <span>님이 회원님이 작성하신 "제목"에 답변을 달았습니다.</span>
                </li>
                <li class="notification__item">
                    <div>
                        <p class="notification-user">김종환</p>
                        <span class="notification__date">1일 전</span>
                    </div>
                    <span>님이 회원님이 작성하신 "제목"에 답변을 달았습니다.</span>
                </li>
                <li class="notification__item">
                    <div>
                        <p class="notification-user">김종환</p>
                        <span class="notification__date">1일 전</span>
                    </div>
                    <span>님이 회원님이 작성하신 "제목"에 답변을 달았습니다. 그렇다고 하네요 ?? 긴데에ㅔㅔㅔㅔㅔㅔㅔㅔ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam corporis cumque cupiditate delectus eligendi explicabo iure, maiores, quia quis sunt suscipit veniam. Excepturi exercitationem inventore minus recusandae veniam.</span>
                </li>
                <li class="notification__item">
                    <div>
                        <p class="notification-user">김종환</p>
                        <span class="notification__date">1일 전</span>
                    </div>
                    <span>님이 회원님이 작성하신 "제목"에 답변을 달았습니다.</span>
                </li>
            </ul>
        </div>
    {/if}
</div>

<style lang="scss">
  /* Notification */
  .notification {

    &__btn {
      margin-left: 10px;
      padding: 4px 5px 0px 5px;
      @include ivory-btn;
    }

    &__content {
      margin-top: 10px;
      border: 1px solid var(--border-color);
      border-radius: 5px;
      position: absolute;
      right: 0;
      width: 400px;
      background-color: white;
    }

    &__title {
      padding: 10px;
      background-color: var(--ivory);
    }

    &__list {
      height: 300px;
      overflow: auto;

      /* 스크롤바 설정*/
      &::-webkit-scrollbar {
        width: 6px;
      }

      /* 스크롤바 막대 설정*/
      &::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
        /* 스크롤바 둥글게 설정    */
        border-radius: 10px;
      }

      /* 스크롤바 뒷 배경 설정*/
      //&::-webkit-scrollbar-track{
      //  background-color:
      //}
    }

    &__item {
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 15px;
      margin: 10px 20px;
      cursor: pointer;
      font-size: 16px;

      div {
        display: flex;
        justify-content: space-between;
      }

      &:last-child {
        border: 0;
        padding-bottom: 0;
      }

      &:hover {
        color: var(--focus);
      }
    }
  }
</style>
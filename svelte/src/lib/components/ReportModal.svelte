<script>
    import Options from "$lib/components/Tab.svelte";
    import {page} from "$app/stores";
    import Pagination from "$lib/components/Pagination.svelte";

    export let clickReport; // 메신저 메뉴 표시

    let dialog; // HTMLDialogElement

    $: if (dialog && clickReport) dialog.showModal();

    // 옵션
    let selected = "write";
    let options = $page.data.options.messenger;
    $: console.log(selected);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<!-- on:click|self : 이벤트 타겟이 자신과 같을 때 트리거 됨.-->
<dialog class="modal"
        bind:this={dialog}
        on:close={() => clickReport = false}
        on:click|self={() => dialog.close()}
>
    <div class="modal__inner">
        <div class="modal__title">
            <h2>게시글 신고</h2>
            <button class="modal__btn--close" on:click={() => dialog.close()}>
                <img src="/close.png" alt="" width="24" height="24">
            </button>
        </div>

        <div class="modal__content">
            <div class="col1">
                신고사유
            </div>
            <div class="col2">
                <div>
                    <input type="radio">
                    <label>광고/음란성 게시글</label>
                </div>

                <div>
                    <input type="radio">
                    <label>욕설/부적절한 언어</label>
                </div>

                <div>
                    <input type="radio">
                    <label>회원 분란 유도</label>
                </div>

                <div>
                    <input type="radio">
                    <label>회원 비방</label>
                </div>

                <div>
                    <input type="radio">
                    <label>도배성 댓글</label>
                </div>
            </div>
        </div>
        <div class="row3">
            <button class="modal__btn--confirm">확인</button>
            <button class="modal__btn--cancel">취소</button>
        </div>
        <!-- svelte-ignore a11y-autofocus -->
        <!-- <button autofocus on:click={() => dialog.close()}>close modal</button> -->
    </div>
</dialog>

<style lang="scss">
  .modal {
    width: 600px;
    min-height: 300px;
    border-radius: 5px;
    margin: 80px auto;
    border: 0;

    &::backdrop {
      background: rgba(0, 0, 0, 0.3);
    }

    &[open] {
      animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

      &::backdrop {
        animation: fade 0.2s ease-out;
      }
    }

    &__inner {
      height: 100%;
      padding: 20px;

      .row3 {
        display: flex;
        margin-top: 10px;
        justify-content: right;
        gap: 10px;
      }
    }

    &__title {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 2px solid var(--border-color);
    }


    &__content {
      padding: 5px 0;
      display: flex;

      .col1 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        border: 2px solid var(--border-color);
        background-color: var(--border-color);
      }

      .col2 {
        width: 100%;
        border: 2px solid var(--border-color);
        padding: 20px;
      }
    }

    &__btn {
      &--close {
        display: flex;
        background-color: white;
        border: 2px solid black;
        border-radius: 5px;
      }

      &--cancel {
        padding: 5px 10px;
        @include ivory-btn;
        background-color: white !important;
      }

      &--confirm {
        padding: 5px 10px;
        @include ivory-btn;
      }
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
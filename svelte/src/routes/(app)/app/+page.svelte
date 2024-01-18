<script>
    import Post from "$lib/components/Post.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import Introduce from "$lib/components/Introduce.svelte";
    import PostTab from "$lib/components/PostTab.svelte";
    import Sort from "$lib/components/Sort.svelte";
    import Search from "$lib/components/Search.svelte";

    let whichBoard = true; // 구인 게시판(true), 질문 게시판(false) 선택
    let clickSort = false; // 정렬 메뉴 표시
</script>

<div class="wrapper">
    <div class="commercial-content">
    </div>

    <div class="main-content">
        <!-- Introduce -->
        <div class="main-content__introduce">
            <Introduce {whichBoard}></Introduce>
        </div>

        <!-- Menu -->
        <div class="main-content__menu">
            <div class="row row1">
                <!-- Write Button -->
                <a href="/app/community/new" class="write-btn">
                    <img src="/write.png" alt="" width="15" height="15">
                    <span>작성하기</span>
                </a>

                <!-- Post Tab-->
                <PostTab bind:whichBoard/>

                <!-- Sort -->
                <Sort bind:clickSort></Sort>
            </div>

            <div class="row row2">
                <!-- Refresh Button -->
                <button class="refresh-btn">
                    <img src="/refresh.png" alt="" width="20" height="20">
                </button>

                <!-- Search -->
                <div>
                    <Search/>
                </div>
            </div>
        </div>

        <!--Board -->
        <div class="main-content__board">
            <!-- Posts -->
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

            <!-- Pagination -->
            <Pagination/>
        </div>
    </div>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    gap: 150px;

    .main-content {
      //&__introduce {}
      //&__board {}

      &__menu {
        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid var(--border-color);

          &1 {
            padding-bottom: 30px;
          }

          &2 {
            padding: 20px 0;
          }
        }
      }
    }
  }

  //-------------------------------------------------------

  /* Write Button */
  .write-btn {
    display: inline-block;
    padding: 8px 20px;
    @include orange-btn;
  }

  /* Refresh Button */
  .refresh-btn {
    padding: 3px;
    border: 0;
    background-color: white;

    &:hover {
      img {
        filter: opacity(0.5) drop-shadow(0 0 0 orange);
      }
    }
  }
</style>
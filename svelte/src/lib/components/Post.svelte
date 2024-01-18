<div class="post">
    <div class="row row1">
        <div class="post__user">김종환</div>
        <div class="post__time">3일 전</div>
    </div>

    <div class="row row2">
        <div class="post__title">
            <a class="post__link" href="/app/community/detail">제목입니다.</a>
        </div>
        <div class="post__content">
            <a class="post__link" href="/app/community/detail">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam architecto consectetur, debitis,
                dicta dolore error inventore quam quas, quis quisquam ratione repellat repellendus rerum vel.
                Consectetur
                nam nihil praesentium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci assumenda at commodi
                doloremque eligendi ex in laboriosam, laborum, magni nulla odio porro quae ratione sequi tempore tenetur
                vitae?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci assumenda at commodi
                doloremque eligendi ex in laboriosam, laborum, magni nulla odio porro quae ratione sequi tempore tenetur
                vitae?
            </a>
        </div>
    </div>

    <div class="row row3">
        <div class="col1">
            <span class="post__tag">태그</span>
            #뭐 #야 #이 #거
        </div>

        <div class="col2">
            <img src="/views.png" alt="" width="20" height="20">
            <span class="post__views">32</span>
            <img src="/likes.png" alt="" width="20" height="20">
            <span class="post__likes">32</span>
            <img src="/comments.png" alt="" width="20" height="20">
            <span class="post__comments">32</span>
        </div>
    </div>
    <!-- //Post Bottom Info -->
</div>

<style lang="scss">
  .post {
    padding: 17px 0;
    border-bottom: 2px solid var(--border-color);

    .row1 {
      display: flex;
      align-items: center;
    }

    .row3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;

      .col2 {
        display: flex;
        font-size: 15px;
        //justify-content: space-around;
        align-items: center;
        //width: 100px;
      }
    }

    &__user {
      &:after {
        content: "·";
        display: inline-block;
        padding: 0 10px;
      }
    }

    &__title {
      font-size: 20px;
      font-weight: 600;
      padding: 10px 0;
    }

    &__content {
      height: 40px;
      font-size: 0.9em;
      line-height: 1.3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__link {
      color: black;

      &:hover {
        color: var(--focus);
      }
    }

    &__tag {
      display: inline-block;
      border: 1px solid lightblue;
      background-color: #c3d6ec;
      border-radius: 3px;
      padding: 0px 6px;
      color: var(--focus);
    }

    &__views, &__likes, &__comments {
      padding: 0 10px 0 4px;
    }
  }
</style>
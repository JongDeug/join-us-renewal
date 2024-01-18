<script>
    import LikeButton from "$lib/components/LikeButton.svelte";
    import CommentInfo from "$lib/components/Comment/CommentInfo.svelte";
    import CommentMeatBalls from "$lib/components/Comment/CommentMeatBalls.svelte";
</script>

<div class="comment">
    <div class="col">
        <!-- Comment Info -->
        <div class="row">
            <CommentInfo/>
            <CommentMeatBalls/>
        </div>

        <!-- Comment Content -->
        <div class="comment-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci autem beatae blanditiis eos
            exercitationem expedita illum iusto libero mollitia necessitatibus optio pariatur quae quaerat quam quasi,
            quia quidem ratione?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis deleniti expedita facere id illum
            laudantium magni molestias necessitatibus odit perspiciatis porro praesentium quia reiciendis sed, soluta
            suscipit vitae voluptatibus.
        </div>
        <!-- //Comment Content -->

    </div>

    <div class="col">
        <!-- Like Button -->
        <LikeButton/>
    </div>
</div>

<style lang="scss">
  .comment {
    display: flex;
    border-bottom: 2px solid var(--border-color);
    min-height: 250px;
    padding: 20px 0;

    .row {
      display: flex;
      justify-content: space-between;
      margin-right: 30px;
    }

    &__btn {
      border: 0;
      background-color: white;
      margin-top: 20px;
    }
  }
</style>
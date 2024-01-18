<script>
    export let clickTableRow;
</script>
<div class="messenger-detail">
    <table class="messenger-detail__table">
        <tr>
            <th>제목</th>
            <td>Bill Gates</td>
        </tr>
        <tr>
            <th>보낸이</th>
            <td>555 77 854</td>
        </tr>
        <tr>
            <th>받는사람</th>
            <td>555 77 855</td>
        </tr>
        <tr>
            <th>일시</th>
            <td>555 77 855</td>
        </tr>
    </table>
    <div class="messenger-detail__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cupiditate doloremque ducimus earum fuga iure
        minus neque obcaecati quasi, quia sequi similique tenetur veniam vero! Dolore doloribus quam voluptatem!

        <div class="row">
            <button class="messenger-detail__btn" on:click={() => clickTableRow = !clickTableRow}>뒤로가기</button>
            <button class="messenger-detail__btn">삭제</button>
        </div>
    </div>
</div>

<style lang="scss">
  .messenger-detail {
    height: 100%;

    &__table {
      width: 100%;
    }

    table, th, td {
      border-bottom: 1px solid;
      border-collapse: collapse;
      padding: 5px;
    }

    th {
      width: 15%;
      text-align: left;
    }

    &__content {
      padding: 5px;
      margin-top: 10px;
      overflow: hidden;
    }

    .row {
      margin-top: 10px;
      display: flex;
      justify-content: right;
      align-items: center;
      gap: 10px;
    }

    &__btn {
      padding: 3px 5px;
      border: 0;
      color: white;
      background-color: orange;
      border-radius: 10px;
    }
  }
</style>
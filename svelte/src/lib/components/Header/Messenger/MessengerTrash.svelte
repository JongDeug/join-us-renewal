<script>
    import Pagination from "$lib/components/Pagination.svelte";
    import Search from "$lib/components/Search.svelte";
    import MessengerDetail from "$lib/components/Header/Messenger/MessengerDetail.svelte";

    let clickTableRow = false;
</script>

<div class="messenger-trash">
    {#if clickTableRow}
        <MessengerDetail bind:clickTableRow/>
    {:else }
        <div class="messenger-trash__search">
            <div>
                <Search/>
            </div>
        </div>

        <table class="messenger-trash__table">
            <tr>
                <th class="messenger-trash__head messenger-trash__head1"><input type="checkbox"
                                                                                class="messenger-trash__input"></th>
                <th class="messenger-trash__head messenger-trash__head2">번호</th>
                <th class="messenger-trash__head messenger-trash__head3">구분</th>
                <th class="messenger-trash__head messenger-trash__head4">받은/보낸사람</th>
                <th class="messenger-trash__head messenger-trash__head5">내용</th>
                <th class="messenger-trash__head messenger-trash__head6">삭제일시</th>
            </tr>
            <tr>
                <td class="messenger-trash__detail messenger-trash__detail--center"><input type="checkbox"
                                                                                           class="messenger-trash__input">
                </td>
                <td class="messenger-trash__detail messenger-trash__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>1
                </td>
                <td class="messenger-trash__detail messenger-trash__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>발신
                </td>
                <td class="messenger-trash__detail" on:click={() => clickTableRow = !clickTableRow}>Maria Anders</td>
                <td class="messenger-trash__detail" on:click={() => clickTableRow = !clickTableRow}>Germany
                    slkdjfa;lkdsfja;dslkfjas;lkfdjsad;flk
                </td>
                <td class="messenger-trash__detail messenger-trash__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>2023-12-31
                </td>
            </tr>
            <!--            <tr>-->
            <!--                <td class="col"><input type="checkbox"></td>-->
            <!--                <td class="col">2</td>-->
            <!--                <td class="col">수신</td>-->
            <!--                <td>Centro comercial Moctezuma</td>-->
            <!--                <td>Francisco Changsdflksajdfalskdfj</td>-->
            <!--                <td class="col">2023-12-31</td>-->
            <!--            </tr>-->
            <!--            <tr>-->
            <!--                <td class="col"><input type="checkbox"></td>-->
            <!--                <td class="col">3</td>-->
            <!--                <td class="col">발신</td>-->
            <!--                <td>Centro comercial Moctezuma</td>-->
            <!--                <td>Francisco Changsdflksajdfalskdfj</td>-->
            <!--                <td class="col">2023-12-31</td>-->
            <!--            </tr>-->
            <!--            <tr>-->
            <!--                <td class="col"><input type="checkbox"></td>-->
            <!--                <td class="col">3</td>-->
            <!--                <td class="col">수신</td>-->
            <!--                <td>Centro comercial Moctezuma</td>-->
            <!--                <td>Francisco Changsdflksajdfalskdfj</td>-->
            <!--                <td class="col">2023-12-31</td>-->
            <!--            </tr>-->
        </table>
        <div class="row">
            <button class="messenger-trash__btn">휴지통 비우기</button>
        </div>

        <Pagination/>
    {/if}

</div>

<style lang="scss">
  .messenger-trash {
    &__search {
      display: flex;
      justify-content: right;
      margin-bottom: 10px;
    }

    table, th, td {
      border-collapse: collapse;
      padding: 5px 8px;
    }

    th {
      border-right: 1px solid;

      &:last-child {
        border: 0;
      }
    }

    tr {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      overflow: hidden;
      white-space: nowrap;
      height: 40px;
    }

    &__table {
      width: 100%;
    }

    &__input {
      transform: scale(1.3);
    }

    &__head {
      background-color: var(--ivory);

      &4 {
        width: 30%;
      }

      &5 {
        width: 40%;
      }
    }

    &__detail {
      &:hover {
        color: var(--focus)
      }

      &--center {
        text-align: center;
      }
    }

    .row {
      display: flex;
      align-items: center;
      justify-content: left;
      border-bottom: 1px solid black;
      height: 40px;
      background-color: var(--ivory);
    }

    &__btn {
      padding: 3px;
      background-color: white;
      border: 2px solid black;
      border-radius: 5px;
      font-weight: 600;
      margin-left: 5px;
      //margin: 0 10px 0 0;
      //padding: 3px 5px;
      //border: 0;
      //background-color: orange;
      //color: white;
      //border-radius: 10px;
    }
  }
</style>

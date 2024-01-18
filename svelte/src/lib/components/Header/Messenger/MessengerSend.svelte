<script>
    import Pagination from "$lib/components/Pagination.svelte";
    import Search from "$lib/components/Search.svelte";
    import MessengerDetail from "$lib/components/Header/Messenger/MessengerDetail.svelte";

    let clickTableRow = false;
</script>

<div class="messenger-send">
    {#if clickTableRow}
        <MessengerDetail bind:clickTableRow/>
    {:else }
        <div class="messenger-send__search">
            <div>
                <Search/>
            </div>
        </div>

        <table class="messenger-send__table">
            <tr>
                <th class="messenger-send__head messenger-send__head1"><input type="checkbox" class="messenger-send__input"></th>
                <th class="messenger-send__head messenger-send__head2">번호</th>
                <th class="messenger-send__head messenger-send__head3">받은사람</th>
                <th class="messenger-send__head messenger-send__head4">내용</th>
                <th class="messenger-send__head messenger-send__head5">일시</th>
            </tr>
            <tr>
                <td class="messenger-send__detail messenger-send__detail--center"><input type="checkbox" class="messenger-send__input"></td>
                <td class="messenger-send__detail messenger-send__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>1
                </td>
                <td class="messenger-send__detail" on:click={() => clickTableRow = !clickTableRow}>Maria Anders</td>
                <td class="messenger-send__detail" on:click={() => clickTableRow = !clickTableRow}>Germany
                    slkdjfa;lkdsfja;dslkfjas;lkfdjsad;flk
                </td>
                <td class="messenger-send__detail messenger-send__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>2023-12-31
                </td>
            </tr>
        </table>
        <div class="row">
            <button class="messenger-send__btn">삭제</button>
        </div>

        <Pagination/>
    {/if}

</div>

<style lang="scss">
  .messenger-send {
    height: 100%;

    @include table;
  }
</style>

<script>
    import Pagination from "$lib/components/Pagination.svelte";
    import Search from "$lib/components/Search.svelte";
    import MessengerDetail from "$lib/components/Header/Messenger/MessengerDetail.svelte";

    let clickTableRow = false;
</script>

<div class="messenger-receive">
    {#if clickTableRow}
        <MessengerDetail bind:clickTableRow/>
    {:else }
        <div class="messenger-receive__search">
            <div>
                <Search/>
            </div>
        </div>

        <table class="messenger-receive__table">
            <tr>
                <th class="messenger-receive__head messenger-receive__head1"><input type="checkbox"
                                                                                    class="messenger-receive__input">
                </th>
                <th class="messenger-receive__head messenger-receive__head2">번호</th>
                <th class="messenger-receive__head messenger-receive__head3">보낸사람</th>
                <th class="messenger-receive__head messenger-receive__head4">내용</th>
                <th class="messenger-receive__head messenger-receive__head5">일시</th>
            </tr>
            <tr>
                <td class="messenger-receive__detail messenger-receive__detail--center"><input type="checkbox"
                                                                                               class="messenger-receive__input">
                </td>
                <td class="messenger-receive__detail messenger-receive__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>1
                </td>
                <td class="messenger-receive__detail" on:click={() => clickTableRow = !clickTableRow}>Maria Anders</td>
                <td class="messenger-receive__detail" on:click={() => clickTableRow = !clickTableRow}>Germany
                    slkdjfa;lkdsfja;dslkfjas;lkfdjsad;flk
                </td>
                <td class="messenger-receive__detail messenger-receive__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>2023-12-31
                </td>
            </tr>

            <tr>
                <td class="messenger-receive__detail messenger-receive__detail--center"><input type="checkbox"
                                                                                               class="messenger-receive__input">
                </td>
                <td class="messenger-receive__detail messenger-receive__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>1
                </td>
                <td class="messenger-receive__detail" on:click={() => clickTableRow = !clickTableRow}>Maria Anders</td>
                <td class="messenger-receive__detail" on:click={() => clickTableRow = !clickTableRow}>Germany
                    slkdjfa;lkdsfja;dslkfjas;lkfdjsad;flk
                </td>
                <td class="messenger-receive__detail messenger-receive__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>2023-12-31
                </td>
            </tr>
            <tr>
                <td class="messenger-receive__detail messenger-receive__detail--center"><input type="checkbox"
                                                                                               class="messenger-receive__input">
                </td>
                <td class="messenger-receive__detail messenger-receive__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>1
                </td>
                <td class="messenger-receive__detail" on:click={() => clickTableRow = !clickTableRow}>Maria Anders</td>
                <td class="messenger-receive__detail" on:click={() => clickTableRow = !clickTableRow}>Germany
                    slkdjfa;lkdsfja;dslkfjas;lkfdjsad;flk
                </td>
                <td class="messenger-receive__detail messenger-receive__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>2023-12-31
                </td>
            </tr>
            <tr>
                <td class="messenger-receive__detail messenger-receive__detail--center"><input type="checkbox"
                                                                                               class="messenger-receive__input">
                </td>
                <td class="messenger-receive__detail messenger-receive__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>1
                </td>
                <td class="messenger-receive__detail" on:click={() => clickTableRow = !clickTableRow}>Maria Anders</td>
                <td class="messenger-receive__detail" on:click={() => clickTableRow = !clickTableRow}>Germany
                    slkdjfa;lkdsfja;dslkfjas;lkfdjsad;flk
                </td>
                <td class="messenger-receive__detail messenger-receive__detail--center"
                    on:click={() => clickTableRow = !clickTableRow}>2023-12-31
                </td>
            </tr>
            <!--            <tr>-->
            <!--                <td class="col"><input type="checkbox"></td>-->
            <!--                <td class="col">3</td>-->
            <!--                <td>Centro comercial Moctezuma</td>-->
            <!--                <td>Francisco Changsdflksajdfalskdfj</td>-->
            <!--                <td class="col">2023-12-31</td>-->
            <!--            </tr>-->
            <!--            <tr>-->
            <!--                <td class="col"><input type="checkbox"></td>-->
            <!--                <td class="col">3</td>-->
            <!--                <td>Centro comercial Moctezuma</td>-->
            <!--                <td>Francisco Changsdflksajdfalskdfj</td>-->
            <!--                <td class="col">2023-12-31</td>-->
            <!--            </tr>-->
        </table>
        <div class="row">
            <button class="messenger-receive__btn">삭제</button>
        </div>

        <Pagination/>
    {/if}
</div>

<style lang="scss">
  .messenger-receive {
    @include table;
  }
</style>

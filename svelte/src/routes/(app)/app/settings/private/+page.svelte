<script>
    import {page} from "$app/stores";
    import Tab from "$lib/components/Tab.svelte";

    let selected = "userManagement";
    let options = $page.data.options.private;

    $: console.log(selected);
</script>

<div class="wrapper">
    <div class="main-content">
        <!-- Title -->
        <div class="main-content__title">
            <h3>관리자 전용</h3>
        </div>

        <!-- Tab -->
        <div class="main-content__tab">
            <Tab bind:selected {options}/>
        </div>

        {#if selected === 'userManagement'}
            hi
        {:else if selected === 'reportManagement'}
            report
        {/if}
    </div>
</div>

<style lang="scss">
  .wrapper {
    .main-content {
      &__title {
        margin-bottom: 30px;
      }

      &__tab {
        display: flex;
        justify-content: right;
        margin-bottom: 30px;
      }
    }
  }
</style>
<script>
    import {page} from "$app/stores";
    import Tab from "$lib/components/Tab.svelte";
    import Search from "$lib/components/Search.svelte";

    let selected = "recent";
    let options = $page.data.options.spaces;

    $: console.log(selected);
</script>

<div class="wrapper">

    <div class="main-content">
        <div class="row">
            <!-- Tab -->
            <Tab bind:selected {options}/>

            <!-- Search -->
            <div class="col">
                <Search/>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
  .wrapper {
    .main-content {
      .row {
        display: flex;
        justify-content: flex-end;

        .col {
          width: 250px;
          margin-left: 30px;
        }
      }
    }
  }


</style>
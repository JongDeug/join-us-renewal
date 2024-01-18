<script>
    import Sidebar from "$lib/components/Sidebar.svelte";

    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<div class="wrapper">
    <!-- Sidebar -->
    <Sidebar sections={data.sections}/>
    <!-- //Sidebar -->

    <!-- Content -->
    <div class="content">
        <slot/>
    </div>
    <!-- //Content -->
</div>

<style lang="scss">
  .wrapper {
    display: flex;

    .content {
      padding: 30px 0 30px 30px;
      border-left: 2px solid var(--border-color);
      width: 100%;
    }
  }
</style>
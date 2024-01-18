<script>
    import Header from "$lib/components/Header/Header.svelte";

    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<div class="wrapper">
    <!-- Header -->
    <Header isLogin={true} sections={data.sections}/>

    <!-- Content -->
    <div class="content">
        <slot/>
    </div>

    <!-- Footer -->
    <div class="footer"></div>
</div>

<style lang="scss">
  .wrapper {
    /* Content */
    .content {
      padding: 30px 0;
      width: 70%;
      margin: 80px auto 0 auto;
      min-height: calc(100vh - 80px);
    }

    /* Footer */
    .footer {
      @include footer;
    }
  }
</style>

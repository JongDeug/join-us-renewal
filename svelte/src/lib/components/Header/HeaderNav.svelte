<ul class="nav">
    <li><a class="nav__link" href="/app">커뮤니티</a></li>
    <li><a class="nav__link" href="/app/spaces">My Spaces</a></li>
</ul>

<style lang="scss">
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    &__link {
      color: black;

      &:hover {
        color: var(--focus);
      }
    }
  }
</style>


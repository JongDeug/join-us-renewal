<div class="pagination">
    <!-- Previous Button -->
    <div class="pagination__btn">
        <img src="/left.png" alt="" width="26" height="18">
        <span class="pagination__text pagination__text--previous">이전</span>
    </div>

    <!-- Pagination Numbers -->
    <ul class="pagination__list">
        <li class="pagination__item">1</li>
        <li class="pagination__item">2</li>
        <li class="pagination__item pagination__item--active">3</li>
        <li class="pagination__item">4</li>
        <li class="pagination__item">5</li>
        <li class="pagination__item">6</li>
        <li class="pagination__dots">...</li>
        <li class="pagination__item"> 10</li>
    </ul>

    <!-- Next Button -->
    <div class="pagination__btn">
        <span class="pagination__text pagination__text--next">다음</span>
        <img src="/right.png" alt="" width="26" height="18">
    </div>
</div>

<style lang="scss">
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    &__btn {
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        color: var(--focus);
      }
    }

    &__text {
      font-size: 15px;

      &--previous {
        padding-left: 5px;
      }

      &--next {
        padding-right: 5px;
      }
    }

    &__list {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
      border: 1px solid var(--border-color);
      background: #ffffff;
      box-shadow: 0 0 2rem rgba(#5a6181, 0.05);
    }

    &__item,
    &__dots {
      display: flex;
      justify-content: center;
      align-items: center;
      //margin: 1px;
      cursor: pointer;
    }

    &__dots {
      color: orange;
      cursor: initial;
    }

    &__item {
      width: 45px;
      height: 45px;
      border-radius: 10px;

      &:hover {
        color: orange;
      }

      &--active {
        color: #ffffff;
        background: orange;
        font-weight: 600;
        border: 1px solid orange;
      }
    }
  }
</style>
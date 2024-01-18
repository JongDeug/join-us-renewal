<script>
    export let options;
    export let selected;

</script>

<div class="tab">
    {#each options as option}
        <div class="tab__option">
            <input class="tab__input" type="radio" value={option.value} bind:group={selected}>
            <div class="tab__btn">
                <span>{option.title}</span>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
  .tab {
    position: relative;
    padding: 0 5px;
    height: 36px;
    background-color: var(--ivory);
    border: 2px solid var(--font-light);
    border-radius: 34px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: 4px 4px var(--font-light);

    &__option {
      height: 28px;
      position: relative;
      top: 2px;
      left: 2px;
    }

    &__input {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      appearance: none;
      cursor: pointer;
    }

    &__input:checked + &__btn {
      background-color: var(--font-light);

      span {
        color: white;
      }
    }

    &__btn {
      width: 100%;
      height: 100%;
      background-color: var(--ivory);
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      // 버튼에 패딩
      padding: 10px;
    }
  }
</style>
<template>
  <header>
    <div class="lct-header">
      <div class="lct-left">
        <router-link :to="{ name: 'mainPage' }" class="lct-header__info">
          <a-button type="primary" class="btn btn-revert">RusFuture</a-button>
        </router-link>
      </div>
      <div class="lct-right">
        <router-link :to="{ name: 'analyticsPage' }">
          <a-button type="primary" class="btn">Аналитика</a-button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "v-header",
};
</script>

<style lang="scss">
.lct-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
  top: 0;
  left: 0;

  &__info {
    margin-right: 30px;
  }

  &__logo {
    margin-right: 30px;
  }

  .lct-left {
    display: flex;
    align-items: center;

    h2 {
      margin: 0;
    }
  }

  img {
    width: 50px;
    border-radius: 50%;
  }

  .btn {
    border-radius: 10px;
    background-color: #02458d;
    border-color: #02458d;

    &-revert {
      border-radius: 10px;
      background: white;
      color: #02458d;
      border-color: white;
      border: 1px solid #02458d;
    }
  }
}

@media (max-width: 1000px) {
  .lct-left {
    h2 {
      display: none;
    }
  }

  .lct-right {
    display: flex;
  }
}
</style>

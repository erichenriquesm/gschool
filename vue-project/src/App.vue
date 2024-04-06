<script>
export default {
  data() {
    return {
      text: '',
      count: 0,
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <button @click="count--">-</button>
      <h1 :class="count > 10 ? 'greenn' : ''">{{ count }}</h1>
      <button @click="count++">+</button>
      <p v-if="count > 10">Parágrafo secreto</p>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.greenn {
  color: #009488;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

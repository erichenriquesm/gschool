<script>
export default {
  data() {
    return {
      text: '',
      count: 0,
      count2: 0,
      firstArray: ['Maria', 'João', 'Richard', 'Eduardo'],
    }
  },
  methods: {
    addStudent() {
      if (this.firstArray.length >= 10) {
        return
      }
      this.firstArray.push(this.text)
      this.text = ''
      console.log(this.sumCount);
    },
    removeLastStudent() {
      this.firstArray.pop()
    },
    removeStudent(index) {
      this.firstArray.splice(index, 1)
    }
  },
  created () {
    this.firstArray.push('Manoela');
  },
  computed: {
    sumCount() {
      return this.count + this.count2
    }
  },
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <button @click="count--">-</button>
      <h1 :class="count > 10 ? 'greenn' : ''">{{ count }}</h1>
      <button @click="count++">+</button>
    </div>
    <div class="wrapper">
      <button @click="count2--">-</button>
      <h1 :class="count2 > 10 ? 'greenn' : ''">{{ count2 }}</h1>
      <button @click="count2++">+</button>
    </div>
    <p>A soma desses dois valores é {{ sumCount }}</p>
    <section>
      <input type="text" v-model="text" @keyup.enter="addStudent()"> 
      <button :disabled="firstArray.length >= 10" @click="addStudent()">Adicionar nome!</button>
      <p style="color: red;" v-show="firstArray.length >= 10">Limite de itens atingido!</p>
      <div v-for="(student, index) in firstArray" :key="student">
        <span>{{ student }}</span> 
        <button @click="removeStudent(index)">Remover {{ student }}</button>
      </div>
    </section>
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

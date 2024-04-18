<script>
  export default {
    data() {
      return {
        userName: 'Eric',
        count: 0,
        students: ['Guilherme', 'Nat', 'Jair', 'Mario', 'Manoela'],
        newStudent: '',
      }
    },
    methods: {
      addStudent() {
        this.students.push(this.newStudent)
        this.newStudent = ''
      },
      removeStudent(index) {
        this.students.splice(index, 1)
      }
    },
    watch: {
      newStudent(newValue, oldValue) {
        console.log(`A variável newStudent teve seu valor alterado de ${oldValue} para ${newValue}`);
        if (false) {
          this.removeStudent(0)
        }
      }
    },
    created () {
      this.students.push('Eric')
      // Utíl para validações e requisições
    },
    mounted () {
      // Utíl para fazer manipulações no DOM
    }
  }
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div>
        <input @keyup.enter="addStudent()" type="text" v-model="newStudent">
        <button @click="addStudent()">Adicionar estudante</button>
        <ul>
          <li v-for="(student, index) in students" :key="index">
            {{ student }} 
            <span @click="removeStudent(index)" class="red-count" style="cursor: pointer;">X</span>
          </li>
        </ul>
        <!-- <button :disabled="count >= 10" @click="count++">+</button>
        <h3 :class="count < 0 ? 'red-count' : 'greenn-count'">{{ count }}</h3>
        <button @click="count--">-</button>
        <p v-if="count > 5">Parágrafo secreto</p>
        <p v-else-if="count < 0">Esse número é negativo!</p>
        <p v-else>Esse número não é negativo e não é maior que 5</p> -->
      </div>
      <nav>
        <RouterLink to="/">Teste</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.red-count {
  color: red;
}

.greenn-count {
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

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

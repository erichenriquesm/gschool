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
  <router-view />
</template>

<style>
  * {
    box-sizing: border-box;
  }
</style>

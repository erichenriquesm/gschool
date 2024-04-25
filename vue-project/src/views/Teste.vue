<template>
    <modal 
        :modalTitle="curretTitle" 
        v-model:showModal="showModal"
    >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ratione quis est, provident dolores praesentium nisi aspernatur officiis beatae magnam porro debitis odio dolore, deleniti laboriosam cum repudiandae voluptate iusto!</p>
    </modal>
    <button @click="showModal = true">Abra o modal!</button>
    <button @click="redirectHome()">Redirecionar!</button>
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
    methods: {
        redirectHome() {
            this.$router.push('/')
        }
    },
    data() {
        return {
            curretTitle: 'Meu título',
            showModal: false,
            route: this.$route
        }
    },
    components: {
        Modal,
    },
    mounted () {
        console.log(this.$route.params.id);
    },
}
</script>

<style lang="scss" scoped>
</style>
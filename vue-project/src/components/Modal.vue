<template>
    <div class="backdrop" v-if="showModal">
        <div class="modal">
            <span @click="closeModal()" class="close-modal">x</span>
            <h1>{{ modalTitle }}</h1>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            closeModal() {
                this.$emit('update:showModal', false)
            }
        },
        props: {
            modalTitle: {
                type: String,
                default: ''
            },
            showModal: {
                type: Boolean,
                required: true,
            },
        },
    }
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #0005;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal {
    padding: 25px;
    background-color: white;
    width: 500px;
    min-height: 200px;
    border-radius: 20px;
    position: relative;
    color: black;
}
.close-modal {
    position: absolute;
    color: black;
    top: 20px;
    right: 20px;
    cursor: pointer;
}
</style>
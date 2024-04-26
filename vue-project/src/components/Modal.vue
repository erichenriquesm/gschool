<template>
    <div class="backdrop" v-if="showModal">
        <div class="modal">
            <span @click="closeModal()" class="close-modal">x</span>
            <h1>{{ modalTitle }}</h1>
            <label>Nome do produto</label>
            <input type="text" v-model="productName">
            <label>Valor do produto</label>
            <input type="number" v-model="productValue">
            <button @click="createProduct()">{{product ? 'Editar produto' : 'Criar produto!'}}</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return {
                productName: '',
                productValue: 0,
            }
        },
        watch: {
            showModal(newValue) {
                if (newValue == true && this.product) {
                    this.productName = this.product.name   
                    this.productValue = this.product.amount
                }
            }
        },
        methods: {
            createProduct(){
                let data = {
                    name: this.productName,
                    amount: this.productValue
                }

                if (this.product) {
                    axios.put('product/' + this.product.id, data)
                    .then((response) => {
                        console.log(response)
                        this.$emit('update:showModal', false)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                    return
                }
                axios.post('product', data)
                    .then((response) => {
                        console.log(response)
                        this.$emit('update:showModal', false)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
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
            product: {
                type: Object,
                default: ''
            }
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
    display: grid;
    gap: 15px;
    padding: 25px;
    height: fit-content;
    background-color: white;
    width: 500px;
    min-height: 200px;
    border-radius: 20px;
    position: relative;
    color: black;
}
.modal > input {
    border: 1px solid #cdcdcd;
    border-radius: 10px;
    padding: 12px;
    font-size: 16px;
}
.modal > label {
    font-size: 16px;
}
.modal > button {
    transition: .3s;
    height: 50px;
    background-color: #cdcdcd;
    border: none;
    border-radius: 10px;
}
.modal > button:hover {
    background-color: #bdbdbd;
}
.close-modal {
    position: absolute;
    color: black;
    top: 20px;
    right: 20px;
    cursor: pointer;
}
</style>
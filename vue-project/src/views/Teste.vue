<template>
    <modal 
        :modalTitle="curretTitle" 
        :product="selectedProduct"
        v-model:showModal="showModal"
    >
    </modal>
    <div 
        v-for="product in products" 
        :key="product.id" 
        class="product-box" 
        @click="selectedProduct = product"
        :class="selectedProduct.id === product.id ? 'selected-box' : ''"
    >
        <h3>{{ product.name }}</h3>
        <p>{{ product.amount }}</p>
    </div>
    <button @click="selectedProduct = {}, showModal = true">Criar produto</button>
    <button @click="showModal = true" :disabled="!selectedProduct.id">Editar produto</button>
    <button  @click="deleteProduct()">
        Deletar produto {{ selectedProduct.name }}
    </button>
</template>

<script>
import Modal from '@/components/Modal.vue'
import axios from 'axios'

export default {
    methods: {
        deleteProduct() {
            axios.delete(`product/${this.selectedProduct.id}`)
            .then((response) => {
                console.log(response)
                let itemIndex = this.products.findIndex(product => product.id === this.selectedProduct.id)
                if (itemIndex) {
                    this.products.splice(itemIndex, 1)
                }
            })
            .catch((error) => {
                console.log(error)
            })
        },
        redirectHome() {
            this.$router.push('/')
        },
        getProducts() {
            axios.get('product')
                .then((response) => {
                    this.products = response.data.data
                    console.log(this.products)
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    console.log('A requisição acabou!');
                })
        }
    },
    data() {
        return {
            selectedProduct: {},
            curretTitle: 'Meu título',
            showModal: false,
            route: this.$route,
            products: [],
        }
    },
    components: {
        Modal,
    },
    mounted () {
        axios.defaults.baseURL = 'http://192.168.0.134:8000/api/'
        this.getProducts()
    },
}
</script>

<style scoped>
.selected-box {
    background-color: #fff2;
}
.product-box {
    transition: .3s;
    border: 1px solid #ededed;
    padding: 20px;
    margin: 15px;
    border-radius: 10px;
}
.product-box h3 {
    font-size: 21px;
}
</style>
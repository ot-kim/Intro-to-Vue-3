const product = "socks"
const app = Vue.createApp({
    // data: function(){}
    // Note : use arrow function 
    data(){
        return {
            cart:0,
            product: 'Socks',
            brand: 'vue mastery',
            selectedVariant: 0,
            image: './assets/images/socks_green.jpg',
            details: ['50% cotton','30% wool','20% polyester'],
            variants: [
                { id:2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id:2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    method: {
        addCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        } 
    }
})
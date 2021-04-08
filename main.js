const product = "socks"
const app = Vue.createApp({
    // data: function(){}
    // Note : use arrow function 
    data(){
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: false,
            details: ['50% cotton','30% wool','20% polyester'],
            variants: [
                { id:2234, color: 'green' },
                { id:2235, color: 'blue' },
                { id:2236, color: 'red' },
            ]
        }
    }

})
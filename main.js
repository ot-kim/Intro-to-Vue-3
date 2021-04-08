const product = "socks"
const app = Vue.createApp({
    // data: function(){}
    // Note : use arrow function 
    data(){
        return {
            product: 'Socks',
            image: '/assets/images/socks_green.jpg',
            inStock: false
        }
    }

})
//const baseUrl = "http://localhost:49687/api/books"
const baseUrl = "https://anbo-books.azurewebsites.net/api/Books" 


Vue.createApp({
    data() {
        return {
            allBooks: [],
            books: [],
            title: null
        }
    },
    async created() { // life cycle method. Called when browser reloads page
        this.getAll(baseUrl)
    },
    methods: {
        async getAll(url) {
            try {
                const response = await axios.get(url)
                this.allBooks = await response.data
                this.books = this.allBooks
                console.log(this.allBooks)
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },
        sortById() {
            // https://www.w3schools.com/js/js_array_sort.asp
            this.books.sort((book1, book2) => book1.id - book2.id)
        },
        sortByTitle() {
            this.books.sort((book1, book2) =>
                book1.title.localeCompare(book2.title))
        },
        sortByPriceAscending() {
            this.books.sort((book1, book2) => book1.price - book2.price)
        },
        sortByPriceDescending() {
            this.books.sort((book1, book2) => book2.price - book1.price)
        },
        filterByTitle(title) {
            console.log("Title:" + title + ":")
            console.log("All books " + this.allBooks)
            this.books = this.allBooks.filter(b => b.title.includes(title))
            console.log("filtered Books: " + this.books)
        }
    }
}).mount("#app")
var app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                title: 'Discovering Maths,1A',
                author: "Alan",
                price: 30,
                level: 'Secondary 1',
                img: ""

            },
            {
                id: 2,
                title: 'Discovering Maths,1B',
                author: 'Alan',
                price: 30,
                level: 'Secondary 1',
            },
            {
                id: 3,
                title: 'Jauhari,2A',
                author: 'Rob',
                price: 20,
                level: 'Secondary 2',
            },
            {
                id: 4,
                title: 'Jauhari,2B',
                author: 'Rob',
                price: 20,
                level: 'Secondary 2',
            },
            {
                id: 5,
                title: 'Discover Chemistry',
                author:'Chan',
                price: 40,
                level: 'Secondary 3',
            },
            {
                id: 6,
                title: 'Discover Physics',
                author: 'Alex',
                price: 40,
                level: 'Secondary 3',
            },
            {
                id: 7,
                title: 'Discover Pure Chemistry',
                author: 'Alex',
                price: 50,
                level: 'Secondary 4',

                id: 8,
                title: 'Discover Pure Physics',
                author: 'Alex',
                price: 50,
                level: 'Secondary 4',
            },
            {    id: 9,
                title: 'Discover Pure Chemistry',
                author: 'Alex',
                price: 50,
                level: 'Secondary 4',
            }],

                

            
        currentBooks: []       
   },
   methods: {
    getBooks: function (message) {
     alert(message)
    this.currentBooks =  this.books.filter(book => book.level==message);
    } 
}
})

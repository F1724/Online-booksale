var app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                title: 'Discovering Maths,1A',
                price: "$30",
                level: 'Secondary 1',
                img: "img/discovering maths 1A.jpg",
                
            },
            {
                id: 2,
                title: 'Discovering Maths,1B',
                price: "$30",
                level: 'Secondary 1',
                img: "img/discovering maths 1B.jpg",
                
            },
            {
                id: 3,
                title: 'Jauhari,2A',
                price: "$20",
                level: 'Secondary 2',
                img: "img/jauhari 2A.jpg",
                

            },
            {
                id: 4,
                title: 'Jauhari,2B',
                price: "$20",
                level: 'Secondary 2',
                img: "img/jauhari 2B.jpg"
            },
            {
                id: 5,
                title: 'Discover Chemistry',
                price: "$40",
                level: 'Secondary 3',
                img: "img/discovering chemistry GCE O Level.jpg"
            },
            {
                id: 6,
                title: 'Discover Physics',
                price: "$40",
                level: 'Secondary 3',
                img: "img/discovering physics GCE O Level.jpg"
            },
            {
                id: 7,
                title: 'Discover Pure Chemistry',
                price: "$50",
                level: 'Secondary 4',
                img: "img/pure chemistry textbook2 GCE O Level.jpg"
            },
            {    
                id: 8,
                title: 'Discover Pure Physics',
                price: "$50",
                level: 'Secondary 4',
                img: "img/pure physics textbook GCE O Level.jpg"

            },
            {
                id: 9,
                title: 'Discover Pure Biology',
                price: "$50",
                level: 'Secondary 4',
                img: "img/pure biology textbook GCE O Level.jpg"

            },
            
            {
                id: 10,
                title: 'Discovering Maths,2A',
                price: "$50",
                level:'Secondary 2',
                img: "img/discovering mathematics 2A.jpg"
            },

        
            {
                id: 11,
                title: 'Discovering Maths,2B',
                price: "$50",
                level:'Secondary 2',
                img: "img/discovering mathematics 2B.jpg"

            },    

            {
                id: 12,
                title: 'Discovering Maths,3A',
                price: "$50",
                level:'Secondary 3',
                img: "img/discovering mathematics 3A.jpg"
            },
           
            {
                id: 13,
                title: 'Discovering Maths,3B',
                price: "$50",
                level:'Secondary 3',
                img: "img/discovering mathematics 3B.jpg"
            },


            {
                id: 14,
                title: 'Discovering Maths,4A',
                price: "$50",
                level:'Secondary 4',
                img: "img/discovering mathematics 4A.jpg"
            },
            
            {
                id: 15,
                title: 'Discovering Maths,4B',
                price: "$50",
                level:'Secondary 4',
                img: "img/discovering mathematics 4B.jpg"

            },

            {
                id: 16,
                title: 'Additional Mathematics B',
                price: "$23.90",
                level:'Secondary 4',
                img: "img/discovering Additional Mathematics B.jpg"

            },

            {
                id: 17,
                title: 'Additional Mathematics A',
                price: "$23.90",
                level:'Secondary 3',
                img: "img/discovering Additional Mathematics A.jpg"

            },
         
            {
                id: 18,
                title: 'Discovering Biology ',
                price: "$50",
                level:'Secondary 3',
                img: "img/discovering biology GCE O Level.jpg"

            },


            {
                id: 19,
                title: ' ',
                price: "$50",
                level:'Secondary 3',
                img: ""

            },


            



        
],
        currentBooks: [],
    },
    methods: {
        getBooks: function (levelchoice, id) {
            this.currentBooks = this.books.filter(book => book.level == levelchoice);

            let buttons = document.getElementsByTagName('button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("btn-primary")

            document.getElementById(id).classList.add("btn-primary")
            console.log("color changed")

           
            }

        },
        
            // use message to pass the book.name
            // // find a book obj that matches the same book.name that was passed
            // change book obj.reserved from false to true
           
           
    
    }
})

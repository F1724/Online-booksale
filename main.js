var app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                title: 'Discovering Maths 1A',
                price: "$30",
                level: 'Secondary 1',
                img: "img/discovering maths 1A.jpg",
                
            },
            {
                id: 2,
                title: 'Discovering Maths 1B',
                price: "$30",
                level: 'Secondary 1',
                img: "img/discovering maths 1B.jpg",
                
            },
            {
                id: 3,
                title: 'Jauhari 2A textbook',
                price: "$20",
                level: 'Secondary 2',
                img: "img/jauhari 2A.jpg",
                

            },
            {
                id: 4,
                title: 'Jauhari 2B activity book',
                price: "$20",
                level: 'Secondary 2',
                img: "img/jauhari 2B.jpg"
            },
            {
                id: 5,
                title: 'Discover Chemistry Theory book',
                price: "$40",
                level: 'Secondary 3',
                img: "img/discovering chemistry GCE O Level.jpg"
            },
            {
                id: 6,
                title: 'Discover Physics Theory book',
                price: "$40",
                level: 'Secondary 3',
                img: "img/discovering physics GCE O Level.jpg"
            },
            {
                id: 7,
                title: 'Pure Chemistry Theory book',
                price: "$50",
                level: 'Secondary 4',
                img: "img/pure chemistry textbook2 GCE O Level.jpg"
            },
            {    
                id: 8,
                title: 'Pure Physics Theory book ',
                price: "$50",
                level: 'Secondary 4',
                img: "img/pure physics textbook GCE O Level.jpg"

            },
            {
                id: 9,
                title: 'Pure Biology Theory book ',
                price: "$50",
                level: 'Secondary 4',
                img: "img/pure biology textbook GCE O Level.jpg"

            },
            
            {
                id: 10,
                title: 'Discovering Maths 2A',
                price: "$50",
                level:'Secondary 2',
                img: "img/discovering mathematics 2A.jpg"
            },

        
            {
                id: 11,
                title: 'Discovering Maths 2B',
                price: "$50",
                level:'Secondary 2',
                img: "img/discovering mathematics 2B.jpg"

            },    

            {
                id: 12,
                title: 'Discovering Maths 3A',
                price: "$50",
                level:'Secondary 3',
                img: "img/discovering mathematics 3A.jpg"
            },
           
            {
                id: 13,
                title: 'Discovering Maths 3B',
                price: "$50",
                level:'Secondary 3',
                img: "img/discovering mathematics 3B.jpg"
            },


            {
                id: 14,
                title: 'Discovering Maths 4A',
                price: "$50",
                level:'Secondary 4',
                img: "img/discovering mathematics 4A.jpg"
            },
            
            {
                id: 15,
                title: 'Discovering Maths 4B',
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
                title: 'Discover Biology Theory book ',
                price: "$50",
                level:'Secondary 3',
                img: "img/discovering biology GCE O Level.jpg"

            },


            {
                id: 19,
                title: 'Jauhari 4A activity book ',
                price: "$50",
                level:'Secondary 4',
                img: "img/jauhari 4AA.jpg"

            },


            {
                id: 20,
                title: 'Jauhari 4B textbook ',
                price: "$50",
                level:'Secondary 4',
                img: "img/jauhari 4B.jpg"

            },


            {
                id: 21,
                title: 'Jauhari 3A activity book ',
                price: "$50",
                level:'Secondary 3',
                img: "img/jauhari 3AA.jpg"

            },

            {
                id: 22,
                title: 'Jauhari 3A textbook ',
                price: "$50",
                level:'Secondary 3',
                img: "img/jauhari 3AT.jpg"

            },
            {
                id: 23,
                title: 'Jauhari 3B activity book ',
                price: "$50",
                level:'Secondary 3',
                img: "img/jauhari 3BA.jpg"

            },
            {
                id: 24,
                title: 'Jauhari 3B textbook ',
                price: "$50",
                level:'Secondary 3',
                img: "img/jauhari 3BT.jpg"

            }, 

            {
                id: 25,
                title: 'Jauhari 4B activity book ',
                price: "$50",
                level:'Secondary 4',
                img: "img/jauhari 4BA.jpg"

            },

            {
                id: 26,
                title: 'Jauhari 4A textbook ',
                price: "$50",
                level:'Secondary 4',
                img: "img/jauhari 4A.jpg"

            },


            {
                id: 27,
                title: 'Jauhari 1A activity book ',
                price: "$50",
                level:'Secondary 1',
                img: "img/jauhari 1A.jpg"

            },


            {
                id: 28,
                title: 'Jauhari 1A textbook ',
                price: "$50",
                level:'Secondary 1',
                img: "img/jauhari 1AT.jpg"

            },


            {
                id: 29,
                title: 'Jauhari 1B activity book ',
                price: "$50",
                level:'Secondary 1',
                img: "img/jauhari 1BA.jpg"

            },


            {
                id: 30,
                title: 'Jauhari 1B textbook ',
                price: "$50",
                level:'Secondary 1',
                img: "img/jauhari 1B.jpg"

            },


            {
                id: 31,
                title: 'Jauhari 2A activity book ',
                price: "$50",
                level:'Secondary 2',
                img: "img/jauhari 2AA.jpg"

            },


            {
                id: 32,
                title: 'Jauhari 2B textbook ',
                price: "$50",
                level:'Secondary 2',
                img: "img/jauhari 2BA.jpg"

            },

            {
                id: 33,
                title: 'Discover Biology Practical book ',
                price: "$50",
                level:'Secondary 3',
                img: "img/discovering biology practical book GCE O Level.jpg"

            },

            {
                id: 34,
                title: 'Discover Physics Practical book ',
                price: "$50",
                level:'Secondary 3',
                img: "img/discovering physics practical book GCE O Level.jpg"

            },

            {
                id: 35,
                title: 'Discover Chemistry Practical book ',
                price: "$50",
                level:'Secondary 3',
                img: "img/discovering chemistry practical book GCE O Level.jpg"

            },

            {
                id: 36,
                title: 'Pure Biology Practical book ',
                price: "$50",
                level:'Secondary 4',
                img: "img/pure biology practical book GCE O Level.jpg"

            },

            {
                id: 37,
                title: 'Pure Physics Practical book ',
                price: "$50",
                level:'Secondary 4',
                img: "img/pure physics practical book GCE O Level.jpg"

            },

            {
                id: 38,
                title: 'Pure Chemistry Practical book ',
                price: "$50",
                level:'Secondary 4',
                img: "img/pure chemistry practical book GCE O Level.jpg"

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
    }
})
let app = new Vue({
    el: '#root',
    data : {
        books : [],
        searchValue : '',
        loader : 'false'
    },

    computed : {
        filteredBooks : function () {
            let filteredArray = this.books.filter(el => el.title.toLowerCase().match(this.searchValue.toLowerCase()) )
            return filteredArray.length > 0 ? filteredArray : []
        }
        
    },

    methods : {
        getData : async function () {
            const response = await fetch('https://api.myjson.com/bins/zyv02', {
                method: 'GET',
            });
            const json = await response.json();
            const books = await json['books']
            this.books = books
        },
    },

    created : function () {  
        this.loader = true      
        this.getData()
            .then(()=>{
                this.loader = false
            })
            .catch(err => console.log(err))
    },

})


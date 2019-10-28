let app = new Vue({
    el: '#root',
    data : {
        books : [],
        search : '',
        filteredBooks : []
    },

    methods : {
        filterBooks : function() {
            console.log('h')
            let filteredArray = this.books.filter(el => el.title.toLowerCase().match(this.search.toLowerCase()) )
            console.log(filteredArray.length)
            if (filteredArray.length == 0) {
                
            }
            filteredArray.length > 0 ? this.filteredBooks = filteredArray : this.filteredBooks = this.books
        },

        getData : async function () {
            const response = await fetch('https://api.myjson.com/bins/zyv02', {
                method: 'GET',
            });
            const json = await response.json();
            const books = await json['books']
            this.books = books
        },

        // ***********************************************************************************************************************
        fetchAndRenderData : function (event) {
            this.getData(this.chamber)
                .then( () => {
                    this.filterBooks()
                }).catch(err => console.log(err))
        },
        
    },

    created : function () {        
        this.fetchAndRenderData()
    },

})


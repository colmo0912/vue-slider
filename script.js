const slider = new Vue({

    el: "#app",
    data:{

        index: 0,

        itemImg: [
        
        "https://picsum.photos/id/237/560/450",
        "https://picsum.photos/id/236/560/450",
        "https://picsum.photos/id/235/560/450"

        ]

    },


    methods:{
        cliccaSinistra:function(){

            if(index===this.itemImg[0]){
                
                this.itemImg===this.itemImg[2]
            }else if(this.itemImg===this.itemImg[2]){
                this.itemImg===this.itemImg[1]
            }else if( this.itemImg===this.itemImg[1]){

                this.itemImg===this.itemImg[0]
            }
        },

        cliccaDestra:function(){

            if(itemImg===this.itemImg[0]){

                this.itemImg===this.itemImg[1]
            }else if(this.itemImg===this.itemImg[1]){

                this.itemImg===this.itemImg[2]
            }else if(this.itemImg===this.itemImg[2]){

                this.itemImg===this.itemImg[0]
            }
        }

    }

})
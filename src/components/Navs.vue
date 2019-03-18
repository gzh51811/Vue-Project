<template>
    <div>
        <ul>
            <li v-for="goods in goodlist" :key="goods.id">
                <img :src="goods.adPic" alt="">
                <p><span v-text="goods.adTitle"></span></p>
            </li>
            
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            goodlist:[]
        }
    },
    created(){
        this.$axios.get('http://localhost:3000/setting/Swipe',{
             params: {

            }
        }).then( (response) =>{

            // console.log(response.data);
            let res = response.data[1].data.templatedata[0].contentList;
            this.goodlist = res;
            // console.log(this.goodlist);
      // let list = goodlist[0]
      
        })
    }
}
</script>
<style lang="scss" scoped>
    div{
        width: 100%;
        height: 11.875rem;
        ul{
            margin:0;
            padding: .625rem 0 0;
            width: 100%;

            li{
                list-style: none;
                width: 4rem;
                height: 5rem;
                float: left;
                margin: .3125rem;
                display: flex;
                align-items: baseline;
                justify-content: center;
                position: relative;
                img{
                    width: 2.5rem;
                    height: 2.5rem;
                    align-items: baseline;
                }
                p{
                    width: 4rem;
                    height: 1.875rem;
                    position: absolute;
                    left: 0;
                    bottom: -0.8125rem;  
                    span{
                        display: block;
                        width: 4rem;
                        height: 1.875rem;
                        line-height: 1.875rem;
                        text-align: center;
                        font-size: .75rem;
                    }                  

                }
            }
        }
    }
</style>



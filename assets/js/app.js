import { createApp, ref, reactive, watch, onMounted, computed } from "vue";

import OneItem from "./components/OneItem.js";

const url = 'https://fakestoreapi.com/products';

createApp({

    setup(){

        const title = ref('Список товаров');

        const list = reactive([]);

        onMounted( async() => {
            let data = await fetch(url);
                data = await data.json();
            list.push(...data);
            
            console.log(data);
        });

        const sort = ref('');

        const search = ref('');

        const listToShow = computed(() => {

            let filteredList = list
            .data
            .filter( item => item
                .description
                .toLowerCase().
                includes(search
                    .value
                    .toLowerCase()) || 
                            item
                .title
                .toLowerCase().
                includes(search
                    .value
                    .toLowerCase()));

            if(sort.value == 'up'){
                filteredList.sort ((a, b) => a.price - b.price);
            } else if (sort.value == 'down'){
                filteredList.sort((a, b) => b.price - a.price);
            }

            return filteredList
        })



        return {
            title,
            list,
            sort,
            search,
            listToShow
        }
    },

    components: {
        OneItem
    }




}).mount('#app');




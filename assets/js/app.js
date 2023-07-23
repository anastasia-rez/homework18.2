
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
            
        });

        const sort = ref('');

        const search = ref('');

        const sortRange = ref('');

        console.log(list);

        const listToShow = computed(() => {

            let filteredList = list
            .filter( item => 
                
                item
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
                    .toLowerCase()))

                .filter(item => item.price >= minPrice.value && item.price <= maxPrice.value);

            if(sort.value == 'up'){
                filteredList.sort ((a, b) => a.price - b.price);
            } else if (sort.value == 'down'){
                filteredList.sort((a, b) => b.price - a.price);
            }

            
            // if(minPrice.value > maxPrice.value) {
            //     let temp = maxPrice.value;
            //     maxPrice.value = minPrice.value;
            //     minPrice.value = temp;
            // }

            return filteredList
        });

        const minPrice = ref(0);

        const maxPrice = ref(1000);



        return {
            title,
            list,
            sort,
            search,
            listToShow,
            minPrice,
            maxPrice,
            sortRange
        }
    },

    components: {
        OneItem
    }


}).mount('#app');




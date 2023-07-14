import{ref, reactive } from 'vue';

export default {
    props: ['productItem'],
    setup(props){


        return{
            props
        }
    },
    template: `
    <div class="py-2">
                <div class="card overflow-auto m-2" style="height:500px">
                    <img :src="props.productItem.image" class="card-img-top p-3" style="height:250px">
                    <div class="card-body">
            
                        <h5 class="card-title" >
                            {{props.productItem.title}}
                        </h5>
            
                        <p class="card-text ">
                            {{props.productItem.description}}
                        </p>
            
                        <p class="text-end fs-3">
                            {{props.productItem.price}} $
                        </p>
                    
                    </div>
                    
                </div>
            
            </div>
    `
}
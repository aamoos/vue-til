<template>
  <li>
    <div class="post-title">
        {{ postItem.title }}
    </div>
    <div class="post-contents">
        {{ postItem.contents }}
    </div>
    <div clsas="post-time">
        {{ postItem.createdAt | formatDate }}
        <i class="icon ion-md-create" @click="routeEditPage"></i>
        <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
</li>
</template>

<script>
import { deletePost } from '@/api/posts'

export default {
    props: {
        postItem: {
            type: Object,
            required: true,
        }
    },
    // filters: {
    //     formatDate(value){
    //         return new Date(value);
    //     }
    // },
    methods: {
        async deleteItem(){
            if(confirm('you want to delete it?')){
                await deletePost(this.postItem._id);
                this.$emit('refresh');
            }
        },
        routeEditPage(){
            this.$rotuer.push('/post/asddsaadsdas')
        }
    }
}
</script>

<style>

</style>
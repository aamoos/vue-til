<template>
  <li>
    <div class="post-title">
        {{ postItem.title }}
    </div>
    <div class="post-contents">
        {{ postItem.contents }}
    </div>
    <div clsas="post-time">
        {{ postItem.createdAt }}
    </div>
</li>
</template>

<script>
export default {
    props: {
        postItem: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style>

</style>
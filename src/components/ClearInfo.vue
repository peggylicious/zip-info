<template>
    <ion-button color="light" expand="block" v-if="clInfo" @click="$emit('clear-info')">
        Clear
    </ion-button>
</template>

<script>
export default {
    name: "ClearInfo",
    props: ["clInfo"]
}
</script>

<style>

</style>
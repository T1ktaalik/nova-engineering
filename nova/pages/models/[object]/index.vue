<template>
    <div>
        <div>
            <h2>{{ $route.params.object }}xopx</h2>
            <h4>{{ message }}</h4>
        </div>
        <MovieSearch />
        <FolderFile />
        <FolderFile />
    </div>
</template>
<script setup >
const route = useRoute();
const message =  computed(()=> `Ok-ok. Теперь у нас вью 3 и сетап! ${route.params.object}`)
</script>
<template>
  <div>
    これは{{test}}です。
    <boughtItemTables/>
  </div>
</template>
<script setup>
const {data:test} = await useFetch('/api/bought-items');
</script>

<template>
  <Header/>
    <div>
      {{houseHoldItems}}
        <slot />
    </div>
  <Footer/>
</template>
<script lang="ts" setup>
  const { data :houseHoldItems} = await useFetch('http://nest-back:4000/bought-items');
</script>
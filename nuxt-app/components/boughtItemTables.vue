<template>
  <div class="overflow-x-auto pb-3">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>名前</th>
          <th>価格</th>
          <th>登録日</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="boughtItem in boughtItems">
          <th>{{boughtItem.id}}</th>
          <td>{{boughtItem.name}}</td>
          <td>{{boughtItem.price}}</td>
          <td>{{boughtItem.boughtDate}}</td>
        </tr>
        <InputBoughtItem/>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const { data: boughtItems } = await useFetch(
  "http://nest-back:4000/bought-items"
);
</script>

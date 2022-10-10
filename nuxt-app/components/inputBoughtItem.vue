<template>
  <tr>
    <th></th>
    <th>
      <input
        v-model="name"
        type="text"
        placeholder="項目名を入力してください"
        class="input input-bordered input-error w-full max-w-xs"
      />
    </th>
    <th>
      <input
        v-model="price"
        type="number"
        placeholder="価格を入力してください"
        class="input input-bordered input-error w-full max-w-xs"
      />
    </th>
    <th><button class="btn btn-outline btn-success">登録する</button></th>
  </tr>
</template>
<script setup>
const name = ref("");
</script>

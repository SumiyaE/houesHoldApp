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
          <th>{{ boughtItem.id }}</th>
          <td>{{ boughtItem.name }}</td>
          <td>{{ boughtItem.price }}</td>
          <td>{{ boughtItem.boughtDate }}</td>
        </tr>
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
          <th>
            <button @click="post" class="btn btn-outline btn-success">
              登録する
            </button>
          </th>
        </tr>
      </tbody>
    </table>
    <p>{{ count }}</p>
  </div>
</template>
<script setup>
const { data: boughtItems } = await useFetch(
  "http://nest-back:4000/bought-items"
);
const name = ref("");
const price = ref(0);
const count = ref(0);
const post =  () => {
      useFetch("http://nest-back:4000/bought-items", {
        method: "POST",
        body: {
          name: name.value,
          price: price.value,
        },
        initialCache:false,
        // watch:[boughtItems]
      })
  count.value++
  refreshNuxtData()
};
</script>

<template>
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product Name</th>
        <th scope="col">Manufactory</th>
        <th scope="col">Price</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productList" :key="product.id">
        <th scope="row">{{ product.id }}</th>
        <td>{{ product.productName }}</td>
        <td>${{ product.price }}</td>
        <td>{{ product.manufactory }}</td>
        <td>
          <button type="button" class="btn btn-danger">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    productList: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style>
</style>
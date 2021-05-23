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
      <product-item
        v-for="product in productList"
        :key="product.id"
        :productName="product.productName"
        :manufactory="product.manufactory"
        :price="product.price"
      >
      </product-item>
    </tbody>
  </table>
</template>
<script>
import ProductItem from './ProductItem.vue';

export default {
  components: {
    productItem: ProductItem,
  },

  data() {
    return {
      productList: [
        {
          id: 1,
          productName: 'iPhone SE',
          manufactory: 'Apple Inc.',
          price: 700,
        },
        {
          id: 2,
          productName: 'iPhone 12 Pro',
          manufactory: 'Apple Inc.',
          price: 1500,
        },
        {
          id: 3,
          productName: 'iPhone 11',
          manufactory: 'Apple Inc.',
          price: 1000,
        },
        {
          id: 4,
          productName: 'Samsung Galaxy S21',
          manufactory: 'Samsung Group',
          price: 900,
        },
      ],
    };
  },
};
</script>
<style>
</style>
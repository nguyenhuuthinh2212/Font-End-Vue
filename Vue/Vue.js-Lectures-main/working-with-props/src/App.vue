<template>
  <main class="container">
    <div>
      <product-list :productList="productList"> </product-list>
    </div>
  </main>
</template>

<script>
export default {
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

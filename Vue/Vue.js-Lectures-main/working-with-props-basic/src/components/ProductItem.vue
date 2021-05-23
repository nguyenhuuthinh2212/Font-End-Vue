<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ productName }}</td>
    <td>${{ price }}</td>
    <td>{{ manufactory }}</td>
    <td>
      <button type="button" class="btn btn-danger">Remove</button>
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    id: { type: Number, required: true },
    productName: { type: String, required: true },
    manufactory: { type: String, required: true },
    cost: { type: String, required: true },
  },
};
</script>
<style>
</style>

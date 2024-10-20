<template>
    <div>
      <h1>Информация о компании</h1>
      <div v-if="companyId">Информация о компании с ID: {{ companyId }}</div>
      <div v-else>Компания не найдена.</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        companyId: null,
      };
    },
    created() {
      const pathSegments = this.$route.path.split('/');
      this.companyId = pathSegments[pathSegments.length - 1];
      companyId }
  };
  </script>
  
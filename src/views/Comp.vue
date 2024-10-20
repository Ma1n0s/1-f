<template>
    <div>
      <h1>Подтвержденные компании</h1>
      <ul>
        <li v-for="company in companies" :key="company.id">{{ company.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        companies: [],
      };
    },
    mounted() {
      this.fetchCompanies();
    },
    methods: {
      async fetchCompanies() {
        try {
          const response = await fetch('http://localhost:8000/api/companies');
          this.companies = await response.json();
        } catch (error) {
          console.error('Ошибка при получении компаний:', error);
        }
      },
    },
  };
  </script>
<template>
  <div>
      <h3>Комментарии</h3>
      <div v-for="comment in comments" :key="comment.id">
          <p><strong>{{ comment.user.name }}:</strong> {{ comment.comment }}</p>
      </div>

      <textarea v-model="newComment" placeholder="Ваш комментарий"></textarea>
      <button @click="addComment">Добавить комментарий</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          comments: [],
          newComment: '',
      };
  },
  mounted() {
      this.fetchComments();
  },
  methods: {
      fetchComments() {
          axios.get('/api/comments').then(response => {
              this.comments = response.data;
          });
      },
      addComment() {
          axios.post('/api/comments', { comment: this.newComment })
              .then(response => {
                  this.comments.push(response.data);
                  this.newComment = '';
              });
      },
  },
};
</script>

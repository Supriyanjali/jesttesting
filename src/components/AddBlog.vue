<template>
  <main id="add-blog">
    <h1>Add New Blog</h1>
    <form v-if="!submitted">
      <div class="title">
        <label for="titleName">Title <span>*</span></label>
        <textarea
          type="text"
          rows="6"
          id="titleName"
          placeholder="Give me the title of your blog...."
          v-model="blog.title"
        />
      </div>
      <div class="description">
        <label for="desc">Description <span>*</span></label>
        <textarea
          rows="10"
          type="text"
          placeholder="Give me the description of your blog...."
          v-model="blog.description"
          id="desc"
        />
      </div>
      <button class="submitButton" v-on:click.prevent="submitBlog">
        ADD BLOG
      </button>
    </form>
    <div v-if="submitted">
      <PreviewBlog :blog="blog"></PreviewBlog>
    </div>
  </main>
</template>
<script src="./js/AddBlog.js"></script>
<style scoped>
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
.submitButton {
  color: white;
  padding: 10px;
  margin-top: 20px;
  background-color: rgb(42, 43, 44);
  border: 2px solid white;
  border-radius: 5px;
}
span {
  color: red;
}
textarea {
  border: 1px solid rgb(128, 124, 124);
  border-radius: 10px;
  width: 100%;
}
@media (max-width: 800px) {
  #add-blog {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 75%;
  }
  .submitButton {
    width: fit-content;
    margin: 20px auto;
  }
}
</style>

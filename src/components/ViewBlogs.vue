<template>
  <div id="show-blogs">
    <h1>All Blogs</h1>
    <input
      type="text"
      v-model="search"
      @keyup="activate"
      placeholder="search blogs"
    />
    <div>
      <div v-if="blogsListFxn.length > 0">
        <div
          v-for="blog in blogsListFxn"
          :key="blog.id"
          :blog="blog"
          class="single-blog"
        >
          <h2 v-rainbow>{{ blog.title.toUpperCase() }}</h2>
          <div v-if="blog.description.length > 40" class="text">
            <span v-if="!readMore[blog.id]">
              {{ blog.description.substring(0, 40) + ".." }}
            </span>
            <span v-if="readMore[blog.id]">{{ blog.description }}</span>
            <span
              @click="showMore(blog.id)"
              v-if="!readMore[blog.id]"
              class="myBtn"
            >
              Show more
            </span>
            <span
              @click="showLess(blog.id)"
              v-if="readMore[blog.id]"
              class="myBtn"
            >
              Show less
            </span>
          </div>
          <div v-else>{{ blog.description }}</div>
          <div class="button">
            <button class="deleteButton" @click="showModal()">Delete</button>
            <button class="editButton" @click="editingBlog(blog)">
              Edit Blog
            </button>
          </div>
          <delete-modal
            v-if="toShowModel"
            title="Cofirmation to Delete..."
            id="delete-modal"
          >
            <template #default><p>Once Deleted Cannot Be Reverted</p></template>
            <template #actions
              ><button class="editButton" @click="dontShow()">Cancel</button
              ><button class="deleteButton" @click="deletedBlog(blog.id)">
                Delete Anyway
              </button></template
            >
          </delete-modal>
        </div>
      </div>
      <div v-else><img src="@/assets/noblog1.jpeg" /></div>
    </div>
  </div>
</template>
<script src="./js/ViewBlogs.js"></script>
<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 20px;
  margin-top: 2rem;
  max-width: 40rem;
}
input[type="text"] {
  display: block;
  width: 50%;
  padding: 10px;
  border-radius: 10px;
}
.text {
  inline-size: 150px;
  overflow-wrap: break-word;
}
.deleteButton {
  margin-top: 20px;
  color: white;
  padding: 7px;
  margin-left: 5px;
  background-color: rgb(196, 52, 52);
  border: none;
  border-radius: 10px;
}
.editButton {
  margin-top: 20px;
  color: white;
  padding: 7px;
  margin-left: 5px;
  background-color: rgb(79, 109, 190);
  border: none;
  border-radius: 10px;
}
img {
  display: flex;
  margin: auto;
  margin-top: 200px;
}
.myBtn {
  color: rgb(63, 154, 207);
  display: inline;
}
.descript {
  display: inline;
}
.text {
  inline-size: 600px;
  overflow-wrap: break-word;
}
@media (max-width: 800px) {
  #show-blogs {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .single-blog {
    padding: 10px;
    width: 250px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 2px 2px #c7c5c5;
    height: fit-content;
  }
  .button {
    display: inline;
  }
  .myBtn {
    color: rgb(31, 136, 197);
  }
  h2 {
    color: aqua;
  }
  .text {
    inline-size: 150px;
    overflow-wrap: break-word;
  }
}
</style>

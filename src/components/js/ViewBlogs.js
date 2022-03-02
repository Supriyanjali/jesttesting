import { mapActions, mapGetters } from 'vuex'
import swal from 'sweetalert'
export default {
  data () {
    return {
      search: '',
      timeout: null,
      filteredBlogs: []
    }
  },
  // directives: {
  //   'rainbow': {
  //     bind (el, binding, vnode) {
  //       el.style.color = '#' + Math.random().toString(16).slice(2, 8)
  //     }
  //   }
  // },
  computed: {
    ...mapGetters(['blogsList']),
    blogsListFxn () {
      if (this.search.length === 0) { return this.blogsList } else { return this.filteredBlogs }
    }
  },
  methods: {
    ...mapActions(['deleteBlog']),
    activate () {
      // console.log('I am in ')
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        this.blogsList.filter((blog) => {
          if (blog.title.includes(this.search)) {
            this.filteredBlogs.push(blog)
          }
        })
        console.log('filter--',this.filteredBlogs)
        return this.filteredBlogs
      }, 2000)
    },
    deletedBlog (id) {
          this.deleteBlog(id)
          swal({
            text: 'Blog has been edited successfully',
            icon: 'success'
          })
    },
    editingBlog (blog) {
      this.$store.state.blog = blog
      this.$router.push({ name: 'EditBlog', params: { id: blog.id } })
    }
  }
}

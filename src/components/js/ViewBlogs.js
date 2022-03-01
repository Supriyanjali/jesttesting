import { mapActions, mapGetters } from 'vuex'
const Swal = require('sweetalert2')
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
      console.log('I am in ')
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        this.blogsList.filter((blog) => {
          if (blog.title.includes(this.search)) {
            this.filteredBlogs.push(blog)
          }
        })
        console.log(this.filteredBlogs)
        return this.filteredBlogs
      }, 2000)
    },
    deletedBlog (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Once deleted cannot be',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.deleteBlog(id)
        }
      })
    },
    editingBlog (blog) {
      this.$store.state.blog = blog
      this.$router.push({ name: 'EditBlog', params: { id: blog.id } })
    }
  }
}

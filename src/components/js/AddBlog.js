import swal from 'sweetalert'
import { mapActions } from 'vuex'
import PreviewBlog from '@/components/PreviewBlog'
export default {
  data () {
    return {
      blog:
      {
        id: 3,
        title: '',
        description: ''
      },
      submitted: false
    }
  },
  components: {
    PreviewBlog
  },
  methods: {
    ...mapActions(['addBlog']),
    submitBlog () {
      if (this.blog.title && this.blog.description && this.blog.title.split(' ').length < 10) {
        this.addBlog(this.blog)

        swal({
          text: 'Blog added successfully',
          icon: 'success'
        })
        this.submitted = true
      } else if (this.blog.title.split(' ').length >= 10) {
        swal({
          text: 'Title must not be greater than 10 words',
          icon: 'warning'
        })
      } else {
        swal({
          text: 'Fill the details',
          icon: 'error'
        })
      }
    }
  }
}

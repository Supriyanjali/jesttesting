import store from '@/store/index'
jest.mock('@/store/index')
let state = null
const TYPE_STRING = 'abcdef'
const TYPE_INT = 1234
const TYPE_OBJ = {
  data1: TYPE_INT,
  data2: TYPE_STRING,
  data3: TYPE_STRING
}
// const TYPE_EMPTY_ARRAY = []
const TYPE_ARRAY = [ TYPE_OBJ ]

// // describe('GETTERS store/index.js', () => {
// //     beforeEach(() => {
// //         state = {
// //             blogs: TYPE_ARRAY,
// //              blog: TYPE_OBJ
// //         }
// //       })
// //     it('getters ', () => {
// //         state.blogs=TYPE_ARRAY
// //       expect(store.getters.blogsList(state)).toEqual(TYPE_ARRAY)
// //     //   expect(store.getters.blogToEdit(state)).toEqual(TYPE_OBJ)
// //     })
// //   })
// describe('ACTIONS store/index.js', () => {
//   const blog = {
//     id: 'TYPE_INT',
//     title: 'TYPE_STRING',
//     description: 'TYPE_STRING'
//   }
//   const commit = jest.fn()
//   it('action addBlog', () => {
//     store.actions.addBlog({ commit }, { blog })
//     expect(commit).toHaveBeenCalledWith('addBlog', blog)
//   })
// //   it('action editBlog', () => {
// //     store.actions.editBlog({ commit }, { blog })
// //     expect(commit).toHaveBeenCalledWith('editBlog', blog)
// //   })
// //   it('action deleteBlog', () => {
// //     store.actions.deleteBlog({ commit }, { blog })
// //     expect(commit).toHaveBeenCalledWith('deleteBlog', blog)
// //   })
// })
describe('MUTATIONS store/index.js', () => {
  beforeEach(() => {
    state = {
        blogs: [],
        blog: TYPE_OBJ,
        count: 1
      }
  })
  test('mutation ADD_BLOG', () => {
    const data1 = TYPE_OBJ
    // const data2 = TYPE_ARRAY
    store.mutations.ADD_BLOG(state, data1)
    expect(state.blogs).toBe(TYPE_ARRAY)
  })
//   it('mutation DELETE_BLOG', () => {
//     const blog = {
//       id: 'TYPE_INT',
//       title: 'TYPE_STRING',
//       description: 'TYPE_STRING'
//     }
//     store.mutations.DELETE_BLOG(state, blog)
//     expect(state.blogs.length()).toEqual(state.count - 1)
//   })
//   it('mutation EDIT_BLOG', () => {
//     const blog = {
//       id: 'TYPE_INT',
//       title: 'TYPE_STRING',
//       description: 'TYPE_STRING'
//     }
//     store.mutations.EDIT_BLOG(state, blog)
//     expect(state.blogs.length()).toEqual(state.count)
//   })
})

import store from '@/store/index'

describe('MUTATIONS store/index.js', () => {
    const blog = {
        id: 1,
        title: 'Hii',
        description: 'Hello'
    }
    const blogs = [{
        id: 1,
        title: 'Hii',
        description: 'Hello'
    }
    ]
    test('ADD_BLOG', () => {
        store.commit('ADD_BLOG', blog)
        expect(store.state.blogs).toStrictEqual(blogs)
    })
    test('DELETE_BLOG', () => {
        store.commit('ADD_BLOG', blog)
        store.commit('DELETE_BLOG', 1)
        expect(store.state.blogs).toStrictEqual([])
    })
    test('EDIT_BLOG', () => {
        const blog1 = {
            id: 1,
            title: 'Hii Supriya',
            description: 'Hello'
        }
        const blogs1 = [{
            id: 1,
            title: 'Hii Supriya',
            description: 'Hello'
        }]
        store.commit('ADD_BLOG', blog)
        expect(store.state.blogs).toStrictEqual(blogs)
        store.commit('EDIT_BLOG', blog1)
        expect(store.state.blogs).toStrictEqual(blogs1)
        // expect(store.state.blog).toStrictEqual(blog1)
    })
})

describe('ACTIONS store/index.js', () => {
    const blog = {
        id: 2,
        title: 'Hii Supriya',
        description: 'Hello Supriya'
    }
    test('addBlog', () => {
        store.dispatch('addBlog', blog)
        expect(store.state.blogs).toEqual([{
            id: 1,
            title: 'Hii',
            description: 'Hello'
        }, {
            id: 2,
            title: 'Hii Supriya',
            description: 'Hello Supriya'
        }])
    })
    test('deleteBlog', () => {
        store.dispatch('deleteBlog', 1)
        expect(store.state.blogs).toEqual([
            {
                id: 2,
                title: 'Hii Supriya',
                description: 'Hello Supriya'
            }])
    })
    test('editBlog', () => {
        const blog1 = {
            id: 2,
            title: 'Hii Chaitanya',
            description: 'Hello Chaitanya'
        }
        store.dispatch('editBlog', blog1)
        expect(store.state.blogs).toEqual([
            {
                id: 2,
                title: 'Hii Chaitanya',
                description: 'Hello Chaitanya'
            }])
    })
})

describe('GETTERS store/index.js', () => {
    const blog1 = {
        id: 1,
        title: 'Hii',
        description: 'Hello'
    }
    test('blogsList', () => {
        // store.commit('ADD_BLOG', blog)
        expect(store.getters.blogsList).toEqual(store.state.blogs)
    })
    test('blogtoEdit', () => {
        store.state.blog = blog1
        console.log(store.state.blog)
        expect(store.getters.blogToEdit).toEqual(blog1)
    })
})
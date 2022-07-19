const schema = normalizr.schema

const userSchema = new schema.Entity('users')

const commentSchema = new schema.Entity('comments', {
  commenter: userSchema
})

const postSchema = new schema.Entity('posts', {
  author: userSchema,
  comments: [ commentSchema ]
})

const blogSchema = new schema.Entity('blog', {
  posts: [ postSchema ]
})

fetch('http://localhost:8080/blog')
  .then(data => data.json())
  .then(blog => {
    const rawData = normalizr.denormalize(blog.result, blogSchema, blog.entities)

    console.log(rawData.length, blog.length)
  })
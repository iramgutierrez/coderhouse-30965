const normalizr = require('normalizr')
const fs = require('fs')

const util = require('util')

function print(objeto) {
    console.log(util.inspect(objeto,false,12,true))
}


const blogposts = require('./blogposts.json')

const commentSchema = new normalizr.schema.Entity('comments')

const authorSchema = new normalizr.schema.Entity('author')

const postSchema = new normalizr.schema.Entity('posts', {
  author: authorSchema,
  comments: [ commentSchema ]
})

const postArray = new normalizr.schema.Array(postSchema)

const normalizedBlogposts = normalizr.normalize(blogposts, postArray)

console.log({
  original : JSON.stringify(blogposts).length,
  normalized : JSON.stringify(normalizedBlogposts).length
})

print(normalizedBlogposts)

fs.promises
  .writeFile('./blogpostsNormalized.json', JSON.stringify(normalizedBlogposts, null, 2))
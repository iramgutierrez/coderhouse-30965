const normalizr = require('normalizr')
const fs = require('fs')

const blogpost = require('./blogpost.json')

/**
 * Tenemos una entidad principal Post
 * Un Post tiene una entidad Author
 * Un Post tiene un arreglo de entidades Comments
 * 
 */

const commentSchema = new normalizr.schema.Entity('comments')

const authorSchema = new normalizr.schema.Entity('author')

const postSchema = new normalizr.schema.Entity('posts', {
  author: authorSchema,
  comments: [ commentSchema ]
})

const normalizedBlogpost = normalizr.normalize(blogpost, postSchema)

const denormalizedBlogpost = normalizr.denormalize(normalizedBlogpost.result, postSchema, normalizedBlogpost.entities)

fs.promises
  .writeFile('./blogpostNormalized.json', JSON.stringify(normalizedBlogpost, null, 2))

fs.promises
  .writeFile('./blogpostDenormalized.json', JSON.stringify(denormalizedBlogpost, null, 2))
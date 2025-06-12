import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {createClient} from '@sanity/client'

// top level client to fetch and log out the current user
const client = createClient({
  projectId: '0m9j17gd',
  dataset: 'production',
  useCdn: true, // Set to false to bypass the edge cache
  apiVersion: '2025-02-06', // Use current date (YYYY-MM-DD)
})

const currentUser = await client.request({
  uri: '/users/me',
  withCredentials: true,
})

console.log(currentUser)

let config = {
  name: 'default',
  title: 'Editor Studio',

  projectId: '0m9j17gd',
  dataset: 'production',

  plugins: [structureTool()], // no vision tool for non-admins

  schema: {
    types: schemaTypes,
  },
}

if (currentUser.role === 'administrator') {
  config = {
    name: 'default',
    title: 'Administrator Studio',

    projectId: '0m9j17gd',
    dataset: 'production',

    plugins: [structureTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  }
}

export default defineConfig(config)

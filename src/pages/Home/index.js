/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import Seo from '@components/Seo'
import Layout from '@components/Layout'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  return (
    <>
      <Seo title="Home" description="Description of Home" />
      <Layout>ggg</Layout>
    </>
  )
}

export default Home

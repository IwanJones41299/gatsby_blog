import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Post from "../components/Post";
import { Col, Row } from "react-bootstrap";

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    <Row>
    { 
      data.allMarkdownRemark.edges.map(post => {
        const { title, author, date, description, path } = post.node.frontmatter;

        return (
          <Col md={4}>
          <Post
            title={title}
            author={author}
            date={date}
            description={description}
            key={`${date}__${title}`}
            path={path}
          />
          </Col>
        )
      })
    }
    </Row>
  </Layout>
);
export default Blog
import React from "react"
import { Link } from "gatsby"
import "./post.css"
import { Card, CardGroup, Button, Row } from "react-bootstrap"
import card_img from "../images/gatsby-icon.png";

const Post = ({ title, author, date, description, path }) => (
  <CardGroup>
    <Card className="Card shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Img className="blog_img" variant="top" src={card_img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description} <br /> {author} <br />
          <small className="text-muted">Published : {date}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  </CardGroup>
)

export default Post

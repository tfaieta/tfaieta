import React from 'react'
import styled from 'styled-components'
import { shelves } from './shelveData'
import '../styles/styles.css'

class BlogIndex extends React.Component {
  render() {
    return (
      <Container>
        {shelves.map((shelf, index) => (
          <BookShelf>
            <Text key={index}>{shelf.text}</Text>
            {/* {shelves.books.map((book, index) => (
              <Book description="book.description" gradient="" />
            ))} */}
          </BookShelf>
        ))}
      </Container>
    )
  }
}

export default BlogIndex

const Container = styled.div`
  background: #272c2f;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  height: 1000px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-rows: repeat(5, auto);
  align-items: center;
  justify-items: center;
`

const BookShelf = styled.div`
  width: 726px;
  height: 31px;
  background: #faf8ea;
`

const Text = styled.p`
  color: #faf8ea;
  text-align: left;
  margin: -30px 0px 0px 2px;
  font-size: 22px;
  letter-spacing: -0.04em;
  font-weight: 740;
`

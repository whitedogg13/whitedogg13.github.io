import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

export default function LandingPage(props) {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props;

  const blogs = edges.map(({ node }) => {
    return node;
  });

  return (
    <Wrapper>
      <main>
        {blogs.map((it) => {
          return (
            <div key={it.id}>
              <h3>{it.frontmatter.title}</h3>
              <p>{it.frontmatter.date}</p>
              <a href={`/blog${it.frontmatter.slug}`}>View</a>
            </div>
          );
        })}
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
`;

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 10) {
      edges {
        node {
          id
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`;

export const Head = () => <title>Home Page</title>;

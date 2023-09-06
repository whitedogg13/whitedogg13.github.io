import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

export default function BlogPostPage(props) {
  const {
    data: { markdownRemark },
  } = props;
  const { frontmatter, html } = markdownRemark;
  return (
    <Wrapper>
      <div className="content">
        <h1>{frontmatter.title}</h1>
        <div className="date">{frontmatter.date}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > .content {
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
  }
`;

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

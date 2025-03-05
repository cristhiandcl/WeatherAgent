import React, { memo } from "react";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";


const MarkdownWrapper = styled.div`
  /* No styles defined here */
  
  table {
    display: table;
    box-sizing: border-box;
    border-collapse: separate;
    text-indent: initial;
    border-spacing: 2px;
    border-color: gray;
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    border: 2px solid green;
  }

  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  th,
  td {
    padding: 0.5em 1em;
    border: 1px solid #ddd;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  ol ul {
    list-style-type: circle;
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  h5 {
    font-size: 1em;
    font-weight: bold;
  }

  h4 {
    font-size: 1.1em;
    font-weight: bold;
  }

  h3 {
    font-size: 1.2em;
    font-weight: bold;
  }

  h2 {
    font-size: 1.3em;
    font-weight: bold;
  }

  h1 {
    font-size: 1.4em;
    font-weight: bold;
  }
`;

// const path = window.location.pathname;
// const instance = path.split("/")[1];

const TextRendering = memo(function TextRendering({ item }) {

  return (
    <MarkdownWrapper>
      <Markdown
        children={item.value}
        remarkPlugins={[remarkGfm]}
      />
    </MarkdownWrapper>)
});

export default TextRendering;

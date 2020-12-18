import CodeBlock from "@theme/CodeBlock";
import React, {Component, useEffect, useRef} from "react";
import introJs from 'intro.js';

// DO NOT REMOVE EVEN IF UNUSED
import * as style from 'intro.js/introjs.css';

export class LiveExample extends Component {
  render() {
    return (
      <CodeBlock
        children={this.props.children}
        transformCode={(code) =>
          `
function () {
  let tour = null;
  
  setTimeout(() => {
    tour = ${code.replace(/\.start\(\)(;)?$/gi, '')}
  }, 500);
  
  const run = () => {
    tour.start();
  };
  
  return (
    <button onClick={() => run()} className="button button--lg button--primary">
      <span style={{display: 'inline-block', 'vertical-align': 'middle', marginRight: '0.3em', marginBottom: '0.2em' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20px" height="20px">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      </span>
      Run
    </button>
  );
}
` } live={true} scope={{ introJs, CodeBlock, useEffect, useRef, ...this.props.scope }} />
    )
  }
}

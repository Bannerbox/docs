import Head from 'next/head';
import Link from 'next/link';
import { css, Global } from '@emotion/react';

import { Node } from '@markdoc/markdoc';
import { SideNav, TableOfContents, TopNav } from 'components';

import type { AppProps } from 'next/app';

const TITLE = 'Bannerbox';
const DESCRIPTION = 'Bannerbox documentation';

type ExtendedNode = Node & {
  name: string;
};

const globalStyles = css`
  :root {
    --top-nav-height: 51px;
    --border-color: #dce6e9;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
      Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    color: rgba(60, 66, 87, 1);
    margin: 0;
  }

  p {
    line-height: 1.5em;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    margin: 1.5em 0;
  }

  a {
    color: rgba(75, 85, 99, 1);
  }
`;

const styles = css`
  .page {
    position: fixed;
    top: var(--top-nav-height);
    display: flex;
    width: 100vw;
    flex-grow: 1;
  }
  main {
    overflow: auto;
    height: calc(100vh - var(--top-nav-height));
    flex-grow: 1;
    font-size: 16px;
    padding: 0 2rem 2rem;
  }
`;

function collectHeadings(node: ExtendedNode, sections: Array<Record<string, any>> = []) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        const attributes = { ...node.attributes, title };
        sections.push(attributes);
      }
    }

    const children = node.children ?? [];
    for (const child of children) {
      collectHeadings(child as ExtendedNode, sections);
    }
  }

  return sections;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const { markdoc } = pageProps;

  let title = TITLE;
  let description = DESCRIPTION;
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  const toc = pageProps.markdoc?.content ? collectHeadings(pageProps.markdoc.content) : [];

  return (
    <>
      <Global styles={globalStyles} />
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav>
        <Link href="/docs">Docs</Link>
      </TopNav>
      <div className="page">
        <SideNav />
        <main className="flex column">
          <Component {...pageProps} />
        </main>
        <TableOfContents toc={toc} />
      </div>
    </>
  );
}

---
title: Targeting 
---

## {% $markdoc.frontmatter.title %}

Banners can target one or more pages. Use the **Targets** panel to render a banner on a specific page.

![Targets Panel](/docs/targets-panel.png)

### Target URL matching details
- A banner can have multiple targets. Targets are compared against the page origin until the first one is found. 
- We fuzzy match on **www**. Example: **https://www.bannerbox.io** matches **https://bannerbox.io**.
- The trailing slash in the target URL is removed (if present). Example: **https://bannerbox.io/** becomes **https://bannerbox.io**.
- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) is used to test the target URL with the page origin.


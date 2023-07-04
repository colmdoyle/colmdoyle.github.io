---
title: "TIL console.log()"
date: "2023-07-04T12:19:55.077Z"
category: "Development"
---

In further proof that you're never too old to learn a new trick, I was reading about the new [Spotify TypeScript SDK](https://developer.spotify.com/blog/2023-07-03-typescript-sdk), and amongst the various code snippets was this:

```typescript
const items = await api.search("The Beatles", ["artist"]);

console.table(items.artists.items.map((item) => ({
    name: item.name,
    followers: item.followers.total,
    popularity: item.popularity,
})));
```

Like many, I've been using `console.log()` for years, but I'd never heard of [`console.table()`](https://developer.mozilla.org/en-US/docs/Web/API/console/table). Turns out you can pass it an array of objects, and it'll render them as a table in the console. Whilst the Spotify example goes further and runs a `map()` over the array to extract the properties it wants to display, you can just pass the array directly to `console.table()` and it'll render the whole thing.

That would have been handy to know a few years ago, but better late than never!

Here's the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/console/table) if you want to learn more.

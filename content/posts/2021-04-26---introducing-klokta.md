---
title: Introducing Klokta
date: "2021-04-27T15:00:00.121Z"
template: "post"
draft: false
slug: "introducing-klokta"
category: "Klokta"
tags:
  - "Developer Relations"
  - "Technology"
  - "Podcast"
  - "Klokta"
description: "I've always had a bit of an on and off relationship with podcasts. They're the classic ‘commute to work’ medium and you can see why, especially in the days of the iPod. Load up your device in the morning while you have breakfast, then stick in your headphones and catch up on whatever takes your fancy."
socialImage: "/media/klokta-header.jpg"
---

![Klokta artwork - picture of a laptop and a notebook, heavily blurred, with the word Klokta overlaid](/media/klokta-header.jpg)

I've always had a bit of an on and off relationship with podcasts. They're the classic "commute to work" medium and you can see why, especially in the days of the iPod. Load up your device in the morning while you have breakfast, then stick in your headphones and catch up on whatever takes your fancy.

They never really worked out that way for me, despite spending at least ninety minutes a day on trams and buses before COVID-19 forced most folks in the tech sector and office workers generally into a mass work-from-home experiment. To be sure I tried, but the issue was always one of distraction. I'd fire up the next podcast in my queue and start listening, but then I'd also fire up twitter/facebook/instagram/slack, and start consuming there too. Before I knew it, twenty minutes had passed and if you'd offered me a million euro, I wouldn't be able to answer any questions on what I had just listened to.

That all changed with COVID-19. My "commute" now consists of walking from my bedroom to the room I use as a home office. But I did start to walk more. And then [Dithering](https://dithering.fm) came along. A podcast that last 15 minutes was pretty much a perfect match for my attention span. It became a regular feature of my week and since then, I've started listening to all sorts of podcasts, even ones as long as [The Talk Show with John Gruber](https://daringfireball.net/thetalkshow/).

Given my history with podcasts, it's pretty reasonable to argue that I'm not the best person to start publishing one, but a few weeks ago, I wrote about how [creating more content](/posts/getting-better-at-devrel#create-more-content) was an important practice for those of us who work in Developer Relations. As I alluded to in that article, resurrecting this blog was part of my own routine for creating more content. So despite having only really gotten into them in the last 12 months, I've decided to start publishing a podcast, which I’m calling [Klokta](/pages/podcast).

## What's in a name?

Settling on Klokta as a name was a bit of a random process. I started looking for a podcast hosting service, and after looking at a few, I settled on using [Anchor](https://anchor.fm), which is the podcasting platform owned by Spotify. I'd heard it mentioned (but not exactly recommended) on Dithering, so I knew Spotify had some tooling in this area, and it's been an [area of investment](https://www.theverge.com/2021/4/27/22404273/spotify-podcast-subscriptions-monetize-subscriber-shows) for them of late, so I figured it’s a pretty safe bet.

Part of the signup process there is picking a name for your podcast. I punched in "Colm Doyle" and went through the rest of the setup, but the more I thought about it, the more I felt odd about sticking my name on it. It's not like I'm some celebrity where my literal name has any brand value. Could you really hear someone saying "oh you should check out this podcast called 'Colm Doyle'"? No, me either.

I let it rattle around my brain a bit, trying to figure out something that sounded right, before falling back on how I usually pick names for side projects. I picked a word that best described what the project was about....and then looked that word up in Irish. I've found this approach usually guarantees a certain amount of uniqueness, particularly in the field of technology.

So, [_cleachtadh_](https://www.focloir.ie/en/dictionary/ei/Practice) is the Irish for _practice_, because I'm practicing content creation. But phonetically I couldn't imagine a native english speaker getting that, so I took the lazy approach and recorded myself saying it, then asked my colleagues at Slack to spell it and so I settled on Klokta. 

## What will you be talking about?

Well honestly, at the start, I'll likely be doing audio versions of the blog posts that I publish here, similar to how Ben Thompson records the [Stratechery](https://stratechery.com) newsletter as a podcast. On a side note, if you don't subscribe to Stratechery, you absolutely should, it's a fantastic source of information around what’s happening in the world of technology and business. That and Dithering, they're both superb and well worth the money if you can afford it. If your company offers any kind of professional development fund, you could possibly have it covered by that.

As I get into more of a routine, I'll hopefully branch out the content, interviewing people who I find professionally interesting, so likely folks in the field of DevRel and technology more generally.

I don't know how it's going to go, but I know I'll learn something, and I plan to share those learnings both here and on Klokta, so I hope you'll join me by subscribing wherever you listen to your podcasts.

- [Apple Podcasts](https://podcasts.apple.com/us/podcast/klokta/id1564720966)
- [Overcast](https://overcast.fm/itunes1564720966)
- [Castro](https://castro.fm/itunes/1564720966)
- [RSS Feed](https://anchor.fm/s/57ec5b10/podcast/rss)
## Colophon

For those of you curious, here’s the technology that I’ll be using in relation to Klokta. Some of this overlaps with how I produce the blog, and where it does, I’ll highlight that.

- *Microphone*: Like many others, I’ll be using the [Yeti by Blue](https://www.bluemic.com/en-us/products/yeti/). Specifically I use the Yeticaster bundle, as I prefer to mount things to keep them off my desk as much as possible.
- *Audio software*: For now, I’ll be keeping it pretty basic, either recording using QuickTime Player, or directly to Anchor.
- *Hosting podcasts*: As I mentioned, I looked around and settled on Anchor to host the actual podcasts. I considered uploading them to S3 and rolling my own RSS feed for players to subscribe to, but honestly that sounded like a lot of effort, and whilst I don’t need a _massive_ amount of metrics, I was curious to at least have a sense of whether anyone was listening, which more or less forced me into something off the shelf. Anchor pretty much works out of the box, doesn’t actually cost anything, and provides basic metrics, specifically play counts and an estimate on the number of people listening. If people choose to listen using Spotify, I’ll also get a rough idea of how long they’re listening for.
- *Cover Art*: For the cover art, I didn’t want anything fancy or well designed, so I just stuck a stock photo with a permissive license into [Procreate](https://procreate.art/ipad), added a text overlay, and that’s it. I also tend to use procreate for the images used on this site.
- *Landing Page*: Anchor provides a landing page out of the box, but I decided I wanted to have something I could control better, so I’ve added [a page](/pages/podcast) on this site to serve that purpose. This whole site is Gatsby, so it was just a matter of adding a markdown file and a link on the side navigation. I tend to write drafts of pages (and posts like this) in [iA Writer](https://ia.net/writer) on my iPad Pro, before copying them over to [Working Copy](https://workingcopyapp.com) to commit and push to GitHub, where actions take over and deploy the site.
  
---
If you have something to add, I’d love to hear it, so let’s continue the conversation over on [Twitter](https://twitter.com/colmisainmdom)!


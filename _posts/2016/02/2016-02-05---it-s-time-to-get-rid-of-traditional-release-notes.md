---
title: It’s time to get rid of traditional release notes
date: "2016-02-05T23:46:37.121Z"
layout: "post"
draft: false
slug: "it-s-time-to-get-rid-of-traditional-release-notes"
category: "iOS Development"
tags:
  - "Apps"
  - "Startups"
  - "Development"
  - "Product Management"
description: "Bug fixes and various improvments. I'm willing to bet that almost every app update installed on your device in the last 12 months has had that exact set of release notes, or something extremely similar."
image: "/public/media/nux-flows.jpg"
---

> "Bug fixes and various improvements"

I’m willing to bet that almost every app update installed on your device in the last 12 months has had that exact set of release notes, or something extremely similar.

Release notes have become something of a differentiator in the App Store, ranging from generic, to [witty](http://www.theguardian.com/technology/2015/aug/18/tumblr-app-release-notes-david-karp-rippling-muscles), to [extremely detailed](http://www.subtraction.com/2014/12/05/slacks-release-notes) like release notes in the days of physical media.

Whilst some believe it’s incumbent on us as developers to provide release notes to the people who use our products, the reality is that for consumer facing software (as opposed to APIs/SDKs) they are no longer relevant to modern application development.

## No two users are alike
Modern mobile applications, like most online services, are primarily controlled via an API. New features are hidden behind feature flags, some features aren’t exposed on mobile if you haven’t paid for it and every customer uses your product slightly differently, so there’s no way to accurately describe what they’ll see when they open the app.

## Release notes are bad place to introduce features
Traditionally, release notes were a place for you to explain to people about changes you’d introduced in this build of your application. But realistically, a wall of largely unformatted text is a pretty terrible way to introduce a feature you’ve spent time building.

Many applications now choose to introduce features with some kind of in-app user tutorial or notification, where you can measure things like conversion rates, get customer feedback etc. These are the modern iteration of “release notes”.

![In-app user education from Facebook (left) and Intercom (right)](/public/media/nux-flows.jpg)

## The two main mobile platforms auto-update
One of the big reasons not to do release notes these days is that both of the major mobile platforms ship with auto updating enabled, so depending on the make-up of your userbase, most people may never even see the app store release notes.

***

So the next time you’re getting ready to release a new feature, consider this – should you spend those last few hours polishing and testing, or should you write a pile of release notes that almost no-one is going to read? I know where I’m going to spend my time.
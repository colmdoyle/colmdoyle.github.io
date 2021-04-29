---
title: Building for the new normal
date: "2021-04-29T15:00:00.121Z"
template: "post"
draft: false
slug: "building-for-the-new-normal"
category: "Software Development"
tags:
  - "Apps"
  - "Startups"
  - "Development"
  - "Product Management"
  - "Future of work"
  - "Software Development"
description: "In a world where we no longer move from desk to meeting room and back, what do we need to change about the tools we build so they help us to achieve our common goals at work?"
socialImage: "/media/building-for-the-new-normal.jpg"
---

![A shot of a video conference with a woman who can be seen smiling on screen. A man is sitting in front of the computer.](/media/building-for-the-new-normal.jpg)

<iframe src="https://anchor.fm/klokta/embed/episodes/Building-for-the-new-normal-evtcgr" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

As the world starts to look toward a post COVID work environment, the commonly accepted wisdom seems to be that a Monday to Friday 9-5 routine in a central office is no longer the default expectation for [knowledge workers](https://en.wikipedia.org/wiki/Knowledge_worker). 

Instead, particularly in the [technology sector](https://www.bbc.com/news/business-56759151), a lot of companies are moving to either a fully distributed workforce, or a hybrid one where you spend only a small percentage of your time co-located with your team. And whilst most of the focus has been on what that means in terms of physical real estate and employee compensation, I think the interesting long term changes will be in the digital tooling that we all rely on day to day. A lot of these product and organisational trends have been bubbling under the surface for some time now, but over the last few months and in the coming years, those trends have started to accelerate, bringing about a new way of working that [some believe](https://www.axios.com/slack-ceo-companies-post-pandemic-2ec87c33-87ad-454c-8410-e12f4e5f60b4.html) were inevitable. In the past year, developers rushed to adapt tools to a fully distributed environment, but the challenge presented by the next twelve months and beyond is how to make those tools work in the hybrid environment many of us will inhabit.

So in a world where someone new to the organization can no longer learn how it works by sitting next to their teammates and tapping them on the shoulder, how should your existing tooling adapt and what _new_ approaches to tooling does this new style of working enable?

## Learning through discovery
The traditional model of your teammates *explaining* how a tool works, *showing* you how a tool works, and finally *letting* you try those tools for yourself will, I believe, fail to deliver. 

Tools for this new future of work will need to focus not just on the initial onboarding experience, but will also need to work with existing collaboration tools like Slack, Teams and even email, to make usage of the tool visible in ways that allow people to learn the particular quirks of how their team uses it. 

Let's take code review for example. Imagine you're a new engineer, and you're in a project channel in your company's [Slack workspace](https://slack.com/) or a [Workplace by Facebook Group](https://www.workplace.com/). It's day one and you can see Pull Request notifications from the [GitHub app](http://github.com/), so you now know that your team prefers to do their code reviews there. Importantly, you didn't have to already be subscribed to GitHub email notifications, because modern collaboration tools shouldn't rely on outdated patterns like the information silos that are email inboxes.

When you click into the review, GitHub is already showing you what the [CI/CD pipeline](https://www.redhat.com/en/topics/devops/what-cicd-pipeline) looks like because the list of checks are surfaced right beside the merge button. Some tools even post information like coverage reports directly into the pull request. And because Pull Requests are all about collaboration, you can get a sense for what matters to your team when code is being reviewed, because you're doing it all together inside the GitHub UI.

You're being guided through the whole process, from the pull request being surfaced in a group setting like a channel, all the way through to providing you with a list of CI tools that you'll need to familiarise yourself with. It's this kind of collaborative behaviour that needs to exist in _all_ tooling.

## Collaborative by design
I don't know about you, but I've lost count of the number of times over the last twelve months that I wished I could just round up my team, jump into a meeting room with an actual whiteboard and some post-it notes to just _figure something out_.

Whilst Google Docs in particular has been held up as an example of best-in-class collaborative document editing, I've yet to see the experience of being "in the room" replicated well in a digital tool. It's entirely possible this is just a function of my own personal working style, but I've had enough folks express similar thoughts to me that I know I'm definitely not alone or even in a small minority.

The tools that are needed for the next 5 years and beyond will have to weave online and asynchronous (or indeed synchronous) collaboration into the very fabric of their product, not as a mere feature or add-on.

## The Room Where It Happens
Early in the second act of [Hamilton](https://en.wikipedia.org/wiki/Hamilton_(musical)), Aaron Burr laments the fact that he wasn't in "[the room where it happened](https://open.spotify.com/track/2TK2KSrzXD6W01qjXVjNGh?si=3fc8cb9869f346d1)". As someone who has spent the bulk of his career working from Ireland, but with the majority of my teammates in a California HQ, I can definitely sympathize with how Burr felt. 

How many times have you been the only person dialling into a meeting room full of people, and felt like you're *observing* the meeting instead of *participating* in it? In one way, forcing everyone to work from home has been a great leveller in this regard because when everyone is on zoom, no one group dominates conversation. In the whiteboard scenario I mentioned, when you involve video conferencing, I think you have two equally awful choices - Either point the (inevitably poor resolution) camera at the whiteboard and hope the folks on the zoom can make it out, but then have no way to contribute, or you use some kind of online mind mapping software where everyone in the physical room has sit in front of their laptops and the folks on zoom have to choose between looking at the screen or seeing their colleagues. [Google Jamboard](https://workspace.google.com/products/jamboard/) feels like a step in the right direction, but not every company can afford to kit out a room with a full video conferencing setup **and** spend $5,000 on a fancy whiteboard.

Some changes that need to happen, for meetings in particular, will be larger, like the whiteboard collaboration use case, but others will be smaller affordances that make life easier for the people running the meeting. Today for example, when you get a meeting invite, your options are Yes, No, or maybe. Perhaps in the future, when you answer yes, Google Calendar would ask you if you'll be attending in person or over Zoom/Hangouts. Then the system can ensure you're assigned a meeting room that (a) is the correct size and (b) has the facilities you'll need in terms of cameras / whiteboards and more.

Whatever the solution, the experience of dialling into a meeting will need to be re-imagined or the people who choose to work outside one of the company's hubs will once again be relegated to the role of observers. And in this hybrid world, regardless of where we choose to work from, we all deserve to be in the room where it happens.

## Seamless security
If you can’t rely on traditional security approaches like a strictly controlled office network, how do you secure tools? People will inevitably follow the path of least resistance, so the key as always with security is balancing the most secure route with the most convenient route, especially when you talk about data leaving an organization. 

As an example of following the path of least resistance, you would be astonished at the number of people who [conduct business](https://edition.cnn.com/2019/03/23/politics/kushner-whatsapp-concerns/index.html) over consumer messaging apps like WhatsApp or Signal. It honestly boggles my mind until you consider that the alternative for most people is email, which despite being the defacto standard for decades, is, well, not very good. 

It lacks all sorts of features that people have come to expect from messaging, like the ability to leave or join a conversation, or inline attachments that actually work well, and just the societal expectation of a formal style of communicating when emailing.

So given that alternative, people chose what they were comfortable with. The _path of least resistance_. But the likes of WhatsApp or iMessage are, by their very design, consumer messaging tools. They lack features that are table stakes for corporate messaging, like e-discovery features to comply with legal requests, data loss prevention systems, audit trails and more. It was this gap that Slack leveraged when they launched [Slack Connect](https://slack.com/connect).

Connect took the consumer level features that the every day user enjoys, with the enterprise protections that a company needs to protect themselves. And because sending a DM or creating a multi-company channel in Slack Connect only requires the other party's email addresses, it's pretty easy to create the connection, so there's no real need to lean on your consumer messaging app of choice. Which is a good thing, because whatever about the company's legal obligations, if you're going to maintain a good work/life balance, it's probably better not to mix how you talk to your friends and how you talk to your customers.

## Flexible schedules, not 24/7 ones
When I talk about an entire class of products weaving something into their fabric, the most recent product shifts that come to mind are closely connected to each other - the adoption of "social" features such as algorithmic ranking, and the shift to a "mobile first" mindset. Both of these were transformative in the software industry, came within a few years of each other, and many would argue, haven't been 100% positive.

The tendency in both these shifts was to chase engagement metrics at all costs, which led people to craft addictive experiences where success was based on how long you kept people in your product without considering if that cumulative time was a net positive for your user's physical or mental health.

In the current shift, especially for the work based tooling I'm talking about, we have an opportunity to learn from these mistakes and create experiences that add value, but are respectful of the work/life balance of our users.

This isn't about your product dictating work schedules to people, but instead creating new incentives that don't encourage constantly checking in with colleagues. What you're looking for is ways to give users control about how they guard their time, and from a cultural perspective, encouraging the use of those guardrails. You want to offer this [flexibility](https://www.ft.com/content/2bde75b5-d8e9-4705-91e5-9231aec8c0e9), because in all likelihood, the schedules of your team can vary wildly, and employees will start to expect their work schedule to be flexible. As examples of tools that are already started to weave this into their design, you could look at Slack and Google Calendar. 

Slack encourages users to tell it when [they want to be available and when to leave them alone](https://www.theverge.com/21315295/slack-pause-notifications-per-day-basis-weekends-custom-schedule) through custom "Do not disturb" schedules. Similarly, Google Calendar [recently](https://workspaceupdates.googleblog.com/2021/02/create-repeating-ooo-entries-and-segment-working-hours-in-google-calendar.html) rolled out the ability to more granularly control your availability for meetings, as well as setting repeatable periods of "out of office" time, where they would automatically decline meeting invites without you having to be notified.

## The digital water cooler
Perhaps one of the most controversial side effects of moving to primarily digital communication is the extent to which [some](https://qz.com/work/2002100/why-basecamps-culture-memo-is-so-controversial/) [companies](https://www.wired.com/story/turmoil-black-lives-matter-political-speech-coinbase/) want to, and can, decide what employees can discuss at work. 

Obviously the notion of company policies around acceptable behaviour at work have been around for some time, but it's the extent to which a primarily digital environment allows employers to actually monitor and enforce these policies that's different now. It's a lot harder to see what goes on "around the water cooler" vs in your company tools.

With all of our workplace communication flowing through those tools, the line between casual conversations with colleagues and what you'd expect to appear in a court document is blurring further and further.

Features that enhance user safety, or legally important things like e-discovery are usually less controversial, but the extent to which your tooling is perceived as enabling the suppression of speech in the workplace is a harder line to toe. 

## The time to consider these problems is already here
We're now over a year into this forced global work-from-home experiment. What was previously a fluid pandemic mandated experience will soon become like poured concrete, setting quickly and hard to change after the fact. Decisions about the kind of tooling we want to create need to be made before the industry starts to fall back on what worked in the past, even if it's no longer fit for purpose.

As the people who are ultimately building these tools for the future of work, it's our collective responsibility to be sure that the products we design help to create the best possible environments for everyone. We owe it to ourselves not to dodge that responsibility. 
  
---
If you have something to add, I’d love to hear it, so let’s continue the conversation over on [Twitter](https://twitter.com/colmisainmdom)!


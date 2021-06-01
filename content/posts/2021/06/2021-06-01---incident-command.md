---
title: The best Incident Commanders might not be where you think
date: "2021-06-01T16:00:00.121Z"
template: "post"
draft: false
slug: "the-best-incident-commanders-might-not-be-where-you-think"
category: "Incident Response"
tags:
  - "Incident Response"
  - "DevOps"
description: "The Incident Commander is a powerful role in the world of Incident Management that is traditionally filled by senior engineers and engineering managers. But have you ever considered that maybe you should be casting your net a bit wider when it comes to staffing that role?"
socialImage: "/media/post-headers/gene-kranz.jpg"
---

![A black and white photo of Gene Kranz. A Public Domain Image from NASA.gov](/media/post-headers/gene-kranz.jpg)

<audio controls src="https://anchor.fm/s/57ec5b10/podcast/play/34640893/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-5-1%2F19bdd357-cce1-a13b-b403-eeb6eaafae2c.mp3" preload="metadata" onplay="logPlay('the-best-incident-commanders-might-not-be-where-you-think')"></audio>

The Incident Commander is a powerful role in the world of Incident Management. Like [Flight Directors](https://en.wikipedia.org/wiki/Flight_controller#Flight_director) in NASA missions, they have responsibility for the decisions made and actions taken during an incident. Depending on your company's process, they may have powers like stopping deployments, commandeering staff or even shutting down the service. Whatever they deem necessary for resolving the incident.

In many software organizations, the Incident Commander is an on-call rotation, shared amongst senior members of the engineering team. And this seems logical right? Engineering managers and senior engineers will be close to the technology involved, so are best placed to solve the issues that may arise. But have you ever considered that maybe you should be casting your net a bit wider when it comes to staffing that role?

## Incident Commanders are leaders, not fixers
The excellent [PagerDuty training materials](https://response.pagerduty.com/) distill the role of the Incident Commander down to "Keep the incident moving towards resolution". You'll note there's nothing their about actually resolving the incident directly. The training materials talk instead about skills like

- Listening
- Leadership
- Clear communication
- Rapid decision making

These are skills you should expect across your entire organization, and certainly ones that you would want to foster. Incident Command is an excellent way for people to exercise those skills, and limiting that opportunity to just your senior technical staff does a disservice to the whole company. In fact, at Slack we encourage members of the Developer Relations team to take part in the incident process.

If you staff up your Incident Command rotation with Product Managers, Salespeople, Customer Support Reps and others, then those people will be less drawn to directly solving the problem, letting engineers act as the subject matter experts and leaving the Incident Commander to focus on their primary role - coordinating the response.

Beyond just tapping into the leadership talents of your whole organization, there's other benefits to sharing the responsibility of incident command, so let's talk about those.

## Solving problems can be a powerful lure

Whilst it _is_ logical to think that good incident commanders will also be good engineers, it ignores what the [role of the incident commander actually is](https://response.pagerduty.com/before/different_roles/#incident-commander-ic). Put simply, incident commanders **shouldn't** be solving the issue directly. 

I can't speak for everyone of course, but I know that for myself, a problem is an extremely tempting thing. I love to solve puzzles, and sometimes an incident is a ready made puzzle. But when I'm running an incident, I must constantly resist the urge to jump in. Instead, I remind myself that my role is to co-ordinate the response, because if I get too into the weeds of a proposed solution, I'm more likely to take my eye off the bigger picture of the incident.

As I mentioned earlier, as folks in Product or Sales are likely to be further removed from the technical architecture, the likelihood they'll be tempted to offer solutions is minimized.

## Empathy and Empowerment
On-call rotations in technology companies are typically only expected in the Engineering organization, but since the IC rotation involves being on-call, this expectation is shared more broadly, meaning more of your organization understands and empathizes with being on-call.

And in a similar vein, if your customer facing teams are directly involved in your incident management process, they'll be in a much better position when it comes to discussing that process with their peers and with customers.

Many companies provide [root cause analysis documents](https://aws.amazon.com/message/11201/) to customers after major incidents. Imagine how much more empowered your sales and support teams would be if they could speak to how the incident was run when sharing that RCA with customers.

## A fresh set of eyes
The final point applies not just to incident teams, but organizations more generally. You know the expression "When all you have is a hammer, everything looks like a nail"? The same can be said about your incident process. If everyone involved in the incident process is an engineer, then your process will bias itself towards engineering solutions.

Now whilst the solution to a technical incident is likely to be technical, the same doesn't need to be true for the _process_. By diversifying your rotation of incident commanders, you're adding a fresh set of eyes to the process and will therefore create opportunities for new ways of approaching incidents to emerge.

## First steps to diversifying your Incident team

<figure class="float-right">
	<img src="/media/post-photos/incident-cards.jpeg" alt="Slack incident training tabletop cards" />
	<figcaption>Slack incident training tabletop cards</figcaption>
</figure>

You might be wondering how to go about building a more diverse team of responders. Every organization will have a different approach, but I'd suggest the following -

- Speak to the leadership of the relevant departments to get buy-in. Explain the benefits to their teams, but also the company as a whole. Incident Response will need to be considered _part_ of the person's role, not something that gets in the way of "actual work" that will need to be completed _in addition to incidents_, otherwise you're contributing to burnout.
- Invite those that are interested in helping out to **observe** some incidents, either live or through recordings / channel history.
- If they're still excited at the prospect, it's time to start training them up. You can use the [PagerDuty training materials](https://response.pagerduty.com/) as a template if you don't already have a process for this. Although regardless of the background of your commanders, training is a good idea.
- Run some mock training incidents. At Slack we do a tabletop exercise as part of the IC training process.
- Let your trainees then shadow some real incidents
- Add them to the rotation and see how it goes!
- As the leader of your incident response program, be sure to note their contributions when it comes to performance reviews

## Never stop learning
I've been an incident commander at Slack for over a year now and I can honestly say I've learned so much about leadership, communication and system architecture because of the role I play in incidents here. It's a fantastic experience that I would recommend to anyone, so please do encourage others to try it out, they'll thank you for it.

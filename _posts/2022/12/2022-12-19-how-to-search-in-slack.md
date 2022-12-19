---
title: "How to search in Slack"
date: "2022-12-19T22:33:15.737Z"
category: "Slack"
image: /public/media/post-headers/slack-search.jpeg
---

If there's one thing I learned working at Slack, it's that almost every single company who uses it does it wrong. I don't mean people can't _use_ it, I mean they barely scratch the surface of what it can do. The way Slack uses it internally is like night and day compared to the average use and one of the key ways it's used differently is just how much Search is used internally.

You see, Slack actually stands for **S**earchable **L**og of **A**ll **C**ommunication and **K**nowledge. Search was *always* meant to be the superpower. You dump **all** your company knowledge into Slack, and then you can search for it when you need it.

## Search for a phrase

So, let's start off with the most common use case, you're trying to find a message that contains a specific phrase. You can do this by typing the phrase into the search bar at the top of Slack. You can also use the keyboard shortcut `cmd + k` to open the search bar.

Think `quarterly sales report`. What this will return is any message that contains that phrase. It will also return any message that contains the words `quarterly` and `sales` and `report` in any order. This is because Slack uses a full-text search engine, which means it's not just looking for the exact phrase, but it's also looking for any message that contains the words in any order.

## Searching for a specific phrase

If we keep going with the sales report example you can get more specific and search for a specific phrase by putting quotes around it. So, if you search for `"quarterly sales report"` you'll only get messages that contain that exact phrase.

## Searching for a specific phrase in a specific channel

If you want to search for a specific phrase in a specific channel, you can do that by adding `in:` followed by the channel name. So, if you want to search for `"quarterly sales report"` in the `#sales` channel, you can search for `"quarterly sales report" in:#sales`.

## Searching for a specific phrase from a specific user

Similar to narrowing down the search to a specific channel, you can also narrow it down to a specific user. You can do this by adding `from:` followed by the user's name. So, if you want to search for `"quarterly sales report"` from `@jane`, you can search for `"quarterly sales report" from:@jane`. If you know `@jane` was *involved* in the conversation, but not the one who actually sent the message, you can also search for `with:@jane`.

You can also combine these two to search for a specific phrase from a specific user in a specific channel. So, if you want to search for `"quarterly sales report"` from `@jane` in the `#sales` channel, you can search for `"quarterly sales report" from:@jane in:#sales`.

## Using emoji to narrow it down

[Emoji reactions](https://slack.com/intl/en-ie/help/articles/202931348-Use-emoji-and-reactions#add-an-emoji-reaction), or "reacji" as they're called at Slack, are an extremely common feature of messages in Slack. They're used for everything from voting on things, to indicating something is in progress, to just adding a little bit of fun to a message. 

Given how common they are, it's no surprise that you can use them in your search. You can do this by adding `has:` followed by the emoji. So, if you want to search for messages that have the `:thumbsup:` emoji, you can search for `has::thumbsup:`.

A great example of how this is used in Slack is for triaging a channel full of support requests. Internally, there's a convention that when a support request comes in, the first person to respond to it adds a `:eyes:` 👀 emoji to the message. Once the request has been processed, the person who processed it adds a `:white_check_mark:` ✅ emoji. 

So when you're trying to triage a channel, let's call it *#support*, then what you do is run a search for `in:#support -has::eyes: -has::white_check_mark:`. This will return all the messages that haven't been processed yet, because the minus symbol means "return messages **without** this emoji".

## Who, what and when

The final search tip I'll leave you with involves dates. If after all of the above, you still have too many results, you can narrow it down by date. You can do this by adding `before:` or `after:` followed by a date. So, if you want to search for messages that were sent before the 1st of January 2022, you can search for `before:2022-01-01`. You can also search for messages that were sent after a specific date by using `after:`. And as will all the previous examples, you can combine these two terms to search for a specific range. So, if you want to search for messages that were sent between the 1st of January 2022 and the 1st of January 2023, you can search for `after:2022-01-01 before:2023-01-01`. There's also a quick shorthand for ranges on a specific month or year, with is `during:`. So, if you want to search for messages that were sent during January 2022, you can search for `during:2022-01`.

## Don't be afraid of your chat history, embrace it

Slack is a great tool for communication, but it's also a great tool for knowledge management. If you're not using it to its full potential, you're missing out on a lot of value. So, don't be afraid of your chat history, embrace it.
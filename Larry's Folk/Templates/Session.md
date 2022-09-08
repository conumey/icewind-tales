---
type: session
session-number: <% tp.user.session_count(tp) %>
campaign: "Icewind Dale"
characters: [Raisin, Soren, Manajam, Depeche]
date: <% tp.date.now() %>
game_date: 
---
<% tp.file.rename('Session ' + tp.user.session_count(tp)) %>
# Title
## Session <% tp.user.session_count(tp) %>
#### <% tp.date.now() %>
#####

## Session Summary

## Recap of last session
![[Sessions/Session <% tp.user.session_count(tp) - 1 %>#Session Summary]]

## Log


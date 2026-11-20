# GTA 6 clip — Vice City getaway

A 21-second vertical Short cut from the climax of Rockstar's official
Grand Theft Auto VI Trailer 2: Jason on a motorcycle with a plane overhead,
then Jason and Lucia in a convertible at dusk, ending on the golden-hour
Vice City skyline. It opens on the bike so the first second hooks, and the
last five seconds freeze on the trailer's end card with the pitch on screen.
The clip is 8.4 MB, small enough to upload from a phone.

The pitch, shown as on-screen text at the end of the clip:

> Make clips like this with AI and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

## How the clip was made

The source is Rockstar's Trailer 2, fetched in the build session and cut
with ffmpeg: the letterbox bars cropped out, centre-cropped to vertical
9:16 (1080x1920), H.264 + AAC, 21 seconds so it posts as a Short.

## The video

`VIDEO.json` at the repository root names the public YouTube Short.
`main.ts` (Node 22, standard library only) copies `VIDEO.json` into the
output directory; the house reads the video itself through the YouTube
Data API, so nothing here describes it.

## Upload

Publish the clip public on YouTube as a Short, with this line in its
description, word for word:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn
> money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the play code `makefun-cheetah-cricket-catfish`. Keep it public
until the results are out.

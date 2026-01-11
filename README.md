![The FFXIV-Arcwolf Eorzean Date Converter, by Ellis Cú Anann Arcwolf](edc.png)
# [The FFXIV-Arcwolf Eorzean Date Converter](https://edc.jijivisa.org)
I made an app. It was *hard!* I'm *tired*. Some of y'all do this for work? That's so cool. It was kind of a blast, working on all this. Like many blasts, it *did* leave me with a headache, but AAAH! I made an app! XD
## What Is it?
A lightweight, Vanilla JavaScript Progressive Web App (PWA) designed to solve the "Time Bubble" problem in Final Fantasy XIV roleplay using the magics of in-game lore, evolutionary psychology, the neurology of memory, temporal physics, and maths. Lots of maths.

Unlike standard converters that rely on arbitrary ratios, the **FFXIV-Arcwolf EDC** implements my very own, very special **Lived Chronology Protocol**. It enforces a 1:1 isochronal (i.e. meaning "takes the same length of time to elapse") mapping between Earth time and Etheiryan time, ensuring that one second on Earth equals one second on Etheirys. It features:
* **Zero Dependencies**: Runs on raw, high-performance JavaScript with no frameworks.
* **Privacy-First**: All calculations happen locally on your device; trust me, I do *not* want to catch anyone's data cooties. Yuck.
* **PWA Standard**: Installable on Android and iOS devices directly from the browser for an app-like experience; I support all experiences.
## Where Is it?
You can access the live, secure tool here: [**The FFXIV-Arcwolf Eorzean Date Converter v1.5**](https://edc.jijivisa.org)
* **For Users**: Just visit the link. On mobile devices, tap "Add to Home Screen" to install it as a standalone app.
* **For Developers**: The source code is hosted right here. The logic is contained entirely within src/index.js for easy auditing or forking.
If you do decide to fork, please *be gentle.* It's my first app.
### How Does It Work?
If you *hate* math, and you'd rather just learn how it works in a pretty, enchanting way that avoids numbers as much as humanly possible, [you've come to the right place.](GUIDE.md)
### Changelog
* **1.5**: Earth dates with two Eorzean suns mapped to them will now display *both* dates, offering users either option for their own RP. Also resolved a related issue with leap years (and the in-game calendar assuming *all* Earth years are leap years). February 29ths on non-leap years are now safeguarded by the Accord Nexus.
* **1.0**: App is up! It changes Earth dates to Eorzean dates and sometimes gives you little tidbits about what was going in Eorzea on the year in question.
## Why Is It?
Because "static history" breaks immersion. The official game timeline exists in what Yoshi P. calls "[**Sazae-san space-time**](https://en.wikipedia.org/wiki/Floating_timeline)" where characters never age despite years of player activity. For many of us—from the neurodiverse and 'specially interested to the neurotypical and fanatical roleplayer—this stopped working *many* years ago. We needed a fix, and without intending to, the devs had always given us one. Right at the moment of character creation.

But that wasn't enough. To *really* sync up the *very* different Eorzean and Gregorian calendars, we needed something *more*. We needed **Lived Chronology**—a system that respects the passage of time experienced by the player and uses the fact that human beings store their **lived experiences** and the long-term passage of time (i.e. **lived chronology**) in totally different ways to its advantage.

This converter solves two specific mathematical problems:
* **The Isochronal Anchor**: By standardizing the Etheiryan Solar Year to match the Earth Solar Year, we allow characters to age naturally alongside their players. Yeah, this includes Viera, who may age slowly in body, but who continue to learn and grow wise with age and experience like the rest of us.
* **The Aught Revision**: The first version of the math used *fractions* and *floor functions*. Most people hate fractions and don't even know what floor functions are, and ultimately celebrating my character's nameday every January would have been weird, so I thought...this needs a *revision.* An ***Aught Revision***. To align the calendars perfectly, "Year Aught"—representing Year 0 of the 7th Umbral Era, immediately following the 7th Umbral Calamity, and taking place entirely over the span of Earth dates August 27, 2013, to December 31, 2013—utilizes a specific **time-dilation algorithm**. The app accelerates this 127-day period by 303.97% so that Year 1 of the 7th Umbral Era aligns perfectly with Earth Year 2014, ensuring flawless synchronization forever after.

**A note about the time dilation of Year Aught.** From the point of view of RP, Year Aught was a horrible year. The skies would have been rippling with aether, Eorzea choked with corruption, and our characters likely spent much of the year in a daze. Even *if* your character was able to do something during that time, in-game the effects of the Calamity were so powerful—the suffusion of aether so complete—that every human being *on the Twelvesdamned continent* lost their memories of huge parts of it. All of this is to say that, given the traumatic experiences most of us had during Year Aught, you can do anything you want and *it's right.* To someone suffering that badly, reality is what it *needs* to be for them to make it through: not what it *is,* or they would never make it.
### Need to Cite the Logic?
The honor is mine. <3
* **The Theory**: [Popping FFXIV's Time Bubble](https://open.substack.com/pub/murderofarcwolves/p/popping-ffxivs-time-bubble?utm_campaign=post-expanded-share&utm_medium=web)
* **The Math**: [The Aught Revision](https://open.substack.com/pub/murderofarcwolves/p/popping-ffxivs-time-v2-bubble-the-aught?utm_campaign=post-expanded-share&utm_medium=web)
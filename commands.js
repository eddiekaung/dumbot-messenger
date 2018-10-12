// Stores user commands (accessible via trigger word set in config.js)
const config = require("./config");
exports.commands = {
    "help": {
        "display_names": ["help"],
        "pretty_name": "Help",
        "short_description": "",
        "description": "Get more information about a command, or open quick help",
        "syntax": "help ({command})",
        "example": "help stats",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /help(.*)/i,
        "experimental": false
    },
    "bug": {
        "display_names": ["bug", "bug report"],
        "pretty_name": "Bug",
        "short_description": "File a bug report",
        "description": `Messages ${config.owner.names.short} directly with your message and adds to your chat for debugging`,
        "syntax": "bug {message}",
        "example": "bug Pinging is broken",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /bug (.*)/i,
        "experimental": false
    },
    "kick": {
        "display_names": ["kick"],
        "pretty_name": "Kick",
        "short_description": "Removes member",
        "description": "Removes a given member from the chat for an optional amount of time",
        "syntax": "kick {member} ({number of seconds})",
        "example": ["kick me", "kick me 25"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": true,
            "optional": false
        },
        "regex": ["kick", "(?: (\\d+))?"], // Optional number param after name
        "experimental": false
    },
    "xkcd": {
        "display_names": ["xkcd", "xkcd search"],
        "pretty_name": "xkcd",
        "short_description": "Links xkcd",
        "description": "Outputs the numbered xkcd or search result (or a random one if none was specified)",
        "syntax": "xkcd (new|{comic number}|search {search query})",
        "example": ["xkcd new", "xkcd 303", "xkcd search Wisdom of the Ancients"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /xkcd(?: (new|\d+|search (.+)))?/i,
        "experimental": false
    },
    "wiki": {
        "display_names": ["wiki", "wikipedia", "wiki search"],
        "pretty_name": "Wiki",
        "short_description": "Searches Wikipedia",
        "description": "Searches Wikipedia for a given query and returns the best result",
        "syntax": "wiki {query}",
        "example": ["wiki bots"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /wiki (.*)/i,
        "experimental": false
    },
    "spotsearch": {
        "display_names": ["search artist", "search song", "search track"],
        "pretty_name": "Spotify search",
        "short_description": "Search for music",
        "description": "Searches Spotify's database for artists and songs",
        "syntax": "search (artist|(song|track)) {query}",
        "example": ["search artist The Goo Goo Dolls", "search song Back in Black"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /search (artist|song|track) (.*)/i,
        "experimental": false
    },
    "song": {
        "display_names": ["song", "get song"],
        "pretty_name": "Song",
        "short_description": "Random song",
        "description": "Grabs a random song from member playlists added with 'playlist' command",
        "syntax": "song ({member})",
        "example": "song me",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": true,
            "optional": true
        },
        "regex": "song",
        "experimental": false
    },
    "playlist": {
        "display_names": ["playlist"],
        "pretty_name": "Playlist",
        "short_description": "Add/update playlist",
        "description": "Add or update playlist for the group – to find a playlist's URI in Spotify desktop, right click on it, select 'Share', and click 'URI'",
        "syntax": "playlist {member} {playlist URI}",
        "example": "playlist me spotify:user:astrocb:playlist:05zXCuscrw1BW5NyeN45DB",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": true,
            "optional": true
        },
        "regex": ["playlist", "( spotify:user:([^:]+):playlist:([A-z0-9]+))?"],
        "experimental": false
    },
    "addsearch": {
        "display_names": ["add", "search"],
        "pretty_name": "Add/search",
        "short_description": "",
        "description": "Searches for the given user and either outputs the best match (for searching) or adds it to the chat (for adding)",
        "syntax": "(add|search ({number of results})) {user}",
        "example": ["search Physics Resurrected", "add Physics Resurrected", "search 5 Physics Resurrected"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /(add|search(?: (\d*))?) (.*)/i,
        "experimental": false
    },
    "killall": {
        "display_names": ["Ban everyone", "order 66"],
        "pretty_name": "Kill All",
        "short_description": "Destroy group temporarily",
        "description": `Every single group member, including your Socialpath AKH, is now an enemy of the group chat (for ${config.order66Time} seconds)`,
        "syntax": "execute nuclear code",
        "example": "",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /execute order 66/i,
        "experimental": false
    },
    "color": {
        "display_names": [],
        "pretty_name": "Color",
        "short_description": "Sets the chat color; see full help for accepted values",
        "description": "Sets the chat color to one of several currently accepted values:\n\nMessengerBlue: none\nViking: #44bec7\nGoldenPoppy: #ffc300\nRadicalRed: #fa3c4c\nShocking: #d696bb\nPictonBlue: #6699cc\nFreeSpeechGreen: #13cf13\nPumpkin: #ff7e29\nLightCoral: #e68585 \nMediumSlateBlue: #7646ff\nDeepSkyBlue: #20cef5\nFern: #67b868\nCameo: #d4a88c\nBrilliantRose: #ff5ca1\nBilobaFlower: #a695c7\n\nThis command accepts either the name or hex value as input.",
        "syntax": "color (#{six-digit hex color}|rand(om))",
        "example": ["color", "color #ffc300", "color random"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /color( (#(?:[a-f]|\d){6}|rand(?:om)?|[A-z]+))?/i,
        "experimental": false
    },
    "hitlights": {
        "display_names": [],
        "pretty_name": "Hit the lights",
        "short_description": "Random chat colors",
        "description": "Changes the group colors to random colors in quick succession",
        "syntax": "hit the lights",
        "example": "",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /hit the lights/i,
        "experimental": false
    },
    "clearnick": {
        "display_names": ["clear nickname"],
        "pretty_name": "Clear nickname",
        "short_description": "",
        "description": "Clears the nickname for the given member",
        "syntax": "clear (nick)name {member}",
        "example": "clear name me",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": true,
            "optional": false
        },
        "regex": "clear (?:nick)?name",
        "experimental": false
    },
    "setnick": {
        "display_names": ["nickname", "name", "rename"],
        "pretty_name": "Set nickname",
        "short_description": "",
        "description": "Sets the given nickname for the given member",
        "syntax": "((nick|re)name) {member} {nickname}",
        "example": ["nickname me Bot Impersonator", "rename me Bot Impersonator"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": true,
            "optional": false
        },
        "regex": ["(?:(?:nick|re)?name)", " (.*)"],
        "experimental": false
    },
    "wakeup": {
        "display_names": ["wake up", "wake"],
        "pretty_name": "Wake up",
        "short_description": "Message user repeatedly",
        "description": `Sends ${config.wakeUpTimes} messages to the given member`,
        "syntax": "wake up {member}",
        "example": ["wake me", "wake up me"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": true,
            "optional": false
        },
        "regex": "wake(?: up)?",
        "experimental": false
    },
    "randmess": {
        "display_names": ["random message"],
        "pretty_name": "Random message",
        "short_description": "",
        "description": "Retrieves a random message from the recent history of the group",
        "syntax": "random message",
        "example": "",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /random message/i,
        "experimental": false
    },
    "alive": {
        "display_names": ["alive", "alive?"],
        "pretty_name": "Alive",
        "short_description": "Is the bot awake?",
        "description": "Tests whether the bot is running",
        "syntax": "alive(?)",
        "example": "alive?",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /alive(?:\?)?/i,
        "experimental": false
    },
    "echo": {
        "display_names": ["echo", "quote"],
        "pretty_name": "Echo/quote",
        "short_description": "",
        "description": "Echoes or quotes the provided statement",
        "syntax": "(echo|quote) {statement}",
        "example": ["echo Hello, world!", "quote I am not a bot"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /(echo|quote) (.*)/i,
        "experimental": false
    },
    "ban": {
        "display_names": ["ban", "unban"],
        "pretty_name": "Ban",
        "short_description": "",
        "description": "Bans or unbans the provided member",
        "syntax": "(un)ban {member}",
        "example": "ban me",
        "sudo": true,
        "attachments": false,
        "user_input": {
            "accepts": true,
            "optional": false
        },
        "regex": "(un)?ban",
        "experimental": false
    },
    "info": {
        "display_names": [],
        "pretty_name": "Ban",
        "short_description": "",
        "description": "Bans or unbans the provided member",
        "syntax": "(un)ban {member}",
        "example": "ban me",
        "sudo": true,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": "info",
        "experimental": false
    },
    "restart": {
        "display_names": ["restart"],
        "pretty_name": "Restart",
        "short_description": "",
        "description": "Restarts the bot (requires remote deployment to Heroku)",
        "syntax": "restart",
        "example": "",
        "sudo": true,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /restart/i,
        "experimental": false
    },
    "photo": {
        "display_names": ["picture", "photo", "image"],
        "pretty_name": "Photo",
        "short_description": "Sets group photo to URL",
        "description": "Changes the group's photo to the image at the specified URL or the attached image",
        "syntax": "(photo|picture|image) ({url})",
        "example": ["photo http://i.imgur.com/tzwVWot.png", "photo [attach an image]"],
        "sudo": false,
        "attachments": true,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /(?:photo|picture|image)(?: ((?:http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?))?/i, // URL
        "experimental": false
    },
    "poll": {
        "display_names": [],
        "pretty_name": "Poll",
        "short_description": "Creates a group poll",
        "description": "Creates a poll in the group with the given title and optional comma-delimited initial options in brackets",
        "syntax": "poll {title} ([{option 1}, {option 2}, {option 3}, {option n}])",
        "example": ["poll What time should we eat dinner? [6 PM, 6:30 PM, Tomorrow]", "poll Which restaurant should we go to?"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /poll ([^[]+)(?:\[(.*)\])?/i,
        "experimental": false
    },
    "title": {
        "display_names": ["set title", "change title", "title"],
        "pretty_name": "Set title",
        "short_description": "",
        "description": "Sets the title to the specified value",
        "syntax": "title {title}",
        "example": "title One Chat to Rule Them All",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /title (.*)/i,
        "experimental": false
    },
    "answer": {
        "display_names": ["ask", "answer", "magic 8 ball"],
        "pretty_name": "Magic 8-ball",
        "short_description": "",
        "description": "Answers your yes/no question with a random value",
        "syntax": "(ask|answer) {question}",
        "example": ["ask Do you believe in humans?", "answer Will we have school tomorrow?"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /(?:ask|answer) .*/i,
        "experimental": false
    },
    "space": {
        "display_names": ["space"],
        "pretty_name": "Space",
        "short_description": "Search for images from the NASA database",
        "description": "Performs a search on NASA's database of space imagery, found at https://images.nasa.gov/; use 'random' to get a random result rather than the top",
        "syntax": "space (random) {search query}",
        "example": ["space mars", "space milky way", "space random sun"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /space (rand(?:om)? )?(.*)/i,
        "experimental": false
    },
    "show": {
        "display_names": ["show"],
        "pretty_name": "Show",
        "short_description": "Show images from folder",
        "description": "Get pics from specified folder and select photo randomly",
        "syntax": "show {search query}",
        "example": ["show akh", "show ah", "show skb"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /show (ahp|ah|akh|athk|pete|skb|tha|htm|ppk|wpa|yya|zln|znl)/i,
        "experimental": false
    },
    "kpop": {
        "display_names": ["kpop"],
        "pretty_name": "Kpop",
        "short_description": "Search for Kpop images",
        "description": "Get kpop pics from reddit and select photo randomly",
        "syntax": "kpop {search query}",
        "example": ["kpop blackpink", "kpop exid", "kpop lisa"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /kpop (.*)/i,
        "experimental": false
    },
    "depress": {
        "display_names": ["depress"],
        "pretty_name": "Depress",
        "short_description": "Cope your depressing life with memes",
        "description": "Memes are life. Make yourself feel better by laughing at memes.",
        "syntax": "depress",
        "example": ["depress"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /depress/i,
        "experimental": false
    },
    "polandball": {
        "display_names": ["polandball"],
        "pretty_name": "polandball",
        "short_description": "Send poland ball memes",
        "description": "Get polandball memes",
        "syntax": "polandball",
        "example": ["polandball"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /polandball/i,
        "experimental": false
    },
    "loss": {
        "display_names": ["loss"],
        "pretty_name": "Loss",
        "short_description": "Send loss memes",
        "description": "Get loss memes",
        "syntax": "loss",
        "example": ["loss"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /loss/i,
        "experimental": false
    },
    "rng": {
        "display_names": ["random", "rand", "rng"],
        "pretty_name": "Random number generator",
        "short_description": "",
        "description": `Generates a random number in the given range (between two args if passed, between ${config.defaultRNGBounds[0]} and the arg if one is passed, or between ${config.defaultRNGBounds[0]} and ${config.defaultRNGBounds[1]} otherwise)`,
        "syntax": "(rng|rand(om)) (({lower bound}) {upper bound})",
        "example": ["rand", "rng 0 50", "rng 100"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /r(?:and(?:om)?|ng)(?: (\d+))?(?: (\d+))?/i,
        "experimental": false
    },
    "mute": {
        "display_names": ["mute", "unmute"],
        "pretty_name": "Mute/unmute",
        "short_description": "Turns on/off easter eggs",
        "description": "Turns on/off easter eggs until they are turned back on",
        "syntax": "(un)mute",
        "example": ["mute", "unmute"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /(un)?mute/i,
        "experimental": false
    },
    "wolfram": {
        "display_names": ["wolfram"],
        "pretty_name": "Wolfram",
        "short_description": "Searches Wolfram Alpha",
        "description": "Performs a search using Wolfram Alpha (http://www.wolframalpha.com)",
        "syntax": "wolfram {query}",
        "example": ["wolfram ∫(5x^2 + 10x + 34)dx", "wolfram Who is the president of the United States?"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /wolfram (.*)/i,
        "experimental": false
    },
    "update": {
        "display_names": ["update"],
        "pretty_name": "Update",
        "short_description": "See Change Log",
        "description": "See what's new",
        "syntax": "update",
        "example": ["update"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /update/i,
        "experimental": false
    },
    "destroy": { // DANGEROUS COMMAND
        "display_names": [], // Secret
        "pretty_name": "Destroy",
        "short_description": "",
        "description": "Destroys the chat",
        "syntax": "sudo destroy confirm", // Redundancy to prevent accidental triggers
        "example": "",
        "sudo": true,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /sudo destroy confirm/i,
        "experimental": false
    },
    "infiltrate": {
        "display_names": [], // Secret command
        "pretty_name": "Infiltrate",
        "short_description": "",
        "description": "Allows the bot to add the admin to groups that it's in",
        "syntax": "infiltrate ({threadId}|{group name})",
        "example": ["infiltrate", "infiltrate 883154065107088", "infiltrate Assume Zero Brain Power"],
        "sudo": true,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /infiltrate(?: ([0-9]+|.+))?/i,
        "experimental": false
    },
    "alias": {
        "display_names": ["alias"],
        "pretty_name": "Alias",
        "short_description": "Assign an alternate username",
        "description": "A member's default username is their first name; this command allows a user to assign an alternate username, which will be accepted in any command where a member name is required",
        "syntax": "alias ({member}|clear {member}|{member} {alternate name})",
        "example": [`alias me ${config.bot.names.short || "Bot"}`, `alias clear me`, `alias me`],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": true,
            "optional": false
        },
        "regex": ["alias( clear)?", "(?: (.*))?"],
        "experimental": false
    },
    "weather": {
        "display_names": ["weather"],
        "pretty_name": "Weather",
        "short_description": "",
        "description": "Get current weather for a given city",
        "syntax": "weather {city name}",
        "example": "weather Timonium",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /weather (.+)/i,
        "experimental": false
    },
    "branch": {
        "display_names": ["branch"],
        "pretty_name": "Branch",
        "short_description": "Create a new group from a subset of the current members",
        "description": "Creates a new group chat given members of the current chat",
        "syntax": "branch [{member 1}, {member 2}, {member 3}, {member n}]",
        "example": "branch [me, Cameron, Jonah, Justin]",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /branch ((?:[^,]+(?:,|$))+)/i,
        "experimental": false
    },
    "tab": {
        "display_names": ["tab"],
        "pretty_name": "Tab",
        "short_description": "Keeps a running total",
        "description": "Maintains a running total for the group that can be incremented or decremented (default amount is 1)",
        "syntax": "tab {add|subtract|clear} ({amount})",
        "example": ["tab add 5.50", "tab subtract 2.10", "tab add", "tab subtract", "tab clear"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /tab(?: (add|subtract|clear|split)(?: \$?((?:\d+)?(?:\.\d+)?))?|)?/i,
        "experimental": false
    },
    "restore": {
        "display_names": ["restore"],
        "pretty_name": "Restore",
        "short_description": "Restores the properties of a previous chat",
        "description": "Given a thread ID for an existing chat that the bot is in, this will change the current chat's properties (color, nicknames, title, etc.) to match",
        "syntax": "restore {thread ID}",
        "example": ["restore 883154065107088"],
        "sudo": true,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /restore (\d+)/i,
        "experimental": false
    },
    "google": {
        "display_names": ["google"],
        "pretty_name": "Google",
        "short_description": "Generates a link to Google the given term",
        "description": "Given a search query, the bot will create a link to a Google search for it",
        "syntax": "google {query}",
        "example": ["google UMD schedule of classes"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /google (.+)/i,
        "experimental": false
    },
    "pin": {
        "display_names": ["pin"],
        "pretty_name": "Pin",
        "short_description": "Pin a message",
        "description": "Pins a message to be accessed later",
        "syntax": "pin ({new message})",
        "example": ["pin Test message", "pin"],
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /pin(?:(?:\s|$)([\s\S]+))?/im,
        "experimental": false
    },
    "thanos": {
        "display_names": ["thanos"],
        "pretty_name": "Thanos",
        "short_description": "Destroy half the group temporarily",
        "description": "Thanos",
        "syntax": "thanos",
        "example": "",
        "sudo": false,
        "attachments": false,
        "user_input": {
            "accepts": false,
            "optional": false
        },
        "regex": /thanos/i,
        "experimental": false
    }
};

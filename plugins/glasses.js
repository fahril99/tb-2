let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/glasses?apikey=beliapikey`
  conn.sendFile(m.chat, res, 'glasses.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['glasses'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(glasses)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler


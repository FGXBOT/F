let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [--]
│ • Telkomsel: [--]
│ • Axis: [0838-3331-0095]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6285762102148
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler

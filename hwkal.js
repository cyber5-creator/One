// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab dekk minim jual 10k - 20k

//==============[ By Always Ziyo Tzy ]==========//

const fs = require('fs')
const chalk = require('chalk')
//=============[ ----- ]============//

//==========================//

// Sosial Media 
global.gr = 'http://www.ziyoo.com/' // gausah di ubah :v
global.wagc = "https://whatsapp.com/channel/0029VaMQbfGGU3BPCA8hDn0T" // yg ini silahkan ubah
global.ig = '@ziyoo' // ubah aja
global.email = 'sanzzkece@gmail.com' //serah
global.region = 'indonesia' // serah

// Sedikit Info Jika Gk bisa Cpanel Hub saya Ntar saya Settings in
global.domain = '_' // Isi Domain Lu
global.apitokendo = '_' // isi api token yg valid
global.apikey = '_' // Isi Apikey Plta Lu
global.capikey = '_' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai, Biarin jika id nya 5
global.location = '1' // id location, biarin panel biasanya 1
//=================================================//
global.ownername = 'Always ziyo' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6283863557587'] // ubah aja pake nomor lu
global.wanumber = ['6283863557587'] // ketika ketik .owner
global.botname = 'Hw v24' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
//==========================[ Masukin Apikey nya ]=======================//
global.keyopenai = '_'
global.api = {
skizo: '_', // api skizo
}
//====================[ BY Hw Mods]=============================//
global.packname = 'sticker' // ubah aja ini nama sticker
global.author = 'Always is here !!' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = false // true = auto blok kalo ad yg telfon
//=================================================//
// Batas User nya
global.limitawal = {
    premium: "Infinity",
    free: 1000
}
// taaofc
global.thum = fs.readFileSync("./baseikal/image/thum.jpeg") 
global.good = fs.readFileSync("./baseikal/image/good.jpeg") 
global.vidmenu = fs.readFileSync("./baseikal/video/mainmenu.mp4")

// Thumbanail url ( random pick )
global.fotoRandom = [
"https://telegra.ph/file/8aa4f691e35de274cbb61.jpg",
    "https://telegra.ph/file/90bc52a72070edd2290e6.jpg",
   
    ]
//=========================[ BATAS COOEG ]========================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
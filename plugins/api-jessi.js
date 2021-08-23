const jessiapi = require('api-jessi'); // Import NPM Package

const Alexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

Alexa.addCommand({pattern: 'logo$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t0 = ''
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    var t30 = ''
    var t31 = ''
    var t32 = ''
    var t33 = ''
    var t34 = ''
    var t35 = ''
    var t36 = ''
    var t37 = ''
    var t38 = ''
    var t39 = ''
    var t40 = ''
    var t41 = ''
    var t42 = ''
    var t43 = ''
    var t44 = ''
    var t45 = ''
    var t46 = ''
    var t47 = ''
    var t48 = ''
    var t49 = ''
    var t50 = ''
    var t51 = ''
    var t52 = ''
    var t53 = ''
    var t54 = ''
    var t55 = ''
    var t56 = ''
    var t57 = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        t0 = '*❝WhatsAlexa❞*'
        t1 = 'Alexa Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Alexa Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Alexa Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Alexa Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Alexa Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Alexa Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Alexa Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Alexa Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Alexa Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Alexa Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Alexa Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Alexa Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Alexa Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Alexa Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Alexa Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Alexa Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Alexa Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Alexa Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Alexa Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Alexa Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Alexa Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Alexa Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Alexa Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Alexa Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Alexa Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Alexa Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Alexa Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Alexa Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t30 = 'Alexa Makes Stone and Hammer Themed Logo.' // https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html
        t31 = 'Alexa Makes a Second With Glitch Effect.' // https://textpro.me/create-a-glitch-text-effect-online-free-1026.html 
        t32 = 'Alexa Makes a Second Harry Potter Themed Logo.' // https://textpro.me/create-harry-potter-text-effect-online-1025.html 
        t33 = 'Alexa Makes a Color Gradient Themed Logo.' // https://textpro.me/online-3d-gradient-text-effect-generator-1020.html
        t34 = 'Alexa Makes a Fifth Neon-Themed Logo.' // https://textpro.me/create-3d-neon-light-text-effect-online-1028.html 
        t35 = 'Alexa Makes Magma Themed Logo.' // https://textpro.me/create-a-magma-hot-text-effect-online-1030.html
        t36 = 'Alexa Makes Broken Glass Themed Logo.' // https://textpro.me/broken-glass-text-effect-free-online-1023.html
        t37 = 'Alexa Makes Paper Themed Logo.' // https://textpro.me/create-art-paper-cut-text-effect-online-1022.html
        t38 = 'Alexa Makes Metal Themed Logo.' // https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html
        t39 = 'Alexa Makes Watercolor Themed Logo.' // https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html
        t40 = 'Alexa Makes Colorful Logo with Art Effect.' // https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html
        t41 = 'Alexa Makes 3D Printing Themed Logos.' // https://textpro.me/create-layered-text-effects-online-free-1032.html
        t42 = 'Alexa Makes a Second Lightning-Themed Logo.' // https://textpro.me/online-thunder-text-effect-generator-1031.html
        t43 = 'Alexa Makes Transformers Themed Logo.' // https://textpro.me/create-a-transformer-text-effect-online-1035.html
        t44 = 'Alexa Makes Blood Themed Logo.' // https://textpro.me/horror-blood-text-effect-online-883.html
        t45 = 'Alexa Makes a Second Blood Themed Logo.' // https://textpro.me/blood-text-on-the-frosted-glass-941.html
        t46 = 'Alexa Makes a Second Flame Themed Logo' // https://textpro.me/halloween-fire-text-effect-940.html
        t47 = 'Alexa Makes Black and Pink Themed Logo.' // https://textpro.me/create-blackpink-logo-style-online-1001.html
        t48 = 'Alexa Makes Sand Themed Logo.' // https://textpro.me/write-in-sand-summer-beach-free-online-991.html
        t49 = 'Alexa Makes a Second Sand Themed Logo.' // https://textpro.me/sand-writing-text-effect-online-990.html
        t50 = 'Alexa Makes a Third Sand Themed Logo.' // https://textpro.me/sand-engraved-3d-text-effect-989.html 
        t51 = 'Alexa Makes a Fourth Sand Themed Logo.' // https://textpro.me/create-a-summery-sand-writing-text-effect-988.html
        t52 = 'Alexa Makes Mulberry Themed Logo.' // https://textpro.me/create-berry-text-effect-online-free-1033.html
        t53 = 'Alexa Makes a Third Graffiti Themed Logo.' // https://textpro.me/break-wall-text-effect-871.html
        t54 = 'Alexa Makes Phub Themed Logo.' // https://textpro.me/pornhub-style-logo-online-generator-free-977.html
        t55 = 'Alexa Makes a Second Devil-Themed Logo.' // https://textpro.me/create-green-horror-style-text-effect-online-1036.html
        t56 = 'Alexa Makes Retro Themed Logo.' // https://textpro.me/video-game-classic-8-bit-text-effect-1037.html
        t57 = 'Alexa Makes a Sci-Fi Themed Logo.' // https://textpro.me/create-science-fiction-text-effect-online-free-1038.html
    }
    else{
        t0 = '*❝WhatsAlexa❞*'
        t1 = 'Alexa Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Alexa Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Alexa Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Alexa Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Alexa Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Alexa Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Alexa Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Alexa Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Alexa Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Alexa Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Alexa Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Alexa Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Alexa Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Alexa Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Alexa Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Alexa Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Alexa Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Alexa Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Alexa Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Alexa Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Alexa Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Alexa Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Alexa Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Alexa Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Alexa Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Alexa Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Alexa Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Alexa Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t30 = 'Alexa Makes Stone and Hammer Themed Logo.' // https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html
        t31 = 'Alexa Makes a Second With Glitch Effect.' // https://textpro.me/create-a-glitch-text-effect-online-free-1026.html 
        t32 = 'Alexa Makes a Second Harry Potter Themed Logo.' // https://textpro.me/create-harry-potter-text-effect-online-1025.html 
        t33 = 'Alexa Makes a Color Gradient Themed Logo.' // https://textpro.me/online-3d-gradient-text-effect-generator-1020.html
        t34 = 'Alexa Makes a Fifth Neon-Themed Logo.' // https://textpro.me/create-3d-neon-light-text-effect-online-1028.html 
        t35 = 'Alexa Makes Magma Themed Logo.' // https://textpro.me/create-a-magma-hot-text-effect-online-1030.html
        t36 = 'Alexa Makes Broken Glass Themed Logo.' // https://textpro.me/broken-glass-text-effect-free-online-1023.html
        t37 = 'Alexa Makes Paper Themed Logo.' // https://textpro.me/create-art-paper-cut-text-effect-online-1022.html
        t38 = 'Alexa Makes Metal Themed Logo.' // https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html
        t39 = 'Alexa Makes Watercolor Themed Logo.' // https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html
        t40 = 'Alexa Makes Colorful Logo with Art Effect.' // https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html
        t41 = 'Alexa Makes 3D Printing Themed Logos.' // https://textpro.me/create-layered-text-effects-online-free-1032.html
        t42 = 'Alexa Makes a Second Lightning-Themed Logo.' // https://textpro.me/online-thunder-text-effect-generator-1031.html
        t43 = 'Alexa Makes Transformers Themed Logo.' // https://textpro.me/create-a-transformer-text-effect-online-1035.html
        t44 = 'Alexa Makes Blood Themed Logo.' // https://textpro.me/horror-blood-text-effect-online-883.html
        t45 = 'Alexa Makes a Second Blood Themed Logo.' // https://textpro.me/blood-text-on-the-frosted-glass-941.html
        t46 = 'Alexa Makes a Second Flame Themed Logo' // https://textpro.me/halloween-fire-text-effect-940.html
        t47 = 'Alexa Makes Black and Pink Themed Logo.' // https://textpro.me/create-blackpink-logo-style-online-1001.html
        t48 = 'Alexa Makes Sand Themed Logo.' // https://textpro.me/write-in-sand-summer-beach-free-online-991.html
        t49 = 'Alexa Makes a Second Sand Themed Logo.' // https://textpro.me/sand-writing-text-effect-online-990.html
        t50 = 'Alexa Makes a Third Sand Themed Logo.' // https://textpro.me/sand-engraved-3d-text-effect-989.html 
        t51 = 'Alexa Makes a Fourth Sand Themed Logo.' // https://textpro.me/create-a-summery-sand-writing-text-effect-988.html
        t52 = 'Alexa Makes Mulberry Themed Logo.' // https://textpro.me/create-berry-text-effect-online-free-1033.html
        t53 = 'Alexa Makes a Third Graffiti Themed Logo.' // https://textpro.me/break-wall-text-effect-871.html
        t54 = 'Alexa Makes Phub Themed Logo.' // https://textpro.me/pornhub-style-logo-online-generator-free-977.html
        t55 = 'Alexa Makes a Second Devil-Themed Logo.' // https://textpro.me/create-green-horror-style-text-effect-online-1036.html
        t56 = 'Alexa Makes Retro Themed Logo.' // https://textpro.me/video-game-classic-8-bit-text-effect-1037.html
        t57 = 'Alexa Makes a Sci-Fi Themed Logo.' // https://textpro.me/create-science-fiction-text-effect-online-free-1038.html
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        usage_cmd = '🏷 *Example:* _'
        command_cmd = '🔮 *Command:* '
        desc_cmd = 'ℹ️ *Description:* _'
    } else { 
        usage_cmd = '*🏷 Example:* _'
        command_cmd = '🔮 *Command:* '
        desc_cmd = 'ℹ️ *Description:* _'
    }
    const msg = command_cmd + '```.devil``` \n' + t1 + '_\n' + usage_cmd + '.devil WhatsAlexa_\n\n' +
        command_cmd + '```.2devil``` \n' + desc_cmd + t55 + '_\n' + usage_cmd + '.2devil WhatsAlexa_\n\n' +
        command_cmd + '```.bear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '.bear WhatsAlexa_\n\n' +
        command_cmd + '```.wolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '.wolf Whats;Alexa_\n\n' +
        command_cmd + '```.neon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '.neon WhatsAlexa_\n\n' +
        command_cmd + '```.2neon``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '.2neon WhatsAlexa_\n\n' +
        command_cmd + '```.3neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '.3neon WhatsAlexa_\n\n' +
        command_cmd + '```.4neon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '.4neon WhatsAlexa_\n\n' +
        command_cmd + '```.5neon``` \n' + desc_cmd + t34 + '_\n' + usage_cmd + '.5neon WhatsAlexa_\n\n' +
        command_cmd + '```.light``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '.light WhatsAlexa_\n\n' +
        command_cmd + '```.joker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '.joker WhatsAlexa_\n\n' +
        command_cmd + '```.ninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '.ninja Whats;Alexa_\n\n' +
        command_cmd + '```.glitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '.litter WhatsAlexa_\n\n' +
        command_cmd + '```.bokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '.bokeh WhatsAlexa_\n\n' +
        command_cmd + '```.marvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '.marvel Whats;Alexa_\n\n' +
        command_cmd + '```.2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '.2marvel Whats;Alexa_\n\n' +
        command_cmd + '```.avengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '.avengers Whats;Alexa_\n\n' +
        command_cmd + '```.graf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '.graf Whats;Alexa_\n\n' +
        command_cmd + '```.2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '.2graf Whats;Alexa_\n\n' +  
        command_cmd + '```.3graf``` \n' + desc_cmd + t53 + '_\n' + usage_cmd + '.3graf WhatsAlexa_\n\n' +
        command_cmd + '```.lion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '.lion Whats;Alexa_\n\n' +
        command_cmd + '```.ice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '.ice WhatsAlexa_\n\n' +
        command_cmd + '```.space``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '.space Whats;Alexa_\n\n' +
        command_cmd + '```.smoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '.smoke WhatsAlexa_\n\n' + // Thanks for @Unique_hunter for base.
        command_cmd + '```.glow``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '.glow WhatsAlexa_\n\n' +
        command_cmd + '```.fire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '.fire WhatsAlexa_\n\n' +
        command_cmd + '```.2fire``` \n' + desc_cmd + t46 + '_\n' + usage_cmd + '.2fire WhatsAlexa_\n\n' +
        command_cmd + '```.harry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '.harry WhatsAlexa_\n\n' +
        command_cmd + '```.2harry``` \n' + desc_cmd + t32 + '_\n' + usage_cmd + '.2harry WhatsAlexa_\n\n' +
        command_cmd + '```.cup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '.cup WhatsAlexa_\n\n' +
        command_cmd + '```.cemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '.cemetery WhatsAlexa_\n\n' +
        command_cmd + '```.stone``` \n' + desc_cmd + t30 + '_\n' + usage_cmd + '.stone WhatsAlexa_\n\n' +
        command_cmd + '```.gradient``` \n' + desc_cmd + t33 + '_\n' + usage_cmd + '.gradient WhatsAlexa_\n\n' +
        command_cmd + '```.magma``` \n' + desc_cmd + t35 + '_\n' + usage_cmd + '.magma WhatsAlexa_\n\n' +
        command_cmd + '```.glass``` \n' + desc_cmd + t36 + '_\n' + usage_cmd + '.bglass WhatsAlexa_\n\n' +
        command_cmd + '```.paper``` \n' + desc_cmd + t37 + '_\n' + usage_cmd + '.paper WhatsAlexa_\n\n' +
        command_cmd + '```.metal``` \n' + desc_cmd + t38 + '_\n' + usage_cmd + '.metal WhatsAlexa_\n\n' +
        command_cmd + '```.wcolor``` \n' + desc_cmd + t39 + '_\n' + usage_cmd + '.wcolor WhatsAlexa_\n\n' +
        command_cmd + '```.art``` \n' + desc_cmd + t40 + '_\n' + usage_cmd + '.art WhatsAlexa_\n\n' +
        command_cmd + '```.3d``` \n' + desc_cmd + t41 + '_\n' + usage_cmd + '.3d Whats;Alexa_\n\n' +
        command_cmd + '```.2light``` \n' + desc_cmd + t42 + '_\n' + usage_cmd + '.2light WhatsAlexa_\n\n' +
        command_cmd + '```.robo``` \n' + desc_cmd + t43 + '_\n' + usage_cmd + '.robo WhatsAlexa_\n\n' +
        command_cmd + '```.blood``` \n' + desc_cmd + t44 + '_\n' + usage_cmd + '.blood WhatsAlexa_\n\n' +
        command_cmd + '```.2blood``` \n' + desc_cmd + t45 + '_\n' + usage_cmd + '.2blood WhatsAlexa_\n\n' +
        command_cmd + '```.pink``` \n' + desc_cmd + t47 + '_\n' + usage_cmd + '.pink WhatsAlexa_\n\n' +
        command_cmd + '```.sand``` \n' + desc_cmd + t48 + '_\n' + usage_cmd + '.sand WhatsAlexa_\n\n' +
        command_cmd + '```.2sand``` \n' + desc_cmd + t49 + '_\n' + usage_cmd + '.2sans WhatsAlexa_\n\n' +
        command_cmd + '```.3sand``` \n' + desc_cmd + t50 + '_\n' + usage_cmd + '.3sand WhatsAlexa_\n\n' +
        command_cmd + '```.4sand``` \n' + desc_cmd + t51 + '_\n' + usage_cmd + '.4sand WhatsAlexa_\n\n' +
        command_cmd + '```.berry``` \n' + desc_cmd + t52 + '_\n' + usage_cmd + '.berry WhatsAlexa_\n\n' +
        command_cmd + '```.hub``` \n' + desc_cmd + t54 + '_\n' + usage_cmd + '.hub Whats;Alexa_\n\n' +
        command_cmd + '```.retro``` \n' + desc_cmd + t56 + '_\n' + usage_cmd + '.retro Whats;Alexa_\n\n' +
        command_cmd + '```.sci``` \n' + desc_cmd + t57 + '_\n' + usage_cmd + '.sci WhatsAlexa_\n\n' +
        command_cmd + '```.glitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '.glitch Whats;Alexa_\n\n' +
        command_cmd + '```.2glitch``` \n' + desc_cmd + t31 + '_\n' + usage_cmd + '.2glitch Whats;Alexa_'
    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
Alexa.addCommand({pattern: 'devil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/devil.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'sci ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/sci.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/sci.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2devil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/devil2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/devil2.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'hub ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessiapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/hub.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/hub.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'retro ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessiapi.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/retr.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/retr.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '3graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/break-wall-text-effect-871.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/t3gr.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/t3gr.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'berry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/bry.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/bry.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '4sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/t4snd.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/t4snd.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '3sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/t3snd.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/t3snd.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/sand-writing-text-effect-online-990.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/t2snd.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/t2snd.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/snd.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/snd.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2fire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/fh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/fh.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'pink ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/tpink.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/tpink.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2blood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/cbld.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cbld.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'blood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/bld.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/bld.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2light ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/t2lgh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/t2lgh.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'robo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/robo.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/robo.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '3d ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessiapi.textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/3dl.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/3dl.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'art ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/tart.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/tart.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'wcolor ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/wcolor.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/wcolor.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'magma ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/magma.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/magma.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'metal ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/metal.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/metal.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'paper ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/papert.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/papert.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'bglass ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/glass.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/glass.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '5neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/t5neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/t5neon.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'gradient ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/online-3d-gradient-text-effect-generator-1020.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/tgrone.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/tgrone.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2harry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/hp2n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/hp2n.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'stone ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/stone.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/stone.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'bear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/bear.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'wolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessiapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/wolf.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/neon.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/neon2.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'light ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/li.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'joker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/joker.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'ninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessiapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/ninja.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'glitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/tt.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'tbokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/bkh.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessiapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/marvel.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessiapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/mar2.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'avengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessiapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/aven.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessiapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/WhatsAlexa/t2gl.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/t2gl.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessiapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/tt2.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessiapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/ttgra.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessiapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/t2gra.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'lion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessiapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/lion.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/neon3.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'ice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/ice.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'space ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessiapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/space.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'smoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/smoke.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/smoke.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'glow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/WhatsAlexa/glowttp.jpg', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/glowttp.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
    })
}));
Alexa.addCommand({pattern: 'fire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/tfire.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/tfire.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'harry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/hp.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/hp.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '4neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/t4n.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'cemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cmth.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'cup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessiapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cup.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

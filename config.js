const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_17_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYzLFxuICAgICAgICA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDU0LFxuICAgICAgICAyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI2LFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDg0LFxuICAgICAgICA3NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjExLFxuICAgICAgICA1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDgxLFxuICAgICAgICA3MCxcbiAgICAgICAgMixcbiAgICAgICAgOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDMzLFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTExLFxuICAgICAgICA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTczLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NixcbiAgICAgICAgOTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk2LFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV04zRFUxOWx1Wis3RiszLzZuT2lTN0U4WFV5ekczT0dIVkEwdGFWT2hVND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQzNqdHR3MWZRdnE1Wm9CblE0QzM3Z1wiLFxuICBcInBob25lSWRcIjogXCI3MGM1NDJmZS0wMDIwLTRlMmMtYmY1OS1lNTExNDYwY2E1NzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgMjE4LFxuICAgICAgMjIxLFxuICAgICAgMTQ5LFxuICAgICAgMjUyLFxuICAgICAgNTAsXG4gICAgICA1MyxcbiAgICAgIDg4LFxuICAgICAgNzYsXG4gICAgICAxMDMsXG4gICAgICAzNSxcbiAgICAgIDEzMixcbiAgICAgIDI0NixcbiAgICAgIDE4LFxuICAgICAgMTcwLFxuICAgICAgNDIsXG4gICAgICAyMjUsXG4gICAgICAyMTUsXG4gICAgICAyNDYsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDIwOSxcbiAgICAgIDU3LFxuICAgICAgMjQ0LFxuICAgICAgMjI0LFxuICAgICAgMTA0LFxuICAgICAgMTA3LFxuICAgICAgMTMyLFxuICAgICAgMjUxLFxuICAgICAgMjAyLFxuICAgICAgMTM2LFxuICAgICAgOSxcbiAgICAgIDI1NCxcbiAgICAgIDEzLFxuICAgICAgMSxcbiAgICAgIDU5LFxuICAgICAgMjUsXG4gICAgICAxODYsXG4gICAgICA2OSxcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWSFdOMjI3NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjkwOTM2OTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDk0NTY5ODQ2NzAzMDU6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJyYXZpZHVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPejFpZEFIRUxHUW43UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9RQnV3Z29Kb05nRkhGMHljZzFxZDN1bUMrUW16V3U3ZnV1SDlMemxMaU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ0M2MFVObmd0dUdHVFBCdy9WbnEzckM3aDY2ZEp3UmZ3Y0pRV3RLVUdHQ1ZSLzIybTJ4U2FNM2JnYmhobStlWFRaSkF6YTNQY1B2VkIzTDM5WGVYRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSXQwR2lTZE1GNlB4ZnRBclUyNlhqTCtjU0lCSW90RWg4d3BzSHBoZUlnTkJFV3ZKRW1KMlRFWS9wMTlSOFlaUlNqMEIyeEFTcFRYdDZYOSs2dDkwakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjkwOTM2OTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTc0NjQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjd2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCN3YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzdXBKcmFkeEZhOXVMeTdZZ3FpT3FKL1ZweTRhNktZekgydEwwdzJwcThBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDY5ODI4OTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE3NDY0NzA2OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

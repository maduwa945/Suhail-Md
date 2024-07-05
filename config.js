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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_59_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDc1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldUQWJqd0xSUmxuT2U0anZGNGZyUnhpY3ZLMUhqZ0s2WkJuQW9IVGFpVUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzkzNTIwMzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM4QzhENDdFNkI4QUU4MEY3MTA3RjQ2RTQ1RjdGRUE3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE1NTU0MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuYWtuYjgzdlF4Mk12Qndta0hsRUt3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgyMzExMDE3LTgzZTEtNDU5My05MDgwLTY5ZWY3YTdkY2Y3NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDUxLFxuICAgICAgNDEsXG4gICAgICA0OSxcbiAgICAgIDYzLFxuICAgICAgNjIsXG4gICAgICA4OCxcbiAgICAgIDQsXG4gICAgICA4NyxcbiAgICAgIDIzOSxcbiAgICAgIDIxNSxcbiAgICAgIDE5MixcbiAgICAgIDE4LFxuICAgICAgMjQzLFxuICAgICAgMjQ3LFxuICAgICAgMTU1LFxuICAgICAgMTc5LFxuICAgICAgMTc3LFxuICAgICAgMTM5LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgODIsXG4gICAgICAxOTIsXG4gICAgICAxOTksXG4gICAgICAyMzcsXG4gICAgICAyMyxcbiAgICAgIDEyMixcbiAgICAgIDc3LFxuICAgICAgMzcsXG4gICAgICAxNTMsXG4gICAgICAxMjgsXG4gICAgICAxMjksXG4gICAgICAyNDAsXG4gICAgICA2OSxcbiAgICAgIDY0LFxuICAgICAgMjA0LFxuICAgICAgMjUsXG4gICAgICA3NCxcbiAgICAgIDkwLFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUFNVlNXNVRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc5MzUyMDM2OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMzM5Mjg5MDc1NzI5Njo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09TZzlaRUJFSXI3bmJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRXBLQ0l2NVJxR0JKSHJJdG9lckJDZ3gwL2x3ODJ5WGUwZG1IcXBhYzkwOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKMjhNbXYrZEZzenNnR2ZYSHYxVi94UmpYdkEwdEJIM2s0dnhwQ0RMeStwR3RzL3l1Q0dTd2QxcVg2SlYrM1NDUytBRVpmalQ4T1FhOTM0N1BoWkVDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpaTd0bkNoRUxUdzl5QjR6QTM0c2lLNHhIWE5XNUhMQmhhOE5KdlU0bjkvdGRQbTQ2alZKYVQ0STY5L0dLeCtvc3hvajJQQ3VnNFdMS2I3Z1FUZnpqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3OTM1MjAzNjo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxNTU1MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIdmpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh2ai5qc29uIjogIntcImtleURhdGFcIjpcIkRwa0laSjIwRFlXSVI5SWtZTnp3SSsrUFdhbnF3MytRaFl0VnVWcnpLRGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzA2MDA4MTYyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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

const axios = require("axios");

const url = "https://forward-bot-7err.onrender.com";

// Hàm ping
async function ping() {
  try {
    const res = await axios.get(url);
    console.log(`[${new Date().toISOString()}] Ping OK - Status: ${res.status}`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Ping lỗi:`, err.message);
  }
}

// Ping ngay khi start
ping();

// Ping lại mỗi 15s
setInterval(ping, 15000);

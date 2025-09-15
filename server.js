const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Danh sách URL và chu kỳ ping (ms)
const targets = [
  { url: "https://forward-bot-7err.onrender.com", interval: 15000 },
  { url: "https://autoping-ogbr.onrender.com", interval: 20000 }
];

// Hàm ping
async function ping(url) {
  try {
    const res = await axios.get(url);
    console.log(`[${new Date().toISOString()}] Ping ${url} OK - Status: ${res.status}`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Ping ${url} lỗi:`, err.message);
  }
}

// Thiết lập auto ping cho từng URL
targets.forEach(target => {
  // Ping ngay khi start
  ping(target.url);
  // Ping định kỳ
  setInterval(() => ping(target.url), target.interval);
});

// Tạo server local
app.get("/", (req, res) => {
  res.send("Ping service is running!");
});

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});

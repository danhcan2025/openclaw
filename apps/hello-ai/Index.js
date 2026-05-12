const express = require('express');
const app = express();
const PORT = 4000;

// Một route AI đơn giản
app.get('/ai/hello', (req, res) => {
  res.json({
    message: "🤖 Xin chào từ OpenClaw AI!",
    hint: "Bạn có thể mở rộng module này để xử lý ngôn ngữ tự nhiên, gọi API AI, hoặc tích hợp chatbot."
  });
});

app.listen(PORT, () => {
  console.log(`OpenClaw AI module chạy tại http://localhost:${PORT}/ai/hello`);
});

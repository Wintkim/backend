const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 라우터 연결
const videoRouter = require("./routes/video.routes");
const contactRouter = require("./routes/contact.routes");

app.use("/api/videos", videoRouter);
app.use("/api/contact", contactRouter);

// MongoDB 연결
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB 연결 성공"))
  .catch((err) => console.error("MongoDB 연결 실패:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});

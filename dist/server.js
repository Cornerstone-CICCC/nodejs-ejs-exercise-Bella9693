"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This is your server file :)
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// view engine 설정 (user provided instruction)
app.set("view engine", "ejs");
// views 폴더 경로 (설명: __dirname은 컴파일 후 경로가 달라질 수 있으므로 상황에 따라 조정)
app.set("views", path_1.default.join(__dirname, "../src/views"));
// 정적(static) 파일 경로 설정
// 개발: src/public 에 CSS 둔다면 아래를 사용 (ts-node-dev 사용시)
// app.use(express.static(path.join(__dirname, "../src/public")));
// production(빌드)에서 dist 내부 public을 사용하려면:
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use("/", index_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

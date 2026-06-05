// =============================================
//  診所資產盤點系統 — 設定檔  config.js
//  程式改版時此檔不需異動，只需維護此檔即可
// =============================================

// 程式版號（每次改版請更新）
const VERSION = "v1.2";

// 總公司收件信箱
const TO_EMAIL = "ab.best.ben@gmail.com";

// 診所清單
// csvUrl 格式：https://docs.google.com/spreadsheets/d/【試算表ID】/export?format=csv
const CLINICS = [
  { name: '南港醫學', csvUrl: 'https://docs.google.com/spreadsheets/d/1iojvGVFmGOaDRJOyo46PP_8gM2MtVIUZuHRSU6sZ_MQ/edit?usp=sharing' },
  
  // ... 其餘診所依序填入
];

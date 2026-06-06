// =============================================
//  診所資產盤點系統 — 設定檔  config.js
//  程式改版時此檔不需異動，只需維護此檔即可
// =============================================

// 總公司收件信箱
const TO_EMAIL = "ab.best.ben@gmail.com";

// 診所清單
// csvUrl 格式：https://docs.google.com/spreadsheets/d/【試算表ID】/export?format=csv
const CLINICS = [
  { name: '台北總院', csvUrl: 'https://docs.google.com/spreadsheets/d/SHEET_ID_1/export?format=csv' },
  { name: '板橋分院', csvUrl: 'https://docs.google.com/spreadsheets/d/SHEET_ID_2/export?format=csv' },
  { name: '新莊診所', csvUrl: 'https://docs.google.com/spreadsheets/d/SHEET_ID_3/export?format=csv' },
  { name: '三重診所', csvUrl: 'https://docs.google.com/spreadsheets/d/SHEET_ID_4/export?format=csv' },
  { name: '中和診所', csvUrl: 'https://docs.google.com/spreadsheets/d/SHEET_ID_5/export?format=csv' },
  // ... 其餘診所依序填入
];

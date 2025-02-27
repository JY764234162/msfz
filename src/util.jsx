export function includesIgnoreCase(mainStr, subStr) {
  const regex = new RegExp(subStr, "i"); // 'i' 表示忽略大小写
  return regex.test(mainStr);
}

export function highlightKeyword(text, keyword,isDark) {
  if(!keyword) return text
  return text.replace(
    new RegExp(keyword, "gi"),
    `<span style="color: ${isDark?'yellow':'red'};font-weight: bold;">$&</span>`
  );
}

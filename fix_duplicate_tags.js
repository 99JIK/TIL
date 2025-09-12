const fs = require('fs');
const yaml = require('js-yaml');

// tags.yml 파일 읽기
const content = fs.readFileSync('papers/tags.yml', 'utf8');

// 모든 키를 추출하여 중복 확인
const lines = content.split('\n');
const keyCounts = {};
const keyPositions = {};

lines.forEach((line, index) => {
  const trimmedLine = line.trim();
  if (trimmedLine && !trimmedLine.startsWith('#') && trimmedLine.endsWith(':')) {
    const key = trimmedLine.slice(0, -1); // 콜론 제거
    if (keyCounts[key]) {
      keyCounts[key]++;
      keyPositions[key].push(index + 1);
    } else {
      keyCounts[key] = 1;
      keyPositions[key] = [index + 1];
    }
  }
});

// 중복된 키들 출력
console.log('중복된 키들:');
Object.entries(keyCounts).forEach(([key, count]) => {
  if (count > 1) {
    console.log(`${key}: ${count}번 (라인: ${keyPositions[key].join(', ')})`);
  }
});

// YAML 파싱 시도
try {
  yaml.load(content);
  console.log('YAML 파일이 올바릅니다.');
} catch(e) {
  console.error('YAML 오류:', e.message);
}

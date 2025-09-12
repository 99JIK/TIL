const fs = require('fs');

// tags.yml 파일 읽기
const content = fs.readFileSync('papers/tags.yml', 'utf8');
const lines = content.split('\n');

// 중복된 키들을 제거할 라인 번호들
const duplicateKeys = [
  'Data Imbalance',
  'Supervised Learning', 
  'Knowledge Graph',
  'Property Prediction',
  'Materials Discovery',
  'Graph Neural Networks',
  'Density Functional Theory',
  'Active Learning',
  'Inorganic Crystals',
  'Deep Neural Networks'
];

// 각 중복된 키의 두 번째 정의를 제거
duplicateKeys.forEach(key => {
  let foundFirst = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === `${key}:`) {
      if (foundFirst) {
        // 두 번째 정의를 찾았으므로 제거
        // 해당 키의 정의 블록 전체를 찾아서 제거
        let j = i;
        // 주석 라인 찾기
        while (j > 0 && lines[j-1].trim().startsWith('#')) {
          j--;
        }
        // 빈 라인들도 포함해서 제거
        while (j > 0 && lines[j-1].trim() === '') {
          j--;
        }
        
        // 정의 블록 끝 찾기
        let endIndex = i + 1;
        while (endIndex < lines.length && 
               (lines[endIndex].trim() === '' || 
                lines[endIndex].startsWith('  ') || 
                lines[endIndex].trim().startsWith('#'))) {
          endIndex++;
        }
        
        // 빈 라인들도 포함해서 제거
        while (endIndex < lines.length && lines[endIndex].trim() === '') {
          endIndex++;
        }
        
        // 라인들 제거
        lines.splice(j, endIndex - j);
        break;
      } else {
        foundFirst = true;
      }
    }
  }
});

// 수정된 내용을 파일에 저장
const updatedContent = lines.join('\n');
fs.writeFileSync('papers/tags.yml', updatedContent);
console.log('중복된 태그들이 제거되었습니다.');

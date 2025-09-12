const fs = require('fs');
const yaml = require('js-yaml');

// tags.yml 파일 읽기
const content = fs.readFileSync('papers/tags.yml', 'utf8');
const tags = yaml.load(content);

// 새로운 형식으로 변환 (name 필드 제거)
const newTags = {};
Object.entries(tags).forEach(([key, value]) => {
  if (typeof value === 'object' && value !== null) {
    // name 필드를 제거하고 description과 color만 유지
    newTags[key] = {
      description: value.description,
      color: value.color
    };
  }
});

// 수정된 내용을 다시 파일에 저장
const updatedContent = yaml.dump(newTags, {
  indent: 2,
  lineWidth: -1,
  noRefs: true,
  sortKeys: false
});

fs.writeFileSync('papers/tags.yml', updatedContent);
console.log('tags.yml 파일 형식이 수정되었습니다.');

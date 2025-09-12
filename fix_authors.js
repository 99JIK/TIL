const fs = require('fs');
const yaml = require('js-yaml');

// authors.yml 파일 읽기
const content = fs.readFileSync('papers/authors.yml', 'utf8');
const authors = yaml.load(content);

// 모든 저자에게 url과 image_url 필드 추가 (없는 경우에만)
for (const [key, author] of Object.entries(authors)) {
  if (!author.url) {
    author.url = "";
  }
  if (!author.image_url) {
    author.image_url = "";
  }
}

// 수정된 내용을 다시 파일에 저장
const updatedContent = yaml.dump(authors, {
  indent: 2,
  lineWidth: -1,
  noRefs: true,
  sortKeys: false
});

fs.writeFileSync('papers/authors.yml', updatedContent);
console.log('authors.yml 파일이 수정되었습니다.');

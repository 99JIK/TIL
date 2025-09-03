const fs = require('fs');
const path = require('path');

// authors.yml 파일 읽기
const authorsYml = fs.readFileSync('papers/authors.yml', 'utf8');
const authorKeys = [];
const lines = authorsYml.split('\n');
for (const line of lines) {
  const match = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*):/);
  if (match) {
    authorKeys.push(match[1]);
  }
}

// papers 폴더의 모든 .md 파일에서 authors 필드 추출
const papersDir = 'papers';
const files = fs.readdirSync(papersDir).filter(file => file.endsWith('.md'));

const usedAuthorKeys = new Set();
const problematicFiles = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(papersDir, file), 'utf8');
  const match = content.match(/authors:\s*\[(.*?)\]/);
  if (match) {
    const authors = match[1].split(',').map(author => author.trim().replace(/"/g, ''));
    authors.forEach(author => {
      usedAuthorKeys.add(author);
      if (!authorKeys.includes(author)) {
        problematicFiles.push({ file, author });
      }
    });
  }
}

// 누락된 저자 키 찾기
const missingAuthors = Array.from(usedAuthorKeys).filter(author => !authorKeys.includes(author));

if (missingAuthors.length > 0) {
  console.log('❌ 누락된 저자 키들:');
  console.log(missingAuthors);
  console.log('\n문제가 있는 파일들:');
  problematicFiles.forEach(({ file, author }) => {
    console.log(`- ${file}: ${author}`);
  });
} else {
  console.log('✅ 모든 저자 키가 authors.yml에 정의되어 있습니다!');
  console.log(`총 ${authorKeys.length}개의 저자 키가 정의되어 있고, ${usedAuthorKeys.size}개의 저자 키가 사용되고 있습니다.`);
}

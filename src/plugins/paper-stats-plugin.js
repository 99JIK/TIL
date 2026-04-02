const fs = require('fs');
const path = require('path');

module.exports = function paperStatsPlugin(context) {
  return {
    name: 'paper-stats-plugin',

    async loadContent() {
      const papersDir = path.resolve(context.siteDir, 'papers');
      let totalPapers = 0;
      const tagSet = new Set();

      const files = fs.readdirSync(papersDir).filter(f => f.endsWith('.md'));

      for (const file of files) {
        const content = fs.readFileSync(path.join(papersDir, file), 'utf-8');
        const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!match) continue;

        totalPapers++;

        // Extract tags with regex (no yaml dependency needed)
        const tagsMatch = match[1].match(/^tags:\s*\[([^\]]*)\]/mi);
        if (tagsMatch) {
          const tags = tagsMatch[1].split(',').map(t => t.trim().replace(/^["']|["']$/g, ''));
          for (const tag of tags) {
            if (tag) tagSet.add(tag);
          }
        }
      }

      return {totalPapers, totalTags: tagSet.size};
    },

    async contentLoaded({content, actions}) {
      actions.setGlobalData(content);
    },
  };
};

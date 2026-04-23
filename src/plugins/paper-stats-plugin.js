const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function parseFrontmatterTags(body) {
  const tags = new Set();

  const inline = body.match(/^tags:\s*\[([^\]]*)\]/mi);
  if (inline) {
    for (const raw of inline[1].split(',')) {
      const t = raw.trim().replace(/^["']|["']$/g, '');
      if (t) tags.add(t);
    }
    return tags;
  }

  const blockStart = body.match(/^tags:\s*\n((?:[ \t]*-\s.*\n?)+)/m);
  if (blockStart) {
    for (const line of blockStart[1].split('\n')) {
      const m = line.match(/^\s*-\s+(.*?)\s*$/);
      if (m) {
        const t = m[1].replace(/^["']|["']$/g, '');
        if (t) tags.add(t);
      }
    }
  }
  return tags;
}

function parseFrontmatterField(body, field) {
  const re = new RegExp(`^${field}:\\s*(.+?)\\s*$`, 'mi');
  const m = body.match(re);
  if (!m) return null;
  return m[1].replace(/^["']|["']$/g, '');
}

function gitFirstCommitFallback(siteDir) {
  try {
    const out = execSync(
      'git log --reverse --name-only --pretty=format:"===%aI" -- papers/',
      { cwd: siteDir, encoding: 'utf-8', maxBuffer: 50 * 1024 * 1024 }
    );
    const map = new Map();
    let currentDate = null;
    for (const line of out.split('\n')) {
      if (line.startsWith('===')) {
        currentDate = line.slice(3).trim();
      } else if (line.endsWith('.md')) {
        const key = path.basename(line).toLowerCase();
        if (!map.has(key)) map.set(key, currentDate);
      }
    }
    return map;
  } catch (e) {
    return new Map();
  }
}

function isValidDate(s) {
  if (!s) return false;
  const d = new Date(s);
  return !Number.isNaN(d.getTime());
}

module.exports = function paperStatsPlugin(context) {
  return {
    name: 'paper-stats-plugin',

    async loadContent() {
      const papersDir = path.resolve(context.siteDir, 'papers');
      if (!fs.existsSync(papersDir)) {
        return { totalPapers: 0, totalTags: 0, topTags: [], papers: [] };
      }

      const gitDates = gitFirstCommitFallback(context.siteDir);
      const tagCounts = new Map();
      const papers = [];

      const files = fs.readdirSync(papersDir).filter((f) => f.endsWith('.md'));

      for (const file of files) {
        const full = path.join(papersDir, file);
        const content = fs.readFileSync(full, 'utf-8');
        const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!match) continue;

        const fm = match[1];
        const tags = parseFrontmatterTags(fm);
        for (const t of tags) {
          tagCounts.set(t, (tagCounts.get(t) || 0) + 1);
        }

        const fmDate = parseFrontmatterField(fm, 'date');
        const summaryDate =
          (isValidDate(fmDate) && fmDate) ||
          gitDates.get(file.toLowerCase()) ||
          fs.statSync(full).mtime.toISOString();

        const year = parseFrontmatterField(fm, 'year');
        const slug = parseFrontmatterField(fm, 'slug') || file.replace(/\.md$/, '');

        papers.push({
          file,
          title: parseFrontmatterField(fm, 'title') || file.replace(/\.md$/, ''),
          permalink: `/papers/${slug}`,
          summaryDate,
          year: year ? Number(year) : null,
        });
      }

      papers.sort(
        (a, b) => new Date(b.summaryDate).getTime() - new Date(a.summaryDate).getTime()
      );

      const topTags = [...tagCounts.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([tag, count]) => ({ tag, count }));

      return {
        totalPapers: papers.length,
        totalTags: tagCounts.size,
        topTags,
        papers,
      };
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },
  };
};

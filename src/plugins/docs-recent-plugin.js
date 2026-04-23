const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ARCHIVE_SEGMENT = 'ARCHIVE';

function walk(dir, base, acc) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    const rel = path.relative(base, full).split(path.sep).join('/');
    if (entry.isDirectory()) {
      if (entry.name === ARCHIVE_SEGMENT) continue;
      walk(full, base, acc);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      acc.push({ full, rel });
    }
  }
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.+)$/);
    if (!kv) continue;
    const v = kv[2].trim();
    if (v.startsWith('[')) continue;
    fm[kv[1]] = v.replace(/^["']|["']$/g, '');
  }
  return fm;
}

function loadCreationDates(siteDir) {
  try {
    const out = execSync(
      'git log --reverse --name-only --pretty=format:"===%aI" -- docs/',
      { cwd: siteDir, encoding: 'utf-8', maxBuffer: 50 * 1024 * 1024 }
    );
    const map = new Map();
    let cur = null;
    for (const line of out.split('\n')) {
      if (line.startsWith('===')) {
        cur = line.slice(3).trim();
      } else if (line.endsWith('.md')) {
        const key = line.toLowerCase();
        if (!map.has(key)) map.set(key, cur);
      }
    }
    return map;
  } catch (e) {
    return new Map();
  }
}

module.exports = function docsRecentPlugin(context) {
  return {
    name: 'docs-recent-plugin',

    async loadContent() {
      const docsDir = path.resolve(context.siteDir, 'docs');
      if (!fs.existsSync(docsDir)) return { items: [] };

      const files = [];
      walk(docsDir, docsDir, files);

      const dateMap = loadCreationDates(context.siteDir);
      const items = [];

      for (const { full, rel } of files) {
        const raw = fs.readFileSync(full, 'utf-8');
        const fm = parseFrontmatter(raw);

        const pathNoExt = rel.replace(/\.md$/, '');
        const segments = pathNoExt.split('/');
        const basename = segments[segments.length - 1];

        const slug = fm.slug || basename;
        const dirSegments = segments.slice(0, -1);
        const permalink = '/docs/' + [...dirSegments, slug].join('/');

        const category = dirSegments[0] || 'Docs';

        const gitKey = `docs/${rel}`.toLowerCase();
        const createdAt =
          dateMap.get(gitKey) ||
          fm.last_update ||
          fs.statSync(full).mtime.toISOString();

        items.push({
          title: fm.title || basename,
          permalink,
          category,
          createdAt,
        });
      }

      items.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      return { items };
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },
  };
};

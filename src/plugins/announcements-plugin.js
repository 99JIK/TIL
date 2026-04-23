const fs = require('fs');
const path = require('path');

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return null;
  const fm = m[1];
  const body = m[2].trim();

  const out = {};
  const lines = fm.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const kv = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    if (!kv) { i++; continue; }
    const key = kv[1];
    const rest = kv[2].trim();

    if (rest === '') {
      // Nested block
      const child = {};
      i++;
      while (i < lines.length && /^\s+\S/.test(lines[i])) {
        const cm = lines[i].match(/^\s+([A-Za-z_][\w-]*)\s*:\s*(.+)$/);
        if (cm) {
          child[cm[1]] = stripQuotes(cm[2].trim());
        }
        i++;
      }
      out[key] = child;
      continue;
    }

    out[key] = stripQuotes(rest);
    i++;
  }

  return { data: out, body };
}

function stripQuotes(v) {
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

module.exports = function announcementsPlugin(context) {
  return {
    name: 'announcements-plugin',

    async loadContent() {
      const dir = path.resolve(context.siteDir, 'announcements');
      if (!fs.existsSync(dir)) return { items: [] };

      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
      const items = [];

      for (const file of files) {
        const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
        const parsed = parseFrontmatter(raw);
        if (!parsed) continue;
        const { data, body } = parsed;

        items.push({
          file,
          date: data.date || '',
          title: data.title || file.replace(/\.md$/, ''),
          body,
          link: data.link && data.link.label && data.link.to ? data.link : null,
          accent: data.accent || 'neutral',
        });
      }

      items.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
      return { items };
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },
  };
};

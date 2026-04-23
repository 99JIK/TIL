import React, {memo, useMemo} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {usePluginData} from '@docusaurus/useGlobalData';
import Heading from '@theme/Heading';

interface SidebarItem {
  title: string;
  permalink: string;
  date: string;
  unlisted?: boolean;
}

interface PaperStatsData {
  papers?: {permalink: string; year: number | null}[];
}

interface BlogSidebarContentProps {
  items: SidebarItem[];
  yearGroupHeadingClassName?: string;
  ListComponent: React.ComponentType<{items: SidebarItem[]}>;
}

function BlogSidebarYearGroup({
  year,
  yearGroupHeadingClassName,
  children,
}: {
  year: string;
  yearGroupHeadingClassName?: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div role="group">
      <Heading as="h3" className={yearGroupHeadingClassName}>
        {year}
      </Heading>
      {children}
    </div>
  );
}

function BlogSidebarContent({
  items,
  yearGroupHeadingClassName,
  ListComponent,
}: BlogSidebarContentProps): JSX.Element {
  const themeConfig = useThemeConfig() as any;
  const paperStats = usePluginData('paper-stats-plugin') as PaperStatsData | undefined;

  const permalinkToYear = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of paperStats?.papers ?? []) {
      if (p.year) map.set(p.permalink, p.year);
    }
    return map;
  }, [paperStats]);

  const groupedEntries = useMemo(() => {
    const getYear = (item: SidebarItem): string => {
      const customYear = permalinkToYear.get(item.permalink);
      if (customYear) return String(customYear);
      return String(new Date(item.date).getFullYear());
    };

    const groups = new Map<string, SidebarItem[]>();
    for (const item of items) {
      const y = getYear(item);
      if (!groups.has(y)) groups.set(y, []);
      groups.get(y)!.push(item);
    }

    const entries = [...groups.entries()];
    entries.sort(([a], [b]) => Number(b) - Number(a));
    for (const [, arr] of entries) {
      arr.sort((x, y) => x.title.localeCompare(y.title));
    }
    return entries;
  }, [items, permalinkToYear]);

  if (!themeConfig.blog?.sidebar?.groupByYear) {
    return <ListComponent items={items} />;
  }

  return (
    <>
      {groupedEntries.map(([year, yearItems]) => (
        <BlogSidebarYearGroup
          key={year}
          year={year}
          yearGroupHeadingClassName={yearGroupHeadingClassName}>
          <ListComponent items={yearItems} />
        </BlogSidebarYearGroup>
      ))}
    </>
  );
}

export default memo(BlogSidebarContent);

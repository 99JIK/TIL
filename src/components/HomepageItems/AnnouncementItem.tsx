import React, {useCallback, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import pageStyles from '@site/src/pages/index.module.css';
import styles from './styles.module.css';

interface Announcement {
  file: string;
  date: string;
  title: string;
  body: string;
  link: {label: string; to: string} | null;
  accent: 'primary' | 'neutral';
}

interface PluginData {
  items?: Announcement[];
}

interface AnnouncementItemProps {
  gridClasses?: string;
  autoplayMs?: number;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

export default function AnnouncementItem({
  gridClasses,
  autoplayMs = 6000,
}: AnnouncementItemProps): JSX.Element | null {
  const data = usePluginData('announcements-plugin') as PluginData | undefined;
  const items = data?.items ?? [];
  const count = items.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (next: number) => {
      if (count === 0) return;
      const normalized = ((next % count) + count) % count;
      setIndex(normalized);
      const track = trackRef.current;
      if (track) {
        const slide = track.children[normalized] as HTMLElement | undefined;
        if (slide) {
          track.scrollTo({left: slide.offsetLeft, behavior: 'smooth'});
        }
      }
    },
    [count],
  );

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = window.setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % count;
        const track = trackRef.current;
        if (track) {
          const slide = track.children[next] as HTMLElement | undefined;
          if (slide) {
            track.scrollTo({left: slide.offsetLeft, behavior: 'smooth'});
          }
        }
        return next;
      });
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [paused, count, autoplayMs]);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const width = track.clientWidth;
    if (width === 0) return;
    const next = Math.round(track.scrollLeft / width);
    if (next !== index) setIndex(next);
  }, [index]);

  if (count === 0) return null;

  return (
    <aside
      className={clsx(pageStyles.newspaperCard, gridClasses, styles.announceCard)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={styles.announceHeader}>
        <span className={styles.announceLabel}>Announcements</span>
        <span className={styles.announceCounter}>
          {index + 1} / {count}
        </span>
      </div>

      <div
        ref={trackRef}
        className={styles.announceTrack}
        onScroll={onScroll}
        aria-live="polite"
      >
        {items.map((a, i) => (
          <article
            key={a.file}
            className={clsx(
              styles.announceSlide,
              a.accent === 'primary' && styles.announceSlidePrimary,
            )}
            aria-hidden={i !== index}
          >
            <div className={styles.announceMeta}>{formatDate(a.date)}</div>
            <h3 className={styles.announceTitle}>{a.title}</h3>
            <p className={styles.announceBody}>{a.body}</p>
            {a.link && (
              <Link to={a.link.to} className={styles.announceLink}>
                {a.link.label}
              </Link>
            )}
          </article>
        ))}
      </div>

      <div className={styles.announceControls}>
        <button
          type="button"
          className={styles.announceNav}
          aria-label="Previous announcement"
          onClick={() => go(index - 1)}
        >
          ‹
        </button>
        <div className={styles.announceDots} role="tablist">
          {items.map((a, i) => (
            <button
              key={a.file}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Announcement ${i + 1}`}
              className={clsx(styles.announceDot, i === index && styles.announceDotActive)}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className={styles.announceNav}
          aria-label="Next announcement"
          onClick={() => go(index + 1)}
        >
          ›
        </button>
      </div>
    </aside>
  );
}

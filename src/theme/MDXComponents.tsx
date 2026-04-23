import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import styles from './MDXComponents.module.css';

function WrappedTable(props: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className={styles.tableWrap}>
      <table {...props} />
    </div>
  );
}

export default {
  ...MDXComponents,
  table: WrappedTable,
};

import React from 'react';

export default function EmptyBlogList(): JSX.Element {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '4rem 2rem',
      color: 'var(--ifm-color-emphasis-600)'
    }}>
      <h2>Notes</h2>
      <p>개인적인 메모 공간입니다.</p>
    </div>
  );
}

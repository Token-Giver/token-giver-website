import React from 'react';
import { HighlightedTextProps } from '@/app/utils/types';

export function HighlightedText({
  text,
  highlight,
  className = '',
  highlightClassName = 'font-AgrandirRegular',
}: HighlightedTextProps) {
  // Split the text around the highlight word
  const parts = text.split(highlight);

  // If highlight not found in text, return original text
  if (parts.length === 1) {
    return <h3 className={className}>{text}</h3>;
  }

  return (
    <h3 className={className}>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <span className={highlightClassName}>{highlight}</span>
          )}
        </React.Fragment>
      ))}
    </h3>
  );
}

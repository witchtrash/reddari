import React from 'react';

interface ChipProps {
  text: string | null;
}
export const Chip = ({ text }: ChipProps) => {
  if (!text) {
    return null;
  }
  return (
    <div className=" inline-block min-w-12 rounded-xl border-2 border-primary px-2 text-center font-mono text-xs uppercase text-primary">
      {text}
    </div>
  );
};

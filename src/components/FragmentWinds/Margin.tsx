import React, { CSSProperties } from 'react';

type TMargin = {
  type: 'block' | 'inline' | 'top' | 'bottom';
  size: number;
};

function toCapitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Margin: React.FC<TMargin> = ({ type, size }) => {
  let css: CSSProperties = {};
  const marginTypes = {
    block: (): string => `margin${toCapitalize('block')}`,
    inline: (): string => `margin${toCapitalize('inline')}`,
    top: (): string => `margin${toCapitalize('top')}`,
    bottom: (): string => `margin${toCapitalize('bottom')}`,
  };

  const newProperty: string = marginTypes[type]();
  css = { ...css, [newProperty]: size + 'px' };
  console.log(css);

  return (
    <div
      style={{
        ...css,
        width: '100%',
        height: '1px',
      }}
    ></div>
  );
};

export default Margin;

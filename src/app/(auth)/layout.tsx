import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

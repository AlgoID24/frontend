interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      Nav Bar
      <div>{children}</div>
    </div>
  );
};

export default Layout;

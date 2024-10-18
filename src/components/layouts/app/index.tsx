interface Props {
  children?: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default AppLayout;

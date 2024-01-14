export const Emphasis = ({ children }: { children: string | number }) => {
  return (
    <em style={{ backgroundColor: "yellow", fontSize: "40px" }}>
      {children}
    </em>
  );
};

interface FooterListLayoutProps {
  children: React.ReactNode;
}
const FooterListLayout: React.FC<FooterListLayoutProps> = ({ children }) => {
  return (
    <>
      <div
        className="
        w-full
        sm:w-1/2
        md:w-1/4
        lg:w-1/6
        flex
        flex-col
        gap-1
        px-2
        py-4
        "
      >
        {children}
      </div>
    </>
  );
};

export default FooterListLayout;

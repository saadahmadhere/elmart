import "./Error.css";

const Error = () => {
  return (
    <main className="error">
      <h2 className="h2">Page not found</h2>
      <img
        src="/images/404.svg"
        alt="page not found"
        className="img_responsive"
      />
    </main>
  );
};

export { Error };

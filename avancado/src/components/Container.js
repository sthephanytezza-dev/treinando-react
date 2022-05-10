const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este é o título do conteiner</h2>
      <h3>{myValue}</h3>
      {children}
    </div>
  );
};

export default Container;

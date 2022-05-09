const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
  };

  const renderSomething = (x) => {
      if(x){
        return <h1>Renderizando isso!</h1>
      } else{
        return <h1>Também posso renderizar isso!</h1>
      }
  };

  return (
    <>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("clicou")}>
          Clique aqui também
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </>
  );
};

export default Events;

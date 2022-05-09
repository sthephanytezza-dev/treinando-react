const Events = () => {
  const handleMyEvent = (e) => {
      console.log(e);
  };
  return (
    <>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
          <button onClick={() => console.log("clicou")}>Clique aqui também</button>
      </div>
    </>
  );
};

export default Events;

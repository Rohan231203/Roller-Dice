const ItemDisplaySection = () => {
  const itemList = [
    {
      id: 1,
      title: "Analog notes",
      description: `A set of handwritten notes that of second year of analog electronics of Binu Ben Jose.`,
      img: "../../Assets/notes.jpg",
    },
  ];
  return (
    <div className="item-container">
      {itemList.map((card) => {
        return (
          <article
            key={card.id}
            className="itemCard max-w-[250px] bg-slate-300 "
          >
            <img src={card.img} alt={card.title} />
            <h2 className="text-lg font-bold">{card.title}</h2>
          </article>
        );
      })}
    </div>
  );
};

export default ItemDisplaySection;

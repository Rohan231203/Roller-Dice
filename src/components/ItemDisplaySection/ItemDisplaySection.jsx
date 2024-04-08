import Notes from "../../assets/notes.jpg";
// import Dumbbell from "../../assets/dumbbell.webp";
// import SolderingIron from "../../assets/soldering-iron.webp";

const ItemDisplaySection = () => {
  const itemList = [
    {
      id: 1,
      title: "Analog notes",
      description: `A set of handwritten notes that of second year of analog electronics of Binu Ben Jose.`,
    },
    {
      id: 2,
      title: "Dumbbells",
      description: `Elevate your workouts with this adjustable dumbbell set. Perfect for home gyms, it offers versatility and durability in a compact package. Strengthen and tone with ease!`,
    },
    {
      id: 3,
      title: "Soldering iron",
      description: `Upgrade your toolkit with this reliable soldering iron. Perfect for electronics projects and repairs, it's a must-have for any DIY enthusiast.`,
    },
  ];

  return (
    <div className="item-section py-10 bg-white px-10">
      <h1 className="text-2xl text-black font-bold mb-8">Products</h1>
      <div className="item-container flex gap-6 overflow-x-auto scrollbar-hidden">
        {itemList.map((card) => {
          return (
            <article
              key={card.id}
              className="itemCard bg-blue-100 border-2 border-black p-4 rounded-sm"
            >
              <div className="bg-cover bg-center h-52 w-52">
                <img src={Notes} alt={card.title} />
              </div>
              <h2 className="text-lg font-bold text-black">{card.title}</h2>
              <p className="text-slate-700 text-sm font-medium">
                {card.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ItemDisplaySection;

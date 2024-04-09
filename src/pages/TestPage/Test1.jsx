
import useFilterByCategory from '../../hooks/useFilterByCategory'; 

const CategoryPage = () => {
  const { isLoading, categoryItems } = useFilterByCategory();

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          categoryItems.map(item => (
            <article key={item.id} className="itemCard min-w-[300px] bg-blue-100 border-2 p-4 rounded-xl flex flex-col">
              <div className="mb-4 rounded-xl w-full h-40">
                {item.imageURL && (
                  <img
                    src={item.imageURL}
                    alt={"Feed Post image"}
                    className="rounded-md object-fit w-full h-full"
                  />
                )}
              </div>
              <h2 className="text-xl font-bold text-black">{item.title}</h2>
              <p className="text-slate-700 text-sm font-medium overflow-hidden line-clamp-3">
                {item.description}
              </p>
              <div className="mt-auto">
                {/* <Modal2 /> */}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

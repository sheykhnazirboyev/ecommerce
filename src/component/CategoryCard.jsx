export const CategoryCard = ({ img, name }) => {
  return (
    <div>
      <img src={img} alt="Category img" />
      <h1 className="text-3xl mt-2 text-center">{name}</h1>
    </div>
  );
};

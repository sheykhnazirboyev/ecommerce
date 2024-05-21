import propTypes from "prop-types";

const SectionHeader = (props) => {
  const { title, subTitle } = props;

  return (
    <div className="text-center my-4 w-2/3 mx-auto">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-400">{subTitle}</p>
    </div>
  );
};

SectionHeader.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
};

export { SectionHeader };

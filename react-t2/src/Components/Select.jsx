/* eslint-disable react/prop-types */
const Select = ({ onChange ,colors}) => {
  return (
    <select className="select" onChange={onChange}>
      {colors.map((value , index) => {
        return (<option value={value} key={index}>{value}</option>);
      })}
    </select>
  );
};

export default Select;

{
  /* <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="pink">Pink</option> */
}

import { useSelector, useDispatch } from "react-redux";
import { getFilterValue } from "../Redux/Contacts/Selectors";
import * as actions from "../Redux/Contacts/Actions";

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(actions.changeFilter(e.target.value));
  };
  return (
    <label>
      Filter by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

export default Filter;

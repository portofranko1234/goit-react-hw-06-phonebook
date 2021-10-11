import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../Redux/Contacts/contacts-selectors";
import actions from "../Redux/Contacts/contacts-action";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(actions.changeFilter(e.currentTarget.value));
  };
  return (
    <label>
      Filter by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

export default Filter;

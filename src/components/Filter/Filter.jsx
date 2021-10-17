import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../Redux/Contacts/contacts-selectors";
import * as actions from '../Redux/Contacts/contacts-actions';

const Filter = () => {
  const filter = useSelector(getFilter);
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

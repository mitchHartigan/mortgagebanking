import { useHistory } from "react-router";

export const _redirect = (location) => {
  const history = useHistory();
  history.props.push(location);
};

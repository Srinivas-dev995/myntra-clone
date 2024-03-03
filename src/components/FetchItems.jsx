import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchActions.markFetchStarted());
    fetch(url, { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchActions.markFetchDone());
        dispatch(fetchActions.markFetchEnded());
        dispatch(itemsAction.addInitialItems(data[0]));
      });
  }, []);

  return <></>;
};

export default FetchItems;

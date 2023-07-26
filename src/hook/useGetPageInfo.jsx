import { useSelector } from 'react-redux';

function useGetPageInfo() {
  const pageInfo = useSelector((state) => state.pageInfoSlice);
  return pageInfo;
}
export default useGetPageInfo;

import { useSelector } from 'react-redux';
function useGetComponentInfo() {
  //redux变量专区
  const canvasSlice = useSelector((state) => state.canvasSlice.present);

  const { componentList = [], selectId, copiedComponent } = canvasSlice;
  const selectedComponent = canvasSlice.componentList.find((item) => {
    return item.fe_id == canvasSlice.selectId;
  });

  return {
    componentList,
    selectId,
    selectedComponent,
    copiedComponent,
  };
}

export default useGetComponentInfo;

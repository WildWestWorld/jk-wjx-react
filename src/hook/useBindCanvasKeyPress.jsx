import {
  copySelectedComponent,
  pasteCopiedComponent,
  removeSelectedComponent,
  selectNextComponent,
  selectPrevComponent,
} from '@/store/canvas/slice';
import { useKeyPress } from 'ahooks';
import { useDispatch } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
// 检测当前元素是否有效元素
function isActiveElementValid() {
  const activeElement = document.activeElement;

  console.log(activeElement === document.body);

  // 增加 了dnd 之前
  // 如果光标没有force到input
  //   if (activeElement === document.body) {
  //     return true;
  //   }

  //  增加了 dnd之后
  if (activeElement === document.body) {
    return true;
  }
  if (activeElement.matches('div[role="button"]')) {
    return true;
  }

  // 如果光标force到input了
  return false;
}

function useBindCanvasKeyPress() {
  const dispatch = useDispatch();
  // 删除组件
  // 快捷键绑定 回退和删除
  // 按下时就出触发删除组件 事件
  useKeyPress(['delete'], () => {
    // 检测是否选择了input
    if (!isActiveElementValid()) {
      return false;
    }

    dispatch(removeSelectedComponent());
  });

  //   复制组件
  useKeyPress(['ctrl.c', 'meta.c'], () => {
    // 检测是否选择了input
    if (!isActiveElementValid()) {
      return false;
    }
    dispatch(copySelectedComponent());
  });

  //   粘贴组件
  useKeyPress(['ctrl.v', 'meta.v'], () => {
    // 检测是否选择了input
    if (!isActiveElementValid()) {
      return false;
    }
    dispatch(pasteCopiedComponent());
  });
  //   往上 选择组件
  useKeyPress(['uparrow'], () => {
    if (!isActiveElementValid) {
      return false;
    }
    dispatch(selectPrevComponent());
  });
  // //   往下 选择组件
  useKeyPress(['downarrow'], () => {
    if (!isActiveElementValid) {
      return false;
    }
    dispatch(selectNextComponent());
  });

  // Todo :上移下移，撤销重做
  useKeyPress(
    ['ctrl.z', 'meta.z'],
    () => {
      if (!isActiveElementValid) {
        return false;
      }
      dispatch(UndoActionCreators.undo());
    },
    { exactMatch: true }
  );

  useKeyPress(
    ['ctrl.shift.z', 'meta.shift.z'],
    () => {
      if (!isActiveElementValid) {
        return false;
      }
      dispatch(UndoActionCreators.redo());
    },
    { exactMatch: true }
  );
}

export default useBindCanvasKeyPress;

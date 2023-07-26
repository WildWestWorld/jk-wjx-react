import React, { memo, useEffect, useState } from 'react';
import { QuestionEditCanvasStyle } from './QuestionEditCanvasStyle';
import JKQuestionTitle from '@/components/question/questionTitle/JKQuestionTitle';
import JKQuestionInput from '@/components/question/questionInput/JKQuestionInput';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeComponentListState,
  resetComponents,
  changeSelectIdState,
  moveComponent,
} from '@/store/canvas/slice';
import useBindCanvasKeyPress from '@/hook/useBindCanvasKeyPress';
import JKQuestionParagraph from '@/components/question/questionParagraph/JKQuestionParagraph';
import JKQuestionInfo from '@/components/question/questionInfo/JKQuestionInfo';
import JKQuestionTextarea from '@/components/question/questionTextarea/JKQuestionTextarea';
import JKQuestionRadio from '@/components/question/questionRadio/JKQuestionRadio';
import JKQuestionCheckbox from '@/components/question/questionCheckbox/JKQuestionCheckbox';
import { resetPageInfo } from '@/store/pageInfo/slice';

import SortableContainer from '@/components/dragSortable/SortableContainer';
import SortableItem from '@/components/dragSortable/SortableItem';

const QuestionEditCanvas = memo(() => {
  const dispatch = useDispatch();
  //redux变量专区
  const canvasSlice = useSelector((state) => state.canvasSlice);
  //   console.error(canvasSlice);

  // 绑定按键
  useBindCanvasKeyPress();

  const genComponent = (item) => {
    // console.warn(item.props.text);

    if (item.type == 'questionTitle') {
      return (
        <JKQuestionTitle
          text={item.props.text}
          level={item.props.level}
          isCenter={item.props.isCenter}
        ></JKQuestionTitle>
      );
    }
    if (item.type == 'questionParagraph') {
      return (
        <JKQuestionParagraph
          text={item.props.text}
          isCenter={item.props.isCenter}
        ></JKQuestionParagraph>
      );
    }
    if (item.type == 'questionInfo') {
      return (
        <JKQuestionInfo
          title={item.props.title}
          desc={item.props.desc}
        ></JKQuestionInfo>
      );
    }
    if (item.type == 'questionInput') {
      return (
        <JKQuestionInput
          text={item.props.text}
          placeholder={item.props.placeholder}
        ></JKQuestionInput>
      );
    }

    if (item.type == 'questionTextarea') {
      return (
        <JKQuestionTextarea
          text={item.props.text}
          placeholder={item.props.placeholder}
        ></JKQuestionTextarea>
      );
    }
    if (item.type == 'questionRadio') {
      return (
        <JKQuestionRadio
          text={item.props.text}
          options={item.props.options}
          value={item.props.value}
          isVertical={item.props.isVertical}
        ></JKQuestionRadio>
      );
    }
    if (item.type == 'questionCheckbox') {
      return (
        <JKQuestionCheckbox
          text={item.props.text}
          list={item.props.list}
          isVertical={item.props.isVertical}
        ></JKQuestionCheckbox>
      );
    }
  };

  const handleClick = (event, id) => {
    console.log(event);
    // 防止事件冒泡
    event.stopPropagation();
    dispatch(changeSelectIdState(id));
  };

  const clearSelectIdState = () => {
    dispatch(changeSelectIdState(''));
  };

  const [canvasList, setCanvasList] = useState({
    id: '1',
    title: '问卷标题',
    desc: '问卷描述',
    js: '',
    css: '',
    componentList: [
      // title
      {
        fe_id: '2333',
        type: 'questionTitle', //组件类型
        title: '标题',
        isHidden: false,
        isLocked: false,
        props: { text: '个人信息调研', level: 1, isCenter: false },
      },
      // Paragraph
      {
        fe_id: '23334',
        type: 'questionParagraph', //组件类型
        title: '段落',
        isHidden: false,
        isLocked: false,
        props: { text: 'Paragraph', isCenter: false },
      },
      // Paragraph
      {
        fe_id: '2333412',
        type: 'questionInfo', //组件类型
        title: '标题段落结合',
        isHidden: false,
        isLocked: false,
        props: { title: 'InfoTile', desc: 'InfoDes' },
      },

      // Input
      {
        fe_id: '3111',
        type: 'questionInput', //组件类型
        title: '输入框1',
        isHidden: false,
        isLocked: false,

        props: { text: '你的姓名', placeholder: '请输入姓名' },
      }, // Input
      {
        fe_id: '4222',
        type: 'questionInput', //组件类型
        title: '输入框2',
        isHidden: false,
        isLocked: false,

        props: { text: '你的电话', placeholder: '请输入电话' },
      },
      {
        fe_id: '4223',
        type: 'questionTextarea', //组件类型
        title: '输入框Textarea',
        isHidden: false,
        isLocked: false,

        props: { text: 'Textarea', placeholder: 'Textarea' },
      },

      {
        fe_id: '4224',
        type: 'questionRadio', //组件类型
        text: 'Radio',
        title: 'Radio单选框',

        isHidden: false,
        isLocked: false,

        props: {
          text: '默认输入框标题',
          options: [
            { value: 'item1', text: '选项1' },
            { value: 'item2', text: '选项2' },
            { value: 'item3', text: '选项3' },
          ],
          value: '',
          isVertical: false,
        },
      },
      {
        fe_id: '42245',
        type: 'questionCheckbox', //组件类型
        text: 'Radio',
        title: 'Checked复选框',

        isHidden: false,
        isLocked: false,

        props: {
          text: '默认输入框标题',
          list: [
            { value: 'item1', text: '选项1', check: false },
            { value: 'item2', text: '选项2', check: false },
            { value: 'item3', text: '选项3', check: false },
          ],
          isVertical: false,
        },
      },
    ],
  });

  //   onMounted
  useEffect(() => {
    // 设置默认的selec
    let selectId = '';

    // 当组件列表长度大于0时 返回默认的id
    if (canvasList.componentList.length > 0) {
      selectId = canvasList.componentList[0].fe_id;
    }

    // 储存当前componentList
    dispatch(
      resetComponents({
        componentList: canvasList.componentList,
        selectId: selectId,
        copiedComponent: null,
      })
    );

    dispatch(
      resetPageInfo({
        title: canvasList.title,
        desc: canvasList.desc,
        js: canvasList.js,
        css: canvasList.css,
      })
    );
  }, []);

  //   items属性需要每个item有id，而我们的item 的id 字段名叫fe_id
  const componentListWithId = canvasSlice.present.componentList.map((item) => {
    return { ...item, id: item.fe_id };
  });

  const handleDragEnd = (oldIndex, newIndex) => {
    console.log('handleDragEnd', oldIndex, newIndex);
    dispatch(moveComponent({ oldIndex, newIndex }));
  };

  return (
    <SortableContainer items={componentListWithId} onDragEnd={handleDragEnd}>
      <QuestionEditCanvasStyle>
        <div className="canvas">
          {/* <div className="component-wrapper">
          <JKQuestionTitle></JKQuestionTitle>
        </div>
        <div className="component-wrapper">
          <JKQuestionInput></JKQuestionInput>
        </div> */}

          {/* fliter过滤 isHidden的数据 */}

          {canvasSlice.present.componentList
            .filter((item) => !item.isHidden)
            .map((item) => {
              return (
                // 一定要添加 id 不然无法进行拖拽
                <SortableItem key={item.fe_id} id={item.fe_id}>
                  <div
                    className={`component-wrapper ${
                      canvasSlice.present.selectId === item.fe_id
                        ? 'selected'
                        : ''
                    } ${item.isLocked ? 'locked' : ''}`}
                    onClick={(e) => handleClick(e, item.fe_id)}
                  >
                    <div className={'component'}>{genComponent(item)}</div>
                  </div>
                </SortableItem>
              );
            })}
        </div>
      </QuestionEditCanvasStyle>
    </SortableContainer>
  );
});

export default QuestionEditCanvas;

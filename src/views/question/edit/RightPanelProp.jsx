import CheckboxRightPanelProp from '@/components/question/questionCheckbox/CheckboxRightPanelProp';
import InfoRightPanelProp from '@/components/question/questionInfo/InfoRightPanelProp';
import InputRightPanelProp from '@/components/question/questionInput/InputRightPanelProp';
import ParagraphRightPanelProp from '@/components/question/questionParagraph/ParagraphRightPanelProp';
import RadioRightPanelProp from '@/components/question/questionRadio/RadioRightPanelProp';
import JKQuestionTextarea from '@/components/question/questionTextarea/JKQuestionTextarea';
import TextareaRightPanelProp from '@/components/question/questionTextarea/TextareaRightPanelProp';
import TitleRightPanelProp from '@/components/question/questionTitle/TitleRightPanelProp';
import useGetComponentInfo from '@/hook/useGetComponentInfo';
import { changeComponentPropState } from '@/store/canvas/slice';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

const NoProp = () => {
  return <div style={{ textAlign: 'center' }}>未选中组件</div>;
};

const genComponentProp = (item, dispatch) => {
  // console.warn(item.props.text);

  if (item == null) {
    return;
  }
  const { fe_id } = item;

  const changeProps = (value) => {
    if (item == null) return;
    console.log('newProps', fe_id, value);
    dispatch(changeComponentPropState({ fe_id, value }));
  };

  if (item.type == 'questionTitle') {
    return (
      <TitleRightPanelProp
        text={item.props.text}
        level={item.props.level}
        isCenter={item.props.isCenter}
        disabled={item.isLocked}
        onChange={changeProps}
      ></TitleRightPanelProp>
    );
  }
  if (item.type == 'questionParagraph') {
    return (
      <ParagraphRightPanelProp
        text={item.props.text}
        isCenter={item.props.isCenter}
        disabled={item.isLocked}
        onChange={changeProps}
      ></ParagraphRightPanelProp>
    );
  }

  if (item.type == 'questionInfo') {
    return (
      <InfoRightPanelProp
        title={item.props.title}
        desc={item.props.desc}
        disabled={item.isLocked}
        onChange={changeProps}
      ></InfoRightPanelProp>
    );
  }

  if (item.type == 'questionInput') {
    return (
      <InputRightPanelProp
        text={item.props.text}
        placeholder={item.props.placeholder}
        disabled={item.isLocked}
        onChange={changeProps}
      ></InputRightPanelProp>
    );
  }

  if (item.type == 'questionTextarea') {
    return (
      <TextareaRightPanelProp
        text={item.props.text}
        placeholder={item.props.placeholder}
        disabled={item.isLocked}
        onChange={changeProps}
      ></TextareaRightPanelProp>
    );
  }
  if (item.type == 'questionRadio') {
    return (
      <RadioRightPanelProp
        text={item.props.text}
        options={item.props.options}
        value={item.props.value}
        isVertical={item.props.isVertical}
        disabled={item.isLocked}
        onChange={changeProps}
      ></RadioRightPanelProp>
    );
  }
  if (item.type == 'questionCheckbox') {
    return (
      <CheckboxRightPanelProp
        text={item.props.text}
        list={item.props.list}
        value={item.props.value}
        isVertical={item.props.isVertical}
        disabled={item.isLocked}
        onChange={changeProps}
      ></CheckboxRightPanelProp>
    );
  }
};

const RightPanelProp = memo(() => {
  const { selectedComponent } = useGetComponentInfo();
  const dispatch = useDispatch();

  if (selectedComponent == null) {
    return <NoProp></NoProp>;
  }
  console.log(selectedComponent);

  return <div>{genComponentProp(selectedComponent, dispatch)}</div>;
});

export default RightPanelProp;

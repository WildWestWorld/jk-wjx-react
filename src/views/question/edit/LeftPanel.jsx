import React, { memo } from 'react';
import { Tabs } from 'antd';
import { useCallback, useState } from 'react';
import { AppstoreAddOutlined, BarsOutlined } from '@ant-design/icons';
import JKQuestionTitle from '@/components/question/questionTitle/JKQuestionTitle';
import JKQuestionInput from '@/components/question/questionInput/JKQuestionInput';
import LeftPanelLib from './LeftPanelLib';
import TitleRightPanelProp from '@/components/question/questionTitle/TitleRightPanelProp';
import InputRightPanelProp from '@/components/question/questionInput/InputRightPanelProp';
import JKQuestionParagraph from '@/components/question/questionParagraph/JKQuestionParagraph';
import ParagraphRightPanelProp from '@/components/question/questionParagraph/ParagraphRightPanelProp';
import JKQuestionInfo from '@/components/question/questionInfo/JKQuestionInfo';
import InfoRightPanelProp from '@/components/question/questionInfo/InfoRightPanelProp';
import JKQuestionTextarea from '@/components/question/questionTextarea/JKQuestionTextarea';
import TextareaRightPanelProp from '@/components/question/questionTextarea/TextareaRightPanelProp';
import JKQuestionRadio from '@/components/question/questionRadio/JKQuestionRadio';
import RadioRightPanelProp from '@/components/question/questionRadio/RadioRightPanelProp';
import JKQuestionCheckbox from '@/components/question/questionCheckbox/JKQuestionCheckbox';
import CheckboxRightPanelProp from '@/components/question/questionCheckbox/CheckboxRightPanelProp';
import Layers from './Layers';

const LeftPanel = memo(() => {
  const componentLibList = [
    {
      groupId: 'textGroup',
      groupName: '文本显示',
      components: [
        {
          title: 'Title标题',
          type: 'questionTitle', // 要和后端统一好
          Component: JKQuestionTitle,
          RightPanelComponent: TitleRightPanelProp,
          defaultProps: { text: '一行标题', level: 1, isCenter: false },
        },
        {
          title: 'Paragraph标题',
          type: 'questionParagraph', // 要和后端统一好
          Component: JKQuestionParagraph,
          RightPanelComponent: ParagraphRightPanelProp,
          defaultProps: { text: '一行标题Paragraph', isCenter: false },
        },
        {
          title: 'Info标题',
          type: 'questionInfo', // 要和后端统一好
          Component: JKQuestionInfo,
          RightPanelComponent: InfoRightPanelProp,
          defaultProps: { title: 'questionInfo标题', desc: '测试' },
        },
      ],
    },
    {
      groupId: 'inputGroup',
      groupName: '用户输入',
      components: [
        {
          title: '输入标题',
          type: 'questionInput', // 要和后端统一好
          Component: JKQuestionInput,
          RightPanelComponent: InputRightPanelProp,
          defaultProps: {
            text: '默认输入框标题',
            placeholder: '默认输入框标题placeholder',
          },
        },
        {
          title: 'textarea标题',
          type: 'questionTextarea', // 要和后端统一好
          Component: JKQuestionTextarea,
          RightPanelComponent: TextareaRightPanelProp,
          defaultProps: {
            text: '默认输入框多行标题',
            desc: '输入框多行placeholder',
          },
        },
      ],
    },
    {
      groupId: 'inputSelect',
      groupName: '用户选择',
      components: [
        {
          title: '输入标题',
          type: 'questionRadio', // 要和后端统一好
          Component: JKQuestionRadio,
          RightPanelComponent: RadioRightPanelProp,
          defaultProps: {
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
          title: '输入标题',
          type: 'questionCheckbox', // 要和后端统一好
          Component: JKQuestionCheckbox,
          RightPanelComponent: CheckboxRightPanelProp,
          defaultProps: {
            text: '默认输入框标题',
            list: [
              { value: 'item1', text: '选项1', checked: false },
              { value: 'item2', text: '选项2', checked: false },
              { value: 'item3', text: '选项3', checked: false },
            ],
            isVertical: false,
          },
        },
      ],
    },
  ];

  const tabsItems = [
    {
      key: 'componentLib',
      label: (
        <span>
          <AppstoreAddOutlined></AppstoreAddOutlined>
          组件库
        </span>
      ),
      children: (
        <LeftPanelLib componentLibList={componentLibList}></LeftPanelLib>
      ),
    },
    {
      key: 'layers',
      label: (
        <span>
          <BarsOutlined></BarsOutlined>
          图层
        </span>
      ),
      children: <Layers></Layers>,
    },
  ];

  return <Tabs defaultActiveKey="componentLib" items={tabsItems}></Tabs>;
});

export default LeftPanel;

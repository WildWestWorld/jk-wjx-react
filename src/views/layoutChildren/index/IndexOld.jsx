import Icon, {
  PlusOutlined,
  DeleteFilled,
  RightCircleFilled,
} from '@ant-design/icons';
import { Button, Cascader, Space, Table, Tag } from 'antd';
import React, { memo, useEffect, useRef, useState } from 'react';
import { IndexWrapper } from './style';
import { statusEmun } from '@/utils/stateEmun';
import { pencilSvg } from '@/utils/svg';
import JKMap from '@/components/common/JKMap';

import { useDispatch, useSelector } from 'react-redux';

import {
  addActivityRedux,
  getActivityList,
  editActivityRedux,
  deleteActivityRedux,
} from '@/store/activity/slice';

import JKMapCas from '@/components/common/JKMapCas';

// import AddressMap from '@/components/common/TestMap';

const optionLists = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];

const Index = memo(() => {
  ////Data区
  const [tableHeight, setTableHeight] = useState(0);

  const [pagePayload, setPagePayload] = useState({ page: 1, per_page: 10 });

  //表格 表头的数据 ;
  const columns = [
    {
      title: '序号',
      dataIndex: 'index', //dataIndex 要与data里面的字段绑定
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '活动名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '所属客户',
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: '活动状态',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => {
        let color = 'red';
        if (record.status == '关闭') {
          color = 'red';
        } else {
          color = 'green';
        }

        return (
          <div className="status-container">
            <div className="status-light" style={{ background: color }}></div>
            <div>{record.status}</div>
          </div>
        );
      },
    },
    {
      title: '活动开始时间',
      dataIndex: 'beginDate',
      key: 'beginDate',
    },

    {
      title: '活动截止时间',
      dataIndex: 'endDate',
      key: 'endDate',
    },

    //废弃(废弃原因，该行与页面无关，但是可以学习下)
    // {
    //   title: 'Tag',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     //
    //     <>
    //       {tags.map((tag) => {
    //         //如果tag的长度大于5 就把颜色变量设置成geekBlue
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: '操作',
      key: 'action',
      //这里的record就是该行对应的值
      render: (_, record) => (
        <Space size="middle">
          {/* 活动详情按钮 */}
          <Button
            className="activity-btn"
            type="default"
            icon={<RightCircleFilled></RightCircleFilled>}
            size="middle"
          >
            活动详情
          </Button>

          {/*  编辑按钮 */}
          <Button
            className="edit-btn"
            type="default"
            icon={<Icon component={pencilSvg} />}
            size="middle"
          >
            编辑
          </Button>

          {/* 删除按钮 */}
          <Button
            className="delete-btn"
            type="default"
            icon={<DeleteFilled></DeleteFilled>}
            size="middle"
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];

  //   内容的数据
  const data = [
    {
      key: '1',
      index: 1,
      name: '10元专享立减券',
      client: '中行活动',
      status: statusEmun[true],
      beginDate: '2022-11-25 00:00:00',
      endDate: '2022-11-25 00:00:00',

      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      index: 2,
      name: '10元专享立减券',
      client: '中行活动',
      status: statusEmun[false],
      beginDate: '2022-11-25 00:00:00',
      endDate: '2022-11-25 00:00:00',

      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      index: 3,
      name: '10元专享立减券',
      age: 32,
      status: statusEmun[true],
      beginDate: '2022-11-25 00:00:00',
      endDate: '2022-11-25 00:00:00',

      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
      client: '中行活动',
    },
  ];

  //Hook区
  const tableContainerRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    // document.querySelector('.table-container');
    // 在React中的ref必须加上current

    //设置表格高度
    // console.log(tableContainerRef.current.offsetHeight);
    setTableHeight(tableContainerRef.current.offsetHeight);
  });

  useEffect(() => {
    console.log(123);
  }, []);

  useEffect(() => {
    dispatch(getActivityList(pagePayload)).then((res) => {
      if (res.payload.code == 0) {
      }
    });
  }, [pagePayload]);

  const [options, setOptions] = useState(optionLists);
  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  const loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      setOptions([...options]);
    }, 1000);
  };

  return (
    <IndexWrapper>
      <div className="content" style={{ display: 'none' }}>
        工具栏
        <div className="utils-container">
          {/* 放置按钮的容器 */}
          <div className="button-container">
            {/* 用于新建的Button */}
            <Button
              type="primary"
              icon={<PlusOutlined></PlusOutlined>}
              size="large"
            >
              新建活动
            </Button>
          </div>
        </div>
        {/* 表格的内容  */}
        <div className="table-container" ref={tableContainerRef}>
          <Table
            columns={columns}
            dataSource={data}
            // scroll={{ y: tableHeight }}//给表格添加虚拟滚动
            // 动态设置行的ClassName
            rowClassName={(record, index) => {
              //因为从0开始数,所以 第二个 会被%2 后会余 1
              return index % 2 == 0 ? 'zebra-white' : 'zebra-black';
            }}
          ></Table>
        </div>
      </div>
      {/* <JKMapCas></JKMapCas> */}

      {/* <JKMap></JKMap> */}
      {/* <Cascader
        options={options}
        loadData={loadData}
        onChange={onChange}
        multiple
      /> */}
      {/* <AddressMap
        areaSelectData={{ longitude: '123', latitude: '321' }}
      ></AddressMap> */}
    </IndexWrapper>
  );
});

export default Index;

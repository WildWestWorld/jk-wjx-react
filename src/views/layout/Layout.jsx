import Icon, {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
  InboxOutlined,
  LineChartOutlined,
  FileTextOutlined,
  SafetyCertificateOutlined,
  PayCircleOutlined,
  PictureOutlined,
  GithubOutlined,
  TagsOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import {
  Breadcrumb,
  Layout,
  Menu,
  PageHeader,
  Avatar,
  Button,
  Dropdown,
  Space,
} from 'antd';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { LayoutWrapper } from './style';
const { Header, Sider, Content } = Layout;

import {
  matchRoutes,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';

// import reactSvg from '@/assets/react.svg';
import targetImg from '@/assets/img/target.png';
//自定义图标
import {
  calculatorSvg,
  vipSvg,
  staticSvg,
  settingSvg,
  closeComputerSvg,
  HomeSvg,
} from '@/utils/svg';
import { rem } from '@/utils/rem';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { routerNameEmun, searchRouterPath } from '@/utils/routerUtils';
import router from '@/router';
import { changePathInfoState, clearInfoState } from '@/store/common/slice';

const JKLayout = () => {
  // 变量区
  const [collapsed, setCollapsed] = useState(false);
  const [pageTitle, setPageTitle] = useState('首页');
  const [defaultSelectKey, setDefaultSelectKey] = useState([]);
  const [isInit, setIsInit] = useState(false);

  //redux 变量专区
  //拿到redux存储的值
  //变更了才更新
  const commonSlicePersist = useSelector((state) => state.commonSlicePersist);

  //存储的当前路由的路径信息
  const pathInfo = commonSlicePersist.pathInfo;

  //用户信息
  const userInfo = commonSlicePersist.userInfo;

  // 获取路由路径
  let routerPath = useLocation().pathname;
  let routerPathArr = routerPath.split('/');
  let currentPath = routerPathArr[routerPathArr.length - 1];

  //去除数组中首个字符串因为他是空的
  routerPathArr.shift();

  let path = useLocation().pathname;
  let pathFormat = path.split('/');
  pathFormat = `/${pathFormat[1]}/${pathFormat[2]}`;
  path = pathFormat;
  //登出

  const items = [
    {
      key: '1',
      label: '修改密码',

      icon: <SafetyCertificateOutlined />,
    },
    {
      key: '2',
      label: '退出系统',
      icon: <Icon component={closeComputerSvg} />,

      onClick: (e) => {
        console.log(e);
        console.log('登出');
        sessionStorage.setItem('token', null);
        dispatch(clearInfoState());
        navigator('/login');
      },
    },
  ];

  //方法区
  //获取路由中的 我们放进去的meta
  const getRouterMeta = () => {
    // let routerdetail = searchRouterPath(path, router);
    // if (routerdetail.meta && routerdetail.meta.title !== undefined) {
    //   setPageTitle(routerdetail.meta.title);
    // } else {
    //   setPageTitle('暂无标题');
    // }

    setPageTitle(routerNameEmun[currentPath]);
  };
  //获取当前路由(防止刷新)

  //Hook区

  //useNavigate 用于页面跳转
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const localtion = useLocation();
  const navigator = useNavigate();
  //useEffect
  useEffect(() => {
    getRouterMeta();
    //react-router自带的匹配路由方法
    // const routes = matchRoutes(router, localtion.pathname);
    dispatch(changePathInfoState(path));

    //根据Path来设置侧边栏默认的key
    // if (path === '/layout/index') {

    // }

    // console.log(commonSlicePersist);
  }, [path]);

  //   useLayoutEffect(() => {
  //     dispatch(changePathInfoState(path));
  //   });

  //redux区
  //获取redux 中的参数

  //   const commonSlice = useSelector((state) => state.commonSlice, shallowEqual);
  //   console.log(commonSlice.pathInfo);

  return (
    <LayoutWrapper>
      <Layout
        style={{ width: '100vw', height: '100vh' }}
        id="components-layout-demo-custom-trigger"
      >
        <Sider trigger={null} collapsible collapsed={collapsed} theme="dark">
          <div className="logo">
            <div className="img-wrapper">
              <img src={targetImg} alt="" />
            </div>
          </div>
          {/* react中v-if */}
          {!collapsed && <div className="title">温州商圈后台管理</div>}

          {/* 菜单管理 */}
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[path]}
            selectedKeys={path}
            //根据我们里面写的key来进行侧边栏页面跳转
            //这里的e.key 就能拿到我们在item里面写的key
            onClick={(e) => {
              navigate(e.key);
              dispatch(changePathInfoState(e.key));
              getRouterMeta();
            }}
            items={[
              {
                key: '/layout/index',
                icon: <HomeOutlined />,
                label: '系统首页',
              },
              {
                key: '/layout/activity',
                icon: <FileTextOutlined />,
                label: '活动管理',
              },
              {
                key: '/layout/ticket',
                icon: <TagsOutlined />,
                label: '优惠券管理',
              },
              {
                key: '/layout/merchant',
                icon: <InboxOutlined />,
                label: '商户管理',
              },
              {
                key: '/layout/shop',
                icon: <UserOutlined />,
                label: '门店管理',
              },
              {
                key: '/layout/notice',
                icon: (
                  <Icon
                    component={calculatorSvg}
                    style={{ fontSize: rem(20) }}
                  />
                ),
                label: '公告管理',
              },
              {
                key: '/layout/tradingArea',
                icon: <LineChartOutlined />,
                label: '商圈管理',
              },

              {
                key: '/layout/merchantType',
                icon: <Icon component={vipSvg} style={{ fontSize: rem(20) }} />,
                label: '类型管理',
              },

              {
                key: '/layout/user',
                icon: (
                  <Icon component={staticSvg} style={{ fontSize: rem(20) }} />
                ),
                label: '用户管理',
              },
              {
                key: '/layout/order',
                icon: (
                  <Icon component={settingSvg} style={{ fontSize: rem(20) }} />
                ),
                label: '订单管理',
              },
              {
                key: '/layout/withdraw',
                icon: <PayCircleOutlined />,

                label: '提现管理',
              },
              {
                key: '/layout/receipt',
                icon: <SolutionOutlined />,
                label: '发票管理',
              },
              //   {
              //     key: '/layout/carousel',
              //     icon: <PictureOutlined />,
              //     label: '轮播图管理',
              //   },
              {
                key: '/layout/account',
                icon: <GithubOutlined />,
                label: '账号管理',
              },
            ]}
          />
        </Sider>

        {/* 主界面 */}
        <Layout className="site-layout">
          {/* 头部的导航栏  */}
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )}

            {/* 头部框右边的 用户状态信息 */}
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <div className="info-container">
                <div className="avatar-container">
                  <Avatar icon={<UserOutlined />}></Avatar>
                </div>
                <div className="name-container">
                  <span className="name">{userInfo.name}</span>
                </div>
              </div>
            </Dropdown>
          </Header>

          {/* 表头 */}
          <PageHeader className="header-breadcrumb-container">
            <Icon component={HomeSvg} />

            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              {/* 循环们自定义的 数组 */}
              {/* 记得绑定key否则会报错 */}
              {routerPathArr.map((item, index) => {
                if (item !== 'index') {
                  if (item == 'layout') {
                    item = 'index';
                  }
                  return (
                    <Breadcrumb.Item key={index}>
                      {currentPath !== item && (
                        <a onClick={() => navigate(item)}>
                          {routerNameEmun[item]}
                        </a>
                      )}

                      {currentPath == item && (
                        <div> {routerNameEmun[item]}</div>
                      )}
                    </Breadcrumb.Item>
                  );
                }
              })}
            </Breadcrumb>
          </PageHeader>

          {/* 内容*/}
          <Content className="content-container">
            <div className="header-container">
              <div className="title-container">{pageTitle}</div>
            </div>

            {/* Outlet 重要 与router中的children配合，和vue中的viewRouter一样*/}
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </LayoutWrapper>
  );
};
export default JKLayout;

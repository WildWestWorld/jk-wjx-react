import MainLayout from '@/views/layout/MainLayout';
import ManageLayout from '@/views/layout/ManageLayout';
import QuestionLayout from '@/views/layout/QuestionLayout';
import { Children, lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

// 懒加载
const JKLogin = lazy(() => import('@/views/login/Login'));
const JKRegister = lazy(() => import('@/views/register/Register'));

const JKLayout = lazy(() => import('@/views/layout/Layout'));
const JKIndex = lazy(() => import('@/views/layoutChildren/index/Index'));

// 错误页面
const JKError404 = lazy(() => import('@/views/error/Error404'));

// 列表管理
const JKManagerList = lazy(() => import('@/views/manage/list/ManageList'));
const JKManagerStar = lazy(() => import('@/views/manage/star/ManageStar'));
const JKManagerTrash = lazy(() => import('@/views/manage/trash/ManageTrash'));

// 问卷管理
const JKQuestionEdit = lazy(() => import('@/views/question/edit/QuestionEdit'));
const JKQuestionStatistic = lazy(() =>
  import('@/views/question/statistic/QuestionStatistic')
);

//页面加载画面 //加了页面就不会闪屏（后期可以优化）
const lazyLoad = (pageComponent) => {
  return <Suspense fallback={<></>}>{pageComponent}</Suspense>;
};

const router = [
  //   {
  //     path: '/',
  //     //默认跳转
  //     element: <Navigate to="/layout/index" />,
  //   },

  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: lazyLoad(<JKIndex />) },
      {
        path: '/login',
        element: lazyLoad(<JKLogin />),
      },
      {
        path: '/register',
        element: lazyLoad(<JKRegister />),
      },

      {
        path: '*',
        element: lazyLoad(<JKError404 />),
      },
      //管理
      {
        path: '/manage',
        element: <ManageLayout />,
        children: [
          {
            path: '',
            element: <Navigate to="/manage/list" />,
          },
          {
            path: 'list',
            element: lazyLoad(<JKManagerList></JKManagerList>),
            meta: {
              title: '我的问卷',
            },
          },

          {
            path: 'star',
            element: lazyLoad(<JKManagerStar></JKManagerStar>),
            meta: {
              title: '星标问卷',
            },
          },

          {
            path: 'trash',
            element: lazyLoad(<JKManagerTrash></JKManagerTrash>),
            meta: {
              title: '回收站',
            },
          },
        ],
      },

      //   问卷
      {
        path: '/question',
        element: <QuestionLayout />,
        children: [
          {
            path: '',
            element: <Navigate to="/question/edit" />,
          },

          {
            path: 'edit',
            element: lazyLoad(<JKQuestionEdit></JKQuestionEdit>),
            meta: {
              title: '问卷编辑',
            },
          },

          {
            path: 'statistic',
            element: lazyLoad(<JKQuestionStatistic></JKQuestionStatistic>),
            meta: {
              title: '问卷统计',
            },
          },
        ],
      },

      {
        path: '/layout',
        element: lazyLoad(<JKLayout />),
        auth: true,
        // 子路径的头部就不能加斜杆
        children: [
          {
            path: 'login',
            element: lazyLoad(<JKLogin />),
            meta: {
              title: '登录',
            },
          },

          {
            index: true,
            path: 'index',
            element: lazyLoad(<JKIndex />),
            meta: {
              title: '系统首页',
            },
          },
        ],
      },
    ],
  },
];

export default router;

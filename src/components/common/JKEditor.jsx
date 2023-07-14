import '@wangeditor/editor/dist/css/style.css'; // 引入 css

import React, { useState, useEffect } from 'react';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import axios from 'axios';
import FormData from 'form-data';

const token = sessionStorage.getItem('token');

function JKEditor({ html, setHtml, source }) {
  // editor 实例
  // const [editor, setEditor] = useState<IDomEditor | null>(null)   // TS 语法
  const [editor, setEditor] = useState(null); // JS 语法

  // 编辑器内容
  //   const [html, setHtml] = useState('<p>hello</p>');

  // 现在放到外面让外部传入 富文本内容
  //   const [html, setHtml] = useState('');

  // 模拟 ajax 请求，异步设置 html
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setHtml('<p>hello world</p>');
  //     }, 1500);
  //   }, []);

  // 工具栏配置
  // const toolbarConfig: Partial<IToolbarConfig> = { }  // TS 语法
  
  const toolbarConfig = {}; // JS 语法
  



  // 编辑器配置（重要，用于配置图片上传接口）
  // const editorConfig: Partial<IEditorConfig> = {    // TS 语法
  const editorConfig = {
    // JS 语法
    placeholder: '请输入内容...',

    //配置上传图片
    MENU_CONF: {
      uploadImage: {
        // 单个文件的最大体积限制，默认为 2M
        maxFileSize: 4 * 1024 * 1024, // 4M

        // 最多可上传几个文件，默认为 100
        maxNumberOfFiles: 10,

        // 超时时间，默认为 10 秒
        timeout: 5 * 1000, // 5 秒

        // 用户自定义上传图片
        
        customUpload(file, insertFn) {
          const data = new FormData();

          data.append('file', file); // file 即选中的文件 主要就是这个传的参数---看接口要携带什么参数{ key :value}
          data.append('source', source);
          //自定义上传地址
          const config = {
            method: 'POST',
            url: `/api/admin/common/upload/image`, //上传图片地址
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: 'Bearer ' + token,
            }, //需要加的自己参考接口加
            data: data,
          };
          console.log(data);

          axios(config)
            .then((res) => {
              console.log('qz-用户自定义上传图片', res);
              // const url = "https:// /" + res.data.data.path; //拼接成可浏览的图片地址
              
              //插入图片到富文本
              insertFn(res.data.data.url); //插入图片，看返回的数据是什么
            })
            .catch((error) => {
              console.log(error);
            });
        },

        // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
        allowedFileTypes: ['image/*'],

        // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
        meta: {
          token: 'xxx',
          otherKey: 'yyy',
        },

        // 将 meta 拼接到 url 参数中，默认 false
        metaWithUrl: false,

        // 自定义增加 http  header
        headers: {
          Accept: 'text/x-json',
          otherKey: 'xxx',
        },

        // 跨域是否传递 cookie ，默认为 false
        withCredentials: true,
      },
    },
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          style={{ height: '500px', overflowY: 'hidden' }}
        />
      </div>
      {/* <div style={{ marginTop: '15px' }}>{html}</div> */}
    </>
  );
}

export default JKEditor;

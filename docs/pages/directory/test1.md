## DOCTYPE 的作用是什么?
<!DOCTYPE> 声明一般位于文档的第一行,作用就是告诉浏览器以什么模式来解析文档
## HTML5和HTML4的区别？
#### 标准方面
* HTML5不需要对DTD进行引用,但是需要DOCTYPE 来规范浏览器的行为
* HTML4需要对DTD进行引用,才能告知浏览器所使用的文档类型
    *  DTD (Document Type Definition 文档类型定义) 是一组机器可读的规则, 在解析网页时，浏览器将使用这些规则检查页面的有效性并且采取相应的措施
#### 标签方面
* HTML5新增了一些语义化标签
    *  header：定义文档的页眉 头部
    *  nav：定义导航链接的部分
    *  footer：定义文档或节的页脚 底部
    *  article：定义文章。
    *  section：定义文档中的节（section、区段）
    *  aside：定义其所处内容之外的内容 侧边
    *  datalist   标签定义选项列表。请与 input 元素配合使用该元素
#### 属性方面
* HTML5新属性

|  属性   | 用法  | 含义 |
|  ----  | ----  | ----  |
| autofocus  | `<input type="text" autofocus>`| 规定当页面加载时 input 元素应该自动获得焦点 |
| autocomplete  | `<input type="text"  autocomplete="off">` | 规定表单是否应该启用自动完成功能 有2个值，一个是on 一个是off on 代表记录已经输入的值 <br/>1.autocomplete 首先需要提交按钮 <br/>2.这个表单您必须给他名字 |
| required  | ` <input type="text" required>` | 必填项 内容不能为空 |
#### 存储方面
* 新增WebStorage, 包括localStorage和sessionStorage
    *  localStorage(本地存储): 生命周期是永久的,除非手动清除,否则会一直存在
    *  sessionStorage(会话存储): 生命周期为当前窗口或标签页,一旦窗口关闭或标签页关闭,相应存储的数据也会被清空
 * localStorage和sessionStorage用法
        
        1.存储数据
        
            localStorage.setItem('key', 'value')
            sessionStorage.setItem('key', 'value')
        
        2.获取数据
        
            localStorage.getItem('key')
            sessionStorage.getItem('key')
        
        3.删除数据
        
            localStorage.removeItem('key')
            sessionStorage.removeItem('key')
        
        4.清除数据(所有本地存储的数据)
        
            localStorage.clear();
            sessionStorage.clear();

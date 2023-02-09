# SRM代码风格

## 1、命名

- 函数命名

  能够表明这个函数的用处，使用驼峰式命名，禁止使用拼音命名。

  ```javascript
  // bad 
  handleSave() {}
  
  // good
  handleSaveCompany() {}
  ```

  

- 变量命名

  能够表明这个变量的用处，使用驼峰式命名，禁止使用拼音命名。

  ```javascript
  // bad 
  visible: false
  
  // good
  modalVisible: false
  ```

  

- 文件命名

  能够表明这个文件的用处，使用驼峰式命名，禁止使用拼音命名，禁止含有特殊符号。

  组件类型文件，除页面入口文件index.js开头为小写，其余组件类型文件开头均为大写。

  model、service、util、DS类型文件均以小写开头。

  使用Choerodon UI开发时，一个页面服务使用一个js文件存放该页面服务的所有DataSet。 文件命名格式统一为页面服务名+DS。

  约定：页面入口文件index.js、详情页Detail.js、创建页Create.js等。

  ```javascript
  // bad 
  入口文件: List.js
  
  // good
  入口文件: index.js
  ```

  

- 文件夹命名

  能够表明这个文件夹的用处，使用驼峰式命名，长度适中，禁止使用拼音命名，禁止含有特殊符号。

  组件类型文件夹开头均为大写，功能类型文件夹开头均为小写（components、utils、models、store）。

  ```javascript
  // bad 
  组件文件夹: header
  功能文件夹: Components
  
  // good
  组件文件夹: Header
  功能文件夹: components
  ```

  

- 路由命名

  路由采用三段式结构。

  第一段：为模块名称，/ssrc、/sslm、/spuc、/spcm等。

  第二段：为页面名称英文翻译，均采用小写单词，单词与单词之间使用“-”连接。

  第三段：为页面的功能名称，如：list、detail、create等。

  约定：第二段，由两至三个单词拼接而成；第三段，由一至两个单词拼接而成。

  ```javascript
  // bad 
  路由（不带参）: /ssrc/test-test-Test-Test/test-Test-List
  路由（带参）: /ssrc/test-test-Test-Test/test-Test-Detail/:id
  
  // good
  路由（不带参）: /ssrc/inquiry-hall/list
  路由（带参）: /ssrc/inquiry-hall/detail/:id
  ```

  

- 组件属性命名

  组件属性如果是函数，使用on前缀。

  ```javascript
  // bad
  <TableList search={this.handleSearchCalendar} />
  
  // good
  <TableList onSearch={this.handleSearchCalendar} />
  ```

  

## 2、注释

- 函数注释

  @params 说明参数 

  @returns 返回值

  ```javascript
/**
  * handSave – 保存
  * @params {object} params – 单据头信息
  * @return {object} 接口返回信息
  */
  const handleSave(params) => {
      // ... js code
      return data;
  };
  ```
  
  
  
- js、css/less文件说明注释

  @description 说明文件名称及用途

  @date 创建日期

  @author 作者

  @version 版本号

  @copyright 公司信息

  ```javascript
  // test.js
  
  /**
   * test - 测试代码
   * @date: 2022-03-15
   * @author: yourname <yourname@hand-china.com>
   * @version: 0.0.1
   * @copyright Copyright (c) 2022, Hand
   */
  
  // ... js code
  ```

  

- 数据模型model

  注明namespace用途

  注明state内各状态变量用途

  effects异步方法详细注明方法逻辑及用途

  reducers状态处理方法需要详细注明方法逻辑及用途

  ```javascript
  export default {
  	namespace: 'test', // 测试model 
  	state: {
  		code: {}, // 编码
  		list: [], // 数据集合
  	},
  	effects: {
  		// 查询list数据
  		*query({ payload }, { put, call }) {
  			code...
  		},
  	},
  	reducers: {
  		// 合并state状态数据,生成新的state 
  		updateStateReducer(state, { payload }) {
  			return {
  				...state,
  				...payload,
  			};
  		},
  	},
  };
  
  ```

  

- 接口service

  @async □一般情况下使用async函数需要注明

  @params 说明参数

  @returns □返回值

  ```javascript
  /**
   *	查询 说明接口逻辑用途
   *	@async
   *	@function queryMembers 接口函数名称
   *	@param {object} params - 接口参数
   *	@param {!number} [params.page = 0] - 数据页码
   *	@param {!number} [params.size = 10] - 分页大小
   *	@returns {object} fetch Promise 默认返回值
   */
  export async function query(params) { 
  	return request('/api', { query: params });
  }
  ```
  

  
- 公共组件

  @reactProps react组件 props属性,必填 

  @example 说明组件使用方法 

  @extends 说明继承组件 

  @return 默认返回React.element,必填
  
  ```javascript
  /**
  * MyComponent 自定义React组件
  * @extends {PureComponent} - React.PureComponent
  * @reactProps {?string} [className=my-component] - 组件react className属性
  * @return {Object} React.element
  * @example
  * import React from 'react';
  * import { FormItem } from 'components/MyComponent';
  * const Test = (props) => {
  * 	return (
  * 		<MyComponent />
  * 	);
  ```
* };
  */
  class MyComponent extends React.PureComponent {
  	render ( ){...}
  }
  ```
  
  
  ```

## 3、引用路径

```javascript
// bad
import autobind from '../../../utils/autobind'

// good
import autobind from '@/utils/autobind
```



## 4、国际化

界面多语言采用统一的命名规范，开发者在开发具体功能的时候要按照语言 code 定义描述，不能直接写死描述。

- 调用多语言方法

  首先引入intl类

  ```javascript
  import intl from "utils/intl";
  ```

  调用多语言方法

  ```jsx
  <FormItem   label={intl.get("hpfm.event.model.event.code").d("事件编码")}>
  ```

  

  说明: 

  ```javascript
  intl.get(code).d(defaultMessage)
  ```

  code为多语言 code

  defaultMessage为默认描述，当多语言找不到的情况下返回默认值

  

- 多语言CODE命名规范

  code分为两段：

  ​	第一段：例如hfpm.event， 其中 hpfm 是服务名, event 是功能名

  ​	第二段：第二段分为两种类型：

  

  ​		模型：

  ​			model.[模型名].[字段名]

  ​			例如： model.event.code 是 event 模型的 code 字段

  

  ​		视图：

  ​			view.[类型].[具体类型].[具体含义]

  ​			例如：

  ​				验证类型：view.validation.require

  ​				提示类型：view.message.success

  ​				操作类型：view.option.submitOrder

  

  ::: warning 注意：

  ​	多语言code长度不能超过60位字符长度，不允许拼音命名。

  ​	同一服务下，相同code需含义保持一致。

  ​	容中如果包含:以及以{开头，比如用引号包裹下
  :::

  ```yaml
  abc: "测试:冒号"
  cde: "{name} 姓名"
  ```

  

- 常用多语言

  平台通用的编码统一在 hzero.common 下，例如 新建，保存等按钮可以在“平台多语言” 中按照模块 hzero.common 查询

  必输字段的提示信息：

  ```yaml
  rules: [{ required: true, message: intl.get('hzero.common.validation.notNull') }],
  ```

  长度校验：

  ```javascript
  rules: [
  	{
  		max: 20,
  		message: intl.get('hzero.common.validation.max', { max: 20 }),
  	},
  ]
  ```

  

## 5、依赖引入

应将引入文件归为三类：

​	第一类：React、Loadsh、Dav等第三方依赖。

​	第二类：Header、numderRender等H0框架提供的工具函数或通用组件。

​	第三类：自开发的组件，less文件，util工具函数等。

```javascript
// bad
import Detail from './Detail';
import { Header, Content } from 'components/Page'; 
import { connect } from 'dva';

// good
import { connect } from 'dva';

import { Header, Content } from 'components/Page'; 

import Detail from './Detail';
```



## 6、view、model、service 相互分离

view、model、service应各司其职，需避免相互之间的混用。

```javascript
// bad
export const service = {
	async queryBanks(params = {}) { 
		const {
			page = { current: 1, pageSize: 10 },
			sort = { name: 'bankCode', order: 'asc' }, body,
		} = params; 
		return request(URL);
	},
};

// good
// modal 
import { createNodeGroup } from '../../services/hsgp/nodeGroupService';

effects: {
	*createNodeGroup({ payload }, { call }) {
		const res = yield call(createNodeGroup, payload); 
        return getResponse(res);
	},
}

// service
export async function createNodeGroup(params) {
	return request(URL, { 
        method: 'POST',
		body: params,
	});
}
```



## 7、使用getResponse处理请求

```javascript
// bad
dispatch({
	type: 'concPermission/deleteHeader',
}).then(res => {
	if (res && res.failed) {
		...
	}
});

// good
dispatch({
	type: 'concPermission/deleteHeader',
}).then(res => { 
    if (res) {
		...
	}
});

// modal
*deleteHeader({ interfaceServerId }, { call }) {
	const res = yield call(deleteHeader, interfaceServerId); 
    return getResponse(res);
}
```



## 8、公共render 函数使用

常用公共render函数：

```yaml
yesOrNoRender:	返回 是/否
dateRender:		日期(date)的 render
dateTimeRender: 时间(dateTime)的 render
timeRender:		时间(time)的 render
numberRender:	格式化数值
operatorRender:	渲染表格操作列
enableRender: 	返回 启用/禁用
asyncRender:    返回 同步/异步
statusRender:   状态渲染
priorityRender: 优先级渲染(低中高)
```



```javascript
// bad
{
	title: '状态',
	dataIndex: 'enabledFlag',
	render: val => { return ( <span>{enableRender(val)}</span> ) },
}

// good
import { enableRender, yesOrNoRender } from 'utils/renderer';

{
	title: '状态',
	dataIndex: 'enabledFlag', render: enableRender,
},
```



## 9、日期时间

整个工程关于日期时间严格按照统一的规范定义。

前后端传递日期格式统一为：

- 日期: YYYY-MM-DD
- 日期时间: YYYY-MM-DD HH:mm:ss
- 时间: HH:mm:ss

注意：不要自己直接写死格式，采用统一的常量

```javascript
// 引入对应的 方法和常量
import { getDateFormat } from 'utils/utils';
import { DEFAULT_DATE_FORMAT } from 'utils/constants';
import { dateRender } from 'utils/renderer';

// 在表单中使用
// 提交方法
handleSubmit(e){
    // ...
    const formValues = form.getFieldsValue();
    formValues.startDate =formValues.startDate && formValues.startDate.format(DEFAULT_DATE_FORMAT);
    // ...
}

// FormItem
const dateFormat = getDateFormat();

form.getFieldDecorator('startDate', {
	initialValue:editRecord.startDate ? moment(editRecord.startDate,DEFAULT_DATE_FORMAT) : null,
})(
    <DatePicker format={dateFormat} />
)

// Table
const columns = [
    {
        dataIndex: 'startDate',
        name: intl.get('hmdm.model.bank.startDate').d('生效时间'),
        render: dateRender,
    },
];
```



## 10、缓存组件

当列表页跳转至详情页时，应当缓存列表页的查询参数，分页参数。

用户返回列表页时，应展示进入详情页前查询到的数据。



Hzero:

在查询表单Form中引入cacheComponent装饰器，参数为当前列表页的路由。

```javascript
import cacheComponent from 'components/CacheComponent';

@cacheComponent({ cacheKey: '/sscr/inquire-hall/list' })
```



C7N：

在页面列表页文件中，使用withProps装饰器。

```javascript
import withProps from 'utils/withProps';

@withProps(
  () => {
    return {
      tableDataSet: new DataSet(tableDs()),
    };
  },
  {
	cacheState: true, // 是否缓存数据状态
	// wait: 50, // 关闭页面之后多久会自动清空缓存 毫秒值
	// cacheKey: ‘key’, // 缓存清除的 key ，用户关联子父页面，当父页面缓存清空时 子页面的缓存也自动清空。
	// cleanWhenClose: true, // 关闭 tabs 时 是否自动清空缓存
	// keepOriginDataSet: true, // 保持原来的 DataSet 对象
  }
) 
```



## 11、组件拆分原则

- 页面文件

  当页面代码超过1000行时，应对代码进行合理拆分，方便后续维护与解读。 

- 通用组件

  当页面组件超过500时，应对代码进行合理拆分，方便后续维护与解读。

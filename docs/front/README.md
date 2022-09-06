# **SRM集中交付 - 前端开发规范**

## SRM代码风格

#### 1、命名

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

  

#### 2、注释

- js、css/less文件说明注释

  description 说明文件名称及用途

  @date 创建日期@author 作者@version 版本号

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

  

#### 3、引用路径

```javascript
// bad
import autobind from '../../../utils/autobind'

// good
import autobind from '@/utils/autobind
```



#### 4、国际化

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

  

  注意：

  ​	多语言code长度不能超过60位字符长度，不允许拼音命名。

  ​	同一服务下，相同code需含义保持一致。

  ​	容中如果包含:以及以{开头，比如用引号包裹下

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

  

#### 5、依赖引入

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



#### 6、view、model、service 相互分离

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



#### 7、使用getResponse处理请求

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



#### 8、公共render 函数使用

常用公共render函数：

```yaml
yesOrNoRender:	返回 是/否；
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
{
	title: '状态',
	dataIndex: 'enabledFlag', render: enableRender,
},
```



#### 9、缓存组件

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



## SRM UI规范

## 前端自测、提交、分支管理规范

#### 1、自测

- 本地环境

  1. 本地开发完成在推到dev前，要保证功能的完整性，不要开发了一半，页面都报错，就合并到op环境。

  2. 不允许将console，debugger，本地联调相关注释的代码提交至仓库。

  3. 在推代码需要通过eslint检测工具，请不要强行通过检测。也不要一通不过lint就使用lint忽略。

  4. 本地要测试相关lov是否可以显示数据，下拉列表是否拥有数据等。

  5. 所有与后端发生交互的操作，loading是否正常。

  6. 不需要使用authorized参数的页面路由配置，删除authorized参数。

     

- op环境

  op环境需要开发人员确认如下几个点，在开发环境自测结束后，才可以通知测试人员进行测试，前端务必把控质量，可以减少bug数量。

  1. 菜单数据是否已经维护。

  2. 页面是否可以打开，不报403。

  3. 请求接口是否同步更新到dev，需要确定接口可以正常调用。

  4. 页面逻辑要自测，弹出框、按钮、导出、引入、显示隐藏等页面效果。

  5. 页面table，Form表单，按钮等loading状态是否正常。

  6. 数据逻辑要进行自测、增删改查以及其他业务逻辑要基本自测。

  7. 要测试相关lov是否可以显示数据，下拉列表是否拥有数据等。

  8. 二开模块，需要登录对应账号，然后查看self接口中tenantNum是否是二开的名称。

  9. 二开模块，需要登录对应账号，查看二开功能是否可以正常访问以及使用。

     

#### 2、提交

- 提交信息

  1. feat：新增或者修改

  2. fix： bug修复

  3. build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交

  4. ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交

  5. docs：文档更新

  6. perf：性能优化

  7. refactor：重构代码(既没有新增功能，也没有修复 bug)

  8. style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)

  9. test：新增测试用例或是更新现有测试

  10. revert：回滚某个更早之前的提交

  11. chore：不属于以上类型的其他类型

      

- 提交格式

  feat + : + 空格 + 功能名称。例如 feat: 增加子账户权限页面。

  fix + : + 空格 + 修复内容。例如 fix: 修复子账户管理页面调用接口接口参数传递错误的bug。

  

#### 3、分支管理

-    分支创建

  feature-opd-任务编号:

  请以 feature + opd + 任务编号 来创建分支，每次开发单个功能后，进行分支登记记录，可以在开发功能的猪齿鱼的每日工作记录中进行登记，或者在本地进行记录。一个功能一个分支，当前功能提测发正式后，删除功能分支。

  

  hotfix-opd-任务编号:

  bug修复分支，请以 hotfix + opd + 任务编号 来创建分支，同样修改完bug提测测试通过后，删除此分支。


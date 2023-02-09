# 大数据Lov

## 组件说明

大数据LOV、树形LOV：

支持树形、平铺、单选、多选、C7n、Hzero



## 参数说明

必传参数：

| 属性名称  | 说明                                        | 类型   | 必输 |
| --------- | ------------------------------------------- | ------ | ---- |
| code      | lov的编码                                   | string | 是   |
| name      | 字段名，仅限在C7n中使用                     | string | 是   |
| dataSet   | 仅限在C7n中使用，与record其中一项必传       | object | 是   |
| record    | 仅限在C7n中使用，与dataSet其中一项必传      | object | 是   |
| recordId  | 仅限在C7n中使用，表格数据行id，在表格中使用 | string | 是   |
| textValue | 中文取值字段                                | string | 是   |



可选参数：

| 属性名称        | 说明                                                         | 类型          | 默认值   | 可选值         | 必输 |
| --------------- | ------------------------------------------------------------ | ------------- | -------- | -------------- | ---- |
| originTenantId  | 租户编码                                                     | string        | -        | -              | 否   |
| lovOptions      | Lov值字段、显示字段名配置项（值字段valueField、显示字段displayField） | object        | -        | -              | 否   |
| queryParams     | lov请求参数                                                  | object        | -        | -              | 否   |
| queryInputProps | lov查询栏Input配置参数                                       | object        | -        | -              | 否   |
| pagination      | 是否分页，默认false，展示为不分页的虚拟滚动列表              | Boolean       | false    | -              | 否   |
| type            | Lov单选或多选                                                | string        | multiple | radio/multiple | 否   |
| initialValue    | 初始值                                                       | string/object | -        | -              | 否   |



在函数式组件中使用的参数：

| 属性名称 | 说明                           | 类型     | 必输 |
| -------- | ------------------------------ | -------- | ---- |
| onRef    | 传lov组件的this给父组件        | Function | 否   |
| onClick  | 点开lov，lov配置请求成功后执行 | Function | 否   |
| onChange | 确认按钮的回调                 | Function | 否   |



## 使用示例

```js
// 使用示例
import ProLov from '@/routes/components/ProLov';

// 在C7n中使用
<Table
  columns={this.columns()}
  buttons={this.buttons()}
  dataSet={this.tableDs}
  queryFields={{
     categoryLov: (
       <ProLov
          code="SSRC.TREE_ITEM_CATEGORY"
          name='categoryLov'
          type="radio"
          textValue="categoryName"
       />
     )
  }}
/>

// 在H0中使用
{getFieldDecorator('hrxhCategoryName')(
  <ProLov
    code="SCEC.TREE_ITEM_CATEGORY_NAME"
    lovOptions={{
      displayField: 'categoryName',
      valueField: 'categoryId',
    }}
    textValue='categoryName'
    initialValue={categoryName}
    type="radio"
    onChange={(lovRecord) => this.categoryOnchange(lovRecord)}
    required={true}
  />
)}
```


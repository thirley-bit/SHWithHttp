# wx_components

#### 介绍
微信自定义组件库 现已有搜索框组件 以及左滑删除组件

##### 使用教程

components中有组件本体 复制到本地components文件中即可 如果没有那么就创建一个 

在需要使用的page页中的json文件夹中引用命名

```json
{
  "usingComponents": {
    "search": "/components/search/search"
  }
}
```

而后在wxml中需要使用的位置调用即可

```html
<search bind:change="change" bind:searchList="searchList" list="{{list}}" name="routingName" placeholder="请输入地址查找"></search>
```

#### search组件引入方法

search组件需要带images文件一同放入组件文件内 使用方法同上

#### staffBox（左滑删除的卡片组件）引入方法

直接复制到本地components文件夹中

而后如此引入

```json
{
  "usingComponents": {
    "search": "/components/search/search"
  }
}
```

使用方法为 list为你要遍历的数组 deleteItem当组件点击删除的时候会调用这个方法并返回点击删除的详细信息

```html
<staffBox list="{{list}}" bind:delete="deleteItem"></staffBox>
```


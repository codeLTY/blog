#### div水平居中
* 已知宽高 块级元素  添加 margin: 0 auto; 即可水平居中
* 已知宽高 (不是块级元素) 
  * 使用绝对定位 top,right,bottom,left都为0,margin: auto; 即可水平居中
  * 也可使用display:block;margin: 0 auto; 即可水平居中
#### div水平垂直居中
* 使用position 已知宽高
```css
.center {
    position: fixed | absolute; /* 固定定位或绝对定位均可 */
    width:200px;
    height:200px;
    top: 50%;
    left: 50%;
    margin-top:-100px;      /* 使用margin*/
    margin-left:-100px;
    background-color: pink; 
}
```
* 使用position + transform  未知宽高
```css
.center {
    position: fixed | absolute; /* 固定定位或绝对定位均可 */
    padding:200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: pink;
}
```
* 使用flex布局(父子级关系)
```css
.center {
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    width: 400px;
    height: 400px;
    background: lightblue;
}
.center div{
    width: 200px;
    height: 200px;
    background-color: pink;
}
```


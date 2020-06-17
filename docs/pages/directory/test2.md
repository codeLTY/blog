#### 额外标签法
* 是W3C推荐的做法是通过在浮动元素末尾添加一个空的标签例如 `<div style=”clear:both”></div>`，或则其他标签br等亦可。
    * 优点:通俗易懂，书写方便 
    * 缺点:添加许多无意义的标签，结构化较差。
#### 父级添加overflow属性方法
* 可以通过触发BFC的方式，可以实现清除浮动效果。可以给父级添加： overflow为 hidden|auto|scroll 都可以实现。
    * 优点：  代码简洁
    * 缺点：  内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素。
 * BFC介绍(块级格式化上下文，是用于布局块级盒子的一块渲染区域)
    * BFC触发方式
        * 根元素(html)
        * 浮动元素：float值为left、right
        * 绝对定位元素（元素的 position 为 absolute 或 fixed）
        * 行内块元素（元素的 display 为 inline-block)
        * 弹性元素（display为 flex 或 inline-flex元素的直接子元素）
        * overflow值不为 visible，为 auto、scroll、hidden
#### 使用after伪元素清除浮动
* 优点： 符合闭合浮动思想  结构语义化正确
* 缺点： 由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。
```css
.clearfix:after {  
    content: "";
    display: block;
    height: 0; 
    clear: both;
    visibility: hidden;  
}  
 
.clearfix {
    *zoom: 1; /* IE6、7 专有 */
}   
```
#### 使用before和after双伪元素清除浮动
* 优点：  代码更简洁
* 缺点：  由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。
```css
.clearfix:before,.clearfix:after { 
  content:"";
  display:table;  /* 这句话可以出发BFC BFC可以清除浮动 */
}

.clearfix:after {
 clear:both;
}

.clearfix {
  *zoom:1;
}
```

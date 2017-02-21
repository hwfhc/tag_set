##Group
所有待处理标签  

####属性:   
+ tags[]:  
标签集合中所有的标签  

####方法:  
+ constructor(tags[]):传入数组，初始化标签集合
  + 参数：
    + tags[]：包含所有初始拥有标签的数组
  + 返回值：新的TagGroup


+ GetTags():将所有标签以一个数组形式输出  
  + 参数：null
  + 返回值：包含所有标签的数组


+ AddTag(tag):增添一个新的标签  
  + 参数：
    + tag：要添加的标签
  + 返回值：null


+ DeleteTag(tag):删除标签集合中的参数标签
  + 参数：
    + tag：要删除的标签
  + 返回值：null  


+ isIncludeTagGroup(tag_group):判断标签集合是否完全包含另一个标签集合
  + 参数：另一个TagGroup
  + 返回值：是否包含完全包含另一标签集合的布尔值

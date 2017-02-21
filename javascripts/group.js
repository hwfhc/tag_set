function Group(ELEMENTS){
    /*
     *效果说明:
     *存储所有选择的标签
     *
     *参数说明：
     *初始化的标签数组
     */
    this.elements = ELEMENTS.concat();
}

Group.prototype.OutPut = function(){
    /*
     *效果说明：
     *将所有标签以数组形式输出
     */
    return this.elements.concat();
}

Group.prototype.Add = function(element){
    /*
     *效果说明：
     *添加新的元素
     */
    this.elements.push(element);
}

Group.prototype.Delete = function(element){
    /*
     *效果说明:
     *删除元素
     */
    this.elements = this.elements.filter(function(item){
        return !(item === element);
    });
}

Group.prototype.isIncludeTagGroup = function(GROUP){
    /*
     *效果说明:
     *判断标签集合是否完全包含另一个标签集合
     *参数：
     *另一个TagGroup
     *返回值：
     *true:本集合完全包含另一集合
     *false:~~~
     */

    var group = this.elements;

    return GROUP.elements.every(function(GROUP_item){
        return /*this.elements*/group.some(function(item){
            return item === GROUP_item;
        });
    });
}
Group.prototype.isInclude = function(element){
    /*
     *效果说明:
     *判断元素是否被集合包含
     */
    return this.elements.some(function(item){
        return item === element;
    });
}

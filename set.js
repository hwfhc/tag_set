exports.Create = function(ELEMENTS){
    var item = new Set(ELEMENTS);
    return item;
}


function Set(ELEMENTS){
    /*
     *效果说明:
     *初始化集合
     */
    this.value = ELEMENTS.concat();
}

Set.prototype.OutPut = function(){
    /*
     *效果说明：
     *将所有标签以数组形式输出
     */
    return this.value.concat();
}

Set.prototype.Add = function(element){
    /*
     *效果说明：
     *添加新的元素
     */
    this.value.push(element);
}

Set.prototype.Delete = function(element){
    /*
     *效果说明:
     *删除元素
     */
    this.value = this.value.filter(function(item){
        return !(item === element);
    });
}

Set.prototype.isContain = function(SET){
    /*
     *效果说明:
     *判断集合是否包含另一个集合
     */

    var set = this.value;

    return SET.value.every(function(SET_item){
        return set.some(function(item){
            return item === SET_item;
        });
    });
}
Set.prototype.isOwn = function(element){
    /*
     *效果说明:
     *判断元素是否属于集合
     */
    return this.value.some(function(item){
        return item === element;
    });
}

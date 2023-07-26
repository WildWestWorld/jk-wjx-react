import { nanoid } from "nanoid";

// 删除或隐藏 时 设置对应的selectId
export function getNextSelectedId (fe_id, componentList) {
    // 查询可见的元素
    const visibleComponentList = componentList.filter(item => !item.isHidden)


    const index = visibleComponentList.findIndex((item) => {
        return item.fe_id === fe_id;
    });

    if (index < 0) {
        return '';
    }
    //   重新计算selectedId
    let newSelectedId = '';
    const length = componentList.length;
    // 如果List里面就一个元素
    if (length <= 1) {
        // 组件长度就一个删除了就没有组件了
        newSelectedId = '';
    } else {
        // 组件长度>1
        // 如果当前选中的是最后一个元素
        if (index + 1 === length) {
            // 要删除最后一个，就要选中上一个
            newSelectedId = componentList[index - 1].fe_id;
        } else {
            //要删除的不是最后一个，就选下一个
            newSelectedId = componentList[index + 1].fe_id;
        }
    }

    return newSelectedId;
}
// 根据当前选择的组件插入 元素

export function insertNewComponent (value, newComponent) {
    // 需要修改对应的fe_id 不然就会有重复id出现 
    newComponent.fe_id = nanoid();
    const { selectId, componentList } = value
    let componentListCopy = JSON.parse(JSON.stringify(componentList))
    let selectIdCopy = JSON.parse(JSON.stringify(selectId))
    const index = componentListCopy.findIndex(item => {
        return item.fe_id == selectIdCopy;
    })
    console.log(index)
    // 如果未选中任何组件 放到最下面
    if (index < 0) {
        value.componentList.push(newComponent)
    } else {
        // 如果 选择了组件就放到他后面
        value.componentList.splice(index + 1, 0, newComponent)
    }

    value.selectId = newComponent.fe_id;

}

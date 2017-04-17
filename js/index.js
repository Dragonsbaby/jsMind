/**
 * Created by DragonBaby on 2017/4/13.
 */
(function(){
    var mind={
        "meta":{
            "name":"example",
            "author":"Dragonbaby",
            "version":"0.1"
        },
        "format":"node_tree",
        "data":{
            "id":"root","topic":"root",
            "children":[{
                "id":"root/第一个","topic":"1_第一个",
                "children":[{
                    "id":"root/第一个/第一个","topic":"1_第一个_第一个"
                },{
                    "id":"root/第一个/第二个","topic":"1_第一个_第二个"
                }]
            },{
                "id":"root/第二个","topic":"1_第二个",
                "children":[]
            },{
                "id":"root/第三个","topic":"1_第三个",
                "children":[]
            },{
                "id":"root/第四个","topic":"1_第四个",
                "children":[{
                    "id":"root/第四个/第一个","topic":"1_第四个_第一个"
                }]
            }]
        }
    };
    var options = {
        container:'jsmind_container',
        editable:true,
        theme:'primary',
        mode:'side',
        support_html :true,
        shortcut:{
            enable:true,        // 是否启用快捷键
            handles:{},         // 命名的快捷键事件处理器
            mapping:{           // 快捷键映射
                addchild   : 45,    // <Insert>
                addbrother : 13,    // <Enter>
                editnode   : 113,   // <F2>
                delnode    : 46,    // <Delete>
                toggle     : 32,    // <Space>
                left       : 37,    // <Left>
                up         : 38,    // <Up>
                right      : 39,    // <Right>
                down       : 40,    // <Down>
            }
        }
    };

    var jm = new jsMind(options);
    jm.show(mind);

    // jm.set_theme(theme);  //设置主题
    // jm.disable_edit()
    document.getElementById("getData").onclick = function () {
        console.log(jm.get_data("node_tree"));
    };

})();


var jsMd = {
    success : function () {
        
    }
}

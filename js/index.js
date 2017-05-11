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
                "id":"root/第一个","topic":"1_第一个","attr":"class='doc2'",
                "children":[{
                    "id":"root/第一个/第一个","topic":"1_第一个_第一个"
                },{
                    "id":"root/第一个/第二个","topic":"1_第一个_第二个","attr":"class='doc2'"
                }]
            },{
                "id":"root/第二个","topic":"1_第二个","attr":"class='doc2'",
                "children":[]
            },{
                "id":"root/第三个","topic":"1_第三个","attr":"class='doc2'",
                "children":[]
            },{
                "id":"root/第四个","topic":"1_第四个","attr":"class='doc2'",
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
        view:{
            hmargin:10,
            vmargin:10
        },
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
                down       : 40    // <Down>
            }
        }
    };
    setAttrFormJson(mind.data);
    console.log(mind.data);
    var jm = new jsMind(options);
    jm.show(mind);

    // jm.set_theme(theme);  //设置主题
    // jm.disable_edit()
    document.getElementById("getData").onclick = function () {
        console.log(jm.get_data("node_tree"));
        jm.selected_node("ge")
    };

    document.getElementById("addNode").onclick = function(){
        var selected_node = jm.get_selected_node();
        if(!selected_node) {alert("请选中文件");}
        var nodeid = jsMind.util.uuid.newid();
        var topic = '* Node_'+nodeid.substr(0,5)+' *';
        var node = jm.add_node(selected_node, nodeid, topic);
    };

    function setAttrFormJson(data) {
        if(!data) {return;}
        if(isExist(data.attr)){
            var fileName = data.topic;
            var str = ''+
                    '<fnode title="'+fileName+'" '+data.attr+'>'+fileName+'</fnode>';
            data.topic = str;
        }
        if('children' in data) {
            var children = data.children;
            for (var i = 0; i < children.length; i++) {
                setAttrFormJson(children[i]);
            }
        }
    }
    function isExist(param) {
        if(param == null||param == ''||typeof(param) == 'undefined'){
            return false;
        }
        return true;
    }

})();



var jsMd = {
    success : function () {
        
    }
};



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
        editable:false,
        theme:'primary'
    };

    var jm = new jsMind.show(options,mind);

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

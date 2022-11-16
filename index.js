window.onload = function(){

    var tempurature = document.querySelector(".tempurature");
    var shidu = document.querySelector(".shidu");
    var show = document.querySelector(".show");
    setInterval(()=>{
        //第一步，创建XMLHttpRequest对象
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET","data.json",true);
        xmlHttp.send();
    
        xmlHttp.onreadystatechange=function(){
            //判断readyState就绪状态是否为4，判断status响应状态码是否为200
            if (xmlHttp.readyState==4 && xmlHttp.status==200)
            {
            //获取服务器的响应结果
                var responseText = xmlHttp.responseText;
                var json = JSON.parse(responseText);
                // tempurature.innerHTML = json["tempurature"];
                // shidu.innerHTML = json["shidu"];
                var temp1 = '<div><span>';
                var temp2 = '：</span><span class="tempurature">';
                var temp3 = '</span></div>';
                
                s = '<table border="0"><tr><td>Sensor</td><td>Value</td></tr>';
                
                for(var key in json){
                    s += "<tr>";
                    s += "<td>"+key+"</td>";
                    s += "<td>"+json[key]+"</td>";
                    // s += temp1 + key + temp2 + json[key]+temp3;
                    s += "</tr>";
                }

                s += '</table>';
                show.innerHTML = s;
            }
        }

    },1000);
    
}





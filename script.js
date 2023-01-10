var url=window.location.search;
    var value=new URLSearchParams(url);
    var username=value.get('user');
    var user=localStorage.getItem("username");
    if(username==user){
        function getValue(){
            var number1=document.getElementById('number1').value;
            var number2=document.getElementById('number2').value;
            var opration=document.getElementById('opration').value;
            var number1=number1.toLowerCase();
            var number2=number2.toLowerCase();
            var opration=opration.toLowerCase();
            var number1=number1.trim();
            var number2=number2.trim();
            var opration=opration.trim();
           
            if(number1=="" || number2=="" || opration ==""){
                document.getElementById('error').innerText="Empty field is not allowed!";
            }else{
                if(number1=="zero"){
                function number1(func){
                    return func ? func(0):0;
                };
            }else if(number1=="one"){
                function number1(func){
                    return func ? func(1):1;
                };
            }else if(number1=="two"){
                function number1(func){
                    return func ? func(2):2;
                };
            }else if(number1=="three"){
                function number1(func){
                    return func ? func(3):3;
                };
            }else if(number1=="four"){
                function number1(func){
                    return func ? func(4):4;
                };
            }else if(number1=="five"){
                function number1(func){
                    return func ? func(5):5;
                };
            }else if(number1=="six"){
                function number1(func){
                    return func ? func(6):6;
                };
            }else if(number1=="seven"){
                function number1(func){
                    return func ? func(7):7;
                };
            }else if(number1=="eight"){
                function number1(func){
                    return func ? func(8):8;
                };
            }else if(number1=="nine"){
                function number1(func){
                    return func ? func(9):9;
                };
            }else{
                document.getElementById('error').innerText="Enter valid number in text format!";
            }
            if(number2=="zero"){
                function zero(func){
                    return func ? func(0):0;
                };
            }else if(number2=="one"){
                function number2(func){
                    return func ? func(1):1;
                };
            }else if(number2=="two"){
                function number2(func){
                    return func ? func(2):2;
                };
            }else if(number2=="three"){
                function number2(func){
                    return func ? func(3):3;
                };
            }else if(number2=="four"){
                function number2(func){
                    return func ? func(4):4;
                };
            }else if(number2=="five"){
                function number2(func){
                    return func ? func(5):5;
                };
            }else if(number2=="six"){
                function number2(func){
                    return func ? func(6):6;
                };
            }else if(number2=="seven"){
                function number2(func){
                    return func ? func(7):7;
                };
            }else if(number2=="eight"){
                function number2(func){
                    return func ? func(8):8;
                };
            }else if(number2=="nine"){
                function number2(func){
                    return func ? func(9):9;
                };
            }else{
                document.getElementById('error').innerText="Enter valid number in text format!";
            }
            if(opration=="plus"){
                function opration(b){
                    return function(a){
                        return b+a;
                    };
                };
            }else if(opration=="minus"){
                function opration(b){
                    return function(a){
                        return b-a;
                    };
                };
            }else if(opration=="multiple"){
                function opration(b){
                    return function(a){
                        return a*b;
                    };
                };
            }else if(opration=="divide"){
                function opration(b){
                    return function(a){
                        return b/a;
                    };
                };
            }else{
                document.getElementById('error').innerText="Enter valid opration in text format!";
            }
            document.getElementById('result').value=Math.trunc(number2(opration(number1())));
            result=Math.trunc(number2(opration(number1()))); 
            var no1=document.getElementById("number1").value;
            var no2=document.getElementById("number2").value;
            var oprations=document.getElementById("opration").value;
            var cal_record=new Array();
             cal_record=JSON.parse(localStorage.getItem("calculate"))?JSON.parse(localStorage.getItem("calculate")):[];
            if(cal_record){
                username=localStorage.getItem("username");
                cal_record.push({
                        "username":username,
                        "number1":no1,
                        "number2":no2,
                        "oprator":oprations,
                        "result":result
                });
                localStorage.setItem("calculate",JSON.stringify(cal_record));
            }else{
                alert("Something went wrong!");
                window.location.href="student-login";
            }
        }
    }
    }else{
        alert("Something went wrong!");
        window.location.href="student-login";
    }
    function Logout(){
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        window.location.href="student-login";
    }
    document.getElementById("showUsers").innerHTML="";
    var cal_record=new Array();
    cal_record=JSON.parse(localStorage.getItem("calculate"))?JSON.parse(localStorage.getItem("calculate")):[];
    if(cal_record)
    {
      for(let i=0;i<cal_record.length;i++)
      {
        if(cal_record[i].username==username){
            let addDiv=document.createElement('div');
            addDiv.className="row";
            addDiv.innerHTML='  <div class="col-md-3 mt-2">'+cal_record[i].number1+'</div><div class="col-sm-3 mt-2">'+cal_record[i].oprator+'</div><div class="col-md-3 mt-2">'+cal_record[i].number2+'</div><div class="col-md-3 mt-2">'+cal_record[i].result+'</div>';
            document.getElementById("showUsers").appendChild(addDiv); 
        } 
      }
    }

var val;
var l;
var button, cl;
var wrd ="";
var d;
var ans = "";


var English_Sentence = 

[["John ate an apple before afternoon",
"before afternoon John ate an apple", 
"John before afternoon ate an apple "], 
["some students like to study in the night",
"at night some students like to study "], 
["John and Mary went to church", 
"Mary and John went to church "], 
["John went to church after eating", 
"after eating John went to church", 
"John after eating went to church "], 
["did he go to market", 
"he did go to market "], 
["the woman who called my sister sells cosmetics",
"the woman who sells cosmetics called my sister",
"my sister who sells cosmetics called the woman",
"my sister who called the woman sells cosmetics "],
["John goes to the library and studies",
"John studies and goes to the library "],
["John ate an apple so did she",
"she ate an apple so did John "],
["the teacher returned the book after she noticed the error", 
"the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error",
"after the teacher noticed the error she returned the book", 
"she returned the book after the teacher noticed the error", 
"she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error",
"after she noticed the error the teacher returned the book "],
["I told her that I bought a book yesterday",
"I told her yesterday that I bought a book", 
"yesterday I told her that I bought a book", 
"I bought a book that I told her yesterday", 
"I bought a book yesterday that I told her", 
"yesterday I bought a book that I told her "]];

 var  Hindi_Sentence = 
[["राम और श्याम बाजार गयें",
"राम और श्याम गयें बाजार", 
"बाजार गयें राम और श्याम", 
"गयें बाजार राम और श्याम "],
["राम सोया और श्याम भी", 
"श्याम सोया और राम भी", 
"सोया श्याम और राम भी", 
"सोया राम और श्याम भी "],
["मैंने उसे बताया कि राम सो रहा है",
"मैंने उसे बताया कि सो रहा है राम",
"उसे मैंने बताया कि राम सो रहा है",
"उसे मैंने बताया कि सो रहा है राम",
"मैंने बताया उसे कि राम सो रहा है",
"मैंने बताया उसे कि सो रहा है राम",
"उसे बताया मैंने कि राम सो रहा है", 
"उसे बताया मैंने कि सो रहा है राम", 
"बताया मैंने उसे कि राम सो रहा है",
"बताया मैंने उसे कि सो रहा है राम", 
"बताया उसे मैंने कि राम सो रहा है",
"बताया उसे मैंने कि सो रहा है राम "],
["राम खाकर सोया",
"खाकर राम सोया",
"राम सोया खाकर",
"खाकर सोया राम",
"सोया राम खाकर",
"सोया खाकर राम "],
["बिल्लियों को मारकर कुत्ता सो गया",
"मारकर बिल्लियों को कुत्ता सो गया",
"बिल्लियों को मारकर सो गया कुत्ता", 
"मारकर बिल्लियों को सो गया कुत्ता", 
"कुत्ता सो गया बिल्लियों को मारकर", 
"कुत्ता सो गया मारकर बिल्लियों को", 
"सो गया कुत्ता बिल्लियों को मारकर", 
"सो गया कुत्ता मारकर बिल्लियों को "],
["एक लाल किताब वहाँ है", 
"एक लाल किताब है वहाँ", 
"वहाँ है एक लाल किताब", 
"है वहाँ एक लाल किताब "],
["एक बड़ी सी किताब वहाँ है", 
"एक बड़ी सी किताब है वहाँ", 
"बड़ी सी एक किताब वहाँ है", 
"बड़ी सी एक किताब है वहाँ", 
"वहाँ है एक बड़ी सी किताब", 
"वहाँ है बड़ी सी एक किताब", 
"है वहाँ एक बड़ी सी किताब", 
"है वहाँ बड़ी सी एक किताब "]];
    function selectlang(){
    val = document.getElementById('langselect').value;
    if(val == 'english'){
    wrd = "";
    ans = "";
    answr = "";
        document.getElementById("form_7").innerHTML = "";
    document.getElementById("form_6").innerHTML = "";
    document.getElementById("form_2").innerHTML = "";
    document.getElementById("form_3").innerHTML = "";
    document.getElementById("form_4").innerHTML = "";
    document.getElementById("form_5").innerHTML = "";
    document.getElementById("form").innerHTML = "<br><br><font color='darkblue'><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b></font><br><font color='blue'><i>(select the buttons in proper order)</i></font>";
      d = Math.floor(Math.random() * 10);
    var sent_1 = English_Sentence[d][0];
    var wrds = sent_1.split(" ");
      x = wrds.length;
      l = wrds.length-1;
      var  temp, q;
    while(0!==x){
      q = Math.floor(Math.random()*x);
      x -= 1;
      temp = wrds[x];
      wrds[x] = wrds[q];
      wrds[q] = temp;
    }


    
    var finalbtns="";
    var btns="";
    var content;
    button = 0;
    click = 0;
    for( var i=0;i<=wrds.length-1;i++){
      content = wrds[i];
      btns = "<button style='font-size:20px'; id='button"+i+"'onclick='form_sent(this.id,this.value)' value='"+content+"'>"+content+"</button>&nbsp;&nbsp;";
      finalbtns += btns;
      button++;
    }
    
    document.getElementById("form_1").innerHTML = finalbtns;
    
    
  }
  else if(val == 'hindi'){
    wrd = "";
    ans = "";
    document.getElementById("form_7").innerHTML = "";
    document.getElementById("form_6").innerHTML = "";    
    document.getElementById("form_2").innerHTML = "";
    document.getElementById("form_3").innerHTML = "";
    document.getElementById("form_4").innerHTML = "";
    document.getElementById("form").innerHTML = "<br><br><font color=darkblue><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b></font><br><font color='blue'><i>(select the buttons in proper order)</i></font>";
      d = Math.floor(Math.random() * 7);
    var hsen = Hindi_Sentence[d][0];
    var wrds = hsen.split(" ");
    x = wrds.length;
    l = wrds.length-1;
    
      var  temp, q;
    while(0!==x){
      q = Math.floor(Math.random()*x);
      x -= 1;
      temp =wrds[x];
      wrds[x] = wrds[q];
      wrds[q] = temp;
    }
    var finalbtns="";
    var btns="";
    var content;
    button = 0;
    click = 0;
    for(var i=0;i<=wrds.length-1;i++){
      content = wrds[i];
      btns = "<button style='font-size:20px' id='button"+i+"' onclick='form_sent(this.id,this.value)' value='"+content+"'>"+content+"</button> &nbsp;&nbsp;";
      finalbtns += btns;
      button++;
    }
    
    document.getElementById("form_1").innerHTML = finalbtns;     
  }
else if(s="select"){
  alert("Select langselect");
}
}


function form_sent(id,value){
  document.getElementById("form_2").innerHTML = "<font color='darkblue'><b>Formed Sentence</b></font><font color='blue'><i>(after selecting words)</i></font>:";
  wrd += value ;
  wrd += " ";
  document.getElementById("form_3").innerHTML = wrd;
  document.getElementById(id).style.display = "none";
  document.getElementById("form_4").innerHTML = "<button style='font-size:20px'; id='re' onclick='reform_sentence();'>Re-form the Sentence</button>";
  click ++;
  if(click == button){
    document.getElementById("form_5").innerHTML = "<button style='font-size:20px' id='crct' onclick='checksentence();'>Check the correctness of this sentence</button>";
  }
 
}


function reform_sentence(){
  for(var i=0;i<=l;i++){
    document.getElementById('button'+i).style.display = "";
  }
  wrd = "";
  document.getElementById("form_3").innerHTML = wrd;
  document.getElementById("form_4").innerHTML = "";
  document.getElementById("form_2").innerHTML = "";
  document.getElementById("form_5").innerHTML = "";
  document.getElementById("form_6").innerHTML = "";
  document.getElementById("form_7").innerHTML = "";
  click = 0;
  ans = "";
  
}


function checksentence(){
  var e = wrd.trim();
  var checksent;
  if(val =='english'){
    checksent = English_Sentence[d].includes(e);    
  }
  else if(val =='hindi'){
    checksent = Hindi_Sentence[d].includes(e);
  }
  if(checksent)
    document.getElementById("form_6").innerHTML = "<br><font color ='green';font size='20px'>Right Answer!</font>";
  else
    document.getElementById("form_6").innerHTML = "<br><font color ='red';font size='20px'>Wrong Answer!</font><br><br><button style='font-size:20px' id='correct' onclick='getCorrect();'>Get Correct Sentence</button>";
}

function getCorrect(){
  ans = "";
  var num = 0;
  if(val == 'english'){
    n = English_Sentence[d].length-1;
    document.getElementById("form_6").innerHTML = "<font color ='red'; fone size='25px'>Wrong Answer!</font><br><br><button style='font-size:20px' id='correct' onclick='hidebar();'>Hide Correct Sentence</button><br><br>";
    for(var i=0;i<=n;i++){
       ans += English_Sentence[d][i]+"<br>";
    }
    document.getElementById("form_7").innerHTML = "<br>"+"<font size='5px'>"+ans;+"</font>"
  }
  else if(val =='hindi'){
    n = Hindi_Sentence[d].length-1;
    document.getElementById("form_6").innerHTML = "<font color ='red';fone size='25px'>Wrong Answer!</font><br><br><button style='font-size:20px' id='correct' onclick='hidebar();'>Hide Correct Sentence</button><br><br>";
    for(var i=0;i<=n;i++){
      ans += Hindi_Sentence[d][i]+"<br>";
    }
    document.getElementById("form_7").innerHTML = "<br>"+"<font size='5px'>"+ans;+"</font>"
  }
}

function hidebar(){
  document.getElementById("form_6").innerHTML = "<font color ='red';fone size='20px'>Wrong Answer!</font><br><br><button style='font-size:20px' id='correct'onclick='multipletoggle();'>Get Correct Sentence</button><br><br><br>";
  document.getElementById("form_7").style.display = "none";
}



function multipletoggle(){
  var j=document.getElementById("form_7")
  if(j.style.display == 'none'){
    j.style.display = "";
    document.getElementById("form_6").innerHTML = "<font color ='red';font size='20px'>Wrong Answer!!!</font><br><br><button style='font-size:20px' id='correct' onclick='hidebar();'>Hide Correct Sentence</button>";
  }
}
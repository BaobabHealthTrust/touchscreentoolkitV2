/*******************************************************************************
 *
 * Baobab Touchscreen Toolkit Version 2.0
 *
 * A library for transforming HTML pages into touch-friendly user interfaces.
 *
 * (c) 2014 Baobab Health Trust (http://www.baobabhealth.org)
 *
 * For license details, see the README.md file
 *
 ******************************************************************************/


var imgTick = 'data:image/png;base64,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';
      
var imgUnTick = 'data:image/png;base64,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';
      
var styles = "body {-moz-user-select: none; overflow: hidden; font-family: 'Nimbus Sans L', 'Arial Narrow', sans-serif; min-width: 1250px; min-height: 700px; } .button:active {border:1px solid #5ca6c4 !important;background-color: #82bbd1 !important; background-image: -webkit-gradient(linear, left top, left bottom, from(#82bbd1), to(#cd8912)) !important;background-image: -webkit-linear-gradient(top, #82bbd1, #cd8912) !important;background-image: -moz-linear-gradient(top, #efb144, #cd8912) !important;background-image: -ms-linear-gradient(top, #efb144, #cd8912) !important;background-image: -o-linear-gradient(top, #efb144, #cd8912) !important;background-image: linear-gradient(to bottom, #efb144, #cd8912) !important;filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#efb144, endColorstr=#cd8912) !important;} .input_cell {font-size: 1.2em;padding: 10px;border: 1px solid #3465a4;border-radius: 10px;width: 80%;}button {font-size: 1em;padding: 15px;min-width: 120px;cursor: pointer;min-height: 75px;border-radius: 10px !important;margin: 3px;}.button {font-size: 1em;padding: 15px;min-width: 120px;cursor: pointer;min-height: 75px;border-radius: 10px !important;margin: 3px;}.blue{border:1px solid #7eb9d0; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;background-color: #a7cfdf; background-image: -webkit-gradient(linear, left top, left bottom, from(#a7cfdf), to(#23538a));background-image: -webkit-linear-gradient(top, #a7cfdf, #23538a);background-image: -moz-linear-gradient(top, #a7cfdf, #23538a);background-image: -ms-linear-gradient(top, #a7cfdf, #23538a);background-image: -o-linear-gradient(top, #a7cfdf, #23538a);background-image: linear-gradient(to bottom, #a7cfdf, #23538a);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#a7cfdf, endColorstr=#23538a);}.blue:hover{border:1px solid #5ca6c4;background-color: #82bbd1; background-image: -webkit-gradient(linear, left top, left bottom, from(#82bbd1), to(#193b61));background-image: -webkit-linear-gradient(top, #82bbd1, #193b61);background-image: -moz-linear-gradient(top, #82bbd1, #193b61);background-image: -ms-linear-gradient(top, #82bbd1, #193b61);background-image: -o-linear-gradient(top, #82bbd1, #193b61);background-image: linear-gradient(to bottom, #82bbd1, #193b61);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#82bbd1, endColorstr=#193b61);}.green{border:1px solid #34740e; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;background-color: #4ba614; background-image: -webkit-gradient(linear, left top, left bottom, from(#4ba614), to(#008c00));background-image: -webkit-linear-gradient(top, #4ba614, #008c00);background-image: -moz-linear-gradient(top, #4ba614, #008c00);background-image: -ms-linear-gradient(top, #4ba614, #008c00);background-image: -o-linear-gradient(top, #4ba614, #008c00);background-image: linear-gradient(to bottom, #4ba614, #008c00);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#4ba614, endColorstr=#008c00);}.green:hover{border:1px solid #224b09;background-color: #36780f; background-image: -webkit-gradient(linear, left top, left bottom, from(#36780f), to(#005900));background-image: -webkit-linear-gradient(top, #36780f, #005900);background-image: -moz-linear-gradient(top, #36780f, #005900);background-image: -ms-linear-gradient(top, #36780f, #005900);background-image: -o-linear-gradient(top, #36780f, #005900);background-image: linear-gradient(to bottom, #36780f, #005900);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#36780f, endColorstr=#005900);}.red{border:1px solid #72021c; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;background-color: #a90329; background-image: -webkit-gradient(linear, left top, left bottom, from(#a90329), to(#6d0019));background-image: -webkit-linear-gradient(top, #a90329, #6d0019);background-image: -moz-linear-gradient(top, #a90329, #6d0019);background-image: -ms-linear-gradient(top, #a90329, #6d0019);background-image: -o-linear-gradient(top, #a90329, #6d0019);background-image: linear-gradient(to bottom, #a90329, #6d0019);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#a90329, endColorstr=#6d0019);}.red:hover{border:1px solid #450111;background-color: #77021d; background-image: -webkit-gradient(linear, left top, left bottom, from(#77021d), to(#3a000d));background-image: -webkit-linear-gradient(top, #77021d, #3a000d);background-image: -moz-linear-gradient(top, #77021d, #3a000d);background-image: -ms-linear-gradient(top, #77021d, #3a000d);background-image: -o-linear-gradient(top, #77021d, #3a000d);background-image: linear-gradient(to bottom, #77021d, #3a000d);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#77021d, endColorstr=#3a000d);}.gray{border:1px solid #ccc; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;background-color: #ccc; background-image: -webkit-gradient(linear, left top, left bottom, from(#ccc), to(#999));background-image: -webkit-linear-gradient(top, #ccc, #999);background-image: -moz-linear-gradient(top, #ccc, #999);background-image: -ms-linear-gradient(top, #ccc, #999);background-image: -o-linear-gradient(top, #ccc, #999);background-image: linear-gradient(to bottom, #ccc, #999);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#ccc, endColorstr=#999);}.gray:hover{border:1px solid #ccc;background-color: #ddd; background-image: -webkit-gradient(linear, left top, left bottom, from(#333), to(#ccc));background-image: -webkit-linear-gradient(top, #333, #ccc);background-image: -moz-linear-gradient(top, #333, #ccc);background-image: -ms-linear-gradient(top, #333, #ccc);background-image: -o-linear-gradient(top, #333, #ccc);background-image: linear-gradient(to bottom, #333, #ccc);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#333, endColorstr=#ccc);}.orange{border:1px solid #ef8544; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;background-color: #ef8544; background-image: -webkit-gradient(linear, left top, left bottom, from(#ef8544), to(#efb144));background-image: -webkit-linear-gradient(top, #ef8544, #efb144);background-image: -moz-linear-gradient(top, #ef8544, #efb144);background-image: -ms-linear-gradient(top, #ef8544, #efb144);background-image: -o-linear-gradient(top, #ef8544, #efb144);background-image: linear-gradient(to bottom, #ef8544, #efb144);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#ef8544, endColorstr=#efb144);}.orange:hover{border:1px solid #ef8544;background-color: #ddd; background-image: -webkit-gradient(linear, left top, left bottom, from(#ff420e), to(#ef8544));background-image: -webkit-linear-gradient(top, #ff420e, #ef8544);background-image: -moz-linear-gradient(top, #ff420e, #ef8544);background-image: -ms-linear-gradient(top, #ff420e, #ef8544);background-image: -o-linear-gradient(top, #ff420e, #ef8544);background-image: linear-gradient(to bottom, #ff420e, #ef8544);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#ff420e, endColorstr=#ef8544);}"
        
var currentCaseUpper = true;
var currentKeysNumeric = false;
var currentKeysQWERTY = false;
     
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var monthNames = {
      "Jan":0, 
      "Feb":1, 
      "Mar":2, 
      "Apr":3, 
      "May":4, 
      "Jun":5, 
      "Jul":6, 
      "Aug":7, 
      "Sep":8, 
      "Oct":9, 
      "Nov":10, 
      "Dec":11
    };
       
var timers = {};       

var fieldsets = [];     
    
var currentPage = 0;
        
var btnClear, btnBack, btnNext;        
      
var textSize = "36px";
    
var cursorPos = 0;
     
var tracker;
            
var incomplete = false;

var validityTmr;            
            
function __$(id){
  return document.getElementById(id);
}

function padZeros(number, positions){
    var zeros = parseInt(positions) - String(number).length;
    var padded = "";
    
    for(var i = 0; i < zeros; i++){
        padded += "0";
    }
    
    padded += String(number);
    
    return padded;
}

function checkCtrl(obj){
    var o = obj;
    var t = o.offsetTop;
    var l = o.offsetLeft + 1;
    var w = o.offsetWidth;
    var h = o.offsetHeight;

    while((o ? (o.offsetParent != document.body) : false)){
        o = o.offsetParent;
        t += (o ? o.offsetTop : 0);
        l += (o ? o.offsetLeft : 0);
    }
    return [w, h, t, l];
}

function init(){
  var style = document.createElement("style");
  style.innerHTML = styles;
  
  document.head.appendChild(style);
  
  loadLabels();
  
  var forms = document.forms;
  
  for(var i = 0; i < forms.length; i++){
    
    forms[i].style.display = "none";
    
  }
    
  fieldsets = document.forms[0].getElementsByTagName("fieldset");  
  
  loadPage(currentPage);
  
  checkValidity();
}

function showFixedKeyboard(ctrl, container, disabled, numbers, caps){
    if(ctrl == undefined || container == undefined)    
      return;
    
    container.innerHTML = "";
    
    if(__$('fixedkeyboard')){
      document.body.removeChild(__$('fixedkeyboard'));
    }

    if(!__$("main")){
      var main = document.createElement("div");
      main.id = "main";
      
      container.appendChild(main);
    }

    target = ctrl;

    var pos = checkCtrl(ctrl);
    
    if(typeof(disabled) == 'undefined') disabled = {};
    
    if(typeof(numbers) == 'undefined') numbers = false;
    
    if(typeof(caps) == 'undefined') caps = false;
    
    currentCaseUpper = caps;
    
    currentKeysNumeric = numbers;
    
    var div = document.createElement('div');
    div.id = 'fixedkeyboard';
    div.style.margin = 'auto';
    // div.style.border = '1px solid #5ca6c4';
    div.style.borderRadius = '10px';
    // div.style.left = pos[3] + 'px';
    // div.style.top = (pos[2] + pos[1] + 2 - window.scrollY) + 'px';
    // div.style.zIndex = '1000';
    div.style.backgroundColor = 'rgba(255,255,255,0.8)';
    
    container.appendChild(div);
    
    var keys;
    
    if(currentKeysNumeric){
     
      keys = [[1,2,3,':'],[4,5,6,'/'],[7,8,9,'.'],['&larr;',0,'','abc']];
      
    } else {
     
      if(currentKeysQWERTY){
        
        keys = [["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],['',"Z","X","C","V","B","N","M",'',"CAP"],['','|_|','&larr;',":",".","/","num","abc"]];
        
      } else {
      
        keys = [["A","B","C","D","E","F","G","H","I"],["J","K","L","M","N","O","P","Q","R"],["S","T","U","V","W","X","Y","Z","CAP"],['','|_|','&larr;',":",".","/","num","qwe"]];
        
      }
      
    }
    
    var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
                        
    var table = document.createElement('div');
    table.style.display = 'table';
    table.style.margin = 'auto';
    
    div.appendChild(table);
    
    for(var i = 0; i < keys.length; i++){
        var row = document.createElement('div');
        row.style.display = 'table-row';
        
        table.appendChild(row);
        
        for(var j = 0; j < keys[i].length; j++){
            var cell = document.createElement('div');
            cell.style.display = 'table-cell';
            
            row.appendChild(cell);
            
            if(String(keys[i][j]).trim().length == 0){
              cell.innerHTML = "&nbsp;";
              
              continue;
            }
            
            var button = document.createElement('button');
            button.setAttribute('class', (disabled[keys[i][j]] ? 'button gray' : 'button blue'));
            button.style.width = '75px';
            button.style.height = '70px';
            button.style.minWidth = '40px';
            button.style.minHeight = '40px';
            button.style.margin = '2px';
            
            button.id = keys[i][j];
            
            if(target && keys[i][j] == '.'){
                if(target.value.trim().match(/\./) || target.value.trim().length == 0){
                    button.setAttribute('class', 'button gray');
                } else {
                    button.setAttribute('class', 'button blue');
                }
            }
            
            if(letters[keys[i][j]]){
              
              button.innerHTML = (String(keys[i][j]).trim() == "cap" && !currentCaseUpper ? String(keys[i][j]).toLowerCase() : (currentCaseUpper ? String(keys[i][j]).toUpperCase() : String(keys[i][j]).toLowerCase()));
              
            } else {
            
              button.innerHTML = keys[i][j];
            
            }
            
            if(disabled[keys[i][j]]){
                    button.setAttribute('class', 'button gray');
            } else {
                button.setAttribute('class', 'button blue');
                
                button.onmousedown = function(){
                
                    if(this.innerHTML.trim().charCodeAt(0) == 8592){
                        if(target){
                            target.value = target.value.trim().substring(0,(target.value.trim().length - 1));
                        }
                    } else if(this.innerHTML.trim() == 'num'){
                        
                        currentKeysNumeric = true;
                        
                        showFixedKeyboard(__$(target.id), container, {}, currentKeysNumeric, currentCaseUpper);
                        
                    } else if(this.innerHTML.trim() == 'abc'){
                        
                        currentKeysQWERTY = false;
                        
                        currentKeysNumeric = false;
                        
                        showFixedKeyboard(__$(target.id), container, {}, currentKeysNumeric, currentCaseUpper);
                        
                    } else if(this.innerHTML.trim() == 'qwe'){
                        
                        currentKeysQWERTY = true;
                        
                        currentKeysNumeric = false;
                        
                        showFixedKeyboard(__$(target.id), container, {}, currentKeysNumeric, currentCaseUpper);
                        
                    } else if(this.innerHTML.trim().toLowerCase() == 'cap'){
                        currentCaseUpper = !currentCaseUpper;
                        
                        if(!currentCaseUpper){
                          this.innerHTML = "CAP";
                          
                          for(var l = 0; l < letters.length; l++){
                            if(__$(letters[l])){
                              __$(letters[l]).innerHTML = letters[l].toUpperCase();
                            } 
                          }
                          
                        } else {
                          this.innerHTML = "cap";
                          
                          for(var l = 0; l < letters.length; l++){
                            if(__$(letters[l])){
                              __$(letters[l]).innerHTML = letters[l].toLowerCase();
                            }
                          }
                          
                        }
                       
                    } else if(this.innerHTML.trim() == '|_|'){ 
                       
                       target.value += " ";
                       
                    } else {
                    
                        target.value += (currentCaseUpper ? this.innerHTML.trim().toLowerCase() : this.innerHTML.trim());
                        
                    }
                    
                    __$('.').setAttribute('class', 'button blue');
                    
                }
            }
            
            cell.appendChild(button);
        }
    }
    
    if(__$("fixedkeyboard")){
    
      // [w, h, t, l]
      var kpos = checkCtrl(__$("fixedkeyboard"));
      var w = window.innerWidth;
      var h = window.innerHeight;
      
      if(kpos[0] + kpos[3] > w){
        
        __$("fixedkeyboard").style.left = (w - kpos[0] - 10) + "px";
        
      }                
      
      if(kpos[1] + kpos[2] > h){
        
        __$("fixedkeyboard").style.top = (pos[2] - kpos[1] - 2) + "px";
        
      }                
      
    }

    
}          
   
function showKeyboard(ctrl, disabled, numbers, caps){
    if(__$('keyboard') && numbers == undefined){
        
        document.body.removeChild(__$('keyboard'));
        
    } else {
    
        if(__$('keyboard')){
          document.body.removeChild(__$('keyboard'));
        }
    
        if(!__$("main")){
          var main = document.createElement("div");
          main.id = "main";
          
          document.body.appendChild(main);
        }
    
        target = ctrl;
    
        var pos = checkCtrl(ctrl);
        
        if(typeof(disabled) == 'undefined') disabled = {};
        
        if(typeof(numbers) == 'undefined') numbers = false;
        
        if(typeof(caps) == 'undefined') caps = false;
        
        currentCaseUpper = caps;
        
        currentKeysNumeric = numbers;
        
        var div = document.createElement('div');
        div.id = 'keyboard';
        div.style.position = 'absolute';
        div.style.border = '1px solid #5ca6c4';
        div.style.borderRadius = '10px';
        div.style.left = pos[3] + 'px';
        div.style.top = (pos[2] + pos[1] + 2 - window.scrollY) + 'px';
        div.style.zIndex = '1000';
        div.style.backgroundColor = 'rgba(255,255,255,0.8)';
        
        document.body.appendChild(div);
        
        var keys;
        
        if(currentKeysNumeric){
         
          keys = [[1,2,3,':'],[4,5,6,'/'],[7,8,9,'.'],['&larr;',0,'','abc']];
          
        } else {
         
          if(currentKeysQWERTY){
            
            keys = [["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],['',"Z","X","C","V","B","N","M",'',"CAP"],['','|_|','&larr;',":",".","/","num","abc"]];
            
          } else {
          
            keys = [["A","B","C","D","E","F","G","H","I"],["J","K","L","M","N","O","P","Q","R"],["S","T","U","V","W","X","Y","Z","CAP"],['','|_|','&larr;',":",".","/","num","qwe"]];
            
          }
          
        }
        
        var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
                            
        var table = document.createElement('div');
        table.style.display = 'table';
        table.style.margin = 'auto';
        
        div.appendChild(table);
        
        for(var i = 0; i < keys.length; i++){
            var row = document.createElement('div');
            row.style.display = 'table-row';
            
            table.appendChild(row);
            
            for(var j = 0; j < keys[i].length; j++){
                var cell = document.createElement('div');
                cell.style.display = 'table-cell';
                
                row.appendChild(cell);
                
                if(String(keys[i][j]).trim().length == 0){
                  cell.innerHTML = "&nbsp;";
                  
                  continue;
                }
                
                var button = document.createElement('button');
                button.setAttribute('class', (disabled[keys[i][j]] ? 'button gray' : 'button blue'));
                button.style.width = '75px';
                button.style.height = '70px';
                button.style.minWidth = '40px';
                button.style.minHeight = '40px';
                button.style.margin = '2px';
                
                button.id = keys[i][j];
                
                if(target && keys[i][j] == '.'){
                    if(target.value.trim().match(/\./) || target.value.trim().length == 0){
                        button.setAttribute('class', 'button gray');
                    } else {
                        button.setAttribute('class', 'button blue');
                    }
                }
                
                if(letters[keys[i][j]]){
                  
                  button.innerHTML = (String(keys[i][j]).trim() == "cap" && !currentCaseUpper ? String(keys[i][j]).toLowerCase() : (currentCaseUpper ? String(keys[i][j]).toUpperCase() : String(keys[i][j]).toLowerCase()));
                  
                } else {
                
                  button.innerHTML = keys[i][j];
                
                }
                
                if(disabled[keys[i][j]]){
                        button.setAttribute('class', 'button gray');
                } else {
                    button.setAttribute('class', 'button blue');
                    
                    button.onmousedown = function(){
                    
                        if(this.innerHTML.trim().charCodeAt(0) == 8592){
                            if(target){
                                target.value = target.value.trim().substring(0,(target.value.trim().length - 1));
                            }
                        } else if(this.innerHTML.trim() == 'num'){
                            
                            currentKeysNumeric = true;
                            
                            showKeyboard(__$(target.id), {}, currentKeysNumeric, currentCaseUpper);
                            
                        } else if(this.innerHTML.trim() == 'abc'){
                            
                            currentKeysQWERTY = false;
                            
                            currentKeysNumeric = false;
                            
                            showKeyboard(__$(target.id), {}, currentKeysNumeric, currentCaseUpper);
                            
                        } else if(this.innerHTML.trim() == 'qwe'){
                            
                            currentKeysQWERTY = true;
                            
                            currentKeysNumeric = false;
                            
                            showKeyboard(__$(target.id), {}, currentKeysNumeric, currentCaseUpper);
                            
                        } else if(this.innerHTML.trim().toLowerCase() == 'cap'){
                            currentCaseUpper = !currentCaseUpper;
                            
                            if(!currentCaseUpper){
                              this.innerHTML = "CAP";
                              
                              for(var l = 0; l < letters.length; l++){
                                if(__$(letters[l])){
                                  __$(letters[l]).innerHTML = letters[l].toUpperCase();
                                } 
                              }
                              
                            } else {
                              this.innerHTML = "cap";
                              
                              for(var l = 0; l < letters.length; l++){
                                if(__$(letters[l])){
                                  __$(letters[l]).innerHTML = letters[l].toLowerCase();
                                }
                              }
                              
                            }
                           
                        } else if(this.innerHTML.trim() == '|_|'){ 
                           
                           target.value += " ";
                           
                        } else {
                        
                            target.value += (currentCaseUpper ? this.innerHTML.trim().toLowerCase() : this.innerHTML.trim());
                            
                        }
                        
                        __$('.').setAttribute('class', 'button blue');
                        
                    }
                }
                
                cell.appendChild(button);
            }
        }
        
        if(__$("keyboard")){
        
          // [w, h, t, l]
          var kpos = checkCtrl(__$("keyboard"));
          var w = window.innerWidth;
          var h = window.innerHeight;
          
          if(kpos[0] + kpos[3] > w){
            
            __$("keyboard").style.left = (w - kpos[0] - 10) + "px";
            
          }                
          
          if(kpos[1] + kpos[2] > h){
            
            __$("keyboard").style.top = (pos[2] - kpos[1] - 2) + "px";
            
          }                
          
        }
        
    }
    
    
}          
     
function loadLabels(){
  var labels = document.getElementsByTagName('LABEL');
  for (var i = 0; i < labels.length; i++) {
      if (labels[i].htmlFor != '') {
           var elem = document.getElementById(labels[i].htmlFor);
           if (elem)
              elem.label = labels[i];			
      }
  }
}

function addTimer(parent, limit, label){

  if(parent == undefined || limit == undefined || label == undefined){
    return;
  }
  
  var tbl = document.createElement("div");
  tbl.style.display = "table";
  tbl.style.borderSpacing = "5px";
  tbl.style.width = "400px";

  tbl.style.border = "1px solid #3465a4";
  tbl.style.borderRadius = "10px";

  parent.appendChild(tbl);
   
  var row1 = document.createElement("div");
  row1.style.display = "table-row";
  
  tbl.appendChild(row1);
  
  var row2 = document.createElement("div");
  row2.style.display = "table-row";
  
  tbl.appendChild(row2);
  
  var row3 = document.createElement("div");
  row3.style.display = "table-row";
  
  tbl.appendChild(row3);
  
  var cell1 = document.createElement("div");
  cell1.style.display = "table-cell";
  cell1.style.textAlign = "left";
  cell1.style.verticalAlign = "middle";
  cell1.style.fontSize = "18px";
  cell1.style.padding = "10px";
  
  row1.appendChild(cell1);
  
  addLabel(cell1, label, "24px");
  
  var cell2 = document.createElement("div");
  cell2.style.display = "table-cell";
  cell2.style.textAlign = "center";
  cell2.style.verticalAlign = "middle";
  cell2.style.padding = "10px";
  cell2.style.paddingLeft = "60px";
  cell2.style.paddingRight = "60px";
  cell2.style.paddingBottom = "0px";
  
  row2.appendChild(cell2);
  
  var disc = document.createElement("div");
  disc.style.border = "2px solid #3465a4";
  disc.style.padding = "20px";
  disc.style.fontSize = "120px";
  disc.style.width = "350px";
  disc.style.height = "350px";
  disc.style.borderRadius = "350px";
  disc.style.verticalAlign = "middle";
  disc.style.textAlign = "center";
  disc.style.marginBottom = "-40px";
  
  cell2.appendChild(disc);
  
  var time = document.createElement("div");
  time.style.marginTop = "100px";
  time.id = "time" + parent.id;
  time.innerHTML = "00:00";
  
  disc.appendChild(time);
  
  var cell3 = document.createElement("div");
  cell3.style.display = "cell";
  cell3.style.textAlign = "right";
  cell3.style.paddingBottom = "10px";
  cell3.style.paddingRight = "10px";
  cell3.id = "cell3_" + parent.id;
  
  row3.appendChild(cell3);
  
  var btn = addButton(cell3, "Start", "green");
  
  btn.style.width = "100px";
  btn.setAttribute("limit", limit);
  btn.id = "btnTmr" + parent.id;
  btn.setAttribute("target", parent.id);
  
  btn.onmousedown = function(){
    
    countDown(this.getAttribute('target'), this.getAttribute('limit'))
    
  }
  
}

var timerHandles = {};

function countDown(id, limit){

  clearTimeout(timerHandles[id]);
  
  if(timers[id] == undefined){
    
    if(limit != undefined){
     
      timers[id] = parseInt(limit) * 60;   
     
      if(__$("btnTmr" + id)){
      
        __$("btnTmr" + id).className = "button red";
        
        __$("btnTmr" + id).innerHTML = "Stop";
        
        __$("btnTmr" + id).onmousedown = function(){
        
          if(this.innerHTML.trim().toLowerCase() == "reset"){
          
            this.innerHTML = "Start";
            
            this.className = "button green";
                      
            if(__$("time" + this.getAttribute('target'))){
             
              __$("time" + this.getAttribute('target')).innerHTML = "00:00"; 
              
            }

            this.onmousedown = function(){
              
              countDown(this.getAttribute('target'), this.getAttribute('limit'));
              
            }
          
          } else {
          
            clearTimeout(timerHandles[this.getAttribute("target")]);
          
            delete timers[this.getAttribute("target")];
  
            this.innerHTML = "Reset";
            
          }
          
        }
      
      }
     
    }
    
  } else {
  
    timers[id] -= 1;
  
  }

  var seconds = timers[id] % (60);
  
  var minutes = (timers[id] - seconds) / (60);
  
  if(__$("time" + id)){
   
    __$("time" + id).innerHTML = padZeros(minutes, 2) + ":" + padZeros(seconds, 2); 
    
  }

  if(timers[id] <= 0){
  
    delete timers[id];
    
    if(__$("btnTmr" + id)){
      
        __$("btnTmr" + id).innerHTML = "Start";
                
        __$("btnTmr" + id).className = "button green";
                  
        if(__$("time" + id)){
         
          __$("time" + id).innerHTML = "00:00"; 
          
        }

        __$("btnTmr" + id).onmousedown = function(){
          
          countDown(this.getAttribute('target'), this.getAttribute('limit'));
          
        }
    }
            
  } else {
  
    timerHandles[id] = setTimeout("countDown('" + id + "', '" + limit + "')", 1000);
  
  }

}

function addAge(parent, target, date, label1, label2){

  if(parent == undefined || target == undefined || label1 == undefined || label2 == undefined){
    return;
  }  
  
  parent.innerHTML = "";
  
  var fontsize = "20px";
  
  var tbl = document.createElement("div");
  tbl.style.display = "table";
  tbl.style.borderSpacing = "5px";
  tbl.style.margin = "auto";

  // tbl.style.border = "1px solid #3465a4";
  tbl.style.borderRadius = "10px";

  parent.appendChild(tbl);
   
  var row1 = document.createElement("div");
  row1.style.display = "table-row";
  
  tbl.appendChild(row1);
  
  var cell1_1 = document.createElement("div");
  cell1_1.style.display = "table-cell";
  cell1_1.id = "cell1_1_" + target.id;
  cell1_1.style.padding = "10px";
  cell1_1.style.fontStyle = "italic";
  cell1_1.style.textAlign = "center";
  cell1_1.style.fontSize = fontsize;
   
  row1.appendChild(cell1_1);
  
  addLabel(cell1_1, label1, fontsize);
  
  var cell1_2 = document.createElement("div");
  cell1_2.style.fontWeight = "bold";
  cell1_2.style.fontStyle = "italic";
  cell1_2.style.textAlign = "center";
  cell1_2.style.padding = "10px";
  cell1_2.innerHTML = "OR";
  cell1_2.style.fontSize = fontsize;
  
  row1.appendChild(cell1_2);
  
  var cell1_3 = document.createElement("div");
  cell1_3.style.display = "table-cell";
  cell1_3.id = "cell1_3_" + target.id;
  cell1_3.style.padding = "10px";
  cell1_3.style.fontStyle = "italic";
  cell1_3.style.textAlign = "center";
  cell1_3.style.fontSize = fontsize;
   
  row1.appendChild(cell1_3);
  
  addLabel(cell1_3, label2, fontsize);
  
  var row2 = document.createElement("div");
  row2.style.display = "table-row";
  
  tbl.appendChild(row2);
  
  var cell2_1 = document.createElement("div");
  cell2_1.style.display = "table-cell";
  cell2_1.id = "cell2_1_" + target.id;
  cell2_1.style.textAlign = "center";
  
  row2.appendChild(cell2_1);
  
  addDate(cell2_1, target, date);
  
  var cell2_2 = document.createElement("div");
  cell2_2.style.display = "table-cell";
  cell2_2.id = "cell2_2_" + target.id;
  cell2_2.style.textAlign = "center";
  cell2_2.innerHTML = "&nbsp;";
  
  row2.appendChild(cell2_2);
  
  var cell2_3 = document.createElement("div");
  cell2_3.style.display = "table-cell";
  cell2_3.id = "cell2_3_" + target.id;
  cell2_3.style.textAlign = "center";
  cell2_3.style.verticalAlign = "middle";
  
  row2.appendChild(cell2_3);
  
  var age = addTextbox(cell2_3, "number", target);
  
  age.style.width = "100px";
  age.style.fontSize = "32px";
  age.style.textAlign = "center";
  age.setAttribute("target", target.id);
  age.id = "age" + target.id;
  
  age.onmousedown = function(){
  
    if(__$('keyboard')){
    
      document.body.removeChild(__$('keyboard'));
      
    } else {
    
      showKeyboard(__$('age' + this.getAttribute('target')),{':':':','/':'/','.':'.','abc':'abc'},true);
      
    } 
    
    checkDate(this.getAttribute('target'), true);
    
  }
}

function addDate(parent, target, date){
  if(parent == undefined || target == undefined){
    return;
  }  
  
  if(date == undefined || date == null || date.trim().length == 0){
  
    if(target.value.trim().match(/^(\d|\d{2})\/[A-Za-z]{3}\/\d{4}$/)){
      var currentdate = target.value.trim().split("/");
      
      date = new Date(currentdate[2] + "-" + padZeros((monthNames[currentdate[1]] + 1), 2) + "-" + padZeros(parseInt(currentdate[0]), 2));
    } else {
      var today = new Date();
      
      date = today.getFullYear() + "-" + padZeros(today.getMonth(), 2) + "-" + padZeros(today.getDate(), 2);
    }
  
  } 
  
  date = new Date(date);
  
  var tbl = document.createElement("div");
  tbl.style.display = "table";
  tbl.style.borderSpacing = "5px";
  
  parent.appendChild(tbl);
  
  var cells = [
      [
        {
          "type"  : "button",
          "id"    : "btnAddYearFor" + target.id,
          "target": target.id,
          "value" : "+",
          "onmousedown" : "incrementYear(this.getAttribute('target'))",
          "class" : "button blue",
          "style" : "height: 75px; margin: auto; width: 100%;"
        },
        {
          "type"  : "button",
          "id"    : "btnAddMonthFor" + target.id,
          "target": target.id,
          "value" : "+",
          "onmousedown" : "incrementMonth(this.getAttribute('target'))",
          "class" : "button blue",
          "style" : "height: 75px; margin: auto; width: 100%;"
        },
        {
          "type"  : "button",
          "id"    : "btnAddDateFor" + target.id,
          "target": target.id,
          "value" : "+",
          "onmousedown" : "incrementDate(this.getAttribute('target'))",
          "class" : "button blue",
          "style" : "height: 75px; margin: auto; width: 100%;"
        }
      ],
      [
        {
          "type"  : "input",
          "id"    : "txtYearFor" + target.id,
          "target": target.id,
          "value" : date.getFullYear(),
          "onmousedown" : "if(__$('keyboard')){document.body.removeChild(__$('keyboard'));} else {showKeyboard(__$('txtYearFor' + this.getAttribute('target')),{':':':','/':'/','.':'.','abc':'abc'},true);} checkDate(this.getAttribute('target'));",
          "class" : "input_cell",
          "style" : "font-size: 32px; text-align: center;"
        },
        {
          "type"  : "input",
          "id"    : "txtMonthFor" + target.id,
          "target": target.id,
          "value" : months[date.getMonth()],
          "onmousedown" : "addList(__$('txtMonthFor' + this.getAttribute('target')),{'Jan':'January','Feb':'February','Mar':'March','Apr':'April','May':'May','Jun':'June','Jul':'July','Aug':'August','Sep':'September','Oct':'October','Nov':'November','Dec':'December'},'single',__$('txtMonthFor' + this.getAttribute('target')),__$('txtMonthFor' + this.getAttribute('target')), 'checkDate(\"' + this.getAttribute('target') + '\")'); checkDate(this.getAttribute('target'));",
          "class" : "input_cell",
          "style" : "font-size: 32px; text-align: center;"
        },
        {
          "type"  : "input",
          "id"    : "txtDateFor" + target.id,
          "target": target.id,
          "value" : date.getDate(),
          "onmousedown" : "if(__$('keyboard')){document.body.removeChild(__$('keyboard'));} else {showKeyboard(__$('txtDateFor' + this.getAttribute('target')),{':':':','/':'/','.':'.','abc':'abc'},true);} checkDate(this.getAttribute('target'));",
          "class" : "input_cell",
          "style" : "font-size: 32px; text-align: center;"
        }
      ],
      [
        {
          "type"  : "button",
          "id"    : "btnSubtractYearFor" + target.id,
          "target": target.id,
          "value" : "-",
          "onmousedown" : "decrementYear(this.getAttribute('target'))",
          "class" : "button blue",
          "style" : "height: 75px; margin: auto; width: 100%;"
        },
        {
          "type"  : "button",
          "id"    : "btnSubtractMonthFor" + target.id,
          "target": target.id,
          "value" : "-",
          "onmousedown" : "decrementMonth(this.getAttribute('target'))",
          "class" : "button blue",
          "style" : "height: 75px; margin: auto; width: 100%;"
        },
        {
          "type"  : "button",
          "id"    : "btnSubtractDateFor" + target.id,
          "target": target.id,
          "value" : "-",
          "onmousedown" : "decrementDate(this.getAttribute('target'))",
          "class" : "button blue",
          "style" : "height: 75px; margin: auto; width: 100%;"
        }
      ]
    ];
    
  for(var i = 0; i < cells.length; i++){
    var row = document.createElement("div");
    row.style.display = "table-row";
    
    tbl.appendChild(row);
    
    for(var j = 0; j < cells[i].length; j++){
      var cell = document.createElement("div");
      cell.style.display = "table-cell";
      cell.style.width = "140px";
      cell.style.textAlign = "center";
      
      row.appendChild(cell);
      
      var input = document.createElement("input");
      
      for(var key in cells[i][j]){
        input.setAttribute(key, cells[i][j][key]);
      }      
      
      cell.appendChild(input);
    }
  }
  
  return tbl;
}

function incrementYear(id){
  if(__$("txtYearFor" + id)){
    var yr = parseInt(__$("txtYearFor" + id).value.trim());
    
    yr++;
    
    __$("txtYearFor" + id).value = yr;
    
    checkDate(id);
  }
}

function decrementYear(id){
  if(__$("txtYearFor" + id)){
    var yr = parseInt(__$("txtYearFor" + id).value.trim());
    
    yr--;
    
    __$("txtYearFor" + id).value = yr;
    
    checkDate(id);
  }
}

function incrementMonth(id){
  if(__$("txtMonthFor" + id)){
    var month = monthNames[__$("txtMonthFor" + id).value.trim()];
    
    if(month + 1 < 12){
      month++;
    } else {
      month = 0;
    }
    
    __$("txtMonthFor" + id).value = months[month];
    
    checkDate(id);
  }
}

function decrementMonth(id){
  if(__$("txtMonthFor" + id)){
    var month = monthNames[__$("txtMonthFor" + id).value.trim()];
    
    if(month - 1 >= 0){
      month--;
    } else {
      month = 11;
    }
    
    __$("txtMonthFor" + id).value = months[month];
    
    checkDate(id);
  }
}

function incrementDate(id){
  if(__$("txtDateFor" + id)){
    var value = parseInt(__$("txtDateFor" + id).value.trim());
    
    var month = monthNames[__$("txtMonthFor" + id).value.trim()];
    
    if(month + 2 < 12){
      month += 2;
    } else {
      month = 1;
    }
    
    var date = new Date(__$("txtYearFor" + id).value.trim() + "-" + padZeros(month, 2) + "-01")
    
    date.setDate(date.getDate() - 1);
    
    if(value + 1 <= date.getDate()){
      value++;
    } else {
      value = 1;
    }
    
    __$("txtDateFor" + id).value = value;
    
    checkDate(id);
  }
}

function decrementDate(id){
  if(__$("txtDateFor" + id)){
    var value = parseInt(__$("txtDateFor" + id).value.trim());
    
    var month = monthNames[__$("txtMonthFor" + id).value.trim()];
    
    if(month + 2 < 12){
      month += 2;
    } else {
      month = 1;
    }
    
    var date = new Date(__$("txtYearFor" + id).value.trim() + "-" + padZeros(month, 2) + "-01")
    
    date.setDate(date.getDate() - 1);
    
    if(value - 1 > 0){
      value--;
    } else {
      value = date.getDate();
    }
    
    __$("txtDateFor" + id).value = value;
    
    checkDate(id);
  }
}

function checkDate(id, byAge){
  if(__$("txtDateFor" + id) && __$("txtYearFor" + id) && __$("txtMonthFor" + id)){
  
    if(byAge == undefined || byAge == false){
    
      if(!__$("txtYearFor" + id).value.trim().match(/^\d{4}$/)){
      
        __$("txtYearFor" + id).value = (new Date()).getFullYear();
        
      }
    
      var value = parseInt(__$("txtDateFor" + id).value.trim());
        
      var month = monthNames[__$("txtMonthFor" + id).value.trim()];
      
      if(month + 1 < 12){
        month += 2;
      } else {
        month = 1;
      }
      
      var date = new Date(__$("txtYearFor" + id).value.trim() + "-" + padZeros(month, 2) + "-01")
      
      date.setDate(date.getDate() - 1);
      
      if(value > date.getDate()){
        value = date.getDate();
      }
      
      __$("txtDateFor" + id).value = value;
      
      if(__$(id)){
        
        __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();
        
      }
      
      if(__$("age" + id)){
        
        var actual = __$("txtYearFor" + id).value.trim() + "-" + padZeros((month - 1 < 1 ? 12 : (month - 1)), 2) + "-" + padZeros(parseInt(__$("txtDateFor" + id).value.trim()), 2);
        
        var age = ((new Date()) - (new Date(actual))) / (365 * 24 * 60 * 60 * 1000);
        
        __$("age" + id).value = Math.round(age);
      
      }
      
    } else {
    
      if(__$("age" + id)){
        
        var age = parseInt(__$("age" + id).value);
        
        var yrs = (new Date()).getFullYear() - age;
        
        __$("txtYearFor" + id).value = yrs;
        
        __$("txtMonthFor" + id).value = "Jul";
        
        __$("txtDateFor" + id).value = "15";
        
      }
       
      if(__$(id)){
        
        __$(id).value = __$("txtDateFor" + id).value.trim() + "/" + __$("txtMonthFor" + id).value.trim() + "/" + __$("txtYearFor" + id).value.trim();
        
      }
              
    }
  }
}

/*
  parent:   control to attach to
  boxType:  type of textbox [text|password|barcode|number]
  [target]:   control to update onchange (OPTIONAL)
  [callback]: callback function to call when barcode scanned (OPTIONAL)
*/
function addTextbox(parent, boxType, target, callback){
  if(parent == undefined || target == undefined){
    return;
  }  

  if(boxType == undefined){
    boxType = "text";
  }

  var txt = document.createElement("input");
  txt.style.fontSize = "1.2em";
  txt.style.padding = "10px";
  txt.style.border = "1px solid #3465a4";
  txt.style.borderRadius = "10px";
  txt.style.width = "98.5%";
  txt.style.margin = "auto";
  txt.setAttribute("target", target.id);
  
  txt.onchange = function(){
    if(__$(this.getAttribute("target"))){
      __$(this.getAttribute("target")).value = this.value;
    }
  }
  
  txt.onkeyup = function(){
    if(__$(this.getAttribute("target"))){
      __$(this.getAttribute("target")).value = this.value;
    }
  }
  
  switch(boxType.toLowerCase()){
    case "password":
      txt.setAttribute("type", "password");
      
      break;
    case "number":
      txt.setAttribute("type", "number");
    
      break;
    case "barcode":
      
      if(callback != undefined)
        eval(callback);
        
    default:
      txt.setAttribute("type", "text");
    
      break; 
  }
  
  parent.appendChild(txt);

  return txt;

}

function addList(parent, options, optionType, target1, target2, action){
  if(parent == undefined || options == undefined || target1 == undefined || target2 == undefined || optionType == undefined){
      return;
  }
  
  var id = parent.id;
  
  if(__$(id)){
      
    if(__$("keyboard")){
    
      document.body.removeChild(__$("keyboard"));
    
    } else {
    
      var pos = checkCtrl(__$(id));
      var list = document.createElement("div");
      list.style.position = "absolute";
      list.style.border = "1px solid #999";
      list.style.boxShadow = "inset 0px 11px 8px -10px #CCC, inset 0px -11px 8px -10px #CCC";
      list.style.width = "200px";
      list.style.height = "250px";
      list.id = "keyboard";
      list.style.left = (pos[3]) + "px";
      list.style.top = (pos[2] + pos[1]) + "px";
      list.style.backgroundColor = "#fff";
      list.style.overflow = "auto";
      
      document.body.appendChild(list);
      
      addCombo(list, options, optionType, target1, target2, (optionType == "single" ? true : false), id, action);
      
      // [w, h, t, l]
      var lpos = checkCtrl(__$("keyboard"));
      var w = window.innerWidth;
      var h = window.innerHeight;
      
      if(lpos[0] + lpos[3] > w){
        
        __$("keyboard").style.left = (w - lpos[0] - 10) + "px";
        
      }              
      
      if(lpos[1] + lpos[2] > h){
        
        __$("keyboard").style.top = (pos[2] - lpos[1] - 2) + "px";
        
      }  
          
    }
  }

}

/* 
    parent:       control to attach to
    options:      value:display associative array e.g. {"F":"Female","M":"Male"} 
    optionType:   [single|multiple] for single or multiple selection with 
                    default single selection
    target1:       target display control to receive value
    target2:       target hidden control to receive value
*/
function addCombo(parent, options, optionType, target1, target2, collapseOnClick, id, action, selected){
  if(parent == undefined || options == undefined || target1 == undefined || target2 == undefined || optionType == undefined){
    return;
  }
  
  if(collapseOnClick == undefined){
    
    collapseOnClick = false;
    
  }
  
  if(id == undefined){
    
    id = null;
    
  }
  
  if(action == undefined){
    
    action = null;
    
  }
  
  if(selected == undefined){
    
    selected = {};
    
  }
  
  var base = document.createElement("div");
  base.style.width = "100%";
  base.style.height = "360px";
  base.style.overflow = "auto";
  
  parent.appendChild(base);
  
  var ul = document.createElement("ul");
  ul.style.marginTop = "5px";
  ul.style.marginBottom = "5px";
  ul.style.paddingLeft = "0px";
  
  var uls = document.getElementsByTagName("ul");
  
  ul.id = "ul" + (uls.length + 1);
  
  base.appendChild(ul);
  
  var i = 0;
  
  for(var key in options){
    var li = document.createElement("li");
    li.style.color = "black";
    li.style.listStyle = "none";
    li.style.paddingLeft = "5px";
    li.style.paddingRight ="5px";
    li.style.marginTop = "5px";
    li.style.marginBottom = "5px";
    li.style.fontFamily = '"Nimbus Sans L","Arial Narrow",sans-serif';
    li.style.fontSize = "1.2em";
    li.style.padding = "10px";
    li.style.cursor = "pointer";
    li.setAttribute("target", ul.id);
    li.setAttribute("collapseonclick", collapseOnClick);
    li.setAttribute("parent", id);
    li.setAttribute("action", action);
    
    li.setAttribute("tag", (i % 2 > 0 ? "odd" : "even"));
    
    if(selected[key]){
      
      li.style.backgroundColor = "lightblue";
      li.setAttribute("selecttag", true);
      li.style.color = "black";
      
    } else {
      
      li.style.backgroundColor = (i % 2 > 0 ? "#eee" : "");
      
    }
    
    li.onmouseover = function(){
      if(this.getAttribute("selecttag") == null){
        this.style.backgroundColor = "#999";
        this.style.color = "#eee";
      }
    }
    
    li.onmouseout = function(){
      if(this.getAttribute("selecttag") == null){
        if(this.getAttribute("tag") == "odd"){
          this.style.backgroundColor = "#eee";
        } else {
          this.style.backgroundColor = "";
        }
        this.style.color = "#000";
      }
    }
    
    li.setAttribute("value", key);
    li.innerHTML = options[key];       
    
    ul.appendChild(li);
    
    switch(optionType.toLowerCase()){
      case "single":
        actOnSingle(li, target1, target2);
        break;
      case "multiple":
        actOnMultiple(li, target1, target2);      
        break;
    }
    
    i++;
  }
  
  return ul;
}

function actOnSingle(li, target1, target2){
  if(li == undefined || target1 == undefined || target2 == undefined){
    return;
  }

  li.onmousedown = function(){
    if(this.getAttribute("target") != null){
      if(__$(this.getAttribute("target"))){
        var opts = __$(this.getAttribute("target")).children;
        
        for(var i = 0; i < opts.length; i++){
          if(opts[i].getAttribute("selecttag") != null){
            opts[i].removeAttribute("selecttag");
            opts[i].style.backgroundColor = (opts[i].getAttribute("tag") == "odd" ? "#eee" : "");
            
            target1.value = "";
            target2.value = "";
          }
        }
      }
      
      this.setAttribute("selecttag", true);
      this.style.backgroundColor = "lightblue";
      this.style.color = "black";
      target1.value = this.innerHTML;
      target2.value = this.getAttribute("value");
      
      if(this.getAttribute("collapseonclick") != null && this.getAttribute("collapseonclick") == "true"){
        
        eval(this.getAttribute("action"));
        
        document.body.removeChild(__$("keyboard"));
    
      } else if(this.getAttribute("action")!= null){
                
        eval(this.getAttribute("action"));        
        
      }
    }
  }
}

function actOnMultiple(li, target1, target2){
  if(li == undefined || target1 == undefined || target2 == undefined){
    return;
  }

  li.onmousedown = function(){
    var t1 = target1.value.split(";");
    var t2 = [];
    var opts = target2.options;
    
    for(var i = 0; i < opts.length; i++){
      
      if(opts[i].selected){
        
        t2.push(opts[i].value);
        
      }
      
    }
    
    var h1 = {};
    var h2 = {};
    
    for(var i = 0; i < t1.length; i++){
      
      if(t1[i].trim().length > 0)
        h1[t1[i]] = true; 
      
      if(t2[i] != undefined && t2[i].trim().length > 0)
        h2[t2[i]] = true;
      
    }
    
    if(this.getAttribute("selecttag") != null){
      
      this.removeAttribute("selecttag");
      this.style.backgroundColor = (this.getAttribute("tag") == "odd" ? "#eee" : "");
    
      delete h1[this.innerHTML];
      delete h2[this.getAttribute("value")];
    
    } else {
      this.setAttribute("selecttag", true);
      this.style.backgroundColor = "lightblue";
      this.style.color = "black";
      
      h1[this.innerHTML] = true;
      h2[this.getAttribute("value")] = true;
    }
    
    var result1 = "";
    var result2 = "";
    
    for(var i in h1){
    
      result1 += i + ";";
      
    }
    
    for(var i = 0; i < opts.length; i++){
    
      if(h2[opts[i].value]){
        
        opts[i].selected = true;
        
      } else {
        
        opts[i].selected = false;
        
      }
      
    }
    
    target1.value = result1;
    // target2.value = result2;
    
  }
}

function addLabel(parent, text, size, color){
  if(parent == undefined || text == undefined){
    return;
  }
  
  if(color == undefined){
    color = "black";
  }
  
  if(size == undefined){
    size = "1em";
  }
  
  var lbl = document.createElement("label");
  lbl.style.color = color;
  lbl.style.fontSize = size;
  lbl.innerHTML = text;
  
  parent.appendChild(lbl);
  
  return lbl;
}

function addButton(parent, text, color){
  if(parent == undefined || text == undefined){
    return;
  }
  
  if(color == undefined){
    color = "blue";
  }
  
  var _button = document.createElement("button");
  _button.style.margin = "3px";
  _button.innerHTML = text;
  
  switch(color.toLowerCase()){
    case "green":
      _button.className = "button green";
      break;
    case "red":
      _button.className = "button red";
      break;
    case "gray":
      _button.className = "button gray";
      break;
    case "orange":
      _button.className = "button orange";
      break;
    default:
      _button.className = "button blue";
      break;
  }
  
  parent.appendChild(_button);
  
  return _button;
}

function greenButton(btn){
  if(btn == undefined){
    return;
  }
    
  btn.style.border = "1px solid #34740e";  
  btn.style.borderRadius = "10px";
  btn.style.fontSize = "28px";
  btn.style.fonFamily = "arial helvetica, sans-serif";
  btn.style.padding = "10px 10px 10px 10px";
  btn.style.textDecoration = "none";
  btn.style.display = "inline-block";
  btn.style.textShadow = "-1px -1px 0 rgba(0,0,0,0.3)";
  btn.style.fontWeight = "bold";
  btn.style.color = "#FFFFFF";
  btn.style.backgroundColor = "#4ba614";
  btn.style.backgroundImage = "-moz-linear-gradient(top, #4ba614, #008c00)";
  
  btn.onmouseout = function(){
    this.style.border = "1px solid #34740e";
    this.style.backgroundColor = "#4ba614";
    this.style.backgroundImage = "-moz-linear-gradient(top, #4ba614, #008c00)";
  }
  
  btn.onmouseover = function(){
    this.style.border = "1px solid #224b09";
    this.style.backgroundColor = "#36780f";
    this.style.backgroundImage = "-moz-linear-gradient(top, #36780f, #005900)";
  }
}

function redButton(btn){
  if(btn == undefined){
    return;
  }
    
  btn.style.border = "1px solid #72021c";  
  btn.style.borderRadius = "10px";
  btn.style.fontSize = "28px";
  btn.style.fonFamily = "arial helvetica, sans-serif";
  btn.style.padding = "10px 10px 10px 10px";
  btn.style.textDecoration = "none";
  btn.style.display = "inline-block";
  btn.style.textShadow = "-1px -1px 0 rgba(0,0,0,0.3)";
  btn.style.fontWeight = "bold";
  btn.style.color = "#FFFFFF";
  btn.style.backgroundColor = "#a90329";
  btn.style.backgroundImage = "-moz-linear-gradient(top, #a90329, #6d0019)";
  
  btn.onmouseout = function(){
    this.style.border = "1px solid #72021c";
    this.style.backgroundColor = "#a90329";
    this.style.backgroundImage = "-moz-linear-gradient(top, #a90329, #6d0019)";
  }
  
  btn.onmouseover = function(){
    this.style.border = "1px solid #450111";
    this.style.backgroundColor = "#77021d";
    this.style.backgroundImage = "-moz-linear-gradient(top, #77021d, #3a000d)";
  }
}

function grayButton(btn){
  if(btn == undefined){
    return;
  }
    
  btn.style.border = "1px solid #ccc";  
  btn.style.borderRadius = "10px";
  btn.style.fontSize = "28px";
  btn.style.fonFamily = "arial helvetica, sans-serif";
  btn.style.padding = "10px 10px 10px 10px";
  btn.style.textDecoration = "none";
  btn.style.display = "inline-block";
  btn.style.textShadow = "-1px -1px 0 rgba(0,0,0,0.3)";
  btn.style.fontWeight = "bold";
  btn.style.color = "#FFFFFF";
  btn.style.backgroundColor = "#a7cfdf";
  btn.style.backgroundImage = "-moz-linear-gradient(top, #ccc, #999)";
  
  btn.onmouseout = function(){
    this.style.border = "1px solid #ccc";
    this.style.backgroundColor = "#ccc";
    this.style.backgroundImage = "-moz-linear-gradient(top, #ccc, #999)";
  }
  
  btn.onmouseover = function(){
    this.style.border = "1px solid #ccc";
    this.style.backgroundColor = "#ddd";
    this.style.backgroundImage = "-moz-linear-gradient(top, #333, #ccc)";
  }
    
  btn.onmousedown = function(){}
  
}

function blueButton(btn){
  if(btn == undefined){
    return;
  }
    
  btn.style.border = "1px solid #7eb9d0";  
  btn.style.borderRadius = "10px";
  btn.style.fontSize = "28px";
  btn.style.fonFamily = "arial helvetica, sans-serif";
  btn.style.padding = "10px 10px 10px 10px";
  btn.style.textDecoration = "none";
  btn.style.display = "inline-block";
  btn.style.textShadow = "-1px -1px 0 rgba(0,0,0,0.3)";
  btn.style.fontWeight = "bold";
  btn.style.color = "#FFFFFF";
  btn.style.backgroundColor = "#a7cfdf";
  btn.style.backgroundImage = "-moz-linear-gradient(top, #a7cfdf, #23538a)";
  
  btn.onmouseout = function(){
    this.style.border = "1px solid #7eb9d0";
    this.style.backgroundColor = "#a7cfdf";
    this.style.backgroundImage = "-moz-linear-gradient(top, #a7cfdf, #23538a)";
  }
  
  btn.onmouseover = function(){
    this.style.border = "1px solid #5ca6c4";
    this.style.backgroundColor = "#82bbd1";
    this.style.backgroundImage = "-moz-linear-gradient(top, #82bbd1, #193b61)";
  }
}

function loadPage(section){
  if(isNaN(section))
    return;
  
  currentPage = section;
  
  if(__$("__content")){
    
    __$("__content").innerHTML = "";
    
  } else {
    
    var content = document.createElement("div");
    content.id = "__content";
    content.style.width = (window.innerWidth - 12) + "px";
    content.style.height = (window.innerHeight - 12) + "px";
    content.style.border = "1px solid #000";
    
    document.body.appendChild(content);
    
    document.body.style.margin = "5px";
    
    document.body.onresize = function(){
      
      if(__$("__content")){
        
        __$("__content").style.width = (window.innerWidth - 12) + "px";
        
        __$("__content").style.height = (window.innerHeight - 12) + "px";
        
      }
      
      if(__$("main-content-area")){
        
        __$("main-content-area").style.height = (window.innerHeight - 40 - 70 - 360) + "px";
        
        
      }
      
    }
    
  }
  
  var main = document.createElement("div");
  main.style.display = "table";
  // main.style.border = "1px solid #000";
  main.style.width = "100%";
  main.style.height = "100%";
  main.style.borderSpacing = "5px";
  
  __$("__content").appendChild(main);
    
  var row0 = document.createElement("div");
  row0.style.display = "table-row";
  
  main.appendChild(row0);
  
  var cell0_1 = document.createElement("div");
  cell0_1.style.display = "table-cell";
  cell0_1.style.borderBottom = "1px solid #3465a4";
  cell0_1.style.color = "#3465a4";
  cell0_1.style.overflow = "hidden";
  cell0_1.style.fontSize = "48px";
  cell0_1.style.height = "70px";
  cell0_1.innerHTML = fieldsets[section].getElementsByTagName("legend")[0].innerHTML;
  
  row0.appendChild(cell0_1);
  
  var row1 = document.createElement("div");
  row1.style.display = "table-row";
  
  main.appendChild(row1);
  
  var cell1_1 = document.createElement("div");
  cell1_1.style.display = "table-cell";
  cell1_1.style.borderBottom = "1px solid #3465a4";
  
  row1.appendChild(cell1_1);
  
  var row2 = document.createElement("div");
  row2.style.display = "table-row";
  
  main.appendChild(row2);
  
  var cell2_1 = document.createElement("div");
  cell2_1.style.display = "table-cell";
  cell2_1.style.height = "360px";
  
  row2.appendChild(cell2_1);
  
  var table = document.createElement("div");
  table.style.display = "table";
  table.style.width = "100%";
  table.style.height = "100%";
  
  cell2_1.appendChild(table);
  
  var row = document.createElement("div");
  row.style.display = "table-row";
  
  table.appendChild(row);
  
  var stage = document.createElement("div");
  stage.style.display = "table-cell";
  stage.style.border = "1px solid #3465a4";
  stage.style.overflow = "hidden";
  stage.style.borderRadius = "10px";
  stage.innerHTML = "&nbsp;";
  stage.id = "stage";
  stage.style.textAlign = "center";
  stage.style.verticalAlign = "middle";
  
  row.appendChild(stage);
  
  var buttons = document.createElement("div");
  buttons.style.display = "table-cell";
  buttons.style.border = "1px solid #3465a4";
  buttons.style.overflow = "hidden";
  buttons.style.borderRadius = "10px";
  buttons.style.width = "250px";
  buttons.style.height = "100%";
  buttons.style.verticalAlign = "middle";
  
  row.appendChild(buttons);
  
  var btntable = document.createElement("div");
  btntable.style.display = "table";
  btntable.style.margin = "auto";
  btntable.style.borderSpacing = "5px";
  btntable.style.width = "100%";
  
  buttons.appendChild(btntable);
  
  var brow0 = document.createElement("div");
  brow0.style.display = "table-row";
  
  btntable.appendChild(brow0);
    
  var bcell0 = document.createElement("div");
  bcell0.style.display = "table-cell";
  bcell0.id = "btn0";
  
  brow0.appendChild(bcell0);
  
  var brow1 = document.createElement("div");
  brow1.style.display = "table-row";
  
  btntable.appendChild(brow1);
    
  var bcell1 = document.createElement("div");
  bcell1.style.display = "table-cell";
  bcell1.id = "btn1";
  
  brow1.appendChild(bcell1);
  
  var brow2 = document.createElement("div");
  brow2.style.display = "table-row";
  
  btntable.appendChild(brow2);
  
  var bcell2 = document.createElement("div");
  bcell2.style.display = "table-cell";
  bcell2.id = "btn2";
  
  brow2.appendChild(bcell2);
  
  var brow3 = document.createElement("div");
  brow3.style.display = "table-row";
  
  btntable.appendChild(brow3);
  
  var bcell3 = document.createElement("div");
  bcell3.style.display = "table-cell";
  bcell3.id = "btn3";
  
  brow3.appendChild(bcell3);
  
  btnCancel = addButton(__$("btn0"), "Cancel", "red");
  
  btnClear = addButton(__$("btn1"), "Clear", "blue");
  
  btnBack = addButton(__$("btn2"), "Back", "gray");
  
  btnNext = addButton(__$("btn3"), "Next", "green");
  
  if(btnCancel){
      btnCancel.style.width = "98%";
      
      btnCancel.onmousedown = function(){
        
        if(typeof(cancelDestination) != "undefined"){
          
          window.location = cancelDestination;
          
        }
        
      }
  }
  
  if(btnClear){
      btnClear.style.width = "98%";
  }
  
  if(btnBack){
      btnBack.style.width = "98%";
  }
  
  if(btnNext){
      btnNext.style.width = "98%";
  }
  
  var fields = fieldsets[section].elements;
  
  var mainContentArea = document.createElement("div");  
  mainContentArea.style.overflowY = "auto";
  mainContentArea.id = "main-content-area";
  mainContentArea.style.height = (window.innerHeight - 40 - 70 - 360) + "px";
  mainContentArea.style.width = "100%";
  
  cell1_1.appendChild(mainContentArea);
  
  var work = document.createElement("div");
  work.id = "work";
  work.style.display = "table";
  work.style.width = "99.5%";
  
  mainContentArea.appendChild(work);
  
  for(var i = 0; i < fields.length; i++){
          
    if(fields[i].type == "radio" && __$("btn" + fields[i].id)){
      
      continue;
      
    }      
          
    var row = document.createElement("div");
    row.style.display = "table-row";
    
    work.appendChild(row);
    
    for(var j = 0; j < 4; j++){
      var cell = document.createElement("div");
      cell.style.display = "table-cell";
      
      switch(j){
        case 0: 
          cell.style.width = "40%";
          cell.style.textAlign = "right";
          cell.style.padding = "20px";
          cell.id = "cell" + i + "." + j;
          
          var label = addLabel(cell, fields[i].label.innerHTML, textSize, "#333");
          
          break;
        case 1: 
          cell.innerHTML = "&nbsp;";
          cell.style.width = "50px";
          cell.style.textAlign = "center";
          cell.style.paddingTop = "20px";
          cell.style.color = "red";
          cell.style.fontSize = "48px";
          cell.style.verticalAlign = "middle";
          cell.id = "cell" + i + "." + j;       
          break;
        case 3: 
          cell.innerHTML = "&nbsp;";
          cell.style.width = "80px";
          cell.style.textAlign = "center";
          cell.style.verticalAlign = "middle";
          cell.id = "cell" + i + "." + j;    
          break;
        case 2:  
          cell.id = "cell" + i + "." + j;  
          
          if(fields[i].type == "radio"){
            
            var labels = document.getElementsByTagName('LABEL');
            for (var s = 0; s < labels.length; s++) {
                if (labels[s].htmlFor != '' && labels[s].htmlFor == fields[i].name) {
                  
                  if(__$("cell" + i + ".0")){
                    
                    __$("cell" + i + ".0").innerHTML =  "";
                    
                    var label = addLabel(__$("cell" + i + ".0"), labels[s].innerHTML, textSize, "#333");
                    
                    break;
                    
                  }
                  
                }
            }
            
            var btns = document.getElementsByName(fields[i].name);
            
            var choiceTable = document.createElement("div");
            choiceTable.style.display = "table";
            
            cell.appendChild(choiceTable);
            
            var choiceRow = document.createElement("table-row");
            choiceRow.style.display = "table-row";
            
            choiceTable.appendChild(choiceRow);
            
            for(var r = 0; r < btns.length; r++){
              
              var choiceCell = document.createElement("table-cell");
              choiceCell.style.display = "table-cell";
              
              choiceRow.appendChild(choiceCell);
              
              var btnChoice = addButton(choiceCell, btns[r].label.innerHTML, (btns[r].checked ? "orange" : "blue"));
              
              btnChoice.name = "btn" + btns[r].name;
              
              btnChoice.id = "btn" + btns[r].id;
              
              btnChoice.setAttribute("target", btns[r].id);
              
              btnChoice.setAttribute("pos", i);
              
              btnChoice.setAttribute("section", section);
              
              btnChoice.onmousedown = function(){
                
                var group = document.getElementsByName(this.name);
                
                for(var g = 0; g < group.length; g++){
                  
                  group[g].className = "button blue";
                  
                }
                
                if(__$(this.getAttribute("target"))){
                  
                  __$(this.getAttribute("target")).click();
                
                  this.className = "button orange";
                  
                }
                                  
                cursorPos = parseInt(this.getAttribute("pos"));
                
                var section = parseInt(this.getAttribute("section"));
                
                navigateTo(cursorPos, section);              
                
              }
              
            }
            
          } else {
            
            var fieldtype = fields[i].getAttribute("fieldtype");
            
            var txt = addTextbox(cell, "text", fields[i].id);
            
            txt.style.fontSize = textSize;
              
            txt.id = "textFor" + fields[i].id;
            
            txt.setAttribute("target", fields[i].id);
            
            txt.setAttribute("pos", i);
              
            txt.setAttribute("section", section);
              
            if(fields[i].tagName.toLowerCase() == "select" && fields[i].type.toLowerCase() == "select-multiple"){
              
              var values = "";
              
              var opts = fields[i].options;
              
              for(var k = 0; k < opts.length; k++){
                
                if(opts[k].selected){
                  
                  values += opts[k].innerHTML + ";";
                  
                }
                
              }
              
              txt.value = values;
              
            } else {
              
              txt.value = fields[i].value;
              
            }  
              
            txt.onfocus = function(){
              
              cursorPos = parseInt(this.getAttribute("pos"));
              
              var section = parseInt(this.getAttribute("section"));
              
              navigateTo(cursorPos, section);
              
            }
          
          }
            
          break;
      }
      
      row.appendChild(cell);
    }
    
  }
  
  cursorPos = 0;
  
  navigateTo(cursorPos, section);
}

function navigateTo(pos, section){
  
  var fields = fieldsets[section].elements;
  
  var fieldtype = fields[pos].getAttribute("fieldtype");
  
  if(!__$("cursor")){
    
    var cursor = document.createElement("label");
    cursor.id = "cursor";
    cursor.innerHTML = "*";
    
    document.body.appendChild(cursor);
    
  }
  
  if(__$("cell" + pos + ".1")){
    
    __$("cell" + pos + ".1").appendChild(__$("cursor"));
    
  }
  
  if(__$("stage") && __$("textFor" + fields[pos].id)){
    
    clearTimeout(tracker);
    
    setTimeout("checkChanges('" + fields[pos].id + "')", 500);
    
    __$("stage").style.verticalAlign = "middle";
        
    if(btnClear != null){
      
      btnClear.setAttribute("pos", pos);
      
      btnClear.setAttribute("section", section);
      
      btnClear.onmousedown = function(){
        
        if(this.getAttribute("pos") != null && this.getAttribute("section") != null){
          
          var pos = parseInt(this.getAttribute("pos"));
          
          var section = parseInt(this.getAttribute("section"));
          
          var fields = fieldsets[section].elements;
          
          __$("textFor" + fields[pos].id).value = "";
          
          if(fields[pos].tagName.toLowerCase() == "select"){
        
            var opts = fields[pos].options; 
            
            for(var i = 0; i < opts.length; i++){
              
              opts[i].selected = false;
              
            }
            
          } else {
            
            fields[pos].value = "";
            
          }
          
          navigateTo(pos, section);
        }
        
      }
      
    }
        
    if(btnBack != null){
            
      btnBack.setAttribute("pos", pos);
      
      btnBack.setAttribute("section", section);      
      
      if((section > 0 && pos > 0) || (section == 0 && pos > 0)){
        
        btnBack.className = "button blue";
        
        btnBack.onmousedown = function(){
                    
          var pos = parseInt(this.getAttribute("pos")) - 1;
          
          var section = parseInt(this.getAttribute("section"));
          
          navigateTo(pos, section);
          
        }
        
      } else if(section > 0 && pos == 0){
        
        btnBack.className = "button blue";
        
        btnBack.onmousedown = function(){
               
          var section = parseInt(this.getAttribute("section")) - 1;
          
          loadPage(section);
          
        }
        
      } else {
        
        btnBack.className = "button gray";
        
        btnBack.onmousedown = function(){};
        
      }
      
    }
           
    if(btnNext != null){
            
      btnNext.setAttribute("pos", pos);
      
      btnNext.setAttribute("section", section);      
      
      if(section < fieldsets.length && pos < fields.length - 1){
        
        btnNext.innerHTML = "Next";
        
        btnNext.onmousedown = function(){
                
          var pos = parseInt(this.getAttribute("pos")) + 1;
          
          var section = parseInt(this.getAttribute("section"));
          
          navigateTo(pos, section);
          
        };
        
      } else if((section < fieldsets.length - 1 && pos == fields.length - 1) || (section == fieldsets.length - 1 && pos < fields.length - 1)){
        
        btnNext.innerHTML = "Next";        
        
        btnNext.onmousedown = function(){
             
          if(!incomplete){                      
            var section = parseInt(this.getAttribute("section")) + 1;
            
            loadPage(section);          
          }
          
        };
        
      } else {
        
        btnNext.innerHTML = "Finish";
        
        btnNext.onmousedown = function(){
        
            if(!incomplete){  
              
              document.forms[0].submit();
              
            }
          
        };
        
      }
      
    }
        
    if(fieldtype != null){
                  
      switch(fieldtype.toLowerCase()){
        case "age":
          addAge(__$("stage"), __$("textFor" + fields[pos].id), (!isNaN((new Date(__$("textFor" + fields[pos].id).value.trim())).getDay()) ? __$("textFor" + fields[pos].id).value.trim() : undefined), "Specify Actual Date of Birth", "Age");
          
          break;
        case "select":
          
          var opts = fields[pos].options; 
          
          var options = {};
          
          var selected = {};
          
          __$("textFor" + fields[pos].id).value = "";
          
          var optionType = (fields[pos].type.toLowerCase() == "select-multiple" ? "multiple" : "single");
          
          for(var i = 0; i < opts.length; i++){
            
            if(opts[i].innerHTML.trim().length){
              
              options[opts[i].value] = opts[i].innerHTML;
              
              if(opts[i].selected){
                
                selected[opts[i].value] = true;
                
                __$("textFor" + fields[pos].id).value += opts[i].innerHTML + (optionType == "multiple" ? ";" : "");
                
              }
              
            } 
            
          }
          
          __$("stage").innerHTML = "";
          
          __$("stage").style.verticalAlign = "top";
          
          // addCombo(parent, options, optionType, target1, target2, collapseOnClick, id, action, selected)
          var combo = addCombo(__$("stage"), options, optionType, __$("textFor" + fields[pos].id), fields[pos], false, (fields[pos].getAttribute("onchange") != null ? fields[pos].getAttribute("onchange") : undefined), undefined, selected);
          
          combo.style.fontSize = textSize;
          
          combo.style.textAlign = "left";
          
          break;
        case "date":
          __$("stage").innerHTML = "";
          
          var ctrl = addDate(__$("stage"), __$("textFor" + fields[pos].id), __$("textFor" + fields[pos].id).value);
          
          ctrl.style.margin = "auto";
          
          break;
        case "number":
          showFixedKeyboard(__$("textFor" + fields[pos].id), __$("stage"), {"/":true,":":true, "abc":true, ".":true}, true)
      
          break;
        case "decimal":
          showFixedKeyboard(__$("textFor" + fields[pos].id), __$("stage"), {"/":true,":":true, "abc":true}, true)
      
          break;
        default:          
          showFixedKeyboard(__$("textFor" + fields[pos].id), __$("stage"), {"/":true,":":true})
      
          break;      
      }
      
    } else {
            
      if(fields[pos].tagName.toLowerCase() == "select"){
        
        var opts = fields[pos].options; 
        
        var options = {};
        
        var selected = {};
        
        __$("textFor" + fields[pos].id).value = "";
        
        var optionType = (fields[pos].type.toLowerCase() == "select-multiple" ? "multiple" : "single");
        
        for(var i = 0; i < opts.length; i++){
          
          if(opts[i].innerHTML.trim().length){
            
            options[opts[i].value] = opts[i].innerHTML;
            
            if(opts[i].selected){
              
              selected[opts[i].value] = true;
              
              __$("textFor" + fields[pos].id).value += opts[i].innerHTML + (optionType == "multiple" ? ";" : "");
              
            }
            
          } 
          
        }
        
        __$("stage").innerHTML = "";
        
        __$("stage").style.verticalAlign = "top";
        
        var combo = addCombo(__$("stage"), options, optionType, __$("textFor" + fields[pos].id), fields[pos], false, undefined, (fields[pos].getAttribute("onchange") != null ? fields[pos].getAttribute("onchange") : undefined), selected);
        
        combo.style.fontSize = textSize;
        
        combo.style.textAlign = "left";
        
      } else {
      
        showFixedKeyboard(__$("textFor" + fields[pos].id), __$("stage"), {"/":true,":":true})
      
      }
        
    }
    
  } else {    
          
    if(btnClear != null){
      
      btnClear.setAttribute("pos", pos);
      
      btnClear.setAttribute("section", section);
      
      btnClear.onmousedown = function(){
        
        if(this.getAttribute("pos") != null && this.getAttribute("section") != null){
          
          var pos = parseInt(this.getAttribute("pos"));
          
          var section = parseInt(this.getAttribute("section"));
          
          var fields = fieldsets[section].elements;
          
          if(fields[pos].type == "radio"){
            
            var radios = document.getElementsByName(fields[pos].name);
            
            for(var i = 0; i < radios.length; i++){
              
              radios[i].checked = false;
              
              if(__$("btn" + radios[i].id)){
                
                __$("btn" + radios[i].id).className = "button blue";
                
              }
              
            }
            
          }
          
          // navigateTo(pos, section);
        }
        
      }
      
    }
           
    if(btnBack != null){
                
      if(fields[pos].type == "radio"){
        if(fields[pos - 1]){
          var radios = document.getElementsByName(fields[pos - 1].name);
                
          btnBack.setAttribute("step", radios.length);
        }
      } 
      
      btnBack.setAttribute("pos", pos);        
     
      btnBack.setAttribute("section", section);      
      
      if((section > 0 && pos > 0) || (section == 0 && pos > 0)){
        
        btnBack.className = "button blue";
        
        btnBack.onmousedown = function(){
                    
          var pos = parseInt(this.getAttribute("pos")) - (this.getAttribute("step") != null ? parseInt(this.getAttribute("step")) : 1);
          
          var section = parseInt(this.getAttribute("section"));
          
          navigateTo(pos, section);
          
        }
        
      } else if(section > 0 && pos == 0){
        
        btnBack.className = "button blue";
        
        btnBack.onmousedown = function(){
               
          var section = parseInt(this.getAttribute("section")) - 1;
          
          loadPage(section);
          
        }
        
      } else {
        
        btnBack.className = "button gray";
        
        btnBack.onmousedown = function(){};
        
      }
      
    }
      
    if(btnNext != null){
            
      if(fields[pos].type == "radio"){
        var radios = document.getElementsByName(fields[pos].name);
              
        btnNext.setAttribute("pos", pos + radios.length - 1);
      } else {
        
        btnNext.setAttribute("pos", pos);
        
      }
    
      btnNext.setAttribute("section", section);      
      
      if(section < fieldsets.length && parseInt(btnNext.getAttribute("pos")) < fields.length - 1){
        
        btnNext.innerHTML = "Next";
        
        btnNext.onmousedown = function(){
                
          var pos = parseInt(this.getAttribute("pos")) + 1;
          
          var section = parseInt(this.getAttribute("section"));
          
          navigateTo(pos, section);
          
        };
        
      } else if((section < fieldsets.length - 1 && parseInt(btnNext.getAttribute("pos")) == fields.length - 1) || (section == fieldsets.length - 1 && parseInt(btnNext.getAttribute("pos")) < fields.length - 1)){
        
        btnNext.innerHTML = "Next";        
        
        btnNext.onmousedown = function(){
             
          if(!incomplete){                      
            var section = parseInt(this.getAttribute("section")) + 1;
            
            loadPage(section);          
          }
          
        };
        
      } else {
        
        btnNext.innerHTML = "Finish";
        
        btnNext.onmousedown = function(){
        
            if(!incomplete){  
              
              document.forms[0].submit();
              
            }
          
        };
        
      }
      
    }        
    
  }
              
}

function checkChanges(id){
  
  clearTimeout(tracker);
    
  if(__$(id) && __$("textFor" + id)){
    
    if(__$(id).tagName.toLowerCase() == "select" && __$(id).type == "select-multiple"){
      
      var values = __$("textFor" + id).value.trim().split(";");
      
      var selected = {};
      
      for(var i = 0; i < values.length; i++){
        
        selected[values[i].trim()] = true;
        
      }
      
      var opts = __$(id).options;
      
      for(var i = 0; i < opts.length; i++){
        
        if(opts[i].innerHTML.trim() == selected[opts[i].innerHTML.trim()]){
          
          opts[i].selected = true;
          
        } else {
          
          opts[i].selected = false;
          
        }
        
      }
      
    } else {
      
      __$(id).value = __$("textFor" + id).value;
      
    }
    
  }
  
  setTimeout("checkChanges('" + id + "')", 1000);
  
}

function checkValidity(){
  
  clearTimeout(validityTmr);
  
  var fields = fieldsets[currentPage].elements;
  
  incomplete = false;
  
  for(var i = 0; i < fields.length; i++){
    
    if(fields[i].type == "radio"){
      
      var radios = document.getElementsByName(fields[i].name);
      
      var checked = false;
      
      for(var j = 0; j < radios.length; j++){
        
        if(radios[j].checked){
          
          checked = true;
          
          break;
          
        }
        
      }
      
      if(__$("cell" + i + ".3")){
        if(!checked){
          
          __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";
                
          incomplete = true;
          
        } else {
                  
          __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />";              
          
        }
      }
    
      // i = i + radios.length - 1;
            
    } else {
      
      if(fields[i].getAttribute("optional") == null){
        if(__$("textFor" + fields[i].id)){
          if(fields[i].getAttribute("regex") != null){
            
            if(__$("textFor" + fields[i].id).value.trim().match(fields[i].getAttribute("regex")) == null){
              
              __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";
              
              incomplete = true;
              
            } else {
              
              __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />";
              
            }
            
          } else {
            if(__$("textFor" + fields[i].id).value.trim().length == 0){
              
              __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";
              
              incomplete = true;
              
            } else if(fields[i].getAttribute("fieldtype") != null && fields[i].getAttribute("fieldtype").toLowerCase() == "number" && __$("textFor" + fields[i].id).value.trim().match(/^\d+$/) == null){
            
              __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";
              
              incomplete = true;
              
            } else if(fields[i].getAttribute("fieldtype") != null && (fields[i].getAttribute("fieldtype").toLowerCase() == "date" || fields[i].getAttribute("fieldtype").toLowerCase() == "age")){
            
              if(__$("textFor" + fields[i].id).value.trim().match(/^\d+\/[A-Za-z]{3}\/\d{4}$/) == null){
                
                __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";
                
                incomplete = true;
                
              } else {
                
                __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />"
              
              }
              
            } else {
              
              __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />"
              
            }
          }
        }
      } else {
        
        if(__$("textFor" + fields[i].id)){
          if(fields[i].getAttribute("regex") != null){
            
            if(__$("textFor" + fields[i].id).value.trim().length > 0){
              if(__$("textFor" + fields[i].id).value.trim().match(fields[i].getAttribute("regex")) == null){
                
                __$("cell" + i + ".3").innerHTML = "<img src='" + imgUnTick + "' height=60 />";
              
                incomplete = true;
                
              } else {
                
                __$("cell" + i + ".3").innerHTML = "<img src='" + imgTick + "' height=60 />"
                
              }
            } else {
              
              __$("cell" + i + ".3").innerHTML = "&nbsp;";
              
            }
            
          } else {
            if(__$("textFor" + fields[i].id).value.trim().length == 0){
              
              __$("cell" + i + ".3").innerHTML = "&nbsp;";
              
            } 
          }
        }
        
      }
      
    }
  }

  validityTmr = setTimeout("checkValidity()", 1000);
  
}

init();












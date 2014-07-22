var styles = "body {overflow: hidden; margin: 0px; background-color: #4a7ced; -moz-user-select: none; font-family: Helvetica; min-width: 950px; min-height: 673px;}div { -moz-user-select: none;}.clicked {border: 3px inset rgb(73,93,135); color: rgb(73,93,135); text-align: center; vertical-align: middle; font-size: 24px; height: 80px; border-bottom-right-radius: 80px; border-top-right-radius: 100px;cursor: pointer;}.normal {border: 3px outset rgb(73,93,135); color: rgb(73,93,135); text-align: center; vertical-align: middle; font-size: 24px; height: 80px; border-bottom-right-radius: 100px; border-top-right-radius: 100px; background-color: rgba(73,93,135,0.95); color: #fff;cursor: pointer;}	button {  font-size: 1em;  padding: 15px;  min-width: 120px;  cursor: pointer;  min-height: 75px;  border-radius: 10px !important;  margin: 3px;}.button:active {background-color: #f3e7c0;}.blue{   border:1px solid #7eb9d0; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;   background-color: #a7cfdf; background-image: -webkit-gradient(linear, left top, left bottom, from(#a7cfdf), to(#23538a));   background-image: -webkit-linear-gradient(top, #a7cfdf, #23538a);   background-image: -moz-linear-gradient(top, #a7cfdf, #23538a);   background-image: -ms-linear-gradient(top, #a7cfdf, #23538a);   background-image: -o-linear-gradient(top, #a7cfdf, #23538a);   background-image: linear-gradient(to bottom, #a7cfdf, #23538a);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#a7cfdf, endColorstr=#23538a);}.blue:hover{   border:1px solid #5ca6c4;   background-color: #82bbd1; background-image: -webkit-gradient(linear, left top, left bottom, from(#82bbd1), to(#193b61));   background-image: -webkit-linear-gradient(top, #82bbd1, #193b61);   background-image: -moz-linear-gradient(top, #82bbd1, #193b61);   background-image: -ms-linear-gradient(top, #82bbd1, #193b61);   background-image: -o-linear-gradient(top, #82bbd1, #193b61);   background-image: linear-gradient(to bottom, #82bbd1, #193b61);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#82bbd1, endColorstr=#193b61);}.green{   border:1px solid #34740e;    -webkit-border-radius: 3px;    -moz-border-radius: 3px;   border-radius: 3px;   font-size:28px;   font-family:arial, helvetica, sans-serif;    padding: 10px 10px 10px 10px;    text-decoration:none;    display:inline-block;   text-shadow: -1px -1px 0 rgba(0,0,0,0.3);   font-weight:bold; color: #FFFFFF;   background-color: #4ba614;    background-image: -webkit-gradient(linear, left top, left bottom, from(#4ba614), to(#008c00));   background-image: -webkit-linear-gradient(top, #4ba614, #008c00);   background-image: -moz-linear-gradient(top, #4ba614, #008c00);   background-image: -ms-linear-gradient(top, #4ba614, #008c00);   background-image: -o-linear-gradient(top, #4ba614, #008c00);   background-image: linear-gradient(to bottom, #4ba614, #008c00);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#4ba614, endColorstr=#008c00);}.green:hover{   border:1px solid #224b09;   background-color: #36780f; background-image: -webkit-gradient(linear, left top, left bottom, from(#36780f), to(#005900));   background-image: -webkit-linear-gradient(top, #36780f, #005900);   background-image: -moz-linear-gradient(top, #36780f, #005900);   background-image: -ms-linear-gradient(top, #36780f, #005900);   background-image: -o-linear-gradient(top, #36780f, #005900);   background-image: linear-gradient(to bottom, #36780f, #005900);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#36780f, endColorstr=#005900);}.red{   border:1px solid #72021c; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;   background-color: #a90329; background-image: -webkit-gradient(linear, left top, left bottom, from(#a90329), to(#6d0019));   background-image: -webkit-linear-gradient(top, #a90329, #6d0019);   background-image: -moz-linear-gradient(top, #a90329, #6d0019);   background-image: -ms-linear-gradient(top, #a90329, #6d0019);   background-image: -o-linear-gradient(top, #a90329, #6d0019);   background-image: linear-gradient(to bottom, #a90329, #6d0019);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#a90329, endColorstr=#6d0019);}.red:hover{   border:1px solid #450111;   background-color: #77021d; background-image: -webkit-gradient(linear, left top, left bottom, from(#77021d), to(#3a000d));   background-image: -webkit-linear-gradient(top, #77021d, #3a000d);   background-image: -moz-linear-gradient(top, #77021d, #3a000d);   background-image: -ms-linear-gradient(top, #77021d, #3a000d);   background-image: -o-linear-gradient(top, #77021d, #3a000d);   background-image: linear-gradient(to bottom, #77021d, #3a000d);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#77021d, endColorstr=#3a000d);}.gray{   border:1px solid #ccc; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:28px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;   background-color: #ccc; background-image: -webkit-gradient(linear, left top, left bottom, from(#ccc), to(#999));   background-image: -webkit-linear-gradient(top, #ccc, #999);   background-image: -moz-linear-gradient(top, #ccc, #999);   background-image: -ms-linear-gradient(top, #ccc, #999);   background-image: -o-linear-gradient(top, #ccc, #999);   background-image: linear-gradient(to bottom, #ccc, #999);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#ccc, endColorstr=#999);}.gray:hover{   border:1px solid #ccc;   background-color: #ddd; background-image: -webkit-gradient(linear, left top, left bottom, from(#333), to(#ccc));   background-image: -webkit-linear-gradient(top, #333, #ccc);   background-image: -moz-linear-gradient(top, #333, #ccc);   background-image: -ms-linear-gradient(top, #333, #ccc);   background-image: -o-linear-gradient(top, #333, #ccc);   background-image: linear-gradient(to bottom, #333, #ccc);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#333, endColorstr=#ccc);}.layer1 {position: absolute; top: 0px; left: 0px; border: 0px solid #000; width: 115%; height: 50%; z-index: 101; background-color: #4a7ced;}.layer2 {position: absolute; top: 40px; left: 0px; border: 0px solid #000; width: 115%; height: 50%; border:0px solid; border-top-right-radius: 1000px; z-index: 102; background-color: #fff;}.layer3 {position: absolute; top: 0px; left: 0px; border: 0px solid #000; width: 134%; height: 95%; border:0px solid; border-bottom-right-radius: 1000px; z-index: 99; background-color: #ff8010;}.layer4 {position: absolute; top: -4px; left: 0px; border: 0px solid #000; width: 130%; height: 95%; border:0px solid; border-bottom-right-radius: 1000px; z-index: 100; background-color: #fff;}.layer5 {position: absolute; top: 0px; left: 0px; border: 1px solid #000; width: 100%; height: 100%; overflow: hidden; background-color: rgba(255,255,255,0.2); z-index: 105;}.table1 {display: table; width: 100%; border-spacing: 10px;}.table2 {display: table; width: 95%; margin-left: 15px; border-spacing: 0px; margin-top: 10px;}.table3 {display: table; border-spacing: 5px; width: 100%;}.table4 {display: table; width: 98%; border-spacing: 1px; margin: 15px; height: 72%;}.table5 {display: table-cell; border-radius: 5px; border: 2px inset rgb(73,93,135); background-color: rgba(255,255,255,0.85); height: 100%;}.table6 {display: table; width: 315px;}.row {display: table-row;}.cell1 {display: table-cell; width: 520px; border-radius: 10px; border: 2px inset #495d87; border-bottom-left-radius: 150px; background-color: rgba(255,255,255,0.85); height: 120px;}.cellGender {display: table-cell; background-color: #c9d4ec; border-radius: 30px; padding: 5px; border: 2px solid #495d87; width: 40px; height: 40px;}.cell2 {display: table-cell; font-weight: bold; font-size: 28px; vertical-align: middle; border-bottom: 1px solid #999; padding-left: 10px;}.cell {display: table-cell;}.cell3 {display: table-cell; font-weight: bold; font-size: 12px; width: 120px;}.cell4 {display: table-cell; font-size: 12px;}.cell5 {display: table-cell; font-weight: bold; font-size: 12px; width: 100px;}.cell6 {display: table-cell; font-weight: bold; font-size: 12px;}.cell7 {display: table-cell; font-weight: bold; font-size: 12px;}.cell8 {display: table-cell; border-radius: 10px; border: 2px inset #495d87; background-color: rgba(255,255,255,0.85); border-top-right-radius: 150px;}.cell9 {display: table-cell; border: 1px ridge #eee; border-bottom-left-radius: 150px; border-top-right-radius: 150px; background-color: rgba(73,93,135,0.95); width: 200px; vertical-align: middle; text-align: center;}.div1 {font-size: 18px; color: #fff; font-family: Arial; margin: auto; }.div2 {width: 100%; height: 100px; position: absolute; bottom: 2px; left: 0px; z-index: 120; background-color: rgba(73,93,135,0.3); border-radius: 100px;}.frame1 {width: 100%; height: 100%; border: 0px solid #000;}.cell10 {display: table-cell; width: 320px; border: 0px ridge #ccc; border-bottom-right-radius: 60px; vertical-align: top;} .button:active {border:1px solid #5ca6c4 !important;background-color: #82bbd1 !important; background-image: -webkit-gradient(linear, left top, left bottom, from(#82bbd1), to(#cd8912)) !important;background-image: -webkit-linear-gradient(top, #82bbd1, #cd8912) !important;background-image: -moz-linear-gradient(top, #efb144, #cd8912) !important;background-image: -ms-linear-gradient(top, #efb144, #cd8912) !important;background-image: -o-linear-gradient(top, #efb144, #cd8912) !important;background-image: linear-gradient(to bottom, #efb144, #cd8912) !important;filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#efb144, endColorstr=#cd8912) !important;}";

var fields;
         
function __$(id){
  return document.getElementById(id);
}

function init(){
	
	var style = document.createElement("style");
	style.innerHTML = styles;
  
	document.head.appendChild(style);
  
	fields = {
		"demographics":{},
		"buttons":{},
		"tabs":{}
	  };
	  
	if(__$("patient-card")){
		
		var controls = __$("patient-card").getElementsByTagName("input");
		
		for(var i = 0; i < controls.length; i++){
			
			if(controls[i].type == "text"){
				
				fields["demographics"][controls[i].id] = controls[i].value;
				
			}
			
		}
		
	}
	
	if(__$("buttons")){
		
		var controls = __$("buttons").getElementsByTagName("button");
		
		for(var i = 0; i < controls.length; i++){
			
			fields["buttons"][controls[i].innerHTML] = controls[i].getAttribute("onmousedown");
				
		}
		
	}
  
	if(__$("tabs")){
		
		var controls = __$("tabs").options;
		
		for(var i = 0; i < controls.length; i++){
			
			fields["tabs"][controls[i].innerHTML] = controls[i].value;
				
		}
		
	}
  
	createPage(fields);
}

function createPage(fieldset){
	if(fieldset == undefined)
		return;
		
	if(__$("__content__")){
		document.body.removeChild(__$("__content__"));
	}
	
	var content = document.createElement("div");
	content.id = "__content__";
	
	document.body.appendChild(content);
	
	var controls = [
			{
				"control":"div",
				"class":"layer1",
				"content":"&nbsp;"
			},
			{
				"control":"div",
				"class":"layer2",
				"content":"&nbsp;"
			},
			{
				"control":"div",
				"class":"layer3",
				"content":"&nbsp;"
			},
			{
				"control":"div",
				"class":"layer4",
				"content":"&nbsp;"
			},
			{
				"control":"div",
				"class":"layer5",
				"content":[
						{
							"control":"div",
							"class":"table1",
							"content":[
								{
									"control":"div",
									"class":"row",
									"content":[
										{
											"control":"div",
											"class":"cell1",
											"content":[												
												{
													"control":"div",
													"class":"table2",
													"content":[
														{
															"control":"div",
															"class":"row",
															"content":[
																{
																	"control":"div",
																	"class":"cellGender",
																	"content":'<img src="images/' + (String(fieldset["demographics"]["gender"]).toLowerCase() == "m" ? "male" : "female") + '.png" height="40" />'
																},
																{
																	"control":"div",
																	"class":"cell2",
																	"content":(fieldset["demographics"]["name"])
																}
															]
														},
														{
															"control":"div",
															"class":"row",
															"content":[
																{
																	"control":"div",
																	"class":"cell",
																	"content":[]
																},
																{
																	"control":"div",
																	"class":"cell",
																	"content":[																		
																		{
																			"control":"div",
																			"class":"table3",
																			"content":[
																				{
																					"control":"div",
																					"class":"row",
																					"content":[
																						{
																							"control":"div",
																							"class":"cell3",
																							"content":"Accession Number"
																						},
																						{
																							"control":"div",
																							"class":"cell4",
																							"content":":"
																						},
																						{
																							"control":"div",
																							"class":"cell4",
																							"content":(fieldset["demographics"]["accession_number"])
																						},
																						{
																							"control":"div",
																							"class":"cell5",
																							"content":"Age"
																						},
																						{
																							"control":"div",
																							"class":"cell4",
																							"content":":"
																						},
																						{
																							"control":"div",
																							"class":"cell4",
																							"content":(fieldset["demographics"]["age"])
																						}
																					]
																				},
																				{
																					"control":"div",
																					"class":"row",
																					"content":[
																						{
																							"control":"div",
																							"class":"cell6",
																							"content":"Residence"
																						},{
																							"control":"div",
																							"class":"cell4",
																							"content":":"
																						},{
																							"control":"div",
																							"class":"cell4",
																							"content":(fieldset["demographics"]["residence"])
																						},{
																							"control":"div",
																							"class":"cell7",
																							"content":"Work-flow Status"
																						},{
																							"control":"div",
																							"class":"cell4",
																							"content":":"
																						},{
																							"control":"div",
																							"class":"cell4",
																							"content":(fieldset["demographics"]["workflow-status"])
																						}
																					]
																				}

																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											"control":"div",
											"class":"cell8",
											"content":"&nbsp;"
										},
										{
											"control":"div",
											"class":"cell9",
											"content":[
												{
													"control":"div",
													"class":"div1",
													"content":"HIV Testing<br/>&<br/>Counseling"
												}
											]
										}
									]
								}
							]
						},
						{
							"control":"div",
							"class":"table4",
							"content":[
								{
									"control":"div",
									"class":"row",
									"content":[
										{
											"control":"div",
											"class":"table5",
											"content":[
												{
													"control":"iframe",
													"class":"frame1",
													"content":""
												}
											]
										},
										{
											"control":"div",
											"class":"cell10",
											"content":[
												{
													"control":"div",
													"class":"table6",
													"content":[
														{
															"control":"div",
															"class":"row",
															"content":[
																{
																	"control":"div",
																	"class":"cell clicked",
																	"content":"Current Visit",
																	"actions":[
																		{"onmousedown":"var elements = document.getElementsByClassName('clicked'); for(var i = 0; i < elements.length; i++){elements[i].className = 'cell normal'}; this.className = 'cell clicked';"}
																	]
																}
															]
														},{
															"control":"div",
															"class":"row",
															"content":[
																{
																	"control":"div",
																	"class":"cell normal",
																	"content":"Previous Visit",
																	"actions":[
																		{"onmousedown":"var elements = document.getElementsByClassName('clicked'); for(var i = 0; i < elements.length; i++){elements[i].className = 'cell normal'}; this.className = 'cell clicked';"}
																	]
																}
															]
														},{
															"control":"div",
															"class":"row",
															"content":[
																{
																	"control":"div",
																	"class":"cell normal",
																	"content":"&nbsp;",
																	"actions":[
																		{"onmousedown":"var elements = document.getElementsByClassName('clicked'); for(var i = 0; i < elements.length; i++){elements[i].className = 'cell normal'}; this.className = 'cell clicked';"}
																	]
																}
															]
														},{
															"control":"div",
															"class":"row",
															"content":[
																{
																	"control":"div",
																	"class":"cell normal",
																	"content":"&nbsp;",
																	"actions":[
																		{"onmousedown":"var elements = document.getElementsByClassName('clicked'); for(var i = 0; i < elements.length; i++){elements[i].className = 'cell normal'}; this.className = 'cell clicked';"}
																	]
																}
															]
														},{
															"control":"div",
															"class":"row",
															"content":[
																{
																	"control":"div",
																	"class":"cell normal",
																	"content":"&nbsp;",
																	"actions":[
																		{"onmousedown":"var elements = document.getElementsByClassName('clicked'); for(var i = 0; i < elements.length; i++){elements[i].className = 'cell normal'}; this.className = 'cell clicked';"}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						},
						{
							"control":"div",
							"class":"div2",
							"content":[
								{
									"control":"button",
									"class":"button red",
									"style":"margin: 10px; margin-left: 40px; float: left; height: 80px;",
									"content":"Cancel"
								},
								{
									"control":"button",
									"class":"button green",
									"style":"margin: 10px; margin-right: 40px; float: right; height: 80px;",
									"content":"Finish"
								},
								{
									"control":"button",
									"class":"button blue",
									"style":"margin: 10px; float: right; height: 80px;",
									"content":"Demographics"
								},
								{
									"control":"button",
									"class":"button blue",
									"style":"margin: 10px; float: right; height: 80px;",
									"content":"Counseling Protocol"
								},
								{
									"control":"button",
									"class":"button blue",
									"style":"margin: 10px; float: right; height: 80px;",
									"content":"HIV Testing Protocol"
								}
							]
						}
					]
			}
		];
		
	for(var i = 0; i < controls.length; i++){
		
		createNode(content, controls[i]);
		
	}
}

function createNode(parent, control){
	
	if(parent == undefined || control == undefined){
		return;
	}
	
	var klass = control["class"];
	var content = control["content"];
	var actions = control["actions"];
	var css = control["style"];
	
	var ctrl = document.createElement(control["control"]);
	ctrl.className = klass;
	
	if(actions != undefined){
		
		for(var a = 0; a < actions.length; a++){
			
			ctrl.setAttribute(Object.keys(actions[a])[0], actions[a][Object.keys(actions[a])[0]]);
			
		}
		
	}
	
	if(css != undefined){
		
		ctrl.setAttribute("style", css);
		
	}
	
	parent.appendChild(ctrl);
	
	if(typeof(content) == "string"){
		
		ctrl.innerHTML = content;
		
	} else {
		
		for(var i = 0; i < content.length; i++){
			
			createNode(ctrl, content[i]);
			
		}
		
	}
	
	return ctrl;
	
}

init();


let input = document.querySelector('.txt-input');
let content = document.querySelector('.content');
let clear = document.getElementsByClassName('.clear');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

let result;

input.addEventListener('keydown', handleCommand);

function handleCommand(event) {
    if(event.key === 'Enter') {
        const command = input.value.trim();
        input.value = '';
        content.innerHTML += `@>  ${command}<br>`;
        executeCommand(command);
    }
}

//square brackets [optional option]
//angle brackets <required argument>
//curly braces {default values}
//parenthesis (miscellaneous info)

function executeCommand(command) {
    switch (command) {
		            //list of commands
        case "help":
            content.innerHTML += `<p style="font-size: 28px; font-family: IBM" >Available commands: <br></p>
			<p style="color: #7F7F00">help, dir, logo, meow, color, clear, sound [arg], date, exit</p>`;
            break;
			        //dir redirect
			case "dir":
            content.innerHTML += 
            window.location.replace("dir.html");
			;
            break;
					//draw logo
        case "logo":
            content.innerHTML += `<div class="art" style="font-size: 28px; font-family: IBM"><span style="color: #00FF00; background: #000000;">
___  ____           _ _     
&#124;  &#92;&#47;  (_)         (_&#124; )    
&#124; .  . &#124;_ _ __ __ _ _&#124;&#47; ___ 
&#124; &#124;&#92;&#47;&#124; &#124; &#124; '__&#47; _&#96; &#124; &#124; &#47; __&#124;
&#124; &#124;  &#124; &#124; &#124; &#124; &#124; (_&#124; &#124; &#124; &#92;__ &#92;
&#92;_&#124;__&#124;_&#47;_&#124;_&#124;  &#92;__,_&#124; &#124; &#124;___&#47;
&#124; ___ &#92;   &#124; &#124;     _&#47; &#124;      
&#124; &#124;_&#47; &#47;_ _&#124; &#124; __ &#124;__&#47;__ ___ 
&#124;  __&#47; _&#96; &#124; &#124;&#47; _&#96; &#124;&#47; __&#47; _ &#92;
&#124; &#124; &#124; (_&#124; &#124; &#124; (_&#124; &#124; (_&#124;  __&#47;
&#92;_&#124;  &#92;__,_&#124;_&#124;&#92;__,_&#124;&#92;___&#92;___&#124;
Mainframe interface //
                                            </span></div>`;
            break;
					//meow
        case "meow":
            content.innerHTML += `<p style="font-size: 28px; font-family: IBM; color: #FF00FF">
			meow
			</p><br>`;
            break;
					//draw all colors
        case "color":
            content.innerHTML += `
			<span style="font-size: 28px; font-family: IBM; color: #FF0000" >&nbsp;FF0000 red&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #7F0000" >&nbsp;7F0000 dark red&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #FFFF00" >&nbsp;FFFF00 yellow&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #7F7F00" >&nbsp;7F7F00 dark yellow&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #FF00FF" >&nbsp;FF00FF pink&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #7F007F" >&nbsp;7F007F dark pink&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #0000FF" >&nbsp;0000FF blue&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #00007F" >&nbsp;00007F dark blue&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #00FFFF" >&nbsp;00FFFF cyan&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #007F7F" >&nbsp;007F7F dark cyan&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #00FF00" >&nbsp;00FF00 green&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #007F00" >&nbsp;007F00 dark green&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #FFFFFF" >&nbsp;FFFFFF white&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #C0C0C0" >&nbsp;C0C0C0 gray&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #808080" >&nbsp;808080 dark gray&nbsp;</span><br>
			<span style="font-size: 28px; font-family: IBM; color: #000000; background-color: #C0C0C0;" >&nbsp;000000 black&nbsp;</span><br>
			`;
            break;
					//clear
			case "clear":
            content.innerHTML += window.location.reload();
            break;
					//date
			case "date":
            content.innerHTML += `<p style="font-size: 28px; font-family: IBM" >
			Date // time:<p id="currentDateTime" style="color: #007F7F"></p>
			
			</p>`;
	var date = new Date();
	var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	var date_time = current_date+" "+current_time;	
	document.getElementById("currentDateTime").innerHTML = date_time;
            break;
					//sound
			case "sound":
            content.innerHTML += `<p style="font-size: 28px; font-family: IBM" >
			<span style="font-size: 28px; font-family: IBM; color: #FF0000">Volume warning<br></span><br>
			<span style="font-size: 28px; font-family: IBM; color: #7F7F00">List of sounds:</span><br>
			startup, burnout_demo, pc_att_demo, project_5_demo
			</p><br>`;
            break;
					//sound startup
			case "sound startup":
            content.innerHTML += `
			<audio id="sound1" src="system_startup.mp3" preload="auto"></audio>
			<button style="font-size: 28px; font-family: IBM; color: #007F00; background: #FFFFFF" onclick="document.getElementById('sound1').play();">Play</button><br><br>`;
            break;
					//sound burnout_demo
			case "sound burnout_demo":
            content.innerHTML += `
			<audio id="sound2" src="burnout demo.flac" preload="auto"></audio>
			<button style="font-size: 28px; font-family: IBM; color: #007F00; background: #FFFFFF" onclick="document.getElementById('sound2').play();">Play</button><br><br>`;
            break;
					//sound pc_att_demo
			case "sound pc_att_demo":
            content.innerHTML += `
			<audio id="sound3" src="pc_att_demo.flac" preload="auto"></audio>
			<button style="font-size: 28px; font-family: IBM; color: #007F00; background: #FFFFFF" onclick="document.getElementById('sound3').play();">Play</button><br><br>`;
            break;
					//sound project_5_demo
			case "sound project_5_demo":
            content.innerHTML += `
			<audio id="sound4" src="project_5_demo.mp3" preload="auto"></audio>
			<button style="font-size: 28px; font-family: IBM; color: #007F00; background: #FFFFFF" onclick="document.getElementById('sound4').play();">Play</button><br><br>`;
            break;
					//retmmyt
			case "retmmyt":
            content.innerHTML += `
			    <div class="art" style="font-size: 28px; font-family: IBM; color: #00FF00;"><span style="color: #00FF00; background: #000000;">
@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;
@@@&#32;&#32;&#32;&#32;&#32;@@@@@@@&#32;&#32;&#32;&#32;&#32;&#32;@@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@&#32;&#32;@@@@&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;
@@&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@@&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;@@@@&#32;&#32;&#32;&#32;@@@@@&#32;&#32;&#32;&#32;&#32;&#32;@@@@&#32;&#32;@@&#32;@@@@@@@@@@@@@@@&#32;&#32;&#32;&#32;
@@&#32;&#32;@@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;@@@@@@@@@@@&#32;&#32;&#32;@@@&#32;&#32;@@@@@@&#32;@@@@@&#32;&#32;&#32;@@&#32;&#32;@@@@@@@@@@@@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@@@&#32;@@@@@@@@@@@@@@@@&#32;&#32;&#32;
@@@@@@@&#32;&#32;&#32;&#32;&#32;&#32;@@@@@&#32;&#32;@@@@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;@@@&#32;@@@@@&#32;&#32;@@@@&#32;@@@&#32;@@@&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;
@@@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@@@@@@@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@@@&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;@@@&#32;@@@@@&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;
@@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@&#32;&#32;&#32;&#32;&#32;&#32;@@@@&#32;&#32;@@@&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;@@@@&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;
@@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;@@@&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;
@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@@@@@@@@@@&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;
&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;@@@&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;

                                            </span></div>
			<br>`;
            break;
					//dunderhead
			case "dunderhead":
            content.innerHTML += `<div class="art" style="font-size: 28px; font-family: IBM; color: #00FF00;"><span style="color: #00FF00; background: #000000;">
                                                                 
                              ████                               
                              ████                               
                              ████#                              
                              ████#                              
                              ████#                              
                            ████████        █████                
                 ███#      ████# █████    █████##                
                  ##█████████##    █████████#                    
                     █████###  ██     ██████                     
                  ██████###    ███#      ████████                
          ███████████###        ███#         ███████████         
   ██████████████#             ███#               ████████████   
     ██████████##             ███#            █████████#######   
             ████████          ███#        ████████####          
                  ███████      ██##      ██████##                
                      ██████          █████##                    
                         ████#      █████#                       
                           ███#  █████##                         
                            ████████##                           
                             ████##                              
                               ####                              
                                                                 
                                            </span></div>
			<br>`;
            break;
					//command
			case "command":
            content.innerHTML += `<p style="font-size: 28px; font-family: IBM" >
			Text 
			
			</p><br>`;
            break;
					//command
			case "command":
            content.innerHTML += `<p style="font-size: 28px; font-family: IBM" >
			Text 
			
			</p><br>`;
            break;
					//command
			case "command":
            content.innerHTML += `<p style="font-size: 28px; font-family: IBM" >
			Text 
			
			</p><br>`;
            break;
					//command
			case "command":
            content.innerHTML += `<p style="font-size: 28px; font-family: IBM" >
			Text 
			
			</p><br>`;
            break;
			        //redirect exit
			case "exit":
            content.innerHTML += 
            window.location.replace("../../index.htm");
			;
            break;
					//redirect
			case "redirect":
            content.innerHTML += 
            window.location.replace("redirect.html");
			;
            break;
					//redirect
			case "redirect":
            content.innerHTML += 
            window.location.replace("redirect.html");
			;
            break;
        default:
            content.innerHTML += `<p style="color: #FF0000">Unknown command: <span style="text-decoration: underline;">${command}</span>, type "help" for command list.<br>`;
    }
}


const windows = [
    {
        id: "title",
        title: "Welcome!",
        iconLeft: null,
        headerColor: "#00007F",
        customClass: "maindiv",
        moldImage: "images/othervines/vinesTitle.png",
		moldPos: "left: 240px",
        content: `
            <img src="images/othervines/vines2tiny.png" width="136px" height="auto" style="top:-10px; right:-40px; display: block; position: absolute;"/>
            <img src="images/othervines/vines2tinyOVERLAY.png" width="136px" height="auto" style="top:-10px; right:-40px; display: block; position: absolute; pointer-events: none"/>
            <input type="image" src="images/othervines/vines2tinyLEAF.png" onclick="document.getElementById('plant').style.display = 'inline'" width="18px" height="auto"style="top:88px; right:50px; display: block; position: absolute" title="banana"/>
            
            <p><a href="https://mirajspalace.space" title="Miraj's Palace">
            <img src="images/mirajspalace 2.gif" /></a>
            </p>
        `
    },
    
    {
        id: "aboutme",
        title: "About me",
        iconLeft: "images/98/smtp_smtpsnap_9032.gif",
        headerColor: "#00007F",
        customClass: "maindiv",
        moldImage: "images/othervines/vinesPlaceholder.png",
        content: `
            <p>&nbsp;Name: Miraj [mi-raazh]&nbsp;<br>&nbsp;Pronouns: he/they&nbsp;<br><br>
            <a style="border-style: solid; border-width: 2px; color: #C0C0C0;">
            <img src="https://drive.google.com/thumbnail?id=1BIxoQBdihParDx1kRJxlQtrauQvWKAeJ&amp;sz=w200" href="me.htm" style="height: 147px; width: 200px; border-style: inset; border-width: 2px; background-color: #C0C0C0; margin-left=2px">
            </a><br><br>
            <a href="me.htm" style="text-align: center; display: block;">More...</a>
            </p>
        `
    },
    
    {
        id: "circuitbreaker",
        title: "Circuit Breaker",
        iconLeft: "circuitbreaker/favicon.png",
        headerStyle: "background-image: linear-gradient(to right, #99991D, #CEC927, #CEC927);",
        headerClass: "stroke",
        customClass: "maindiv",
        moldImage: "images/othervines/vinesPlaceholder.png",
        content: `
            <p>
            <a href="circuitbreaker/index.htm" style="text-align: center; display: block;">
            <img src="circuitbreaker/guitar_small.png" style="height: auto; width: 200px; border-style: inset; margin-left: auto; margin-right: auto; display: block; border-width: 2px; background-color: #C0C0C0;"><br><br>
            CHECK IT OUT!!
            </a>
            </p>
        `
    },
    
    {
        id: "stuff",
        title: "My art",
        iconLeft: "images/98/progman_1_123.gif",
        headerColor: "#00007F",
        customClass: "maindiv",
        moldImage: "images/othervines/vinesPlaceholder.png",
        content: `
            <p><img src="https://drive.google.com/thumbnail?id=18JjJItFT32QNWM6o8TjA0GXvdgvZ71gq&sz=w200" style="height: auto; width: 200px; border-style: inset; border-width: 2px; background-color: #C0C0C0;"></p>
            <p><a href="gallery/gallery1.htm" style="text-align: center; display: block;">Old gallery</a></p>
        `
    },
    
    {
        id: "music",
        title: "My music",
        iconLeft: "images/98/progman_1_129.gif",
        headerColor: "#1E1E1E",
        customClass: "maindiv",
        content: `
            <iframe src="https://bandcamp.com/EmbeddedPlayer/track=2838389703/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/" seamless="" style="border: 0; width: 400px; height: 120px;"><a href="https://theonewhodiedlivesagain.bandcamp.com/track/bad-n-ugly-apple">bad n ugly (apple) by the one who died lives again (feat. fading fantom)</a></iframe>
        `
    },
    
    {
        id: "funstuff",
        title: "Fun stuff",
        iconLeft: null,
        headerColor: "#00007F",
        customClass: "maindiv",
        moldImage: "images/othervines/vinesPlaceholder.png",
        content: `
            <p>&nbsp;random asortement&nbsp;<br>&nbsp;of stuff i made&nbsp;<br>&nbsp;or found on&nbsp;<br>&nbsp;the internet<p>
            <img id="preview_gif" src="" alt="randTenorGIF" style="height: auto; width: 100px; margin-left: auto; margin-right: auto; display: block; border-style: inset; border-width: 2px; background-color: #C0C0C0;"><br><br>
            <a href="funstuff.htm" style="text-align: center; display: block;">View</a>
            </p>
        `
    },
    
    {
        id: "forum",
        title: "Forum",
        iconLeft: null,
        headerColor: "#00007F",
        customClass: "maindiv",
        moldImage: "images/othervines/vinesPlaceholder.png",
        content: `
            <p><a href="comments.htm" style="text-align: center; display: block;"><img src="images/20ZBOOKS24022619.png?=1" style="height: auto; width: auto;"><p>Comment</a></p></p>
        `
    },
    
    {
        id: "blog",
        title: "Blog",
        iconLeft: "images/favicon1.png",
        headerStyle: "background-image: linear-gradient(to right, #4F1D74, #4F1D74, #613482, #785594, #9275A7, #AA95BA);",
        customClass: "maindiv",
        moldImage: "images/othervines/vinesblogy.png",
        content: `
            <p>&nbsp;Probably the most&nbsp;<br>&nbsp;important part of&nbsp;<br>&nbsp;this website, and&nbsp;<br>&nbsp;the only one i&nbsp;<br>&nbsp;actively use&nbsp;<p>
            <a href="blog.mirajspalace.space/index.htm" style="text-align: center; display: block;"><img src="images/2024034319.png?=v2" style="height: auto; width: auto;"><br><p>View BLOG</a></p>
        `
    },
    
    {
        id: "info",
        title: "Info",
        iconLeft: "images/98/iexpress_1_2201.gif",
        headerColor: "#00007F",
        customClass: "maindiv",
        moldImage: "images/othervines/vinesPlaceholder.png",
        content: `
            <p>&nbsp;Most gifs are from
  <a href="https://gifcities.org">GifCities</a>&nbsp;</p>
  <p>&nbsp;If you want to <a onclick="document.getElementById('links').style.display = 'inline'">link<a> <br>&nbsp;my website somewhere, <br>&nbsp;you can add it as an&nbsp;<a href="javascript:void(0)" onclick="document.getElementById('embed').style.display = 'inline'">Embed</a>&nbsp;</p><p>
  <span style="text-align: center; display: block;">
  <a href="https://mirajspalace.space" title="Miraj's Palace">
  <img alt="Mi's Plc" src="https://mirajspalace.space/images/palaceGIF.gif" />
  </a></p>
            </span>
        `
    },
    
    {
        id: "plant",
        title: "Watering can",
        iconLeft: "images/98/paper_bad_replace_tree.png",
        headerColor: "#005600",
        customClass: "maindiv",
        onDrop: false,
		hidden: true,
        content: `
            <p>
            <div id="waterCan" draggable="true" ondragstart="dragStart(event)" ondragend="endDrag(event)" style="text-align: center;">
            <img id="waterCanPNG" src="images/wateringCanSMALL.png" width="126" height="auto" style="pointer-events: none">
            </div><br>
            <div style="text-align: center;">Drag to use!</div>
            </p>
        `
    },
    
    {
        id: "links",
        title: "Links",
        iconLeft: "images/98/phoneANIMgicx.gif",
        headerColor: "#453949",
        customClass: "console",
		hidden: true,
        content: `
            <p style="margin-top: 5px">&nbsp;Miraj's Palace - Mainframe console // [Version: v16.2.0001]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
            &nbsp;(c) fading fantom Corp. All rights reserved</p>
            <p style="margin-bottom: 10px">
            &nbsp;.*\\links>&nbsp;list -no_int<br>
            <span style="padding-left: 80px">C:.<br></span>
            <span style="padding-left: 88px">&nbsp;|-<a href="https://fadingfantom.bandcamp.com" style="text-decoration:none; color: #9A7ECC">bandcamp.link.ex()</a><br></span>
            <span style="padding-left: 88px">&nbsp;|-<a href="https://soundcloud.com/fadingfantom" style="text-decoration:none; color: #9A7ECC">soundcloud.link.ex()</a><br></span>
            <span style="padding-left: 88px">&nbsp;|-<a href="https://www.youtube.com/@memoriesisjustafadingphantoms" style="text-decoration:none; color: #9A7ECC">youtube.link.ex()</a><br></span>
            <span style="padding-left: 88px">&nbsp;|-<a href="https://twitter.com/fadingfantom" style="text-decoration:none; color: #9A7ECC">twitter.link.ex()</a><br></span>
            <span style="padding-left: 88px">&nbsp;|-<a href="https://www.tiktok.com/@fadingfantom" style="text-decoration:none; color: #9A7ECC">tiktok.link.ex()</a><br></span>
            <span style="padding-left: 88px">&nbsp;|-<a href="https://vk.com/fadingfantom" style="text-decoration:none; color: #9A7ECC">vk.link.ex()</a><br></span>
            <span style="padding-left: 88px">&nbsp;|-<a href="https://www.ultimate-guitar.com/u/lyubmax3103" style="text-decoration:none; color: #9A7ECC">u-guitar.link.ex()</a><br></span>
            <span style="padding-left: 88px">&nbsp;|-<a href="https://bsky.app/profile/fadingfantom.bsky.social" style="text-decoration:none; color: #9A7ECC">bluesky.link.ex()</a><br></span>
            <span style="padding-left: 88px">&nbsp;|-<a href="https://github.com/MrMirajIzHere/mirajspalace" style="text-decoration:none; color: #9A7ECC">github.link.ex()</a><br></span>
            </p>
        `
    },
    
    {
        id: "embed",
        title: "Embed",
        iconLeft: null,
        headerColor: "#00007F",
        customClass: "maindiv",
		hidden: true,
        content: `
            <p><table align="center" bgcolor="#ffffff" border="1" cellpadding="1" cellspacing="1" style="width: 600px">
	<tbody>
		<tr>
			<td>
			<pre>  <code>
 &lt;a href="https://mirajspalace.space" title="Miraj's Palace"&gt;
     &lt;img src="https://mirajspalace.space/images/palaceGIF.gif" alt="Mi's Plc" /&gt;
 &lt;/a&gt;</code></pre>
			</td>
		</tr>
	</tbody>
</table></p>
        `
    },
    
    {
        id: "noai",
        title: "No AI",
        iconLeft: null,
        headerColor: "#00007F",
        customClass: "maindiv",
        content: `
            <p>
            <span style="font-family: georgia,serif; font-size: 13; text-align: center; color: #000000; display: block; background-color: #ffffff">
            &nbsp;NOTHING FROM THIS WEBSITE MAY BE USED AS A TRAINING MATERIAL FOR ARTIFICIAL INTELLIGENCE&nbsp;<br>&nbsp;(AS IN IMAGE, VIDEO, AUDIO OR TEXT GENERATION TOOLS)&nbsp;
            </span></p>
        `
    }
];

$(document).ready(function() {
    windows.forEach(function(win) {
        $('body').append(createWindow(win));
        if (win.hidden) {
            $('#' + win.id).hide();
        }
    });
    initDraggableWindows();
});
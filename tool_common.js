var MIRAJ_TOOLS = [
	{ name: "Link Converter", href: "gdlinkconverter.htm" },
	{ name: "Armor stand Generator", href: "armorstandgen.htm" },
	{ name: "Noclid-data.sk Generator", href: "noclipdatagen.htm" },
];

(function () {
	var TOOLS = MIRAJ_TOOLS;

	function currentPage() {
		var path = window.location.pathname;
		return path.substring(path.lastIndexOf("/") + 1).toLowerCase();
	}

	function buildSidebar() {
		if (document.getElementById("toolSidebar")) return;

		var sidebar = document.createElement("div");
		sidebar.id = "toolSidebar";
		sidebar.className = "tool-sidebar";

		var title = document.createElement("a");
		title.className = "tool-sidebar-title";
		title.href = "index.htm";
		title.textContent = "Miraj's Palace TOOLS";
		sidebar.appendChild(title);

		var list = document.createElement("ul");
		list.className = "tool-sidebar-list";

		var here = currentPage();
		for (var i = 0; i < TOOLS.length; i++) {
			var tool = TOOLS[i];
			var li = document.createElement("li");
			var a = document.createElement("a");
			a.href = tool.href;
			a.textContent = tool.name;
			if (tool.href.toLowerCase() === here) {
				a.className = "active";
			}
			li.appendChild(a);
			list.appendChild(li);
		}

		sidebar.appendChild(list);

		var toggle = document.createElement("button");
		toggle.className = "tool-sidebar-toggle";
		toggle.type = "button";
		
		var startCollapsed = (here === "index.htm" || here === "");
		if (startCollapsed) {
			sidebar.classList.add("collapsed");
		}
		toggle.textContent = startCollapsed ? "\u00BB" : "\u00AB";
		
		toggle.onclick = function () {
			sidebar.classList.toggle("collapsed");
			toggle.textContent = sidebar.classList.contains("collapsed") ? "\u00BB" : "\u00AB";
		};
		sidebar.appendChild(toggle);

		document.body.appendChild(sidebar);
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", buildSidebar);
	} else {
		buildSidebar();
	}
})();
<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website with Collapsible Sections</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .section {
            border: 1px solid #ddd;
            margin: 10px 0;
            border-radius: 4px;
            overflow: hidden;
        }
        .section-header {
            background-color: #f2f2f2;
            padding: 10px;
            cursor: pointer;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .section-header:hover {
            background-color: #e0e0e0;
        }
        .section-content {
            display: none;
            padding: 0;
        }
        iframe {
            width: 100%;
            height: 400px;
            border: none;
        }
    </style>
</head>
<body>

<h1>Website with Collapsible Sections</h1>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Homepage
    </div>
    <div class="section-content" style="display: none;">
        <iframe src="src/home/index.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        About Us
    </div>
    <div class="section-content">
        <iframe src="src/about/about.html"></iframe>
    </div>
</div>


<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Programs Listing Page
    </div>
    <div class="section-content">
        <iframe src="src/program/listing page/index.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Abstract Courses Listing Page
    </div>
    <div class="section-content">
        <iframe src="/src/abstract_courses/1.html"></iframe>
    </div>
</div>

<!-- Add more sections here -->
<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Library Page
    </div>
    <div class="section-content">
        <iframe src="src/library/index.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Dashboard (Student Hub)
    </div>
    <div class="section-content">
        <iframe src="src/student hub/index.html"></iframe>
    </div>
</div>

<!-- course section -->
<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Course Page
    </div>
    <div class="section-content">
        <iframe src="src/course/course.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Course content list view
    </div>
    <div class="section-content">
        <iframe src="src/course/content_list_view.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Course content grid view
    </div>
    <div class="section-content">
        <iframe src="src/course/content_grid_view.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Course content card view
    </div>
    <div class="section-content">
        <iframe src="src/course/content_card_view.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Course Grades
    </div>
    <div class="section-content">
        <iframe src="src/course/grades.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Course Grades 1
    </div>
    <div class="section-content">
        <iframe src="src/course/grades/index.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Course Session Active
    </div>
    <div class="section-content">
        <iframe src="src/course/session_active.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Course Session Past
    </div>
    <div class="section-content">
        <iframe src="src/course/session_past.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Lecture
    </div>
    <div class="section-content">
        <iframe src="src/lecture/lecture.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Program content (student)
    </div>
    <div class="section-content">
        <iframe src="src/program/content/index.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Program Sessions
    </div>
    <div class="section-content">
        <iframe src="src/program/session/session.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Program Sessions
    </div>
    <div class="section-content">
        <iframe src="src/program/session/session.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Program page (non student)
    </div>
    <div class="section-content" style="display: none;">
        <iframe src="src/program/not_student/"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Program page (non student) content
    </div>
    <div class="section-content" style="display: none;">
        <iframe src="src/program/not_student/content.html"></iframe>
    </div>
</div>

<div class="section">
    <div class="section-header" onclick="toggleSection(this)">
        Program page (non student) cert view
    </div>
    <div class="section-content" style="display: none;">
        <iframe src="src/program/not_student/cert.html"></iframe>
    </div>
</div>



<script>
    function toggleSection(header) {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    }
</script>

<!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>


</body></html>
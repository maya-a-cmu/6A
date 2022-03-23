

function deleteListCourse(item) {
    console.log(item);
    item.parentNode.removeChild(item);
}

function selectListCourse(item) {
    if (item.checked) {
        item.parentNode.style.textDecoration = "red underline";
    } else {
        item.parentNode.style.textDecoration = "none";
    }
}


var courses = 0
function addCourseToSchedule(item) {
    if (item.selected) {
        course = courses + 1
    }
    console.log(courses)
}



var course36200 = { SectionA: "False", SectionB: "False" };
localStorage.setItem("status36200", JSON.stringify(course36200));
JSON.parse(localStorage.getItem("status36200"));

 


function SectionA36200() {
  var dots = document.getElementById("course1");
  var moreText = document.getElementById("description1");
  var name = document.getElementById("name1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    name.innerHTML = "Add Course"; 
    moreText.style.display = "none";
    localStorage.setItem("SectionA", "False");
  } else {
    dots.style.display = "none";
    name.innerHTML = "Drop Course"; 
    moreText.style.display = "inline";
    localStorage.setItem("SectionA", "True");

  }
}



function SectionB36200() {
  var dots = document.getElementById("course2");
  var moreText = document.getElementById("description2");
  var name = document.getElementById("name2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    name.innerHTML = "Add Course"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    name.innerHTML = "Drop Course"; 
    moreText.style.display = "inline";
  }
}












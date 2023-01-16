function openSection(evt, SectionName) {
  var tablinks, tabcontent, i;

  tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

  tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

  document.getElementById(SectionName).style.display = "block";
    evt.currentTarget.className += " active";
}
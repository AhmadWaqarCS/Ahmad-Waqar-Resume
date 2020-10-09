function chbx(obj) {
var that = obj;
   if(document.getElementById(that.id).checked == true) {
      document.getElementById('main').checked = false;
      document.getElementById('skill').checked = false;
      document.getElementById('exp').checked = false;
      document.getElementById('edu').checked = false;
      document.getElementById('social').checked = false;
      document.getElementById(that.id).checked = true;
   }
}
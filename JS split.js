<!DOCTYPE html>
<html>
<body>

<p>Click the button to display the array values after the split.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {

var month = 'August';
    var str = "January,February,March,April,May,June,July,August,September,October,November,December";
    var res = str.split(",");
      if(res .indexOf(month) != -1){
	 document.getElementById("demo").innerHTML = res;
       }
    else {
        document.getElementById("demo").innerHTML = 'Not Found';
    }
}
</script>

</body>
</html>

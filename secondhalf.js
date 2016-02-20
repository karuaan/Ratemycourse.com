var fb = new Firebase("https://ratemycourse.firebaseio.com");

    function getdetailsbycoursename( coursename, callback ) {
   fb.child(coursename).once('value', function(snap) {
	   
	   if(snap.val().coursename == coursename){
		   var arr = []
		   arr.append(snap.val());
	   }
	   
       callback( snap.val() );
	   for(var i=0;i<arr.length;i++){
		   console.log(arr[i]);
	   }
   });
}  
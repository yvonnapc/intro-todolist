function Task (name) {
  this.name = name;
}

Task.prototype.completed = function(){
  return this.name + " DONE";
}




$(document).ready(function() {



 $("form#list").submit(function(event){
   event.preventDefault();
   var newTask = $("input#newTask").val();
   var listedTask = new Task(newTask);

   $(".spaceJam").append("<li><span class='clickable'>" + listedTask.name + "</span></li>");
   $("#showList").show();
   console.log(listedTask);


 });

 $(".clickable").click(function(event){
   event.preventDefault();
   return this.name.completed();
   console.log(this.name.completed());
   $(".spaceJam").append("<li><span class='clickable'>" + this.name.completed + "</span></li>");
 })
});

describe('Task', function(){
  it("Creates an object for the job to be done", function(){
    var newTask = new Task("Wash dishes");
    expect(newTask.name).to.equal("Wash dishes");
  });

});

describe('Completed', function (){
  it("Marks tasks as completed when clicked", function(){
    var newTask = new Task("Sweep floors");
    expect(newTask.completed()).to.equal("Sweep floors DONE");
  });
});

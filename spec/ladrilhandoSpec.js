describe("Ladrilhando", function() {

  beforeEach(function() {
    
  });

  it("1x1", function() {    
    expect(Ladrilhando.ladrilhos([[0,0],[1,0],[1,1],[0,1]])).toBe(1);
  });


  it("2x2", function() {    
    expect(Ladrilhando.ladrilhos([[0,0],[2,0],[2,2],[0,2]])).toBe(4);
  });

  it("2x1", function() {    
    expect(Ladrilhando.ladrilhos([[0,0],[2,0],[2,1],[0,1]])).toBe(2);
  });  

  it("allstar I", function() {    
    expect(Ladrilhando.ladrilhos([[0,0],[3,0],[3,2],[2,2]])).toBe(5);
  });  
});
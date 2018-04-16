describe('Airport', function() {

  var airport;

  beforeEach(function() {
   airport = new Airport();
   plane = new Plane();
   });

   describe('has the plane after landing', function() {
     it('has the plane', function() {
       airport.land(plane)
       expect(airport.hangar).toContain(plane);
     });
   });

  });

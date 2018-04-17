describe('Airport', function() {

  beforeEach(function() {
   plane = new Plane();
   });

   describe('has the plane after landing', function() {
     it('has the plane', function() {
       airport = new Airport('sunny')
       airport.land(plane)
       expect(airport.hangar).toContain(plane);
     });
   });

   describe('does not have the plane after taking off', function() {
     it('has no plane', function() {
      airport = new Airport('sunny')
       airport.take_off(plane)
       expect(airport.hangar).not.toContain(plane);
     });
   });

   describe("plane doesn't land if weather is stormy", function() {
     it('has no plane', function() {
       airport = new Airport('stormy')
       airport.land(plane)
       expect(airport.hangar).not.toContain(plane);
     });
   });

   describe("plane doesn't take off if weather is stormy", function() {
     it('has the plane', function() {
       airport = new Airport('stormy')
       airport.hangar.push(plane)
       airport.take_off(plane)
       expect(airport.hangar).toContain(plane);
     });
   });



  });

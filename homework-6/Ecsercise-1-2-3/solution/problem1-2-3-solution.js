function Jet(make, model, seatCount) {
    const bookedSeats = [];
  
    this.bookSeat = async function (name) {
      if (bookedSeats.length === seatCount) {
        console.error("Flight is fully booked");
      } else {
        bookedSeats.push(name);
      }
    };
  
    this.getBookedSeatsCount = function () {
      return bookedSeats.length;
    };
  
    this.getBookedSeats = function (callBack) {
      if (typeof callBack === "function") {
        callBack(bookedSeats);
      } else {
        console.log(bookedSeats);
      }
    };
  }
  
  const myPlane = new Jet("G", "6", "10");
  
  const bookPlane = async (passengers, plane) => {
    for (const passenger of passengers) {
      await plane.bookSeat(passenger);
    }
  };
  
  bookPlane(["p1", "p2", "p3"], myPlane).then(() => {
    myPlane.getBookedSeats();
  });
  
  myPlane.getBookedSeatsCount();
  
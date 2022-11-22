const form = document.querySelector(".information");
const elinput = document.querySelector("input");
const elFoot = document.getElementById("foot");
const elBike = document.getElementById("bike");
const elCar = document.getElementById("car");
const elPlane = document.getElementById("plane");

const FootSpeed = 3.6;
const BikeSpeed = 20.1;
const CarSpeed = 70;
const AirPlaneSpeed = 800;


form.addEventListener('click', function (e) {
    e.preventDefault()
    const foottime = (elinput. value*1000) / FootSpeed;
     const hour = Math.floor(foottime / 60);
     const minute = Math.floor(foottime % 60);
     elFoot.textContent = `${hour} soat ${minute} daq`;


      const Biketime = (elinput.value * 1000) / BikeSpeed;
      const hour2 = Math.floor(Biketime / 60);
      const minute2 = Math.floor(Biketime % 60);
      elBike.textContent = `${hour2} soat ${minute2} daq`;


       const Cartime = (elinput.value * 1000) / CarSpeed;
       const hour3 = Math.floor(Cartime / 60);
       const minute3 = Math.floor(Cartime % 60);
       elCar.textContent = `${hour3} soat ${minute3} daq`;


        const Planetime = (elinput.value * 1000) / AirPlaneSpeed;
        const hour4 = Math.floor(Planetime / 60);
        const minute4 = Math.floor(Planetime % 60);
        elPlane.textContent = `${hour4} soat ${minute4} daq`;

       if (form == '') {
         alert("iltimos qiymat kiriting!");
       }

})      
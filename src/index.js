const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
    if (isNaN(parseFloat(sampleActivity))) {
        return false;
    }
    if ((typeof parseInt(sampleActivity)) != "number"){
        return false;
    }
    if (typeof sampleActivity != 'string' ||
     sampleActivity === NaN || 
     parseFloat(sampleActivity)<0 || 
     parseFloat(sampleActivity)==0 ||
     parseFloat(sampleActivity)>15) {
        return false;
    } else {
        let age;
        age = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/(0.693/HALF_LIFE_PERIOD);
        return Math.ceil(age);
    }
   
  }

  console.log(dateSample(' '));
  
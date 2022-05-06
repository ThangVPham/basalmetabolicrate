//Default settings
var unit = "Metric";
document.getElementById("metric").style.background="green";
var age =0;
var height = 0;
var weight = 0;
//Setting unit metric/imperial
function metricSelection(){
    unit = document.getElementById("metric").value;
    var btn = document.getElementById("weight");
    btn.setAttribute("placeholder","kg")
    btn = document.getElementById("height");
    btn.setAttribute("placeholder","cm");
    document.getElementById("metric").style.background="green";
    document.getElementById("imperial").style.background="#343834";
}
function imperialSelection(){
    unit = document.getElementById("imperial").value;
    var btn = document.getElementById("weight");
    btn.setAttribute("placeholder","lbs")
    btn = document.getElementById("height");
    btn.setAttribute("placeholder","inches");
    document.getElementById("metric").style.background="#343834";
    document.getElementById("imperial").style.background="green";
}
//Function calculating BMR and TEE
function Calculate(){
  console.log(unit);
  var sex;
  document.getElementsByName("sex")
    .forEach(radio =>{
        if(radio.checked){
            sex = radio.value;
        }
    })
   age = document.getElementById("age").value; 
   weight = document.getElementById("weight").value;
   height = document.getElementById("height").value;
  var activity;
  document.getElementsByName("lifestyle")
  .forEach(radio =>{
      if(radio.checked){
          activity = radio.value;
      }
  })
  var BMR;
  var TEE;
  //Metric Calculation
    if(unit == "Metric" && weight>0 && height>0 && age>0){
        if(sex == "man"){
            console.log("Here");
            if(activity == "sedentary"){
                TEE = (66.5 + (13.75*weight) + (5.003*height) - (6.755*age)) * 1.53;
                BMR = TEE/1.53;
            }
            else if(activity =="active"){
                TEE = (66.5 + (13.75*weight) + (5.003*height) - (6.755*age)) * 1.76;
                BMR = TEE/1.76;
            }
            else if(activity == "vigorous"){
                TEE = (66.5 + (13.75*weight) + (5.003*height) - (6.755*age)) * 2.25;
                BMR = TEE/2.25;
            }
        }
        else if(sex == "woman"){
          if(activity == "sedentary"){
              TEE = (665 + (9.563*weight) + (1.85*height) - (4.676*age)) * 1.53;
              BMR = TEE/1.53;
          }
          else if(activity =="active"){
              TEE = (665 + (9.563*weight) + (1.85*height) - (4.676*age)) * 1.76;
              BMR = TEE/1.76;
          }
          else if(activity == "vigorous"){
              TEE = (665 + (9.563*weight) + (1.85*height) - (4.676*age)) * 2.25;
              BMR = TEE/2.25;
          }

    }
}
//Imperial Calculation
    else if(unit =="Imperial"&&weight>0 && height>0 && age>0){
        if(sex == "man"){
            if(activity == "sedentary"){
                TEE = (66 + (6.2*weight) + (12.7*height) - (6.76*age)) * 1.53;
                BMR = TEE/1.53;
            }
            else if(activity =="active"){
                TEE = (66 + (6.2*weight) + (12.7*height) - (6.76*age)) * 1.76;
                BMR = TEE/1.76;
            }
            else if(activity == "vigorous"){
                TEE = (66 + (6.2*weight) + (12.7*height) - (6.76*age)) * 2.25;
                BMR = TEE/2.25;
            }
        }
        else if(sex == "woman"){
          if(activity == "sedentary"){
              TEE = (665 + (4.35*weight) + (4.7*height) - (4.7*age)) * 1.53;
              BMR = TEE/1.53;
          }
          else if(activity =="active"){
            TEE = (665 + (4.35*weight) + (4.7*height) - (4.7*age)) * 1.76;
              BMR = TEE/1.76;
          }
          else if(activity == "vigorous"){
            TEE = (665 + (4.35*weight) + (4.7*height) - (4.7*age)) * 2.25;
              BMR = TEE/2.25;
          }

    }
  
}
else{
    document.getElementById("output").innerHTML = "Invalid Inputs. Please try again.";
    document.getElementById("TEE").innerHTML = "Invalid Inputs. Please try again.";
}
//output result
document.getElementById("output").innerHTML = (BMR.toFixed(2));
document.getElementById("TEE").innerHTML = (TEE.toFixed(2));
}
var rad11 = $("#rad11");
var rad23 = $("#rad23");
var rad34 = $("#rad34");
var bres = $("#buttonResult");
var chb11 = $("#chb11");
var chb12 = $("#chb12");
var chb13 = $("#chb13");
var chb14 = $("#chb14");
var chb21 = $("#chb21");
var chb22 = $("#chb22");
var chb23 = $("#chb23");
var chb24 = $("#chb24");

function chekRadio(){
   var radRes = 0;
   if (rad11.prop("checked")){
      radRes += 1;
   }
   if (rad23.prop("checked")){
      radRes += 1;
   }
   if (rad34.prop("checked")){
      radRes += 1;
   }
   return radRes;
}




function chekChekBox(){
   var chbRes = 0;
   if (chb12.prop("checked") && (!chb11.prop("checked")) && (!chb13.prop("checked")) && (!chb14.prop("checked"))){
      chbRes += 0.5;
   }
   if (chb13.prop("checked") && (!chb11.prop("checked")) && (!chb12.prop("checked")) && (!chb14.prop("checked"))){
      chbRes += 0.5;
   }
   if (chb12.prop("checked") && chb13.prop("checked") && (!chb11.prop("checked")) && (!chb14.prop("checked"))){
      chbRes += 1;
   }
   if (chb21.prop("checked") && (!chb22.prop("checked")) && (!chb23.prop("checked")) && (!chb24.prop("checked"))){
      chbRes += 0.5;
   }
   if (chb22.prop("checked") && (!chb21.prop("checked")) && (!chb23.prop("checked")) && (!chb24.prop("checked"))){
      chbRes += 0.5; 
   }
   if (chb21.prop("checked") && chb22.prop("checked") && (!chb23.prop("checked")) && (!chb24.prop("checked"))){
      chbRes += 1;
   }
   
   return chbRes;
}

function clickResultButton(){
   
            bres.click(function(){
                             
               $("#res").html("You score: " + (Number(chekRadio()) + Number(chekChekBox())) + " points. " + "<br />" + "You have " + (Number(chekRadio()) + Number(chekChekBox()))/5*100 + " % correct answers.");
               
            })
}

clickResultButton();
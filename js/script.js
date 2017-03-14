var b0 = $("#button0");
var b1 = $("#button1");
var b2 = $("#button2");
var b3 = $("#button3");
var b4 = $("#button4");
var b5 = $("#button5");
var b6 = $("#button6");
var b7 = $("#button7");
var b8 = $("#button8");
var b9 = $("#button9");
var bDel = $("#buttonDel");
var bC = $("#buttonC");
var bDot = $("#buttonDot");
var bMult = $("#buttonMultiplication");
var bDiv = $("#buttonDivision");
var bAdd = $("#buttonAddition");
var bSub = $("#buttonSubtraction");
var bEq = $("#buttonEquals");
var screen = $("#screen");
var sign = $("#buttonSign");
var dot = $("#buttonDot");

var tmp = 0;
var operation = null;
var t = null;

function clickNumberButton(numberButton){
   
            numberButton.click(function() {
               if (t == null){
                  
                  if (screen.val().indexOf(".") != -1) {screen.val(screen.val() + $(this).html())}
                  else {screen.val(Number(screen.val() + $(this).html()))};
                  }
               else {
                  
                  
                  screen.val(Number($(this).html()));
                  t = null;
                  }
            })            
}
 
function clickCancelButton(){
   
            bC.click(function() {
               screen.val(Number(0));
               tmp = 0;
               operation = null;
               t = null;
               })
}

function clickButtonSign(){
   
            sign.click(function() {
               screen.val(Number(screen.val()) * (-1));
               })
}

function clickButtonDot(){
   
            dot.click(function() {
                             
                  if (t == null){
                     if (screen.val().indexOf(".") == -1){
                        screen.val(screen.val() + $(this).html());}}
                  else {
                     screen.val(0 + $(this).html());
                     t = null;
                  }               
               })
}

function calculation(){
   
             if (operation != null){
                     switch (operation){
                        case "*":
                           screen.val(tmp * Number(screen.val()));
                           break;
                        case "/":
                           if (Number(screen.val()) != 0){
                           screen.val(tmp / Number(screen.val()));}
                           else {
                           screen.val("Error, you can't divide by zero )");}
                           break;
                        case "+":
                           screen.val(tmp + Number(screen.val()));
                           break;
                        case "-":
                           screen.val(tmp - Number(screen.val()));
                           break;                    
                     }
                     t = operation;
                  }  
}

function clickOperation(operationButton){
   
            operationButton.click(function(){
               
                  if (operation == null) {
                     tmp = Number(screen.val());
                     operation = operationButton.val();   
                     t = operation;
                  }
                  else calculation();
            })               
}

function clickEqualsButton(){
   
            bEq.click(function(){               
               calculation();
            })
}
  
clickNumberButton(b0);
clickNumberButton(b1);
clickNumberButton(b2);
clickNumberButton(b3);
clickNumberButton(b4);
clickNumberButton(b5);
clickNumberButton(b6);
clickNumberButton(b7);
clickNumberButton(b8);
clickNumberButton(b9); 
clickCancelButton(); 
clickOperation(bMult);
clickOperation(bDiv);
clickOperation(bAdd);
clickOperation(bSub);
clickEqualsButton();
clickButtonSign();
clickButtonDot();
     
     

  
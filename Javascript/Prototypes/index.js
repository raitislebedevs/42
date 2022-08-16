//Prototypes

function HtmlElement() {
  this.click = function () {
    console.log("You clicked me! :)");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("I am focusing");
};

let element = new HtmlElement();
element.click();
element.focus();

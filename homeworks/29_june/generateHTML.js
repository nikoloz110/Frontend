function generateHTML(arg) {
  //create parent element "count" times
  for (let i = 0; i < arg.count; i++) {
    //create parent element
    let parentTag = document.createElement(arg.tagName);
    let selector = document.querySelector(arg.parentSelector);
    //check if text content applies to parent element and apply
    if (
      arg.content[1] === undefined ||
      arg.content[1] === "both" ||
      arg.content[1] === "parent"
    ) {
      parentTag.textContent = arg.content[0];
    }
    //check if attribute(s) applies to parent element and apply
    if (
      arg.hasOwnProperty("attribute") &&
      (arg.attribute[1] === undefined ||
        arg.attribute[1][0] === "parent" ||
        arg.attribute[1][0] === "both")
    ) {
      for (let k = 0; k < arg.attribute[0].length; k++) {
        parentTag.setAttribute(
          `${arg.attribute[0][k][0]}`,
          `${arg.attribute[0][k][1]}`
        );
      }
    }
    //append parent element to dom element with selector
    selector.appendChild(parentTag);
    //create child element "childCount" times
    for (let j = 0; j < arg.childCount; j++) {
      elementChild = document.createElement(arg.childElement);
      //check if text content applies to child element and apply
      if (arg.content[1] === "child" || arg.content[1] === "both") {
        elementChild.textContent = arg.content[0];
      }
      //check if attribute applies to child element and apply
      if (
        arg.hasOwnProperty("attribute") &&
        arg.attribute[1] !== undefined &&
        (arg.attribute[1][0] === "child" || arg.attribute[1][0] === "both")
      ) {
        for (let k = 0; k < arg.attribute[0].length; k++) {
          elementChild.setAttribute(
            `${arg.attribute[0][k][0]}`,
            `${arg.attribute[0][k][1]}`
          );
        }
      }
      //append child element to parent element
      parentTag.appendChild(elementChild);
    }
  }
}
/*
                                DOCUMENTATION
function GenerateHTML() creates HTML structure. the structure consists of parent(s) and child(s) elements, with attributes and text content, and can be appended to desired dom element.

function argument is an object of the following type: 
{
  count: 3,
  tagName: "ul",
  parentSelector: "#container",
  content: ["someTextContent", "child" <---optional, can be omitted],
  attribute: [
    [["style", "background-color: red;"],["class", "superClass"],.....["id", "superID"]],
    ["both"] <---optional, can be omitted
  ], <---optional, can be omitted
  childCount: 2, <---optional, can be omitted
  childElement: "li" <---optional, can be omitted
}
                                Arguments:
count - number of parent elements. argument type - number

tagName - tag of parent element. argument type - string

parentSelector - dom element which generateHtml appends its structure to. argument type - string

content - adds text content to parent, child or both elements. first argument - text itself. second argument(optional) can be: "parent", "child", "both" OR can be omitted. default is set to "parent". argument type - array with 2 string elements.

attribute(optional) -  sets attribute(s) of an element. can set as many attributes as needed. first argument(s) - sets the attribute itself. second argument specifies element to set attributes. second argument(optional) can be: "parent", "child", "both" OR can be omitted. default is set to "parent". argument type - array with 2 array elements. first one containing array with n number of arrays containing 2 strings(attribute and value), second one - array with 1 string element.

childCount - number of child elements. argument type - number

childElement - tag of child element. argument type - string
 */

//                                  Test Case

generateHTML({
  count: 3,
  tagName: "ul",
  parentSelector: "#container",
  content: ["someText", "both"],
  attribute: [
    [
      ["style", "background-color: red;"],
      ["class", "superClass"],
      ["id", "superID"]
    ],
    ["child"]
  ],
  childCount: 2,
  childElement: "li"
});

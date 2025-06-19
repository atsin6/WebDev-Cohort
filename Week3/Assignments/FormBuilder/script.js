let homepage = document.querySelector("#homepage");
let FormBuilderDiv = document.createElement("div");
let FormPreviewDiv = document.createElement("div");

let FieldTypeArr = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
];

let noOfPreviewEle = 0;

function renderHomepage() {
  FormBuilderDiv = generateFormBuilderDiv();
  FormPreviewDiv = document.createElement("div");

  let FormPreviewTitle = document.createElement("h1");
  FormPreviewTitle.innerHTML = "Form Preview";
  FormPreviewDiv.append(FormPreviewTitle);

  FormBuilderDiv.setAttribute("id", "formBuilderDiv");
  FormPreviewDiv.setAttribute("id", "formPreviewDiv");

  homepage.append(FormBuilderDiv, FormPreviewDiv);
}

renderHomepage();

function generateFormBuilderDiv() {
  let FormBuilderDiv = document.createElement("div");

  let form = document.createElement("form");
  let formTitle = document.createElement("h1");
  let FieldTypeAndLabelDiv = document.createElement("div");

  form.setAttribute("id", "form");

  FieldTypeAndLabelDiv.setAttribute("id", "FieldTypeAndLabelDiv");

  // Label for selected Field Type
  let LabelforFieldTypeDiv = document.createElement("div");
  let LabelforFieldTypeLabel = document.createElement("label");
  let LabelforFieldType = document.createElement("input");

  LabelforFieldTypeLabel.innerHTML = "Field Label ";

  LabelforFieldTypeLabel.setAttribute("for", "LabelforFieldType");
  LabelforFieldType.setAttribute("id", "LabelforFieldType");
  LabelforFieldType.setAttribute("name", "LabelforFieldType");
  LabelforFieldType.classList.add("inputEle");

  LabelforFieldTypeDiv.setAttribute("id", "LabelforFieldTypeDiv");

  LabelforFieldTypeDiv.append(LabelforFieldTypeLabel, LabelforFieldType);

  // Select Field Type
  let SelectFieldTypeDiv = document.createElement("div");
  let SelectFieldTypeLabel = document.createElement("label");
  let SelectFieldType = document.createElement("Select");

  SelectFieldTypeLabel.setAttribute("for", "SelectFieldType");
  SelectFieldType.setAttribute("id", "SelectFieldType");
  SelectFieldType.setAttribute("name", "SelectFieldType");
  SelectFieldType.classList.add("inputEle");

  SelectFieldTypeDiv.setAttribute("id", "SelectFieldTypeDiv");

  let defaultOption = document.createElement("option");
  defaultOption.value = "Select";
  defaultOption.innerHTML = "Select";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  SelectFieldType.append(defaultOption);

  FieldTypeArr.forEach((FieldType) => {
    let option = document.createElement("option");
    option.value = FieldType;
    option.innerHTML = FieldType;
    SelectFieldType.append(option);
  });

  formTitle.innerHTML = "Form Builder";
  SelectFieldTypeLabel.innerHTML = "Select Field Type ";

  // Submit Button
  let SubmitBtnDiv = document.createElement("div");
  SubmitBtnDiv.setAttribute("id", "SubmitBtnDiv");
  let SubmitBtn = document.createElement("button");
  SubmitBtn.classList.add("btn");
  SubmitBtn.innerHTML = "Add Field";
  SubmitBtnDiv.appendChild(SubmitBtn);

  // Appending
  SelectFieldTypeDiv.append(SelectFieldTypeLabel, SelectFieldType);

  FieldTypeAndLabelDiv.append(SelectFieldTypeDiv);

  form.append(
    formTitle,
    FieldTypeAndLabelDiv,
    LabelforFieldTypeDiv,
    SubmitBtnDiv
  );
  FormBuilderDiv.append(form);

  //EventListeners
  // SelectFieldType.addEventListener("change", generateFormElementsAttribute);

  SubmitBtn.addEventListener("click", generateFormPreview);

  return FormBuilderDiv;
}

function generateFormPreview(event) {
  event.preventDefault();
  let form = event.target.closest("form");

  let formP;
  let SubmitBtnDivP;
  let SubmitBtnP;

  if (document.getElementById("formP") === null) {
    formP = document.createElement("form");
    formP.setAttribute("id", "formP");

    FormPreviewDiv.removeChild(FormPreviewDiv.firstChild);
    let FormPreviewTitle = document.createElement("h1");
    FormPreviewTitle.innerHTML = "Form Preview";
    formP.append(FormPreviewTitle);
    titleAdded = true;

    // if (addOnce === 0) {
    //   SubmitBtnDivP = document.createElement("div");
    //   SubmitBtnP = document.createElement("button");

    //   SubmitBtnDivP.setAttribute("id", "SubmitBtnDivP");
    //   SubmitBtnP.setAttribute("id", "SubmitBtnP");

    //   SubmitBtnP.innerHTML = "Submit";
    //   SubmitBtnDivP.append(SubmitBtnP);

    //   formP.append(SubmitBtnDivP);
    //   addOnce++;
    // }
  } else {
    formP = document.getElementById("formP");

    // SubmitBtnDivP = document.getElementById("SubmitBtnDivP");
    // SubmitBtnP = document.getElementById("SubmitBtnP");
  }

  let previewElementDiv = generatePreviewElementDiv();
  formP.append(previewElementDiv);
  FormPreviewDiv.append(formP);

  console.log(formP.elements);
  // console.log("It's working");
}
function generatePreviewElementDiv() {
  let previewElementDiv = document.createElement("div");
  let FieldLabel = form.elements.LabelforFieldType.value;
  let FieldType = form.elements.SelectFieldType.value;

  let input = document.createElement("input");
  let label = document.createElement("label");

  previewElementDiv.setAttribute("id", "previewEle-" + noOfPreviewEle++);
  previewElementDiv.classList.add("previewElementDiv");

  if (FieldType === "button") {
    label.setAttribute("hidden", true);
    input.setAttribute("type", FieldType);
    input.setAttribute("value", FieldLabel);
    input.classList.add("btn");
    previewElementDiv.append(label, input);
  } else if (FieldType === "checkbox") {
    input.setAttribute("type", FieldType);
    label.innerHTML = " " + FieldLabel;
    previewElementDiv.append(input, label);
  } else if (FieldType === "radio") {
    input.setAttribute("type", FieldType);
    label.innerHTML = " " + FieldLabel;
    previewElementDiv.append(input, label);
  } else {
    label.innerHTML = FieldLabel + " ";
    input.setAttribute("type", FieldType);
    previewElementDiv.append(label, input);
    input.classList.add("inputEle");
  }

  console.log(form.elements);

  // previewElementDiv.addEventListener("contextmenu", popUpOptions);
  return previewElementDiv;
}

// function popUpOptions(event){

// }

// function generateFormElementsAttribute(event) {
//   event.preventDefault();
//   let form = event.target.closest("form");
//   let SubmitbtnB = document.getElementById("SubmitBtnDiv");
//   let otherElements;

//   let fieldType = event.target.value;

//   // if (fieldType === "input") {
//   //   otherElements = generateAttributesDiv();
//   //   let oldEle = document.querySelector(".additionalInfo");
//   //   oldEle === null
//   //     ? form.insertBefore(otherElements, SubmitbtnB)
//   //     : form.replaceChild(otherElements, oldEle);
//   // } else if (fieldType === "Select") {
//   //   otherElements = generateAttributesDiv();
//   // }
// }

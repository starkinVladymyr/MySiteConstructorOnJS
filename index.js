const model = [
  { type: "title", value: "Hello World from Js" },
  { type: "text", value: "Here we go with some text" },
  { type: "columns", value: ["111111111111", "2222222", "444444444444"] },
]

const $site = document.querySelector("#site")
// someObj.array.forEach(block => {
//     console.log(block)
// });

model.forEach((block) => {
  console.log(block)
  let html = ""
  if (block.type === "title") {
    html = `
    <div class="row">
    <div class="col-sm">
    <h1>${block.value}</h1>
    </div>
    </div>
`
  } else if (block.type === "text") {
    html = `
    <div class="row">
        <div class="col-sm">
        ${block.value}
        </div>
    </div>
`
  } else if (block.type === "columns") {
  }

  $site.insertAdjacentHTML("beforeend", html)
})

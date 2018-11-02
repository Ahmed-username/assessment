fetchData();
function expand(id) {
  const section = document.querySelector(`#section${id}`);
  const content = document.querySelector(`#content${id}`);
  section.classList.toggle("active");
  section.classList.toggle("collapsible");
  content.classList.toggle("hidden");
  content.classList.toggle("section__content");
}

function fetchData() {
  fetch("https://design.propcom.co.uk/buildtest/accordion-data.json")
    .then(response => response.json())
    .then(json => displayData(json.blocks))
    .catch(err => console.log(err));
}

function displayData(json) {
  const data = json
    .map((section, index) => {
      console.log(section.content);
      return `
    <div id="section${index + 1}"
     class="collapsible section" 
     onclick="expand('${index + 1}')">
    ${section.heading}
    <div id="content${index + 1}"
    class="hidden" >
     ${section.content} </div>
    </div>
    `;
    })
    .join("");

  const sections = document.querySelector(".sections");
  sections.innerHTML = data;
}

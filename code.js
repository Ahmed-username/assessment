
fetchData();
function expand(id){
   const section = document.querySelector(`#${id}`)
   section.classList.toggle("active")
   section.classList.toggle("collapse")
}


function fetchData(){
fetch('https://design.propcom.co.uk/buildtest/accordion-data.json')
.then(response=>response.json())
.then(json=>displayData(json.blocks))
.catch(err => console.log(err))
}

function displayData(json){
const data = json.map((section,index)=>{
    return(
    `
    <div id="section${index+1}" class="collapse" onclick="expand('section${index+1}')">
    ${section.heading}
    <p> ${section.content} </p>
    </div>
    `
    );
})

const sections = document.querySelector('.sections')
sections.innerHTML = data;

}

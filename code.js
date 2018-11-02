fetchData();



function fetchData(){
fetch('https://design.propcom.co.uk/buildtest/accordion-data.json')
.then(response=>response.json())
.then(data=>displayData(data.blocks))
.catch(err => console.log(err))
}

function displayData(data){
const sections = data.map(section=>{
    return(
    `
    <div>
    ${section.heading}
    <p> ${section.content} </p>
    </div>
    `
    );
})
console.log("data", sections)
document.querySelector('.sections').innerHTML = sections;

}

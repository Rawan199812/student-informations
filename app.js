let totalDiv=document.getElementById('totaldiv');
// make array for all 
let allStudents=[];
let total=0;
let totalArr=[];
// make constructor 
function Student(email,mobile,mony) {
    this.email=email;
    this.mobile=mobile;
    this.mony=mony;
    // this.name=
    this.age=Math.floor(Math.random()*(24-18+1))+18;
    allStudents.push(this);
    
}
//get data from local
// function getLocal() {
    let getData=localStorage.getItem('student');
    if (getData!==null) {
       let prevLocal= JSON.parse(getData);
       for (let i = 0; i < prevLocal.length; i++) {
          new Student(prevLocal[i].email,prevLocal[i].mobile,prevLocal[i].mony);
           
       }
       renderTableData();

        
    }
    
// }
// save to local
function saveLocal() {
    localStorage.setItem('student',JSON.stringify(allStudents));
    
}
// render Header
function renderHeaderTable() {
    

let table=document.getElementById('table');
let tableHeader=document.createElement('tr');
table.appendChild(tableHeader);
let idHeader=document.createElement('th');
tableHeader.appendChild(idHeader);
idHeader.textContent='id'
let nameHeader=document.createElement('th');
tableHeader.appendChild(nameHeader);
nameHeader.textContent='Name';
let emailHeader=document.createElement('th');
tableHeader.appendChild(emailHeader);
emailHeader.textContent='Email';
let mobileHeader=document.createElement('th');
tableHeader.appendChild(mobileHeader);
mobileHeader.textContent='Mobile';
let ageHeader=document.createElement('th');
tableHeader.appendChild(ageHeader);
ageHeader.textContent='Age';
let monyHeader=document.createElement('th');
tableHeader.appendChild(monyHeader);
monyHeader.textContent='Tuition';
}
renderHeaderTable()




//render table
function renderTableData() {
    table.innerHTML='';
    renderHeaderTable()
    
    for (let i = 0; i < allStudents.length; i++) {
        let tableRow=document.createElement('tr');
        table.appendChild(tableRow);
        let firstColum=document.createElement('td');
        tableRow.appendChild(firstColum);
        firstColum.textContent='still';//allStudents[i].id;
        let secColum=document.createElement('td');
        tableRow.appendChild(secColum);
        secColum.textContent='still';//allStudents[i].name;
        let thColum=document.createElement('td');
        tableRow.appendChild(thColum);
        thColum.textContent=allStudents[i].email;
        let forColum=document.createElement('td');
        tableRow.appendChild(forColum);
        forColum.textContent=allStudents[i].mobile;
    
        let fiColum=document.createElement('td');
        tableRow.appendChild(fiColum);
        fiColum.textContent=allStudents[i].age;
        let lastColum=document.createElement('td');
        tableRow.appendChild(lastColum);
        lastColum.textContent=allStudents[i].mony;
        totalArr.push(allStudents[i].mony);
        
        let total=document.createElement('p');
        totaldiv.appendChild(total);
        for (let i = 0; i < totalArr.length; i++) {
            // total.textContent=`${allStudents[i].mony}+${total}`;
            let totalTotale=totalArr[i]
            total.textContent=totalArr[i]

      
            
        }


        
    }
}renderTableData();

// add eventListener
let form=document.getElementById('form');
form.addEventListener('submit',handelSubmitter);
function handelSubmitter(event) {
    event.preventDefault();
    let newEmail=event.target.email.value;
    let newmobile=event.target.mobile.value;
    let newMony=event.target.mony.value;
    // for (let i = 0; i < allStudents.length; i++) {
      new Student(newEmail,newmobile,newMony);
      renderTableData();
      saveLocal()
      
    // }//call the render and the save..
    
}
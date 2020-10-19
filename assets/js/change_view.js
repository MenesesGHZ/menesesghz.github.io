window.addEventListener("load",()=>{
    const projects_el = document.getElementById("projects-container");
    
    const projects_ids = ["snake3d","mnist","safe-alert","lstm"];
   
    for(let project_id of projects_ids){

         // It shows the seleceted project view, and hide my projects view
        document.getElementById(project_id+"-trigger").addEventListener('click',()=>{
            document.getElementById(project_id).classList.remove("main-view-hidden");
            projects_el.classList.add("main-view-hidden");
        });

         // It shows my project view, and hide the currently open project view.
        document.getElementById(project_id+"-exit").addEventListener('click',()=>{
            projects_el.classList.remove("main-view-hidden");
            document.getElementById(project_id).classList.add("main-view-hidden");
        });
        
    }
});
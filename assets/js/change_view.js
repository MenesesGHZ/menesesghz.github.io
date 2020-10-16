window.addEventListener("load",()=>{
    const projects_el = document.getElementById("projects-container");
    
    // containerid:[ container-trigger-id, container-closer-id ]
    const projects_ids = { 
                                "snake3d":["snake3d-trigger","snake3d-exit"],
                                "poem-maker":["poem-maker-trigger","poem-maker-exit"],
                                "mnist":["mnist-trigger","mnist-exit"],
                                "safe-alert":["safe-alert-trigger","safe-alert-exit"]
                            };
   
    for(let project_id of Object.keys(projects_ids)){

         // It shows the seleceted project view, and hide my projects view
        document.getElementById(projects_ids[project_id][0]).addEventListener('click',()=>{
            document.getElementById(project_id).classList.remove("main-view-hidden");
            projects_el.classList.add("main-view-hidden");
        });

         // It shows my project view, and hide the currently open project view.
        document.getElementById(projects_ids[project_id][1]).addEventListener('click',()=>{
            projects_el.classList.remove("main-view-hidden");
            document.getElementById(project_id).classList.add("main-view-hidden");
        });
    }
});
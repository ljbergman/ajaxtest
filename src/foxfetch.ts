
//window.onload=function() {

    const button = document.querySelector("#button") as HTMLButtonElement;


    function getFox():void {

        const url = "https://randomfox.ca/floof/?ref=apilist.fun";
        // @ts-ignore
        const p = fetch(url)

        .then(response => {
            //console.log(response.json());
            return response.json();
        }).then(data => {
            
            let imgField: any = document.querySelector("#imageField");
            imgField.src = data.image;
            console.log(data.image);
            
        });

    }

    button.addEventListener('click', function(event) {
        event.preventDefault();   
        getFox(); 
              
             
    });

    getFox();
     
   
    



    function saklar(){
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");

    let lampu1  = document.getElementById("lampu1");
    let lampu2  = document.getElementById("lampu2");
    let lampu3  = document.getElementById("lampu3");
    let lampu4  = document.getElementById("lampu4");
    let lampu5  = document.getElementById("lampu5");
    let lampu6  = document.getElementById("lampu6");
    let lampu7  = document.getElementById("lampu7");
    let lampu8  = document.getElementById("lampu8");
    let lampu9  = document.getElementById("lampu9");
    let lampu10  = document.getElementById("lampu10");
    

        if (toggle1.checked){
            lampu1.src = "assets/images/on.gif"
        } else {
            lampu1.src = "assets/images/off.gif";
        }
        if (toggle2.checked){
            lampu2.src = "assets/images/on.gif"
        } else {
            lampu2.src = "assets/images/off.gif";
        }

        if (toggle3.checked){
            lampu3.src = "assets/images/on.gif"
        } else {
            lampu3.src = "assets/images/off.gif";
        }

        if (toggle4.checked){
            lampu4.src = "assets/images/on.gif"
        } else {
            lampu4.src = "assets/images/off.gif";
        }
        
        if(toggle5.checked){
            lampu5.src = "assets/images/on.gif";
        } else {
            lampu5.src = "assets/images/off.gif"
        }

        if(toggle6.checked){
            lampu6.src = "assets/images/on.gif";
        } else {
            lampu6.src = "assets/images/off.gif"
        }

        if(toggle7.checked){
            lampu7.src = "assets/images/on.gif";
        } else {
            lampu7.src = "assets/images/off.gif"
        }


        if(toggle8.checked){
            lampu8.src = "assets/images/on.gif";
        } else {
            lampu8.src = "assets/images/off.gif"
        }



        if(toggle9.checked){
            lampu9.src = "assets/images/on.gif";
        } else {
            lampu9.src = "assets/images/off.gif"
        }



        if(toggle10.checked){
            lampu10.src = "assets/images/on.gif";
        } else {
            lampu10.src = "assets/images/off.gif"
        }





    }

    
    
        let body = document.body;
        let info = document.getElementById("info");
        let modeDark = document.getElementById("modeDark");
        let home = document.getElementById("home");

        const darkLimit = 5;
        let darkCounter = 0;
        let darkRemainingLeft ;
        

        function darkMode() {
            if(darkRemainingLeft == 0){
                info.textContent = "JATAH FITUR DARKMODE ANDA SUDAH HABIS"
                home.textContent = "RESTART" 
                modeDark.style.display = "none";
                return;
            }
          
            darkCounter += 1;
            darkRemainingLeft = darkLimit - darkCounter;

            //render ke info element
            info.textContent = `DarkMode dipakai ${darkCounter} kali, tersisa ${darkRemainingLeft}`
            body.classList.toggle("dark");

            if (modeDark.textContent === "DARK MODE") {
                modeDark.textContent = "LIGHT MODE";
            } else {
                modeDark.textContent = "DARK MODE";
            }
        }
    


        
        function reRender(){
            location.reload();
        }
    
    




let imagesArray = new Array(6);



let buttons = document.getElementsByClassName('button');

imagesArray[0] = "images/1.jpg";
imagesArray[1] = "images/2.jpg";
imagesArray[2] = "images/3.jpg";
imagesArray[3] = "images/4.jpg";
imagesArray[4] = "images/5.jpg";



j = 0;


function swipeRight() {
    if(j > 4){
        j = 0;
    }
         let h = j;
            for (let i = 0; i < 5; i++) {
                if(j == 4) {
                    document.images[i].src = imagesArray[0];
                } else {
                    document.images[i].src = imagesArray[j+1];
                }
                j++;
                if(j > 4){
                    j = 0;
                }
            }
        j = h;
    j++;
}
function swipeLeft() {
    j--;
    if(j < 0){
        j = 4;
    }
    let h = j;
            for (let i = 4; i >= 0; i--) {
                if(j == 0){
                    document.images[i].src = imagesArray[4];
                } else {
                    document.images[i].src = imagesArray[j-1];
                }
                j--;
                if(j < 0){
                    j = 4;
                }
            }
    j = h;
}


function toggle(id) {
    

        for(let j=0; j<buttons.length; j++){
            buttons[j].classList.remove('active');
        }
    
        buttons[id-1].classList.add('active');
        
        if (id > 3) {
            for (i = 3 ; i < id; i++) {swipeRight();} 
        }

        else if(id < 3){
            for (i = 3; i > id; i--){swipeLeft();}
        }
    
       
              
     


    for(let i=0; i<buttons.length; i++){
        buttons[i].classList.remove('active');
    }

    buttons[id-1].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function(){
    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-image');
    const mobileContent = document.getElementById('mobile-content');    
    
                    // OPEN THE MOBILE CONTENT
    openMenu.addEventListener('click', function(){
        mobileContent.style.display = "block";
        openMenu.style.display = "none";
    });
                    
                
                    // CLOSE THE MOBILE CONTENT
    closeMenu.addEventListener('click', function(){
        mobileContent.style.display = "none"
        openMenu.style.display = "block";
    });


});

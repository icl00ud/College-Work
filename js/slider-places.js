//banner lugares

    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides1");
      let dots = document.getElementsByClassName("dot1");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 6000); // Change image every 6 seconds
    }


    let slideIndex2 = 0;
    showSlides2();
    
    function showSlides2() {
      let i;
      let slides2 = document.getElementsByClassName("mySlides2");
      let dots2 = document.getElementsByClassName("dot2");
      for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";  
      }
      slideIndex2++;
      if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
      for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
      }
      slides2[slideIndex2-1].style.display = "block";  
      dots2[slideIndex2-1].className += " active";
      setTimeout(showSlides2, 6000); // Change image every 6 seconds
    }


    let slideIndex3 = 0;
    showSlides3();
    
    function showSlides3() {
      let i;
      let slides2 = document.getElementsByClassName("mySlides3");
      let dots2 = document.getElementsByClassName("dot3");
      for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";  
      }
      slideIndex3++;
      if (slideIndex3 > slides2.length) {slideIndex3 = 1}    
      for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
      }
      slides2[slideIndex3-1].style.display = "block";  
      dots2[slideIndex3-1].className += " active";
      setTimeout(showSlides3, 6000); // Change image every 6 seconds
    }
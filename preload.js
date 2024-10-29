/*DE HAMBURGER MENU KNOP*/
function hamburgerbutton() {
  var x = document.getElementById("hamburgermenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Dit is een script dat alle pagina's van de site van te voren downloadt op de achtergrond. Dat zorgt voor een snellere site.

    // Function to handle link clicks
    function handleLinkClick(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        
        // Get the href attribute of the clicked link
        var nextPage = this.getAttribute('href');
        
        // Fetch the content of the next page asynchronously
        fetch(nextPage)
        .then(response => response.text())
        .then(html => {
            // Create a temporary container to hold the fetched content
            var tempContainer = document.createElement('div');
            tempContainer.innerHTML = html;
            
            // Extract the main content of the next page
            var nextPageContent = tempContainer.querySelector('.main-content'); // Adjust the selector as per your page structure
            
            // Replace the current page content with the content of the next page
            document.body.innerHTML = nextPageContent.innerHTML;
            
            // Update the URL in the address bar
            history.pushState({}, '', nextPage);
        })
        .catch(error => console.error('Error fetching page:', error));
    }

    // Add event listeners to all links with class "page-link"
    var pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

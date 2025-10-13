// Simple JavaScript for website interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all nav links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Add hover effects to publication cards
    const publicationCards = document.querySelectorAll('.publication-card, .publication-item');
    
    publicationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click handlers for publication links
    const pubLinks = document.querySelectorAll('.pub-link');
    
    pubLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Handle abstract toggle
            if (this.classList.contains('abstract-toggle')) {
                e.preventDefault();
                const publicationItem = this.closest('.publication-item');
                const abstract = publicationItem.querySelector('.publication-abstract');
                const bibtex = publicationItem.querySelector('.publication-bibtex');
                const bibtexToggle = publicationItem.querySelector('.bibtex-toggle');
                
                // Close bibtex if open
                if (bibtex && bibtex.style.display === 'block') {
                    bibtex.style.display = 'none';
                    bibtexToggle.classList.remove('active');
                }
                
                // Toggle abstract
                if (abstract.style.display === 'none' || abstract.style.display === '') {
                    abstract.style.display = 'block';
                    this.classList.add('active');
                } else {
                    abstract.style.display = 'none';
                    this.classList.remove('active');
                }
            } else if (this.classList.contains('bibtex-toggle')) {
                e.preventDefault();
                const publicationItem = this.closest('.publication-item');
                const abstract = publicationItem.querySelector('.publication-abstract');
                const bibtex = publicationItem.querySelector('.publication-bibtex');
                const abstractToggle = publicationItem.querySelector('.abstract-toggle');
                
                // Close abstract if open
                if (abstract && abstract.style.display === 'block') {
                    abstract.style.display = 'none';
                    abstractToggle.classList.remove('active');
                }
                
                // Toggle bibtex
                if (bibtex.style.display === 'none' || bibtex.style.display === '') {
                    bibtex.style.display = 'block';
                    this.classList.add('active');
                } else {
                    bibtex.style.display = 'none';
                    this.classList.remove('active');
                }
            } else if (this.getAttribute('href') === '#') {
                // For demo purposes, prevent default and show alert
                e.preventDefault();
                const linkType = this.textContent.trim();
                alert(`This would open the ${linkType} for the publication.`);
            }
        });
    });

    // Add click handlers for talk links
    const talkLinks = document.querySelectorAll('.talk-link');
    
    talkLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // For demo purposes, prevent default and show alert
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                const linkType = this.textContent.trim();
                alert(`This would open the ${linkType} for the talk.`);
            }
        });
    });

    // Add click handlers for media links
    const mediaLinks = document.querySelectorAll('.media-link');
    
    mediaLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // For demo purposes, prevent default and show alert
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('This would open the media article in a new tab.');
            }
        });
    });

    // Add click handlers for award links
    const awardLinks = document.querySelectorAll('.award-link');
    
    awardLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // For demo purposes, prevent default and show alert
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('This would open the awardees page.');
            }
        });
    });

    // Add click handlers for year links in service page
    const yearLinks = document.querySelectorAll('.year-link');
    
    yearLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // For demo purposes, prevent default and show alert
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                const year = this.textContent.trim();
                alert(`This would show details for service in ${year}.`);
            }
        });
    });

    // Add animation to hero section on load
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 100);
    }

    // Header is now truly static - no scroll effects
});

// Function to handle mobile menu
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar && overlay) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', toggleMobileMenu);
    }
    
    // Close sidebar when clicking on sidebar links on mobile
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleMobileMenu();
            }
        });
    });
});

// Function to handle search (if needed in future)
function handleSearch(query) {
    console.log('Searching for:', query);
    // Implement search functionality
}

// Function to handle theme toggle (if needed in future)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

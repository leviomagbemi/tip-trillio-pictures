    // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Hero Slideshow
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.slide-dot');
        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.remove('inactive-slide');
                    slide.classList.add('active-slide');
                } else {
                    slide.classList.remove('active-slide');
                    slide.classList.add('inactive-slide');
                }
            });
            
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('bg-opacity-100');
                } else {
                    dot.classList.remove('bg-opacity-100');
                }
            });
            
            currentSlide = index;
        }
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = parseInt(dot.getAttribute('data-slide'));
                showSlide(slideIndex);
            });
        });
        
        // Auto-advance slides
        setInterval(() => {
            const nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 5000);
        
        // Portfolio Filter
        const portfolioFilters = document.querySelectorAll('.portfolio-filter');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                // Update active filter button
                portfolioFilters.forEach(f => {
                    if (f === filter) {
                        f.classList.remove('bg-gray-200', 'hover:bg-gray-300');
                        f.classList.add('bg-amber-600', 'text-white');
                    } else {
                        f.classList.remove('bg-amber-600', 'text-white');
                        f.classList.add('bg-gray-200', 'hover:bg-gray-300');
                    }
                });
                
                // Filter items
                const filterValue = filter.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
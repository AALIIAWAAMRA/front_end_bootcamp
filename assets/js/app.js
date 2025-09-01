// Alpine.js Data Functions

// Curriculum Data
function curriculumData() {
    return {
        showSyllabusModal: false,
        htmlDays: [
            {
                id: 1,
                day: 1,
                title: "HTML Fundamentals",
                expanded: false,
                topics: [
                    "HTML document structure and syntax",
                    "Essential HTML tags and elements",
                    "Semantic HTML5 elements",
                    "Document head and meta tags",
                    "HTML validation and best practices"
                ],
                project: "Create a personal portfolio homepage with semantic HTML"
            },
            {
                id: 2,
                day: 2,
                title: "Forms & Media",
                expanded: false,
                topics: [
                    "HTML forms and input types",
                    "Form validation attributes",
                    "Images, audio, and video elements",
                    "Tables and data presentation",
                    "Links and navigation"
                ],
                project: "Build a contact form with various input types and media gallery"
            },
            {
                id: 3,
                day: 3,
                title: "Advanced HTML",
                expanded: false,
                topics: [
                    "HTML5 semantic elements deep dive",
                    "Accessibility best practices",
                    "ARIA attributes and roles",
                    "SEO-friendly HTML structure",
                    "HTML debugging and troubleshooting"
                ],
                project: "Create an accessible multi-page website structure"
            }
        ],
        cssDays: [
            {
                id: 4,
                day: 4,
                title: "CSS Fundamentals",
                expanded: false,
                topics: [
                    "CSS syntax and selectors",
                    "Box model and layout basics",
                    "Colors, typography, and text styling",
                    "CSS units and measurements",
                    "CSS specificity and cascade"
                ],
                project: "Style the HTML portfolio with modern CSS"
            },
            {
                id: 5,
                day: 5,
                title: "Advanced Styling",
                expanded: false,
                topics: [
                    "CSS positioning and z-index",
                    "Pseudo-classes and pseudo-elements",
                    "CSS transforms and transitions",
                    "CSS animations and keyframes",
                    "Custom properties (CSS variables)"
                ],
                project: "Create animated navigation and interactive elements"
            },
            {
                id: 6,
                day: 6,
                title: "Responsive Design",
                expanded: false,
                topics: [
                    "Mobile-first design principles",
                    "CSS media queries",
                    "Flexible layouts with percentages",
                    "Responsive images and media",
                    "Viewport units and modern CSS"
                ],
                project: "Make the portfolio fully responsive across devices"
            },
            {
                id: 7,
                day: 7,
                title: "CSS Grid & Flexbox",
                expanded: false,
                topics: [
                    "CSS Flexbox fundamentals and properties",
                    "CSS Grid layout system",
                    "Creating complex layouts with Grid",
                    "Combining Flexbox and Grid",
                    "Modern CSS layout best practices"
                ],
                project: "Rebuild portfolio layout using Grid and Flexbox"
            }
        ],
        jsDays: [
            {
                id: 8,
                day: 8,
                title: "JavaScript Basics",
                expanded: false,
                topics: [
                    "JavaScript syntax and variables",
                    "Data types and operators",
                    "Functions and scope",
                    "Control structures (if/else, loops)",
                    "Basic debugging with console"
                ],
                project: "Create interactive calculator with basic operations"
            },
            {
                id: 9,
                day: 9,
                title: "DOM Manipulation",
                expanded: false,
                topics: [
                    "Understanding the DOM",
                    "Selecting and modifying elements",
                    "Event handling and listeners",
                    "Dynamic content creation",
                    "Form validation with JavaScript"
                ],
                project: "Add interactive features to portfolio (form validation, dynamic content)"
            },
            {
                id: 10,
                day: 10,
                title: "Arrays & Objects",
                expanded: false,
                topics: [
                    "Working with arrays and array methods",
                    "Objects and object-oriented concepts",
                    "JSON data manipulation",
                    "Local storage and data persistence",
                    "Error handling and debugging"
                ],
                project: "Build a task management app with local storage"
            },
            {
                id: 11,
                day: 11,
                title: "Async JavaScript",
                expanded: false,
                topics: [
                    "Understanding asynchronous JavaScript",
                    "Promises and async/await",
                    "Fetch API and HTTP requests",
                    "Working with APIs",
                    "Handling loading states and errors"
                ],
                project: "Create a weather app using external API"
            },
            {
                id: 12,
                day: 12,
                title: "Final Project",
                expanded: false,
                topics: [
                    "Project planning and architecture",
                    "Combining HTML, CSS, and JavaScript",
                    "Code organization and best practices",
                    "Testing and debugging",
                    "Deployment and hosting"
                ],
                project: "Complete a comprehensive web application showcasing all skills learned"
            }
        ],

        toggleDay(dayId) {
            // Find the day in all arrays
            const allDays = [...this.htmlDays, ...this.cssDays, ...this.jsDays];
            const day = allDays.find(d => d.id === dayId);
            if (day) {
                day.expanded = !day.expanded;
            }
        }
    }
}

// Pricing Data
function pricingData() {
    return {
        currentPlan: 'individual',
        plans: {
            individual: {
                name: 'Individual Plan',
                price: '3500',
                period: 'total',
                features: [
                    'Full 12-day curriculum access',
                    'Hands-on projects and assignments',
                    'Industry-recognized certificate',
                    'GitHub portfolio development',
                    'Career guidance session',
                    'Community access and networking',
                    'Lifetime access to course materials'
                ],
                requirements: null
            },
            student: {
                name: 'Student Discount',
                price: '2000',
                period: 'total',
                features: [
                    'Full 12-day curriculum access',
                    'Hands-on projects and assignments',
                    'Industry-recognized certificate',
                    'GitHub portfolio development',
                    'Career guidance session',
                    'Community access and networking',
                    'Lifetime access to course materials'
                ],
                requirements: 'Valid student ID required. Available for university and college students only.'
            },
            group: {
                name: 'Group Enrollment',
                price: '150',
                period: 'per person',
                features: [
                    'Full 12-day curriculum access',
                    'Hands-on projects and assignments',
                    'Industry-recognized certificates',
                    'GitHub portfolio development',
                    'Group mentoring sessions',
                    'Team collaboration projects',
                    'Bulk certificate processing',
                    'Custom scheduling options'
                ],
                requirements: 'Minimum 5 participants required. Maximum 20 participants per group. Special scheduling available.'
            }
        }
    }
}

// Registration Form
function registrationForm() {
    return {
        isSubmitting: false,
        showSuccess: false,
        showConfirmation: false,
        confirmationId: '',
        form: {
            fullName: '',
            email: '',
            phone: '',
            ticketType: '',
            groupSize: '',
            studentId: ''
        },
        errors: {},

        validateForm() {
            this.errors = {};

            // Name validation
            if (!this.form.fullName.trim()) {
                this.errors.fullName = 'Full name is required';
            } else if (this.form.fullName.trim().length < 2) {
                this.errors.fullName = 'Name must be at least 2 characters';
            }

            // Email validation
            if (!this.form.email.trim()) {
                this.errors.email = 'Email address is required';
            } else if (!this.isValidEmail(this.form.email)) {
                this.errors.email = 'Please enter a valid email address';
            }

            // Phone validation
            if (!this.form.phone.trim()) {
                this.errors.phone = 'Phone number is required';
            } else if (!this.isValidPhone(this.form.phone)) {
                this.errors.phone = 'Please enter a valid phone number';
            }

            // Ticket type validation
            if (!this.form.ticketType) {
                this.errors.ticketType = 'Please select a ticket type';
            }

            // Group size validation for group tickets
            if (this.form.ticketType === 'group' && (!this.form.groupSize || this.form.groupSize < 5)) {
                this.errors.groupSize = 'Group size must be at least 5 people';
            }

            return Object.keys(this.errors).length === 0;
        },

        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },

        isValidPhone(phone) {
            // Simple phone validation - accepts various formats
            const phoneRegex = /^[\+]?[\d\s\-\(\)]{8,}$/;
            return phoneRegex.test(phone.replace(/\s/g, ''));
        },

        async submitForm() {
            if (!this.validateForm()) {
                return;
            }

            this.isSubmitting = true;

            // Simulate form submission delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Generate confirmation ID
            this.confirmationId = 'BC' + Date.now().toString().slice(-8);

            // Save to localStorage
            this.saveToLocalStorage();

            // Show success message
            this.showSuccess = true;
            this.isSubmitting = false;

            // Reset form after 3 seconds
            setTimeout(() => {
                this.resetForm();
            }, 5000);
        },

        saveToLocalStorage() {
            const registrationData = {
                ...this.form,
                confirmationId: this.confirmationId,
                registrationDate: new Date().toISOString(),
                timestamp: Date.now()
            };

            // Get existing registrations
            let registrations = [];
            try {
                const existing = localStorage.getItem('bootcamp_registrations');
                if (existing) {
                    registrations = JSON.parse(existing);
                }
            } catch (error) {
                console.error('Error reading localStorage:', error);
            }

            // Add new registration
            registrations.push(registrationData);

            // Save back to localStorage
            try {
                localStorage.setItem('bootcamp_registrations', JSON.stringify(registrations));
                localStorage.setItem('latest_registration', JSON.stringify(registrationData));
            } catch (error) {
                console.error('Error saving to localStorage:', error);
            }
        },

        printConfirmation() {
            this.showConfirmation = true;
            // Wait for DOM update then print
            this.$nextTick(() => {
                setTimeout(() => {
                    window.print();
                }, 100);
            });
        },

        resetForm() {
            this.form = {
                fullName: '',
                email: '',
                phone: '',
                ticketType: '',
                groupSize: '',
                studentId: ''
            };
            this.errors = {};
            this.showSuccess = false;
            this.showConfirmation = false;
        }
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navbar
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe sections for animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Add fade-in animation styles
    const style = document.createElement('style');
    style.textContent = `
        section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        section.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        .navbar.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);
});

// Utility functions
function formatPhoneNumber(input) {
    // Auto-format phone number as user types
    let value = input.value.replace(/\D/g, '');
    let formattedValue = '';
    
    if (value.length > 0) {
        if (value.length <= 3) {
            formattedValue = value;
        } else if (value.length <= 6) {
            formattedValue = value.slice(0, 3) + ' ' + value.slice(3);
        } else {
            formattedValue = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 10);
        }
    }
    
    input.value = formattedValue;
}

// Add phone formatting to phone inputs
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('input', function(e) {
        if (e.target.type === 'tel') {
            formatPhoneNumber(e.target);
        }
    });
});

// Error handling for localStorage
function handleStorageError(error) {
    console.error('Storage error:', error);
    // Could show user-friendly message here
    alert('There was an issue saving your registration. Please try again or contact support.');
}

// Export functions for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        curriculumData,
        pricingData,
        registrationForm
    };
}
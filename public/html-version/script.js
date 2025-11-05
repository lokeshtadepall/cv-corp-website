// Course Data
const devOpsCourses = [
    {
        icon: '🐧',
        title: 'Linux Fundamentals',
        duration: '4 weeks',
        description: 'Master the foundation of DevOps with comprehensive Linux training, including system administration and command-line expertise.',
        topics: [
            'Linux Installation & Configuration',
            'File System Navigation',
            'User & Permission Management',
            'Process Management',
            'Package Management',
            'System Monitoring'
        ]
    },
    {
        icon: '📜',
        title: 'Shell Scripting',
        duration: '3 weeks',
        description: 'Automate tasks and build powerful scripts using Bash shell scripting for efficient system management.',
        topics: [
            'Bash Scripting Basics',
            'Variables & Data Types',
            'Loops & Conditionals',
            'Functions & Arguments',
            'File Operations',
            'Automation Scripts'
        ]
    },
    {
        icon: '🐍',
        title: 'Python for DevOps',
        duration: '4 weeks',
        description: 'Learn Python programming focused on DevOps automation, scripting, and infrastructure management.',
        topics: [
            'Python Fundamentals',
            'File & Data Handling',
            'API Integration',
            'Automation Scripts',
            'Working with Libraries',
            'Error Handling'
        ]
    },
    {
        icon: '🔀',
        title: 'Git & Version Control',
        duration: '2 weeks',
        description: 'Master Git for version control, collaboration, and code management in team environments.',
        topics: [
            'Git Basics & Commands',
            'Branching Strategies',
            'Merging & Conflicts',
            'GitHub/GitLab Workflows',
            'Pull Requests & Reviews',
            'CI/CD Integration'
        ]
    },
    {
        icon: '🐳',
        title: 'Docker & Containerization',
        duration: '4 weeks',
        description: 'Build, ship, and run applications in containers using Docker for consistent deployment environments.',
        topics: [
            'Container Fundamentals',
            'Docker Images & Registry',
            'Dockerfile Creation',
            'Docker Compose',
            'Networking & Volumes',
            'Multi-container Apps'
        ]
    },
    {
        icon: '☸️',
        title: 'Kubernetes',
        duration: '5 weeks',
        description: 'Orchestrate containerized applications at scale with Kubernetes, the industry-standard platform.',
        topics: [
            'K8s Architecture',
            'Pods & Deployments',
            'Services & Networking',
            'ConfigMaps & Secrets',
            'Scaling & Auto-healing',
            'Helm Charts'
        ]
    },
    {
        icon: '🔧',
        title: 'Jenkins CI/CD',
        duration: '3 weeks',
        description: 'Implement continuous integration and deployment pipelines using Jenkins for automated software delivery.',
        topics: [
            'Jenkins Setup & Configuration',
            'Pipeline as Code',
            'Build Automation',
            'Testing Integration',
            'Deployment Strategies',
            'Plugin Management'
        ]
    },
    {
        icon: '🏗️',
        title: 'Terraform',
        duration: '4 weeks',
        description: 'Master Infrastructure as Code with Terraform to provision and manage cloud resources efficiently.',
        topics: [
            'IaC Fundamentals',
            'Terraform Configuration',
            'Providers & Resources',
            'State Management',
            'Modules & Workspaces',
            'Cloud Deployments'
        ]
    }
];

const dataScienceCourses = [
    {
        icon: '🐍',
        title: 'Python for Data Science',
        duration: '4 weeks',
        description: 'Learn Python programming with focus on data manipulation, analysis, and visualization libraries.',
        topics: [
            'Python Fundamentals',
            'NumPy & Pandas',
            'Data Structures',
            'File Operations',
            'Libraries & Packages',
            'Jupyter Notebooks'
        ]
    },
    {
        icon: '📊',
        title: 'Statistics & Probability',
        duration: '3 weeks',
        description: 'Build strong mathematical foundations essential for data science and machine learning.',
        topics: [
            'Descriptive Statistics',
            'Probability Theory',
            'Distributions',
            'Hypothesis Testing',
            'Correlation & Regression',
            'Statistical Inference'
        ]
    },
    {
        icon: '📈',
        title: 'Data Analysis',
        duration: '4 weeks',
        description: 'Master data cleaning, exploration, and visualization techniques to extract meaningful insights.',
        topics: [
            'Data Cleaning',
            'Exploratory Data Analysis',
            'Data Visualization',
            'Matplotlib & Seaborn',
            'Data Transformation',
            'Reporting & Dashboards'
        ]
    },
    {
        icon: '🤖',
        title: 'Machine Learning',
        duration: '6 weeks',
        description: 'Learn supervised and unsupervised learning algorithms to build predictive models.',
        topics: [
            'ML Fundamentals',
            'Supervised Learning',
            'Unsupervised Learning',
            'Model Evaluation',
            'Feature Engineering',
            'Scikit-learn'
        ]
    },
    {
        icon: '🧠',
        title: 'AI Fundamentals',
        duration: '4 weeks',
        description: 'Explore artificial intelligence concepts, neural networks, and deep learning basics.',
        topics: [
            'AI Overview',
            'Neural Networks',
            'Deep Learning Basics',
            'TensorFlow & Keras',
            'Image Recognition',
            'Natural Language Processing'
        ]
    },
    {
        icon: '💼',
        title: 'Capstone Projects',
        duration: '4 weeks',
        description: 'Apply your skills to real-world projects, building a portfolio that showcases your expertise.',
        topics: [
            'Project Planning',
            'Data Collection',
            'Model Development',
            'Evaluation & Tuning',
            'Deployment',
            'Presentation & Documentation'
        ]
    }
];

// Render Courses
function renderCourses() {
    const devopsContainer = document.getElementById('devopsCourses');
    const dataScContainer = document.getElementById('dataScienceCourses');
    
    devOpsCourses.forEach((course, index) => {
        devopsContainer.innerHTML += createCourseCard(course, index);
    });
    
    dataScienceCourses.forEach((course, index) => {
        dataScContainer.innerHTML += createCourseCard(course, index + devOpsCourses.length);
    });
}

function createCourseCard(course, index) {
    return `
        <div class="course-card" data-index="${index}">
            <div class="course-header">
                <div class="course-icon">${course.icon}</div>
                <span class="course-duration">${course.duration}</span>
            </div>
            <h4 class="course-title">${course.title}</h4>
            <p class="course-description">${course.description}</p>
            <div class="course-topics" id="topics-${index}">
                <p class="topics-title">What you'll learn:</p>
                <ul class="topics-list">
                    ${course.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
            </div>
            <a href="#" class="learn-more-btn" data-index="${index}">
                Learn More →
            </a>
        </div>
    `;
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scroll for Navigation
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = 80;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Course Toggle Functionality
function setupCourseToggles() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('learn-more-btn')) {
            e.preventDefault();
            const index = e.target.dataset.index;
            const topicsDiv = document.getElementById(`topics-${index}`);
            
            if (topicsDiv.classList.contains('expanded')) {
                topicsDiv.classList.remove('expanded');
                e.target.textContent = 'Learn More →';
            } else {
                topicsDiv.classList.add('expanded');
                e.target.textContent = 'Show Less ↑';
            }
        }
    });
}

// Contact Form Handling
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            course: document.getElementById('course').value
        };
        
        // Log form data (in real app, send to server)
        console.log('Form submitted:', formData);
        
        // Show success message
        form.style.display = 'none';
        successMessage.classList.add('show');
        
        // Reset form after 5 seconds
        setTimeout(() => {
            form.style.display = 'block';
            successMessage.classList.remove('show');
            form.reset();
        }, 5000);
    });
}

// Header Scroll Effect
function setupHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    setupMobileMenu();
    setupSmoothScroll();
    setupCourseToggles();
    setupContactForm();
    setupHeaderScroll();
    
    console.log('DESHON DEVSOL website loaded successfully!');
});

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.course-card, .skill-card, .approach-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Call animation function after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateOnScroll, 100);
});

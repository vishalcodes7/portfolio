/* ============================================================
   CYBERSECURITY PORTFOLIO — MAIN JAVASCRIPT
   Description: Handles all interactive features including
   navigation, scroll animations, modals, and UI enhancements.
   No external libraries or frameworks used.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── ELEMENT REFERENCES ───
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.querySelector('.back-to-top');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  const fadeElements = document.querySelectorAll('.fade-in');


  // ─── 1. MOBILE HAMBURGER MENU ───
  // Toggles the mobile navigation drawer open/closed.
  // Also animates the hamburger icon into an X shape.

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when any navigation link is clicked
  navAnchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });


  // ─── 2. SMOOTH SCROLLING ───
  // Intercepts all anchor links that start with '#' and smoothly
  // scrolls to the target section instead of jumping.

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');

      // Handle the "#" (top of page) link
      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  // ─── 3. ACTIVE NAV HIGHLIGHTING ───
  // Watches the scroll position and highlights the navigation
  // link corresponding to the currently visible section.

  const highlightActiveNav = () => {
    const scrollY = window.scrollY + 150; // Offset for navbar height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        // Remove 'active' class from all nav links
        navAnchors.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the matching nav link
        const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  };


  // ─── 4. SCROLL ANIMATIONS (Intersection Observer) ───
  // Uses the Intersection Observer API to add a 'visible' class
  // to elements when they enter the viewport, triggering CSS
  // fade-in animations. This is more performant than listening
  // to scroll events for every element.

  const observerOptions = {
    root: null,         // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.15     // Trigger when 15% of element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  };

  const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

  fadeElements.forEach(el => {
    scrollObserver.observe(el);
  });


  // ─── 5. PROJECT MODAL ───
  // Opens a modal popup with full project details when the
  // "View Details" button is clicked on a project card.
  // The modal can be closed by:
  //   - Clicking the close button (×)
  //   - Clicking outside the modal (on the overlay)
  //   - Pressing the Escape key

  // Store project data in an array for easy lookup
  const projectData = [];
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card, index) => {
    // Extract data from data attributes on each card
    projectData.push({
      title: card.dataset.title || card.querySelector('h3').textContent,
      description: card.dataset.fullDescription || card.querySelector('p').textContent,
      tags: card.dataset.tags || '',
      github: card.dataset.github || ''
    });

    // Attach click event to the "View Details" button
    const detailsBtn = card.querySelector('.btn-details');
    if (detailsBtn) {
      detailsBtn.addEventListener('click', () => {
        openModal(index);
      });
    }
  });

  /**
   * Opens the project modal and populates it with data
   * from the selected project.
   * @param {number} index - Index of the project in projectData array
   */
  const openModal = (index) => {
    const project = projectData[index];
    if (!project) return;

    // Populate modal content
    const modalTitle = modalOverlay.querySelector('.modal-title');
    const modalDescription = modalOverlay.querySelector('.modal-description');
    const modalTags = modalOverlay.querySelector('.modal-tags');
    const modalLinks = modalOverlay.querySelector('.modal-links');

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDescription) modalDescription.textContent = project.description;

    // Build tags
    if (modalTags) {
      modalTags.innerHTML = '';
      const tags = project.tags.split(',').filter(t => t.trim());
      tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'project-tag';
        span.textContent = tag.trim();
        modalTags.appendChild(span);
      });
    }

    // Build links
    if (modalLinks) {
      modalLinks.innerHTML = '';
      if (project.github && project.github !== '#') {
        const link = document.createElement('a');
        link.href = project.github;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'btn btn-outline';
        link.textContent = '⬡ View on GitHub';
        modalLinks.appendChild(link);
      }
    }

    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  /**
   * Closes the project modal and restores background scrolling.
   */
  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  };

  // Close modal on close button click
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close modal when clicking outside (on the overlay background)
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Close modal on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });


  // ─── 6. NAVBAR BACKGROUND CHANGE ON SCROLL ───
  // Makes the navbar transparent at the top of the page and
  // adds a solid background with blur effect when scrolled down.

  const handleNavbarScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };


  // ─── 7. BACK TO TOP BUTTON ───
  // Shows a floating button after scrolling down 300px.
  // Clicking it smoothly scrolls back to the top of the page.

  const handleBackToTop = () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  // ─── CONSOLIDATED SCROLL EVENT LISTENER ───
  // All scroll-dependent functions are called from a single
  // scroll listener for better performance.

  window.addEventListener('scroll', () => {
    highlightActiveNav();
    handleNavbarScroll();
    handleBackToTop();
  });

  // Run on load to set initial states
  highlightActiveNav();
  handleNavbarScroll();
  handleBackToTop();


  // ─── SKILL BAR ANIMATION ───
  // Animate skill bars when they enter the viewport.
  // The width is read from the data-level attribute on each bar.

  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const skillObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const skillObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.dataset.level || '0';
        entry.target.style.width = level + '%';
        observer.unobserve(entry.target);
      }
    });
  };

  const skillObserver = new IntersectionObserver(skillObserverCallback, skillObserverOptions);

  skillBars.forEach(bar => {
    bar.style.width = '0%'; // Start at 0
    skillObserver.observe(bar);
  });

}); // END DOMContentLoaded

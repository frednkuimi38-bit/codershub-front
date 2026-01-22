import { useEffect } from 'react';

export const useAccessibility = () => {
  useEffect(() => {
    // Gestion du focus pour l'accessibilité
    const handleFocusTrap = (event) => {
      if (event.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    // Gestion des raccourcis clavier
    const handleKeyboardShortcuts = (event) => {
      // Alt + S : Skip to main content
      if (event.altKey && event.key === 's') {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          event.preventDefault();
        }
      }
      
      // Escape : Close modals
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal.style.display !== 'none') {
            modal.style.display = 'none';
          }
        });
      }
    };

    // Ajouter les écouteurs d'événements
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Nettoyage
    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcuts);
    };
  }, []);
};

export const announceToScreenReader = (message) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    if (announcement && announcement.parentNode === document.body) {
      document.body.removeChild(announcement);
    }
  }, 1000);
};

export default useAccessibility;

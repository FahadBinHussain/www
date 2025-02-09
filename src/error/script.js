"use strict";

// Redirect to home after 5 seconds
setTimeout(() => {
    window.location.href = '/home';
}, 5000);

// Optional: Add interactive error logging
window.addEventListener('error', function(e) {
    console.error('Client-side error:', e.error);
    // Here you could add API error reporting
});
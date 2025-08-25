// Custom dropdown functionality for search and profile
document.addEventListener('DOMContentLoaded', function() {
    // Search dropdown functionality
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    const dropdownOptions = document.querySelectorAll('.dropdown-options');

    // Initially hide all dropdowns
    dropdownOptions.forEach(options => options.classList.remove('show'));

    // Show dropdowns only when their respective trigger is clicked
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdownId = this.getAttribute('data-dropdown');
            const targetDropdown = document.getElementById(dropdownId + '-dropdown');

            // Close all other dropdowns
            dropdownOptions.forEach(options => {
                if (options !== targetDropdown) {
                    options.classList.remove('show');
                }
            });

            // Toggle current dropdown
            targetDropdown.classList.toggle('show');
            this.classList.toggle('active');
        });
    });

    // Handle option selection
    document.querySelectorAll('.dropdown-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const value = this.getAttribute('data-value');
            const text = this.textContent;
            const dropdownId = this.closest('.dropdown-options').id.replace('-dropdown', '');
            
            // Update the trigger text
            const trigger = document.querySelector(`[data-dropdown="${dropdownId}"]`);
            trigger.querySelector('.selected-text').textContent = text;
            
            // Update hidden input
            const hiddenInput = document.getElementById(dropdownId + '-input');
            if (hiddenInput) {
                hiddenInput.value = value;
            }
            
            // Close dropdown
            this.closest('.dropdown-options').classList.remove('show');
            trigger.classList.remove('active');
        });
    });

    // Profile dropdown functionality
    const profileTrigger = document.querySelector('.profile-trigger');
    const profileDropdown = document.querySelector('.dropdown-menu');

    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });

        // Close profile dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.profile-dropdown')) {
                profileDropdown.classList.remove('show');
            }
        });
    }

    // Close all dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.custom-dropdown') && !e.target.closest('.profile-dropdown')) {
            dropdownOptions.forEach(options => options.classList.remove('show'));
            if (profileDropdown) profileDropdown.classList.remove('show');
            
            // Remove active class from all triggers
            dropdownTriggers.forEach(trigger => trigger.classList.remove('active'));
        }
    });

    // Close dropdowns with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdownOptions.forEach(options => options.classList.remove('show'));
            if (profileDropdown) profileDropdown.classList.remove('show');
            dropdownTriggers.forEach(trigger => trigger.classList.remove('active'));
        }
    });
});
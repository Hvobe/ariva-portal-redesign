// Ariva Header Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const headerNav = document.querySelector('.header-nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            headerNav.classList.toggle('mobile-open');
            this.classList.toggle('active');
        });
    }

    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    const searchSuggestions = document.querySelector('.search-suggestions');
    const chartQuickBtn = document.querySelector('.chart-quick-btn');
    
    // Mock search suggestions data
    const mockSuggestions = [
        { name: 'SAP SE', isin: 'DE0007164600', type: 'Aktie' },
        { name: 'Siemens AG', isin: 'DE0007236101', type: 'Aktie' },
        { name: 'Deutsche Bank AG', isin: 'DE0005140008', type: 'Aktie' },
        { name: 'BASF SE', isin: 'DE000BASF111', type: 'Aktie' },
        { name: 'Volkswagen AG', isin: 'DE0007664039', type: 'Aktie' }
    ];

    // Search input handling
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim();
            
            if (query.length >= 2) {
                searchTimeout = setTimeout(() => {
                    showSearchSuggestions(query);
                }, 300);
            } else {
                hideSearchSuggestions();
            }
        });

        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                if (query) {
                    // Navigate to search results
                    window.location.href = `/suche?q=${encodeURIComponent(query)}`;
                }
            }
        });

        // Click outside to close suggestions
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-wrapper')) {
                hideSearchSuggestions();
            }
        });
    }

    // Chart quick button
    if (chartQuickBtn) {
        chartQuickBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                // Open chart tool with current search
                window.location.href = `/chart-tool?symbol=${encodeURIComponent(query)}`;
            } else {
                // Open empty chart tool
                window.location.href = '/chart-tool';
            }
        });
    }

    // Show search suggestions
    function showSearchSuggestions(query) {
        const filtered = mockSuggestions.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.isin.toLowerCase().includes(query.toLowerCase())
        );

        if (filtered.length > 0) {
            searchSuggestions.innerHTML = `
                <div class="suggestions-header">
                    <span class="text-sm text-secondary">Suchergebnisse</span>
                </div>
                ${filtered.map(item => `
                    <a href="/aktien/${item.isin}" class="suggestion-item">
                        <div class="suggestion-content">
                            <div class="suggestion-name">${item.name}</div>
                            <div class="suggestion-meta">
                                <span class="text-sm text-secondary">${item.isin}</span>
                                <span class="text-sm text-primary">${item.type}</span>
                            </div>
                        </div>
                        <button class="suggestion-chart-btn" onclick="openChart('${item.isin}'); return false;">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                                <path d="M2 18V7l5 5 4-7 7 7" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </button>
                    </a>
                `).join('')}
            `;
            searchSuggestions.style.display = 'block';
        } else {
            hideSearchSuggestions();
        }
    }

    // Hide search suggestions
    function hideSearchSuggestions() {
        searchSuggestions.style.display = 'none';
        searchSuggestions.innerHTML = '';
    }

    // Open chart function
    window.openChart = function(isin) {
        window.location.href = `/chart-tool?isin=${isin}`;
    };

    // Dropdown navigation enhancement
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
    
    dropdownItems.forEach(item => {
        let hoverTimeout;
        
        item.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            this.classList.add('hover');
        });
        
        item.addEventListener('mouseleave', function() {
            hoverTimeout = setTimeout(() => {
                this.classList.remove('hover');
            }, 200);
        });
    });

    // Sticky header scroll behavior
    let lastScroll = 0;
    const header = document.querySelector('.ariva-header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
            
            if (currentScroll > lastScroll && currentScroll > 200) {
                // Scrolling down
                header.classList.add('hidden');
            } else {
                // Scrolling up
                header.classList.remove('hidden');
            }
        } else {
            header.classList.remove('scrolled', 'hidden');
        }
        
        lastScroll = currentScroll;
    });
});

// Add CSS for search suggestions
const suggestionStyles = `
<style>
.suggestions-header {
    padding: var(--spacing-sm) var(--spacing-md);
    border-bottom: 1px solid var(--color-border);
}

.suggestion-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-sm) var(--spacing-md);
    text-decoration: none;
    color: var(--color-text-primary);
    transition: background-color var(--transition-base);
}

.suggestion-item:hover {
    background-color: var(--color-surface);
}

.suggestion-content {
    flex: 1;
}

.suggestion-name {
    font-weight: 500;
    margin-bottom: var(--spacing-xs);
}

.suggestion-meta {
    display: flex;
    gap: var(--spacing-md);
}

.suggestion-chart-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: var(--color-surface);
    color: var(--color-accent);
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: all var(--transition-base);
}

.suggestion-chart-btn:hover {
    background-color: var(--color-accent);
    color: white;
}

/* Sticky header states */
.ariva-header.scrolled {
    box-shadow: var(--shadow-md);
}

.ariva-header.hidden {
    transform: translateY(-100%);
    transition: transform var(--transition-slow);
}

/* Mobile menu animation */
.mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}
</style>
`;

// Inject additional styles
document.head.insertAdjacentHTML('beforeend', suggestionStyles);
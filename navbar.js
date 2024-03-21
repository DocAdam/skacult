.navbar {
    width: 100%;
    max-width: 1200px; /* Adjust this value based on your design preference */
    height: var(--navbar-height);
    background-color: #333; /* Dark grey */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed; /* Keeps the navbar at the top */
    top: 0;
    left: 50%; /* Center the navbar */
    transform: translateX(-50%); /* Align the center of the navbar with the center of the page */
    z-index: 1000; /* Ensures navbar stays above other content */
    margin: auto; /* Center the navbar if the page width exceeds max-width */
    padding: 0 20px; /* Add some padding on the sides */
}

/* Add this to ensure content isn't hidden behind the fixed navbar */
body {
    padding-top: var(--navbar-height); /* Adjust this value if your navbar height changes */
}

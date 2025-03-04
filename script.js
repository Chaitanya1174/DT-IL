function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    
    // If the sidebar is off-screen, slide it in, else slide it out
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Slide out
    } else {
        sidebar.style.left = '0px'; // Slide in
    }
}

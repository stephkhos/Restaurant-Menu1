// restaurant_menu.js

document.addEventListener('DOMContentLoaded', function () {
    const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
    const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
    const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

    displayMenu('breakfastMenuItems', 'Breakfast Menu', breakfastMenu);
    displayMenu('maincourseMenuItems', 'Main Course Menu', mainCourseMenu);
    displayMenu('dessertMenuItems', 'Dessert Menu', dessertMenu);

    function displayMenu(containerId, menuTitle, menuItems) {
        const totalItemsElement = document.getElementById(`${containerId.replace('MenuItems', 'TotalItems')}`);
        const menuItemsElement = document.getElementById(containerId);

        // Display total items count
        totalItemsElement.innerHTML = `<p>Total Items: ${menuItems.length}</p>`;

        // Display individual menu items
        const menuItemsHTML = menuItems.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        menuItemsElement.innerHTML = menuItemsHTML;
    }
});

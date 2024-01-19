// restaurant_menu.js

document.addEventListener('DOMContentLoaded', function () {
    const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
    const mainCourseMenu = ['Steak - $35.99', 'Pasta - $18.50', 'Burger - $14.99', 'Salmon - $28.75'];
    const dessertMenu = ['Cake - $10', 'Ice Cream - $7.99', 'Pudding - $9.50', 'Fruit Salad - $12.99'];

    displayMenu('breakfastMenuItems', 'Breakfast Menu', breakfastMenu);
    displayMenu('maincourseMenuItems', 'Main Course Menu', mainCourseMenu);
    displayMenu('dessertMenuItems', 'Dessert Menu', dessertMenu);

    function displayMenu(containerId, menuTitle, menuItems) {
        const totalItemsElement = document.getElementById(`${containerId.replace('MenuItems', 'TotalItems')}`);
        const menuItemsElement = document.getElementById(containerId);

        // Display total items count
        totalItemsElement.innerHTML = `<p>Total Items: ${menuItems.length}</p>`;

        // Display individual menu items with prices
        const menuItemsHTML = menuItems.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        menuItemsElement.innerHTML = menuItemsHTML;
    }
});


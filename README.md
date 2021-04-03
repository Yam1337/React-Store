# React Store App

<p align="center">
<img src="https://github.com/Yam1337/React-Store/blob/master/presentation-store.gif">
</p>
This project is a React Store App which uses React JavaScript Framework.
This project is a fake online store which stores products in REST API and navigates through it with React Router. Adding API Key on the start page makes them automaticly POST to this API. React Store APP consists off 5 pages. The start page, which requires API Key to start the application, the shop page which is fetching products from API and displaying them as a grid, the product details page, which is displaying chosen item in details with its description, the cart page which is storing our bought items, allow to delete them and show sum of all cart products, and the history page which contains history of shopping with its date.

# Technology stack
* ReactJS
* REST API
* React Router ([npm here](https://www.npmjs.com/package/react-router))
* React Hooks Global State ([npm here](https://www.npmjs.com/package/react-hooks-global-state))
* React Moment ([npm here](https://www.npmjs.com/package/react-moment))

# Notes

On some devices product list might be not FETCHed because of CORS policy. This problem is caused by used API, not by the App itself.

# Live

You can see it live on:
https://yam1337.github.io/React-Store/

# 🌍 Country Explorer

A responsive React.js web application that allows users to search for countries and view basic information such as their **flag, name, population, and capital city**.

The application fetches real-time country data using the **REST Countries API** and displays the results dynamically through reusable React components.

## 🚀 Live Demo

🔗 **[View Country Explorer Live](https://mycountryexplorer.netlify.app/)**

## ✨ Features

- 🔎 Search for countries by name
- 🏳️ Display country flag
- 🌍 Display country name
- 👥 Display population
- 🏛️ Display capital city
- 🌐 Fetch real-time data from REST Countries API
- ⚡ Dynamic data rendering
- 📱 Responsive user interface
- ❌ Handles invalid country searches
- 🧩 Reusable React components

## 🛠️ Technologies Used

- **React.js**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **REST Countries API**
- **Fetch API**
- **Vite**

## 🧠 React Concepts Used

### React Hooks

#### `useState`

Used for managing application state such as the search input and country information.

```js
const [country, setCountry] = useState("");
const [countryData, setCountryData] = useState(null);

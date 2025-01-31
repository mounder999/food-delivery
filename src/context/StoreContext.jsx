import { createContext, useState, useEffect } from "react";

// Create the context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // State for cart items
    const [cartItems, setCartItems] = useState({});

    // State for food list
    const [food_list, setFood_list] = useState([]);

    // State for authentication token
    const [token, setToken] = useState(localStorage.getItem("auth_token") || null);

    // Fetch food list from the backend when the component mounts
    useEffect(() => {
        const fetchFoodList = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/foodsget"); // Replace with your backend endpoint
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Failed to fetch food list");
                }

                // Update the food_list state with the fetched data
                setFood_list(data.foods);
            } catch (error) {
                console.error("Error fetching food list:", error.message);
            }
        };

        fetchFoodList(); // Call the function to fetch food list
    }, []); // Empty dependency array ensures this runs only once on mount

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        console.log("Adding item with ID:", itemId); // Debugging
        setCartItems((prev) => {
            const updatedCart = {
                ...prev,
                [itemId]: (prev[itemId] || 0) + 1, // Increment the quantity for the specific item
            };
            console.log("Updated cart items:", updatedCart); // Debugging
            return updatedCart;
        });
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1; // Decrement the quantity for the specific item
            } else {
                delete updatedCart[itemId]; // Remove the item if the quantity is 1
            }
            return updatedCart;
        });
    };

    // Function to calculate the total cart amount
    const getTotalcartamount = () => {
        let totalamount = 0;
        console.log("Cart Items:", cartItems); // Debugging
        console.log("Food List:", food_list); // Debugging
    
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = food_list.find((product) => product.food_id ===Number( item));
                console.log("Item Info:", iteminfo); // Debugging
    
                if (iteminfo) {
                    totalamount += iteminfo.price * cartItems[item];
                    console.log("Item Total:", iteminfo.price * cartItems[item]); // Debugging
                }
            }
        }
    
        console.log("Total Amount:", totalamount); // Debugging
        return totalamount;
    };

    // Function to handle user login
    const handleLogin = async (email, password) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }

            // Save token to localStorage and update state
            localStorage.setItem("auth_token", data.access_token);
            setToken(data.access_token);

            return data; // Return the response data
        } catch (error) {
            console.error("Login error:", error.message);
            throw error;
        }
    };

    // Function to handle user registration
    const handleRegister = async (name, email, password) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Registration failed");
            }

            // Save token to localStorage and update state
            localStorage.setItem("auth_token", data.access_token);
            setToken(data.access_token);

            return data; // Return the response data
        } catch (error) {
            console.error("Registration error:", error.message);
            throw error;
        }
    };

    // Function to handle user logout
    const handleLogout = () => {
        localStorage.removeItem("auth_token"); // Remove token from localStorage
        setToken(null); // Reset token state
    };

    // Function to check if the user is authenticated
    const isAuthenticated = () => {
        return token !== null;
    };

    // Context value to be provided to the app
    const contextValue = {
        food_list,
        setFood_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalcartamount,
        token,
        setToken,
        handleLogin,
        handleRegister,
        handleLogout,
        isAuthenticated,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
"use client";
import React, { useState } from "react";

const TabSection = () => {

    const [activeTab, setActiveTab] = useState("special");

    const tabs = [
        { key: "special", label: "Special" },
        { key: "lunch", label: "Lunch" },
        { key: "breakfast", label: "Breakfast" },
        { key: "dinner", label: "Dinner" },
    ];

    const menuItems = {
        special: [
            {
                name: "Chef's Signature Pasta",
                price: "$18.99",
                description: "Homemade pasta with secret sauce",
                image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Truffle Risotto",
                price: "$22.50",
                description: "Creamy risotto with black truffle",
                image: "https://images.unsplash.com/photo-1621274403997-37aace184f49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Seafood Platter",
                price: "$28.75",
                description: "Fresh catch of the day",
                image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Beef Wellington",
                price: "$34.99",
                description: "Premium beef in puff pastry",
                image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Lobster Thermidor",
                price: "$39.50",
                description: "Classic French lobster dish",
                image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Vegetable Paella",
                price: "$21.99",
                description: "Spanish rice with seasonal vegetables",
                image: "https://images.unsplash.com/photo-1629115916087-7e8c114a24ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            }
        ],
        lunch: [
            {
                name: "Club Sandwich",
                price: "$12.99",
                description: "Triple-decker with fries",
                image: "https://images.unsplash.com/photo-1514516340301-1eea02233d2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Beef Burger",
                price: "$14.50",
                description: "Angus beef with cheese",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Caesar Salad",
                price: "$10.75",
                description: "Classic with chicken",
                image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Margherita Pizza",
                price: "$15.25",
                description: "Fresh basil and mozzarella",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Chicken Wrap",
                price: "$11.99",
                description: "Grilled chicken with veggies",
                image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Falafel Bowl",
                price: "$13.25",
                description: "Middle Eastern flavors",
                image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            }
        ],
        breakfast: [
            {
                name: "Avocado Toast",
                price: "$9.99",
                description: "Sourdough with poached eggs",
                image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Pancake Stack",
                price: "$11.50",
                description: "Maple syrup and berries",
                image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Breakfast Burrito",
                price: "$12.75",
                description: "Eggs, beans, and cheese",
                image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Eggs Benedict",
                price: "$13.25",
                description: "English muffin with hollandaise",
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "French Toast",
                price: "$10.99",
                description: "Brioche with cinnamon",
                image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Greek Yogurt Bowl",
                price: "$8.50",
                description: "With honey and granola",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            }
        ],
        dinner: [
            {
                name: "Filet Mignon",
                price: "$32.99",
                description: "8oz premium cut",
                image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Grilled Salmon",
                price: "$24.50",
                description: "With lemon butter sauce",
                image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Vegetable Lasagna",
                price: "$18.75",
                description: "Layers of goodness",
                image: "https://images.unsplash.com/photo-1629115916087-7e8c114a24ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Mushroom Risotto",
                price: "$19.99",
                description: "Creamy Arborio rice",
                image: "https://images.unsplash.com/photo-1600326145359-3a40909a5eac?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Duck Confit",
                price: "$26.50",
                description: "French-style slow cooked",
                image: "https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Lamb Chops",
                price: "$29.75",
                description: "Herb-marinated rack",
                image: "https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            }
        ]
    };

    return (

        <section className="w-full py-20 px-4 bg-gray-50 min-h-screen">

            <div className="max-w-7xl mx-auto text-center">

                <p className="text-sm uppercase tracking-widest text-orange-500 mb-2">
                    Our Offered Menu
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                    Some Trendy And Popular <br /> Courses Offered
                </h2>


                {/* Tabs */}

                <div className="flex justify-center flex-wrap gap-4 mt-8 mb-12">

                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-5 py-2 rounded-md font-medium transition-all duration-200 ${activeTab === tab.key
                                    ? "bg-orange-500 text-white border border-orange-500"
                                    : "bg-white text-gray-800 border border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}

                </div>

                {/* Menu Items - Now 6 items in 2 rows of 3 */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {menuItems[activeTab].map((item, index) => (

                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80"
                        >

                            {/* Food Image with Zoom Effect */}

                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Default View (Name Only) */}

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                                <h3 className="text-white font-bold text-xl">{item.name}</h3>
                            </div>

                            {/* Hover Overlay (All Details) */}

                            <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                                <p className="text-orange-300 font-bold text-xl mb-3">{item.price}</p>
                                <p className="text-gray-200 mb-5">{item.description}</p>
                                <button className="bg-[#FB5704] hover:bg-[#FB5704] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                                    Add to Order
                                </button>
                            </div>

                        </div>
                    ))}

                </div>
      
            </div>

        </section>
    );
};

export default TabSection;
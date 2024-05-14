import { useState } from "react";

export default function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }
    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }
    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>
            <input
                value={quantity}
                onChange={handleQuantityChange}
                type="number"
            />
            <p>Quantity: {quantity}</p>
            <textarea
                value={comment}
                onChange={handleCommentChange}
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your comment here..."
            />
            <p>Comment: {comment}</p>
            <form class="max-w-sm">
                <select
                    id="countries"
                    value={payment}
                    onChange={handlePaymentChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
            </form>
            <p>Payment: {payment}</p>
            <div class="flex gap-10">
                <div class="inline-flex items-center">
                    <label
                        class="relative flex items-center p-3 rounded-full cursor-pointer"
                        htmlFor="html"
                    >
                        <input
                            name="type"
                            type="radio"
                            value="Pick Up"
                            checked={shipping === "Pick Up"}
                            onChange={handleShippingChange}
                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                            id="html"
                        />
                        <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <circle
                                    data-name="ellipse"
                                    cx="8"
                                    cy="8"
                                    r="8"
                                ></circle>
                            </svg>
                        </span>
                    </label>
                    <label
                        class="mt-px font-light text-gray-700 cursor-pointer select-none"
                        htmlFor="html"
                    >
                        Pick Up
                    </label>
                </div>
                <div class="inline-flex items-center">
                    <label
                        class="relative flex items-center p-3 rounded-full cursor-pointer"
                        htmlFor="react"
                    >
                        <input
                            name="type"
                            type="radio"
                            value="Delivery"
                            checked={shipping === "Delivery"}
                            onChange={handleShippingChange}
                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                            id="react"
                        />
                        <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <circle
                                    data-name="ellipse"
                                    cx="8"
                                    cy="8"
                                    r="8"
                                ></circle>
                            </svg>
                        </span>
                    </label>
                    <label
                        class="mt-px font-light text-gray-700 cursor-pointer select-none"
                        htmlFor="react"
                    >
                        Delivery
                    </label>
                </div>
            </div>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

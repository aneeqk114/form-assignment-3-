"use client"

import React, { useState } from "react"
import { object, string, number, date, InferType } from 'yup';

let userSchema = object({
    firstName: string().required(),
    lastName: string().required(),
    DateofBirth: date().required(),
    gender: string().required(),
    education: string().required(),
    homeAddress: string().required(),
    city: string().required(),
    country: string().required(),
    MobileNumber: number().required().positive().integer(),
    email: string().required()
});

const user = userSchema.validate(FormData)

type FormData = InferType<typeof userSchema>;
{
    firstName: string
    lastName: string
    DateofBirth: date
    gender: string
    education: string
    homeAddress: string
    city: string
    country: string
    MobileNumber: number
    email: string
}

string()
    .min(3, 'must be at least 3 characters long')
    .email('must be a valid email')
    .validate('no'); // ValidationError

    const RegistrationForm: React.FC = () => {
        const [formData, setFormData] = useState<FormData>({
            firstName: '',
            lastName: '',
            DateofBirth: new Date(),
            gender: '',
            education: '',
            homeAddress: '',
            city: '',
            country: '',
            MobileNumber: 0,
            email: '',
        });
    
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            // Handle form submission logic using formData
            console.log(formData);
        };
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value,
            });
        };
    
        return (
            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-orange-300">
                    <h2 className="text-3xl mb-4 font-bold text-center text-red-500">Registration Form</h2>
                    <div className="grid grid-cols-2 gap-4 ">
                        <div className="col-span-1">
                            {/* Left Side */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* Add other left side fields */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
                                    Date of Birth
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="dateOfBirth"
                                    type="date"
                                    value={formData.DateofBirth.toISOString().split('T')[0]} // Format Date to 'YYYY-MM-DD'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="education">
                                    Education
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="education"
                                    type="text"
                                    placeholder="Education"
                                    value={formData.education}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="homeAddress">
                                    Home Address
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="homeAddress"
                                    type="text"
                                    placeholder="Home Address"
                                    value={formData.homeAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                                    Country
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="country"
                                    type="text"
                                    placeholder="Country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            {/* Right Side */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* Add other right side fields */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                                    Gender
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                    City
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="city"
                                    type="text"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
                                    Mobile Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="mobileNumber"
                                    type="tel"
                                    placeholder="Mobile Number"
                                    value={formData.MobileNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    };
    
    export default RegistrationForm;
import React from "react";

const AddressForm = () => {
	return (
		<div className="w-full bg-[#FEFEFE] rounded-lg p-[31px]">
			<h2 className="text-2xl font-bold">Shipping Address</h2>
			<div className="mt-8  w-full">
				<div className="grid grid-cols-1 gap-6">
					<label className="block">
						<span className="text-gray-700">
							Name
						</span>
						<input
							type="text"
							className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
							placeholder=""
						/>
					</label>
					<label className="block">
						<span className="text-gray-700">
							Phone Number
						</span>
						<input
							type="number"
							className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
							placeholder="john@example.com"
						/>
					</label>
					<label className="block">
						<span className="text-gray-700">
							Address
						</span>
						<input
							type="number"
							className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
							placeholder="Address"
						/>
					</label>
					<div className="grid grid-cols-[30%,30%,30%] gap-[3.33%] ">
						<label className="block">
							<span className="text-gray-700">
								Country
							</span>
							<input
								type="text"
								className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
								placeholder=""
							/>
						</label>
						<label className="block">
							<span className="text-gray-700">
								State
							</span>
							<input
								type="text"
								className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
								placeholder=""
							/>
						</label>
						<label className="block">
							<span className="text-gray-700">
								Postal Code
							</span>
							<input
								type="number"
								className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
								placeholder="123456"
							/>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddressForm;

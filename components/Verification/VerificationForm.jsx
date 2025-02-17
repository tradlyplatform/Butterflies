import React, { useState, useEffect } from "react";
 import OutsideClickHandler from "react-outside-click-handler";
import PopUp from "../Shared/PopUp/PopUp";
import PasswordForm from "./PasswordForm";
import { useSelector } from "react-redux";
import {
	authSelector,
	clearState,
	verifyUser,
} from "../../store/feature/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";

const VerificationForm = () => {
	const [showError, setShowError] = useState(false);
	const [error_message, setError_message] = useState("");
	const [code, setCode] = useState(null);
	const { isFetching, isError, verifyId, errorMessage, isSuccess, login } =
		useSelector(authSelector);
	const dispatch = useDispatch();
	const router = useRouter();

	const closePopUP = () => {
		dispatch(clearState());
		setShowError(false);
		setError_message("");
	};

	const verifyClick = () => {
		if (code === null) {
			setShowError(true);
			setError_message("Enter your 6 digit verify code");
			return false;
		}
		if (code.length !== 6) {
			setShowError(true);
			setError_message("Enter your 6 digit verify code");
			return false;
		}
		if (verifyId === "") {
			setShowError(true);
			setError_message("You don't have verify code");
			return false;
		}
		const verification = {
			verify_id: verifyId,
			code: code,
		};
		dispatch(verifyUser({ prams: verification, key: "abncg" }));
	};

	useEffect(() => {
		if (isSuccess && login) {
			router.push("/");
		}
	}, [isSuccess, login, router]);

	return (
		<div className="w-full   min-h-screen  py-36">
			{(showError || isError) && (
				<OutsideClickHandler
					onOutsideClick={() => {
						(showError || isError) &&
							(setShowError(false),
							setError_message(""),
							dispatch(clearState()));
					}}
				>
					<div className="fixed z-50 top-0 left-0  w-screen mt-5 ">
						<div className="w-ful  xs:w-[500px] mx-auto">
							<PopUp
								message={
									error_message ||
									errorMessage
								}
								closePopUP={closePopUP}
							/>
						</div>
					</div>
				</OutsideClickHandler>
			)}

			<h2 className=" px-[34px]  md:px-24  text-center text-white text-[30px] md:text-[40px] font-semibold mb-4">
				Email Verification
			</h2>
			<p className=" px-[34px]  md:px-24  text-center text-white text-xl  font-semibold ">
				Enter verification code here
			</p>
			<div className=" mt-24   ">
				<div>
					<PasswordForm
						code={code}
						setCode={setCode}
					/>
				</div>
				<div className=" mt-[44px] flex justify-center items-center">
					<button className=" w-full   min-h-[24px] flex flex-wrap  justify-center items-center bg-transparent   text-white  font-medium text-base   ">
						Didn’t receive a code ?
						<span className="font-semibold ml-[8px]">
							Resend  Code
						</span>
					</button>
				</div>
				<div className=" mt-12 flex flex-col justify-center items-center">
					{isFetching ? (
						<button className=" mb-8  w-5/6  xs:w-72 h-12 flex justify-center items-center bg-white rounded-[48px] text-primary font-semibold  text-base">
							<svg
								className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							Verify
						</button>
					) : (
						<button
							className=" mb-8 w-5/6   xs:w-72 h-12 flex justify-center items-center bg-white rounded-[48px] text-primary font-semibold  text-base"
							onClick={verifyClick}
						>
							Verify
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default VerificationForm;

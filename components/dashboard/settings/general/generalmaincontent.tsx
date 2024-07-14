'use client'
import { FC } from "react";
import { generalTabData } from "@/data/setting";
import CompanydisplayName from "./displayname";
import EditPhone from "./editphone";
import EditEmail from "./editemail";
import EditCurrency from "./editcurrency";
import EditLegalName from "./editlegalname";
import EditRegNumber from "./editregnumber";
import EditVatNumber from "./editvatnumber";
import EditAddress from "./editaddress";
import EditCity from "./editcity";
import EditCountry from "./editcountry";
import EditZip from "./editzip";
import EditState from "./editstate";

interface Props {}

const GeneralSettings: FC<Props> = ({}) => {
	return (
		<div className="p-4 lg:p-7 lg:lg:px-10 xl:px-20  max-w-[1000px]">
			<div className="mb-10">
				<h1 className="my-4 mb-7 text-[23px] font-[700]">Contact Info</h1>
				<CompanydisplayName
					displayName={generalTabData.basicInfo.displayName}
				/>
				<EditPhone phone={generalTabData.basicInfo.phoneNumber} />
				<EditEmail email={generalTabData.basicInfo.email} />
				<EditCurrency currency={generalTabData.basicInfo.currency} />
			</div>
			<div className="mb-10">
				<h1 className="my-4 mb-7 text-[23px] font-[700]">
					Registration Info
				</h1>
				<EditLegalName
					legalname={generalTabData.RegistrationInfo.legalName}
				/>
				<EditRegNumber
					regnumber={
						generalTabData.RegistrationInfo.RegistrationPhoneNumber
					}
				/>
				<EditVatNumber
					vatnumber={generalTabData.RegistrationInfo.vatNumber}
				/>
			</div>

			<div className="mb-10">
				<h1 className="my-4 mb-7 text-[23px] font-[700]">
					Official Address
				</h1>

				<EditAddress address={generalTabData.officialAddress.address} />
				<EditState state={generalTabData.officialAddress.state} />
				<EditCity city={generalTabData.officialAddress.city} />
				<EditCountry country={generalTabData.officialAddress.country} />
				<EditZip zip={generalTabData.officialAddress.zipCode} />
			</div>
		</div>
	);
};

export default GeneralSettings;

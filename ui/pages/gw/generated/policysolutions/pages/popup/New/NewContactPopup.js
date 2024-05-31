import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class NewContactPopup {
	newContactPopupCancel = PcfButton('#NewContactPopup-Cancel');
	newContactPopupCheckForDuplicates = PcfButton('#NewContactPopup-CheckForDuplicates');
	newContactPopupContactPanelSetContactCVAddressesCardTab = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-AddressesCardTab');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailCardTab = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailCardTab');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1 = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1Kanji = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1Kanji');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine2 = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine2');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine2Kanji = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine2Kanji');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressSummary = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressSummary');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCity = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCityKanji = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CityKanji');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCountry = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-Country');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCode = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCodeAutoFillIcon = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode-AutoFillIcon');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetState = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine3 = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine3');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCEDEX = PcfCheckBox('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CEDEX');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCEDEXBureau = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CEDEXBureau');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCityAutoFillIcon = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City-AutoFillIcon');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCounty = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-County');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressType = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressType');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVDescription = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-Description');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVLinkedAddressInputSetLinkAddressMenuEditAddress = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-LinkedAddressInputSet-LinkAddressMenu-EditAddress');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressDetailDVValidUntil = PcfDateValueInput('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-ValidUntil');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressToolsCardTab = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressToolsCardTab');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressesLV = PcfListView('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressesLV');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressesLV_tbAdd = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressesLV_tb-Add');
	newContactPopupContactPanelSetContactCVAddressesPanelSetAddressesLV_tbRemove = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-AddressesLV_tb-Remove');
	newContactPopupContactPanelSetContactCVAddressesPanelSetMergeAddresses = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-AddressesPanelSet-MergeAddresses');
	newContactPopupContactPanelSetContactCVContactDVAddressDescription = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressDescription');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1 = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1Kanji = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1Kanji');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine2 = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine2');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine2Kanji = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine2Kanji');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressSummary = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressSummary');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCity = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCityKanji = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CityKanji');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCountry = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-Country');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCode = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCodeAutoFillIcon = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode-AutoFillIcon');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetState = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine3 = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine3');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCEDEX = PcfCheckBox('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CEDEX');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCEDEXBureau = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CEDEXBureau');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCityAutoFillIcon = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City-AutoFillIcon');
	newContactPopupContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCounty = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-County');
	newContactPopupContactPanelSetContactCVContactDVAddressType = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-AddressType');
	newContactPopupContactPanelSetContactCVContactDVContactCurrencyContactCurrencyInputSetPreferredSettlementCurrency = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactCurrency-ContactCurrencyInputSet-PreferredSettlementCurrency');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetEmailAddress1 = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-EmailAddress1');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetEmailAddress2 = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-EmailAddress2');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetFaxPhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-FaxPhone-GlobalPhoneInputSet-CountryCode');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetFaxPhoneGlobalPhoneInputSetExtension = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-FaxPhone-GlobalPhoneInputSet-Extension');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetFaxPhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-FaxPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetFaxPhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-FaxPhone-GlobalPhoneInputSet-PhoneDisplay');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetGlobalContactNameInputSetName = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalContactNameInputSet-Name');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetGlobalContactNameInputSetNameKanji = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalContactNameInputSet-NameKanji');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetGlobalContactNameInputSetNameSummary = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalContactNameInputSet-NameSummary');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetWorkPhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-WorkPhone-GlobalPhoneInputSet-CountryCode');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetWorkPhoneGlobalPhoneInputSetExtension = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-WorkPhone-GlobalPhoneInputSet-Extension');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetWorkPhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-WorkPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetWorkPhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-WorkPhone-GlobalPhoneInputSet-PhoneDisplay');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetCellPhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-CellPhone-GlobalPhoneInputSet-CountryCode');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetCellPhoneGlobalPhoneInputSetExtension = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-CellPhone-GlobalPhoneInputSet-Extension');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetCellPhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-CellPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetCellPhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-CellPhone-GlobalPhoneInputSet-PhoneDisplay');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetDateOfBirth = PcfDateValueInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-DateOfBirth');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetFirstName = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-FirstName');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetFirstNameKanji = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-FirstNameKanji');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetLastName = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-LastName');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetLastNameKanji = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-LastNameKanji');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetNameSummary = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-NameSummary');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetMiddleName = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-MiddleName');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetParticle = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-Particle');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetPrefix = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-Prefix');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetSuffix = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-Suffix');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetHomePhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-HomePhone-GlobalPhoneInputSet-CountryCode');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetHomePhoneGlobalPhoneInputSetExtension = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-HomePhone-GlobalPhoneInputSet-Extension');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetHomePhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-HomePhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetHomePhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-HomePhone-GlobalPhoneInputSet-PhoneDisplay');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetMaritalStatus = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-MaritalStatus');
	newContactPopupContactPanelSetContactCVContactDVContactNameInputSetPrimaryPhone = PcfSelectInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-PrimaryPhone');
	newContactPopupContactPanelSetContactCVContactDVLinkedAddressInputSetLinkAddressMenuEditAddress = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-LinkedAddressInputSet-LinkAddressMenu-EditAddress');
	newContactPopupContactPanelSetContactCVContactDVOfficialIDInputSetOfficialIDDV_Input = PcfTextInput('#NewContactPopup-ContactPanelSet-ContactCV-ContactDV-OfficialIDInputSet-OfficialIDDV_Input');
	newContactPopupContactPanelSetContactCVContactDetailCardTab = PcfButton('#NewContactPopup-ContactPanelSet-ContactCV-ContactDetailCardTab');
	newContactPopupEdit = PcfButton('#NewContactPopup-Edit');
	newContactPopupForceDupCheckUpdate = PcfButton('#NewContactPopup-ForceDupCheckUpdate');
	newContactPopupNewContactPopup_UpLink = PcfButton('#NewContactPopup-NewContactPopup_UpLink');
	newContactPopupUpdate = PcfButton('#NewContactPopup-Update');
	newContactPopup_Paging = PcfButton('#NewContactPopup-_Paging');
	newContactPopup__crumb__ = PcfComponent('#NewContactPopup-__crumb__');
	newContactPopup_msgs = PcfButton('#NewContactPopup-_msgs');
}
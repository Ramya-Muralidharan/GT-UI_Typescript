import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewBusinessWeek {
	businessWeekDetailScreenAppliesToAllZones = PcfComponent('#NewBusinessWeek-BusinessWeekDetailScreen-AppliesToAllZones');
	businessWeekDayDetailDVBusinessDayDemarcation = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-BusinessDayDemarcation');
	businessWeekDayDetailDVBusinessWeekEndInput = PcfSelectInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-BusinessWeekEndInput');
	businessWeekDayDetailDVFridayBusinessDay = PcfComponent('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-FridayBusinessDay');
	businessWeekDayDetailDVFridayBusinessEnd = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-FridayBusinessEnd');
	businessWeekDayDetailDVFridayBusinessStart = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-FridayBusinessStart');
	businessWeekDayDetailDVMondayBusinessDay = PcfComponent('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-MondayBusinessDay');
	businessWeekDayDetailDVMondayBusinessEnd = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-MondayBusinessEnd');
	businessWeekDayDetailDVMondayBusinessStart = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-MondayBusinessStart');
	businessWeekDayDetailDVSaturdayBusinessDay = PcfComponent('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-SaturdayBusinessDay');
	businessWeekDayDetailDVSaturdayBusinessEnd = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-SaturdayBusinessEnd');
	businessWeekDayDetailDVSaturdayBusinessStart = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-SaturdayBusinessStart');
	businessWeekDayDetailDVSundayBusinessDay = PcfComponent('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-SundayBusinessDay');
	businessWeekDayDetailDVSundayBusinessEnd = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-SundayBusinessEnd');
	businessWeekDayDetailDVSundayBusinessStart = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-SundayBusinessStart');
	businessWeekDayDetailDVThursdayBusinessDay = PcfComponent('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-ThursdayBusinessDay');
	businessWeekDayDetailDVThursdayBusinessEnd = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-ThursdayBusinessEnd');
	businessWeekDayDetailDVThursdayBusinessStart = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-ThursdayBusinessStart');
	businessWeekDayDetailDVTuesdayBusinessDay = PcfComponent('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-TuesdayBusinessDay');
	businessWeekDayDetailDVTuesdayBusinessEnd = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-TuesdayBusinessEnd');
	businessWeekDayDetailDVTuesdayBusinessStart = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-TuesdayBusinessStart');
	businessWeekDayDetailDVWednesdayBusinessDay = PcfComponent('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-WednesdayBusinessDay');
	businessWeekDayDetailDVWednesdayBusinessEnd = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-WednesdayBusinessEnd');
	businessWeekDayDetailDVWednesdayBusinessStart = PcfDateValueInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDayDetailDV-WednesdayBusinessStart');
	zonesInputSetCountry = PcfSelectInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDetailDV-ZonesInputSet-Country');
	zonesInputSetFilterBy = PcfSelectInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDetailDV-ZonesInputSet-FilterBy');
	zonesInputSetZoneType = PcfSelectInput('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDetailDV-ZonesInputSet-ZoneType');
	zonesInputSetZonesLV = PcfListView('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDetailDV-ZonesInputSet-ZonesLV');
	zonesLV_tbAdd = PcfButton('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDetailDV-ZonesInputSet-ZonesLV_tb-Add');
	zonesLV_tbRemove = PcfButton('#NewBusinessWeek-BusinessWeekDetailScreen-BusinessWeekDetailDV-ZonesInputSet-ZonesLV_tb-Remove');
	businessWeekDetailScreenCancel = PcfButton('#NewBusinessWeek-BusinessWeekDetailScreen-Cancel');
	businessWeekDetailScreenEdit = PcfButton('#NewBusinessWeek-BusinessWeekDetailScreen-Edit');
	newBusinessWeekBusinessWeekDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewBusinessWeek-BusinessWeekDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	businessWeekDetailScreenName = PcfTextInput('#NewBusinessWeek-BusinessWeekDetailScreen-Name');
	businessWeekDetailScreenUpdate = PcfButton('#NewBusinessWeek-BusinessWeekDetailScreen-Update');
	businessWeekDetailScreenZones = PcfTextInput('#NewBusinessWeek-BusinessWeekDetailScreen-Zones');
	businessWeekDetailScreen_msgs = PcfButton('#NewBusinessWeek-BusinessWeekDetailScreen-_msgs');
	newBusinessWeekNewBusinessWeek_UpLink = PcfButton('#NewBusinessWeek-NewBusinessWeek_UpLink');
	newBusinessWeek_Paging = PcfButton('#NewBusinessWeek-_Paging');
	newBusinessWeek__crumb__ = PcfComponent('#NewBusinessWeek-__crumb__');
}

import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class DatabaseStatistics {
	dBStatisticsInfoScreenAnalyzeAllTables = PcfComponent('#DatabaseStatistics-DBStatisticsInfoScreen-AnalyzeAllTables');
	dBStatisticsRequestCVDBStatsStagingTablesLV = PcfListView('#DatabaseStatistics-DBStatisticsInfoScreen-DBStatisticsRequestCV-DBStatsStagingTablesLV');
	dBStatisticsRequestCVDBStatsTablesLV = PcfListView('#DatabaseStatistics-DBStatisticsInfoScreen-DBStatisticsRequestCV-DBStatsTablesLV');
	dBStatisticsRequestCVDBStatsTypelistTablesLV = PcfListView('#DatabaseStatistics-DBStatisticsInfoScreen-DBStatisticsRequestCV-DBStatsTypelistTablesLV');
	dBStatisticsRequestCVStagingTablesTab = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-DBStatisticsRequestCV-StagingTablesTab');
	dBStatisticsRequestCVTablesTab = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-DBStatisticsRequestCV-TablesTab');
	dBStatisticsRequestCVTypelistTablesTab = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-DBStatisticsRequestCV-TypelistTablesTab');
	dBStatisticsInfoScreenDevModeOnlyButton = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-DevModeOnlyButton');
	devModeOnlyButtonDeleteMenu = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-DevModeOnlyButton-DeleteMenu');
	devModeOnlyButtonGatherFullMenu = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-DevModeOnlyButton-GatherFullMenu');
	devModeOnlyButtonGatherIncrementalMenu = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-DevModeOnlyButton-GatherIncrementalMenu');
	devModeOnlyButtonViewMenu = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-DevModeOnlyButton-ViewMenu');
	dBStatisticsInfoScreenDownloadButton = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-DownloadButton');
	dBStatisticsInfoScreenDownloadStats = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-DownloadStats');
	dBStatisticsInfoScreenExecutionHistoryTab = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-ExecutionHistoryTab');
	dBStatisticsInfoScreenOracleStatsPreferencesTab = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-OracleStatsPreferencesTab');
	dBStatisticsInfoScreenOtherParametersHeader = PcfTextInput('#DatabaseStatistics-DBStatisticsInfoScreen-OtherParametersHeader');
	dBStatisticsInfoScreenReapplyButton = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-ReapplyButton');
	dBStatisticsInfoScreenRefreshButton = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-RefreshButton');
	dBStatisticsInfoScreenShowPreviousStats = PcfComponent('#DatabaseStatistics-DBStatisticsInfoScreen-ShowPreviousStats');
	dBStatisticsInfoScreenShowPreviousStatsTime = PcfDateValueInput('#DatabaseStatistics-DBStatisticsInfoScreen-ShowPreviousStatsTime');
	dBStatisticsInfoScreenStatisticsInfoTab = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-StatisticsInfoTab');
	dBStatisticsInfoScreenTableNameHeader = PcfTextInput('#DatabaseStatistics-DBStatisticsInfoScreen-TableNameHeader');
	dBStatisticsInfoScreenToolbarButton = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-ToolbarButton');
	dBStatisticsInfoScreenUpdateStatsLV = PcfListView('#DatabaseStatistics-DBStatisticsInfoScreen-UpdateStatsLV');
	updateStatsLV_tbLVUpdateStatsDelete = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-UpdateStatsLV_tb-LVUpdateStatsDelete');
	updateStatsLV_tbRefreshButton = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-UpdateStatsLV_tb-RefreshButton');
	updateStatsLV_tbRunFullButton = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-UpdateStatsLV_tb-RunFullButton');
	updateStatsLV_tbRunIncrementalButton = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-UpdateStatsLV_tb-RunIncrementalButton');
	dBStatisticsInfoScreen_ViewDetail = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-_ViewDetail');
	dBStatisticsInfoScreen_msgs = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-_msgs');
	tableOverviewRowsTableFilter = PcfSelectInput('#DatabaseStatistics-DBStatisticsInfoScreen-tableOverviewRows-TableFilter');
	tableOverviewRows_ListPaging = PcfButton('#DatabaseStatistics-DBStatisticsInfoScreen-tableOverviewRows-_ListPaging');
	databaseStatisticsDatabaseStatistics_UpLink = PcfButton('#DatabaseStatistics-DatabaseStatistics_UpLink');
	databaseStatistics_Paging = PcfButton('#DatabaseStatistics-_Paging');
	databaseStatistics__crumb__ = PcfComponent('#DatabaseStatistics-__crumb__');
}
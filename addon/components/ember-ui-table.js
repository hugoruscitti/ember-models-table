import Ember from 'ember';
import layout from '../templates/components/ember-ui-table';

const customMessages = Ember.Object.create({
  "searchLabel": "Filtro:",
  "searchPlaceholder": "",
  "columns-title": "Columnas",
  "columns-showAll": "Mostrar todas las columnas",
  "columns-hideAll": "Ocultar todas las columnas",
  "columns-restoreDefaults": "Restaurar valores por omisión",
  "tableSummary": "Mostrando registros desde %@ hasta %@",
  "allColumnsAreHidden": "Todas las columnas están ocultas. Usá el panel de <strong>columnas</strong> para mostrar alguna de ellas.",
  "noDataToShow": "No hay datos para mostrar"
});


let customClasses = Ember.Object.create({
  "table": "ui celled table selectable",
  "input": "",
  "buttonDefault": "ui basic button",
  "theadCell": "ui form",

  "outerTableWrapper": "",
  "innerTableWrapper": "",

  "globalFilterWrapper": "pull-left",
  "columnsDropdownWrapper": "pull-right columns-dropdown",
  "columnsDropdownButtonWrapper": "btn-group",
  "columnsDropdown": "dropdown-menu pull-right",
  "theadCellNoSorting": "table-header-no-sorting",
  "theadCellNoFiltering": "table-header-no-filtering",
  "tfooterWrapper": "table-footer clearfix",
  "footerSummary": "table-summary",
  "footerSummaryNumericPagination": "col-md-4 col-sm-4 col-xs-4",
  "footerSummaryDefaultPagination": "col-md-5 col-sm-5 col-xs-5",
  "pageSizeWrapper": "col-md-2 col-sm-2 col-xs-2",
  "pageSizeSelectWrapper": "pull-right",
  "paginationWrapper": "table-nav",
  "paginationWrapperNumeric": "col-md-6 col-sm-6 col-xs-6",
  "paginationWrapperDefault": "col-md-5 col-sm-5 col-xs-5",
  "noDataCell": "",
  "collapseRow": "collapse-row",
  "expandRow": "expand-row",
  "thead": "",
  "clearFilterIcon": "glyphicon glyphicon-remove-sign form-control-feedback",
  "clearAllFiltersIcon": "glyphicon glyphicon-remove-circle"
});


export default Ember.Component.extend({
  layout,
  customMessages,
  customClasses,
  pageSize: 10,
});

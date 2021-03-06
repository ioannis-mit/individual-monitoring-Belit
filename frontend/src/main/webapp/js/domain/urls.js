var app = 'C4A';
var rest = 'rest';

var root = location.protocol + "//" + location.host + '/' + app + '/' + rest + '/';


var CODEBOOK_SELECT_ALL_RISKS = root + 'codebook/getAllRiskStatus';
var CODEBOOK_SELECT_ROLES_FOR_STAKEHOLDER = root + 'codebook/getAllRolesForStakeholderAbbr';
var CODEBOOK_SELECT_DATA_VALIDITY_STATUS = root + 'codebook/getAllDataValitidityStatus';
var CODEBOOK_SELECT = root + 'codebook/selectTable'; 

var ASSESSMENT_FOR_DATA_SET = root + 'assessment/findForSelectedDataSet';
var ASSESSMENT_ADD_FOR_DATA_SET = root + 'assessment/addForSelectedDataSet';
var ASSESSMENT_DIAGRAM_DATA = root + 'assessment/getDiagramData';
var ASSESSMENT_LAST_FIVE_FOR_DIAGRAM = root + 'assessment/getLastFiveForDiagram';

var CARE_RECIPIENT_FOR_ID = root + 'careRecipient/findOne';
var CARE_RECIPIENT_ALL = root + "careRecipient/getCareRecipients";
var CARE_RECIPIENT_GROUPS = root + "careRecipient/getGroups";
var CARE_RECIPIENT_DIAGRAM_DATA = root + "careRecipient/getDiagramData";

var USER_LOGIN = root + "users/login";
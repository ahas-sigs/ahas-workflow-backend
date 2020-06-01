(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{372:function(t,e,a){"use strict";a.r(e);var r=a(8),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"searching-filtering-workflows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searching-filtering-workflows"}},[t._v("#")]),t._v(" Searching/Filtering Workflows")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Cadence supports creating "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" with customized key-value pairs, updating the information within the "),a("Term",{attrs:{term:"workflow"}}),t._v(" code, and then listing/searching "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" with a SQL-like "),a("Term",{attrs:{term:"query"}}),t._v(". For example, you can create "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" with keys "),a("code",[t._v("city")]),t._v(" and "),a("code",[t._v("age")]),t._v(", then search all "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" with "),a("code",[t._v("city = seattle and age > 22")]),t._v(".")],1),t._v(" "),a("p",[t._v("Also note that normal "),a("Term",{attrs:{term:"workflow"}}),t._v(" properties like start time and "),a("Term",{attrs:{term:"workflow"}}),t._v(" type can be queried as well. For example, the following "),a("Term",{attrs:{term:"query"}}),t._v(" could be specified when "),a("RouterLink",{attrs:{to:"/docs/06-cli/#list-closed-or-open-workflow-executions"}},[t._v("listing workflows from the CLI")]),t._v(" or using the list APIs ("),a("a",{attrs:{href:"https://godoc.org/go.uber.org/cadence/client#Client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.6.0/com/uber/cadence/WorkflowService.Iface.html#ListWorkflowExecutions-com.uber.cadence.ListWorkflowExecutionsRequest-",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java"),a("OutboundLink")],1),t._v("):")],1),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("WorkflowType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main.Workflow"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" CloseStatus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("StartTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-06-07T16:46:34-08:00"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" CloseTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-06-07T16:46:34-08:00"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" StartTime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"memo-vs-search-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memo-vs-search-attributes"}},[t._v("#")]),t._v(" Memo vs Search Attributes")]),t._v(" "),a("p",[t._v("Cadence offers two methods for creating "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" with key-value pairs: memo and search attributes. Memo can only be provided on "),a("Term",{attrs:{term:"workflow"}}),t._v(" start. Also, memo data are not indexed, and are therefore not searchable. Memo data are visible when listing "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" using the list APIs. Search attributes data are indexed so you can search "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" by "),a("Term",{attrs:{term:"query",show:"querying"}}),t._v(" on these attributes. However, search attributes require the use of Elasticsearch.")],1),t._v(" "),a("p",[t._v("Memo and search attributes are available in the Go client in "),a("a",{attrs:{href:"https://godoc.org/go.uber.org/cadence/internal#StartWorkflowOptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("StartWorkflowOptions"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" StartWorkflowOptions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Memo - Optional non-indexed info that will be shown in list workflow.")]),t._v("\n    Memo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SearchAttributes - Optional indexed info that can be used in query of List/Scan/Count workflow APIs (only")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// supported when Cadence server is using Elasticsearch). The key and value type must be registered on Cadence server side.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use GetSearchAttributes API to get valid key and corresponding value type.")]),t._v("\n    SearchAttributes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("In the Java client, the "),a("em",[t._v("WorkflowOptions.Builder")]),t._v(" has similar methods for "),a("a",{attrs:{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.6.0/com/uber/cadence/client/WorkflowOptions.Builder.html#setMemo-java.util.Map-",target:"_blank",rel:"noopener noreferrer"}},[t._v("memo"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.6.0/com/uber/cadence/client/WorkflowOptions.Builder.html#setSearchAttributes-java.util.Map-",target:"_blank",rel:"noopener noreferrer"}},[t._v("search attributes"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Some important distinctions between memo and search attributes:")]),t._v(" "),a("ul",[a("li",[t._v("Memo can support all data types because it is not indexed. Search attributes only support basic data types (including String, Int, Float, Bool, Datetime) because it is indexed by Elasticsearch.")]),t._v(" "),a("li",[t._v("Memo does not restrict on key names. Search attributes require that keys are allowlisted before using them because Elasticsearch has a limit on indexed keys.")]),t._v(" "),a("li",[t._v("Memo doesn't require Cadence clusters to depend on Elasticsearch while search attributes only works with Elasticsearch.")])]),t._v(" "),a("h2",{attrs:{id:"search-attributes-go-client-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-attributes-go-client-usage"}},[t._v("#")]),t._v(" Search Attributes (Go Client Usage)")]),t._v(" "),a("p",[t._v("When using the Cadence Go client, provide key-value pairs as SearchAttributes in "),a("a",{attrs:{href:"https://godoc.org/go.uber.org/cadence/internal#StartWorkflowOptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("StartWorkflowOptions"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("SearchAttributes is "),a("code",[t._v("map[string]interface{}")]),t._v(" where the keys need to be allowlisted so that Cadence knows the attribute key name and value type. The value provided in the map must be the same type as registered.")]),t._v(" "),a("h3",{attrs:{id:"allow-listing-search-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allow-listing-search-attributes"}},[t._v("#")]),t._v(" Allow Listing Search Attributes")]),t._v(" "),a("p",[t._v("Start by "),a("Term",{attrs:{term:"query",show:"querying"}}),t._v(" the list of search attributes using the "),a("Term",{attrs:{term:"CLI",show:""}})],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ cadence --domain samples-domain cl get-search-attr\n+---------------------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("         KEY         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" VALUE TYPE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+---------------------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CloseStatus         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" INT        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CloseTime           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" INT        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CustomBoolField     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" DOUBLE     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CustomDatetimeField "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" DATETIME   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CustomDomain        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" KEYWORD    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CustomDoubleField   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" BOOL       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CustomIntField      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" INT        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CustomKeywordField  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" KEYWORD    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CustomStringField   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" STRING     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" DomainID            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" KEYWORD    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ExecutionTime       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" INT        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" HistoryLength       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" INT        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" RunID               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" KEYWORD    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" StartTime           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" INT        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" WorkflowID          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" KEYWORD    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" WorkflowType        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" KEYWORD    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+---------------------+------------+\n")])])]),a("p",[t._v("Use the admin "),a("Term",{attrs:{term:"CLI"}}),t._v(" to add a new search attribute:")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cadence --domain samples-domain adm cl asa --search_attr_key NewKey --search_attr_type "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[t._v("The numbers for the attribute types map as follows:")]),t._v(" "),a("ul",[a("li",[t._v("0 = String")]),t._v(" "),a("li",[t._v("1 = Keyword")]),t._v(" "),a("li",[t._v("2 = Int")]),t._v(" "),a("li",[t._v("3 = Double")]),t._v(" "),a("li",[t._v("4 = Bool")]),t._v(" "),a("li",[t._v("5 = DateTime")])]),t._v(" "),a("h4",{attrs:{id:"keyword-vs-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword-vs-string"}},[t._v("#")]),t._v(" Keyword vs String")]),t._v(" "),a("p",[t._v("Note that "),a("strong",[t._v("Keyword")]),t._v(" and "),a("strong",[t._v("String")]),t._v(" are concepts taken from Elasticsearch. Each word in a "),a("strong",[t._v("String")]),t._v(" is considered a searchable keyword. For a UUID, that can be problematic as Elasticsearch will index each portion of the UUID separately. To have the whole string considered as a searchable keyword, use the "),a("strong",[t._v("Keyword")]),t._v(" type.")]),t._v(" "),a("p",[t._v('For example, key RunID with value "2dd29ab7-2dd8-4668-83e0-89cae261cfb1"')]),t._v(" "),a("ul",[a("li",[t._v("as a "),a("strong",[t._v("Keyword")]),t._v(' will only be matched by RunID = "2dd29ab7-2dd8-4668-83e0-89cae261cfb1" (or in the future with '),a("a",{attrs:{href:"https://github.com/uber/cadence/issues/1137",target:"_blank",rel:"noopener noreferrer"}},[t._v("regular expressions"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("as a "),a("strong",[t._v("String")]),t._v(' will be matched by RunID =  "2dd8", which may cause unwanted matches')])]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" String type can not be used in Order By "),a("Term",{attrs:{term:"query"}}),t._v(".")],1),t._v(" "),a("p",[t._v("There are some pre-allowlisted search attributes that are handy for testing:")]),t._v(" "),a("ul",[a("li",[t._v("CustomKeywordField")]),t._v(" "),a("li",[t._v("CustomIntField")]),t._v(" "),a("li",[t._v("CustomDoubleField")]),t._v(" "),a("li",[t._v("CustomBoolField")]),t._v(" "),a("li",[t._v("CustomDatetimeField")]),t._v(" "),a("li",[t._v("CustomStringField")])]),t._v(" "),a("p",[t._v("Their types are indicated in their names.")]),t._v(" "),a("h3",{attrs:{id:"value-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value-types"}},[t._v("#")]),t._v(" Value Types")]),t._v(" "),a("p",[t._v("Here are the Search Attribute value types and their correspondent Golang types:")]),t._v(" "),a("ul",[a("li",[t._v("Keyword = string")]),t._v(" "),a("li",[t._v("Int = int64")]),t._v(" "),a("li",[t._v("Double = float64")]),t._v(" "),a("li",[t._v("Bool = bool")]),t._v(" "),a("li",[t._v("Datetime = time.Time")]),t._v(" "),a("li",[t._v("String = string")])]),t._v(" "),a("h3",{attrs:{id:"limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit"}},[t._v("#")]),t._v(" Limit")]),t._v(" "),a("p",[t._v("We recommend limiting the number of Elasticsearch indexes by enforcing limits on the following:")]),t._v(" "),a("ul",[a("li",[t._v("Number of keys: 100 per "),a("Term",{attrs:{term:"workflow"}})],1),t._v(" "),a("li",[t._v("Size of value: 2kb per value")]),t._v(" "),a("li",[t._v("Total size of key and values: 40kb per "),a("Term",{attrs:{term:"workflow"}})],1)]),t._v(" "),a("p",[t._v("Cadence reserves keys like DomainID, WorkflowID, and RunID. These can only be used in list "),a("Term",{attrs:{term:"query",show:"queries"}}),t._v(". The values are not updatable.")],1),t._v(" "),a("h3",{attrs:{id:"upsert-search-attributes-in-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upsert-search-attributes-in-workflow"}},[t._v("#")]),t._v(" Upsert Search Attributes in Workflow")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://godoc.org/go.uber.org/cadence/workflow#UpsertSearchAttributes",target:"_blank",rel:"noopener noreferrer"}},[t._v("UpsertSearchAttributes"),a("OutboundLink")],1),t._v(" is used to add or update search attributes from within the "),a("Term",{attrs:{term:"workflow"}}),t._v(" code.")],1),t._v(" "),a("p",[t._v("Go samples for search attributes can be found at "),a("a",{attrs:{href:"https://github.com/uber-common/cadence-samples/tree/master/cmd/samples/recipes/searchattributes",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/uber-common/cadence-samples"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("UpsertSearchAttributes will merge attributes to the existing map in the "),a("Term",{attrs:{term:"workflow"}}),t._v(". Consider this example "),a("Term",{attrs:{term:"workflow"}}),t._v(" code:")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyWorkflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    attr1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomIntField"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomBoolField"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UpsertSearchAttributes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    attr2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomIntField"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomKeywordField"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"seattle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UpsertSearchAttributes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attr2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("After the second call to UpsertSearchAttributes, the map will contain:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomIntField"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomBoolField"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomKeywordField"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"seattle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("There is no support for removing a field. To achieve a similar effect, set the field to a sentinel value. For example, to remove “CustomKeywordField”, update it to “impossibleVal”. Then searching "),a("code",[t._v("CustomKeywordField != ‘impossibleVal’")]),t._v("  will match "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(' with CustomKeywordField not equal to "impossibleVal", which '),a("strong",[t._v("includes")]),t._v(" "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" without the CustomKeywordField set.")],1),t._v(" "),a("p",[t._v("Use "),a("code",[t._v("workflow.GetInfo")]),t._v(" to get current search attributes.")]),t._v(" "),a("h3",{attrs:{id:"continueasnew-and-cron"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#continueasnew-and-cron"}},[t._v("#")]),t._v(" ContinueAsNew and Cron")]),t._v(" "),a("p",[t._v("When performing a "),a("RouterLink",{attrs:{to:"/docs/go-client/continue-as-new/"}},[t._v("ContinueAsNew")]),t._v(" or using "),a("RouterLink",{attrs:{to:"/docs/go-client/distributed-cron/"}},[t._v("Cron")]),t._v(", search attributes (and memo) will be carried over to the new run by default.")],1),t._v(" "),a("h2",{attrs:{id:"query-capabilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-capabilities"}},[t._v("#")]),t._v(" Query Capabilities")]),t._v(" "),a("p",[a("Term",{attrs:{term:"query",show:"Query"}}),t._v(" "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" by using a SQL-like where clause when "),a("RouterLink",{attrs:{to:"/docs/06-cli/#list-closed-or-open-workflow-executions"}},[t._v("listing workflows from the CLI")]),t._v(" or using the list APIs ("),a("a",{attrs:{href:"https://godoc.org/go.uber.org/cadence/client#Client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.6.0/com/uber/cadence/WorkflowService.Iface.html#ListWorkflowExecutions-com.uber.cadence.ListWorkflowExecutionsRequest-",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java"),a("OutboundLink")],1),t._v(").")],1),t._v(" "),a("p",[t._v("Note that you will only see "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" from one domain when "),a("Term",{attrs:{term:"query",show:"querying"}}),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"supported-operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-operators"}},[t._v("#")]),t._v(" Supported Operators")]),t._v(" "),a("ul",[a("li",[t._v("AND, OR, ()")]),t._v(" "),a("li",[t._v("=, !=, >, >=, <, <=")]),t._v(" "),a("li",[t._v("IN")]),t._v(" "),a("li",[t._v("BETWEEN ... AND")]),t._v(" "),a("li",[t._v("ORDER BY")])]),t._v(" "),a("h3",{attrs:{id:"default-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-attributes"}},[t._v("#")]),t._v(" Default Attributes")]),t._v(" "),a("p",[t._v("These can be found by using the "),a("Term",{attrs:{term:"CLI"}}),t._v(" get-search-attr command or the GetSearchAttributes API. The names and types are as follows:")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("KEY")]),t._v(" "),a("th",[t._v("VALUE TYPE")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CloseStatus")]),t._v(" "),a("td",[t._v("INT")])]),t._v(" "),a("tr",[a("td",[t._v("CloseTime")]),t._v(" "),a("td",[t._v("INT")])]),t._v(" "),a("tr",[a("td",[t._v("CustomBoolField")]),t._v(" "),a("td",[t._v("DOUBLE")])]),t._v(" "),a("tr",[a("td",[t._v("CustomDatetimeField")]),t._v(" "),a("td",[t._v("DATETIME")])]),t._v(" "),a("tr",[a("td",[t._v("CustomDomain")]),t._v(" "),a("td",[t._v("KEYWORD")])]),t._v(" "),a("tr",[a("td",[t._v("CustomDoubleField")]),t._v(" "),a("td",[t._v("BOOL")])]),t._v(" "),a("tr",[a("td",[t._v("CustomIntField")]),t._v(" "),a("td",[t._v("INT")])]),t._v(" "),a("tr",[a("td",[t._v("CustomKeywordField")]),t._v(" "),a("td",[t._v("KEYWORD")])]),t._v(" "),a("tr",[a("td",[t._v("CustomStringField")]),t._v(" "),a("td",[t._v("STRING")])]),t._v(" "),a("tr",[a("td",[t._v("DomainID")]),t._v(" "),a("td",[t._v("KEYWORD")])]),t._v(" "),a("tr",[a("td",[t._v("ExecutionTime")]),t._v(" "),a("td",[t._v("INT")])]),t._v(" "),a("tr",[a("td",[t._v("HistoryLength")]),t._v(" "),a("td",[t._v("INT")])]),t._v(" "),a("tr",[a("td",[t._v("RunID")]),t._v(" "),a("td",[t._v("KEYWORD")])]),t._v(" "),a("tr",[a("td",[t._v("StartTime")]),t._v(" "),a("td",[t._v("INT")])]),t._v(" "),a("tr",[a("td",[t._v("WorkflowID")]),t._v(" "),a("td",[t._v("KEYWORD")])]),t._v(" "),a("tr",[a("td",[t._v("WorkflowType")]),t._v(" "),a("td",[t._v("KEYWORD")])])])]),t._v(" "),a("p",[t._v("There are some special considerations for these attributes:")]),t._v(" "),a("ul",[a("li",[t._v("CloseStatus, CloseTime, DomainID, ExecutionTime, HistoryLength, RunID, StartTime, WorkflowID, WorkflowType are reserved by Cadence and are read-only")]),t._v(" "),a("li",[t._v("CloseStatus is a mapping of int to state:\n"),a("ul",[a("li",[t._v("0 = completed")]),t._v(" "),a("li",[t._v("1 = failed")]),t._v(" "),a("li",[t._v("2 = canceled")]),t._v(" "),a("li",[t._v("3 = terminated")]),t._v(" "),a("li",[t._v("4 = continuedasnew")]),t._v(" "),a("li",[t._v("5 = timedout")])])]),t._v(" "),a("li",[t._v("StartTime, CloseTime and ExecutionTime are stored as INT, but support "),a("Term",{attrs:{term:"query",show:"queries"}}),t._v(" using both EpochTime in nanoseconds, and string in RFC3339 format (ex. "),a("code",[t._v('"2006-01-02T15:04:05+07:00"')]),t._v(")")],1),t._v(" "),a("li",[t._v("CloseTime, CloseStatus, HistoryLength are only present in closed "),a("Term",{attrs:{term:"workflow"}})],1),t._v(" "),a("li",[t._v("ExecutionTime is for Retry/Cron user to "),a("Term",{attrs:{term:"query"}}),t._v(" a "),a("Term",{attrs:{term:"workflow"}}),t._v(" that will run in the future")],1)]),t._v(" "),a("p",[t._v("To list only open "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(", add "),a("code",[t._v("CloseTime = missing")]),t._v(" to the end of the "),a("Term",{attrs:{term:"query"}}),t._v(".")],1),t._v(" "),a("p",[t._v("If you use retry or the cron feature to "),a("Term",{attrs:{term:"query"}}),t._v(" "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" that will start execution in a certain time range, you can add predicates on ExecutionTime. For example: "),a("code",[t._v("ExecutionTime > 2019-01-01T10:00:00-07:00")]),t._v(". Note that if predicates on ExecutionTime are included, only cron or a "),a("Term",{attrs:{term:"workflow"}}),t._v(" that needs to retry will be returned.")],1),t._v(" "),a("h3",{attrs:{id:"general-notes-about-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-notes-about-queries"}},[t._v("#")]),t._v(" General Notes About Queries")]),t._v(" "),a("ul",[a("li",[t._v("Pagesize default is 1000, and cannot be larger than 10k")]),t._v(" "),a("li",[t._v("Range "),a("Term",{attrs:{term:"query"}}),t._v(" on Cadence timestamp (StartTime, CloseTime, ExecutionTime) cannot be larger than 9223372036854775807 (maxInt64 - 1001)")],1),t._v(" "),a("li",[a("Term",{attrs:{term:"query",show:"Query"}}),t._v(" by time range will have 1ms resolution")],1),t._v(" "),a("li",[a("Term",{attrs:{term:"query",show:"Query"}}),t._v(" column names are case sensitive")],1),t._v(" "),a("li",[t._v("ListWorkflow may take longer when retrieving a large number of "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" (10M+)")],1),t._v(" "),a("li",[t._v("To retrieve a large number of "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" without caring about order, use the ScanWorkflow API")],1),t._v(" "),a("li",[t._v("To efficiently count the number of "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(", use the CountWorkflow API")],1)]),t._v(" "),a("h2",{attrs:{id:"tools-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tools-support"}},[t._v("#")]),t._v(" Tools Support")]),t._v(" "),a("h3",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),a("p",[t._v("Support for search attributes is available as of version 0.6.0 of the Cadence server. You can also use the "),a("Term",{attrs:{term:"CLI"}}),t._v(" from the latest "),a("a",{attrs:{href:"https://hub.docker.com/r/ubercadence/cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("CLI Docker image"),a("OutboundLink")],1),t._v(" (supported on 0.6.4 or later).")],1),t._v(" "),a("h4",{attrs:{id:"start-workflow-with-search-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-workflow-with-search-attributes"}},[t._v("#")]),t._v(" Start Workflow with Search Attributes")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cadence --do samples-domain workflow start --tl helloWorldGroup --wt main.Workflow --et "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" --dt "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"vancexu\"'")]),t._v(" -search_attr_key "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CustomIntField | CustomKeywordField | CustomStringField |  CustomBoolField | CustomDatetimeField'")]),t._v(" -search_attr_value "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5 | keyword1 | vancexu test | true | 2019-06-07T16:16:36-08:00'")]),t._v("\n")])])]),a("h4",{attrs:{id:"search-workflows-with-list-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-workflows-with-list-api"}},[t._v("#")]),t._v(" Search Workflows with List API")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cadence --do samples-domain wf list -q "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'(CustomKeywordField = "keyword1" and CustomIntField >= 5) or CustomKeywordField = "keyword2"\'')]),t._v(" -psa\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cadence --do samples-domain wf list -q "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'CustomKeywordField in ("keyword2", "keyword1") and CustomIntField >= 5 and CloseTime between "2018-06-07T16:16:36-08:00" and "2019-06-07T16:46:34-08:00" order by CustomDatetimeField desc\'')]),t._v(" -psa\n")])])]),a("p",[t._v("To list only open "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(", add "),a("code",[t._v("CloseTime = missing")]),t._v(" to the end of the "),a("Term",{attrs:{term:"query"}}),t._v(".")],1),t._v(" "),a("p",[t._v("Note that "),a("Term",{attrs:{term:"query",show:"queries"}}),t._v(" can support more than one type of filter:")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cadence --do samples-domain wf list -q "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'WorkflowType = "main.Workflow" and (WorkflowID = "1645a588-4772-4dab-b276-5f9db108b3a8" or RunID = "be66519b-5f09-40cd-b2e8-20e4106244dc")\'')]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cadence --do samples-domain wf list -q "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'WorkflowType = "main.Workflow" StartTime > "2019-06-07T16:46:34-08:00" and CloseTime = missing\'')]),t._v("\n")])])]),a("h3",{attrs:{id:"web-ui-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-ui-support"}},[t._v("#")]),t._v(" Web UI Support")]),t._v(" "),a("p",[a("Term",{attrs:{term:"query",show:"Queries"}}),t._v(" are supported in "),a("a",{attrs:{href:"https://github.com/uber/cadence-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cadence Web"),a("OutboundLink")],1),t._v(' as of release 3.4.0. Use the "Basic/Advanced" button to switch to "Advanced" mode and type the '),a("Term",{attrs:{term:"query"}}),t._v(" in the search box.")],1),t._v(" "),a("h2",{attrs:{id:"local-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-testing"}},[t._v("#")]),t._v(" Local Testing")]),t._v(" "),a("ol",[a("li",[t._v("Increase Docker memory to higher than 6GB. Navigate to Docker -> Preferences -> Advanced -> Memory")]),t._v(" "),a("li",[t._v("Get the Cadence Docker compose file. Run "),a("code",[t._v("curl -O https://raw.githubusercontent.com/uber/cadence/master/docker/docker-compose-es.yml")])]),t._v(" "),a("li",[t._v("Start Cadence Docker (which contains Apache Kafka, Apache Zookeeper, and Elasticsearch) using "),a("code",[t._v("docker-compose -f docker-compose-es.yml up")])]),t._v(" "),a("li",[t._v("From the Docker output log, make sure Elasticsearch and Cadence started correctly. If you encounter an insufficient disk space error, try "),a("code",[t._v("docker system prune -a --volumes")])]),t._v(" "),a("li",[t._v("Register a local domain and start using it. "),a("code",[t._v("cadence --do samples-domain d re")])]),t._v(" "),a("li",[t._v("Allowlist search attributes. "),a("code",[t._v("cadence --do domain adm cl asa --search_attr_key NewKey --search_attr_type 1")])])]),t._v(" "),a("p",[t._v("Note: starting a "),a("Term",{attrs:{term:"workflow"}}),t._v(" with search attributes but without Elasticsearch will succeed as normal, but will not be searchable and will not be shown in list results.")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);
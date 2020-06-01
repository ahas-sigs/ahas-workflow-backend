(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{376:function(t,e,r){"use strict";r.r(e);var n=r(8),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"continue-as-new"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#continue-as-new"}},[t._v("#")]),t._v(" Continue as new")]),t._v(" "),r("p",[r("Term",{attrs:{term:"workflow",show:"Workflows"}}),t._v(" that need to rerun periodically could naively be implemented as a big "),r("strong",[t._v("for")]),t._v(" loop with\na sleep where the entire logic of the "),r("Term",{attrs:{term:"workflow"}}),t._v(" is inside the body of the "),r("strong",[t._v("for")]),t._v(" loop. The problem\nwith this approach is that the history for that "),r("Term",{attrs:{term:"workflow"}}),t._v(" will keep growing to a point where it\nreaches the maximum size enforced by the service.")],1),t._v(" "),r("p",[r("strong",[t._v("ContinueAsNew")]),t._v(" is the low level construct that enables implementing such "),r("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" without the\nrisk of failures down the road. The operation atomically completes the current execution and starts\na new execution of the "),r("Term",{attrs:{term:"workflow"}}),t._v(" with the same "),r("strong",[r("Term",{attrs:{term:"workflow_ID"}})],1),t._v(". The new execution will not carry\nover any history from the old execution. To trigger this behavior, the "),r("Term",{attrs:{term:"workflow"}}),t._v(" function should\nterminate by returning the special "),r("strong",[t._v("ContinueAsNewError")]),t._v(" error:")],1),t._v(" "),r("div",{staticClass:"language-go extra-class"},[r("pre",{pre:!0,attrs:{class:"language-go"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("SimpleWorkflow")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workflow"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context ctx"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" workflow"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewContinueAsNewError")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SimpleWorkflow"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
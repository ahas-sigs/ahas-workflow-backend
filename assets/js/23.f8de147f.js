(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{411:function(t,e,r){"use strict";r.r(e);var a=r(8),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"synchronous-query"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#synchronous-query"}},[t._v("#")]),t._v(" Synchronous query")]),t._v(" "),r("p",[r("Term",{attrs:{term:"workflow",show:"Workflow"}}),t._v(" code is stateful with the Cadence framework preserving it over various software and hardware failures. The state is constantly mutated during "),r("Term",{attrs:{term:"workflow_execution"}}),t._v(". To expose this internal state to the external world Cadence provides a synchronous "),r("Term",{attrs:{term:"query"}}),t._v(" feature. From the "),r("Term",{attrs:{term:"workflow"}}),t._v(" implementer point of view the "),r("Term",{attrs:{term:"query"}}),t._v(" is exposed as a synchronous callback that is invoked by external entities. Multiple such callbacks can be provided per "),r("Term",{attrs:{term:"workflow"}}),t._v(" type exposing different information to different external systems.")],1),t._v(" "),r("p",[t._v("To execute a "),r("Term",{attrs:{term:"query"}}),t._v(" an external client calls a synchronous Cadence API providing "),r("em",[r("Term",{attrs:{term:"domain"}}),t._v(", workflowID, "),r("Term",{attrs:{term:"query"}}),t._v(" name")],1),t._v(" and optional "),r("em",[r("Term",{attrs:{term:"query"}}),t._v(" arguments")],1),t._v(".")],1),t._v(" "),r("p",[r("Term",{attrs:{term:"query",show:"Query"}}),t._v(" callbacks must be read-only not mutating the "),r("Term",{attrs:{term:"workflow"}}),t._v(" state in any way. The other limitation is that the "),r("Term",{attrs:{term:"query"}}),t._v(" callback cannot contain any blocking code. Both above limitations rule out ability to invoke "),r("Term",{attrs:{term:"activity",show:"activities"}}),t._v(" from the "),r("Term",{attrs:{term:"query"}}),t._v(" handlers.")],1),t._v(" "),r("p",[t._v("Cadence team is currently working on implementing "),r("em",[t._v("update")]),t._v(" feature that would be similar to "),r("Term",{attrs:{term:"query"}}),t._v(" in the way it is invoked, but would support "),r("Term",{attrs:{term:"workflow"}}),t._v(" state mutation and "),r("Term",{attrs:{term:"local_activity"}}),t._v(" invocations.")],1),t._v(" "),r("h2",{attrs:{id:"stack-trace-query"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stack-trace-query"}},[t._v("#")]),t._v(" Stack Trace Query")]),t._v(" "),r("p",[t._v("The Cadence client libraries expose some predefined "),r("Term",{attrs:{term:"query",show:"queries"}}),t._v(" out of the box. Currently the only supported built-in "),r("Term",{attrs:{term:"query"}}),t._v(" is "),r("em",[t._v("stack_trace")]),t._v(". This "),r("Term",{attrs:{term:"query"}}),t._v(" returns stacks of all "),r("Term",{attrs:{term:"workflow"}}),t._v(" owned threads. This is a great way to troubleshoot any "),r("Term",{attrs:{term:"workflow"}}),t._v(" in production.")],1)])}),[],!1,null,null,null);e.default=o.exports}}]);
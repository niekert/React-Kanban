webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),a=r(o),u=n(153),i=r(u),l=n(154),c=r(l),f=n(284),s=r(f),d=n(357),p=r(d),v=n(358),h=r(v);(0,h["default"])(s["default"],p["default"],"app"),console.log("cool"),i["default"].render(a["default"].createElement(c["default"],null),document.getElementById("app"))},154:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(155),s=r(f),d=n(1),p=r(d),v=n(167),h=r(v),y=n(172),b=n(324),g=r(b),m=n(283),O=r(m),_=n(354),E=r(_),j=(i=(0,y.DragDropContext)(g["default"]),i(l=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return p["default"].createElement("div",null,p["default"].createElement("button",{className:"add-lane",onClick:this.addLane},"+"),p["default"].createElement(s["default"],{stores:[E["default"]],inject:{lanes:function(){return E["default"].getState().lanes}}},p["default"].createElement(h["default"],null)))}},{key:"addLane",value:function(){O["default"].create({name:"New lane",editing:!0})}}]),t}(p["default"].Component))||l);t["default"]=j},167:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),u=n(168),i=r(u);t["default"]=function(e){var t=e.lanes;return a["default"].createElement("div",{className:"lanes"},t.map(function(e){return a["default"].createElement(i["default"],{className:"lane",key:e.id,lane:e})}))}},168:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(155),d=r(s),p=n(1),v=r(p),h=n(169),y=r(h),b=n(298),g=r(b),m=n(283),O=r(m),_=n(299),E=r(_),j=n(170),w=r(j),k=n(172),P=n(282),N=r(P),S={hover:function(e,t){var n=t.getItem(),r=n.id;e.lane.notes.length||O["default"].attachToLane({laneId:e.lane.id,noteId:r})}},M=(l=(0,k.DropTarget)(N["default"].NOTE,S,function(e){return{connectDropTarget:e.dropTarget()}}),l(c=function(e){function t(){var e,n,r,o;a(this,t);for(var i=arguments.length,l=Array(i),c=0;i>c;c++)l[c]=arguments[c];return n=r=u(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.addNote=function(e){e.stopPropagation();var t=r.props.lane.id,n=g["default"].create({task:"New task",editing:!0});O["default"].attachToLane({noteId:n.id,laneId:t})},r.deleteNote=function(e,t){t.stopPropagation();var n=r.props.lane.id;O["default"].detachFromLane({laneId:n,noteId:e}),g["default"]["delete"](e)},r.editName=function(e){var t=r.props.lane.id;return e.trim()?void O["default"].update({id:t,name:e,editing:!1}):void O["default"].update({id:t,editing:!1})},r.deleteLane=function(){var e=r.props.lane.id;O["default"]["delete"](e)},r.activateLaneEdit=function(){var e=r.props.lane.id;O["default"].update({id:e,editing:!0})},r.activateNoteEdit=function(e){g["default"].update({id:e,editing:!0})},o=n,u(r,o)}return i(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.connectDropTarget,n=e.lane,r=o(e,["connectDropTarget","lane"]);return t(v["default"].createElement("div",r,v["default"].createElement("div",{className:"lane-header",onClick:this.activateLaneEdit},v["default"].createElement("div",{className:"lane-add-note"},v["default"].createElement("button",{onClick:this.addNote},"+")),v["default"].createElement(w["default"],{className:"lane-name",editing:n.editing,value:n.name,onEdit:this.editName}),v["default"].createElement("div",{className:"lane-delete"},v["default"].createElement("button",{onClick:this.deleteLane},"x"))),v["default"].createElement(d["default"],{stores:[E["default"]],inject:{notes:function(){return E["default"].getNotesByIds(n.notes)}}},v["default"].createElement(y["default"],{onValueClick:this.activateNoteEdit,onEdit:this.editNote,onDelete:this.deleteNote}))))}},{key:"editNote",value:function(e,t){return t.trim()?void g["default"].update({id:e,task:t,editing:!1}):void g["default"].update({id:e,editing:!1})}}]),t}(v["default"].Component))||c);t["default"]=M},169:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),u=n(170),i=r(u),l=n(171),c=r(l),f=n(283),s=r(f);t["default"]=function(e){var t=e.notes,n=e.onValueClick,r=e.onEdit,o=e.onDelete;return a["default"].createElement("ul",{className:"notes"},t.map(function(e){return a["default"].createElement(c["default"],{className:"note",id:e.id,key:e.id,onMove:s["default"].move,editing:e.editing},a["default"].createElement(i["default"],{editing:e.editing,value:e.task,onValueClick:n.bind(null,e.id),onEdit:r.bind(null,e.id),onDelete:o.bind(null,e.id)}))}))}},170:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),s=function(e){function t(){var e,n,r,o;a(this,t);for(var i=arguments.length,l=Array(i),c=0;i>c;c++)l[c]=arguments[c];return n=r=u(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.renderEdit=function(){return f["default"].createElement("input",{type:"text",ref:function(e){return e?e.selectionStart=r.props.value.length:null},autoFocus:!0,defaultValue:r.props.value,onBlur:r.finishEdit,onKeyPress:r.checkEnter})},r.renderValue=function(){var e=r.props.onDelete;return f["default"].createElement("div",{onClick:r.props.onValueClick},f["default"].createElement("span",{className:"value"},r.props.value),e?r.renderDelete():null)},r.renderDelete=function(){return f["default"].createElement("button",{className:"delete",onClick:r.props.onDelete},"x")},r.checkEnter=function(e){"Enter"===e.key&&r.finishEdit(e)},r.finishEdit=function(e){var t=e.target.value;r.props.onEdit&&r.props.onEdit(t)},o=n,u(r,o)}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=(e.value,e.onEdit,e.onValueClick,e.editing),n=o(e,["value","onEdit","onValueClick","editing"]);return f["default"].createElement("div",n,t?this.renderEdit():this.renderValue())}}]),t}(f["default"].Component);t["default"]=s},171:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c,f,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(1),v=r(p),h=n(172),y=n(282),b=r(y),g={beginDrag:function(e){return{id:e.id}},isDragging:function(e,t){return e.id===t.getItem().id}},m={hover:function(e,t){var n=e.id,r=t.getItem(),o=r.id;o!==n&&e.onMove({sourceId:o,targetId:n})}},O=(l=(0,h.DragSource)(b["default"].NOTE,g,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}),c=(0,h.DropTarget)(b["default"].NOTE,m,function(e){return{connectDropTarget:e.dropTarget()}}),l(f=c(f=function(e){function t(){return a(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,n=e.editing,r=e.connectDropTarget,a=e.isDragging,u=(e.id,e.onMove,o(e,["connectDragSource","editing","connectDropTarget","isDragging","id","onMove"])),i=n?function(e){return e}:t;return i(r(v["default"].createElement("li",s({style:{opacity:a?0:1}},u),u.children)))}}]),t}(v["default"].Component))||f)||f);t["default"]=O},282:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={NOTE:"note"}},283:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(284),a=r(o);t["default"]=a["default"].generateActions("create","update","delete","attachToLane","detachFromLane","move")},284:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(285),a=r(o),u=new a["default"];t["default"]=u},298:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(284),a=r(o);t["default"]=a["default"].generateActions("create","update","delete")},299:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(300),l=r(i),c=n(284),f=r(c),s=n(298),d=r(s),p=function(){function e(){o(this,e),this.bindActions(d["default"]),this.notes=[],this.exportPublicMethods({getNotesByIds:this.getNotesByIds.bind(this)})}return u(e,[{key:"getNotesByIds",value:function(e){var t=this;return(e||[]).map(function(e){return t.notes.filter(function(t){return t.id===e})}).filter(function(e){return e.length}).map(function(e){return e[0]})}},{key:"create",value:function(e){var t=this.notes;return e.id=l["default"].v4(),this.setState({notes:t.concat(e)}),e}},{key:"update",value:function(e){var t=this.notes.map(function(t){return t.id===e.id?a({},t,e):t});this.setState({notes:t})}},{key:"delete",value:function(e){this.setState({notes:this.notes.filter(function(t){return t.id!==e})})}}]),e}();t["default"]=f["default"].createStore(p,"NoteStore")},354:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(300),l=r(i),c=n(284),f=r(c),s=n(283),d=r(s),p=n(355),v=r(p),h=function(){function e(){o(this,e),this.bindActions(d["default"]),this.lanes=[]}return u(e,[{key:"attachToLane",value:function(e){var t=e.laneId,n=e.noteId,r=this.lanes.map(function(e){return-1!==e.notes.indexOf(n)&&(e.notes=e.notes.filter(function(e){return e!==n})),e.id===t&&(-1!==e.notes.indexOf(n)?console.warn("Already attached note to lane",r):e.notes.push(n)),e});this.setState({lanes:r})}},{key:"deatchFromLane",value:function(e){var t=e.laneId,n=e.noteId,r=this.lanes.map(function(e){return e.id===t&&(e.notes=e.notes.filter(function(e){return e!==n})),e});this.setState({lanes:r})}},{key:"create",value:function(e){var t=this.lanes;e.id=l["default"].v4(),e.notes=e.notes||[],this.setState({lanes:t.concat(e)})}},{key:"update",value:function(e){var t=this.lanes.map(function(t){return t.id===e.id?a({},t,e):t});this.setState({lanes:t})}},{key:"delete",value:function(e){this.setState({lanes:this.lanes.filter(function(t){return t.id!==e})})}},{key:"move",value:function(e){var t=e.sourceId,n=e.targetId,r=this.lanes,o=r.filter(function(e){return-1!==e.notes.indexOf(t)})[0],a=r.filter(function(e){return-1!==e.notes.indexOf(n)})[0],u=o.notes.indexOf(t),i=a.notes.indexOf(n);o===a?o.notes=(0,v["default"])(o.notes,{$splice:[[u,1],[i,0,t]]}):(o.notes.splice(u,1),a.notes.splice(i,0,t)),this.setState({lanes:r})}}]),e}();t["default"]=f["default"].createStore(h,"LaneStore")},357:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}}},358:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,n){var r=(0,a["default"])(e);try{e.bootstrap(t.get(n))}catch(o){console.error("Failed to bootstrap data",o)}r.listen(function(){t.get("debug")||t.set(n,e.takeSnapshot())})};var o=n(359),a=r(o)},359:function(e,t){"use strict";function n(){var e=this;this.dispatcher.register(function(t){var n=Object.keys(e.alt.stores).reduce(function(t,n){return t.push(e.alt.stores[n].dispatchToken),t},[]);e.waitFor(n),e.setState({payload:t}),e.emitChange()})}function r(e){return e.FinalStore?e.FinalStore:e.FinalStore=e.createUnsavedStore(n)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r,e.exports=t["default"]}});
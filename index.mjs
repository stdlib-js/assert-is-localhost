// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";var s=t.isPrimitive,i=/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;var r=function(t){return!!s(t)&&("localhost"===t||"LOCALHOST"===t||"[::1]"===t||i.test(t))};export{r as default};
//# sourceMappingURL=index.mjs.map

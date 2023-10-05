// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";var s=/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;function e(e){return!!t(e)&&("localhost"===e||"LOCALHOST"===e||"[::1]"===e||s.test(e))}export{e as default};
//# sourceMappingURL=index.mjs.map

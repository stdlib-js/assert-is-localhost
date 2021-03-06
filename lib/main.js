/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;


// VARIABLES //

// IPv4 127.0.0.0/8 address block:
var RE_LOCALHOST_IPV4 = /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;


// MAIN //

/**
* Tests whether a value is a localhost hostname.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a localhost hostname
*
* @example
* var bool = isLocalhost( 'localhost' );
* // returns true
*
* @example
* var bool = isLocalhost( '127.0.0.1' );
* // returns true
*
* @example
* var bool = isLocalhost( '[::1]' );
* // returns true
*
* @example
* var bool = isLocalhost( 'wikipedia.org' );
* // returns false
*
* @example
* var bool = isLocalhost( 'stdlib.io' );
* // returns false
*
* @example
* var bool = isLocalhost( null );
* // returns false
*/
function isLocalhost( value ) {
	if ( !isString( value ) ) {
		return false;
	}
	return (
		value === 'localhost' || value === 'LOCALHOST' ||

		// IPv6 localhost address:
		value === '[::1]' ||

		RE_LOCALHOST_IPV4.test( value )
	);
}


// EXPORTS //

module.exports = isLocalhost;

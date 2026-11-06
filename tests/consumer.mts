import * as api from '@lp-labs/text-codepoint-reverser';
import { reverseCodePoints } from '@lp-labs/text-codepoint-reverser';
console.log(reverseCodePoints('A😀B'));
// @ts-expect-error invalid argument must be rejected by declarations
api.reverseCodePoints(1);

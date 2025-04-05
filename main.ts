/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#FFFF00" weight=100
namespace text {
    //% block
    export function ConvertStringToArray(text: string) {
        return JSON.parse(text)
    }
}
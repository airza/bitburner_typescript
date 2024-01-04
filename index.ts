import type * as Netscript from "./NetscriptDefinitions"
export async function main(ns:Netscript.NS){
    ns.scp("index.js","fuckler","home");
}
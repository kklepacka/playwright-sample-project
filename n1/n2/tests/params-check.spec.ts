import { test, expect } from '@playwright/test';

test('Check community params', async () => {
    expect(process.env.DS_simple_comparaison).toEqual("simple dataset");
});

test('Check ultimate params', async () => {
    expect(process.env.TC_CUF_pw_tc).toEqual("testcase cuf");
    expect(process.env.IT_CUF_pw_it).toEqual("iteration cuf");
    expect(process.env.CPG_CUF_pw_cpg).toEqual("campaign cuf");
    expect(process.env.TS_CUF_pw_ts).toEqual("testsuite cuf");
    });

test('Check special char', async () =>{
    expect(process.env.DS_special_char).toEqual('La taux - de conversion := "€" [euros] / ${dollars} @ugmente; & ça continue');
});

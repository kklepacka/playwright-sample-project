Project for testing playwright component. 

It contains 3 test files: 
- doc-check.spec.ts
  Compose of Two test cases to check documentation, on success and the other on failure. 
  The last test use 2 level of "describes"
    The documentation is on https://squash-tf.readthedocs.io/en/latest/index.html
- params-check.spec.ts
  Compose of 3 tests to check parameters:
  - Check community params:
    - DS_simple_comparaison: simple dataset
  - Check ultimate params:
    - TC_CUF_pw_tc: testcase cuf
    - IT_CUF_pw_it: iteration cuf
    - CPG_CUF_pw_cpg: campaign cuf
    - TS_CUF_pw_ts: testsuite cuf
  - Check special char:
    - DS special_char: La taux - de conversion := "€" [euros] / ${dollars} @ugmente; & sca continue

import { parseScript, parseModule } from '../../../src/cherow';
import * as chai from 'chai';

const expect = chai.expect;

describe('TC262 - passing', () => {

    it('should parse "var _፩፪፫፬፭፮፯፰፱;"', () => {
        expect(parseScript('var _፩፪፫፬፭፮፯፰፱;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 15,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 0,
                "end": 15,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 4,
                    "end": 14,
                    "id": {
                      "type": "Identifier",
                      "start": 4,
                      "end": 14,
                      "name": "_፩፪፫፬፭፮፯፰፱"
                    },
                    "init": null
                  }
                ],
                "kind": "var"
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "do continue; while (true);"', () => {
        expect(parseScript('do continue; while (true);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 26,
            "body": [
              {
                "type": "DoWhileStatement",
                "start": 0,
                "end": 26,
                "body": {
                  "type": "ContinueStatement",
                  "start": 3,
                  "end": 12,
                  "label": null
                },
                "test": {
                  "type": "Literal",
                  "start": 20,
                  "end": 24,
                  "value": true,
                  "raw": "true"
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "var ABC;"', () => {
        expect(parseScript('var ABC;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 8,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 0,
                "end": 8,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 4,
                    "end": 7,
                    "id": {
                      "type": "Identifier",
                      "start": 4,
                      "end": 7,
                      "name": "ABC"
                    },
                    "init": null
                  }
                ],
                "kind": "var"
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "function a({b, c}) {}"', () => {
        expect(parseScript('function a({b, c}) {}', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 21,
            "body": [
              {
                "type": "FunctionDeclaration",
                "start": 0,
                "end": 21,
                "id": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 10,
                  "name": "a"
                },
                "generator": false,
                "expression": false,
                "async": false,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 11,
                    "end": 17,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 12,
                        "end": 13,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 12,
                          "end": 13,
                          "name": "b"
                        },
                        "kind": "init",
                        "value": {
                          "type": "Identifier",
                          "start": 12,
                          "end": 13,
                          "name": "b"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 15,
                        "end": 16,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 15,
                          "end": 16,
                          "name": "c"
                        },
                        "kind": "init",
                        "value": {
                          "type": "Identifier",
                          "start": 15,
                          "end": 16,
                          "name": "c"
                        }
                      }
                    ]
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 19,
                  "end": 21,
                  "body": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "class a { set b (c) {} get b() {} };"', () => {
        expect(parseScript('class a { set b (c) {} get b() {} };', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 36,
            "body": [
              {
                "type": "ClassDeclaration",
                "start": 0,
                "end": 35,
                "id": {
                  "type": "Identifier",
                  "start": 6,
                  "end": 7,
                  "name": "a"
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 8,
                  "end": 35,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 10,
                      "end": 22,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 14,
                        "end": 15,
                        "name": "b"
                      },
                      "static": false,
                      "kind": "set",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 16,
                        "end": 22,
                        "id": null,
                        "generator": false,
                        "expression": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 17,
                            "end": 18,
                            "name": "c"
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 20,
                          "end": 22,
                          "body": []
                        }
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 23,
                      "end": 33,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 27,
                        "end": 28,
                        "name": "b"
                      },
                      "static": false,
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 28,
                        "end": 33,
                        "id": null,
                        "generator": false,
                        "expression": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 31,
                          "end": 33,
                          "body": []
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "EmptyStatement",
                "start": 35,
                "end": 36
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse complex #1', () => {
        expect(parseScript(`((1), a)();
        ((2), (b.a))();`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 35,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 11,
                "expression": {
                  "type": "CallExpression",
                  "start": 0,
                  "end": 10,
                  "callee": {
                    "type": "SequenceExpression",
                    "start": 1,
                    "end": 7,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 2,
                        "end": 3,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Identifier",
                        "start": 6,
                        "end": 7,
                        "name": "a"
                      }
                    ]
                  },
                  "arguments": []
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 20,
                "end": 35,
                "expression": {
                  "type": "CallExpression",
                  "start": 20,
                  "end": 34,
                  "callee": {
                    "type": "SequenceExpression",
                    "start": 21,
                    "end": 31,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 22,
                        "end": 23,
                        "value": 2,
                        "raw": "2"
                      },
                      {
                        "type": "MemberExpression",
                        "start": 27,
                        "end": 30,
                        "object": {
                          "type": "Identifier",
                          "start": 27,
                          "end": 28,
                          "name": "b"
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 29,
                          "end": 30,
                          "name": "a"
                        },
                        "computed": false
                      }
                    ]
                  },
                  "arguments": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "a => b;"', () => {
        expect(parseScript('a => b;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 7,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 7,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 0,
                  "end": 6,
                  "id": null,
                  "generator": false,
                  "expression": true,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 0,
                      "end": 1,
                      "name": "a"
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 5,
                    "end": 6,
                    "name": "b"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });


    it('should parse "((1), (a.a))();"', () => {
        expect(parseScript('((1), (a.a))();', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 15,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 15,
                "expression": {
                  "type": "CallExpression",
                  "start": 0,
                  "end": 14,
                  "callee": {
                    "type": "SequenceExpression",
                    "start": 1,
                    "end": 11,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 2,
                        "end": 3,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "MemberExpression",
                        "start": 7,
                        "end": 10,
                        "object": {
                          "type": "Identifier",
                          "start": 7,
                          "end": 8,
                          "name": "a"
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 9,
                          "end": 10,
                          "name": "a"
                        },
                        "computed": false
                      }
                    ]
                  },
                  "arguments": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "var {a, b} = ({a: 1, b: 2});"', () => {
        expect(parseScript('var {a, b} = ({a: 1, b: 2});', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 28,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 0,
                "end": 28,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 4,
                    "end": 27,
                    "id": {
                      "type": "ObjectPattern",
                      "start": 4,
                      "end": 10,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 5,
                          "end": 6,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5,
                            "end": 6,
                            "name": "a"
                          },
                          "kind": "init",
                          "value": {
                            "type": "Identifier",
                            "start": 5,
                            "end": 6,
                            "name": "a"
                          }
                        },
                        {
                          "type": "Property",
                          "start": 8,
                          "end": 9,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 8,
                            "end": 9,
                            "name": "b"
                          },
                          "kind": "init",
                          "value": {
                            "type": "Identifier",
                            "start": 8,
                            "end": 9,
                            "name": "b"
                          }
                        }
                      ]
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 14,
                      "end": 26,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 15,
                          "end": 19,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 15,
                            "end": 16,
                            "name": "a"
                          },
                          "value": {
                            "type": "Literal",
                            "start": 18,
                            "end": 19,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init"
                        },
                        {
                          "type": "Property",
                          "start": 21,
                          "end": 25,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 21,
                            "end": 22,
                            "name": "b"
                          },
                          "value": {
                            "type": "Literal",
                            "start": 24,
                            "end": 25,
                            "value": 2,
                            "raw": "2"
                          },
                          "kind": "init"
                        }
                      ]
                    }
                  }
                ],
                "kind": "var"
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse complex 2', () => {
        expect(parseScript(`((function () {
            return 1;
            var a = (2);
          })());`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 79,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 79,
                "expression": {
                  "type": "CallExpression",
                  "start": 1,
                  "end": 77,
                  "callee": {
                    "type": "FunctionExpression",
                    "start": 2,
                    "end": 74,
                    "id": null,
                    "generator": false,
                    "expression": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 14,
                      "end": 74,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 28,
                          "end": 37,
                          "argument": {
                            "type": "Literal",
                            "start": 35,
                            "end": 36,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 50,
                          "end": 62,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 54,
                              "end": 61,
                              "id": {
                                "type": "Identifier",
                                "start": 54,
                                "end": 55,
                                "name": "a"
                              },
                              "init": {
                                "type": "Literal",
                                "start": 59,
                                "end": 60,
                                "value": 2,
                                "raw": "2"
                              }
                            }
                          ],
                          "kind": "var"
                        }
                      ]
                    }
                  },
                  "arguments": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse complex 3', () => {
        expect(parseScript(`function a() {
            return ({}) / (1);
          }`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 57,
            "body": [
              {
                "type": "FunctionDeclaration",
                "start": 0,
                "end": 57,
                "id": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 10,
                  "name": "a"
                },
                "generator": false,
                "expression": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 13,
                  "end": 57,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 27,
                      "end": 45,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 34,
                        "end": 44,
                        "left": {
                          "type": "ObjectExpression",
                          "start": 35,
                          "end": 37,
                          "properties": []
                        },
                        "operator": "/",
                        "right": {
                          "type": "Literal",
                          "start": 42,
                          "end": 43,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "a <<= (1);"', () => {
        expect(parseScript('a <<= (1);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 10,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 10,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 0,
                  "end": 9,
                  "operator": "<<=",
                  "left": {
                    "type": "Identifier",
                    "start": 0,
                    "end": 1,
                    "name": "a"
                  },
                  "right": {
                    "type": "Literal",
                    "start": 7,
                    "end": 8,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "({*a() {}});"', () => {
        expect(parseScript('({*a() {}});', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 12,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 12,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 1,
                  "end": 10,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2,
                      "end": 9,
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3,
                        "end": 4,
                        "name": "a"
                      },
                      "kind": "init",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 4,
                        "end": 9,
                        "id": null,
                        "generator": true,
                        "expression": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 7,
                          "end": 9,
                          "body": []
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "for (a[b in c] in d) ;"', () => {
        expect(parseScript('for (a[b in c] in d) ;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 22,
            "body": [
              {
                "type": "ForInStatement",
                "start": 0,
                "end": 22,
                "left": {
                  "type": "MemberExpression",
                  "start": 5,
                  "end": 14,
                  "object": {
                    "type": "Identifier",
                    "start": 5,
                    "end": 6,
                    "name": "a"
                  },
                  "property": {
                    "type": "BinaryExpression",
                    "start": 7,
                    "end": 13,
                    "left": {
                      "type": "Identifier",
                      "start": 7,
                      "end": 8,
                      "name": "b"
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "start": 12,
                      "end": 13,
                      "name": "c"
                    }
                  },
                  "computed": true
                },
                "right": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 19,
                  "name": "d"
                },
                "body": {
                  "type": "EmptyStatement",
                  "start": 21,
                  "end": 22
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "0;"', () => {
        expect(parseScript('0;', {
            ranges: false,
            raw: true
        })).to.eql({
            "type": "Program",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "void (/test/);"', () => {
        expect(parseScript('void (/test/);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 14,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 14,
                "expression": {
                  "type": "UnaryExpression",
                  "start": 0,
                  "end": 13,
                  "operator": "void",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 6,
                    "end": 12,
                    "value": /test/,
                    "raw": "/test/",
                    "regex": {
                      "pattern": "test",
                      "flags": ""
                    }
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "a = ({__proto__: 1});"', () => {
        expect(parseScript('a = ({__proto__: 1});', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 21,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 21,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 0,
                  "end": 20,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 0,
                    "end": 1,
                    "name": "a"
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 5,
                    "end": 19,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 6,
                        "end": 18,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 6,
                          "end": 15,
                          "name": "__proto__"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 17,
                          "end": 18,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init"
                      }
                    ]
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "{ let a = (1), b = (2), c = (3); }"', () => {
        expect(parseScript('{ let a = (1), b = (2), c = (3); }', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 34,
            "body": [
              {
                "type": "BlockStatement",
                "start": 0,
                "end": 34,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2,
                    "end": 32,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6,
                        "end": 13,
                        "id": {
                          "type": "Identifier",
                          "start": 6,
                          "end": 7,
                          "name": "a"
                        },
                        "init": {
                          "type": "Literal",
                          "start": 11,
                          "end": 12,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "start": 15,
                        "end": 22,
                        "id": {
                          "type": "Identifier",
                          "start": 15,
                          "end": 16,
                          "name": "b"
                        },
                        "init": {
                          "type": "Literal",
                          "start": 20,
                          "end": 21,
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "start": 24,
                        "end": 31,
                        "id": {
                          "type": "Identifier",
                          "start": 24,
                          "end": 25,
                          "name": "c"
                        },
                        "init": {
                          "type": "Literal",
                          "start": 29,
                          "end": 30,
                          "value": 3,
                          "raw": "3"
                        }
                      }
                    ],
                    "kind": "let"
                  }
                ]
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "[a, b] = ([b, a]);"', () => {
        expect(parseScript('[a, b] = ([b, a]);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 18,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 18,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 0,
                  "end": 17,
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "start": 0,
                    "end": 6,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1,
                        "end": 2,
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "start": 4,
                        "end": 5,
                        "name": "b"
                      }
                    ]
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 10,
                    "end": 16,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 11,
                        "end": 12,
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "start": 14,
                        "end": 15,
                        "name": "a"
                      }
                    ]
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "for (var [a, b] in c) ;"', () => {
        expect(parseScript('for (var [a, b] in c) ;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 23,
            "body": [
              {
                "type": "ForInStatement",
                "start": 0,
                "end": 23,
                "left": {
                  "type": "VariableDeclaration",
                  "start": 5,
                  "end": 15,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 9,
                      "end": 15,
                      "id": {
                        "type": "ArrayPattern",
                        "start": 9,
                        "end": 15,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 10,
                            "end": 11,
                            "name": "a"
                          },
                          {
                            "type": "Identifier",
                            "start": 13,
                            "end": 14,
                            "name": "b"
                          }
                        ]
                      },
                      "init": null
                    }
                  ],
                  "kind": "var"
                },
                "right": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 20,
                  "name": "c"
                },
                "body": {
                  "type": "EmptyStatement",
                  "start": 22,
                  "end": 23
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse complex 4"', () => {
        expect(parseScript(`((function () {
            while ((!a) || (!(b()))) {
              c();
            }
          })());`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 104,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 104,
                "expression": {
                  "type": "CallExpression",
                  "start": 1,
                  "end": 102,
                  "callee": {
                    "type": "FunctionExpression",
                    "start": 2,
                    "end": 99,
                    "id": null,
                    "generator": false,
                    "expression": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 14,
                      "end": 99,
                      "body": [
                        {
                          "type": "WhileStatement",
                          "start": 28,
                          "end": 87,
                          "test": {
                            "type": "LogicalExpression",
                            "start": 35,
                            "end": 51,
                            "left": {
                              "type": "UnaryExpression",
                              "start": 36,
                              "end": 38,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "Identifier",
                                "start": 37,
                                "end": 38,
                                "name": "a"
                              }
                            },
                            "operator": "||",
                            "right": {
                              "type": "UnaryExpression",
                              "start": 44,
                              "end": 50,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "CallExpression",
                                "start": 46,
                                "end": 49,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 46,
                                  "end": 47,
                                  "name": "b"
                                },
                                "arguments": []
                              }
                            }
                          },
                          "body": {
                            "type": "BlockStatement",
                            "start": 53,
                            "end": 87,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 69,
                                "end": 73,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 69,
                                  "end": 72,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 69,
                                    "end": 70,
                                    "name": "c"
                                  },
                                  "arguments": []
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "arguments": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "6.02214179e23;"', () => {
        expect(parseScript('6.02214179e23;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 14,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 14,
                "expression": {
                  "type": "Literal",
                  "start": 0,
                  "end": 13,
                  "value": 6.02214179e+23,
                  "raw": "6.02214179e23"
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "var a = ("very cute");"', () => {
        expect(parseScript('var a = ("very cute");', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 22,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 0,
                "end": 22,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 4,
                    "end": 21,
                    "id": {
                      "type": "Identifier",
                      "start": 4,
                      "end": 5,
                      "name": "a"
                    },
                    "init": {
                      "type": "Literal",
                      "start": 9,
                      "end": 20,
                      "value": "very cute",
                      "raw": "\"very cute\""
                    }
                  }
                ],
                "kind": "var"
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "a[b] = b;"', () => {
        expect(parseScript('a[b] = b;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 9,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 9,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 0,
                  "end": 8,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 0,
                    "end": 4,
                    "object": {
                      "type": "Identifier",
                      "start": 0,
                      "end": 1,
                      "name": "a"
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2,
                      "end": 3,
                      "name": "b"
                    },
                    "computed": true
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 7,
                    "end": 8,
                    "name": "b"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse complex 5', () => {
        expect(parseScript(`(Infinity.a)();
        (NaN.a)();`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 34,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 15,
                "expression": {
                  "type": "CallExpression",
                  "start": 0,
                  "end": 14,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1,
                    "end": 11,
                    "object": {
                      "type": "Identifier",
                      "start": 1,
                      "end": 9,
                      "name": "Infinity"
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 10,
                      "end": 11,
                      "name": "a"
                    },
                    "computed": false
                  },
                  "arguments": []
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 24,
                "end": 34,
                "expression": {
                  "type": "CallExpression",
                  "start": 24,
                  "end": 33,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 25,
                    "end": 30,
                    "object": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 28,
                      "name": "NaN"
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 30,
                      "name": "a"
                    },
                    "computed": false
                  },
                  "arguments": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "a = ({});"', () => {
        expect(parseScript('a = ({});', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 9,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 9,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 0,
                  "end": 8,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 0,
                    "end": 1,
                    "name": "a"
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 5,
                    "end": 7,
                    "properties": []
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "for (var a = (1), b = (2);;) ;"', () => {
        expect(parseScript('for (var a = (1), b = (2);;) ;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 30,
            "body": [
              {
                "type": "ForStatement",
                "start": 0,
                "end": 30,
                "init": {
                  "type": "VariableDeclaration",
                  "start": 5,
                  "end": 25,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 9,
                      "end": 16,
                      "id": {
                        "type": "Identifier",
                        "start": 9,
                        "end": 10,
                        "name": "a"
                      },
                      "init": {
                        "type": "Literal",
                        "start": 14,
                        "end": 15,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 18,
                      "end": 25,
                      "id": {
                        "type": "Identifier",
                        "start": 18,
                        "end": 19,
                        "name": "b"
                      },
                      "init": {
                        "type": "Literal",
                        "start": 23,
                        "end": 24,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  ],
                  "kind": "var"
                },
                "test": null,
                "update": null,
                "body": {
                  "type": "EmptyStatement",
                  "start": 29,
                  "end": 30
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "function x(...[a, b]) {}"', () => {
        expect(parseScript('function x(...[a, b]) {}', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "params": [
                        {
                            "type": "RestElement",
                            "argument": {
                                "type": "ArrayPattern",
                                "elements": [
                                    {
                                        "type": "Identifier",
                                        "name": "a",
                                        "start": 15,
                                        "end": 16
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "b",
                                        "start": 18,
                                        "end": 19
                                    }
                                ],
                                "start": 14,
                                "end": 20
                            },
                            "start": 11,
                            "end": 20
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 22,
                        "end": 24
                    },
                    "async": false,
                    "generator": false,
                    "expression": false,
                    "id": {
                        "type": "Identifier",
                        "name": "x",
                        "start": 9,
                        "end": 10
                    },
                    "start": 0,
                    "end": 24
                }
            ],
            "sourceType": "script",
            "start": 0,
            "end": 24
        });
    });

    it('should parse "for (let a in [1, 2]) 3;"', () => {
        expect(parseScript('for (let a in [1, 2]) 3;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 24,
            "body": [
              {
                "type": "ForInStatement",
                "start": 0,
                "end": 24,
                "left": {
                  "type": "VariableDeclaration",
                  "start": 5,
                  "end": 10,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 9,
                      "end": 10,
                      "id": {
                        "type": "Identifier",
                        "start": 9,
                        "end": 10,
                        "name": "a"
                      },
                      "init": null
                    }
                  ],
                  "kind": "let"
                },
                "right": {
                  "type": "ArrayExpression",
                  "start": 14,
                  "end": 20,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 15,
                      "end": 16,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 18,
                      "end": 19,
                      "value": 2,
                      "raw": "2"
                    }
                  ]
                },
                "body": {
                  "type": "ExpressionStatement",
                  "start": 22,
                  "end": 24,
                  "expression": {
                    "type": "Literal",
                    "start": 22,
                    "end": 23,
                    "value": 3,
                    "raw": "3"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "for (let a = (1), b = (2);;) ;"', () => {
        expect(parseScript('for (let a = (1), b = (2);;) ;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 30,
            "body": [
              {
                "type": "ForStatement",
                "start": 0,
                "end": 30,
                "init": {
                  "type": "VariableDeclaration",
                  "start": 5,
                  "end": 25,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 9,
                      "end": 16,
                      "id": {
                        "type": "Identifier",
                        "start": 9,
                        "end": 10,
                        "name": "a"
                      },
                      "init": {
                        "type": "Literal",
                        "start": 14,
                        "end": 15,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 18,
                      "end": 25,
                      "id": {
                        "type": "Identifier",
                        "start": 18,
                        "end": 19,
                        "name": "b"
                      },
                      "init": {
                        "type": "Literal",
                        "start": 23,
                        "end": 24,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  ],
                  "kind": "let"
                },
                "test": null,
                "update": null,
                "body": {
                  "type": "EmptyStatement",
                  "start": 29,
                  "end": 30
                }
              }
            ],
            "sourceType": "script"
          });
    });


    it('should parse "({a: b} = (0));"', () => {
        expect(parseScript('({a: b} = (0));', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 15,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 15,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1,
                  "end": 13,
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "start": 1,
                    "end": 7,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2,
                        "end": 6,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2,
                          "end": 3,
                          "name": "a"
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 5,
                          "end": 6,
                          "name": "b"
                        },
                        "kind": "init"
                      }
                    ]
                  },
                  "right": {
                    "type": "Literal",
                    "start": 11,
                    "end": 12,
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse complex 6"', () => {
        expect(parseScript(`((function () {
            var a = (1);
            arguments[2] = (3);
            ((function () {
              eval("");
            })());
          })());`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 160,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 160,
                "expression": {
                  "type": "CallExpression",
                  "start": 1,
                  "end": 158,
                  "callee": {
                    "type": "FunctionExpression",
                    "start": 2,
                    "end": 155,
                    "id": null,
                    "generator": false,
                    "expression": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 14,
                      "end": 155,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 28,
                          "end": 40,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 32,
                              "end": 39,
                              "id": {
                                "type": "Identifier",
                                "start": 32,
                                "end": 33,
                                "name": "a"
                              },
                              "init": {
                                "type": "Literal",
                                "start": 37,
                                "end": 38,
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          ],
                          "kind": "var"
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 53,
                          "end": 72,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 53,
                            "end": 71,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 53,
                              "end": 65,
                              "object": {
                                "type": "Identifier",
                                "start": 53,
                                "end": 62,
                                "name": "arguments"
                              },
                              "property": {
                                "type": "Literal",
                                "start": 63,
                                "end": 64,
                                "value": 2,
                                "raw": "2"
                              },
                              "computed": true
                            },
                            "right": {
                              "type": "Literal",
                              "start": 69,
                              "end": 70,
                              "value": 3,
                              "raw": "3"
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 85,
                          "end": 143,
                          "expression": {
                            "type": "CallExpression",
                            "start": 86,
                            "end": 141,
                            "callee": {
                              "type": "FunctionExpression",
                              "start": 87,
                              "end": 138,
                              "id": null,
                              "generator": false,
                              "expression": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 99,
                                "end": 138,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 115,
                                    "end": 124,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 115,
                                      "end": 123,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 115,
                                        "end": 119,
                                        "name": "eval"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "start": 120,
                                          "end": 122,
                                          "value": "",
                                          "raw": "\"\""
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            "arguments": []
                          }
                        }
                      ]
                    }
                  },
                  "arguments": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "delete (/test/);"', () => {
        expect(parseScript('delete (/test/);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 16,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 16,
                "expression": {
                  "type": "UnaryExpression",
                  "start": 0,
                  "end": 15,
                  "operator": "delete",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 8,
                    "end": 14,
                    "value": /test/,
                    "raw": "/test/",
                    "regex": {
                      "pattern": "test",
                      "flags": ""
                    }
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "let.let;"', () => {
        expect(parseScript('let.let;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 8,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 8,
                "expression": {
                  "type": "MemberExpression",
                  "start": 0,
                  "end": 7,
                  "object": {
                    "type": "Identifier",
                    "start": 0,
                    "end": 3,
                    "name": "let"
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4,
                    "end": 7,
                    "name": "let"
                  },
                  "computed": false
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "(function x({a: {w, x}, b: [y, z]}, ...[a, b, c]) {});"', () => {
        expect(parseScript('(function x({a: {w, x}, b: [y, z]}, ...[a, b, c]) {});', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "body": [
                {
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "params": [
                            {
                                "type": "ObjectPattern",
                                "properties": [
                                    {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "a",
                                            "start": 13,
                                            "end": 14
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "ObjectPattern",
                                            "properties": [
                                                {
                                                    "type": "Property",
                                                    "kind": "init",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "w",
                                                        "start": 17,
                                                        "end": 18
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "Identifier",
                                                        "name": "w",
                                                        "start": 17,
                                                        "end": 18
                                                    },
                                                    "method": false,
                                                    "shorthand": true,
                                                    "start": 17,
                                                    "end": 18
                                                },
                                                {
                                                    "type": "Property",
                                                    "kind": "init",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "x",
                                                        "start": 20,
                                                        "end": 21
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "Identifier",
                                                        "name": "x",
                                                        "start": 20,
                                                        "end": 21
                                                    },
                                                    "method": false,
                                                    "shorthand": true,
                                                    "start": 20,
                                                    "end": 21
                                                }
                                            ],
                                            "start": 16,
                                            "end": 22
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "start": 13,
                                        "end": 22
                                    },
                                    {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "b",
                                            "start": 24,
                                            "end": 25
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "ArrayPattern",
                                            "elements": [
                                                {
                                                    "type": "Identifier",
                                                    "name": "y",
                                                    "start": 28,
                                                    "end": 29
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "z",
                                                    "start": 31,
                                                    "end": 32
                                                }
                                            ],
                                            "start": 27,
                                            "end": 33
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "start": 24,
                                        "end": 33
                                    }
                                ],
                                "start": 12,
                                "end": 34
                            },
                            {
                                "type": "RestElement",
                                "argument": {
                                    "type": "ArrayPattern",
                                    "elements": [
                                        {
                                            "type": "Identifier",
                                            "name": "a",
                                            "start": 40,
                                            "end": 41
                                        },
                                        {
                                            "type": "Identifier",
                                            "name": "b",
                                            "start": 43,
                                            "end": 44
                                        },
                                        {
                                            "type": "Identifier",
                                            "name": "c",
                                            "start": 46,
                                            "end": 47
                                        }
                                    ],
                                    "start": 39,
                                    "end": 48
                                },
                                "start": 36,
                                "end": 48
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 50,
                            "end": 52
                        },
                        "async": false,
                        "generator": false,
                        "expression": false,
                        "id": {
                            "type": "Identifier",
                            "name": "x",
                            "start": 10,
                            "end": 11
                        },
                        "start": 1,
                        "end": 52
                    },
                    "start": 0,
                    "end": 54
                }
            ],
            "sourceType": "script",
            "start": 0,
            "end": 54
        });
    });

    it('should parse "a(b(c, c), d(c, c), e(c, c));"', () => {
        expect(parseScript('a(b(c, c), d(c, c), e(c, c));', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 29,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 29,
                "expression": {
                  "type": "CallExpression",
                  "start": 0,
                  "end": 28,
                  "callee": {
                    "type": "Identifier",
                    "start": 0,
                    "end": 1,
                    "name": "a"
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 2,
                      "end": 9,
                      "callee": {
                        "type": "Identifier",
                        "start": 2,
                        "end": 3,
                        "name": "b"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 4,
                          "end": 5,
                          "name": "c"
                        },
                        {
                          "type": "Identifier",
                          "start": 7,
                          "end": 8,
                          "name": "c"
                        }
                      ]
                    },
                    {
                      "type": "CallExpression",
                      "start": 11,
                      "end": 18,
                      "callee": {
                        "type": "Identifier",
                        "start": 11,
                        "end": 12,
                        "name": "d"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 13,
                          "end": 14,
                          "name": "c"
                        },
                        {
                          "type": "Identifier",
                          "start": 16,
                          "end": 17,
                          "name": "c"
                        }
                      ]
                    },
                    {
                      "type": "CallExpression",
                      "start": 20,
                      "end": 27,
                      "callee": {
                        "type": "Identifier",
                        "start": 20,
                        "end": 21,
                        "name": "e"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 22,
                          "end": 23,
                          "name": "c"
                        },
                        {
                          "type": "Identifier",
                          "start": 25,
                          "end": 26,
                          "name": "c"
                        }
                      ]
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse complex 7', () => {
        expect(parseScript(`throw "a";
        b();`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 23,
            "body": [
              {
                "type": "ThrowStatement",
                "start": 0,
                "end": 10,
                "argument": {
                  "type": "Literal",
                  "start": 6,
                  "end": 9,
                  "value": "a",
                  "raw": "\"a\""
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 19,
                "end": 23,
                "expression": {
                  "type": "CallExpression",
                  "start": 19,
                  "end": 22,
                  "callee": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 20,
                    "name": "b"
                  },
                  "arguments": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "({a}) => (1);"', () => {
        expect(parseScript('({a}) => (1);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 13,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 13,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 0,
                  "end": 12,
                  "id": null,
                  "generator": false,
                  "expression": true,
                  "async": false,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 1,
                      "end": 4,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2,
                          "end": 3,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2,
                            "end": 3,
                            "name": "a"
                          },
                          "kind": "init",
                          "value": {
                            "type": "Identifier",
                            "start": 2,
                            "end": 3,
                            "name": "a"
                          }
                        }
                      ]
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 10,
                    "end": 11,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "for (const a of b) c(a);"', () => {
        expect(parseScript('for (const a of b) c(a);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 24,
            "body": [
              {
                "type": "ForOfStatement",
                "await": false,
                "start": 0,
                "end": 24,
                "left": {
                  "type": "VariableDeclaration",
                  "start": 5,
                  "end": 12,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 11,
                      "end": 12,
                      "id": {
                        "type": "Identifier",
                        "start": 11,
                        "end": 12,
                        "name": "a"
                      },
                      "init": null
                    }
                  ],
                  "kind": "const"
                },
                "right": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "name": "b"
                },
                "body": {
                  "type": "ExpressionStatement",
                  "start": 19,
                  "end": 24,
                  "expression": {
                    "type": "CallExpression",
                    "start": 19,
                    "end": 23,
                    "callee": {
                      "type": "Identifier",
                      "start": 19,
                      "end": 20,
                      "name": "c"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 21,
                        "end": 22,
                        "name": "a"
                      }
                    ]
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "a ^= (1);"', () => {
        expect(parseScript('a ^= (1);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 9,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 9,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 0,
                  "end": 8,
                  "operator": "^=",
                  "left": {
                    "type": "Identifier",
                    "start": 0,
                    "end": 1,
                    "name": "a"
                  },
                  "right": {
                    "type": "Literal",
                    "start": 6,
                    "end": 7,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "({a, b} = (1));"', () => {
        expect(parseScript('({a, b} = (1));', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 15,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 15,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1,
                  "end": 13,
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "start": 1,
                    "end": 7,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2,
                        "end": 3,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2,
                          "end": 3,
                          "name": "a"
                        },
                        "kind": "init",
                        "value": {
                          "type": "Identifier",
                          "start": 2,
                          "end": 3,
                          "name": "a"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 5,
                        "end": 6,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 5,
                          "end": 6,
                          "name": "b"
                        },
                        "kind": "init",
                        "value": {
                          "type": "Identifier",
                          "start": 5,
                          "end": 6,
                          "name": "b"
                        }
                      }
                    ]
                  },
                  "right": {
                    "type": "Literal",
                    "start": 11,
                    "end": 12,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "for (;;) if (a()) b(); else break;"', () => {
        expect(parseScript('for (;;) if (a()) b(); else break;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "body": [
                {
                    "type": "ForStatement",
                    "body": {
                        "type": "IfStatement",
                        "test": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                                "type": "Identifier",
                                "name": "a",
                                "start": 13,
                                "end": 14
                            },
                            "start": 13,
                            "end": 16
                        },
                        "alternate": {
                            "type": "BreakStatement",
                            "label": null,
                            "start": 28,
                            "end": 34
                        },
                        "consequent": {
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "CallExpression",
                                "arguments": [],
                                "callee": {
                                    "type": "Identifier",
                                    "name": "b",
                                    "start": 18,
                                    "end": 19
                                },
                                "start": 18,
                                "end": 21
                            },
                            "start": 18,
                            "end": 22
                        },
                        "start": 9,
                        "end": 34
                    },
                    "init": null,
                    "test": null,
                    "update": null,
                    "start": 0,
                    "end": 34
                }
            ],
            "sourceType": "script",
            "start": 0,
            "end": 34
        });
    });

    it('should parse "(function a([b, c]) {});"', () => {
        expect(parseScript('(function a([b, c]) {});', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 24,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 24,
                "expression": {
                  "type": "FunctionExpression",
                  "start": 1,
                  "end": 22,
                  "id": {
                    "type": "Identifier",
                    "start": 10,
                    "end": 11,
                    "name": "a"
                  },
                  "generator": false,
                  "expression": false,
                  "async": false,
                  "params": [
                    {
                      "type": "ArrayPattern",
                      "start": 12,
                      "end": 18,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 13,
                          "end": 14,
                          "name": "b"
                        },
                        {
                          "type": "Identifier",
                          "start": 16,
                          "end": 17,
                          "name": "c"
                        }
                      ]
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 20,
                    "end": 22,
                    "body": []
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "function a([b, c]) {}"', () => {
        expect(parseScript('function a([b, c]) {}', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 21,
            "body": [
              {
                "type": "FunctionDeclaration",
                "start": 0,
                "end": 21,
                "id": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 10,
                  "name": "a"
                },
                "generator": false,
                "expression": false,
                "async": false,
                "params": [
                  {
                    "type": "ArrayPattern",
                    "start": 11,
                    "end": 17,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 12,
                        "end": 13,
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "start": 15,
                        "end": 16,
                        "name": "c"
                      }
                    ]
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 19,
                  "end": 21,
                  "body": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "(a | b) | c;"', () => {
        expect(parseScript('(a | b) | c;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 12,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 12,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 0,
                  "end": 11,
                  "left": {
                    "type": "BinaryExpression",
                    "start": 1,
                    "end": 6,
                    "left": {
                      "type": "Identifier",
                      "start": 1,
                      "end": 2,
                      "name": "a"
                    },
                    "operator": "|",
                    "right": {
                      "type": "Identifier",
                      "start": 5,
                      "end": 6,
                      "name": "b"
                    }
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "start": 10,
                    "end": 11,
                    "name": "c"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "var [{__proto__: a, __proto__: b}] = (1);"', () => {
        expect(parseScript('var [{__proto__: a, __proto__: b}] = (1);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "body": [
                {
                    "type": "VariableDeclaration",
                    "declarations": [
                        {
                            "type": "VariableDeclarator",
                            "init": {
                                "type": "Literal",
                                "value": 1,
                                "start": 38,
                                "end": 39,
                                "raw": "1"
                            },
                            "id": {
                                "type": "ArrayPattern",
                                "elements": [
                                    {
                                        "type": "ObjectPattern",
                                        "properties": [
                                            {
                                                "type": "Property",
                                                "kind": "init",
                                                "key": {
                                                    "type": "Identifier",
                                                    "name": "__proto__",
                                                    "start": 6,
                                                    "end": 15
                                                },
                                                "computed": false,
                                                "value": {
                                                    "type": "Identifier",
                                                    "name": "a",
                                                    "start": 17,
                                                    "end": 18
                                                },
                                                "method": false,
                                                "shorthand": false,
                                                "start": 6,
                                                "end": 18
                                            },
                                            {
                                                "type": "Property",
                                                "kind": "init",
                                                "key": {
                                                    "type": "Identifier",
                                                    "name": "__proto__",
                                                    "start": 20,
                                                    "end": 29
                                                },
                                                "computed": false,
                                                "value": {
                                                    "type": "Identifier",
                                                    "name": "b",
                                                    "start": 31,
                                                    "end": 32
                                                },
                                                "method": false,
                                                "shorthand": false,
                                                "start": 20,
                                                "end": 32
                                            }
                                        ],
                                        "start": 5,
                                        "end": 33
                                    }
                                ],
                                "start": 4,
                                "end": 34
                            },
                            "start": 4,
                            "end": 40
                        }
                    ],
                    "kind": "var",
                    "start": 0,
                    "end": 41
                }
            ],
            "sourceType": "script",
            "start": 0,
            "end": 41
        });
    });

    it('should parse complex 8"', () => {
        expect(parseScript(`(function* () {
            yield (yield (1));
          });`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 60,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 60,
                "expression": {
                  "type": "FunctionExpression",
                  "start": 1,
                  "end": 58,
                  "id": null,
                  "generator": true,
                  "expression": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 14,
                    "end": 58,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 28,
                        "end": 46,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 28,
                          "end": 45,
                          "delegate": false,
                          "argument": {
                            "type": "YieldExpression",
                            "start": 35,
                            "end": 44,
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "start": 42,
                              "end": 43,
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });


    it('should parse "let {} = (1);"', () => {
        expect(parseScript('let {} = (1);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 13,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 0,
                "end": 13,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 4,
                    "end": 12,
                    "id": {
                      "type": "ObjectPattern",
                      "start": 4,
                      "end": 6,
                      "properties": []
                    },
                    "init": {
                      "type": "Literal",
                      "start": 10,
                      "end": 11,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ],
                "kind": "let"
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse complex 9', () => {
        expect(parseScript(`((function () {
            var a = ({b: 1});
          })());`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 62,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 62,
                "expression": {
                  "type": "CallExpression",
                  "start": 1,
                  "end": 60,
                  "callee": {
                    "type": "FunctionExpression",
                    "start": 2,
                    "end": 57,
                    "id": null,
                    "generator": false,
                    "expression": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 14,
                      "end": 57,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 28,
                          "end": 45,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 32,
                              "end": 44,
                              "id": {
                                "type": "Identifier",
                                "start": 32,
                                "end": 33,
                                "name": "a"
                              },
                              "init": {
                                "type": "ObjectExpression",
                                "start": 37,
                                "end": 43,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 38,
                                    "end": 42,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 38,
                                      "end": 39,
                                      "name": "b"
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 41,
                                      "end": 42,
                                      "value": 1,
                                      "raw": "1"
                                    },
                                    "kind": "init"
                                  }
                                ]
                              }
                            }
                          ],
                          "kind": "var"
                        }
                      ]
                    }
                  },
                  "arguments": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "!(/test/);"', () => {
        expect(parseScript('!(/test/);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 10,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 10,
                "expression": {
                  "type": "UnaryExpression",
                  "start": 0,
                  "end": 9,
                  "operator": "!",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 2,
                    "end": 8,
                    "value": /test/,
                    "raw": "/test/",
                    "regex": {
                      "pattern": "test",
                      "flags": ""
                    }
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "({a = 1} = (2));"', () => {
        expect(parseScript('({a = 1} = (2));', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 16,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 16,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1,
                  "end": 14,
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "start": 1,
                    "end": 8,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2,
                        "end": 7,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2,
                          "end": 3,
                          "name": "a"
                        },
                        "kind": "init",
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 2,
                          "end": 7,
                          "left": {
                            "type": "Identifier",
                            "start": 2,
                            "end": 3,
                            "name": "a"
                          },
                          "right": {
                            "type": "Literal",
                            "start": 6,
                            "end": 7,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      }
                    ]
                  },
                  "right": {
                    "type": "Literal",
                    "start": 12,
                    "end": 13,
                    "value": 2,
                    "raw": "2"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "(1) + (((a()), (b())), (c()));"', () => {
        expect(parseScript('(1) + (((a()), (b())), (c()));', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 30,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 30,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 0,
                  "end": 29,
                  "left": {
                    "type": "Literal",
                    "start": 1,
                    "end": 2,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "+",
                  "right": {
                    "type": "SequenceExpression",
                    "start": 7,
                    "end": 28,
                    "expressions": [
                      {
                        "type": "SequenceExpression",
                        "start": 8,
                        "end": 20,
                        "expressions": [
                          {
                            "type": "CallExpression",
                            "start": 9,
                            "end": 12,
                            "callee": {
                              "type": "Identifier",
                              "start": 9,
                              "end": 10,
                              "name": "a"
                            },
                            "arguments": []
                          },
                          {
                            "type": "CallExpression",
                            "start": 16,
                            "end": 19,
                            "callee": {
                              "type": "Identifier",
                              "start": 16,
                              "end": 17,
                              "name": "b"
                            },
                            "arguments": []
                          }
                        ]
                      },
                      {
                        "type": "CallExpression",
                        "start": 24,
                        "end": 27,
                        "callee": {
                          "type": "Identifier",
                          "start": 24,
                          "end": 25,
                          "name": "c"
                        },
                        "arguments": []
                      }
                    ]
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "(class {get a() {}})"', () => {
        expect(parseScript('for([a,b[a],{c,d=e,[f]:[g,h().a,(1).i,...j[2]]}] in 3);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "body": [
                {
                    "type": "ForInStatement",
                    "body": {
                        "type": "EmptyStatement",
                        "start": 54,
                        "end": 55
                    },
                    "left": {
                        "type": "ArrayPattern",
                        "elements": [
                            {
                                "type": "Identifier",
                                "name": "a",
                                "start": 5,
                                "end": 6
                            },
                            {
                                "type": "MemberExpression",
                                "object": {
                                    "type": "Identifier",
                                    "name": "b",
                                    "start": 7,
                                    "end": 8
                                },
                                "computed": true,
                                "property": {
                                    "type": "Identifier",
                                    "name": "a",
                                    "start": 9,
                                    "end": 10
                                },
                                "start": 7,
                                "end": 11
                            },
                            {
                                "type": "ObjectPattern",
                                "properties": [
                                    {
                                        "type": "Property",
                                        "computed": false,
                                        "key": {
                                            "type": "Identifier",
                                            "name": "c",
                                            "start": 13,
                                            "end": 14
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": true,
                                        "value": {
                                            "type": "Identifier",
                                            "name": "c",
                                            "start": 13,
                                            "end": 14
                                        },
                                        "start": 13,
                                        "end": 14
                                    },
                                    {
                                        "type": "Property",
                                        "computed": false,
                                        "key": {
                                            "type": "Identifier",
                                            "name": "d",
                                            "start": 15,
                                            "end": 16
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": true,
                                        "value": {
                                            "type": "AssignmentPattern",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "d",
                                                "start": 15,
                                                "end": 16
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "e",
                                                "start": 17,
                                                "end": 18
                                            },
                                            "start": 15,
                                            "end": 18
                                        },
                                        "start": 15,
                                        "end": 18
                                    },
                                    {
                                        "type": "Property",
                                        "computed": true,
                                        "key": {
                                            "type": "Identifier",
                                            "name": "f",
                                            "start": 20,
                                            "end": 21
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": false,
                                        "value": {
                                            "type": "ArrayPattern",
                                            "elements": [
                                                {
                                                    "type": "Identifier",
                                                    "name": "g",
                                                    "start": 24,
                                                    "end": 25
                                                },
                                                {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                        "type": "CallExpression",
                                                        "arguments": [],
                                                        "callee": {
                                                            "type": "Identifier",
                                                            "name": "h",
                                                            "start": 26,
                                                            "end": 27
                                                        },
                                                        "start": 26,
                                                        "end": 29
                                                    },
                                                    "computed": false,
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "a",
                                                        "start": 30,
                                                        "end": 31
                                                    },
                                                    "start": 26,
                                                    "end": 31
                                                },
                                                {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                        "type": "Literal",
                                                        "value": 1,
                                                        "start": 33,
                                                        "end": 34,
                                                        "raw": "1"
                                                    },
                                                    "computed": false,
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "i",
                                                        "start": 36,
                                                        "end": 37
                                                    },
                                                    "start": 32,
                                                    "end": 37
                                                },
                                                {
                                                    "type": "RestElement",
                                                    "argument": {
                                                        "type": "MemberExpression",
                                                        "object": {
                                                            "type": "Identifier",
                                                            "name": "j",
                                                            "start": 41,
                                                            "end": 42
                                                        },
                                                        "computed": true,
                                                        "property": {
                                                            "type": "Literal",
                                                            "value": 2,
                                                            "start": 43,
                                                            "end": 44,
                                                            "raw": "2"
                                                        },
                                                        "start": 41,
                                                        "end": 45
                                                    },
                                                    "start": 38,
                                                    "end": 45
                                                }
                                            ],
                                            "start": 23,
                                            "end": 46
                                        },
                                        "start": 19,
                                        "end": 46
                                    }
                                ],
                                "start": 12,
                                "end": 47
                            }
                        ],
                        "start": 4,
                        "end": 48
                    },
                    "right": {
                        "type": "Literal",
                        "value": 3,
                        "start": 52,
                        "end": 53,
                        "raw": "3"
                    },
                    "start": 0,
                    "end": 55
                }
            ],
            "sourceType": "script",
            "start": 0,
            "end": 55
        });
    });

    it('should parse complex test', () => {
        expect(parseScript(`a.b('c').
        d('e',
            /*@ngInject*/
            function(f) {
                return f;
            }).
        g('h',
            /*@ngInject*/
            function(i) {
                return i;
            })`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 226,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 226,
                "expression": {
                  "type": "CallExpression",
                  "start": 0,
                  "end": 226,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 0,
                    "end": 128,
                    "object": {
                      "type": "CallExpression",
                      "start": 0,
                      "end": 117,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 0,
                        "end": 19,
                        "object": {
                          "type": "CallExpression",
                          "start": 0,
                          "end": 8,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 0,
                            "end": 3,
                            "object": {
                              "type": "Identifier",
                              "start": 0,
                              "end": 1,
                              "name": "a"
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2,
                              "end": 3,
                              "name": "b"
                            },
                            "computed": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 4,
                              "end": 7,
                              "value": "c",
                              "raw": "'c'"
                            }
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 18,
                          "end": 19,
                          "name": "d"
                        },
                        "computed": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 20,
                          "end": 23,
                          "value": "e",
                          "raw": "'e'"
                        },
                        {
                          "type": "FunctionExpression",
                          "start": 63,
                          "end": 116,
                          "id": null,
                          "generator": false,
                          "expression": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 72,
                              "end": 73,
                              "name": "f"
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 75,
                            "end": 116,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 93,
                                "end": 102,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 100,
                                  "end": 101,
                                  "name": "f"
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "name": "g"
                    },
                    "computed": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 129,
                      "end": 132,
                      "value": "h",
                      "raw": "'h'"
                    },
                    {
                      "type": "FunctionExpression",
                      "start": 172,
                      "end": 225,
                      "id": null,
                      "generator": false,
                      "expression": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 181,
                          "end": 182,
                          "name": "i"
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 184,
                        "end": 225,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 202,
                            "end": 211,
                            "argument": {
                              "type": "Identifier",
                              "start": 209,
                              "end": 210,
                              "name": "i"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "a >>= 1"', () => {
        expect(parseScript('a >>= 1', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 7,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 7,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 0,
                  "end": 7,
                  "operator": ">>=",
                  "left": {
                    "type": "Identifier",
                    "start": 0,
                    "end": 1,
                    "name": "a"
                  },
                  "right": {
                    "type": "Literal",
                    "start": 6,
                    "end": 7,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "({ get: 1 })"', () => {
        expect(parseScript('({ get: 1 })', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 12,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 12,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 1,
                  "end": 11,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3,
                      "end": 9,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3,
                        "end": 6,
                        "name": "get"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 8,
                        "end": 9,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init"
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "a = (b, c)"', () => {
        expect(parseScript('a = (b, c)', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 10,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 10,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 0,
                  "end": 10,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 0,
                    "end": 1,
                    "name": "a"
                  },
                  "right": {
                    "type": "SequenceExpression",
                    "start": 5,
                    "end": 9,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 5,
                        "end": 6,
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "start": 8,
                        "end": 9,
                        "name": "c"
                      }
                    ]
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "function *a(){yield ++a;}', () => {
        expect(parseScript('function *a(){yield ++a;}', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 25,
            "body": [
              {
                "type": "FunctionDeclaration",
                "start": 0,
                "end": 25,
                "id": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "name": "a"
                },
                "generator": true,
                "expression": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 13,
                  "end": 25,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 14,
                      "end": 24,
                      "expression": {
                        "type": "YieldExpression",
                        "start": 14,
                        "end": 23,
                        "delegate": false,
                        "argument": {
                          "type": "UpdateExpression",
                          "start": 20,
                          "end": 23,
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 22,
                            "end": 23,
                            "name": "a"
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "function eval() { function a() { "use strict" } }"', () => {
        expect(parseScript('function eval() { function a() { "use strict" } }', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 49,
            "body": [
              {
                "type": "FunctionDeclaration",
                "start": 0,
                "end": 49,
                "id": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 13,
                  "name": "eval"
                },
                "generator": false,
                "expression": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 16,
                  "end": 49,
                  "body": [
                    {
                      "type": "FunctionDeclaration",
                      "start": 18,
                      "end": 47,
                      "id": {
                        "type": "Identifier",
                        "start": 27,
                        "end": 28,
                        "name": "a"
                      },
                      "generator": false,
                      "expression": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 31,
                        "end": 47,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 33,
                            "end": 45,
                            "expression": {
                              "type": "Literal",
                              "start": 33,
                              "end": 45,
                              "value": "use strict",
                              "raw": "\"use strict\""
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "function* a(){yield}"', () => {
        expect(parseScript('function* a(){yield}', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 20,
            "body": [
              {
                "type": "FunctionDeclaration",
                "start": 0,
                "end": 20,
                "id": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "name": "a"
                },
                "generator": true,
                "expression": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 13,
                  "end": 20,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 14,
                      "end": 19,
                      "expression": {
                        "type": "YieldExpression",
                        "start": 14,
                        "end": 19,
                        "delegate": false,
                        "argument": null
                      }
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "(function () { }(1,2,3))', () => {
        expect(parseScript(`(function () {
        }(1,2,3))`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 32,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 32,
                "expression": {
                  "type": "CallExpression",
                  "start": 1,
                  "end": 31,
                  "callee": {
                    "type": "FunctionExpression",
                    "start": 1,
                    "end": 24,
                    "id": null,
                    "generator": false,
                    "expression": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 13,
                      "end": 24,
                      "body": []
                    }
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 25,
                      "end": 26,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 27,
                      "end": 28,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 29,
                      "end": 30,
                      "value": 3,
                      "raw": "3"
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "function a({ b, c }){}"', () => {
        expect(parseScript('function a({ b, c }){}', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 22,
            "body": [
              {
                "type": "FunctionDeclaration",
                "start": 0,
                "end": 22,
                "id": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 10,
                  "name": "a"
                },
                "generator": false,
                "expression": false,
                "async": false,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 11,
                    "end": 19,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 13,
                        "end": 14,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 13,
                          "end": 14,
                          "name": "b"
                        },
                        "kind": "init",
                        "value": {
                          "type": "Identifier",
                          "start": 13,
                          "end": 14,
                          "name": "b"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 16,
                        "end": 17,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 16,
                          "end": 17,
                          "name": "c"
                        },
                        "kind": "init",
                        "value": {
                          "type": "Identifier",
                          "start": 16,
                          "end": 17,
                          "name": "c"
                        }
                      }
                    ]
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 20,
                  "end": 22,
                  "body": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "let {a,b=1,c:d,e:f=2,[g]:[h]}=3"', () => {
        expect(parseScript(`var a, b;
        if (a && !(a + "1") && b) { // 1
            var c;
            d();
        } else {
            e();
        }
        
        if (a || !!(a + "1") || b) { // 2
            d();
        } else {
            var f;
            e();
        }`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 261,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 0,
                "end": 9,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 4,
                    "end": 5,
                    "id": {
                      "type": "Identifier",
                      "start": 4,
                      "end": 5,
                      "name": "a"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "start": 7,
                    "end": 8,
                    "id": {
                      "type": "Identifier",
                      "start": 7,
                      "end": 8,
                      "name": "b"
                    },
                    "init": null
                  }
                ],
                "kind": "var"
              },
              {
                "type": "IfStatement",
                "start": 18,
                "end": 130,
                "test": {
                  "type": "LogicalExpression",
                  "start": 22,
                  "end": 42,
                  "left": {
                    "type": "LogicalExpression",
                    "start": 22,
                    "end": 37,
                    "left": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 23,
                      "name": "a"
                    },
                    "operator": "&&",
                    "right": {
                      "type": "UnaryExpression",
                      "start": 27,
                      "end": 37,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 29,
                        "end": 36,
                        "left": {
                          "type": "Identifier",
                          "start": 29,
                          "end": 30,
                          "name": "a"
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 33,
                          "end": 36,
                          "value": "1",
                          "raw": "\"1\""
                        }
                      }
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "name": "b"
                  }
                },
                "consequent": {
                  "type": "BlockStatement",
                  "start": 44,
                  "end": 96,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 63,
                      "end": 69,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 67,
                          "end": 68,
                          "id": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 68,
                            "name": "c"
                          },
                          "init": null
                        }
                      ],
                      "kind": "var"
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 82,
                      "end": 86,
                      "expression": {
                        "type": "CallExpression",
                        "start": 82,
                        "end": 85,
                        "callee": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 83,
                          "name": "d"
                        },
                        "arguments": []
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "BlockStatement",
                  "start": 102,
                  "end": 130,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 116,
                      "end": 120,
                      "expression": {
                        "type": "CallExpression",
                        "start": 116,
                        "end": 119,
                        "callee": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 117,
                          "name": "e"
                        },
                        "arguments": []
                      }
                    }
                  ]
                }
              },
              {
                "type": "IfStatement",
                "start": 148,
                "end": 261,
                "test": {
                  "type": "LogicalExpression",
                  "start": 152,
                  "end": 173,
                  "left": {
                    "type": "LogicalExpression",
                    "start": 152,
                    "end": 168,
                    "left": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 153,
                      "name": "a"
                    },
                    "operator": "||",
                    "right": {
                      "type": "UnaryExpression",
                      "start": 157,
                      "end": 168,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "UnaryExpression",
                        "start": 158,
                        "end": 168,
                        "operator": "!",
                        "prefix": true,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 160,
                          "end": 167,
                          "left": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 161,
                            "name": "a"
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 164,
                            "end": 167,
                            "value": "1",
                            "raw": "\"1\""
                          }
                        }
                      }
                    }
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "name": "b"
                  }
                },
                "consequent": {
                  "type": "BlockStatement",
                  "start": 175,
                  "end": 208,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 194,
                      "end": 198,
                      "expression": {
                        "type": "CallExpression",
                        "start": 194,
                        "end": 197,
                        "callee": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 195,
                          "name": "d"
                        },
                        "arguments": []
                      }
                    }
                  ]
                },
                "alternate": {
                  "type": "BlockStatement",
                  "start": 214,
                  "end": 261,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 228,
                      "end": 234,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 232,
                          "end": 233,
                          "id": {
                            "type": "Identifier",
                            "start": 232,
                            "end": 233,
                            "name": "f"
                          },
                          "init": null
                        }
                      ],
                      "kind": "var"
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 247,
                      "end": 251,
                      "expression": {
                        "type": "CallExpression",
                        "start": 247,
                        "end": 250,
                        "callee": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 248,
                          "name": "e"
                        },
                        "arguments": []
                      }
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });


    it('should parse "function a() { /* infinite */ while (true) { } /* bar */ var b; }"', () => {
        expect(parseScript('function a() { /* infinite */ while (true) { } /* bar */ var b; }', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 65,
            "body": [
              {
                "type": "FunctionDeclaration",
                "start": 0,
                "end": 65,
                "id": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 10,
                  "name": "a"
                },
                "generator": false,
                "expression": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 13,
                  "end": 65,
                  "body": [
                    {
                      "type": "WhileStatement",
                      "start": 30,
                      "end": 46,
                      "test": {
                        "type": "Literal",
                        "start": 37,
                        "end": 41,
                        "value": true,
                        "raw": "true"
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 43,
                        "end": 46,
                        "body": []
                      }
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 57,
                      "end": 63,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 61,
                          "end": 62,
                          "id": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 62,
                            "name": "b"
                          },
                          "init": null
                        }
                      ],
                      "kind": "var"
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });


    it('should parse "- (1 - 2 - 3)"', () => {
        expect(parseScript('- (1 - 2 - 3)', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 13,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 13,
                "expression": {
                  "type": "UnaryExpression",
                  "start": 0,
                  "end": 13,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 3,
                    "end": 12,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 3,
                      "end": 8,
                      "left": {
                        "type": "Literal",
                        "start": 3,
                        "end": 4,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "-",
                      "right": {
                        "type": "Literal",
                        "start": 7,
                        "end": 8,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "operator": "-",
                    "right": {
                      "type": "Literal",
                      "start": 11,
                      "end": 12,
                      "value": 3,
                      "raw": "3"
                    }
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "[] = 1""', () => {
        expect(parseScript('[] = 1', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 6,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 6,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 0,
                  "end": 6,
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "start": 0,
                    "end": 2,
                    "elements": []
                  },
                  "right": {
                    "type": "Literal",
                    "start": 5,
                    "end": 6,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "for (var [a, b] in c);"', () => {
        expect(parseScript('for (var [a, b] in c);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 22,
            "body": [
              {
                "type": "ForInStatement",
                "start": 0,
                "end": 22,
                "left": {
                  "type": "VariableDeclaration",
                  "start": 5,
                  "end": 15,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 9,
                      "end": 15,
                      "id": {
                        "type": "ArrayPattern",
                        "start": 9,
                        "end": 15,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 10,
                            "end": 11,
                            "name": "a"
                          },
                          {
                            "type": "Identifier",
                            "start": 13,
                            "end": 14,
                            "name": "b"
                          }
                        ]
                      },
                      "init": null
                    }
                  ],
                  "kind": "var"
                },
                "right": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 20,
                  "name": "c"
                },
                "body": {
                  "type": "EmptyStatement",
                  "start": 21,
                  "end": 22
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "price_9̶9̶_89"', () => {
        expect(parseScript('price_9̶9̶_89', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 13,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 13,
                "expression": {
                  "type": "Identifier",
                  "start": 0,
                  "end": 13,
                  "name": "price_9̶9̶_89"
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "({ yield() {} })"', () => {
        expect(parseScript('({ yield() {} })', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 16,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 16,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 1,
                  "end": 15,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3,
                      "end": 13,
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3,
                        "end": 8,
                        "name": "yield"
                      },
                      "kind": "init",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8,
                        "end": 13,
                        "id": null,
                        "generator": false,
                        "expression": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 11,
                          "end": 13,
                          "body": []
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "({a:yield} = 1);"', () => {
        expect(parseScript('({a:yield} = 1);', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 16,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 16,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1,
                  "end": 14,
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "start": 1,
                    "end": 10,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2,
                        "end": 9,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2,
                          "end": 3,
                          "name": "a"
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 4,
                          "end": 9,
                          "name": "yield"
                        },
                        "kind": "init"
                      }
                    ]
                  },
                  "right": {
                    "type": "Literal",
                    "start": 13,
                    "end": 14,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "class a extends b { constructor() { super() } }"', () => {
        expect(parseScript('class a extends b { constructor() { super() } }', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 47,
            "body": [
              {
                "type": "ClassDeclaration",
                "start": 0,
                "end": 47,
                "id": {
                  "type": "Identifier",
                  "start": 6,
                  "end": 7,
                  "name": "a"
                },
                "superClass": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "name": "b"
                },
                "body": {
                  "type": "ClassBody",
                  "start": 18,
                  "end": 47,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 20,
                      "end": 45,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 20,
                        "end": 31,
                        "name": "constructor"
                      },
                      "static": false,
                      "kind": "constructor",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 31,
                        "end": 45,
                        "id": null,
                        "generator": false,
                        "expression": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 34,
                          "end": 45,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 36,
                              "end": 43,
                              "expression": {
                                "type": "CallExpression",
                                "start": 36,
                                "end": 43,
                                "callee": {
                                  "type": "Super",
                                  "start": 36,
                                  "end": 41
                                },
                                "arguments": []
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse array rest spread with object', () => {
        expect(parseScript(`(function () {
            if (true) {
                var a = 1;
            }
        }());`, {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 93,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 93,
                "expression": {
                  "type": "CallExpression",
                  "start": 1,
                  "end": 91,
                  "callee": {
                    "type": "FunctionExpression",
                    "start": 1,
                    "end": 89,
                    "id": null,
                    "generator": false,
                    "expression": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 13,
                      "end": 89,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 27,
                          "end": 79,
                          "test": {
                            "type": "Literal",
                            "start": 31,
                            "end": 35,
                            "value": true,
                            "raw": "true"
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 37,
                            "end": 79,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 55,
                                "end": 65,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 59,
                                    "end": 64,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 59,
                                      "end": 60,
                                      "name": "a"
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 63,
                                      "end": 64,
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                ],
                                "kind": "var"
                              }
                            ]
                          },
                          "alternate": null
                        }
                      ]
                    }
                  },
                  "arguments": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "class a { static *[b]() {} }"', () => {
        expect(parseScript('class a { static *[b]() {} }', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 28,
            "body": [
              {
                "type": "ClassDeclaration",
                "start": 0,
                "end": 28,
                "id": {
                  "type": "Identifier",
                  "start": 6,
                  "end": 7,
                  "name": "a"
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 8,
                  "end": 28,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 10,
                      "end": 26,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 20,
                        "name": "b"
                      },
                      "static": true,
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 21,
                        "end": 26,
                        "id": null,
                        "generator": true,
                        "expression": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 24,
                          "end": 26,
                          "body": []
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "a << b << c"', () => {
        expect(parseScript('a << b << c', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 11,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 11,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 0,
                  "end": 11,
                  "left": {
                    "type": "BinaryExpression",
                    "start": 0,
                    "end": 6,
                    "left": {
                      "type": "Identifier",
                      "start": 0,
                      "end": 1,
                      "name": "a"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Identifier",
                      "start": 5,
                      "end": 6,
                      "name": "b"
                    }
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "start": 10,
                    "end": 11,
                    "name": "c"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "class a {set(b) {};}"', () => {
        expect(parseScript('class a {set(b) {};}', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 20,
            "body": [
              {
                "type": "ClassDeclaration",
                "start": 0,
                "end": 20,
                "id": {
                  "type": "Identifier",
                  "start": 6,
                  "end": 7,
                  "name": "a"
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 8,
                  "end": 20,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 9,
                      "end": 18,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 9,
                        "end": 12,
                        "name": "set"
                      },
                      "static": false,
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 12,
                        "end": 18,
                        "id": null,
                        "generator": false,
                        "expression": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 13,
                            "end": 14,
                            "name": "b"
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 16,
                          "end": 18,
                          "body": []
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "({ get a() { }, get a() { } })"', () => {
        expect(parseScript('({ get a() { }, get a() { } })', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 30,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 30,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 1,
                  "end": 29,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3,
                      "end": 14,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 7,
                        "end": 8,
                        "name": "a"
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8,
                        "end": 14,
                        "id": null,
                        "generator": false,
                        "expression": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 11,
                          "end": 14,
                          "body": []
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "start": 16,
                      "end": 27,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 20,
                        "end": 21,
                        "name": "a"
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 21,
                        "end": 27,
                        "id": null,
                        "generator": false,
                        "expression": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 24,
                          "end": 27,
                          "body": []
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "/(?=.)*/;"', () => {
        expect(parseScript('/(?=.)*/;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 9,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 9,
                "expression": {
                  "type": "Literal",
                  "start": 0,
                  "end": 8,
                  "value": /(?=.)*/,
                  "raw": "/(?=.)*/",
                  "regex": {
                    "pattern": "(?=.)*",
                    "flags": ""
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse array rest spread with object', () => {
        expect(parseScript("(1, a['a'])()", {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 13,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 13,
                "expression": {
                  "type": "CallExpression",
                  "start": 0,
                  "end": 13,
                  "callee": {
                    "type": "SequenceExpression",
                    "start": 1,
                    "end": 10,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 1,
                        "end": 2,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "MemberExpression",
                        "start": 4,
                        "end": 10,
                        "object": {
                          "type": "Identifier",
                          "start": 4,
                          "end": 5,
                          "name": "a"
                        },
                        "property": {
                          "type": "Literal",
                          "start": 6,
                          "end": 9,
                          "value": "a",
                          "raw": "'a'"
                        },
                        "computed": true
                      }
                    ]
                  },
                  "arguments": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "var [{__proto__:a, __proto__:b}] = 1;"', () => {
        expect(parseScript('var [{__proto__:a, __proto__:b}] = 1;', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "body": [
                {
                    "type": "VariableDeclaration",
                    "declarations": [
                        {
                            "type": "VariableDeclarator",
                            "init": {
                                "type": "Literal",
                                "value": 1,
                                "start": 35,
                                "end": 36,
                                "raw": "1"
                            },
                            "id": {
                                "type": "ArrayPattern",
                                "elements": [
                                    {
                                        "type": "ObjectPattern",
                                        "properties": [
                                            {
                                                "type": "Property",
                                                "kind": "init",
                                                "key": {
                                                    "type": "Identifier",
                                                    "name": "__proto__",
                                                    "start": 6,
                                                    "end": 15
                                                },
                                                "computed": false,
                                                "value": {
                                                    "type": "Identifier",
                                                    "name": "a",
                                                    "start": 16,
                                                    "end": 17
                                                },
                                                "method": false,
                                                "shorthand": false,
                                                "start": 6,
                                                "end": 17
                                            },
                                            {
                                                "type": "Property",
                                                "kind": "init",
                                                "key": {
                                                    "type": "Identifier",
                                                    "name": "__proto__",
                                                    "start": 19,
                                                    "end": 28
                                                },
                                                "computed": false,
                                                "value": {
                                                    "type": "Identifier",
                                                    "name": "b",
                                                    "start": 29,
                                                    "end": 30
                                                },
                                                "method": false,
                                                "shorthand": false,
                                                "start": 19,
                                                "end": 30
                                            }
                                        ],
                                        "start": 5,
                                        "end": 31
                                    }
                                ],
                                "start": 4,
                                "end": 32
                            },
                            "start": 4,
                            "end": 36
                        }
                    ],
                    "kind": "var",
                    "start": 0,
                    "end": 37
                }
            ],
            "sourceType": "script",
            "start": 0,
            "end": 37
        });
    });

    it('should parse "[a, {b: {c = 1}}] = d"', () => {
        expect(parseScript('[a, {b: {c = 1}}] = d', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 21,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 21,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 0,
                  "end": 21,
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "start": 0,
                    "end": 17,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1,
                        "end": 2,
                        "name": "a"
                      },
                      {
                        "type": "ObjectPattern",
                        "start": 4,
                        "end": 16,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 5,
                            "end": 15,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5,
                              "end": 6,
                              "name": "b"
                            },
                            "value": {
                              "type": "ObjectPattern",
                              "start": 8,
                              "end": 15,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 9,
                                  "end": 14,
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 9,
                                    "end": 10,
                                    "name": "c"
                                  },
                                  "kind": "init",
                                  "value": {
                                    "type": "AssignmentPattern",
                                    "start": 9,
                                    "end": 14,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 9,
                                      "end": 10,
                                      "name": "c"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 13,
                                      "end": 14,
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                }
                              ]
                            },
                            "kind": "init"
                          }
                        ]
                      }
                    ]
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 21,
                    "name": "d"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "try {} catch ({a = 1}) {}""', () => {
        expect(parseScript('try {} catch ({a = 1}) {}', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 25,
            "body": [
              {
                "type": "TryStatement",
                "start": 0,
                "end": 25,
                "block": {
                  "type": "BlockStatement",
                  "start": 4,
                  "end": 6,
                  "body": []
                },
                "handler": {
                  "type": "CatchClause",
                  "start": 7,
                  "end": 25,
                  "param": {
                    "type": "ObjectPattern",
                    "start": 14,
                    "end": 21,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 15,
                        "end": 20,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 15,
                          "end": 16,
                          "name": "a"
                        },
                        "kind": "init",
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 15,
                          "end": 20,
                          "left": {
                            "type": "Identifier",
                            "start": 15,
                            "end": 16,
                            "name": "a"
                          },
                          "right": {
                            "type": "Literal",
                            "start": 19,
                            "end": 20,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      }
                    ]
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 23,
                    "end": 25,
                    "body": []
                  }
                },
                "finalizer": null
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "function a([a=1]) {}"', () => {
        expect(parseScript('function a([a=1]) {}', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 20,
            "body": [
              {
                "type": "FunctionDeclaration",
                "start": 0,
                "end": 20,
                "id": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 10,
                  "name": "a"
                },
                "generator": false,
                "expression": false,
                "async": false,
                "params": [
                  {
                    "type": "ArrayPattern",
                    "start": 11,
                    "end": 16,
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 12,
                        "end": 15,
                        "left": {
                          "type": "Identifier",
                          "start": 12,
                          "end": 13,
                          "name": "a"
                        },
                        "right": {
                          "type": "Literal",
                          "start": 14,
                          "end": 15,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 18,
                  "end": 20,
                  "body": []
                }
              }
            ],
            "sourceType": "script"
          });
    });

    it('should parse "(...a) => 0"', () => {
        expect(parseScript('(...a) => 0', {
            ranges: true,
            raw: true
        })).to.eql({
            "type": "Program",
            "start": 0,
            "end": 11,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 0,
                "end": 11,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 0,
                  "end": 11,
                  "id": null,
                  "generator": false,
                  "expression": true,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1,
                      "end": 5,
                      "argument": {
                        "type": "Identifier",
                        "start": 4,
                        "end": 5,
                        "name": "a"
                      }
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 10,
                    "end": 11,
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            ],
            "sourceType": "script"
          });
    });

   
    it('should parse array rest spread with object', () => {
            expect(parseScript('var [...{length}] = [ 1, 2, 3];', {
                ranges: true
            })).to.eql({
                "body": [{
                    "declarations": [{
                        "end": 30,
                        "id": {
                            "elements": [{
                                "argument": {
                                    "end": 16,
                                    "properties": [{
                                        "computed": false,
                                        "end": 15,
                                        "key": {
                                            "end": 15,
                                            "name": "length",
                                            "start": 9,
                                            "type": "Identifier"
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": true,
                                        "start": 9,
                                        "type": "Property",
                                        "value": {
                                            "end": 15,
                                            "name": "length",
                                            "start": 9,
                                            "type": "Identifier",
                                        }
                                    }],
                                    "start": 8,
                                    "type": "ObjectPattern"
                                },
                                "end": 16,
                                "start": 5,
                                "type": "RestElement"
                            }],
                            "end": 17,
                            "start": 4,
                            "type": "ArrayPattern"
                        },
                        "init": {
                            "elements": [{
                                    "end": 23,
                                    "start": 22,
                                    "type": "Literal",
                                    "value": 1
                                },
                                {
                                    "end": 26,
                                    "start": 25,
                                    "type": "Literal",
                                    "value": 2,
                                },
                                {
                                    "end": 29,
                                    "start": 28,
                                    "type": "Literal",
                                    "value": 3
                                },
                            ],
                            "end": 30,
                            "start": 20,
                            "type": "ArrayExpression"
                        },
                        "start": 4,
                        "type": "VariableDeclarator"
                    }],
                    "end": 31,
                    "kind": "var",
                    "start": 0,
                    "type": "VariableDeclaration"
                }],
                "end": 31,
                "sourceType": "script",
                "start": 0,
                "type": "Program",
            });
        });
    
    
    
    
        it('should parse "(function* () { yield *a })"', () => {
            expect(parseScript('(function* () { yield *a })', {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 27,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 27,
                    "expression": {
                      "type": "FunctionExpression",
                      "start": 1,
                      "end": 26,
                      "id": null,
                      "generator": true,
                      "expression": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 14,
                        "end": 26,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 16,
                            "end": 24,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 16,
                              "end": 24,
                              "delegate": true,
                              "argument": {
                                "type": "Identifier",
                                "start": 23,
                                "end": 24,
                                "name": "a"
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "({ get: 1 })"', () => {
            expect(parseScript('({ get: 1 })', {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 12,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 12,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 1,
                      "end": 11,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3,
                          "end": 9,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3,
                            "end": 6,
                            "name": "get"
                          },
                          "value": {
                            "type": "Literal",
                            "start": 8,
                            "end": 9,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init"
                        }
                      ]
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "!a"', () => {
            expect(parseScript('!a', {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 2,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 2,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 0,
                      "end": 2,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 1,
                        "end": 2,
                        "name": "a"
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`{;}
                  a();
                  {};
                  {
                      {};
                  };
                  b();
                  {}`, {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 159,
                "body": [
                  {
                    "type": "BlockStatement",
                    "start": 0,
                    "end": 3,
                    "body": [
                      {
                        "type": "EmptyStatement",
                        "start": 1,
                        "end": 2
                      }
                    ]
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 22,
                    "end": 26,
                    "expression": {
                      "type": "CallExpression",
                      "start": 22,
                      "end": 25,
                      "callee": {
                        "type": "Identifier",
                        "start": 22,
                        "end": 23,
                        "name": "a"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "type": "BlockStatement",
                    "start": 45,
                    "end": 47,
                    "body": []
                  },
                  {
                    "type": "EmptyStatement",
                    "start": 47,
                    "end": 48
                  },
                  {
                    "type": "BlockStatement",
                    "start": 67,
                    "end": 114,
                    "body": [
                      {
                        "type": "BlockStatement",
                        "start": 91,
                        "end": 93,
                        "body": []
                      },
                      {
                        "type": "EmptyStatement",
                        "start": 93,
                        "end": 94
                      }
                    ]
                  },
                  {
                    "type": "EmptyStatement",
                    "start": 114,
                    "end": 115
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 134,
                    "end": 138,
                    "expression": {
                      "type": "CallExpression",
                      "start": 134,
                      "end": 137,
                      "callee": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 135,
                        "name": "b"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "type": "BlockStatement",
                    "start": 157,
                    "end": 159,
                    "body": []
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "({a: b = c = 1} = 2)"', () => {
            expect(parseScript('({a: b = c = 1} = 2)', {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 20,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 20,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1,
                      "end": 19,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1,
                        "end": 15,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2,
                            "end": 14,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2,
                              "end": 3,
                              "name": "a"
                            },
                            "value": {
                              "type": "AssignmentPattern",
                              "start": 5,
                              "end": 14,
                              "left": {
                                "type": "Identifier",
                                "start": 5,
                                "end": 6,
                                "name": "b"
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "start": 9,
                                "end": 14,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 9,
                                  "end": 10,
                                  "name": "c"
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 13,
                                  "end": 14,
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            },
                            "kind": "init"
                          }
                        ]
                      },
                      "right": {
                        "type": "Literal",
                        "start": 18,
                        "end": 19,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "function *a(){yield ++a;}"', () => {
            expect(parseScript('function *a(){yield ++a;}', {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 25,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 0,
                    "end": 25,
                    "id": {
                      "type": "Identifier",
                      "start": 10,
                      "end": 11,
                      "name": "a"
                    },
                    "generator": true,
                    "expression": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 13,
                      "end": 25,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 14,
                          "end": 24,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 14,
                            "end": 23,
                            "delegate": false,
                            "argument": {
                              "type": "UpdateExpression",
                              "start": 20,
                              "end": 23,
                              "operator": "++",
                              "prefix": true,
                              "argument": {
                                "type": "Identifier",
                                "start": 22,
                                "end": 23,
                                "name": "a"
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
        it('should parse "a && (() => {});"', () => {
            expect(parseScript('a && (() => {});', {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 16,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 16,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 0,
                      "end": 15,
                      "left": {
                        "type": "Identifier",
                        "start": 0,
                        "end": 1,
                        "name": "a"
                      },
                      "operator": "&&",
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 6,
                        "end": 14,
                        "id": null,
                        "generator": false,
                        "expression": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 12,
                          "end": 14,
                          "body": []
                        }
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "[...a[1]] = 2;"', () => {
            expect(parseScript('[...a[1]] = 2;', {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 14,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 14,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 0,
                      "end": 13,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 0,
                        "end": 9,
                        "elements": [
                          {
                            "type": "RestElement",
                            "start": 1,
                            "end": 8,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 4,
                              "end": 8,
                              "object": {
                                "type": "Identifier",
                                "start": 4,
                                "end": 5,
                                "name": "a"
                              },
                              "property": {
                                "type": "Literal",
                                "start": 6,
                                "end": 7,
                                "value": 1,
                                "raw": "1"
                              },
                              "computed": true
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "Literal",
                        "start": 12,
                        "end": 13,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "function eval() { function a() { "use strict" } }"', () => {
            expect(parseScript('function eval() { function a() { "use strict" } }', {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 49,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 0,
                    "end": 49,
                    "id": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 13,
                      "name": "eval"
                    },
                    "generator": false,
                    "expression": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 16,
                      "end": 49,
                      "body": [
                        {
                          "type": "FunctionDeclaration",
                          "start": 18,
                          "end": 47,
                          "id": {
                            "type": "Identifier",
                            "start": 27,
                            "end": 28,
                            "name": "a"
                          },
                          "generator": false,
                          "expression": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 31,
                            "end": 47,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 33,
                                "end": 45,
                                "expression": {
                                  "type": "Literal",
                                  "start": 33,
                                  "end": 45,
                                  "value": "use strict",
                                  "raw": "\"use strict\""
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
        it('should parse ""', () => {
            expect(parseScript(`(function () {
                    var a = {
                        '1e2000': 1
                    };
                }());`, {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 125,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 125,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1,
                      "end": 123,
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 1,
                        "end": 121,
                        "id": null,
                        "generator": false,
                        "expression": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 13,
                          "end": 121,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 35,
                              "end": 103,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 39,
                                  "end": 102,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 39,
                                    "end": 40,
                                    "name": "a"
                                  },
                                  "init": {
                                    "type": "ObjectExpression",
                                    "start": 43,
                                    "end": 102,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 69,
                                        "end": 80,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Literal",
                                          "start": 69,
                                          "end": 77,
                                          "value": "1e2000",
                                          "raw": "'1e2000'"
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 79,
                                          "end": 80,
                                          "value": 1,
                                          "raw": "1"
                                        },
                                        "kind": "init"
                                      }
                                    ]
                                  }
                                }
                              ],
                              "kind": "var"
                            }
                          ]
                        }
                      },
                      "arguments": []
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "/[a-c]/i"', () => {
            expect(parseScript('/[a-c]/i', {
                ranges: false
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": /[a-c]/i,
                        "regex": {
                            "pattern": "[a-c]",
                            "flags": "i"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`(function() {
                    a(), 1, 2;
                }());`, {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 66,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 66,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1,
                      "end": 64,
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 1,
                        "end": 62,
                        "id": null,
                        "generator": false,
                        "expression": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 12,
                          "end": 62,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 34,
                              "end": 44,
                              "expression": {
                                "type": "SequenceExpression",
                                "start": 34,
                                "end": 43,
                                "expressions": [
                                  {
                                    "type": "CallExpression",
                                    "start": 34,
                                    "end": 37,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 34,
                                      "end": 35,
                                      "name": "a"
                                    },
                                    "arguments": []
                                  },
                                  {
                                    "type": "Literal",
                                    "start": 39,
                                    "end": 40,
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  {
                                    "type": "Literal",
                                    "start": 42,
                                    "end": 43,
                                    "value": 2,
                                    "raw": "2"
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      "arguments": []
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
        it('should parse ""', () => {
            expect(parseScript(`if (a) {
                    b();
                } else if (c) {
                    d();
                } else if (e) {
                    f();
                }
                
                if (a) {
                    b();
                } else if (c) {
                    d();
                } else if (e) {
                    f();
                } else {
                    g();
                }`, {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 414,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 0,
                    "end": 165,
                    "test": {
                      "type": "Identifier",
                      "start": 4,
                      "end": 5,
                      "name": "a"
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 7,
                      "end": 51,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 29,
                          "end": 33,
                          "expression": {
                            "type": "CallExpression",
                            "start": 29,
                            "end": 32,
                            "callee": {
                              "type": "Identifier",
                              "start": 29,
                              "end": 30,
                              "name": "b"
                            },
                            "arguments": []
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "start": 57,
                      "end": 165,
                      "test": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "name": "c"
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 64,
                        "end": 108,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 86,
                            "end": 90,
                            "expression": {
                              "type": "CallExpression",
                              "start": 86,
                              "end": 89,
                              "callee": {
                                "type": "Identifier",
                                "start": 86,
                                "end": 87,
                                "name": "d"
                              },
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "alternate": {
                        "type": "IfStatement",
                        "start": 114,
                        "end": 165,
                        "test": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 119,
                          "name": "e"
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 121,
                          "end": 165,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 143,
                              "end": 147,
                              "expression": {
                                "type": "CallExpression",
                                "start": 143,
                                "end": 146,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 143,
                                  "end": 144,
                                  "name": "f"
                                },
                                "arguments": []
                              }
                            }
                          ]
                        },
                        "alternate": null
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 199,
                    "end": 414,
                    "test": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 204,
                      "name": "a"
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 206,
                      "end": 250,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 228,
                          "end": 232,
                          "expression": {
                            "type": "CallExpression",
                            "start": 228,
                            "end": 231,
                            "callee": {
                              "type": "Identifier",
                              "start": 228,
                              "end": 229,
                              "name": "b"
                            },
                            "arguments": []
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "start": 256,
                      "end": 414,
                      "test": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 261,
                        "name": "c"
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 263,
                        "end": 307,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 285,
                            "end": 289,
                            "expression": {
                              "type": "CallExpression",
                              "start": 285,
                              "end": 288,
                              "callee": {
                                "type": "Identifier",
                                "start": 285,
                                "end": 286,
                                "name": "d"
                              },
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "alternate": {
                        "type": "IfStatement",
                        "start": 313,
                        "end": 414,
                        "test": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 318,
                          "name": "e"
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 320,
                          "end": 364,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 342,
                              "end": 346,
                              "expression": {
                                "type": "CallExpression",
                                "start": 342,
                                "end": 345,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 342,
                                  "end": 343,
                                  "name": "f"
                                },
                                "arguments": []
                              }
                            }
                          ]
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "start": 370,
                          "end": 414,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 392,
                              "end": 396,
                              "expression": {
                                "type": "CallExpression",
                                "start": 392,
                                "end": 395,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 392,
                                  "end": 393,
                                  "name": "g"
                                },
                                "arguments": []
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "var a = class b extends 1{}"', () => {
            expect(parseScript('var a = class b extends 1{}', {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 27,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 0,
                    "end": 27,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4,
                        "end": 27,
                        "id": {
                          "type": "Identifier",
                          "start": 4,
                          "end": 5,
                          "name": "a"
                        },
                        "init": {
                          "type": "ClassExpression",
                          "start": 8,
                          "end": 27,
                          "id": {
                            "type": "Identifier",
                            "start": 14,
                            "end": 15,
                            "name": "b"
                          },
                          "superClass": {
                            "type": "Literal",
                            "start": 24,
                            "end": 25,
                            "value": 1,
                            "raw": "1"
                          },
                          "body": {
                            "type": "ClassBody",
                            "start": 25,
                            "end": 27,
                            "body": []
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "(function () { }(1,2,3))"', () => {
            expect(parseScript('(function () { }(1,2,3))', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": []
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        },
                        "arguments": [{
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                            },
                            {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3"
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "a: while (true) { break a }"', () => {
            expect(parseScript('a: while (true) { break a }', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "LabeledStatement",
                    "label": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "body": {
                        "type": "WhileStatement",
                        "test": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true"
                        },
                        "body": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "BreakStatement",
                                "label": {
                                    "type": "Identifier",
                                    "name": "a"
                                }
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`/*a
                  b*/ 1`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`function a() {
                    if (false) {
                        // because test is not referenced
                        var a = 1;
                    }
                }`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                            "type": "IfStatement",
                            "test": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false"
                            },
                            "consequent": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "VariableDeclaration",
                                    "declarations": [{
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        }
                                    }],
                                    "kind": "var"
                                }]
                            },
                            "alternate": null
                        }]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`var a;
                  if (b()) {
                      new a(1);
                  } else {
                      a(2);
                  }`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "VariableDeclaration",
                        "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": null
                        }],
                        "kind": "var"
                    },
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "arguments": []
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "NewExpression",
                                    "callee": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "arguments": [{
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    }]
                                }
                            }]
                        },
                        "alternate": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "arguments": [{
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                    }]
                                }
                            }]
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse "var A\u{42}C;"', () => {
            expect(parseScript('var A\u{42}C;', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "ABC"
                        },
                        "init": null
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "do continue; while (true)  // should be empty statement"', () => {
            expect(parseScript('do continue; while (true)  // should be empty statement', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "DoWhileStatement",
                    "body": {
                        "type": "ContinueStatement",
                        "label": null
                    },
                    "test": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true"
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "function a({ b, c }){}"', () => {
            expect(parseScript('function a({ b, c }){}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [{
                        "type": "ObjectPattern",
                        "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": true
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "c"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Identifier",
                                    "name": "c"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": true
                            }
                        ]
                    }],
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({2e308:1})"', () => {
            expect(parseScript('({2e308:1})', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Literal",
                                "value": Infinity,
                                "raw": "2e308"
                            },
                            "computed": false,
                            "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse ""', () => {
            expect(parseScript(`(function () {
                    var a;
                    eval('a');
                    function b() {
                        a = a += 1;  // eval makes dynamic
                    }
                }());`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                        "type": "VariableDeclaration",
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "id": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "init": null
                                        }],
                                        "kind": "var"
                                    },
                                    {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "Identifier",
                                                "name": "eval"
                                            },
                                            "arguments": [{
                                                "type": "Literal",
                                                "value": "a",
                                                "raw": "'a'"
                                            }]
                                        }
                                    },
                                    {
                                        "type": "FunctionDeclaration",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    },
                                                    "right": {
                                                        "type": "AssignmentExpression",
                                                        "operator": "+=",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "a"
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 1,
                                                            "raw": "1"
                                                        }
                                                    }
                                                }
                                            }]
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    }
                                ]
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        },
                        "arguments": []
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`new a("aa, [bb]", 'return aa;');
                  new a("aa, {bb}", 'return aa;');
                  new a("[[aa]], [{bb}]", 'return aa;');`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "NewExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "arguments": [{
                                    "type": "Literal",
                                    "value": "aa, [bb]",
                                    "raw": "\"aa, [bb]\""
                                },
                                {
                                    "type": "Literal",
                                    "value": "return aa;",
                                    "raw": "'return aa;'"
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "NewExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "arguments": [{
                                    "type": "Literal",
                                    "value": "aa, {bb}",
                                    "raw": "\"aa, {bb}\""
                                },
                                {
                                    "type": "Literal",
                                    "value": "return aa;",
                                    "raw": "'return aa;'"
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "NewExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "arguments": [{
                                    "type": "Literal",
                                    "value": "[[aa]], [{bb}]",
                                    "raw": "\"[[aa]], [{bb}]\""
                                },
                                {
                                    "type": "Literal",
                                    "value": "return aa;",
                                    "raw": "'return aa;'"
                                }
                            ]
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse "({ get a() {} })"', () => {
            expect(parseScript('({ get a() {} })', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "computed": false,
                            "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": []
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            },
                            "kind": "get",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse ""', () => {
            expect(parseScript(`(function () {
                    arguments[1] = 2;
                    var a =3;  // should not hoist to parameter
                }());`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "arguments"
                                                },
                                                "property": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                }
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    {
                                        "type": "VariableDeclaration",
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "id": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "init": {
                                                "type": "Literal",
                                                "value": 3,
                                                "raw": "3"
                                            }
                                        }],
                                        "kind": "var"
                                    }
                                ]
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        },
                        "arguments": []
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "var a = class extends b {}"', () => {
            expect(parseScript('var a = class extends b {}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "init": {
                            "type": "ClassExpression",
                            "id": null,
                            "superClass": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "body": {
                                "type": "ClassBody",
                                "body": []
                            }
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "var [{a},b] = c;"', () => {
            expect(parseScript('var [{a},b] = c;', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "ArrayPattern",
                            "elements": [{
                                    "type": "ObjectPattern",
                                    "properties": [{
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": true
                                    }]
                                },
                                {
                                    "type": "Identifier",
                                    "name": "b"
                                }
                            ]
                        },
                        "init": {
                            "type": "Identifier",
                            "name": "c"
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
        it('should parse "(class {get a() {}})"', () => {
            expect(parseScript('(class {get a() {}})', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ClassExpression",
                        "id": null,
                        "superClass": null,
                        "body": {
                            "type": "ClassBody",
                            "body": [{
                                "type": "MethodDefinition",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": []
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "get",
                                "static": false
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "((a,a),(a,a))"', () => {
            expect(parseScript('((a,a),(a,a))', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "SequenceExpression",
                        "expressions": [{
                                "type": "SequenceExpression",
                                "expressions": [{
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                ]
                            },
                            {
                                "type": "SequenceExpression",
                                "expressions": [{
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                ]
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "1;"', () => {
            expect(parseScript('1;', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "T‍"', () => {
            expect(parseScript('T', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Identifier",
                        "name": "T"
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "function a([]) {}"', () => {
            expect(parseScript('function a([]) {}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [{
                        "type": "ArrayPattern",
                        "elements": []
                    }],
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "("a")"', () => {
            expect(parseScript('("a")', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\""
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "[...a] = b"', () => {
            expect(parseScript(' [...a] = b', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "ArrayPattern",
                            "elements": [{
                                "type": "RestElement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                }
                            }]
                        },
                        "right": {
                            "type": "Identifier",
                            "name": "b"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "- (1 - 2 - 3)"', () => {
            expect(parseScript(`- (1 - 2 - 3)`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3"
                            }
                        },
                        "prefix": true
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`new (function () {
                    var a = 1;
                });`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "NewExpression",
                        "callee": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "VariableDeclaration",
                                    "declarations": [{
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        }
                                    }],
                                    "kind": "var"
                                }]
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        },
                        "arguments": []
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({yield})"', () => {
            expect(parseScript('({yield})', {
                ranges: false,
                raw: true
            })).to.eql({
                "body": [{
                    "expression": {
                        "properties": [{
                            "computed": false,
                            "key": {
                                "name": "yield",
                                "type": "Identifier"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": true,
                            "type": "Property",
                            "value": {
                                "name": "yield",
                                "type": "Identifier"
                            }
                        }],
                        "type": "ObjectExpression"
                    },
                    "type": "ExpressionStatement"
                }],
                "sourceType": "script",
                "type": "Program"
            });
        });
    
    
        it('should parse "(a => a)"', () => {
            expect(parseScript('(a => a)', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrowFunctionExpression",
                        "id": null,
                        "params": [{
                            "type": "Identifier",
                            "name": "a"
                        }],
                        "body": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "generator": false,
                        "expression": true,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "function *a(){yield typeof 0}"', () => {
            expect(parseScript('function *a(){yield typeof 0}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "YieldExpression",
                                "argument": {
                                    "type": "UnaryExpression",
                                    "operator": "typeof",
                                    "argument": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                    },
                                    "prefix": true
                                },
                                "delegate": false
                            }
                        }]
                    },
                    "generator": true,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "function a({yield: b}){}"', () => {
            expect(parseScript('function a({yield: b}){}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [{
                        "type": "ObjectPattern",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "yield"
                            },
                            "computed": false,
                            "value": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false
                        }]
                    }],
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "switch (a) {}"', () => {
            expect(parseScript('switch (a) {}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "SwitchStatement",
                    "discriminant": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "cases": []
                }],
                "sourceType": "script"
            });
        });
        it('should parse ""', () => {
            expect(parseScript(`'use strict';
                  var a = {
                      delete: 1
                  };`, {
                ranges: false,
                raw: true,
                directives: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "Literal",
                            "value": "use strict",
                            "raw": "'use strict'"
                        },
                        "directive": "use strict"
                    },
                    {
                        "type": "VariableDeclaration",
                        "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": {
                                "type": "ObjectExpression",
                                "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "delete"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                }]
                            }
                        }],
                        "kind": "var"
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse "({ "__proto__": null, __proto__(){}, })"', () => {
            expect(parseScript('({ "__proto__": null, __proto__(){}, })', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Literal",
                                    "value": "__proto__",
                                    "raw": "\"__proto__\""
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "__proto__"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": []
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "init",
                                "method": true,
                                "shorthand": false
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a in b"', () => {
            expect(parseScript('a in b', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "BinaryExpression",
                        "operator": "in",
                        "left": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "right": {
                            "type": "Identifier",
                            "name": "b"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse ""', () => {
            expect(parseScript(`// optimize this
                  (function () {
                    a('b');
                  }());
                  try {
                  } catch (c) {
                  }`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [{
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "arguments": [{
                                                "type": "Literal",
                                                "value": "b",
                                                "raw": "'b'"
                                            }]
                                        }
                                    }]
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            },
                            "arguments": []
                        }
                    },
                    {
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "Identifier",
                                "name": "c"
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": []
                            }
                        },
                        "finalizer": null
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`(function() {
                    a(), 1, b();
                }());`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "SequenceExpression",
                                        "expressions": [{
                                                "type": "CallExpression",
                                                "callee": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                },
                                                "arguments": []
                                            },
                                            {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            },
                                            {
                                                "type": "CallExpression",
                                                "callee": {
                                                    "type": "Identifier",
                                                    "name": "b"
                                                },
                                                "arguments": []
                                            }
                                        ]
                                    }
                                }]
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        },
                        "arguments": []
                    }
                }],
                "sourceType": "script"
            });
        });
      
        it('should parse "var [,a] = 1;"', () => {
            expect(parseScript('var [,a] = 1;', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "ArrayPattern",
                            "elements": [
                                null,
                                {
                                    "type": "Identifier",
                                    "name": "a"
                                }
                            ]
                        },
                        "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({ get if() {} })"', () => {
            expect(parseScript('({ get if() {} })', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "if"
                            },
                            "computed": false,
                            "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": []
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            },
                            "kind": "get",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "var yield;"', () => {
            expect(parseScript('var yield;', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "yield"
                        },
                        "init": null
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`(function () {
                    void ((a) ? 1 : b);
                }());`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "UnaryExpression",
                                        "operator": "void",
                                        "argument": {
                                            "type": "ConditionalExpression",
                                            "test": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "consequent": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            },
                                            "alternate": {
                                                "type": "Identifier",
                                                "name": "b"
                                            }
                                        },
                                        "prefix": true
                                    }
                                }]
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        },
                        "arguments": []
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`function a() {
                    if (b) {
                        let c;
                        let d;
                        var e;
                        var f;
                    }
                }`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                            "type": "IfStatement",
                            "test": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "consequent": {
                                "type": "BlockStatement",
                                "body": [{
                                        "type": "VariableDeclaration",
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "id": {
                                                "type": "Identifier",
                                                "name": "c"
                                            },
                                            "init": null
                                        }],
                                        "kind": "let"
                                    },
                                    {
                                        "type": "VariableDeclaration",
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "id": {
                                                "type": "Identifier",
                                                "name": "d"
                                            },
                                            "init": null
                                        }],
                                        "kind": "let"
                                    },
                                    {
                                        "type": "VariableDeclaration",
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "id": {
                                                "type": "Identifier",
                                                "name": "e"
                                            },
                                            "init": null
                                        }],
                                        "kind": "var"
                                    },
                                    {
                                        "type": "VariableDeclaration",
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "id": {
                                                "type": "Identifier",
                                                "name": "f"
                                            },
                                            "init": null
                                        }],
                                        "kind": "var"
                                    }
                                ]
                            },
                            "alternate": null
                        }]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "(function({a = 1}){})"', () => {
            expect(parseScript('(function({a = 1}){})', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [{
                            "type": "ObjectPattern",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "AssignmentPattern",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    }
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": true
                            }]
                        }],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({a:(b = 0)})"', () => {
            expect(parseScript('({a:(b = 0)})', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "computed": false,
                            "value": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "right": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                }
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "var a = /[x-z]/i"', () => {
            expect(parseScript('var a = /[x-z]/i', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "init": {
                            "type": "Literal",
                            "value": /[x-z]/i,
                            "raw": "/[x-z]/i",
                            "regex": {
                                "pattern": "[x-z]",
                                "flags": "i"
                            }
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
        it('should parse ""', () => {
            expect(parseScript(`(function(){ return/* Multiline
                    Comment */a; })`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": [{
                                    "type": "ReturnStatement",
                                    "argument": null
                                },
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "__proto__: while (true) { continue __proto__; }"', () => {
            expect(parseScript('__proto__: while (true) { continue __proto__; }', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "LabeledStatement",
                    "label": {
                        "type": "Identifier",
                        "name": "__proto__"
                    },
                    "body": {
                        "type": "WhileStatement",
                        "test": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true"
                        },
                        "body": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ContinueStatement",
                                "label": {
                                    "type": "Identifier",
                                    "name": "__proto__"
                                }
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "(function a(b, c) { })"', () => {
            expect(parseScript(`(function a(b, c) { })`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "params": [{
                                "type": "Identifier",
                                "name": "b"
                            },
                            {
                                "type": "Identifier",
                                "name": "c"
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse ""', () => {
            expect(parseScript(`function a() {
                    return (a, void 1);
                }`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                            "type": "ReturnStatement",
                            "argument": {
                                "type": "SequenceExpression",
                                "expressions": [{
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    {
                                        "type": "UnaryExpression",
                                        "operator": "void",
                                        "argument": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        },
                                        "prefix": true
                                    }
                                ]
                            }
                        }]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a++"', () => {
            expect(parseScript('a++', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "argument": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "prefix": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({ a: [a, b] }, ...c) => {}"', () => {
            expect(parseScript('({ a: [a, b] }, ...c) => {}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrowFunctionExpression",
                        "id": null,
                        "params": [{
                                "type": "ObjectPattern",
                                "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "ArrayPattern",
                                        "elements": [{
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            {
                                                "type": "Identifier",
                                                "name": "b"
                                            }
                                        ]
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                }]
                            },
                            {
                                "type": "RestElement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "c"
                                }
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "function a() {"use strict"; 0o0; }"', () => {
            expect(parseScript('function a() {"use strict"; 0o0; }', {
                ranges: false,
                raw: true,
                directives: false
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "Literal",
                                    "value": "use strict",
                                    "raw": "\"use strict\""
                                }
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0o0"
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`b: while (a) break b;
                  c: while (a) break;`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "LabeledStatement",
                        "label": {
                            "type": "Identifier",
                            "name": "b"
                        },
                        "body": {
                            "type": "WhileStatement",
                            "test": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "body": {
                                "type": "BreakStatement",
                                "label": {
                                    "type": "Identifier",
                                    "name": "b"
                                }
                            }
                        }
                    },
                    {
                        "type": "LabeledStatement",
                        "label": {
                            "type": "Identifier",
                            "name": "c"
                        },
                        "body": {
                            "type": "WhileStatement",
                            "test": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "body": {
                                "type": "BreakStatement",
                                "label": null
                            }
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse "([,,])=>1"', () => {
            expect(parseScript('([,,])=>1', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrowFunctionExpression",
                        "id": null,
                        "params": [{
                            "type": "ArrayPattern",
                            "elements": [
                                null,
                                null
                            ]
                        }],
                        "body": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        },
                        "generator": false,
                        "expression": true,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "(function package() {"use strict"; })()"', () => {
            expect(parseScript('(function package() {"use strict"; })()', {
                ranges: false,
                raw: true
            })).to.eql({
                "body": [{
                    "expression": {
                        "arguments": [],
                        "callee": {
                            "async": false,
                            "body": {
                                "body": [{
                                    "expression": {
                                        "raw": "\"use strict\"",
                                        "type": "Literal",
                                        "value": "use strict",
                                    },
                                    "type": "ExpressionStatement"
                                }],
                                "type": "BlockStatement"
                            },
                            "expression": false,
                            "generator": false,
                            "id": {
                                "name": "package",
                                "type": "Identifier",
                            },
                            "params": [],
                            "type": "FunctionExpression"
                        },
                        "type": "CallExpression"
                    },
                    "type": "ExpressionStatement"
                }],
                "sourceType": "script",
                "type": "Program"
            });
        });
    
        it('should parse "a * b * c', () => {
            expect(parseScript('a * b * c', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "b"
                            }
                        },
                        "right": {
                            "type": "Identifier",
                            "name": "c"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "(a)=>{"use strict";}"', () => {
            expect(parseScript('(a)=>{"use strict";}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrowFunctionExpression",
                        "id": null,
                        "params": [{
                            "type": "Identifier",
                            "name": "a"
                        }],
                        "body": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "Literal",
                                    "value": "use strict",
                                    "raw": "\"use strict\""
                                }
                            }]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "({0: a, 1: a} = 1)"', () => {
            expect(parseScript('({0: a, 1: a} = 1)', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "ObjectPattern",
                            "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                }
                            ]
                        },
                        "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "function* a() {}"', () => {
            expect(parseScript('function* a() {}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "generator": true,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "while (true) { break }"', () => {
            expect(parseScript('while (true) { break }', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "WhileStatement",
                    "test": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true"
                    },
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                            "type": "BreakStatement",
                            "label": null
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`a = [1,,];
                  b = [2, 3, c];
                  d = [4, , 5, ];
                  e = [6, c, 7];`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "ArrayExpression",
                                "elements": [{
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    },
                                    null
                                ]
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "right": {
                                "type": "ArrayExpression",
                                "elements": [{
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                    },
                                    {
                                        "type": "Literal",
                                        "value": 3,
                                        "raw": "3"
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "c"
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "d"
                            },
                            "right": {
                                "type": "ArrayExpression",
                                "elements": [{
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4"
                                    },
                                    null,
                                    {
                                        "type": "Literal",
                                        "value": 5,
                                        "raw": "5"
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "e"
                            },
                            "right": {
                                "type": "ArrayExpression",
                                "elements": [{
                                        "type": "Literal",
                                        "value": 6,
                                        "raw": "6"
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "c"
                                    },
                                    {
                                        "type": "Literal",
                                        "value": 7,
                                        "raw": "7"
                                    }
                                ]
                            }
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse "a.b"', () => {
            expect(parseScript('a.b', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "b"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`a = "b".c;
                  a = ("b" + "d")["e" + "f"];
                  a = g.c;
                  a = ("b" + g).c;`, {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 118,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 10,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 0,
                      "end": 9,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 0,
                        "end": 1,
                        "name": "a"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 4,
                        "end": 9,
                        "object": {
                          "type": "Literal",
                          "start": 4,
                          "end": 7,
                          "value": "b",
                          "raw": "\"b\""
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 8,
                          "end": 9,
                          "name": "c"
                        },
                        "computed": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 29,
                    "end": 56,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 29,
                      "end": 55,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 29,
                        "end": 30,
                        "name": "a"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 33,
                        "end": 55,
                        "object": {
                          "type": "BinaryExpression",
                          "start": 34,
                          "end": 43,
                          "left": {
                            "type": "Literal",
                            "start": 34,
                            "end": 37,
                            "value": "b",
                            "raw": "\"b\""
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 40,
                            "end": 43,
                            "value": "d",
                            "raw": "\"d\""
                          }
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "start": 45,
                          "end": 54,
                          "left": {
                            "type": "Literal",
                            "start": 45,
                            "end": 48,
                            "value": "e",
                            "raw": "\"e\""
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 51,
                            "end": 54,
                            "value": "f",
                            "raw": "\"f\""
                          }
                        },
                        "computed": true
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 75,
                    "end": 83,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 75,
                      "end": 82,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 76,
                        "name": "a"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 79,
                        "end": 82,
                        "object": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 80,
                          "name": "g"
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 82,
                          "name": "c"
                        },
                        "computed": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 118,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 102,
                      "end": 117,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 103,
                        "name": "a"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 106,
                        "end": 117,
                        "object": {
                          "type": "BinaryExpression",
                          "start": 107,
                          "end": 114,
                          "left": {
                            "type": "Literal",
                            "start": 107,
                            "end": 110,
                            "value": "b",
                            "raw": "\"b\""
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "name": "g"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 117,
                          "name": "c"
                        },
                        "computed": false
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
        it('should parse "/**/ function a() {function b() {}}"', () => {
            expect(parseScript('/**/ function a() {function b() {}}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                            "type": "FunctionDeclaration",
                            "id": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": []
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        }]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });

        it('should parse "let.let"', () => {
            expect(parseScript('let.let', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "type": "Identifier",
                            "name": "let"
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "let"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "(class {set a(b) {"use strict";}})"', () => {
            expect(parseScript('(class {set a(b) {"use strict";}})', {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 34,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 34,
                    "expression": {
                      "type": "ClassExpression",
                      "start": 1,
                      "end": 33,
                      "id": null,
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 7,
                        "end": 33,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 8,
                            "end": 32,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 12,
                              "end": 13,
                              "name": "a"
                            },
                            "static": false,
                            "kind": "set",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 13,
                              "end": 32,
                              "id": null,
                              "generator": false,
                              "expression": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 14,
                                  "end": 15,
                                  "name": "b"
                                }
                              ],
                              "body": {
                                "type": "BlockStatement",
                                "start": 17,
                                "end": 32,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 18,
                                    "end": 31,
                                    "expression": {
                                      "type": "Literal",
                                      "start": 18,
                                      "end": 30,
                                      "value": "use strict",
                                      "raw": "\"use strict\""
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "(function x({ a: { w, x }, b: [y, z] }, ...[a, b, c]){})"', () => {
            expect(parseScript('(function x({ a: { w, x }, b: [y, z] }, ...[a, b, c]){})', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": {
                            "type": "Identifier",
                            "name": "x"
                        },
                        "params": [{
                                "type": "ObjectPattern",
                                "properties": [{
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "ObjectPattern",
                                            "properties": [{
                                                    "type": "Property",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "w"
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "Identifier",
                                                        "name": "w"
                                                    },
                                                    "kind": "init",
                                                    "method": false,
                                                    "shorthand": true
                                                },
                                                {
                                                    "type": "Property",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "x"
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "Identifier",
                                                        "name": "x"
                                                    },
                                                    "kind": "init",
                                                    "method": false,
                                                    "shorthand": true
                                                }
                                            ]
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": false
                                    },
                                    {
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "ArrayPattern",
                                            "elements": [{
                                                    "type": "Identifier",
                                                    "name": "y"
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "z"
                                                }
                                            ]
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": false
                                    }
                                ]
                            },
                            {
                                "type": "RestElement",
                                "argument": {
                                    "type": "ArrayPattern",
                                    "elements": [{
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        {
                                            "type": "Identifier",
                                            "name": "c"
                                        }
                                    ]
                                }
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse ""', () => {
            expect(parseScript(`a(
                        b(c, c),
                        d(c, c),
                        e(c, c)
                    );`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "arguments": [{
                                "type": "CallExpression",
                                "callee": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "arguments": [{
                                        "type": "Identifier",
                                        "name": "c"
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "c"
                                    }
                                ]
                            },
                            {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "Identifier",
                                    "name": "d"
                                },
                                "arguments": [{
                                        "type": "Identifier",
                                        "name": "c"
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "c"
                                    }
                                ]
                            },
                            {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "Identifier",
                                    "name": "e"
                                },
                                "arguments": [{
                                        "type": "Identifier",
                                        "name": "c"
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "c"
                                    }
                                ]
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "(function a() { b; c() });"', () => {
            expect(parseScript('(function a() { b; c() });', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": [{
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "Identifier",
                                        "name": "b"
                                    }
                                },
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "arguments": []
                                    }
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`var a = {};
                    a.b = 1;
                    a.c = 2;
                    d.e(a.c);`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "VariableDeclaration",
                        "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": {
                                "type": "ObjectExpression",
                                "properties": []
                            }
                        }],
                        "kind": "var"
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "b"
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "c"
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "d"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "e"
                                }
                            },
                            "arguments": [{
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "c"
                                }
                            }]
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
        it('should parse ""', () => {
            expect(parseScript(`throw 'a';
                    b();`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "ThrowStatement",
                        "argument": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'"
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "arguments": []
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse "new a(....5);"', () => {
            expect(parseScript('new a(....5);', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "NewExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "arguments": [{
                            "type": "SpreadElement",
                            "argument": {
                                "type": "Literal",
                                "value": 0.5,
                                "raw": ".5"
                            }
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a << b << c"', () => {
            expect(parseScript('a << b << c', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "BinaryExpression",
                        "operator": "<<",
                        "left": {
                            "type": "BinaryExpression",
                            "operator": "<<",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "b"
                            }
                        },
                        "right": {
                            "type": "Identifier",
                            "name": "c"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "({a}) => 1"', () => {
            expect(parseScript('({a}) => 1', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrowFunctionExpression",
                        "id": null,
                        "params": [{
                            "type": "ObjectPattern",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": true
                            }]
                        }],
                        "body": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        },
                        "generator": false,
                        "expression": true,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a || b && c"', () => {
            expect(parseScript('a || b && c', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "LogicalExpression",
                        "operator": "||",
                        "left": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "right": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "c"
                            }
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a ^= 1"', () => {
            expect(parseScript('a ^= 1', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "^=",
                        "left": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "+{} / 1"', () => {
            expect(parseScript('+{} / 1', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                            "type": "UnaryExpression",
                            "operator": "+",
                            "argument": {
                                "type": "ObjectExpression",
                                "properties": []
                            },
                            "prefix": true
                        },
                        "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`(function () {
                        -1;
                    }());`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "UnaryExpression",
                                        "operator": "-",
                                        "argument": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        },
                                        "prefix": true
                                    }
                                }]
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        },
                        "arguments": []
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "null"', () => {
            expect(parseScript('null', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "with({}) {}"', () => {
            expect(parseScript('with({}) {}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "WithStatement",
                    "object": {
                        "type": "ObjectExpression",
                        "properties": []
                    },
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "0o2"', () => {
            expect(parseScript('0o2', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "0o2"
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "(class {3() {}})"', () => {
            expect(parseScript('(class {3() {}})', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ClassExpression",
                        "id": null,
                        "superClass": null,
                        "body": {
                            "type": "ClassBody",
                            "body": [{
                                "type": "MethodDefinition",
                                "key": {
                                    "type": "Literal",
                                    "value": 3,
                                    "raw": "3"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": []
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "method",
                                "static": false
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "(function yield(){})"', () => {
            expect(parseScript('(function yield(){})', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": {
                            "type": "Identifier",
                            "name": "yield"
                        },
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a = { y, z }"', () => {
            expect(parseScript('a = { y, z }', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "right": {
                            "type": "ObjectExpression",
                            "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "y"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Identifier",
                                        "name": "y"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": true
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "z"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Identifier",
                                        "name": "z"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": true
                                }
                            ]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`do a()
                    ;while (true)`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "DoWhileStatement",
                    "body": {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "arguments": []
                        }
                    },
                    "test": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true"
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "(function*(a, b, c) { yield* a; })"', () => {
            expect(parseScript('(function*(a, b, c) { yield* a; })', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [{
                                "type": "Identifier",
                                "name": "a"
                            },
                            {
                                "type": "Identifier",
                                "name": "b"
                            },
                            {
                                "type": "Identifier",
                                "name": "c"
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "YieldExpression",
                                    "argument": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "delegate": true
                                }
                            }]
                        },
                        "generator": true,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "let {a,} = 1"', () => {
            expect(parseScript('let {a,} = 1', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "ObjectPattern",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": true
                            }]
                        },
                        "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }],
                    "kind": "let"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a => ({ b: 1 })"', () => {
            expect(parseScript('a => ({ b: 1 })', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrowFunctionExpression",
                        "id": null,
                        "params": [{
                            "type": "Identifier",
                            "name": "a"
                        }],
                        "body": {
                            "type": "ObjectExpression",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }]
                        },
                        "generator": false,
                        "expression": true,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "a: while (true) while (true) continue a;"', () => {
            expect(parseScript('a: while (true) while (true) continue a;', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "LabeledStatement",
                    "label": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "body": {
                        "type": "WhileStatement",
                        "test": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true"
                        },
                        "body": {
                            "type": "WhileStatement",
                            "test": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true"
                            },
                            "body": {
                                "type": "ContinueStatement",
                                "label": {
                                    "type": "Identifier",
                                    "name": "a"
                                }
                            }
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "try {} catch ([a]) {}"', () => {
            expect(parseScript('try {} catch ([a]) {}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "TryStatement",
                    "block": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "handler": {
                        "type": "CatchClause",
                        "param": {
                            "type": "ArrayPattern",
                            "elements": [{
                                "type": "Identifier",
                                "name": "a"
                            }]
                        },
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        }
                    },
                    "finalizer": null
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "arguments--"', () => {
            expect(parseScript('arguments--', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "UpdateExpression",
                        "operator": "--",
                        "argument": {
                            "type": "Identifier",
                            "name": "arguments"
                        },
                        "prefix": false
                    }
                }],
                "sourceType": "script"
            });
        });
      
        it('should parse "(function(...a){})"', () => {
            expect(parseScript('(function(...a){})', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [{
                            "type": "RestElement",
                            "argument": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "1/**/"', () => {
            expect(parseScript('1/**/', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a = { true: 1 }"', () => {
            expect(parseScript('a = { true: 1 }', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "right": {
                            "type": "ObjectExpression",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "true"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({"a": b} = 1)"', () => {
            expect(parseScript('({"a": b} = 1)', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "ObjectPattern",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "\"a\""
                                },
                                "computed": false,
                                "value": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }]
                        },
                        "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a === b"', () => {
            expect(parseScript('a === b', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "right": {
                            "type": "Identifier",
                            "name": "b"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "var a = 1<!--foo"', () => {
            expect(parseScript('var a = 1<!--foo', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
        it('should parse ""', () => {
            expect(parseScript(`while (true) { continue // Comment
                        a; }`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "WhileStatement",
                    "test": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true"
                    },
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                                "type": "ContinueStatement",
                                "label": null
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "Identifier",
                                    "name": "a"
                                }
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "(a) = 1"', () => {
            expect(parseScript('(a) = 1', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "(function* () { yield yield 1 })"', () => {
            expect(parseScript('(function* () { yield yield 1 })', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "YieldExpression",
                                    "argument": {
                                        "type": "YieldExpression",
                                        "argument": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        },
                                        "delegate": false
                                    },
                                    "delegate": false
                                }
                            }]
                        },
                        "generator": true,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse " a = function(b = 1) {}"', () => {
            expect(parseScript(' a = function(b = 1) {}', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "right": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [{
                                "type": "AssignmentPattern",
                                "left": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                }
                            }],
                            "body": {
                                "type": "BlockStatement",
                                "body": []
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`(function () {
                        a['b'];
                    }());`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "property": {
                                            "type": "Literal",
                                            "value": "b",
                                            "raw": "'b'"
                                        }
                                    }
                                }]
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        },
                        "arguments": []
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "({["__proto__"]:1, ["__proto__"]:2})"', () => {
            expect(parseScript('({["__proto__"]:1, ["__proto__"]:2})', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Literal",
                                    "value": "__proto__",
                                    "raw": "\"__proto__\""
                                },
                                "computed": true,
                                "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Literal",
                                    "value": "__proto__",
                                    "raw": "\"__proto__\""
                                },
                                "computed": true,
                                "value": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`(class {;;;
                        ;a(){}})`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ClassExpression",
                        "id": null,
                        "superClass": null,
                        "body": {
                            "type": "ClassBody",
                            "body": [{
                                "type": "MethodDefinition",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": []
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "method",
                                "static": false
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "  arguments++"', () => {
            expect(parseScript('  arguments++', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "argument": {
                            "type": "Identifier",
                            "name": "arguments"
                        },
                        "prefix": false
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "true;false"', () => {
            expect(parseScript('true;false', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true"
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false"
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse " switch (a) { case 1: let b; }"', () => {
            expect(parseScript(' switch (a) { case 1: let b; }', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "SwitchStatement",
                    "discriminant": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "cases": [{
                        "type": "SwitchCase",
                        "test": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        },
                        "consequent": [{
                            "type": "VariableDeclaration",
                            "declarations": [{
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "init": null
                            }],
                            "kind": "let"
                        }]
                    }]
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`(function () {
                        function a() {
                            var b = 1;
                            return b;
                        }
                    }());`, {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "FunctionDeclaration",
                                    "id": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [{
                                                "type": "VariableDeclaration",
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "id": {
                                                        "type": "Identifier",
                                                        "name": "b"
                                                    },
                                                    "init": {
                                                        "type": "Literal",
                                                        "value": 1,
                                                        "raw": "1"
                                                    }
                                                }],
                                                "kind": "var"
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "Identifier",
                                                    "name": "b"
                                                }
                                            }
                                        ]
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                }]
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        },
                        "arguments": []
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "/[a-z]/gimuy"', () => {
            expect(parseScript('/[a-z]/gimuy', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": /[a-z]/gimuy,
                        "raw": "/[a-z]/gimuy",
                        "regex": {
                            "pattern": "[a-z]",
                            "flags": "gimuy"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "("\\u{0000000000F8}")"', () => {
            expect(parseScript('("\\u{0000000000F8}")', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": "ø",
                        "raw": "\"\\u{0000000000F8}\""
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a, b"', () => {
            expect(parseScript('a, b', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "SequenceExpression",
                        "expressions": [{
                                "type": "Identifier",
                                "name": "a"
                            },
                            {
                                "type": "Identifier",
                                "name": "b"
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse " ({ get "a"() {} })"', () => {
            expect(parseScript('({ get "a"() {} })', {
                ranges: false,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\""
                            },
                            "computed": false,
                            "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": []
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            },
                            "kind": "get",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "use strict";a={b:1,b:2}', () => {
            expect(parseScript(`"use strict";a={b:1,b:2}`, {
                ranges: false,
                raw: true,
                directives: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "Literal",
                            "value": "use strict",
                            "raw": "\"use strict\""
                        },
                        "directive": "use strict"
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "ObjectExpression",
                                "properties": [{
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": false
                                    },
                                    {
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": false
                                    }
                                ]
                            }
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse "use strict"; var a = { get b() {}, get b() {} }', () => {
            expect(parseScript(`"use strict"; var a = { get b() {}, get b() {} }`, {
                ranges: false,
                raw: true,
                directives: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "Literal",
                            "value": "use strict",
                            "raw": "\"use strict\""
                        },
                        "directive": "use strict"
                    },
                    {
                        "type": "VariableDeclaration",
                        "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": {
                                "type": "ObjectExpression",
                                "properties": [{
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": []
                                            },
                                            "generator": false,
                                            "expression": false,
                                            "async": false
                                        },
                                        "kind": "get",
                                        "method": false,
                                        "shorthand": false
                                    },
                                    {
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": []
                                            },
                                            "generator": false,
                                            "expression": false,
                                            "async": false
                                        },
                                        "kind": "get",
                                        "method": false,
                                        "shorthand": false
                                    }
                                ]
                            }
                        }],
                        "kind": "var"
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse "({[a]:()=>{}})"', () => {
            expect(parseScript(`({[a]:()=>{}})`)).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "computed": true,
                            "value": {
                                "type": "ArrowFunctionExpression",
                                "id": null,
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": []
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({"[": 1})"', () => {
            expect(parseScript(`({"[": 1})`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Literal",
                                "value": "[",
                                "raw": "\"[\""
                            },
                            "computed": false,
                            "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "if (1) function a(){} else function b(){}"', () => {
            expect(parseScript(`if (1) function a(){} else function b(){}`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "IfStatement",
                    "test": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                    },
                    "consequent": {
                        "type": "FunctionDeclaration",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    },
                    "alternate": {
                        "type": "FunctionDeclaration",
                        "id": {
                            "type": "Identifier",
                            "name": "b"
                        },
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "[a, b, ...c] = 1"', () => {
            expect(parseScript(`[a, b, ...c] = 1`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "ArrayPattern",
                            "elements": [{
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                {
                                    "type": "RestElement",
                                    "argument": {
                                        "type": "Identifier",
                                        "name": "c"
                                    }
                                }
                            ]
                        },
                        "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "[...[...a[b]]] = c"', () => {
            expect(parseScript(`[...[...a[b]]] = c`)).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "ArrayPattern",
                            "elements": [{
                                "type": "RestElement",
                                "argument": {
                                    "type": "ArrayPattern",
                                    "elements": [{
                                        "type": "RestElement",
                                        "argument": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "b"
                                            }
                                        }
                                    }]
                                }
                            }]
                        },
                        "right": {
                            "type": "Identifier",
                            "name": "c"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "a => b => c => 1"', () => {
            expect(parseScript(`a => b => c => 1`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrowFunctionExpression",
                        "id": null,
                        "params": [{
                            "type": "Identifier",
                            "name": "a"
                        }],
                        "body": {
                            "type": "ArrowFunctionExpression",
                            "id": null,
                            "params": [{
                                "type": "Identifier",
                                "name": "b"
                            }],
                            "body": {
                                "type": "ArrowFunctionExpression",
                                "id": null,
                                "params": [{
                                    "type": "Identifier",
                                    "name": "c"
                                }],
                                "body": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "generator": false,
                                "expression": true,
                                "async": false
                            },
                            "generator": false,
                            "expression": true,
                            "async": false
                        },
                        "generator": false,
                        "expression": true,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "1"', () => {
            expect(parseScript('1', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "1+1"', () => {
            expect(parseScript('1+1', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        },
                        "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
    
        it('should parse "(1+2)*3"', () => {
            expect(parseScript('(1+2)*3', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                            }
                        },
                        "right": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`(1+2)*3 || 4 && 5 && 6 || 7
              ? void 0
              : void 1;`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ConditionalExpression",
                        "test": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                        }
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 3,
                                        "raw": "3"
                                    }
                                },
                                "right": {
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                        "type": "LogicalExpression",
                                        "operator": "&&",
                                        "left": {
                                            "type": "Literal",
                                            "value": 4,
                                            "raw": "4"
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 5,
                                            "raw": "5"
                                        }
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 6,
                                        "raw": "6"
                                    }
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": 7,
                                "raw": "7"
                            }
                        },
                        "consequent": {
                            "type": "UnaryExpression",
                            "operator": "void",
                            "argument": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                            },
                            "prefix": true
                        },
                        "alternate": {
                            "type": "UnaryExpression",
                            "operator": "void",
                            "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            "prefix": true
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "1 === 1 ? 1 : 2 !== 2 ? 2 : 3 == 3 ? 3 : 4 != 4 ? 4 : 5;"', () => {
            expect(parseScript(`1 === 1 ? 1 : 2 !== 2 ? 2 : 3 == 3 ? 3 : 4 != 4 ? 4 : 5;`, {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 56,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 56,
                    "expression": {
                      "type": "ConditionalExpression",
                      "start": 0,
                      "end": 55,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 0,
                        "end": 7,
                        "left": {
                          "type": "Literal",
                          "start": 0,
                          "end": 1,
                          "value": 1,
                          "raw": "1"
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 6,
                          "end": 7,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 10,
                        "end": 11,
                        "value": 1,
                        "raw": "1"
                      },
                      "alternate": {
                        "type": "ConditionalExpression",
                        "start": 14,
                        "end": 55,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 14,
                          "end": 21,
                          "left": {
                            "type": "Literal",
                            "start": 14,
                            "end": 15,
                            "value": 2,
                            "raw": "2"
                          },
                          "operator": "!==",
                          "right": {
                            "type": "Literal",
                            "start": 20,
                            "end": 21,
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "consequent": {
                          "type": "Literal",
                          "start": 24,
                          "end": 25,
                          "value": 2,
                          "raw": "2"
                        },
                        "alternate": {
                          "type": "ConditionalExpression",
                          "start": 28,
                          "end": 55,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 28,
                            "end": 34,
                            "left": {
                              "type": "Literal",
                              "start": 28,
                              "end": 29,
                              "value": 3,
                              "raw": "3"
                            },
                            "operator": "==",
                            "right": {
                              "type": "Literal",
                              "start": 33,
                              "end": 34,
                              "value": 3,
                              "raw": "3"
                            }
                          },
                          "consequent": {
                            "type": "Literal",
                            "start": 37,
                            "end": 38,
                            "value": 3,
                            "raw": "3"
                          },
                          "alternate": {
                            "type": "ConditionalExpression",
                            "start": 41,
                            "end": 55,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 41,
                              "end": 47,
                              "left": {
                                "type": "Literal",
                                "start": 41,
                                "end": 42,
                                "value": 4,
                                "raw": "4"
                              },
                              "operator": "!=",
                              "right": {
                                "type": "Literal",
                                "start": 46,
                                "end": 47,
                                "value": 4,
                                "raw": "4"
                              }
                            },
                            "consequent": {
                              "type": "Literal",
                              "start": 50,
                              "end": 51,
                              "value": 4,
                              "raw": "4"
                            },
                            "alternate": {
                              "type": "Literal",
                              "start": 54,
                              "end": 55,
                              "value": 5,
                              "raw": "5"
                            }
                          }
                        }
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
    
        it('should parse "1 + 2 - 3 * 4 / 5 % 6 << 7 >> 8 >>> 9 ? 1 ^ 1 : ~1 - 1, 2, 3;"', () => {
            expect(parseScript(`1 + 2 - 3 * 4 / 5 % 6 << 7 >> 8 >>> 9 ? 1 ^ 1 : ~1 - 1, 2, 3;`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "SequenceExpression",
                        "expressions": [{
                                "type": "ConditionalExpression",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": ">>>",
                                    "left": {
                                        "type": "BinaryExpression",
                                        "operator": ">>",
                                        "left": {
                                            "type": "BinaryExpression",
                                            "operator": "<<",
                                            "left": {
                                                "type": "BinaryExpression",
                                                "operator": "-",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Literal",
                                                        "value": 1,
                                                        "raw": "1"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 2,
                                                        "raw": "2"
                                                    }
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "%",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "/",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "*",
                                                            "left": {
                                                                "type": "Literal",
                                                                "value": 3,
                                                                "raw": "3"
                                                            },
                                                            "right": {
                                                                "type": "Literal",
                                                                "value": 4,
                                                                "raw": "4"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 6,
                                                        "raw": "6"
                                                    }
                                                }
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 7,
                                                "raw": "7"
                                            }
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 8,
                                            "raw": "8"
                                        }
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 9,
                                        "raw": "9"
                                    }
                                },
                                "consequent": {
                                    "type": "BinaryExpression",
                                    "operator": "^",
                                    "left": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    }
                                },
                                "alternate": {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                        "type": "UnaryExpression",
                                        "operator": "~",
                                        "argument": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        },
                                        "prefix": true
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    }
                                }
                            },
                            {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                            },
                            {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3"
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "var a;"', () => {
            expect(parseScript(`var a;`)).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "init": null
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "var a, b, c;"', () => {
            expect(parseScript(`var a, b, c;`)).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": null
                        },
                        {
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "init": null
                        },
                        {
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "c"
                            },
                            "init": null
                        }
                    ],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "var a = 1;"', () => {
            expect(parseScript(`var a = 1;`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "var a = 1, b = 2, c, d = 1 + 1;"', () => {
            expect(parseScript(`var a = 1, b = 2, c, d = 1 + 1;`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            }
                        },
                        {
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "init": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                            }
                        },
                        {
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "c"
                            },
                            "init": null
                        },
                        {
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "d"
                            },
                            "init": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                }
                            }
                        }
                    ],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "function a(a) {}"', () => {
            expect(parseScript(`function a(a) {}`)).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [{
                        "type": "Identifier",
                        "name": "a"
                    }],
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "function a() {}"', () => {
            expect(parseScript(`function a() {
        }`)).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`var a = function(a, b, c) {
          return a + b + c;
        };`)).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "init": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [{
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                {
                                    "type": "Identifier",
                                    "name": "c"
                                }
                            ],
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "b"
                                            }
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "c"
                                        }
                                    }
                                }]
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "if (1) 1;"', () => {
            expect(parseScript(`if (1) 1;`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "IfStatement",
                    "test": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                    },
                    "consequent": {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    },
                    "alternate": null
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "if (1) 1; else 2;"', () => {
            expect(parseScript(`if (1) 1; else 2;`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "IfStatement",
                    "test": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                    },
                    "consequent": {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    },
                    "alternate": {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`'(' + (a === b ? c : d) + ')' + e;`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                    "type": "Literal",
                                    "value": "(",
                                    "raw": "'('"
                                },
                                "right": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "===",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "b"
                                        }
                                    },
                                    "consequent": {
                                        "type": "Identifier",
                                        "name": "c"
                                    },
                                    "alternate": {
                                        "type": "Identifier",
                                        "name": "d"
                                    }
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": ")",
                                "raw": "')'"
                            }
                        },
                        "right": {
                            "type": "Identifier",
                            "name": "e"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "\0"', () => {
            expect(parseScript(`'\0'`, {
                raw: true,
                directives: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": "\u0000",
                        "raw": "'\u0000'"
                    },
                    "directive": "\u0000"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "0777"', () => {
            expect(parseScript(`0777`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": 511,
                        "raw": "0777"
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({ a: 1, b: 2 })"', () => {
            expect(parseScript(`({ a: 1, b: 2 })`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`var o = {
          a: function() {
            return 1;
          }
        };`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "o"
                        },
                        "init": {
                            "type": "ObjectExpression",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [{
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }]
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }]
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`var o = {
          get a() {
            return 1;
          }
        };`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "o"
                        },
                        "init": {
                            "type": "ObjectExpression",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [{
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }]
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "get",
                                "method": false,
                                "shorthand": false
                            }]
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
    
    
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`var o = {
          set a(a) {
            return 1;
          }
        };`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "o"
                        },
                        "init": {
                            "type": "ObjectExpression",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [{
                                        "type": "Identifier",
                                        "name": "a"
                                    }],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [{
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }]
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "set",
                                "method": false,
                                "shorthand": false
                            }]
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`var o = {
          get: function() {
            return 1;
          }
        };`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "o"
                        },
                        "init": {
                            "type": "ObjectExpression",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "get"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [{
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }]
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }]
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
    
    
    
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`var o = {
          get() {
            return 1;
          }
        };`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "o"
                        },
                        "init": {
                            "type": "ObjectExpression",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "get"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [{
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }]
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "init",
                                "method": true,
                                "shorthand": false
                            }]
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`var o = {
          a: function() {},
          b: function() {},
          c() {},
          d() {},
          get e() {},
          set e(e) {}
        };`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "o"
                        },
                        "init": {
                            "type": "ObjectExpression",
                            "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "c"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "init",
                                    "method": true,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "d"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "init",
                                    "method": true,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "e"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "get",
                                    "method": false,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "e"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [{
                                            "type": "Identifier",
                                            "name": "e"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "set",
                                    "method": false,
                                    "shorthand": false
                                }
                            ]
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "[]"', () => {
            expect(parseScript(`[]`)).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrayExpression",
                        "elements": []
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "[,]"', () => {
            expect(parseScript(`[,]`)).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                            null
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "[,,]"', () => {
            expect(parseScript('[,,]')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                            null,
                            null
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "[1]"', () => {
            expect(parseScript('[1]', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrayExpression",
                        "elements": [{
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "[1, 2]"', () => {
            expect(parseScript('[1, 2]', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrayExpression",
                        "elements": [{
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({ a: 1, })"', () => {
            expect(parseScript('({ a: 1, })', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "computed": false,
                            "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "({ a: 1, b: 2, })"', () => {
            expect(parseScript('({ a: 1, b: 2, })', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "[[1]]"', () => {
            expect(parseScript('[[1]]', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrayExpression",
                        "elements": [{
                            "type": "ArrayExpression",
                            "elements": [{
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            }]
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`var a = 1;
        a * a;
        a / a;
        a % a;
        a + a;
        a - a;
        a << a;
        a >> a;
        a >>> a;
        a < a;
        a > a;
        a <= a;
        a >= a;
        a instanceof a;
        a in a;
        a == a;
        a != a;
        a === a;
        a !== a;
        a & a;
        a ^ a;
        a | a;
        a && a;
        a || a;`, {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 379,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 0,
                    "end": 10,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4,
                        "end": 9,
                        "id": {
                          "type": "Identifier",
                          "start": 4,
                          "end": 5,
                          "name": "a"
                        },
                        "init": {
                          "type": "Literal",
                          "start": 8,
                          "end": 9,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 19,
                    "end": 25,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 19,
                      "end": 24,
                      "left": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 20,
                        "name": "a"
                      },
                      "operator": "*",
                      "right": {
                        "type": "Identifier",
                        "start": 23,
                        "end": 24,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 34,
                    "end": 40,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 34,
                      "end": 39,
                      "left": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 35,
                        "name": "a"
                      },
                      "operator": "/",
                      "right": {
                        "type": "Identifier",
                        "start": 38,
                        "end": 39,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 49,
                    "end": 55,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 49,
                      "end": 54,
                      "left": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 50,
                        "name": "a"
                      },
                      "operator": "%",
                      "right": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 54,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 64,
                    "end": 70,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 64,
                      "end": 69,
                      "left": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
                        "name": "a"
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 79,
                    "end": 85,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 79,
                      "end": 84,
                      "left": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 80,
                        "name": "a"
                      },
                      "operator": "-",
                      "right": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 84,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 94,
                    "end": 101,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 94,
                      "end": 100,
                      "left": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "name": "a"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 110,
                    "end": 117,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 110,
                      "end": 116,
                      "left": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 111,
                        "name": "a"
                      },
                      "operator": ">>",
                      "right": {
                        "type": "Identifier",
                        "start": 115,
                        "end": 116,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 126,
                    "end": 134,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 126,
                      "end": 133,
                      "left": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 127,
                        "name": "a"
                      },
                      "operator": ">>>",
                      "right": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 133,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 143,
                    "end": 149,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 143,
                      "end": 148,
                      "left": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 144,
                        "name": "a"
                      },
                      "operator": "<",
                      "right": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 148,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 158,
                    "end": 164,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 158,
                      "end": 163,
                      "left": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 159,
                        "name": "a"
                      },
                      "operator": ">",
                      "right": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 163,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 173,
                    "end": 180,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 173,
                      "end": 179,
                      "left": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 174,
                        "name": "a"
                      },
                      "operator": "<=",
                      "right": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 189,
                    "end": 196,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 189,
                      "end": 195,
                      "left": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "name": "a"
                      },
                      "operator": ">=",
                      "right": {
                        "type": "Identifier",
                        "start": 194,
                        "end": 195,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 205,
                    "end": 220,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 205,
                      "end": 219,
                      "left": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "name": "a"
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 219,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 229,
                    "end": 236,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 229,
                      "end": 235,
                      "left": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "name": "a"
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 235,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 245,
                    "end": 252,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 245,
                      "end": 251,
                      "left": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 246,
                        "name": "a"
                      },
                      "operator": "==",
                      "right": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 261,
                    "end": 268,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 261,
                      "end": 267,
                      "left": {
                        "type": "Identifier",
                        "start": 261,
                        "end": 262,
                        "name": "a"
                      },
                      "operator": "!=",
                      "right": {
                        "type": "Identifier",
                        "start": 266,
                        "end": 267,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 277,
                    "end": 285,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 277,
                      "end": 284,
                      "left": {
                        "type": "Identifier",
                        "start": 277,
                        "end": 278,
                        "name": "a"
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 284,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 294,
                    "end": 302,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 294,
                      "end": 301,
                      "left": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 295,
                        "name": "a"
                      },
                      "operator": "!==",
                      "right": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 301,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 311,
                    "end": 317,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 311,
                      "end": 316,
                      "left": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 312,
                        "name": "a"
                      },
                      "operator": "&",
                      "right": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 316,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 326,
                    "end": 332,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 326,
                      "end": 331,
                      "left": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "name": "a"
                      },
                      "operator": "^",
                      "right": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 331,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 341,
                    "end": 347,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 341,
                      "end": 346,
                      "left": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 342,
                        "name": "a"
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 346,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 356,
                    "end": 363,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 356,
                      "end": 362,
                      "left": {
                        "type": "Identifier",
                        "start": 356,
                        "end": 357,
                        "name": "a"
                      },
                      "operator": "&&",
                      "right": {
                        "type": "Identifier",
                        "start": 361,
                        "end": 362,
                        "name": "a"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 372,
                    "end": 379,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 372,
                      "end": 378,
                      "left": {
                        "type": "Identifier",
                        "start": 372,
                        "end": 373,
                        "name": "a"
                      },
                      "operator": "||",
                      "right": {
                        "type": "Identifier",
                        "start": 377,
                        "end": 378,
                        "name": "a"
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "new new A();"', () => {
            expect(parseScript('new new A();', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "NewExpression",
                        "callee": {
                            "type": "NewExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "A"
                            },
                            "arguments": []
                        },
                        "arguments": []
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "const a = 1 + 1;"', () => {
            expect(parseScript(`const a = 1 + 1;`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "init": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            }
                        }
                    }],
                    "kind": "const"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "var {a} = 1;"', () => {
            expect(parseScript('var {a} = 1;', {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 12,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 0,
                    "end": 12,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4,
                        "end": 11,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 4,
                          "end": 7,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 5,
                              "end": 6,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 5,
                                "end": 6,
                                "name": "a"
                              },
                              "kind": "init",
                              "value": {
                                "type": "Identifier",
                                "start": 5,
                                "end": 6,
                                "name": "a"
                              }
                            }
                          ]
                        },
                        "init": {
                          "type": "Literal",
                          "start": 10,
                          "end": 11,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ],
                    "kind": "var"
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "var [{a = 1}] = 2;"', () => {
            expect(parseScript('var [{a = 1}] = 2;', {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 18,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 0,
                    "end": 18,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4,
                        "end": 17,
                        "id": {
                          "type": "ArrayPattern",
                          "start": 4,
                          "end": 13,
                          "elements": [
                            {
                              "type": "ObjectPattern",
                              "start": 5,
                              "end": 12,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 6,
                                  "end": 11,
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 6,
                                    "end": 7,
                                    "name": "a"
                                  },
                                  "kind": "init",
                                  "value": {
                                    "type": "AssignmentPattern",
                                    "start": 6,
                                    "end": 11,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 6,
                                      "end": 7,
                                      "name": "a"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 10,
                                      "end": 11,
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "init": {
                          "type": "Literal",
                          "start": 16,
                          "end": 17,
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    ],
                    "kind": "var"
                  }
                ],
                "sourceType": "script"
              });
        });
    
    
        it('should parse "var [{__proto__:a, __proto__:b}] = 1;"', () => {
            expect(parseScript('var [{__proto__:a, __proto__:b}] = 1;', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "ArrayPattern",
                            "elements": [{
                                "type": "ObjectPattern",
                                "properties": [{
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "__proto__"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": false
                                    },
                                    {
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "__proto__"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": false
                                    }
                                ]
                            }]
                        },
                        "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "var {a, b: {c: a}} = 1;"', () => {
            expect(parseScript('var {a, b: {c: a}} = 1;', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "ObjectPattern",
                            "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": true
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "ObjectPattern",
                                        "properties": [{
                                            "type": "Property",
                                            "key": {
                                                "type": "Identifier",
                                                "name": "c"
                                            },
                                            "computed": false,
                                            "value": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "kind": "init",
                                            "method": false,
                                            "shorthand": false
                                        }]
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                }
                            ]
                        },
                        "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "var a, {b: {c: a}} = 1;"', () => {
            expect(parseScript('var a, {b: {c: a}} = 1;', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": null
                        },
                        {
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "ObjectPattern",
                                "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "ObjectPattern",
                                        "properties": [{
                                            "type": "Property",
                                            "key": {
                                                "type": "Identifier",
                                                "name": "c"
                                            },
                                            "computed": false,
                                            "value": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "kind": "init",
                                            "method": false,
                                            "shorthand": false
                                        }]
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                }]
                            },
                            "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            }
                        }
                    ],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "var {let, yield} = 1;"', () => {
            expect(parseScript('(a, b, [c]) => 1', {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 16,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 16,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 0,
                      "end": 16,
                      "id": null,
                      "generator": false,
                      "expression": true,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1,
                          "end": 2,
                          "name": "a"
                        },
                        {
                          "type": "Identifier",
                          "start": 4,
                          "end": 5,
                          "name": "b"
                        },
                        {
                          "type": "ArrayPattern",
                          "start": 7,
                          "end": 10,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 8,
                              "end": 9,
                              "name": "c"
                            }
                          ]
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 15,
                        "end": 16,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
    
    
        it('should parse "try {} catch ({a = 1}) {}"', () => {
            expect(parseScript('try {} catch ({a = 1}) {}', {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 25,
                "body": [
                  {
                    "type": "TryStatement",
                    "start": 0,
                    "end": 25,
                    "block": {
                      "type": "BlockStatement",
                      "start": 4,
                      "end": 6,
                      "body": []
                    },
                    "handler": {
                      "type": "CatchClause",
                      "start": 7,
                      "end": 25,
                      "param": {
                        "type": "ObjectPattern",
                        "start": 14,
                        "end": 21,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 15,
                            "end": 20,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 15,
                              "end": 16,
                              "name": "a"
                            },
                            "kind": "init",
                            "value": {
                              "type": "AssignmentPattern",
                              "start": 15,
                              "end": 20,
                              "left": {
                                "type": "Identifier",
                                "start": 15,
                                "end": 16,
                                "name": "a"
                              },
                              "right": {
                                "type": "Literal",
                                "start": 19,
                                "end": 20,
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          }
                        ]
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 23,
                        "end": 25,
                        "body": []
                      }
                    },
                    "finalizer": null
                  }
                ],
                "sourceType": "script"
              });
        });
    
    
        it('should parse "[ 1, 2, 3, ]"', () => {
            expect(parseScript('[ 1, 2, 3, ]', {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 12,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 12,
                    "expression": {
                      "type": "ArrayExpression",
                      "start": 0,
                      "end": 12,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 2,
                          "end": 3,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 5,
                          "end": 6,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "Literal",
                          "start": 8,
                          "end": 9,
                          "value": 3,
                          "raw": "3"
                        }
                      ]
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
    
        it('should parse "() => 1, 2"', () => {
            expect(parseScript('() => 1, 2', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "SequenceExpression",
                        "expressions": [{
                                "type": "ArrowFunctionExpression",
                                "id": null,
                                "params": [],
                                "body": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "generator": false,
                                "expression": true,
                                "async": false
                            },
                            {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "() => 1 + 2"', () => {
            expect(parseScript('() => 1 + 2', {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 11,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 11,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 0,
                      "end": 11,
                      "id": null,
                      "generator": false,
                      "expression": true,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BinaryExpression",
                        "start": 6,
                        "end": 11,
                        "left": {
                          "type": "Literal",
                          "start": 6,
                          "end": 7,
                          "value": 1,
                          "raw": "1"
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 10,
                          "end": 11,
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
        it('should parse "eval => "use strict"', () => {
            expect(parseScript('eval => "use strict"', {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 20,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 20,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 0,
                      "end": 20,
                      "id": null,
                      "generator": false,
                      "expression": true,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 0,
                          "end": 4,
                          "name": "eval"
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 8,
                        "end": 20,
                        "value": "use strict",
                        "raw": "\"use strict\""
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
    
        it('should parse "a.a *= 1"', () => {
            expect(parseScript('a.a *= 1', {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 8,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 8,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 0,
                      "end": 8,
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 0,
                        "end": 3,
                        "object": {
                          "type": "Identifier",
                          "start": 0,
                          "end": 1,
                          "name": "a"
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2,
                          "end": 3,
                          "name": "a"
                        },
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7,
                        "end": 8,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
        it('should parse "[1].a = 2"', () => {
            expect(parseScript('[1].a = 2', {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 9,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 9,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 0,
                      "end": 9,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 0,
                        "end": 5,
                        "object": {
                          "type": "ArrayExpression",
                          "start": 0,
                          "end": 3,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 1,
                              "end": 2,
                              "value": 1,
                              "raw": "1"
                            }
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4,
                          "end": 5,
                          "name": "a"
                        },
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 8,
                        "end": 9,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "(class {get a() {}})"', () => {
            expect(parseScript('(class {get a() {}})', {
                directives: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ClassExpression",
                        "id": null,
                        "superClass": null,
                        "body": {
                            "type": "ClassBody",
                            "body": [{
                                "type": "MethodDefinition",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": []
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "get",
                                "static": false
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "(class {set a(b) {"use strict";}})"', () => {
            expect(parseScript('(class {set a(b) {"use strict";}})', {
                directives: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ClassExpression",
                        "id": null,
                        "superClass": null,
                        "body": {
                            "type": "ClassBody",
                            "body": [{
                                "type": "MethodDefinition",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [{
                                        "type": "Identifier",
                                        "name": "b"
                                    }],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [{
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "Literal",
                                                "value": "use strict",
                                                "raw": "\"use strict\""
                                            }
                                        }]
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "set",
                                "static": false
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "(class {3() {}})"', () => {
            expect(parseScript('(class {3() {}})', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ClassExpression",
                        "id": null,
                        "superClass": null,
                        "body": {
                            "type": "ClassBody",
                            "body": [{
                                "type": "MethodDefinition",
                                "key": {
                                    "type": "Literal",
                                    "value": 3,
                                    "raw": "3"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": []
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "method",
                                "static": false
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });

        it('should parse "(class{[1+2](){}})"', () => {
            expect(parseScript('(class{[1+2](){}})', {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 18,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 18,
                    "expression": {
                      "type": "ClassExpression",
                      "start": 1,
                      "end": 17,
                      "id": null,
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 6,
                        "end": 17,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 7,
                            "end": 16,
                            "computed": true,
                            "key": {
                              "type": "BinaryExpression",
                              "start": 8,
                              "end": 11,
                              "left": {
                                "type": "Literal",
                                "start": 8,
                                "end": 9,
                                "value": 1,
                                "raw": "1"
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 10,
                                "end": 11,
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "static": false,
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 12,
                              "end": 16,
                              "id": null,
                              "generator": false,
                              "expression": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 14,
                                "end": 16,
                                "body": []
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse "(class extends (a,b) {})"', () => {
            expect(parseScript('(class extends (a,b) {})', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ClassExpression",
                        "id": null,
                        "superClass": {
                            "type": "SequenceExpression",
                            "expressions": [{
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                {
                                    "type": "Identifier",
                                    "name": "b"
                                }
                            ]
                        },
                        "body": {
                            "type": "ClassBody",
                            "body": []
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a[b] = b"', () => {
            expect(parseScript('a[b] = b')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "b"
                            }
                        },
                        "right": {
                            "type": "Identifier",
                            "name": "b"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "(function a() { b; c() });"', () => {
            expect(parseScript('(function a() { b; c() });')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": [{
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "Identifier",
                                        "name": "b"
                                    }
                                },
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "arguments": []
                                    }
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "(function arguments() { });"', () => {
            expect(parseScript('(function arguments() { });')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": {
                            "type": "Identifier",
                            "name": "arguments"
                        },
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "(function a(b, c) { })"', () => {
            expect(parseScript('(function a(b, c) { })')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "params": [{
                                "type": "Identifier",
                                "name": "b"
                            },
                            {
                                "type": "Identifier",
                                "name": "c"
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "(function(a = b){})"', () => {
            expect(parseScript('(function(a = b){})')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [{
                            "type": "AssignmentPattern",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "b"
                            }
                        }],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "(function(a, ...b){})"', () => {
            expect(parseScript('(function(a, ...b){})')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [{
                                "type": "Identifier",
                                "name": "a"
                            },
                            {
                                "type": "RestElement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "b"
                                }
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "(function({a}){})"', () => {
            expect(parseScript('(function({a}){})')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [{
                            "type": "ObjectPattern",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": true
                            }]
                        }],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "(function({a: b, a: c}){})"', () => {
            expect(parseScript('(function({a: b, a: c}){})')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [{
                            "type": "ObjectPattern",
                            "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Identifier",
                                        "name": "c"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                }
                            ]
                        }],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "(function([a]){})"', () => {
            expect(parseScript('(function([a]){})')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [{
                            "type": "ArrayPattern",
                            "elements": [{
                                "type": "Identifier",
                                "name": "a"
                            }]
                        }],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "(function*(){ (function yield(){}); })"', () => {
            expect(parseScript('(function*(){ (function yield(){}); })')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "FunctionExpression",
                                    "id": {
                                        "type": "Identifier",
                                        "name": "yield"
                                    },
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": []
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                }
                            }]
                        },
                        "generator": true,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "(a)"', () => {
            expect(parseScript('(a)')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Identifier",
                        "name": "a"
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "(a, 1)"', () => {
            expect(parseScript('(a, 1)', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "SequenceExpression",
                        "expressions": [{
                                "type": "Identifier",
                                "name": "a"
                            },
                            {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "(a,a)"', () => {
            expect(parseScript('(a,a)')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "SequenceExpression",
                        "expressions": [{
                                "type": "Identifier",
                                "name": "a"
                            },
                            {
                                "type": "Identifier",
                                "name": "a"
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))))"', () => {
            expect(parseScript('((((((((((((((((((((((((((((((((((((((((a))))))))))))))))))))))))))))))))))))))))')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Identifier",
                        "name": "a"
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a;"', () => {
            expect(parseScript('a;')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Identifier",
                        "name": "a"
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "(let[let])"', () => {
            expect(parseScript('(let[let])')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                            "type": "Identifier",
                            "name": "let"
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "let"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "let.let"', () => {
            expect(parseScript('let.let')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "type": "Identifier",
                            "name": "let"
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "let"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "/a/i"', () => {
            expect(parseScript('/a/i')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": /a/i,
                        "regex": {
                            "pattern": "a",
                            "flags": "i"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "/(?=.)*/;"', () => {
            expect(parseScript('/(?=.)*/;')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": /(?=.)*/,
                        "regex": {
                            "pattern": "(?=.)*",
                            "flags": ""
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse ("\\\"")', () => {
            expect(parseScript('("\\\"")', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": "\"",
                        "raw": "\"\\\"\""
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "new a(...b = c)"', () => {
            expect(parseScript('new a(...b = c)')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "NewExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "arguments": [{
                            "type": "SpreadElement",
                            "argument": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "right": {
                                    "type": "Identifier",
                                    "name": "c"
                                }
                            }
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "function a() { new new.target; }"', () => {
            expect(parseScript('function a() { new new.target; }')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "NewExpression",
                                "callee": {
                                    "type": "MetaProperty",
                                    "meta": {
                                        "type": "Identifier",
                                        "name": "new"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "target"
                                    }
                                },
                                "arguments": []
                            }
                        }]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "function a() { new["b"]; }"', () => {
            expect(parseScript('function a() { new["b"]; }', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "NewExpression",
                                "callee": {
                                    "type": "ArrayExpression",
                                    "elements": [{
                                        "type": "Literal",
                                        "value": "b",
                                        "raw": "\"b\""
                                    }]
                                },
                                "arguments": []
                            }
                        }]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
        it('should parse "({})', () => {
            expect(parseScript('({})')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": []
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "+{ }"', () => {
            expect(parseScript('+{ }')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                            "type": "ObjectExpression",
                            "properties": []
                        },
                        "prefix": true
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "({ if: 1 })"', () => {
            expect(parseScript('({ if: 1 })', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "if"
                            },
                            "computed": false,
                            "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({ true: 1 })"', () => {
            expect(parseScript('({ true: 1 })', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "true"
                            },
                            "computed": false,
                            "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "({ a: 1, a: 2 })"', () => {
            expect(parseScript('({ a: 1, a: 2 })', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({ *a() { yield super.a(); } })"', () => {
            expect(parseScript('({ *a() { yield super.a(); } })')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "computed": false,
                            "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [{
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "YieldExpression",
                                            "argument": {
                                                "type": "CallExpression",
                                                "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Super"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    }
                                                },
                                                "arguments": []
                                            },
                                            "delegate": false
                                        }
                                    }]
                                },
                                "generator": true,
                                "expression": false,
                                "async": false
                            },
                            "kind": "init",
                            "method": true,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "function *a(){yield 1}"', () => {
            expect(parseScript('function *a(){yield 1}', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "YieldExpression",
                                "argument": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "delegate": false
                            }
                        }]
                    },
                    "generator": true,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "(class extends 1{})"', () => {
            expect(parseScript('(class extends 1{})', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ClassExpression",
                        "id": null,
                        "superClass": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        },
                        "body": {
                            "type": "ClassBody",
                            "body": []
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "(function*() { yield 1; })"', () => {
            expect(parseScript('(function*() { yield 1; })', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "YieldExpression",
                                    "argument": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    },
                                    "delegate": false
                                }
                            }]
                        },
                        "generator": true,
                        "expression": false,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "var _\u{1EE03}"', () => {
            expect(parseScript('var _\\u{1EE03}')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "_𞸃"
                        },
                        "init": null
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "let.let = a"', () => {
            expect(parseScript('let.let = a')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "type": "Identifier",
                                "name": "let"
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "let"
                            }
                        },
                        "right": {
                            "type": "Identifier",
                            "name": "a"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
    
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`a = {
            b(c, d) {
                return a;
            }
        }
        e = {
            b([{c}]) {
                return c;
            },
            f(){}
        }`)).to.eql({
                "type": "Program",
                "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "ObjectExpression",
                                "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [{
                                                "type": "Identifier",
                                                "name": "c"
                                            },
                                            {
                                                "type": "Identifier",
                                                "name": "d"
                                            }
                                        ],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [{
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                }
                                            }]
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "init",
                                    "method": true,
                                    "shorthand": false
                                }]
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "e"
                            },
                            "right": {
                                "type": "ObjectExpression",
                                "properties": [{
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [{
                                                "type": "ArrayPattern",
                                                "elements": [{
                                                    "type": "ObjectPattern",
                                                    "properties": [{
                                                        "type": "Property",
                                                        "key": {
                                                            "type": "Identifier",
                                                            "name": "c"
                                                        },
                                                        "computed": false,
                                                        "value": {
                                                            "type": "Identifier",
                                                            "name": "c"
                                                        },
                                                        "kind": "init",
                                                        "method": false,
                                                        "shorthand": true
                                                    }]
                                                }]
                                            }],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": [{
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }]
                                            },
                                            "generator": false,
                                            "expression": false,
                                            "async": false
                                        },
                                        "kind": "init",
                                        "method": true,
                                        "shorthand": false
                                    },
                                    {
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "f"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": []
                                            },
                                            "generator": false,
                                            "expression": false,
                                            "async": false
                                        },
                                        "kind": "init",
                                        "method": true,
                                        "shorthand": false
                                    }
                                ]
                            }
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`(1, 2, a)();
        (3, 4, b.a)();`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "SequenceExpression",
                                "expressions": [{
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    },
                                    {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                ]
                            },
                            "arguments": []
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "SequenceExpression",
                                "expressions": [{
                                        "type": "Literal",
                                        "value": 3,
                                        "raw": "3"
                                    },
                                    {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4"
                                    },
                                    {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "a"
                                        }
                                    }
                                ]
                            },
                            "arguments": []
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse "let [a, , ] = (1);"', () => {
            expect(parseScript(`a(
            b(c, c),
            d(c, c),
            e(c, c)
        );`, {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 75,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 75,
                    "expression": {
                      "type": "CallExpression",
                      "start": 0,
                      "end": 74,
                      "callee": {
                        "type": "Identifier",
                        "start": 0,
                        "end": 1,
                        "name": "a"
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 15,
                          "end": 22,
                          "callee": {
                            "type": "Identifier",
                            "start": 15,
                            "end": 16,
                            "name": "b"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 17,
                              "end": 18,
                              "name": "c"
                            },
                            {
                              "type": "Identifier",
                              "start": 20,
                              "end": 21,
                              "name": "c"
                            }
                          ]
                        },
                        {
                          "type": "CallExpression",
                          "start": 36,
                          "end": 43,
                          "callee": {
                            "type": "Identifier",
                            "start": 36,
                            "end": 37,
                            "name": "d"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 38,
                              "end": 39,
                              "name": "c"
                            },
                            {
                              "type": "Identifier",
                              "start": 41,
                              "end": 42,
                              "name": "c"
                            }
                          ]
                        },
                        {
                          "type": "CallExpression",
                          "start": 57,
                          "end": 64,
                          "callee": {
                            "type": "Identifier",
                            "start": 57,
                            "end": 58,
                            "name": "e"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 59,
                              "end": 60,
                              "name": "c"
                            },
                            {
                              "type": "Identifier",
                              "start": 62,
                              "end": 63,
                              "name": "c"
                            }
                          ]
                        }
                      ]
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
    
        it('should parse "a = false; "', () => {
            expect(parseScript(`a = false; `, {
                raw: false
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "right": {
                            "type": "Literal",
                            "value": false
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "a = { get b () {} } "', () => {
            expect(parseScript(`a = { get b () {} } `, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "right": {
                            "type": "ObjectExpression",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": []
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "get",
                                "method": false,
                                "shorthand": false
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "1111"', () => {
            expect(parseScript(`('\u{10FFFF}')`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "Literal",
                        "value": "􏿿",
                        "raw": "'􏿿'"
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "new a(b,c)"', () => {
            expect(parseScript(`new a(b,c)`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "NewExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "arguments": [{
                                "type": "Identifier",
                                "name": "b"
                            },
                            {
                                "type": "Identifier",
                                "name": "c"
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "new a(...b, ...c)"', () => {
            expect(parseScript(`new a(...b, ...c)`)).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "NewExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "arguments": [{
                                "type": "SpreadElement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "b"
                                }
                            },
                            {
                                "type": "SpreadElement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "c"
                                }
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "new a(b, ...c, d)"', () => {
            expect(parseScript(`new a(b, ...c, d)`)).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "NewExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "arguments": [{
                                "type": "Identifier",
                                "name": "b"
                            },
                            {
                                "type": "SpreadElement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "c"
                                }
                            },
                            {
                                "type": "Identifier",
                                "name": "d"
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "new a(...b, c, ...d)"', () => {
            expect(parseScript(`new a(...b, c, ...d)`)).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "NewExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "arguments": [{
                                "type": "SpreadElement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "b"
                                }
                            },
                            {
                                "type": "Identifier",
                                "name": "c"
                            },
                            {
                                "type": "SpreadElement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "d"
                                }
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "({a})"', () => {
            expect(parseScript('({a})')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "computed": false,
                            "value": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": true
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({a, a: 1, c})"', () => {
            expect(parseScript('({a, a: 1, c})', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": true
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "c"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Identifier",
                                    "name": "c"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": true
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "({a(b,...c){}})"', () => {
            expect(parseScript('({a(b,...c){}})')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "computed": false,
                            "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [{
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    {
                                        "type": "RestElement",
                                        "argument": {
                                            "type": "Identifier",
                                            "name": "c"
                                        }
                                    }
                                ],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": []
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            },
                            "kind": "init",
                            "method": true,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({a(b,c){}})"', () => {
            expect(parseScript('({a(b,c){}})', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "computed": false,
                            "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [{
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "c"
                                    }
                                ],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": []
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            },
                            "kind": "init",
                            "method": true,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse "({a(b,c){let d;}})"', () => {
            expect(parseScript('({a(b,c){let d;}})', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "computed": false,
                            "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [{
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "c"
                                    }
                                ],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [{
                                        "type": "VariableDeclaration",
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "id": {
                                                "type": "Identifier",
                                                "name": "d"
                                            },
                                            "init": null
                                        }],
                                        "kind": "let"
                                    }]
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            },
                            "kind": "init",
                            "method": true,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({ get a() { super[1] = 2; } });"', () => {
            expect(parseScript('({ get a() { super[1] = 2; } });', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "computed": false,
                            "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [{
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                    "type": "Super"
                                                },
                                                "property": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                }
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    }]
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            },
                            "kind": "get",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
    
        it('should parse "({ get a() { super[1] = 2; } });"', () => {
            expect(parseScript('({ get a() { super[1] = 2; } });', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "computed": false,
                            "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [{
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                    "type": "Super"
                                                },
                                                "property": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                }
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    }]
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            },
                            "kind": "get",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "(class { constructor() { super.a } });"', () => {
            expect(parseScript('(class { constructor() { super.a } });')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ClassExpression",
                        "id": null,
                        "superClass": null,
                        "body": {
                            "type": "ClassBody",
                            "body": [{
                                "type": "MethodDefinition",
                                "key": {
                                    "type": "Identifier",
                                    "name": "constructor"
                                },
                                "computed": false,
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [{
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Super"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                }
                                            }
                                        }]
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                },
                                "kind": "constructor",
                                "static": false
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse " /****/"', () => {
            expect(parseScript(' /****/')).to.eql({
                "type": "Program",
                "body": [],
                "sourceType": "script"
            });
        });
        it('should parse "null && (a += null)"', () => {
            expect(parseScript('null && (a += null)', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null"
                        },
                        "right": {
                            "type": "AssignmentExpression",
                            "operator": "+=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
                            }
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({a:(b.c)} = 0)"', () => {
            expect(parseScript('({a:(b.c)} = 0)', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "ObjectPattern",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "c"
                                    }
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }]
                        },
                        "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "function a(...b) { }"', () => {
            expect(parseScript('function a(...b) { }')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [{
                        "type": "RestElement",
                        "argument": {
                            "type": "Identifier",
                            "name": "b"
                        }
                    }],
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
        it('should parse "function a(...[]) { }"', () => {
            expect(parseScript('function a(...[]) { }')).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [{
                        "type": "RestElement",
                        "argument": {
                            "type": "ArrayPattern",
                            "elements": []
                        }
                    }],
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "(a, ...[]) => 0', () => {
            expect(parseScript('(a, ...[]) => 0', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrowFunctionExpression",
                        "id": null,
                        "params": [{
                                "type": "Identifier",
                                "name": "a"
                            },
                            {
                                "type": "RestElement",
                                "argument": {
                                    "type": "ArrayPattern",
                                    "elements": []
                                }
                            }
                        ],
                        "body": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                        },
                        "generator": false,
                        "expression": true,
                        "async": false
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse "function a(a) {}', () => {
            expect(parseScript('function a(a) {}', {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [{
                        "type": "Identifier",
                        "name": "a"
                    }],
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "', () => {
            expect(parseScript(`var o = {
                    a: function() {},
                    b: function() {},
                    c() {},
                    d() {},
                    get e() {},
                    set e(e) {}
                  };`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "o"
                        },
                        "init": {
                            "type": "ObjectExpression",
                            "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "c"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "init",
                                    "method": true,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "d"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "init",
                                    "method": true,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "e"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "get",
                                    "method": false,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "e"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [{
                                            "type": "Identifier",
                                            "name": "e"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "kind": "set",
                                    "method": false,
                                    "shorthand": false
                                }
                            ]
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "[function(){}]', () => {
            expect(parseScript(`
                [function(){}]`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ArrayExpression",
                        "elements": [{
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": []
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "', () => {
            expect(parseScript(`var a = 1;
                a * a;
                a / a;
                a % a;
                a + a;
                a - a;
                a << a;
                a >> a;
                a >>> a;
                a < a;
                a > a;
                a <= a;
                a >= a;
                a instanceof a;
                a in a;
                a == a;
                a != a;
                a === a;
                a !== a;
                a & a;
                a ^ a;
                a | a;
                a && a;
                a || a;`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "VariableDeclaration",
                        "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            }
                        }],
                        "kind": "var"
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "<<",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": ">>",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": ">>>",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "<=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": ">=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "instanceof",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "in",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "==",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "!=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "!==",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "&",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "^",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "BinaryExpression",
                            "operator": "|",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "a"
                            }
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse "', () => {
            expect(parseScript(`var a = 1;
                a * a, a / a, a % a, a + a, a - a, a << a, a >> a, a >>> a, a < a, a > a, a <= a, a >= a, a instanceof a, a in a, a == a, a != a, a === a, a !== a, a & a, a ^ a, a | a, a && a, a || a;
                `, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "VariableDeclaration",
                        "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            }
                        }],
                        "kind": "var"
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "SequenceExpression",
                            "expressions": [{
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "%",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "<<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": ">>",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": ">>>",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": ">",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "<=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": ">=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "instanceof",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "in",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "==",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "!=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "===",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "!==",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "&",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "^",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "BinaryExpression",
                                    "operator": "|",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                {
                                    "type": "LogicalExpression",
                                    "operator": "||",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                }
                            ]
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it.skip('should parse "', () => {
            expect(parseScript(`var a = 1;
                a || a && a ? (a | a) +a  : ((a ^ a) & a) ? a + a - a + a + a : a === a ? ((a >>> a) | a) + a : a !== a ? a % a : a != a ? a - a - a : a == a ? a * a * a : a in a ? a >> a >> a : a instanceof a ? a << a << a : a >= a ? a / a / a : a <= a ? a % a % a : a > a ? a * a / a : a < a ? (a >>> a) >> a << a - a + a % a / a * a : a;
                `, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "VariableDeclaration",
                        "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            }
                        }],
                        "kind": "var"
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "ConditionalExpression",
                            "test": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "right": {
                                    "type": "LogicalExpression",
                                    "operator": "&&",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                }
                            },
                            "consequent": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                    "type": "BinaryExpression",
                                    "operator": "|",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                "right": {
                                    "type": "Identifier",
                                    "name": "a"
                                }
                            },
                            "alternate": {
                                "type": "ConditionalExpression",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "&",
                                    "left": {
                                        "type": "BinaryExpression",
                                        "operator": "^",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "a"
                                        }
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                "consequent": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                }
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "a"
                                            }
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "a"
                                        }
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "a"
                                    }
                                },
                                "alternate": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "===",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "a"
                                        }
                                    },
                                    "consequent": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "BinaryExpression",
                                            "operator": "|",
                                            "left": {
                                                "type": "BinaryExpression",
                                                "operator": ">>>",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                }
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "a"
                                            }
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "a"
                                        }
                                    },
                                    "alternate": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                            "type": "BinaryExpression",
                                            "operator": "!==",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "a"
                                            }
                                        },
                                        "consequent": {
                                            "type": "BinaryExpression",
                                            "operator": "%",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "a"
                                            }
                                        },
                                        "alternate": {
                                            "type": "ConditionalExpression",
                                            "test": {
                                                "type": "BinaryExpression",
                                                "operator": "!=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                }
                                            },
                                            "consequent": {
                                                "type": "BinaryExpression",
                                                "operator": "-",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "-",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                }
                                            },
                                            "alternate": {
                                                "type": "ConditionalExpression",
                                                "test": {
                                                    "type": "BinaryExpression",
                                                    "operator": "==",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    }
                                                },
                                                "consequent": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "*",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "a"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "a"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    }
                                                },
                                                "alternate": {
                                                    "type": "ConditionalExpression",
                                                    "test": {
                                                        "type": "BinaryExpression",
                                                        "operator": "in",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "a"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "a"
                                                        }
                                                    },
                                                    "consequent": {
                                                        "type": "BinaryExpression",
                                                        "operator": ">>",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": ">>",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "a"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "a"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "a"
                                                        }
                                                    },
                                                    "alternate": {
                                                        "type": "ConditionalExpression",
                                                        "test": {
                                                            "type": "BinaryExpression",
                                                            "operator": "instanceof",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "a"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "a"
                                                            }
                                                        },
                                                        "consequent": {
                                                            "type": "BinaryExpression",
                                                            "operator": "<<",
                                                            "left": {
                                                                "type": "BinaryExpression",
                                                                "operator": "<<",
                                                                "left": {
                                                                    "type": "Identifier",
                                                                    "name": "a"
                                                                },
                                                                "right": {
                                                                    "type": "Identifier",
                                                                    "name": "a"
                                                                }
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "a"
                                                            }
                                                        },
                                                        "alternate": {
                                                            "type": "ConditionalExpression",
                                                            "test": {
                                                                "type": "BinaryExpression",
                                                                "operator": ">=",
                                                                "left": {
                                                                    "type": "Identifier",
                                                                    "name": "a"
                                                                },
                                                                "right": {
                                                                    "type": "Identifier",
                                                                    "name": "a"
                                                                }
                                                            },
                                                            "consequent": {
                                                                "type": "BinaryExpression",
                                                                "operator": "/",
                                                                "left": {
                                                                    "type": "BinaryExpression",
                                                                    "operator": "/",
                                                                    "left": {
                                                                        "type": "Identifier",
                                                                        "name": "a"
                                                                    },
                                                                    "right": {
                                                                        "type": "Identifier",
                                                                        "name": "a"
                                                                    }
                                                                },
                                                                "right": {
                                                                    "type": "Identifier",
                                                                    "name": "a"
                                                                }
                                                            },
                                                            "alternate": {
                                                                "type": "ConditionalExpression",
                                                                "test": {
                                                                    "type": "BinaryExpression",
                                                                    "operator": "<=",
                                                                    "left": {
                                                                        "type": "Identifier",
                                                                        "name": "a"
                                                                    },
                                                                    "right": {
                                                                        "type": "Identifier",
                                                                        "name": "a"
                                                                    }
                                                                },
                                                                "consequent": {
                                                                    "type": "BinaryExpression",
                                                                    "operator": "%",
                                                                    "left": {
                                                                        "type": "BinaryExpression",
                                                                        "operator": "%",
                                                                        "left": {
                                                                            "type": "Identifier",
                                                                            "name": "a"
                                                                        },
                                                                        "right": {
                                                                            "type": "Identifier",
                                                                            "name": "a"
                                                                        }
                                                                    },
                                                                    "right": {
                                                                        "type": "Identifier",
                                                                        "name": "a"
                                                                    }
                                                                },
                                                                "alternate": {
                                                                    "type": "ConditionalExpression",
                                                                    "test": {
                                                                        "type": "BinaryExpression",
                                                                        "operator": ">",
                                                                        "left": {
                                                                            "type": "Identifier",
                                                                            "name": "a"
                                                                        },
                                                                        "right": {
                                                                            "type": "Identifier",
                                                                            "name": "a"
                                                                        }
                                                                    },
                                                                    "consequent": {
                                                                        "type": "BinaryExpression",
                                                                        "operator": "/",
                                                                        "left": {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "*",
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "name": "a"
                                                                            },
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "name": "a"
                                                                            }
                                                                        },
                                                                        "right": {
                                                                            "type": "Identifier",
                                                                            "name": "a"
                                                                        }
                                                                    },
                                                                    "alternate": {
                                                                        "type": "ConditionalExpression",
                                                                        "test": {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "<",
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "name": "a"
                                                                            },
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "name": "a"
                                                                            }
                                                                        },
                                                                        "consequent": {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "<<",
                                                                            "left": {
                                                                                "type": "BinaryExpression",
                                                                                "operator": ">>",
                                                                                "left": {
                                                                                    "type": "BinaryExpression",
                                                                                    "operator": ">>>",
                                                                                    "left": {
                                                                                        "type": "Identifier",
                                                                                        "name": "a"
                                                                                    },
                                                                                    "right": {
                                                                                        "type": "Identifier",
                                                                                        "name": "a"
                                                                                    }
                                                                                },
                                                                                "right": {
                                                                                    "type": "Identifier",
                                                                                    "name": "a"
                                                                                }
                                                                            },
                                                                            "right": {
                                                                                "type": "BinaryExpression",
                                                                                "operator": "+",
                                                                                "left": {
                                                                                    "type": "BinaryExpression",
                                                                                    "operator": "-",
                                                                                    "left": {
                                                                                        "type": "Identifier",
                                                                                        "name": "a"
                                                                                    },
                                                                                    "right": {
                                                                                        "type": "Identifier",
                                                                                        "name": "a"
                                                                                    }
                                                                                },
                                                                                "right": {
                                                                                    "type": "BinaryExpression",
                                                                                    "operator": "*",
                                                                                    "left": {
                                                                                        "type": "BinaryExpression",
                                                                                        "operator": "/",
                                                                                        "left": {
                                                                                            "type": "BinaryExpression",
                                                                                            "operator": "%",
                                                                                            "left": {
                                                                                                "type": "Identifier",
                                                                                                "name": "a"
                                                                                            },
                                                                                            "right": {
                                                                                                "type": "Identifier",
                                                                                                "name": "a"
                                                                                            }
                                                                                        },
                                                                                        "right": {
                                                                                            "type": "Identifier",
                                                                                            "name": "a"
                                                                                        }
                                                                                    },
                                                                                    "right": {
                                                                                        "type": "Identifier",
                                                                                        "name": "a"
                                                                                    }
                                                                                }
                                                                            }
                                                                        },
                                                                        "alternate": {
                                                                            "type": "Identifier",
                                                                            "name": "a"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse "', () => {
            expect(parseScript(`var a = 1;
                a = -a;
                a = +a;
                a = !a;
                a = ~a;
                a = ++a;
                a = --a;
                a = a++;
                a = a--;
                a = typeof a;
                a = void a;
                a = delete a;`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "VariableDeclaration",
                        "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            }
                        }],
                        "kind": "var"
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UnaryExpression",
                                "operator": "-",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "prefix": true
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UnaryExpression",
                                "operator": "+",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "prefix": true
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "prefix": true
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UnaryExpression",
                                "operator": "~",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "prefix": true
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "prefix": true
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UpdateExpression",
                                "operator": "--",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "prefix": true
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "prefix": false
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UpdateExpression",
                                "operator": "--",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "prefix": false
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "prefix": true
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UnaryExpression",
                                "operator": "void",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "prefix": true
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UnaryExpression",
                                "operator": "delete",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "prefix": true
                            }
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`var a = 1;
                a = -a -a---a;
                a = +a +a+++a;
                a = !!!a;
                a = ~~~a;
                a = typeof typeof a;
                a = void void a;
                a = delete delete a;`, {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 231,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 0,
                    "end": 10,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4,
                        "end": 9,
                        "id": {
                          "type": "Identifier",
                          "start": 4,
                          "end": 5,
                          "name": "a"
                        },
                        "init": {
                          "type": "Literal",
                          "start": 8,
                          "end": 9,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 27,
                    "end": 41,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 27,
                      "end": 40,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 27,
                        "end": 28,
                        "name": "a"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 31,
                        "end": 40,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 31,
                          "end": 38,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 31,
                            "end": 33,
                            "operator": "-",
                            "prefix": true,
                            "argument": {
                              "type": "Identifier",
                              "start": 32,
                              "end": 33,
                              "name": "a"
                            }
                          },
                          "operator": "-",
                          "right": {
                            "type": "UpdateExpression",
                            "start": 35,
                            "end": 38,
                            "operator": "--",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 35,
                              "end": 36,
                              "name": "a"
                            }
                          }
                        },
                        "operator": "-",
                        "right": {
                          "type": "Identifier",
                          "start": 39,
                          "end": 40,
                          "name": "a"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 58,
                    "end": 72,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 58,
                      "end": 71,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "name": "a"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 62,
                        "end": 71,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 62,
                          "end": 69,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 62,
                            "end": 64,
                            "operator": "+",
                            "prefix": true,
                            "argument": {
                              "type": "Identifier",
                              "start": 63,
                              "end": 64,
                              "name": "a"
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "UpdateExpression",
                            "start": 66,
                            "end": 69,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 66,
                              "end": 67,
                              "name": "a"
                            }
                          }
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "name": "a"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 89,
                    "end": 98,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 89,
                      "end": 97,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 90,
                        "name": "a"
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "start": 93,
                        "end": 97,
                        "operator": "!",
                        "prefix": true,
                        "argument": {
                          "type": "UnaryExpression",
                          "start": 94,
                          "end": 97,
                          "operator": "!",
                          "prefix": true,
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 95,
                            "end": 97,
                            "operator": "!",
                            "prefix": true,
                            "argument": {
                              "type": "Identifier",
                              "start": 96,
                              "end": 97,
                              "name": "a"
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 115,
                    "end": 124,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 115,
                      "end": 123,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 115,
                        "end": 116,
                        "name": "a"
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "start": 119,
                        "end": 123,
                        "operator": "~",
                        "prefix": true,
                        "argument": {
                          "type": "UnaryExpression",
                          "start": 120,
                          "end": 123,
                          "operator": "~",
                          "prefix": true,
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 121,
                            "end": 123,
                            "operator": "~",
                            "prefix": true,
                            "argument": {
                              "type": "Identifier",
                              "start": 122,
                              "end": 123,
                              "name": "a"
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 161,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 141,
                      "end": 160,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "name": "a"
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "start": 145,
                        "end": 160,
                        "operator": "typeof",
                        "prefix": true,
                        "argument": {
                          "type": "UnaryExpression",
                          "start": 152,
                          "end": 160,
                          "operator": "typeof",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 159,
                            "end": 160,
                            "name": "a"
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 178,
                    "end": 194,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 178,
                      "end": 193,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
                        "name": "a"
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "start": 182,
                        "end": 193,
                        "operator": "void",
                        "prefix": true,
                        "argument": {
                          "type": "UnaryExpression",
                          "start": 187,
                          "end": 193,
                          "operator": "void",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 192,
                            "end": 193,
                            "name": "a"
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 211,
                    "end": 231,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 211,
                      "end": 230,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 212,
                        "name": "a"
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "start": 215,
                        "end": 230,
                        "operator": "delete",
                        "prefix": true,
                        "argument": {
                          "type": "UnaryExpression",
                          "start": 222,
                          "end": 230,
                          "operator": "delete",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 230,
                            "name": "a"
                          }
                        }
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
    
        it('should parse ""', () => {
            expect(parseScript(`switch (a) {
                    case 1:
                    case 2:
                      break;
                    default:
                  }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "SwitchStatement",
                    "discriminant": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "cases": [{
                            "type": "SwitchCase",
                            "test": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            "consequent": []
                        },
                        {
                            "type": "SwitchCase",
                            "test": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                            },
                            "consequent": [{
                                "type": "BreakStatement",
                                "label": null
                            }]
                        },
                        {
                            "type": "SwitchCase",
                            "test": null,
                            "consequent": []
                        }
                    ]
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`switch (a) {
                    default:
                      b++;
                      break;
                  }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "SwitchStatement",
                    "discriminant": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "cases": [{
                        "type": "SwitchCase",
                        "test": null,
                        "consequent": [{
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "argument": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "prefix": false
                                }
                            },
                            {
                                "type": "BreakStatement",
                                "label": null
                            }
                        ]
                    }]
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "function a({ a: A = 1 + 1, b: { c: { d: D = 1 + 1, e: { f } } } }) {}"', () => {
            expect(parseScript(`function a({ a: A = 1 + 1, b: { c: { d: D = 1 + 1, e: { f } } } }) {}`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [{
                        "type": "ObjectPattern",
                        "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "AssignmentPattern",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "A"
                                    },
                                    "right": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        }
                                    }
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "computed": false,
                                "value": {
                                    "type": "ObjectPattern",
                                    "properties": [{
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "ObjectPattern",
                                            "properties": [{
                                                    "type": "Property",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "d"
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "AssignmentPattern",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "D"
                                                        },
                                                        "right": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Literal",
                                                                "value": 1,
                                                                "raw": "1"
                                                            },
                                                            "right": {
                                                                "type": "Literal",
                                                                "value": 1,
                                                                "raw": "1"
                                                            }
                                                        }
                                                    },
                                                    "kind": "init",
                                                    "method": false,
                                                    "shorthand": false
                                                },
                                                {
                                                    "type": "Property",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "e"
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "ObjectPattern",
                                                        "properties": [{
                                                            "type": "Property",
                                                            "key": {
                                                                "type": "Identifier",
                                                                "name": "f"
                                                            },
                                                            "computed": false,
                                                            "value": {
                                                                "type": "Identifier",
                                                                "name": "f"
                                                            },
                                                            "kind": "init",
                                                            "method": false,
                                                            "shorthand": true
                                                        }]
                                                    },
                                                    "kind": "init",
                                                    "method": false,
                                                    "shorthand": false
                                                }
                                            ]
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": false
                                    }]
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }
                        ]
                    }],
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "function a(a = 1, b) {}"', () => {
            expect(parseScript(`function a(a = 1, b) {}`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [{
                            "type": "AssignmentPattern",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            }
                        },
                        {
                            "type": "Identifier",
                            "name": "b"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`function a([ a = [ b = [c]], d,, ...e]) {}`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [{
                        "type": "ArrayPattern",
                        "elements": [{
                                "type": "AssignmentPattern",
                                "left": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "right": {
                                    "type": "ArrayExpression",
                                    "elements": [{
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "ArrayExpression",
                                            "elements": [{
                                                "type": "Identifier",
                                                "name": "c"
                                            }]
                                        }
                                    }]
                                }
                            },
                            {
                                "type": "Identifier",
                                "name": "d"
                            },
                            null,
                            {
                                "type": "RestElement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "e"
                                }
                            }
                        ]
                    }],
                    "body": {
                        "type": "BlockStatement",
                        "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "var {a: A, b: B = 1, c: { d }} = o;"', () => {
            expect(parseScript(`var {a: A, b: B = 1, c: { d }} = o;`, {
                raw: true,
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "VariableDeclaration",
                    "declarations": [{
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "ObjectPattern",
                            "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Identifier",
                                        "name": "A"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "AssignmentPattern",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "B"
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                },
                                {
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "c"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "ObjectPattern",
                                        "properties": [{
                                            "type": "Property",
                                            "key": {
                                                "type": "Identifier",
                                                "name": "d"
                                            },
                                            "computed": false,
                                            "value": {
                                                "type": "Identifier",
                                                "name": "d"
                                            },
                                            "kind": "init",
                                            "method": false,
                                            "shorthand": true
                                        }]
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                }
                            ]
                        },
                        "init": {
                            "type": "Identifier",
                            "name": "o"
                        }
                    }],
                    "kind": "var"
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`function* a() {
                    yield* yield* 1;
                  }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "YieldExpression",
                                "argument": {
                                    "type": "YieldExpression",
                                    "argument": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    },
                                    "delegate": true
                                },
                                "delegate": true
                            }
                        }]
                    },
                    "generator": true,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "({ a: { b: { c = "it worked" } } } = { a: { b: {} } });"', () => {
            expect(parseScript(`({ a: { b: { c = "it worked" } } } = { a: { b: {} } });`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "ObjectPattern",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "ObjectPattern",
                                    "properties": [{
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "ObjectPattern",
                                            "properties": [{
                                                "type": "Property",
                                                "key": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "computed": false,
                                                "value": {
                                                    "type": "AssignmentPattern",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": "it worked",
                                                        "raw": "\"it worked\""
                                                    }
                                                },
                                                "kind": "init",
                                                "method": false,
                                                "shorthand": true
                                            }]
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": false
                                    }]
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }]
                        },
                        "right": {
                            "type": "ObjectExpression",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "computed": false,
                                "value": {
                                    "type": "ObjectExpression",
                                    "properties": [{
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "ObjectExpression",
                                            "properties": []
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": false
                                    }]
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`if (options != null) {
                    if (options.next) context |= Context.OptionsNext;
                    if (options.jsx) context |= Context.OptionsJSX;
                    if (options.ranges) context |= Context.OptionsRanges;
                    if (options.raw) context |= Context.OptionsRaw;
                    if (options.onComment != null) onComment = options.onComment;
                }
            `, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "IfStatement",
                    "test": {
                        "type": "BinaryExpression",
                        "operator": "!=",
                        "left": {
                            "type": "Identifier",
                            "name": "options"
                        },
                        "right": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null"
                        }
                    },
                    "consequent": {
                        "type": "BlockStatement",
                        "body": [{
                                "type": "IfStatement",
                                "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "options"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "next"
                                    }
                                },
                                "consequent": {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "|=",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "context"
                                        },
                                        "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "Context"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "OptionsNext"
                                            }
                                        }
                                    }
                                },
                                "alternate": null
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "options"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "jsx"
                                    }
                                },
                                "consequent": {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "|=",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "context"
                                        },
                                        "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "Context"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "OptionsJSX"
                                            }
                                        }
                                    }
                                },
                                "alternate": null
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "options"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "ranges"
                                    }
                                },
                                "consequent": {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "|=",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "context"
                                        },
                                        "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "Context"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "OptionsRanges"
                                            }
                                        }
                                    }
                                },
                                "alternate": null
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "options"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "raw"
                                    }
                                },
                                "consequent": {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "|=",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "context"
                                        },
                                        "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "Context"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "OptionsRaw"
                                            }
                                        }
                                    }
                                },
                                "alternate": null
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "!=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "options"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "onComment"
                                        }
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null"
                                    }
                                },
                                "consequent": {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "onComment"
                                        },
                                        "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "options"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "onComment"
                                            }
                                        }
                                    }
                                },
                                "alternate": null
                            }
                        ]
                    },
                    "alternate": null
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(` parser.index++;
                if (!lastIsCR) {
                    parser.column = 0;
                    parser.line++;
                }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "argument": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "parser"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "index"
                                }
                            },
                            "prefix": false
                        }
                    },
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                                "type": "Identifier",
                                "name": "lastIsCR"
                            },
                            "prefix": true
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [{
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "parser"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "column"
                                            }
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                },
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "argument": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "parser"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "line"
                                            }
                                        },
                                        "prefix": false
                                    }
                                }
                            ]
                        },
                        "alternate": null
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`function toHex(code) {
                    if (code < Chars.Zero) return -1;
                    if (code <= Chars.Nine) return code - Chars.Zero;
                    if (code < Chars.UpperA) return -1;
                    if (code <= Chars.UpperF) return code - Chars.UpperA + 10;
                    if (code < Chars.LowerA) return -1;
                    if (code <= Chars.LowerF) return code - Chars.LowerA + 10;
                    return -1;
                }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "toHex"
                    },
                    "params": [{
                        "type": "Identifier",
                        "name": "code"
                    }],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "code"
                                    },
                                    "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "Chars"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "Zero"
                                        }
                                    }
                                },
                                "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "UnaryExpression",
                                        "operator": "-",
                                        "argument": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        },
                                        "prefix": true
                                    }
                                },
                                "alternate": null
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "code"
                                    },
                                    "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "Chars"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "Nine"
                                        }
                                    }
                                },
                                "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "code"
                                        },
                                        "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "Chars"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "Zero"
                                            }
                                        }
                                    }
                                },
                                "alternate": null
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "code"
                                    },
                                    "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "Chars"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "UpperA"
                                        }
                                    }
                                },
                                "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "UnaryExpression",
                                        "operator": "-",
                                        "argument": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        },
                                        "prefix": true
                                    }
                                },
                                "alternate": null
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "code"
                                    },
                                    "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "Chars"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "UpperF"
                                        }
                                    }
                                },
                                "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "code"
                                            },
                                            "right": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "Chars"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "UpperA"
                                                }
                                            }
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 10,
                                            "raw": "10"
                                        }
                                    }
                                },
                                "alternate": null
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "code"
                                    },
                                    "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "Chars"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "LowerA"
                                        }
                                    }
                                },
                                "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "UnaryExpression",
                                        "operator": "-",
                                        "argument": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        },
                                        "prefix": true
                                    }
                                },
                                "alternate": null
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "code"
                                    },
                                    "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "Chars"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "LowerF"
                                        }
                                    }
                                },
                                "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "code"
                                            },
                                            "right": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "Chars"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "LowerA"
                                                }
                                            }
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 10,
                                            "raw": "10"
                                        }
                                    }
                                },
                                "alternate": null
                            },
                            {
                                "type": "ReturnStatement",
                                "argument": {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    },
                                    "prefix": true
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`function consumeDirectiveSemicolon(parser, context) {
                    const result = seek(parser, context);
                
                    if (!hasNext(parser)) return false;
                    switch (nextChar(parser)) {
                        case Chars.Semicolon:
                            advanceOne(parser);
                            return true;
                
                        case Chars.SingleQuote: case Chars.DoubleQuote:
                            return result === Seek.NewLine;
                
                        default:
                            return false;
                    }
                }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "consumeDirectiveSemicolon"
                    },
                    "params": [{
                            "type": "Identifier",
                            "name": "parser"
                        },
                        {
                            "type": "Identifier",
                            "name": "context"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                                "type": "VariableDeclaration",
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "id": {
                                        "type": "Identifier",
                                        "name": "result"
                                    },
                                    "init": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "Identifier",
                                            "name": "seek"
                                        },
                                        "arguments": [{
                                                "type": "Identifier",
                                                "name": "parser"
                                            },
                                            {
                                                "type": "Identifier",
                                                "name": "context"
                                            }
                                        ]
                                    }
                                }],
                                "kind": "const"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "Identifier",
                                            "name": "hasNext"
                                        },
                                        "arguments": [{
                                            "type": "Identifier",
                                            "name": "parser"
                                        }]
                                    },
                                    "prefix": true
                                },
                                "consequent": {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false"
                                    }
                                },
                                "alternate": null
                            },
                            {
                                "type": "SwitchStatement",
                                "discriminant": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "Identifier",
                                        "name": "nextChar"
                                    },
                                    "arguments": [{
                                        "type": "Identifier",
                                        "name": "parser"
                                    }]
                                },
                                "cases": [{
                                        "type": "SwitchCase",
                                        "test": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "Chars"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "Semicolon"
                                            }
                                        },
                                        "consequent": [{
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "name": "advanceOne"
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "name": "parser"
                                                    }]
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "Literal",
                                                    "value": true,
                                                    "raw": "true"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "type": "SwitchCase",
                                        "test": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "Chars"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "SingleQuote"
                                            }
                                        },
                                        "consequent": []
                                    },
                                    {
                                        "type": "SwitchCase",
                                        "test": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "Chars"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "DoubleQuote"
                                            }
                                        },
                                        "consequent": [{
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "===",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "result"
                                                },
                                                "right": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "Seek"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "NewLine"
                                                    }
                                                }
                                            }
                                        }]
                                    },
                                    {
                                        "type": "SwitchCase",
                                        "test": null,
                                        "consequent": [{
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false"
                                            }
                                        }]
                                    }
                                ]
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse ""', () => {
            expect(parseScript(`if (!hasNext(parser));
                switch (nextChar(parser)) {
                    case Chars.Semicolon: advanceOne(parser); break;
                    case Chars.RightBrace: break;
                    default:
                        if (result === Seek.NewLine) 
                        Errors.report(
                            parser.index, parser.line, parser.column,
                            Errors.unexpectedToken(tokenDesc(scan(parser, context))),
                        );
                }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "IfStatement",
                        "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "Identifier",
                                    "name": "hasNext"
                                },
                                "arguments": [{
                                    "type": "Identifier",
                                    "name": "parser"
                                }]
                            },
                            "prefix": true
                        },
                        "consequent": {
                            "type": "EmptyStatement"
                        },
                        "alternate": null
                    },
                    {
                        "type": "SwitchStatement",
                        "discriminant": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "nextChar"
                            },
                            "arguments": [{
                                "type": "Identifier",
                                "name": "parser"
                            }]
                        },
                        "cases": [{
                                "type": "SwitchCase",
                                "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "Chars"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "Semicolon"
                                    }
                                },
                                "consequent": [{
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "Identifier",
                                                "name": "advanceOne"
                                            },
                                            "arguments": [{
                                                "type": "Identifier",
                                                "name": "parser"
                                            }]
                                        }
                                    },
                                    {
                                        "type": "BreakStatement",
                                        "label": null
                                    }
                                ]
                            },
                            {
                                "type": "SwitchCase",
                                "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "Chars"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "RightBrace"
                                    }
                                },
                                "consequent": [{
                                    "type": "BreakStatement",
                                    "label": null
                                }]
                            },
                            {
                                "type": "SwitchCase",
                                "test": null,
                                "consequent": [{
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "===",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "result"
                                        },
                                        "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "Seek"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "NewLine"
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "Errors"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "report"
                                                }
                                            },
                                            "arguments": [{
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "parser"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "index"
                                                    }
                                                },
                                                {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "parser"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "line"
                                                    }
                                                },
                                                {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "parser"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "column"
                                                    }
                                                },
                                                {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                            "type": "Identifier",
                                                            "name": "Errors"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "unexpectedToken"
                                                        }
                                                    },
                                                    "arguments": [{
                                                        "type": "CallExpression",
                                                        "callee": {
                                                            "type": "Identifier",
                                                            "name": "tokenDesc"
                                                        },
                                                        "arguments": [{
                                                            "type": "CallExpression",
                                                            "callee": {
                                                                "type": "Identifier",
                                                                "name": "scan"
                                                            },
                                                            "arguments": [{
                                                                    "type": "Identifier",
                                                                    "name": "parser"
                                                                },
                                                                {
                                                                    "type": "Identifier",
                                                                    "name": "context"
                                                                }
                                                            ]
                                                        }]
                                                    }]
                                                }
                                            ]
                                        }
                                    },
                                    "alternate": null
                                }]
                            }
                        ]
                    }
                ],
                "sourceType": "script"
            });
        });
        it('should parse "Backspace      = 0x08,"', () => {
            expect(parseScript(`Backspace      = 0x08`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "Identifier",
                            "name": "Backspace"
                        },
                        "right": {
                            "type": "Literal",
                            "value": 8,
                            "raw": "0x08"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
        it('should parse ""', () => {
            expect(parseScript(`var a, b, c, d;
                a = !(b(), c(), d());`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "VariableDeclaration",
                        "declarations": [{
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "init": null
                            },
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "init": null
                            },
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "c"
                                },
                                "init": null
                            },
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "d"
                                },
                                "init": null
                            }
                        ],
                        "kind": "var"
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                    "type": "SequenceExpression",
                                    "expressions": [{
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "Identifier",
                                                "name": "b"
                                            },
                                            "arguments": []
                                        },
                                        {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "Identifier",
                                                "name": "c"
                                            },
                                            "arguments": []
                                        },
                                        {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "Identifier",
                                                "name": "d"
                                            },
                                            "arguments": []
                                        }
                                    ]
                                },
                                "prefix": true
                            }
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`var a, b, c, d;
                a = (!(((b()), (c())), (d())));`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "VariableDeclaration",
                        "declarations": [{
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "init": null
                            },
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "init": null
                            },
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "c"
                                },
                                "init": null
                            },
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "d"
                                },
                                "init": null
                            }
                        ],
                        "kind": "var"
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                    "type": "SequenceExpression",
                                    "expressions": [{
                                            "type": "SequenceExpression",
                                            "expressions": [{
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "name": "b"
                                                    },
                                                    "arguments": []
                                                },
                                                {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "arguments": []
                                                }
                                            ]
                                        },
                                        {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "Identifier",
                                                "name": "d"
                                            },
                                            "arguments": []
                                        }
                                    ]
                                },
                                "prefix": true
                            }
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse "({set a ([{b = 1}]) {}});"', () => {
            expect(parseScript(`({set a ([{b = 1}]) {}});`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "ObjectExpression",
                        "properties": [{
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "computed": false,
                            "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [{
                                    "type": "ArrayPattern",
                                    "elements": [{
                                        "type": "ObjectPattern",
                                        "properties": [{
                                            "type": "Property",
                                            "key": {
                                                "type": "Identifier",
                                                "name": "b"
                                            },
                                            "computed": false,
                                            "value": {
                                                "type": "AssignmentPattern",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "b"
                                                },
                                                "right": {
                                                    "type": "Literal",
                                                    "value": 1,
                                                    "raw": "1"
                                                }
                                            },
                                            "kind": "init",
                                            "method": false,
                                            "shorthand": true
                                        }]
                                    }]
                                }],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": []
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            },
                            "kind": "set",
                            "method": false,
                            "shorthand": false
                        }]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`var a = (((((((((("b") + ("c")) + (d())) + ("e")) + ("b")) + (f())) + ("d")) + ("f")) + ("g")) + (h()));
                var i = ((((("b") + (1)) + (d())) + (2)) + ("j"));
                var k = ((((3) + (d())) + (4)) + ("j"));
                var l = (((((5) + (d())) + (6)) + (7)) + ("j"));
                var m = ((((((8) + (d())) + (9)) + ("n")) + (10)) + ("j"));`, {
                raw: true, 
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 369,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 0,
                    "end": 104,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4,
                        "end": 103,
                        "id": {
                          "type": "Identifier",
                          "start": 4,
                          "end": 5,
                          "name": "a"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 9,
                          "end": 102,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 10,
                            "end": 93,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 11,
                              "end": 84,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 12,
                                "end": 75,
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 13,
                                  "end": 66,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 14,
                                    "end": 57,
                                    "left": {
                                      "type": "BinaryExpression",
                                      "start": 15,
                                      "end": 48,
                                      "left": {
                                        "type": "BinaryExpression",
                                        "start": 16,
                                        "end": 39,
                                        "left": {
                                          "type": "BinaryExpression",
                                          "start": 17,
                                          "end": 30,
                                          "left": {
                                            "type": "Literal",
                                            "start": 18,
                                            "end": 21,
                                            "value": "b",
                                            "raw": "\"b\""
                                          },
                                          "operator": "+",
                                          "right": {
                                            "type": "Literal",
                                            "start": 26,
                                            "end": 29,
                                            "value": "c",
                                            "raw": "\"c\""
                                          }
                                        },
                                        "operator": "+",
                                        "right": {
                                          "type": "CallExpression",
                                          "start": 35,
                                          "end": 38,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 35,
                                            "end": 36,
                                            "name": "d"
                                          },
                                          "arguments": []
                                        }
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "start": 44,
                                        "end": 47,
                                        "value": "e",
                                        "raw": "\"e\""
                                      }
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "Literal",
                                      "start": 53,
                                      "end": 56,
                                      "value": "b",
                                      "raw": "\"b\""
                                    }
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "CallExpression",
                                    "start": 62,
                                    "end": 65,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 62,
                                      "end": 63,
                                      "name": "f"
                                    },
                                    "arguments": []
                                  }
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Literal",
                                  "start": 71,
                                  "end": 74,
                                  "value": "d",
                                  "raw": "\"d\""
                                }
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 80,
                                "end": 83,
                                "value": "f",
                                "raw": "\"f\""
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "start": 89,
                              "end": 92,
                              "value": "g",
                              "raw": "\"g\""
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "start": 98,
                            "end": 101,
                            "callee": {
                              "type": "Identifier",
                              "start": 98,
                              "end": 99,
                              "name": "h"
                            },
                            "arguments": []
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 121,
                    "end": 171,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 125,
                        "end": 170,
                        "id": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
                          "name": "i"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 130,
                          "end": 169,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 131,
                            "end": 160,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 132,
                              "end": 153,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 133,
                                "end": 144,
                                "left": {
                                  "type": "Literal",
                                  "start": 134,
                                  "end": 137,
                                  "value": "b",
                                  "raw": "\"b\""
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Literal",
                                  "start": 142,
                                  "end": 143,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "operator": "+",
                              "right": {
                                "type": "CallExpression",
                                "start": 149,
                                "end": 152,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 149,
                                  "end": 150,
                                  "name": "d"
                                },
                                "arguments": []
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "start": 158,
                              "end": 159,
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 165,
                            "end": 168,
                            "value": "j",
                            "raw": "\"j\""
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 188,
                    "end": 228,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 192,
                        "end": 227,
                        "id": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 193,
                          "name": "k"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 197,
                          "end": 226,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 198,
                            "end": 217,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 199,
                              "end": 210,
                              "left": {
                                "type": "Literal",
                                "start": 200,
                                "end": 201,
                                "value": 3,
                                "raw": "3"
                              },
                              "operator": "+",
                              "right": {
                                "type": "CallExpression",
                                "start": 206,
                                "end": 209,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 206,
                                  "end": 207,
                                  "name": "d"
                                },
                                "arguments": []
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "start": 215,
                              "end": 216,
                              "value": 4,
                              "raw": "4"
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 222,
                            "end": 225,
                            "value": "j",
                            "raw": "\"j\""
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 245,
                    "end": 293,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 249,
                        "end": 292,
                        "id": {
                          "type": "Identifier",
                          "start": 249,
                          "end": 250,
                          "name": "l"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 254,
                          "end": 291,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 255,
                            "end": 282,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 256,
                              "end": 275,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 257,
                                "end": 268,
                                "left": {
                                  "type": "Literal",
                                  "start": 258,
                                  "end": 259,
                                  "value": 5,
                                  "raw": "5"
                                },
                                "operator": "+",
                                "right": {
                                  "type": "CallExpression",
                                  "start": 264,
                                  "end": 267,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 264,
                                    "end": 265,
                                    "name": "d"
                                  },
                                  "arguments": []
                                }
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 273,
                                "end": 274,
                                "value": 6,
                                "raw": "6"
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "start": 280,
                              "end": 281,
                              "value": 7,
                              "raw": "7"
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 287,
                            "end": 290,
                            "value": "j",
                            "raw": "\"j\""
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 310,
                    "end": 369,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 314,
                        "end": 368,
                        "id": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 315,
                          "name": "m"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 319,
                          "end": 367,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 320,
                            "end": 358,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 321,
                              "end": 350,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 322,
                                "end": 341,
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 323,
                                  "end": 334,
                                  "left": {
                                    "type": "Literal",
                                    "start": 324,
                                    "end": 325,
                                    "value": 8,
                                    "raw": "8"
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "CallExpression",
                                    "start": 330,
                                    "end": 333,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 330,
                                      "end": 331,
                                      "name": "d"
                                    },
                                    "arguments": []
                                  }
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Literal",
                                  "start": 339,
                                  "end": 340,
                                  "value": 9,
                                  "raw": "9"
                                }
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 346,
                                "end": 349,
                                "value": "n",
                                "raw": "\"n\""
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "start": 355,
                              "end": 357,
                              "value": 10,
                              "raw": "10"
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 363,
                            "end": 366,
                            "value": "j",
                            "raw": "\"j\""
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`function* a() {
                    yield a;
                  }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "YieldExpression",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "delegate": false
                            }
                        }]
                    },
                    "generator": true,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`var a;
                if (b) {
                  a = ((1) + (2));
                } else {
                  a = (3);
                }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "VariableDeclaration",
                        "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": null
                        }],
                        "kind": "var"
                    },
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "Identifier",
                            "name": "b"
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                        }
                                    }
                                }
                            }]
                        },
                        "alternate": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 3,
                                        "raw": "3"
                                    }
                                }
                            }]
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`((function () {
                    (a ? (1) : (2)) != (null);
                  })());`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "BinaryExpression",
                                        "operator": "!=",
                                        "left": {
                                            "type": "ConditionalExpression",
                                            "test": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "consequent": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            },
                                            "alternate": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": null,
                                            "raw": "null"
                                        }
                                    }
                                }]
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        },
                        "arguments": []
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`while (a) {
                    try {} catch (b) {}
                    ((function () {
                      c("d");
                    })());
                  }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "WhileStatement",
                    "test": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                                "type": "TryStatement",
                                "block": {
                                    "type": "BlockStatement",
                                    "body": []
                                },
                                "handler": {
                                    "type": "CatchClause",
                                    "param": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": []
                                    }
                                },
                                "finalizer": null
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "arguments": [{
                                                        "type": "Literal",
                                                        "value": "d",
                                                        "raw": "\"d\""
                                                    }]
                                                }
                                            }]
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    "arguments": []
                                }
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`d: {
                    b: {
                      if (a) break b;
                      if (a) break b;
                      if (a) break b;
                    }
                    if (c) break d;
                  }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "LabeledStatement",
                    "label": {
                        "type": "Identifier",
                        "name": "d"
                    },
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                                "type": "LabeledStatement",
                                "label": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [{
                                            "type": "IfStatement",
                                            "test": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "consequent": {
                                                "type": "BreakStatement",
                                                "label": {
                                                    "type": "Identifier",
                                                    "name": "b"
                                                }
                                            },
                                            "alternate": null
                                        },
                                        {
                                            "type": "IfStatement",
                                            "test": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "consequent": {
                                                "type": "BreakStatement",
                                                "label": {
                                                    "type": "Identifier",
                                                    "name": "b"
                                                }
                                            },
                                            "alternate": null
                                        },
                                        {
                                            "type": "IfStatement",
                                            "test": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "consequent": {
                                                "type": "BreakStatement",
                                                "label": {
                                                    "type": "Identifier",
                                                    "name": "b"
                                                }
                                            },
                                            "alternate": null
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "Identifier",
                                    "name": "c"
                                },
                                "consequent": {
                                    "type": "BreakStatement",
                                    "label": {
                                        "type": "Identifier",
                                        "name": "d"
                                    }
                                },
                                "alternate": null
                            }
                        ]
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "[, , ] = (1);"', () => {
            expect(parseScript(`[, , ] = (1);`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "ArrayPattern",
                            "elements": [
                                null,
                                null
                            ]
                        },
                        "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`{
                    const a = (1);
                  }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "BlockStatement",
                    "body": [{
                        "type": "VariableDeclaration",
                        "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            }
                        }],
                        "kind": "const"
                    }]
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`function a() {}
                var b = ("is a valid variable name");
                b = ({b: "is ok"});
                c.b;
                b: d();`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                        "type": "FunctionDeclaration",
                        "id": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    },
                    {
                        "type": "VariableDeclaration",
                        "declarations": [{
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "init": {
                                "type": "Literal",
                                "value": "is a valid variable name",
                                "raw": "\"is a valid variable name\""
                            }
                        }],
                        "kind": "var"
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "right": {
                                "type": "ObjectExpression",
                                "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Literal",
                                        "value": "is ok",
                                        "raw": "\"is ok\""
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                }]
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "type": "Identifier",
                                "name": "c"
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "b"
                            }
                        }
                    },
                    {
                        "type": "LabeledStatement",
                        "label": {
                            "type": "Identifier",
                            "name": "b"
                        },
                        "body": {
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "Identifier",
                                    "name": "d"
                                },
                                "arguments": []
                            }
                        }
                    }
                ],
                "sourceType": "script"
            });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`((function () {
                    var a, b, c = (1), d, e, f = (2);
                    ((a, b), c) + ((d, e), f);
                  })());`, {
                raw: true,
                ranges: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 141,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 141,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1,
                      "end": 139,
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 2,
                        "end": 136,
                        "id": null,
                        "generator": false,
                        "expression": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 14,
                          "end": 136,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 36,
                              "end": 69,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 40,
                                  "end": 41,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 40,
                                    "end": 41,
                                    "name": "a"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "start": 43,
                                  "end": 44,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 43,
                                    "end": 44,
                                    "name": "b"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "start": 46,
                                  "end": 53,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 46,
                                    "end": 47,
                                    "name": "c"
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "start": 51,
                                    "end": 52,
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "start": 55,
                                  "end": 56,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 55,
                                    "end": 56,
                                    "name": "d"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "start": 58,
                                  "end": 59,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 58,
                                    "end": 59,
                                    "name": "e"
                                  },
                                  "init": null
                                },
                                {
                                  "type": "VariableDeclarator",
                                  "start": 61,
                                  "end": 68,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 61,
                                    "end": 62,
                                    "name": "f"
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "start": 66,
                                    "end": 67,
                                    "value": 2,
                                    "raw": "2"
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 90,
                              "end": 116,
                              "expression": {
                                "type": "BinaryExpression",
                                "start": 90,
                                "end": 115,
                                "left": {
                                  "type": "SequenceExpression",
                                  "start": 91,
                                  "end": 100,
                                  "expressions": [
                                    {
                                      "type": "SequenceExpression",
                                      "start": 92,
                                      "end": 96,
                                      "expressions": [
                                        {
                                          "type": "Identifier",
                                          "start": 92,
                                          "end": 93,
                                          "name": "a"
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 95,
                                          "end": 96,
                                          "name": "b"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 99,
                                      "end": 100,
                                      "name": "c"
                                    }
                                  ]
                                },
                                "operator": "+",
                                "right": {
                                  "type": "SequenceExpression",
                                  "start": 105,
                                  "end": 114,
                                  "expressions": [
                                    {
                                      "type": "SequenceExpression",
                                      "start": 106,
                                      "end": 110,
                                      "expressions": [
                                        {
                                          "type": "Identifier",
                                          "start": 106,
                                          "end": 107,
                                          "name": "d"
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 109,
                                          "end": 110,
                                          "name": "e"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 113,
                                      "end": 114,
                                      "name": "f"
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      },
                      "arguments": []
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
    
        it('should parse ""', () => {
            expect(parseScript(`function* a() {
                    (b.yield)();
                  }`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [{
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "yield"
                                    }
                                },
                                "arguments": []
                            }
                        }]
                    },
                    "generator": true,
                    "expression": false,
                    "async": false
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "if ((!a) || (b())) ;"', () => {
            expect(parseScript(`if ((!a) || (b())) ;`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "IfStatement",
                    "test": {
                        "type": "LogicalExpression",
                        "operator": "||",
                        "left": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "prefix": true
                        },
                        "right": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "arguments": []
                        }
                    },
                    "consequent": {
                        "type": "EmptyStatement"
                    },
                    "alternate": null
                }],
                "sourceType": "script"
            });
        });
    
        it('should parse "a = ({b: 1});"', () => {
            expect(parseScript(`a = ({b: 1});`, {
                raw: true
            })).to.eql({
                "type": "Program",
                "body": [{
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "Identifier",
                            "name": "a"
                        },
                        "right": {
                            "type": "ObjectExpression",
                            "properties": [{
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }]
                        }
                    }
                }],
                "sourceType": "script"
            });
        });
    
    
        it('should parse array rest spread with object', () => {
            expect(parseScript('"use strict"; let foo = function foo() {}', {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 41,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 13,
                    "expression": {
                      "type": "Literal",
                      "start": 0,
                      "end": 12,
                      "value": "use strict",
                      "raw": "\"use strict\""
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 14,
                    "end": 41,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 18,
                        "end": 41,
                        "id": {
                          "type": "Identifier",
                          "start": 18,
                          "end": 21,
                          "name": "foo"
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "start": 24,
                          "end": 41,
                          "id": {
                            "type": "Identifier",
                            "start": 33,
                            "end": 36,
                            "name": "foo"
                          },
                          "generator": false,
                          "expression": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 39,
                            "end": 41,
                            "body": []
                          }
                        }
                      }
                    ],
                    "kind": "let"
                  }
                ],
                "sourceType": "script"
              });
        });

        it('should parse assignment wrapped in parenthesis - in keyword', () => {
            expect(parseScript(`a = b(c in d)`, {
                ranges: true,
                raw: true
            })).to.eql({
                "type": "Program",
                "start": 0,
                "end": 13,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 0,
                    "end": 13,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 0,
                      "end": 13,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 0,
                        "end": 1,
                        "name": "a"
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 4,
                        "end": 13,
                        "callee": {
                          "type": "Identifier",
                          "start": 4,
                          "end": 5,
                          "name": "b"
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "start": 6,
                            "end": 12,
                            "left": {
                              "type": "Identifier",
                              "start": 6,
                              "end": 7,
                              "name": "c"
                            },
                            "operator": "in",
                            "right": {
                              "type": "Identifier",
                              "start": 11,
                              "end": 12,
                              "name": "d"
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "sourceType": "script"
              });
        });
        
    });
"use strict";
const expect = require("chai").expect;
const braille = require("../dist/braillePatternDots.js");
const bpd = braille.bpd;
const bpds = braille.bpds;
const bcode = braille.bcode;
const bchar = braille.bchar;

describe("bcode function test", () => {
  it("bcode(0) should return {false, false, false, false, false, false}", () => {
    let result = bcode(0);
    expect(result).to.deep.equal([false, false, false, false, false, false]);
  });
});
describe("bchar function test", () => {
  it("bchar(0) should return '⠀'", () => {
    let result = bchar(0);
    expect(result).to.equal("⠀");
  });
});

describe("bpd function test", () => {
  it("bpd(1234567890)-invalid parameter- should return about '⠀',", () => {
    let result = bpd(1234567890);
    expect(result).to.deep.equal({
      code: [false, false, false, false, false, false],
      char: "⠀",
    });
  });
});

describe("bpds function test", () => {
  it("bpds(0, 1, 12, 14, 145, 15, 124) should return about '⠀','⠁','⠃','⠉','⠙','⠑','⠋',", () => {
    let result = bpds(0, 1, 12, 14, 145, 15, 124);
    expect(result).to.deep.equal([
      {
        code: [false, false, false, false, false, false],
        char: "⠀",
      },
      {
        code: [true, false, false, false, false, false],
        char: "⠁",
      },
      {
        code: [true, true, false, false, false, false],
        char: "⠃",
      },
      {
        code: [true, false, false, true, false, false],
        char: "⠉",
      },
      {
        code: [true, false, false, true, true, false],
        char: "⠙",
      },
      {
        code: [true, false, false, false, true, false],
        char: "⠑",
      },
      {
        code: [true, true, false, true, false, false],
        char: "⠋",
      },
    ]);
  });
  it("bpds(1245, 125, 24, 245, 4, 45, 3) should return about '⠛','⠓','⠊','⠚','⠈','⠘','⠄',", () => {
    let result = bpds(1245, 125, 24, 245, 4, 45, 3);
    expect(result).to.deep.equal([
      {
        code: [true, true, false, true, true, false],
        char: "⠛",
      },
      {
        code: [true, true, false, false, true, false],
        char: "⠓",
      },
      {
        code: [false, true, false, true, false, false],
        char: "⠊",
      },
      {
        code: [false, true, false, true, true, false],
        char: "⠚",
      },
      {
        code: [false, false, false, true, false, false],
        char: "⠈",
      },
      {
        code: [false, false, false, true, true, false],
        char: "⠘",
      },
      {
        code: [false, false, true, false, false, false],
        char: "⠄",
      },
    ]);
  });
  it("bpds(13, 123, 134, 1345, 135, 1234, 12345) should return about '⠅','⠇','⠍','⠝','⠕','⠏','⠟',", () => {
    let result = bpds(13, 123, 134, 1345, 135, 1234, 12345);
    expect(result).to.deep.equal([
      {
        code: [true, false, true, false, false, false],
        char: "⠅",
      },
      {
        code: [true, true, true, false, false, false],
        char: "⠇",
      },
      {
        code: [true, false, true, true, false, false],
        char: "⠍",
      },
      {
        code: [true, false, true, true, true, false],
        char: "⠝",
      },
      {
        code: [true, false, true, false, true, false],
        char: "⠕",
      },
      {
        code: [true, true, true, true, false, false],
        char: "⠏",
      },
      {
        code: [true, true, true, true, true, false],
        char: "⠟",
      },
    ]);
  });
  it("bpds(1235, 234, 2345, 34, 345, 36, 136) should return about '⠗','⠎','⠞','⠌','⠜','⠤','⠥',", () => {
    let result = bpds(1235, 234, 2345, 34, 345, 36, 136);
    expect(result).to.deep.equal([
      {
        code: [true, true, true, false, true, false],
        char: "⠗",
      },
      {
        code: [false, true, true, true, false, false],
        char: "⠎",
      },
      {
        code: [false, true, true, true, true, false],
        char: "⠞",
      },
      {
        code: [false, false, true, true, false, false],
        char: "⠌",
      },
      {
        code: [false, false, true, true, true, false],
        char: "⠜",
      },
      {
        code: [false, false, true, false, false, true],
        char: "⠤",
      },
      {
        code: [true, false, true, false, false, true],
        char: "⠥",
      },
    ]);
  });
  it("bpds(1236, 1346, 13456, 1356, 12346, 123456, 12356) should return about '⠧','⠭','⠽','⠵','⠯','⠿','⠷',", () => {
    let result = bpds(1236, 1346, 13456, 1356, 12346, 123456, 12356);
    expect(result).to.deep.equal([
      {
        code: [true, true, true, false, false, true],
        char: "⠧",
      },
      {
        code: [true, false, true, true, false, true],
        char: "⠭",
      },
      {
        code: [true, false, true, true, true, true],
        char: "⠽",
      },
      {
        code: [true, false, true, false, true, true],
        char: "⠵",
      },
      {
        code: [true, true, true, true, false, true],
        char: "⠯",
      },
      {
        code: [true, true, true, true, true, true],
        char: "⠿",
      },
      {
        code: [true, true, true, false, true, true],
        char: "⠷",
      },
    ]);
  });
  it("bpds(2346, 23456, 346, 3456, 6, 16, 126) should return about '⠮','⠾','⠬','⠼','⠠','⠡','⠣',", () => {
    let result = bpds(2346, 23456, 346, 3456, 6, 16, 126);
    expect(result).to.deep.equal([
      {
        code: [false, true, true, true, false, true],
        char: "⠮",
      },
      {
        code: [false, true, true, true, true, true],
        char: "⠾",
      },
      {
        code: [false, false, true, true, false, true],
        char: "⠬",
      },
      {
        code: [false, false, true, true, true, true],
        char: "⠼",
      },
      {
        code: [false, false, false, false, false, true],
        char: "⠠",
      },
      {
        code: [true, false, false, false, false, true],
        char: "⠡",
      },
      {
        code: [true, true, false, false, false, true],
        char: "⠣",
      },
    ]);
  });
  it("bpds(146, 1456, 156, 1246, 12456, 1256, 246) should return about '⠩','⠹','⠱','⠫','⠻','⠳','⠪',", () => {
    let result = bpds(146, 1456, 156, 1246, 12456, 1256, 246);
    expect(result).to.deep.equal([
      {
        code: [true, false, false, true, false, true],
        char: "⠩",
      },
      {
        code: [true, false, false, true, true, true],
        char: "⠹",
      },
      {
        code: [true, false, false, false, true, true],
        char: "⠱",
      },
      {
        code: [true, true, false, true, false, true],
        char: "⠫",
      },
      {
        code: [true, true, false, true, true, true],
        char: "⠻",
      },
      {
        code: [true, true, false, false, true, true],
        char: "⠳",
      },
      {
        code: [false, true, false, true, false, true],
        char: "⠪",
      },
    ]);
  });
  it("bpds(2456, 46, 456, 2, 23, 25, 256) should return about '⠺','⠨','⠸','⠂','⠆','⠒','⠲',", () => {
    let result = bpds(2456, 46, 456, 2, 23, 25, 256);
    expect(result).to.deep.equal([
      {
        code: [false, true, false, true, true, true],
        char: "⠺",
      },
      {
        code: [false, false, false, true, false, true],
        char: "⠨",
      },
      {
        code: [false, false, false, true, true, true],
        char: "⠸",
      },
      {
        code: [false, true, false, false, false, false],
        char: "⠂",
      },
      {
        code: [false, true, true, false, false, false],
        char: "⠆",
      },
      {
        code: [false, true, false, false, true, false],
        char: "⠒",
      },
      {
        code: [false, true, false, false, true, true],
        char: "⠲",
      },
    ]);
  });
  it("bpds(26, 235, 2356, 236, 35, 356, 5, 56) should return about '⠢','⠖','⠶','⠦','⠔','⠴','⠐','⠰',", () => {
    let result = bpds(26, 235, 2356, 236, 35, 356, 5, 56);
    expect(result).to.deep.equal([
      {
        code: [false, true, false, false, false, true],
        char: "⠢",
      },
      {
        code: [false, true, true, false, true, false],
        char: "⠖",
      },
      {
        code: [false, true, true, false, true, true],
        char: "⠶",
      },
      {
        code: [false, true, true, false, false, true],
        char: "⠦",
      },
      {
        code: [false, false, true, false, true, false],
        char: "⠔",
      },
      {
        code: [false, false, true, false, true, true],
        char: "⠴",
      },
      {
        code: [false, false, false, false, true, false],
        char: "⠐",
      },
      {
        code: [false, false, false, false, true, true],
        char: "⠰",
      },
    ]);
  });
});
